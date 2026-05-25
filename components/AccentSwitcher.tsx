"use client";

import { useEffect, useState } from "react";

type Accent = "yellow" | "green" | "blue" | "red" | "black";

const ACCENTS: { id: Accent; label: string; swatch: string }[] = [
  { id: "yellow", label: "Yellow", swatch: "#E8B900" },
  { id: "green", label: "Green", swatch: "#1F7A3F" },
  { id: "blue", label: "Blue", swatch: "#1B47C9" },
  { id: "red", label: "Red", swatch: "#C03B1E" },
  { id: "black", label: "Black", swatch: "#0A0A0A" },
];

export function AccentSwitcher() {
  const [open, setOpen] = useState(false);
  const [accent, setAccent] = useState<Accent>("yellow");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("joko-accent") as Accent | null;
      if (stored && ACCENTS.find((a) => a.id === stored)) setAccent(stored);
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-accent", accent);
    try {
      localStorage.setItem("joko-accent", accent);
    } catch {}
  }, [accent]);

  return (
    <div className={`acc-switch ${open ? "is-open" : ""}`} aria-label="Accent color">
      <button
        type="button"
        className="acc-toggle"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        title="Akzentfarbe wählen"
      >
        <span
          className="acc-swatch"
          style={{ background: ACCENTS.find((a) => a.id === accent)!.swatch }}
        />
        <span className="acc-text">Akzent</span>
      </button>
      {open && (
        <div className="acc-panel" role="menu">
          {ACCENTS.map((a) => (
            <button
              key={a.id}
              type="button"
              role="menuitemradio"
              aria-checked={accent === a.id}
              className={`acc-opt ${accent === a.id ? "is-on" : ""}`}
              onClick={() => {
                setAccent(a.id);
                setOpen(false);
              }}
            >
              <span className="acc-swatch" style={{ background: a.swatch }} />
              <span>{a.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
