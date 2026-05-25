import Image from "next/image";
import Link from "next/link";
import { Icon, type IconName } from "@/components/Icon";
import { JOACHIM } from "@/lib/photos";
import { Reveal, RevealOnView } from "@/components/RevealOnView";
import { ContactForm } from "@/components/ContactForm";

/* =========================================================
   Jokomerce v2 — onepager
   Pixel-faithful port of Jokomerce.html v2 design handoff.
   Content matches the "Neue passende Copy" brief 1:1.
   ========================================================= */

const MARQUEE: { label: string; logo?: string }[] = [
  { label: "Amazon", logo: "/brands/amazon.svg" },
  { label: "Otto" },
  { label: "Kaufland" },
  { label: "eBay", logo: "/brands/ebay.svg" },
  { label: "bol.com" },
  { label: "Walmart", logo: "/brands/walmart.svg" },
  { label: "Shopify", logo: "/brands/shopify.svg" },
  { label: "Google Ads", logo: "/brands/googleads.svg" },
  { label: "Zendesk", logo: "/brands/zendesk.svg" },
  { label: "Plentymarkets" },
  { label: "Billbee" },
  { label: "NetSuite" },
  { label: "JTL" },
];

const PROBLEMS = [
  "Amazon läuft, aber die Marge ist schlecht – TACOS/ACOS, Preise und Kostenstruktur passen nicht zusammen.",
  "Wir wollen Otto, Kaufland, Walmart & Co. aufbauen, aber es fehlt ein klares Setup und jemand, der es wirklich durchzieht.",
  "Wir brauchen 30–200 neue Produkte im Katalog – aber Katalogstruktur, Content und Prozesse sind nicht skalierbar.",
  "Unser Shopify-Shop wächst nicht, Conversion ist zu niedrig und Google Ads performt nicht stabil.",
  "Operativ brennt es: ERP, Workflows, Customer Support und Reporting sind Flickwerk.",
];

const AUDIENCE: { icon: IconName; title: string }[] = [
  { icon: "bag", title: "Marken / Hersteller mit Wachstum auf Amazon & Marktplätzen" },
  { icon: "globe", title: "Händler mit Multichannel-Expansion (DE/EU/US)" },
  { icon: "store", title: "D2C-Brands, die Shopify + Performance Marketing skalieren wollen" },
  { icon: "portfolio", title: "Aggregatoren / Portfolio-Owner, die P&L-Ownership und Execution brauchen" },
];

type BrandChip = { name: string; logo?: string };

const SERVICES: {
  icon: IconName;
  title: string;
  body: string;
  brands?: BrandChip[];
}[] = [
  {
    icon: "pl",
    title: "Head of Marketplace / Interim CMO",
    body: "End-to-end Verantwortung für Umsatz, Marge und Wachstum über alle relevanten Marktplätze — inklusive P&L, Forecasting und Teamsteuerung.",
  },
  {
    icon: "trend",
    title: "Amazon Growth & Catalogue Excellence",
    body: "Katalog-Rebuild, SEO- & Conversion-Content, Internationalisierung und Ads-Struktur — damit Amazon als Wachstumskanal profitabel skaliert.",
    brands: [{ name: "Amazon", logo: "/brands/amazon.svg" }],
  },
  {
    icon: "rocket",
    title: "Produktlaunch End-to-End",
    body: "Von der Produktidee über Marktvalidierung und Forecasts bis zum Launch-Setup und der Skalierung nach Volumen- und Profit-Zielen.",
  },
  {
    icon: "grid",
    title: "Multichannel Expansion (Otto, Kaufland, eBay, bol.com, Walmart …)",
    body: "Aufbau und Steuerung weiterer Marktplätze — mit sauberer Katalog-Architektur, Preislogik, Inventory- und Promotions-Prozessen.",
    brands: [
      { name: "Otto" },
      { name: "Kaufland" },
      { name: "eBay", logo: "/brands/ebay.svg" },
      { name: "bol.com" },
      { name: "Walmart", logo: "/brands/walmart.svg" },
    ],
  },
  {
    icon: "bag",
    title: "Shopify & D2C Growth (inkl. Google Ads)",
    body: "Shopify-Setup/Optimierung, Google Ads, Conversion-Optimierung und SEO — damit dein Shop zur Marken- und Profitmaschine wird.",
    brands: [
      { name: "Shopify", logo: "/brands/shopify.svg" },
      { name: "Google Ads", logo: "/brands/googleads.svg" },
    ],
  },
  {
    icon: "gear",
    title: "Operations, ERP & Tooling",
    body: "Prozesse, Datenfluss und Automatisierung über ERP/Tools (z. B. Plentymarkets, Billbee, NetSuite, JTL) — damit Wachstum nicht im Operativen scheitert.",
    brands: [{ name: "Plentymarkets" }, { name: "Billbee" }, { name: "NetSuite" }, { name: "JTL" }],
  },
  {
    icon: "chat",
    title: "Customer Support Setup (Zendesk)",
    body: "Aufbau eines skalierbaren, multichannel-fähigen Customer Support Teams in Zendesk — inkl. Prozesse, SLAs und Qualitätsstandards.",
    brands: [{ name: "Zendesk", logo: "/brands/zendesk.svg" }],
  },
  {
    icon: "spark",
    title: "AI Workflows & Agentic Execution",
    body: "Strukturen und Workflows, um Content, Launches und Reporting mit AI/Agenten schneller und wiederholbar umzusetzen.",
  },
];

