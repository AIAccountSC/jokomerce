"use client";

import Link from "next/link";
import { Icon } from "@/components/Icon";
import { FinalCTA } from "@/components/FinalCTA";
import { useT } from "@/lib/i18n";
import { COPY } from "@/lib/copy";
import { JOACHIM } from "@/lib/photos";

export default function About() {
  const t = useT();
  const lang = t({ de: "de", en: "en" });

  return (
    <>
      <header className="page-wrap">
        <div className="page-head">
          <div className="page-head-text" data-reveal>
            <span className="eyebrow">{t(COPY.about.eyebrow)}</span>
            <h1
              dangerouslySetInnerHTML={{
                __html: lang === "en" ? COPY.about.h1En : COPY.about.h1De,
              }}
            />
            <p className="page-head-lead">{t(COPY.about.lead)}</p>
            <div className="actions">
              <Link className="btn solid" href="/contact">
                {t(COPY.cta.bookCall)} <span className="arr">→</span>
              </Link>
              <a
                className="btn"
                href="https://www.linkedin.com/in/joachim-heidel-803b36134/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn <span className="arr">↗</span>
              </a>
            </div>
          </div>
          <div
            className="page-head-visual"
            data-reveal
            style={{
              ["--reveal-delay" as never]: "120ms",
              aspectRatio: "4 / 5",
              maxWidth: 440,
              justifySelf: "end",
            }}
          >
            <img src={JOACHIM.hero} alt="Joachim Heidel" />
          </div>
        </div>
      </header>

      <section>
        <div className="container">
          <div className="sec-head" style={{ padding: 0, marginBottom: 32 }} data-reveal>
            <span className="eyebrow">{t(COPY.about.bg)}</span>
            <h2 className="sec-title">{t(COPY.about.bgH2)}</h2>
          </div>
          <div data-reveal style={{ ["--reveal-delay" as never]: "100ms", maxWidth: "62ch" }}>
            <p
              style={{ fontSize: 17, lineHeight: 1.65, color: "var(--ink-2)" }}
              dangerouslySetInnerHTML={{ __html: lang === "en" ? COPY.about.p1En : COPY.about.p1De }}
            />
            <div className="accent-quote">{t(COPY.about.pull)}</div>
            <p
              style={{ fontSize: 17, lineHeight: 1.65, color: "var(--ink-2)", marginTop: 16 }}
              dangerouslySetInnerHTML={{ __html: lang === "en" ? COPY.about.p2En : COPY.about.p2De }}
            />
            <p
              style={{ fontSize: 17, lineHeight: 1.65, color: "var(--ink-2)", marginTop: 16 }}
              dangerouslySetInnerHTML={{ __html: lang === "en" ? COPY.about.p3En : COPY.about.p3De }}
            />
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="container">
          <div className="sec-head" style={{ padding: 0, marginBottom: 32 }} data-reveal>
            <span className="eyebrow">{t(COPY.about.skillsEy)}</span>
            <h2 className="sec-title">{t(COPY.about.skillsH2)}</h2>
          </div>
          <div
            data-reveal
            style={{
              ["--reveal-delay" as never]: "100ms",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              border: "1px solid var(--rule)",
              borderRadius: 4,
              overflow: "hidden",
              marginTop: 24,
            }}
          >
            {t(COPY.about.skills).map((s, i) => (
              <div
                key={s}
                style={{
                  padding: "18px 22px",
                  borderRight: "1px solid var(--rule)",
                  borderBottom: "1px solid var(--rule)",
                  display: "grid",
                  gridTemplateColumns: "auto 1fr auto",
                  gap: 14,
                  alignItems: "center",
                  background: "var(--bg)",
                  fontSize: 14.5,
                  fontWeight: 500,
                  color: "var(--ink)",
                }}
              >
                <span style={{ fontSize: 11, color: "var(--accent)", letterSpacing: "0.04em" }}>
                  K/{String(i + 1).padStart(2, "0")}
                </span>
                <span>{s}</span>
                <span style={{ color: "var(--accent)", display: "inline-flex" }}>
                  <Icon name="check" style={{ width: 18, height: 18 }} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="sec-head" style={{ padding: 0, marginBottom: 32 }} data-reveal>
            <span className="eyebrow">{t(COPY.about.stationsEy)}</span>
            <h2 className="sec-title">{t(COPY.about.stationsH2)}</h2>
          </div>
          <div className="timeline" data-reveal style={{ ["--reveal-delay" as never]: "100ms", marginTop: 0 }}>
            {COPY.home.aboutBlock.timeline.map((tl) => (
              <div className="tl" key={tl.date.de}>
                <span className="date">{t(tl.date)}</span>
                <span
                  className="pos"
                  dangerouslySetInnerHTML={{
                    __html: `${lang === "en" ? tl.posEn : tl.posDe}<small>${t(tl.small)}</small>`,
                  }}
                />
                <span className="org">{t(tl.org)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="container">
          <div className="sec-head" style={{ padding: 0, marginBottom: 32 }} data-reveal>
            <span className="eyebrow">{t(COPY.about.eduEy)}</span>
            <h2 className="sec-title">{t(COPY.about.eduH2)}</h2>
          </div>
          <div className="bullets" data-reveal style={{ ["--reveal-delay" as never]: "100ms" }}>
            <div className="bullet">
              <span className="check"><Icon name="check" /></span>
              <span>
                <b>{t(COPY.about.eduMaster)}</b>
                <br />
                <span style={{ color: "var(--ink-2)", fontSize: 14 }}>{t(COPY.about.eduMasterOrg)}</span>
              </span>
            </div>
            <div className="bullet">
              <span className="check"><Icon name="check" /></span>
              <span>
                <b>{t(COPY.about.eduBachelor)}</b>
                <br />
                <span style={{ color: "var(--ink-2)", fontSize: 14 }}>{t(COPY.about.eduBachelorOrg)}</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
