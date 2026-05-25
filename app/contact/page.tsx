"use client";

import { useState } from "react";
import { FinalCTA } from "@/components/FinalCTA";
import { useT } from "@/lib/i18n";
import { COPY } from "@/lib/copy";

const CHANNELS = [
  "Amazon", "Otto", "Kaufland", "eBay", "bol.com", "Walmart", "Shopify", "MediaMarkt",
];

export default function Contact() {
  const t = useT();
  const lang = t({ de: "de", en: "en" });
  const [channels, setChannels] = useState<Record<string, boolean>>({});

  const toggle = (c: string) =>
    setChannels((prev) => ({ ...prev, [c]: !prev[c] }));

  return (
    <>
      <header className="page-wrap">
        <div className="page-head">
          <div className="page-head-text" data-reveal>
            <span className="eyebrow">{t(COPY.contactPage.eyebrow)}</span>
            <h1
              dangerouslySetInnerHTML={{
                __html: lang === "en" ? COPY.contactPage.h1En : COPY.contactPage.h1De,
              }}
            />
            <p
              className="page-head-lead"
              dangerouslySetInnerHTML={{ __html: t(COPY.contactPage.lead) }}
            />
            <div className="actions">
              <a className="btn solid" href="mailto:hello@jokomerce.de">
                hello@jokomerce.de <span className="arr">→</span>
              </a>
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
          <div className="page-head-visual" data-reveal style={{ ["--reveal-delay" as never]: "120ms" }}>
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&h=900&fit=crop&q=80"
              alt="Kontakt"
            />
          </div>
        </div>
      </header>

      <section>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "5fr 7fr",
              gap: "clamp(32px, 4vw, 64px)",
              alignItems: "start",
            }}
          >
            <aside
              data-reveal
              style={{ background: "var(--paper)", borderRadius: 4, padding: 32 }}
            >
              <h3 style={{ fontSize: 24, fontWeight: 600, letterSpacing: "-0.025em", marginBottom: 12 }}>
                {t(COPY.contactPage.infoH3)}
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--ink-2)", marginBottom: 24 }}>
                {t(COPY.contactPage.infoP)}
              </p>
              <dl
                style={{
                  display: "grid",
                  gridTemplateColumns: "110px 1fr",
                  gap: "12px 0",
                  fontSize: 14.5,
                  margin: 0,
                }}
              >
                <dt style={dtStyle}>{t(COPY.contactPage.labels.email)}</dt>
                <dd style={ddStyle}>
                  <a href="mailto:hello@jokomerce.de">hello@jokomerce.de</a>
                </dd>
                <dt style={dtStyle}>LinkedIn</dt>
                <dd style={ddStyle}>
                  <a
                    href="https://www.linkedin.com/in/joachim-heidel-803b36134/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    /in/joachim-heidel ↗
                  </a>
                </dd>
                <dt style={dtStyle}>{t(COPY.contactPage.labels.location)}</dt>
                <dd style={ddStyle}>Köln / Bonn · Remote</dd>
                <dt style={dtStyle}>{t(COPY.contactPage.labels.markets)}</dt>
                <dd style={ddStyle}>DE · EU · US</dd>
                <dt style={dtStyle}>{t(COPY.contactPage.labels.avail)}</dt>
                <dd style={ddStyle}>{t(COPY.contactPage.labels.availVal)}</dd>
              </dl>
            </aside>

            <form
              data-reveal
              style={{
                ["--reveal-delay" as never]: "100ms",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 0,
              }}
              onSubmit={(e) => {
                e.preventDefault();
                alert(t(COPY.cta.replyNote));
              }}
            >
              <div className="field">
                <label>{t(COPY.contactPage.labels.name)}</label>
                <input type="text" placeholder="Max Mustermann" required />
              </div>
              <div className="field">
                <label>{t(COPY.contactPage.labels.company)}</label>
                <input type="text" placeholder="Brand GmbH" />
              </div>
              <div className="field">
                <label>{t(COPY.contactPage.labels.email)}</label>
                <input type="email" placeholder="max@brand.de" required />
              </div>
              <div className="field">
                <label>{t(COPY.contactPage.labels.position)}</label>
                <input type="text" placeholder={t(COPY.contactPage.labels.positionPh)} />
              </div>

              <div className="field full">
                <label>{t(COPY.contactPage.labels.activeCh)}</label>
                <div style={{ paddingTop: 8, display: "flex", flexWrap: "wrap", gap: "8px 12px" }}>
                  {CHANNELS.map((c) => {
                    const on = !!channels[c];
                    return (
                      <button
                        key={c}
                        type="button"
                        onClick={() => toggle(c)}
                        style={{
                          padding: "6px 14px",
                          border: on ? "1px solid var(--accent)" : "1px solid var(--rule)",
                          borderRadius: 999,
                          fontSize: 13,
                          background: on ? "var(--accent)" : "transparent",
                          color: on ? "var(--accent-fg)" : "var(--ink-2)",
                          cursor: "pointer",
                          transition: "all .2s ease",
                        }}
                      >
                        {c}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="field full">
                <label>{t(COPY.contactPage.labels.whatPh)}</label>
                <textarea placeholder={t(COPY.contactPage.labels.whatPhField)} rows={4} />
              </div>

              <div className="field">
                <label>{t(COPY.contactPage.labels.start)}</label>
                <select>
                  {t(COPY.contactPage.labels.startOpts).map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </div>
              <div className="field">
                <label>{t(COPY.contactPage.labels.revenue)}</label>
                <select>
                  <option>{t(COPY.contactPage.labels.revNA)}</option>
                  <option>&lt; 1 M €</option>
                  <option>1 – 5 M €</option>
                  <option>5 – 20 M €</option>
                  <option>&gt; 20 M €</option>
                </select>
              </div>

              <div className="field-actions">
                <button type="submit" className="btn solid">
                  <span>{t(COPY.cta.sendInquiry)}</span> <span className="arr">→</span>
                </button>
                <span className="note">{t(COPY.contactPage.labels.note)}</span>
              </div>
            </form>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}

const dtStyle: React.CSSProperties = {
  fontSize: 11.5,
  color: "var(--ink-3)",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  fontWeight: 500,
};
const ddStyle: React.CSSProperties = { margin: 0, color: "var(--ink)", fontWeight: 500 };
