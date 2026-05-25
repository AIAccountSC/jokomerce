"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

const LINKS = [
  { href: "/#leistungen", label: "Leistungen" },
  { href: "/#cases", label: "Cases" },
  { href: "/#about", label: "Über mich" },
  { href: "/#kontakt", label: "Kontakt" },
];

export function Nav() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const progRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const s = max > 0 ? window.scrollY / max : 0;
      progRef.current?.style.setProperty("--scroll", String(s));
      wrapRef.current?.classList.toggle("scrolled", window.scrollY > 24);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div ref={progRef} className="nav-progress" />
      <div ref={wrapRef} className="nav-wrap">
        <nav className="nav">
          <Link href="/#top" className="brand">
            <span className="mark">J</span>
            <span className="brand-text">
              <span className="name">Jokomerce</span>
              <span className="sub">MARKETPLACE · D2C · P&amp;L</span>
            </span>
          </Link>
          <div className="nav-links">
            {LINKS.map((l) => (
              <Link key={l.href} href={l.href}>
                {l.label}
              </Link>
            ))}
          </div>
          <Link href="/#kontakt" className="cta-pill">
            Erstgespräch anfragen
          </Link>
        </nav>
      </div>
    </>
  );
}