const USPS: { icon: IconName; title: string; body: string }[] = [
  { icon: "pl", title: "P&L-first", body: "Wachstum ohne Profit ist kein Wachstum." },
  { icon: "check", title: "End-to-end Execution", body: "Strategie + operative Umsetzung statt PowerPoint." },
  { icon: "repeat", title: "Skalierbare Systeme", body: "Prozesse, SOPs und Automatisierung statt Ad-hoc-Firefighting." },
  { icon: "network", title: "Multichannel-Realität", body: "Amazon + weitere Marktplätze + D2C im Zusammenspiel." },
  { icon: "globe", title: "International", body: "Erfahrung in DE und US-Setups." },
];

const PHASES = [
  {
    step: "Phase 01",
    title: "Audit & Ziele",
    body: "Review von P&L, Katalog, Content, Ads, Prozessen und Tools. Definition von Zielen und KPIs (Umsatz, Marge, TACOS, Rankings, etc.).",
  },
  {
    step: "Phase 02",
    title: "Plan & Priorisierung",
    body: "Roadmap mit klaren Prioritäten: welche Kanäle, Produkte und Hebel zuerst — inklusive Ressourcen- und Budgetplanung.",
  },
  {
    step: "Phase 03",
    title: "Umsetzung",
    body: "Operative Umsetzung in den vereinbarten Bereichen: Katalog, Content, Ads, Launches, ERP/Workflows, Support, AI-Workflows.",
  },
  {
    step: "Phase 04",
    title: "Skalierung & Governance",
    body: "Aufbau von Reporting, SOPs und Automatisierung, damit das Wachstum stabil und steuerbar bleibt.",
  },
];

const SKILLS = [
  "Marketplace Growth & Profitability (P&L)",
  "Multichannel-Expansion (Amazon, Otto, Kaufland, eBay, bol.com, Walmart …)",
  "Shopify & Google Ads (D2C Growth)",
  "Katalog-Architektur & Content-Excellence",
  "ERP/Tooling & Operations-Setup",
  "Customer Support (Zendesk) & AI-Workflows",
];

const FAQ = [
  {
    q: "In welcher Rolle arbeitest du typischerweise?",
    a: (
      <>
        Meistens als <b>Head of Marketplace oder CMO auf Zeit</b> — mit klarer P&amp;L-Verantwortung und direkter
        Einbindung in dein Team.
      </>
    ),
  },
  {
    q: "Arbeitest du nur mit Amazon-Fokus oder auch Multichannel?",
    a: "Beides. Viele Projekte starten mit Amazon, werden dann aber auf weitere Marktplätze und D2C (Shopify) erweitert.",
  },
  {
    q: "Wie startest du typischerweise in ein Projekt?",
    a: (
      <>
        In der Regel mit einem <b>Audit</b> (P&amp;L, Katalog, Ads, Prozesse), aus dem eine klare Roadmap entsteht.
        Danach entscheiden wir, ob wir in einem Projekt-Setup oder als laufende Rolle zusammenarbeiten.
      </>
    ),
  },
  {
    q: "Arbeitest du remote oder vor Ort?",
    a: "Überwiegend remote, mit punktuellen Vor-Ort-Terminen, wenn es für Workshops oder Teamaufbau sinnvoll ist.",
  },
  {
    q: "Wie sieht das Preismodell aus?",
    a: (
      <>
        In der Regel auf <b>Retainer-Basis</b>, abgestimmt auf Umfang und Verantwortung. Im Erstgespräch klären wir,
        was für dein Setup sinnvoll ist.
      </>
    ),
  },
];

function BrandLogo({ src, alt }: { src: string; alt: string }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} width={20} height={20} />;
}

