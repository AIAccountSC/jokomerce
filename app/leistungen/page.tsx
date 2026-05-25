"use client";

import Link from "next/link";
import { IconBox } from "@/components/Icon";
import { FinalCTA } from "@/components/FinalCTA";
import { SERVICES } from "@/lib/services";
import { useT } from "@/lib/i18n";
import { COPY } from "@/lib/copy";

const PLATFORMS = [
  { name: "Amazon", small: { de: "EU · US · Global", en: "EU · US · Global" } },
  { name: "Otto", small: { de: "DE", en: "DE" } },
  { name: "Kaufland", small: { de: "DE · EU", en: "DE · EU" } },
  { name: "eBay", small: { de: "DE · EU · US", en: "DE · EU · US" } },
  { name: "bol.com", small: { de: "NL · BE", en: "NL · BE" } },
  { name: "Walmart", small: { de: "US", en: "US" } },
  { name: "Shopify", small: { de: "D2C", en: "D2C" } },
  { name: "MediaMarktSaturn", small: { de: "DE · EU", en: "DE · EU" } },
  { name: "Hornbach", small: { de: "DE", en: "DE" } },
  { name: "Cdiscount", small: { de: "FR", en: "FR" } },
  { name: "Plentymarkets", small: { de: "ERP", en: "ERP" } },
  { name: "Billbee", small: { de: "ERP", en: "ERP" } },
  { name: "NetSuite", small: { de: "ERP", en: "ERP" } },
  { name: "JTL", small: { de: "ERP", en: "ERP" } },
  { name: "Zendesk", small: { de: "Support", en: "Support" } },
  { name: "Google Ads", small: { de: "D2C", en: "D2C" } },
];

export default function Leistungen() {
  const t = useT();
  const lang = t({ de: "de", en: "en" });

  return (
    <>
      <header className="page-wrap">
        <div className="page-head">
          <div className="page-head-text" data-reveal>
            <span className="eyebrow">{t(COPY.leistungen.eyebrow)}</span>
            <h1
              dangerouslySetInnerHTML={{
                __html: lang === "en" ? COPY.leistungen.h1En : COPY.leistungen.h1De,
              }}
            />
            <p
              className="page-head-lead"
              dangerouslySetInnerHTML={{ __html: t(COPY.leistungen.lead) }}
            />
            <div className="actions">
              <Link className="btn solid" href="/contact">
                {t(COPY.cta.bookCall)} <span className="arr">→</span>
              </Link>
              <a className="btn" href="/#prozess">
                {t(COPY.leistungen.startBtn)} <span className="arr">↓</span>
              </a>
            </div>
          </div>
          <div className="page-head-visual" data-reveal style={{ ["--reveal-delay" as never]: "120ms" }}>
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=900&fit=crop&q=80"
              alt="Leistungen"
            />
          </div>
        </div>
      </header>

      <section>
        <div className="container">
          <div className="sec-head" style={{ padding: 0, marginBottom: 48 }} data-reveal>
            <span className="eyebrow">{t(COPY.leistungen.modulesEy)}</span>
            <h2 className="sec-title">{t(COPY.leistungen.modulesH2)}</h2>
            <p className="sec-intro">{t(COPY.leistungen.modulesIntro)}</p>
          </div>

          <div
            className="services"
            data-reveal
            style={{ borderTop: "1px solid var(--rule)", ["--reveal-delay" as never]: "100ms" }}
          >
            {SERVICES.map((s, i) => (
              <Link key={s.slug} className="svc" href={`/leistungen/${s.slug}`}>
                <div className="svc-body" style={{ padding: 28, gap: 14 }}>
                  <IconBox name={s.icon} size="sm" />
                  <div className="svc-num">
                    <span style={{ marginRight: "auto" }}>{`M / ${String(i + 1).padStart(2, "0")}`}</span>
                    <span className="arr">↗</span>
                  </div>
                  <h3>{t(s.title)}</h3>
                  <p>{t(s.shortDesc)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="container">
          <div className="sec-head" style={{ padding: 0, marginBottom: 48 }} data-reveal>
            <span className="eyebrow">{t(COPY.leistungen.platfEy)}</span>
            <h2 className="sec-title">{t(COPY.leistungen.platfH2)}</h2>
            <p className="sec-intro">{t(COPY.leistungen.platfIntro)}</p>
          </div>
          <div
            data-reveal
            style={{
              ["--reveal-delay" as never]: "100ms",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: 12,
            }}
          >
            {PLATFORMS.map((p) => (
              <div
                key={p.name}
                style={{
                  padding: "14px 16px",
                  background: "var(--bg)",
                  border: "1px solid var(--rule)",
                  borderRadius: 4,
                  fontSize: 14.5,
                  fontWeight: 500,
                  color: "var(--ink)",
                  textAlign: "center",
                }}
              >
                {p.name}
                <small
                  style={{
                    display: "block",
                    fontSize: 11,
                    color: "var(--ink-3)",
                    fontWeight: 400,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    marginTop: 4,
                  }}
                >
                  {t(p.small)}
                </small>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
