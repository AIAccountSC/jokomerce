"use client";

import { useEffect, useRef } from "react";

/**
 * KPI counter — counts from 0 up to data-count when scrolled into view.
 * Mirrors the count-up effect from Jokomerce.html.
 */
export function KPI({
  target,
  suffix = "",
  display,
}: {
  target: number;
  suffix?: string;
  display?: string; // for non-numeric KPIs like "DE · US" / "P&L"
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || display) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const dur = 1400;
          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min(1, (now - start) / dur);
            const eased = 1 - Math.pow(1 - t, 3);
            const val = Math.round(target * eased);
            el.textContent = val.toLocaleString("de-DE").replace(/,/g, " ") + suffix;
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target, suffix, display]);

  return (
    <div className="num" ref={ref}>
      {display ?? `0${suffix}`}
    </div>
  );
}

/**
 * Wrap a headline so each word fades in with a staggered blur reveal.
 * Pure CSS — wraps text nodes (and any inline children) word-by-word.
 */
export function HeadlineReveal({
  as: Tag = "h2",
  className = "",
  children,
  style,
}: {
  as?: "h1" | "h2" | "h3";
  className?: string;
  children: string | (string | React.ReactElement)[];
  style?: React.CSSProperties;
}) {
  const items = Array.isArray(children) ? children : [children];
  let idx = 0;
  const wrap = (node: string | React.ReactElement, i: number): React.ReactNode => {
    if (typeof node === "string") {
      return node.split(/(\s+)/).map((part, j) => {
        if (!part) return null;
        if (/^\s+$/.test(part)) return part;
        const wi = idx++;
        return (
          <span key={`${i}-${j}`} className="word" style={{ ["--wi" as never]: wi }}>
            {part}
          </span>
        );
      });
    }
    return node; // pre-styled inline element (e.g. <span class="acc">…)
  };
  return (
    <Tag className={`h-reveal ${className}`} style={style}>
      {items.map((n, i) => wrap(n, i))}
    </Tag>
  );
}
