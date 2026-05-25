"use client";

import Link from "next/link";
import { IconBox } from "@/components/Icon";
import { Marquee } from "@/components/Marquee";
import { ProcessSection } from "@/components/ProcessSection";
import { FinalCTA } from "@/components/FinalCTA";
import { KPI, HeadlineReveal } from "@/components/Reveals";
import { useT } from "@/lib/i18n";
import { COPY } from "@/lib/copy";
import { JOACHIM } from "@/lib/photos";

const PROBLEMS = [
  {
    href: "/leistungen/amazon-growth",
    num: "01",
    cat: { de: "Profitabilität", en: "Profitability" },
    icon: "trend" as const,
    title: {
      de: <><span className="accent">Amazon läuft</span> — aber die Marge stimmt nicht.</>,
      en: <><span className="accent">Amazon is running</span> — but the margin isn&apos;t.</>,
    },
    desc: {
      de: "TACOS / ACOS, Preise und Kostenstruktur passen nicht zusammen. Wachstum ja, Profit nein.",
      en: "TACOS / ACOS, pricing and cost structure don't add up. Growth yes, profit no.",
    },
    tags: ["TACOS", "Pricing", "Contribution Margin"],
    link: { de: "Lösung: Amazon Growth →", en: "Solution: Amazon Growth →" },
  },
  {
    href: "/leistungen/multichannel",
    num: "02",
    cat: { de: "Expansion", en: "Expansion" },
    icon: "grid" as const,
    title: {
      de: <><span className="accent">Otto, Kaufland, Walmart</span> — wir wollen rauf, aber niemand zieht es durch.</>,
      en: <><span className="accent">Otto, Kaufland, Walmart</span> — we want to be there, but nobody pulls it through.</>,
    },
    desc: {
      de: "Setup, Prozesse und Content für weitere Marktplätze fehlen — und es fehlt jemand, der es operativ verantwortet.",
      en: "Setup, processes and content for additional marketplaces aren't there — and no one to actually own it.",
    },
    tags: ["Otto", "Kaufland", "Walmart", "bol.com"],
    link: { de: "Lösung: Multichannel Expansion →", en: "Solution: Multichannel Expansion →" },
  },
  {
    href: "/leistungen/produktlaunch",
    num: "03",
    cat: { de: "Katalog", en: "Catalog" },
    icon: "boxes" as const,
    title: {
      de: <><span className="accent">30–200 neue SKUs</span> sollen in den Katalog — der trägt das nicht.</>,
      en: <><span className="accent">30–200 new SKUs</span> need to enter the catalog — it can&apos;t scale that.</>,
    },
    desc: {
      de: "Katalog-Architektur, Content-Produktion und Prozesse skalieren nicht. Jedes neue Produkt wird zum Einzelprojekt.",
      en: "Catalog architecture, content production and processes don't scale. Every new product becomes a manual project.",
    },
    tags: ["Catalog", "Variations", "Content Ops"],
    link: { de: "Lösung: Produktlaunch →", en: "Solution: Product Launch →" },
  },
  {
    href: "/leistungen/shopify-d2c",
    num: "04",
    cat: { de: "D2C", en: "D2C" },
    icon: "bag" as const,
    title: {
      de: <><span className="accent">Shopify wächst nicht</span>, Conversion zu niedrig, Google Ads instabil.</>,
      en: <><span className="accent">Shopify isn&apos;t growing</span>, conversion is low, Google Ads unstable.</>,
    },
    desc: {
      de: "Tracking-Lücken, schwache Landingpages, Ads-Struktur ad-hoc gewachsen. Der Shop läuft — aber er skaliert nicht.",
      en: "Tracking gaps, weak landing pages, ad structure built ad-hoc. The shop runs — but doesn't compound.",
    },
    tags: ["Shopify", "Google Ads", "CRO", "Tracking"],
    link: { de: "Lösung: Shopify & D2C →", en: "Solution: Shopify & D2C →" },
  },
  {
    href: "/leistungen/operations-erp",
    num: "05",
    cat: { de: "Operations", en: "Operations" },
    icon: "gear" as const,
    title: {
      de: <><span className="accent">Operativ brennt es:</span> ERP, Workflows, Support, Reporting.</>,
      en: <><span className="accent">Operationally, it&apos;s on fire:</span> ERP, workflows, support, reporting.</>,
    },
    desc: {
      de: "ERP, Workflows, Customer Support und Reporting sind Flickwerk. Jeder Kanal anders, jedes Reporting Handarbeit.",
      en: "ERP, fulfillment, customer support and reporting are patchwork. Every channel handled differently — every report assembled by hand.",
    },
    tags: ["ERP", "Plenty / Billbee", "Reporting"],
    link: { de: "Lösung: Operations & ERP →", en: "Solution: Operations & ERP →" },
  },
  {
    href: "/leistungen/head-of-marketplace",
    num: "06",
    cat: { de: "Verantwortung", en: "Ownership" },
    icon: "cmo" as const,
    title: {
      de: <><span className="accent">Beratungs-Decks</span> liegen im Regal — Umsetzung fehlt.</>,
      en: <><span className="accent">Strategy decks</span> sit on the shelf — execution is missing.</>,
    },
    desc: {
      de: "Die Strategie ist klar. Es fehlt jemand, der die Umsetzung wirklich Woche für Woche verantwortet.",
      en: "The strategy is clear. What's missing is someone who actually owns the implementation week by week.",
    },
    tags: ["Interim CMO", "P&L Owner", "Weekly Cadence"],
    link: { de: "Lösung: Head of Marketplace →", en: "Solution: Head of Marketplace →" },
  },
];