export default function Home() {
  return (
    <main id="top">
      {/* ============== HERO ============== */}
      <section className="hero">
        <div className="wrap">
          <div className="hero-grid">
            <Reveal>
              <span className="chip">
                <span className="dot-amber" />
                Freelancer · Head of Marketplace / CMO auf Zeit
              </span>
              <h1 className="display" style={{ marginTop: 24 }}>
                Marketplace &amp; D2C Wachstum &mdash; mit echter P&amp;L-Verantwortung.
              </h1>
              <p className="lead" style={{ marginTop: 20 }}>
                Ich baue und skaliere profitable Marketplace- und D2C-Geschäfte end-to-end &mdash; von Produktidee
                &amp; Forecasting über Katalog &amp; Content bis zu Ads, Prozessen und P&amp;L-Steuerung.
              </p>
              <div className="hero-actions">
                <Link href="#kontakt" className="cta-pill amber">
                  Erstgespräch anfragen <span aria-hidden="true">→</span>
                </Link>
                <Link href="#leistungen" className="cta-pill ghost">
                  Leistungen ansehen
                </Link>
              </div>
              <div className="trust-pill">
                <b>1000+ Produktlaunches</b> · Amazon, Otto, Kaufland, eBay, bol.com, Walmart &amp; Shopify
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="portrait">
                <div className="portrait-img">
                  <Image
                    src={JOACHIM.hero}
                    width={900}
                    height={1125}
                    alt="Joachim Heidel — Head of Marketplace & Founder, Jokomerce"
                    priority
                    sizes="(max-width: 980px) 100vw, 520px"
                  />
                </div>
                <div className="float-card dark">
                  <div className="big">P&amp;L</div>
                  <div className="lbl">
                    Umsatz, Marge und
                    <br />
                    Profitabilität im Fokus
                  </div>
                </div>
                <div className="float-card light">
                  <div className="eye">Positionierung</div>
                  <div className="ttl">
                    Strategisch denken.
                    <br />
                    Operativ liefern.
                    <br />
                    Profitabel skalieren.
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============== BRAND MARQUEE ============== */}
      <RevealOnView as="section" className="marquee-section" aria-label="Channels & Tools">
        <div className="marquee-label">Channels &amp; Tools, in denen ich arbeite</div>
        <div className="marquee-track">
          {[...MARQUEE, ...MARQUEE].map((m, i) => (
            <span className="m-item" key={i} aria-hidden={i >= MARQUEE.length}>
              {m.logo ? <BrandLogo src={m.logo} alt="" /> : null}
              {m.label}
            </span>
          ))}
        </div>
      </RevealOnView>

      {/* ============== PROBLEMS ============== */}
      <section id="problems">
        <div className="wrap">
          <div className="two-col">
            <Reveal>
              <span className="eyebrow">Problemsektion</span>
              <h2 className="section-title">Kommt dir eine dieser Situationen bekannt vor?</h2>
              <p className="lead" style={{ marginTop: 18 }}>
                Typische Startpunkte meiner Kunden:
              </p>
            </Reveal>
            <Reveal delay={80}>
              <div className="stack">
                {PROBLEMS.map((p, i) => (
                  <div className="row-card" key={i}>
                    <span className="num-circle">{String(i + 1).padStart(2, "0")}</span>
                    <p>{p}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
          <div className="mini-cta">
            <p>
              Wenn du dich hier wiedererkennst, brauchst du keinen weiteren Berater – sondern jemanden, der
              Verantwortung übernimmt.
            </p>
            <Link href="#kontakt" className="cta-pill amber">
              Erstgespräch anfragen <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ============== AUDIENCE ============== */}
      <section id="audience">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">Zielgruppe</span>
            <h2 className="section-title">Für wen ist Jokomerce ideal?</h2>
            <p className="lead" style={{ marginTop: 18 }}>
              Ich arbeite vor allem mit Marken und Händlern, die Marktplätze und D2C nicht nur „mitlaufen“ lassen
              wollen, sondern als echten Profit-Hebel nutzen möchten:
            </p>
          </Reveal>
          <div className="grid-4" style={{ marginTop: 32 }}>
            {AUDIENCE.map((a, i) => (
              <Reveal key={a.title} as="div" className="card audience-card" delay={i * 60}>
                <div className="ico-wrap">
                  <Icon name={a.icon} />
                </div>
                <h3 className="card-title">{a.title}</h3>
              </Reveal>
            ))}
          </div>
          <Reveal as="div" className="audience-note">
            <span className="eyebrow-inline">Faustregel</span>
            <p>
              Je komplexer dein Setup (Kanäle, Produkte, Länder), desto mehr zahlt sich ein klarer{" "}
              <b>Head of Marketplace / CMO auf Zeit</b> aus.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============== SERVICES ============== */}
      <section id="leistungen">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">Leistungs-Überblick</span>
            <h2 className="section-title">Was ich für dich übernehme.</h2>
          </Reveal>
          <div className="grid-4" style={{ marginTop: 32 }}>
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} as="div" className="card svc-card" delay={(i % 4) * 40}>
                <div className="ico-wrap">
                  <Icon name={s.icon} />
                </div>
                <h3 className="card-title">{s.title}</h3>
                <p>{s.body}</p>
                {s.brands ? (
                  <div className="brand-row">
                    {s.brands.map((b) => (
                      <span className="brand-chip" key={b.name}>
                        {b.logo ? <BrandLogo src={b.logo} alt="" /> : null}
                        {b.name}
                      </span>
                    ))}
                  </div>
                ) : null}
              </Reveal>
            ))}
          </div>
          <div className="mini-cta">
            <p>Details zu den Modulen besprechen wir im Erstgespräch — abgestimmt auf dein Setup.</p>
            <Link href="#kontakt" className="cta-pill amber">
              Erstgespräch anfragen <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ============== USPs ============== */}
      <section id="usps">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">USPs / Wertversprechen</span>
            <h2 className="section-title">Was Jokomerce von klassischer Beratung unterscheidet.</h2>
          </Reveal>
          <div className="grid-3" style={{ marginTop: 32 }}>
            {USPS.map((u, i) => (
              <Reveal key={u.title} as="div" className="card usp-card" delay={i * 60}>
                <span className="ico-wrap">
                  <Icon name={u.icon} />
                </span>
                <div>
                  <h3 className="card-title">{u.title}</h3>
                  <p>{u.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============== PROCESS ============== */}
      <section id="process">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">Prozess / Zusammenarbeit</span>
            <h2 className="section-title">So läuft unsere Zusammenarbeit ab.</h2>
            <p className="lead" style={{ marginTop: 18 }}>
              Statt losem „Beratungsgeplänkel“ gibt es einen klaren Ablauf in vier Phasen:
            </p>
          </Reveal>
          <div className="process-grid" style={{ marginTop: 32 }}>
            {PHASES.map((p, i) => (
              <Reveal key={p.title} as="div" className="card phase-card" delay={i * 60}>
                <div className="step">{p.step}</div>
                <div className="step-num">{p.title}</div>
                <p>{p.body}</p>
              </Reveal>
            ))}
          </div>
          <div className="mini-cta">
            <p>
              Ob wir mit einem Audit, einem Launch-Projekt oder direkt mit P&amp;L-Ownership starten, klären wir im
              Erstgespräch.
            </p>
            <Link href="#kontakt" className="cta-pill amber">
              Erstgespräch anfragen <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ============== CASES ============== */}
      <section id="cases">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">Cases / Referenzen</span>
            <h2 className="section-title">Ausgewählte Projekte &amp; Rollen (Auszug).</h2>
          </Reveal>
          <div className="logos-row" style={{ marginTop: 28 }}>
            <span className="lpill">Kronenburg Handel</span>
            <span className="lpill">Marwona GmbH</span>
            <span className="lpill">PLConcepts GmbH &amp; Co. KG</span>
            <span className="lpill">Moonster Products Ltd</span>
          </div>
          <Reveal as="div" className="card case-card" style={{ marginTop: 8 }}>
            <h3 className="card-title" style={{ fontSize: 20 }}>
              Case-Beispiel (anonymisiert)
            </h3>
            <div className="rows">
              <div className="row">
                <span className="k">Ausgangslage</span>
                <span className="v">
                  Marke mit starkem Amazon-Fokus, schwacher Profitabilität und kaum Multichannel-Präsenz.
                </span>
              </div>
              <div className="row">
                <span className="k">Ziel</span>
                <span className="v">
                  Profitables Wachstum auf Amazon + Aufbau weiterer Marktplätze (z. B. Otto, Kaufland) und D2C-Shop.
                </span>
              </div>
              <div className="row">
                <span className="k">Rolle</span>
                <span className="v">
                  Head of Marketplace / CMO auf Zeit mit <b>P&amp;L-Verantwortung</b>.
                </span>
              </div>
              <div className="row">
                <span className="k">Maßnahmen</span>
                <span className="v">
                  Katalog-Rebuild, Content-Optimierung, neue PPC-Struktur, Einführung von Reporting &amp;
                  Forecasting, Setup weiterer Marktplätze, Aufbau Customer Support in Zendesk.
                </span>
              </div>
              <div className="row">
                <span className="k">Ergebnis</span>
                <span className="v">
                  <b>Stabilere Rankings, bessere Contribution Margin, skalierbare Ads-Struktur</b> und klarer
                  Multichannel-Fahrplan.
                </span>
              </div>
            </div>
          </Reveal>
          <div className="mini-cta">
            <p>Details und weitere Cases gerne im persönlichen Gespräch.</p>
            <Link href="#kontakt" className="cta-pill amber">
              Erstgespräch anfragen <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ============== ABOUT ============== */}
      <section id="about">
        <div className="wrap">
          <div className="about-grid">
            <Reveal as="div" className="about-photo">
              <div className="about-photo-img">
                <Image
                  src={JOACHIM.about}
                  width={900}
                  height={1125}
                  alt="Joachim Heidel — Founder, Jokomerce"
                  sizes="(max-width: 980px) 100vw, 540px"
                />
              </div>
            </Reveal>
            <Reveal as="div" className="about-body" delay={60}>
              <span className="eyebrow">Über mich</span>
              <h2 className="section-title">Wer hinter Jokomerce steckt.</h2>
              <p style={{ marginTop: 18 }}>
                Ich bin <b>Joachim Heidel</b> und übernehme für Marken und Händler die Rolle als Head of Marketplace
                oder CMO auf Zeit.
              </p>
              <p>
                Ich verantworte Wachstum und Profitabilität (P&amp;L) über Amazon und weitere Marktplätze sowie
                Shopify-D2C — von der Strategie bis zur operativen Umsetzung.
              </p>
              <p>
                Mit Erfahrung aus Inhouse, Agentur und Interim-Setups habe ich <b>1000+ Produktlaunches</b>{" "}
                begleitet, globale Amazon-Kataloge optimiert und skalierbare Systeme aus Prozessen, Content, Ads
                und Automatisierung aufgebaut.
              </p>
              <p>
                Jokomerce steht für <b>pragmatische Umsetzung, klare Priorisierung und messbaren Business-Impact.</b>
              </p>

              <div style={{ marginTop: 8 }}>
                <span className="eyebrow">Kernkompetenzen</span>
              </div>
              <div className="skills-grid">
                {SKILLS.map((s) => (
                  <div className="skill" key={s}>
                    <span className="check">✓</span>
                    {s}
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 24 }}>
                <span className="eyebrow">Kurz-Timeline</span>
                <div
                  style={{
                    display: "flex",
                    gap: 10,
                    flexWrap: "wrap",
                    alignItems: "center",
                    marginTop: 8,
                  }}
                >
                  <span className="lpill">TrafficDesign</span>
                  <span style={{ color: "var(--ink-3)" }}>→</span>
                  <span className="lpill">WETHEBRANDS_</span>
                  <span style={{ color: "var(--ink-3)" }}>→</span>
                  <span className="lpill">Freelancer</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============== FAQ ============== */}
      <section id="faq">
        <div className="wrap">
          <div className="two-col">
            <Reveal>
              <span className="eyebrow">FAQ</span>
              <h2 className="section-title">Häufige Fragen.</h2>
              <p className="lead" style={{ marginTop: 18 }}>
                Was nicht beantwortet ist, klären wir gerne im Erstgespräch.
              </p>
            </Reveal>
            <Reveal as="div" className="faq-list" delay={80}>
              {FAQ.map((f, i) => (
                <details className="q" key={f.q} open={i === 0}>
                  <summary>{f.q}</summary>
                  <div className="a">{f.a}</div>
                </details>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============== FINAL CTA / CONTACT ============== */}
      <section id="kontakt">
        <div className="wrap">
          <div className="final">
            <div className="final-grid">
              <Reveal>
                <span className="eyebrow" style={{ color: "var(--accent)" }}>
                  Kontakt
                </span>
                <h2>
                  Lass uns über dein Marketplace- &amp; D2C-Setup <span className="acc">sprechen.</span>
                </h2>
                <p>
                  Wenn du dein Marktplatz- und D2C-Geschäft profitabel skalieren willst — mit klarer
                  P&amp;L-Verantwortung und echter Umsetzung — dann lass uns sprechen.
                </p>
                <p>
                  Im Erstgespräch schauen wir uns deine aktuelle Situation an und klären, ob und wie Jokomerce dich
                  konkret unterstützen kann.
                </p>
                <div style={{ marginTop: 24 }}>
                  <a href="mailto:hello@jokomerce.de" className="cta-pill amber">
                    Erstgespräch anfragen <span aria-hidden="true">→</span>
                  </a>
                </div>
              </Reveal>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
