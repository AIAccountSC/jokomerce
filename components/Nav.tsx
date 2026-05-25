"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { useLang } from "@/lib/i18n";
import { AccentSwitcher } from "./AccentSwitcher";

const LINKS = [
  { href: "/leistungen", de: "Leistungen", en: "Services" },
  { href: "/#prozess", de: "Prozess", en: "Process" },
  { href: "/#cases", de: "Cases", en: "Cases" },
  { href: "/about", de: "Über mich", en: "About" },
  { href: "/#faq", de: "FAQ", en: "FAQ" },
  { href: "/contact", de: "Kontakt", en: "Contact" },
];

export function Nav() {
  const { lang, setLang } = useLang();
  const navRef = useRef<HTMLElement>(null);
  const progRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const s = max > 0 ? window.scrollY / max : 0;
      progRef.current?.style.setProperty("--scroll", String(s));
      navRef.current?.classList.toggle("is-scrolled", window.scrollY > 12);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div ref={progRef} className="nav-progress" />
      <nav ref={navRef} className="nav">
        <div className="nav-inner">
          <Link href="/" className="logo">
            Jokomerce
          </Link>
          <div className="nav-links">
            {LINKS.map((l) => (
              <Link key={l.href} href={l.href}>
                {lang === "en" ? l.en : l.de}
              </Link>
            ))}
          </div>
          <div className="nav-right">
            <AccentSwitcher />
            <div className="lang" role="group" aria-label="Language">
              <button
                type="button"
                onClick={() => setLang("de")}
                className={lang === "de" ? "on" : ""}
                aria-pressed={lang === "de"}
              >
                DE
              </button>
              <button
                type="button"
                onClick={() => setLang("en")}
                className={lang === "en" ? "on" : ""}
                aria-pressed={lang === "en"}
              >
                EN
              </button>
            </div>
            <Link className="cta-sm" href="/contact">
              <span>{lang === "en" ? "Book a call" : "Erstgespräch"}</span> →
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
