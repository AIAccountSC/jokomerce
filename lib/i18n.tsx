"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "de" | "en";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
};

const LangCtx = createContext<Ctx>({ lang: "de", setLang: () => {} });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("de");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("joko-lang");
      if (stored === "en" || stored === "de") setLangState(stored);
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("lang", lang);
    document.body.dataset.lang = lang;
    try {
      localStorage.setItem("joko-lang", lang);
    } catch {}
  }, [lang]);

  const setLang = useCallback((l: Lang) => setLangState(l), []);
  const value = useMemo(() => ({ lang, setLang }), [lang, setLang]);

  return <LangCtx.Provider value={value}>{children}</LangCtx.Provider>;
}

export function useLang() {
  return useContext(LangCtx);
}

/**
 * Pick the value for the active language from a `{ de, en }` shape.
 * Pass either a string pair or a React node pair; useful inline.
 */
export function T<TV>({ de, en }: { de: TV; en: TV }): TV {
  const { lang } = useLang();
  return lang === "en" ? en : de;
}

/**
 * Hook variant — returns the active value from a `{ de, en }` shape.
 * Pass either strings or React nodes.
 */
export function useT() {
  const { lang } = useLang();
  return function pick<TV>(pair: { de: TV; en: TV }): TV {
    return lang === "en" ? pair.en : pair.de;
  };
}
