"use client";

import Link from "next/link";
import { Icon } from "@/components/Icon";
import { FinalCTA } from "@/components/FinalCTA";
import type { Service } from "@/lib/services";
import { useT } from "@/lib/i18n";
import { COPY } from "@/lib/copy";

export function ServiceDetail({ service: s }: { service: Service }) {
  const t = useT();
  return (
    <>
      <header className="page-wrap">
        <div className="page-head">
          <div className="page-head-text" data-reveal>
            <span className="eyebrow">{t(s.eyebrow)}</span>
            <h1>{t(s.h1)}</h1>
            <p
              className="page-head-lead"
              dangerouslySetInnerHTML={{ __html: t(s.lead) }}
            />
            <div className="actions">
              <Link className="btn solid" href="/contact">
                {t(COPY.cta.bookCall)} <span className="arr">→</span>
              </Link>
              <Link className="btn" href="/leistungen">
                {t(COPY.servicePage.allServices)} <span className="arr">↓</span>
              </Link>
            </div>
          </div>
          <div className="page-head-visual" data-reveal style={{ ["--reveal-delay" as never]: "120ms" }}>
            <img src={s.heroImg} alt={t(s.h1)} />
          </div>
        </div>
      </header>

      {/* ANLASS */}
      <section>
        <div className="container">
          <div className="two-col">
            <div data-reveal>
              <div className="sec-head" style={{ marginBottom: 0, padding: 0 }}>
                <span className="eyebrow">{t(COPY.servicePage.eyAnlass)}</span>
                <h2 className="sec-title">{t(s.anlassH2)}</h2>
              </div>
            </div>
            <div data-reveal style={{ ["--reveal-delay" as never]: "100ms" }}>
              <p
                style={{ fontSize: 17, lineHeight: 1.65, color: "var(--ink-2)", maxWidth: "60ch" }}
                dangerouslySetInnerHTML={{ __html: t(s.anlassText) }}
              />
              <div className="bullets" style={{ marginTop: 32 }}>
                {t(s.anlassBullets).map((b) => (
                  <div key={b} className="bullet">
                    <span className="check"><Icon name="check" /></span>
                    <span dangerouslySetInnerHTML={{ __html: b }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ERGEBNIS */}
      <section className="alt">
        <div className="container">
          <div className="sec-head" style={{ padding: 0, marginBottom: 40 }} data-reveal>
            <span className="eyebrow">{t(COPY.servicePage.eyErgebnis)}</span>
            <h2 className="sec-title">{t(s.ergH2)}</h2>
          </div>
          <div className="bullets" data-reveal style={{ ["--reveal-delay" as never]: "100ms" }}>
            {t(s.ergBullets).map((b) => (
              <div key={b} className="bullet">
                <span className="check"><Icon name="check" /></span>
                <span dangerouslySetInnerHTML={{ __html: b }} />
              </div>
            ))}
          </div>
          <div
            className="highlight"
            data-reveal
            style={{ ["--reveal-delay" as never]: "200ms" }}
            dangerouslySetInnerHTML={{ __html: t(s.highlight) }}
          />
        </div>
      </section>

      {/* VORGEHEN */}
      <section>
        <div className="container">
          <div className="sec-head" style={{ padding: 0, marginBottom: 40 }} data-reveal>
            <span className="eyebrow">{t(COPY.servicePage.eyVorgehen)}</span>
            <h2 className="sec-title">{t(s.vorH2)}</h2>
            <p className="sec-intro">{t(s.vorIntro)}</p>
          </div>
          <div className="steps">
            {s.steps.map((step, i) => (
              <div
                key={step.num}
                className="step"
                data-reveal
                style={{ ["--reveal-delay" as never]: `${i * 80}ms` }}
              >
                <div className="step-num">{step.num}</div>
                <h3>{t(step.h3)}</h3>
                <p>{t(step.p)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="alt">
        <div className="container">
          <div className="sec-head" style={{ padding: 0, marginBottom: 40 }} data-reveal>
            <span className="eyebrow">{t(COPY.servicePage.eyDeliv)}</span>
            <h2 className="sec-title">{t(s.delivH2)}</h2>
          </div>
          <div className="deliverable-grid" data-reveal style={{ ["--reveal-delay" as never]: "100ms" }}>
            {s.delivs.map((d) => (
              <div key={d.lbl} className="deliverable">
                <span className="lbl">{d.lbl}</span>
                <h4>{t(d.h4)}</h4>
                <p>{t(d.p)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SETUP & DAUER */}
      <section>
        <div className="container">
          <div className="sec-head" style={{ padding: 0, marginBottom: 32 }} data-reveal>
            <span className="eyebrow">{t(COPY.servicePage.eySetup)}</span>
            <h2 className="sec-title">{t(COPY.servicePage.setupH2)}</h2>
          </div>
          <div className="info-row" data-reveal style={{ ["--reveal-delay" as never]: "100ms" }}>
            {s.info.map((i, idx) => (
              <div key={idx} className="info-cell">
                <div className="lbl">{t(i.lbl)}</div>
                <div className="val">
                  {t(i.val)}
                  <small>{t(i.small)}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="alt">
        <div className="container">
          <div className="sec-head" style={{ padding: 0, marginBottom: 40 }} data-reveal>
            <span className="eyebrow">{t(COPY.servicePage.eyRelated)}</span>
            <h2 className="sec-title">{t(COPY.servicePage.relatedH2)}</h2>
            <p className="sec-intro">{t(COPY.servicePage.relatedIntro)}</p>
          </div>
          <div className="related-grid" data-reveal style={{ ["--reveal-delay" as never]: "100ms" }}>
            {s.related.map((r) => (
              <Link key={r.slug} className="related-card" href={`/leistungen/${r.slug}`}>
                <span className="label">{t(r.label)}</span>
                <h4>{t(r.h4)}</h4>
                <span className="arr">↗</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