const AUDIENCE = [
  {
    icon: "factory" as const,
    h3: { de: "Marken & Hersteller", en: "Brands & manufacturers" },
    p: {
      de: "mit Wachstum auf Amazon & weiteren Marktplätzen — und Bedarf an echter operativer Verantwortung.",
      en: "growing on Amazon and additional marketplaces — and need a real operator, not an advisor.",
    },
  },
  {
    icon: "boxes" as const,
    h3: { de: "Multichannel-Händler", en: "Multichannel merchants" },
    p: {
      de: "mit Expansion DE / EU / US — Otto, Kaufland, Walmart, bol.com — über Amazon hinaus.",
      en: "expanding across DE, EU and US — Otto, Kaufland, Walmart, bol.com — beyond Amazon.",
    },
  },
  {
    icon: "store" as const,
    h3: { de: "D2C-Brands", en: "D2C brands" },
    p: {
      de: "die Shopify und Performance Marketing skalieren — CRO, Google Ads und sauberes Tracking.",
      en: "scaling Shopify and performance marketing — CRO, Google Ads and clean tracking.",
    },
  },
  {
    icon: "portfolio" as const,
    h3: { de: "Aggregatoren / Portfolio-Owner", en: "Aggregators / portfolio owners" },
    p: {
      de: "die P&L-Ownership und Execution über mehrere Marken brauchen — kein weiteres Deck.",
      en: "need P&L ownership and execution across multiple brands — not another deck.",
    },
  },
];

