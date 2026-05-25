"use client";

import { useEffect, useRef, useState } from "react";
import { useT } from "@/lib/i18n";
import { COPY } from "@/lib/copy";
import { HeadlineReveal } from "./Reveals";

export function ProcessSection() {
  const t = useT();
  const lang = t({ de: "de", en: "en" });
  const PHASES = COPY.home.process.phases;

  const [active, setActive] = useState(1);
  const [swapping, setSwapping] = useState(false);
  const triggerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const phase = parseInt((e.target as HTMLElement).dataset.phase || "1", 10);
          setActive((cur) => {
            if (cur === phase) return cur;
            setSwapping(true);
            setTimeout(() => setSwapping(false), 240);
            return phase;
          });
        });
      },
      { threshold: 0, rootMargin: "-50% 0px -50% 0px" }
    );
    triggerRefs.current.forEach((tr) => tr && io.observe(tr));
    return () => io.disconnect();
  }, []);

  return (
    <section id="prozess" className="process-section">
      <div className="sec-head">
        <span className="eyebrow" data-reveal>{t(COPY.home.process.eyebrow)}</span>
        <HeadlineReveal
          as="h2"
          className="sec-title"
          style={{ ["--reveal-delay" as never]: "100ms" } as never}
        >
          {[
            <span key="m" className="muted">{t(COPY.home.process.h2Pre)}</span>,
            t(COPY.home.process.h2Tail),
          ]}
        </HeadlineReveal>
        <p className="sec-intro" data-reveal style={{ ["--reveal-delay" as never]: "200ms" }}>
          {t(COPY.home.process.intro)}
        </p>
      </div>

      <div className="process-scroll">
        <div className="process-sticky">
          <div className="process-frame">
            <div className="process-left">
              <div className="process-bignum">
                <span className={`num ${swapping ? "swap-out" : ""}`}>
                  {String(active).padStart(2, "0")}
                </span>
                <span className="of">/ 04</span>
              </div>
              <div className="process-progress">
                {[1, 2, 3, 4].map((p) => (
                  <div
                    key={p}
                    className={`dot ${p <= active ? "active" : ""} ${p === active ? "current" : ""}`}
                  />
                ))}
              </div>
              <h3 className={`process-title ${swapping ? "swap-out" : ""}`}>
                {t(PHASES[active - 1].title)}
              </h3>
            </div>

            <div className="process-right">
              {PHASES.map((p, i) => (
                <div key={i} className={`phase-card ${active === i + 1 ? "active" : ""}`}>
                  <p
                    dangerouslySetInnerHTML={{ __html: lang === "en" ? p.bodyEn : p.bodyDe }}
                  />
                  <ul>
                    {t(p.bullets).map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                  <div className="phase-deliverable">
                    <span className="lbl">{t(p.delivLbl)}</span>
                    <span className="val">{t(p.delivVal)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {PHASES.map((_, i) => (
          <div
            key={i}
            ref={(el) => {
              triggerRefs.current[i] = el;
            }}
            className="phase-trigger"
            data-phase={i + 1}
          />
        ))}

        <div className="process-timeline">
          {PHASES.map((p, i) => (
            <div
              key={i}
              className="phase-step"
              data-num={String(i + 1).padStart(2, "0")}
              data-reveal
            >
              <div className="ph-meta">Phase {String(i + 1).padStart(2, "0")}</div>
              <h3>{t(p.title)}</h3>
              <div
                className="ph-desc"
                dangerouslySetInnerHTML={{ __html: lang === "en" ? p.bodyEn : p.bodyDe }}
              />
              <ul className="ph-list">
                {t(p.bullets).map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <div className="ph-deliv">
                <span className="ph-deliv-lbl">{t(p.delivLbl)}</span>
                <span className="ph-deliv-val">{t(p.delivVal)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