const SERVICES = [
  {
    href: "/leistungen/head-of-marketplace",
    icon: "cmo" as const,
    img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=900&h=560&fit=crop&q=80",
    title: { de: ["Head of Marketplace /", "Interim CMO"], en: ["Head of Marketplace /", "Interim CMO"] },
    desc: {
      de: "End-to-end Verantwortung für Umsatz, Marge und Wachstum über alle relevanten Marktplätze — inklusive P&L, Forecasting und Teamsteuerung.",
      en: "End-to-end ownership of revenue, margin and growth across all relevant marketplaces — including P&L, forecasting and team management.",
    },
    platforms: "Strategie · P&L · Forecasting",
  },
  {
    href: "/leistungen/amazon-growth",
    icon: "trend" as const,
    img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=900&h=560&fit=crop&q=80",
    title: { de: ["Amazon Growth &", "Catalogue Excellence"], en: ["Amazon Growth &", "Catalogue Excellence"] },
    desc: {
      de: "Katalog-Rebuild, SEO- & Conversion-Content, Internationalisierung und Ads-Struktur — damit Amazon profitabel skaliert.",
      en: "Catalog rebuild, SEO & conversion content, internationalization and ad structure — so Amazon scales profitably.",
    },
    platforms: "Amazon EU · US · Global",
  },
  {
    href: "/leistungen/produktlaunch",
    icon: "rocket" as const,
    img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=900&h=560&fit=crop&q=80",
    title: { de: ["Produktlaunch", "End-to-End"], en: ["Product Launch", "End-to-End"] },
    desc: {
      de: "Von der Produktidee über Marktvalidierung und Forecasts bis zum Launch-Setup und der Skalierung nach Volumen- und Profit-Zielen.",
      en: "From product idea through market validation and forecasts to launch setup and scaling against volume and profit targets.",
    },
    platforms: "Idee → Launch → Scale",
  },
  {
    href: "/leistungen/multichannel",
    icon: "grid" as const,
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&h=560&fit=crop&q=80",
    title: { de: ["Multichannel", "Expansion"], en: ["Multichannel", "Expansion"] },
    desc: {
      de: "Aufbau und Steuerung weiterer Marktplätze — saubere Katalog-Architektur, Preislogik, Inventory- und Promo-Prozesse.",
      en: "Build and run additional marketplaces — clean catalog architecture, pricing logic, inventory and promo processes.",
    },
    platforms: "Otto · Kaufland · Walmart · bol.com",
  },
  {
    href: "/leistungen/shopify-d2c",
    icon: "bag" as const,
    img: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=900&h=560&fit=crop&q=80",
    title: { de: ["Shopify &", "D2C Growth"], en: ["Shopify &", "D2C Growth"] },
    desc: {
      de: "Shopify-Setup/Optimierung, Google Ads, Conversion-Optimierung und SEO — damit dein Shop zur Marken- und Profitmaschine wird.",
      en: "Shopify setup/optimization, Google Ads, conversion optimization and SEO — so your shop becomes a brand and profit engine.",
    },
    platforms: "Shopify · Google Ads · CRO · SEO",
  },
  {
    href: "/leistungen/operations-erp",
    icon: "gear" as const,
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=560&fit=crop&q=80",
    title: { de: ["Operations, ERP", "& Tooling"], en: ["Operations, ERP", "& Tooling"] },
    desc: {
      de: "Prozesse, Datenfluss und Automatisierung über ERP / Tools — damit Wachstum nicht im Operativen scheitert.",
      en: "Processes, data flow and automation via ERP / tools — so growth doesn't fail in the operational layer.",
    },
    platforms: "Plenty · Billbee · NetSuite · JTL",
  },
  {
    href: "/leistungen/customer-support",
    icon: "chat" as const,
    img: "https://images.unsplash.com/photo-1553775282-20af80779df7?w=900&h=560&fit=crop&q=80",
    title: { de: ["Customer Support", "Setup (Zendesk)"], en: ["Customer Support", "Setup (Zendesk)"] },
    desc: {
      de: "Skalierbares, multichannel-fähiges Customer Support Team in Zendesk — Prozesse, SLAs und Qualitätsstandards.",
      en: "Scalable, multichannel customer support team in Zendesk — processes, SLAs and quality standards.",
    },
    platforms: "Zendesk · Multilingual · SLAs",
  },
  {
    href: "/leistungen/ai-workflows",
    icon: "spark" as const,
    img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=900&h=560&fit=crop&q=80",
    title: { de: ["AI Workflows &", "Agentic Execution"], en: ["AI Workflows &", "Agentic Execution"] },
    desc: {
      de: "Strukturen und Workflows, um Content, Launches und Reporting mit AI / Agenten schneller und wiederholbar umzusetzen.",
      en: "Structures and workflows to ship content, launches and reporting with AI / agents — faster and repeatable.",
    },
    platforms: "Content · Launches · Reporting",
  },
];

const VS_ROWS = [
  {
    num: "01",
    cat: { de: "P&L-First", en: "P&L-first" },
    them: {
      de: "Vanity-Metriken: Ad-Spend, Sessions, ROAS isoliert.",
      en: "Vanity metrics: ad spend, sessions, ROAS in isolation.",
    },
    me: {
      icon: "pl" as const,
      html: {
        de: <>Jede Entscheidung gegen <b>Marge und Contribution</b> gemessen — nie isolierte Klicks.</>,
        en: <>Every decision benchmarked against <b>margin and contribution</b> — never standalone clicks.</>,
      },
    },
  },
  {
    num: "02",
    cat: { de: "Umsetzung", en: "Execution" },
    them: {
      de: "PowerPoint-Übertrag an eine Agentur, die es nicht durchzieht.",
      en: "PowerPoint hand-off to an agency that won't get it done.",
    },
    me: {
      icon: "check" as const,
      html: {
        de: <>Strategie und <b>Execution in einer Person</b>. Wöchentlicher Takt auf die P&amp;L.</>,
        en: <><b>Strategy + execution in one person.</b> Weekly cadence on the P&amp;L.</>,
      },
    },
  },
  {
    num: "03",
    cat: { de: "Systeme", en: "Systems" },
    them: {
      de: "Ad-hoc Firefighting. Jeder Win verschwindet mit dem Berater.",
      en: "Ad-hoc firefighting. Every win disappears with the consultant.",
    },
    me: {
      icon: "repeat" as const,
      html: {
        de: <>Prozesse, SOPs und Automatisierung. <b>Wins werden wiederverwendbar.</b> Chaos wird abgebaut.</>,
        en: <>Processes, SOPs and automation. <b>Wins compound.</b> Chaos retired.</>,
      },
    },
  },
  {
    num: "04",
    cat: { de: "Multichannel", en: "Multichannel" },
    them: {
      de: "Amazon, Otto und Shopify als 3 isolierte Projekte mit 3 Dienstleistern.",
      en: "Amazon, Otto and Shopify as 3 siloed projects with 3 vendors.",
    },
    me: {
      icon: "network" as const,
      html: {
        de: <>Ein <b>System</b> — Marktplätze und D2C zusammen betrieben, ein Reporting.</>,
        en: <><b>One system</b> — marketplaces and D2C operated together, one reporting layer.</>,
      },
    },
  },
  {
    num: "05",
    cat: { de: "International", en: "International" },
    them: {
      de: "Nur DE/EU-Erfahrung. US wird outgesourct oder verschoben.",
      en: "DE / EU experience only. US gets outsourced or postponed.",
    },
    me: {
      icon: "globe" as const,
      html: {
        de: <>Hands-on über <b>DE und US</b> — inkl. Steuer, Fulfillment, Sprache.</>,
        en: <>Hands-on across <b>DE and US</b> — incl. tax, fulfillment, language realities.</>,
      },
    },
  },
];

export default function Home() {
  const t = useT();
  const lang = t({ de: "de", en: "en" });

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero" id="top" style={{ borderBottom: 0 }}>
        <div className="hero-row">
          <div className="hero-copy">
            <span className="eyebrow" data-reveal>
              {t(COPY.home.hero.eyebrow)}
            </span>
            <h1
              className="hero-h1"
              data-reveal
              style={{ ["--reveal-delay" as never]: "100ms" }}
              dangerouslySetInnerHTML={{
                __html: lang === "en" ? COPY.home.hero.h1En : COPY.home.hero.h1De,
              }}
            />
            <p
              className="hero-lead"
              data-reveal
              style={{ ["--reveal-delay" as never]: "200ms" }}
              dangerouslySetInnerHTML={{ __html: t(COPY.home.hero.lead) }}
            />
            <div
              className="hero-actions"
              data-reveal
              style={{ ["--reveal-delay" as never]: "300ms" }}
            >
              <Link className="btn solid" href="/contact">
                <span>{t(COPY.cta.bookCall)}</span> <span className="arr">→</span>
              </Link>
              <a className="btn" href="#leistungen">
                <span>{t(COPY.cta.viewServices)}</span> <span className="arr">↓</span>
              </a>
            </div>
            <div
              className="hero-avail"
              data-reveal
              style={{ ["--reveal-delay" as never]: "400ms" }}
            >
              <span className="ping" />
              <span>{t(COPY.home.hero.avail)}</span>
            </div>
          </div>

          <div className="hero-portrait-wrap" data-reveal style={{ ["--reveal-delay" as never]: "200ms" }}>
            <div className="hero-portrait">
              <img className="photo-img" src={JOACHIM.hero} alt="Joachim Heidel" />
              <div className="name-block">
                <div>
                  <div className="n">Joachim Heidel</div>
                  <div className="r">{t(COPY.home.hero.portraitRole)}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-kpis-strip" data-reveal style={{ ["--reveal-delay" as never]: "500ms" }}>
          <div className="kpi">
            <KPI target={1000} suffix="+" />
            <div className="lbl">{t(COPY.home.hero.kpis.launches)}</div>
          </div>
          <div className="kpi">
            <KPI target={12} suffix="+" />
            <div className="lbl">{t(COPY.home.hero.kpis.markets)}</div>
          </div>
          <div className="kpi">
            <KPI target={0} display="DE · US" />
            <div className="lbl">{t(COPY.home.hero.kpis.countries)}</div>
          </div>
          <div className="kpi">
            <KPI target={0} display="P&L" />
            <div className="lbl">{t(COPY.home.hero.kpis.ownership)}</div>
          </div>
        </div>
      </section>

      <Marquee label={t(COPY.home.marqueeLabel)} />

      {/* ===== TRUST STRIP ===== */}
      <div className="trust" data-reveal>
        <div className="trust-label">
          <b>{t(COPY.home.trust.trusted)}</b>
          <span>{t(COPY.home.trust.brands)}</span>
        </div>
        <div className="trust-logos">
          <div className="logo-slot"><span className="wordmark wm-kronenburg">Kronenburg</span></div>
          <div className="logo-slot"><span className="wordmark wm-marwona">Marwona</span></div>
          <div className="logo-slot"><span className="wordmark wm-plconcepts">PLConcepts</span></div>
          <div className="logo-slot"><span className="wordmark wm-moonster">Moonster</span></div>
          <div className="logo-slot"><span className="wordmark wm-wethebrands">WETHEBRANDS_</span></div>
        </div>
      </div>

      {/* ===== § 01 — PROBLEM ===== */}
      <section id="problem">
        <div className="sec-head">
          <span className="eyebrow" data-reveal>{t(COPY.home.problem.eyebrow)}</span>
          <h2
            className="sec-title"
            data-reveal
            style={{ ["--reveal-delay" as never]: "100ms" }}
            dangerouslySetInnerHTML={{ __html: lang === "en" ? COPY.home.problem.h2En : COPY.home.problem.h2De }}
          />
          <p className="sec-intro" style={{ padding: 0, marginTop: 4, maxWidth: "64ch" }} data-reveal>
            {t(COPY.home.problem.intro)}
          </p>
        </div>

        <div className="problem-stats" data-reveal>
          <div className="pstat">
            <div className="pstat-num">{t(COPY.home.problem.stats.s1Num)}</div>
            <div className="pstat-lbl">{t(COPY.home.problem.stats.s1Lbl)}</div>
          </div>
          <div className="pstat">
            <div className="pstat-num">6+</div>
            <div className="pstat-lbl">{t(COPY.home.problem.stats.s2Lbl)}</div>
          </div>
          <div className="pstat">
            <div className="pstat-num">1</div>
            <div className="pstat-lbl">{t(COPY.home.problem.stats.s3Lbl)}</div>
          </div>
          <div className="pstat">
            <div className="pstat-num">0</div>
            <div className="pstat-lbl">{t(COPY.home.problem.stats.s4Lbl)}</div>
          </div>
        </div>

        <div className="problem-grid-v2">
          {PROBLEMS.map((p, i) => (
            <Link
              key={p.num}
              className="pcard"
              href={p.href}
              data-reveal
              style={i % 2 ? ({ ["--reveal-delay" as never]: "80ms" } as never) : undefined}
            >
              <div className="pcard-tag">
                <span className="pcard-tag-num">{p.num}</span>
                <span className="pcard-tag-cat">{t(p.cat)}</span>
              </div>
              <IconBox name={p.icon} />
              <h3>{t(p.title)}</h3>
              <p>{t(p.desc)}</p>
              <div className="pcard-tags">
                {p.tags.map((tag) => (
                  <span key={tag} className="ptag">{tag}</span>
                ))}
              </div>
              <div className="pcard-link">{t(p.link)}</div>
            </Link>
          ))}

          <div className="problem-cta-row" data-reveal>
            <div className="pcta-inner">
              <span className="pcta-eyebrow">{t(COPY.home.problem.cta.eyebrow)}</span>
              <p
                dangerouslySetInnerHTML={{
                  __html: lang === "en" ? COPY.home.problem.cta.textEn : COPY.home.problem.cta.textDe,
                }}
              />
            </div>
            <Link className="btn solid" href="/contact">
              <span>{t(COPY.cta.bookCall)}</span> <span className="arr">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== PULL QUOTE ===== */}
      <section className="pullquote" id="quote" style={{ borderBottom: 0, paddingTop: 120 }}>
        <div className="lbl" data-reveal>{t(COPY.home.pull.eyebrow)}</div>
        <blockquote data-reveal style={{ ["--reveal-delay" as never]: "100ms" }}>
          <p
            dangerouslySetInnerHTML={{
              __html: lang === "en" ? COPY.home.pull.bodyEn : COPY.home.pull.bodyDe,
            }}
          />
          <div className="attr"><b>Joachim Heidel</b> · Jokomerce · 2026</div>
        </blockquote>
      </section>

      {/* ===== § 02 — AUDIENCE ===== */}
      <section id="audience">
        <div className="sec-head">
          <span className="eyebrow" data-reveal>{t(COPY.home.audience.eyebrow)}</span>
          <HeadlineReveal
            as="h2"
            className="sec-title"
            style={{ ["--reveal-delay" as never]: "100ms" } as never}
          >
            {t(COPY.home.audience.h2)}
          </HeadlineReveal>
        </div>

        <div className="audience">
          <div
            className="lead-col"
            data-reveal
            dangerouslySetInnerHTML={{
              __html: `<p>${lang === "en" ? COPY.home.audience.leadEn : COPY.home.audience.leadDe}</p>`,
            }}
          />
          <div className="types">
            {AUDIENCE.map((a, i) => (
              <div
                key={a.h3.de}
                className="aud"
                data-reveal
                style={i % 2 ? ({ ["--reveal-delay" as never]: "80ms" } as never) : undefined}
              >
                <div className="aud-icon">
                  <IconBox name={a.icon} shape="circle" />
                </div>
                <h3>{t(a.h3)}</h3>
                <p>{t(a.p)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== § 03 — SERVICES ===== */}
      <section id="leistungen">
        <div className="sec-head">
          <span className="eyebrow" data-reveal>{t(COPY.home.services.eyebrow)}</span>
          <HeadlineReveal
            as="h2"
            className="sec-title"
            style={{ ["--reveal-delay" as never]: "100ms" } as never}
          >
            {[
              <span key="m" className="muted">{t(COPY.home.services.h2Pre)}</span>,
              t(COPY.home.services.h2Tail),
            ]}
          </HeadlineReveal>
        </div>

        <div className="services-wrap">
          <div className="services">
            {SERVICES.map((s, i) => (
              <Link
                key={s.href}
                className="svc"
                href={s.href}
                data-reveal
                style={{ ["--reveal-delay" as never]: `${(i % 4) * 80}ms` } as never}
              >
                <div className="svc-img">
                  <img src={s.img} alt={t(s.title).join(" ")} loading="lazy" />
                </div>
                <div className="svc-body">
                  <IconBox name={s.icon} />
                  <div className="svc-num"><span className="arr">↗</span></div>
                  <h3>
                    {t(s.title)[0]}
                    <br />
                    {t(s.title)[1]}
                  </h3>
                  <p>{t(s.desc)}</p>
                  <div className="platforms">{s.platforms}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== § 04 — UNTERSCHIED ===== */}
      <section id="usps">
        <div className="sec-head">
          <span className="eyebrow" data-reveal>{t(COPY.home.diff.eyebrow)}</span>
          <h2
            className="sec-title"
            data-reveal
            style={{ ["--reveal-delay" as never]: "100ms" }}
            dangerouslySetInnerHTML={{ __html: lang === "en" ? COPY.home.diff.h2En : COPY.home.diff.h2De }}
          />
          <p className="sec-intro" data-reveal style={{ ["--reveal-delay" as never]: "200ms" }}>
            {t(COPY.home.diff.intro)}
          </p>
        </div>

        <div className="vs-wrap" data-reveal style={{ ["--reveal-delay" as never]: "200ms" }}>
          <div className="vs-grid">
            <div className="vs-col-head">
              <span className="vs-col-lbl">{t(COPY.home.diff.colThemHead)}</span>
              <span className="vs-col-tag">{t(COPY.home.diff.colThemTag)}</span>
            </div>
            <div className="vs-col-head vs-col-head-me">
              <span className="vs-col-lbl">
                <span className="vs-dot" /> {t(COPY.home.diff.colMeHead)}
              </span>
              <span className="vs-col-tag">{t(COPY.home.diff.colMeTag)}</span>
            </div>

            {VS_ROWS.flatMap((row) => [
              <div className="vs-row-lbl" key={`lbl-${row.num}`}>
                <span className="vs-num">{row.num}</span>
                <span className="vs-cat">{t(row.cat)}</span>
              </div>,
              <div className="vs-cell vs-cell-them" key={`them-${row.num}`}>
                <div className="vs-x">✕</div>
                <p>{t(row.them)}</p>
              </div>,
              <div className="vs-cell vs-cell-me" key={`me-${row.num}`}>
                <IconBox name={row.me.icon} size="sm" />
                <p>{t(row.me.html)}</p>
              </div>,
            ])}
          </div>

          <div className="vs-foot" data-reveal>
            <div className="vs-foot-stat">
              <div className="vs-foot-num">1<span className="vs-foot-sep">/</span>0</div>
              <div className="vs-foot-lbl">{t(COPY.home.diff.footStatLbl)}</div>
            </div>
            <div className="vs-foot-claim">
              <p
                dangerouslySetInnerHTML={{
                  __html: lang === "en" ? COPY.home.diff.footClaimEn : COPY.home.diff.footClaimDe,
                }}
              />
            </div>
            <Link className="btn solid" href="/contact" style={{ whiteSpace: "nowrap" }}>
              <span>{t(COPY.cta.bookCallShort)}</span> <span className="arr">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== § 05 — PROCESS ===== */}
      <ProcessSection />

      {/* ===== § 06 — CASES ===== */}
      <section id="cases">
        <div className="sec-head">
          <span className="eyebrow" data-reveal>{t(COPY.home.cases.eyebrow)}</span>
          <HeadlineReveal
            as="h2"
            className="sec-title"
            style={{ ["--reveal-delay" as never]: "100ms" } as never}
          >
            {[
              <span key="m" className="muted">{t(COPY.home.cases.h2Pre)}</span>,
              t(COPY.home.cases.h2Tail),
            ]}
          </HeadlineReveal>
        </div>

        <div className="cases-section">
          <div className="case-logos" data-reveal>
            <div className="lbl">{t(COPY.home.cases.recent)}</div>
            <div className="logos">
              <span>Kronenburg Handel</span>
              <span>Marwona GmbH</span>
              <span>PLConcepts GmbH</span>
              <span>Moonster Products Ltd</span>
              <span>WETHEBRANDS_</span>
            </div>
          </div>

          <div className="case-grid">
            {[COPY.home.cases.c1, COPY.home.cases.c2].map((c, idx) => (
              <div
                key={idx}
                className="case"
                data-reveal
                style={idx ? ({ ["--reveal-delay" as never]: "100ms" } as never) : undefined}
              >
                <div className="case-image">
                  <img
                    src={
                      idx === 0
                        ? "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&h=675&fit=crop&q=80"
                        : "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=1200&h=675&fit=crop&q=80"
                    }
                    alt={`Case ${idx + 1}`}
                    loading="lazy"
                  />
                  <span className="badge">CASE / 0{idx + 1}</span>
                  <span className="badge-2">{t(c.badge)}</span>
                </div>
                <div className="case-content">
                  <h3>{t(c.h3)}</h3>
                  <div>
                    {c.rows.map((row) => (
                      <div className="row" key={row.k.de}>
                        <span className="k">{t(row.k)}</span>
                        <span
                          className={`v${("isResult" in row && row.isResult) ? " result" : ""}`}
                        >
                          {t(row.v)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="case-note" data-reveal>
            <span>{t(COPY.home.cases.moreNote)}</span>
            <Link className="btn solid" href="/contact">
              <span>{t(COPY.cta.bookCall)}</span> <span className="arr">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIAL ===== */}
      <section className="testimonial" id="testimonial">
        <div className="lbl" data-reveal>{t(COPY.home.testimonial.eyebrow)}</div>
        <div className="inner" data-reveal style={{ ["--reveal-delay" as never]: "100ms" }}>
          <blockquote>
            <p
              dangerouslySetInnerHTML={{
                __html: lang === "en" ? COPY.home.testimonial.quoteEn : COPY.home.testimonial.quoteDe,
              }}
            />
            <div className="by">
              <div className="avatar">MS</div>
              <div>
                <span className="name" style={{ display: "block" }}>
                  {t(COPY.home.testimonial.who)}
                </span>
                <span className="role">{t(COPY.home.testimonial.role)}</span>
              </div>
            </div>
          </blockquote>
          <div className="stat">
            <div className="n">{t(COPY.home.testimonial.statN)}</div>
            <div className="l">{t(COPY.home.testimonial.statL)}</div>
          </div>
        </div>
      </section>

      {/* ===== § 07 — ABOUT (homepage block) ===== */}
      <section id="about">
        <div className="sec-head">
          <span className="eyebrow" data-reveal>{t(COPY.home.aboutBlock.eyebrow)}</span>
          <HeadlineReveal
            as="h2"
            className="sec-title"
            style={{ ["--reveal-delay" as never]: "100ms" } as never}
          >
            {[
              <span key="m" className="muted">{t(COPY.home.aboutBlock.h2Pre)}</span>,
              t(COPY.home.aboutBlock.h2Tail),
            ]}
          </HeadlineReveal>
        </div>

        <div className="about">
          <div className="about-photo" data-reveal>
            <div className="frame">
              <img className="photo-img" src={JOACHIM.about} alt="Joachim Heidel" />
              <span className="signature">— J.H.</span>
            </div>
            <div className="photo-cap">
              <span><b>{t(COPY.home.aboutBlock.capWho)}</b></span>
              <span>{t(COPY.home.aboutBlock.capPlace)}</span>
            </div>
          </div>
          <div className="about-body" data-reveal style={{ ["--reveal-delay" as never]: "100ms" }}>
            <p
              dangerouslySetInnerHTML={{
                __html: lang === "en" ? COPY.home.aboutBlock.p1En : COPY.home.aboutBlock.p1De,
              }}
            />
            <div className="accent-quote">{t(COPY.home.aboutBlock.pull)}</div>
            <p
              dangerouslySetInnerHTML={{
                __html: lang === "en" ? COPY.home.aboutBlock.p2En : COPY.home.aboutBlock.p2De,
              }}
            />

            <div className="timeline">
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
        </div>
      </section>

      <FinalCTA />

      {/* ===== § 09 — FAQ ===== */}
      <section id="faq">
        <div className="sec-head">
          <span className="eyebrow" data-reveal>{t(COPY.home.faq.eyebrow)}</span>
          <HeadlineReveal
            as="h2"
            className="sec-title"
            style={{ ["--reveal-delay" as never]: "100ms" } as never}
          >
            {[
              <span key="m" className="muted">{t(COPY.home.faq.h2Pre)}</span>,
              t(COPY.home.faq.h2Tail),
            ]}
          </HeadlineReveal>
        </div>

        <div className="faq">
          <div className="col-l" data-reveal>
            <h3>{t(COPY.home.faq.colLH3)}</h3>
            <p>{t(COPY.home.faq.colLP)}</p>
          </div>
          <div className="col-r" data-reveal style={{ ["--reveal-delay" as never]: "100ms" }}>
            {COPY.home.faq.items.map((f, i) => (
              <details key={f.q.de} className="q" open={i === 0}>
                <summary>{t(f.q)}</summary>
                <div
                  className="a"
                  dangerouslySetInnerHTML={{ __html: lang === "en" ? f.aEn : f.aDe }}
                />
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== § 10 — CONTACT (inline form preview) ===== */}
      <section id="kontakt">
        <div className="sec-head">
          <span className="eyebrow" data-reveal>{t(COPY.home.contact.eyebrow)}</span>
          <HeadlineReveal
            as="h2"
            className="sec-title"
            style={{ ["--reveal-delay" as never]: "100ms" } as never}
          >
            {[
              <span key="m" className="muted">{t(COPY.home.contact.h2Pre)}</span>,
              t(COPY.home.contact.h2Tail),
            ]}
          </HeadlineReveal>
        </div>

        <div className="contact">
          <div className="info" data-reveal>
            <h3>{t(COPY.home.contact.infoH3)}</h3>
            <p>{t(COPY.home.contact.infoP)}</p>
            <dl>
              <dt>{t(COPY.home.contact.labels.email)}</dt>
              <dd>hello@jokomerce.de</dd>
              <dt>LinkedIn</dt>
              <dd>/in/joachim-heidel</dd>
              <dt>{t(COPY.home.contact.labels.location)}</dt>
              <dd>Köln / Bonn · Remote</dd>
              <dt>{t(COPY.home.contact.labels.markets)}</dt>
              <dd>DE · EU · US</dd>
              <dt>{t(COPY.home.contact.labels.availability)}</dt>
              <dd>{t(COPY.home.contact.labels.availabilityVal)}</dd>
            </dl>
          </div>

          <form
            data-reveal
            style={{ ["--reveal-delay" as never]: "100ms" }}
            action="mailto:hello@jokomerce.de"
            method="post"
            onSubmit={(e) => {
              e.preventDefault();
              alert(t(COPY.cta.replyNote));
            }}
          >
            <div className="field">
              <label>{t(COPY.home.contact.labels.name)}</label>
              <input type="text" placeholder="Max Mustermann" required name="name" />
            </div>
            <div className="field">
              <label>{t(COPY.home.contact.labels.company)}</label>
              <input type="text" placeholder="Brand GmbH" name="company" />
            </div>
            <div className="field">
              <label>{t(COPY.home.contact.labels.email)}</label>
              <input type="email" placeholder="max@brand.de" required name="email" />
            </div>
            <div className="field">
              <label>{t(COPY.home.contact.labels.channels)}</label>
              <input type="text" placeholder="Amazon, Otto, Shopify…" name="channels" />
            </div>
            <div className="field full">
              <label>{t(COPY.home.contact.labels.challenge)}</label>
              <textarea
                placeholder={t(COPY.home.contact.labels.challengePh)}
                rows={3}
                name="challenge"
              />
            </div>
            <div className="field">
              <label>{t(COPY.home.contact.labels.start)}</label>
              <select name="start">
                {t(COPY.home.contact.labels.startOpts).map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </div>
            <div className="field">
              <label>{t(COPY.home.contact.labels.revenue)}</label>
              <select name="revenue">
                <option>{t(COPY.home.contact.labels.revenueNA)}</option>
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
              <span className="note">{t(COPY.cta.replyNote)}</span>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
