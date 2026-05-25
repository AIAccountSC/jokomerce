import type { IconName } from "@/components/Icon";
import type { Lang } from "@/lib/i18n";

export type LocStr = { de: string; en: string };
export type LocList = { de: string[]; en: string[] };

export type ServiceStep = { num: string; h3: LocStr; p: LocStr };
export type ServiceDeliv = { lbl: string; h4: LocStr; p: LocStr };
export type ServiceInfo = { lbl: LocStr; val: LocStr; small: LocStr };
export type ServiceRelated = { slug: string; label: LocStr; h4: LocStr };

export type Service = {
  slug: string;
  icon: IconName;
  title: LocStr;
  eyebrow: LocStr;
  h1: LocStr;
  lead: LocStr; // may contain <b>/<span class='acc'>
  heroImg: string;
  anlassH2: LocStr;
  anlassText: LocStr;
  anlassBullets: LocList;
  ergH2: LocStr;
  ergBullets: LocList;
  highlight: LocStr;
  vorH2: LocStr;
  vorIntro: LocStr;
  steps: ServiceStep[];
  delivH2: LocStr;
  delivs: ServiceDeliv[];
  info: ServiceInfo[];
  related: ServiceRelated[];
  shortDesc: LocStr;
};

export const pick = (s: LocStr, lang: Lang) => (lang === "en" ? s.en : s.de);
export const pickList = (s: LocList, lang: Lang) => (lang === "en" ? s.en : s.de);

const REMOTE_KOELN: LocStr = { de: "Remote · Köln/Bonn", en: "Remote · Cologne/Bonn" };
const PUNKT_VOROR: LocStr = { de: "Punktuelle Vor-Ort-Tage", en: "Occasional on-site days" };
const Q1: LocStr = { de: "Q1 / 2026", en: "Q1 / 2026" };
const MANDAT: LocStr = { de: "1 Mandat offen", en: "1 slot open" };
const AUDIT_SPRINT: LocStr = {
  de: "Audit-Sprint möglich als Startpunkt",
  en: "Audit sprint possible as a starting point",
};

const SETUP_LBLS = {
  duration: { de: "Typische Dauer", en: "Typical duration" },
  engagement: { de: "Engagement", en: "Engagement" },
  location: { de: "Standort", en: "Location" },
  availability: { de: "Verfügbarkeit", en: "Availability" },
};

const REL = {
  head: { label: { de: "Leadership-Rolle", en: "Leadership role" }, h4: { de: "Head of Marketplace", en: "Head of Marketplace" } },
  amazon: { label: { de: "Wachstumsmodul", en: "Growth module" }, h4: { de: "Amazon Growth", en: "Amazon Growth" } },
  launch: { label: { de: "Launch-Modul", en: "Launch module" }, h4: { de: "Produktlaunch", en: "Product Launch" } },
  multi: { label: { de: "Expansion-Modul", en: "Expansion module" }, h4: { de: "Multichannel", en: "Multichannel" } },
  shop: { label: { de: "D2C-Modul", en: "D2C module" }, h4: { de: "Shopify & D2C", en: "Shopify & D2C" } },
  ops: { label: { de: "System-Modul", en: "System module" }, h4: { de: "Operations & ERP", en: "Operations & ERP" } },
  support: { label: { de: "Support-Modul", en: "Support module" }, h4: { de: "Customer Support", en: "Customer Support" } },
  ai: { label: { de: "Automatisierungs-Modul", en: "Automation module" }, h4: { de: "AI Workflows", en: "AI Workflows" } },
};

export const SERVICES: Service[] = [
  {
    slug: "head-of-marketplace",
    icon: "cmo",
    title: { de: "Head of Marketplace / Interim CMO", en: "Head of Marketplace / Interim CMO" },
    eyebrow: { de: "Leadership-Rolle", en: "Leadership role" },
    h1: { de: "Head of Marketplace / Interim CMO", en: "Head of Marketplace / Interim CMO" },
    lead: {
      de: "End-to-end Verantwortung für <b>Umsatz, Marge und Wachstum</b> über alle relevanten Marktplätze — inklusive P&L, Forecasting und Teamsteuerung. Strategie und operative Umsetzung in einer Person.",
      en: "End-to-end ownership of <b>revenue, margin and growth</b> across all relevant marketplaces — including P&L, forecasting and team management. Strategy and operational delivery in one person.",
    },
    shortDesc: {
      de: "End-to-end Verantwortung für Umsatz, Marge und Wachstum über alle relevanten Marktplätze — inklusive P&L, Forecasting und Teamsteuerung.",
      en: "End-to-end ownership of revenue, margin and growth across all relevant marketplaces — including P&L, forecasting and team management.",
    },
    heroImg: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=900&fit=crop&q=80",
    anlassH2: { de: "Wann brauchst du diese Rolle?", en: "When do you need this role?" },
    anlassText: {
      de: "Wenn Marketplace und D2C ein zentraler Wachstumshebel sind, aber bisher niemand die <b>volle Verantwortung über Strategie, Execution und Profitabilität</b> übernimmt. Klassische Berater liefern Decks. Du brauchst jemanden, der die Zahlen verantwortet.",
      en: "When marketplace and D2C are a central growth lever, but nobody so far owns <b>full responsibility for strategy, execution and profitability</b>. Classic consultants deliver decks. You need someone who owns the numbers.",
    },
    anlassBullets: {
      de: [
        "Du hast Wachstumsziele auf Amazon und weiteren Marktplätzen, aber keine durchgehende operative Verantwortung.",
        "Marketing, Katalog, Ads und Forecasting laufen nebeneinander her — nicht in einem System.",
        "Du brauchst eine Schnittstelle, die mit Einkauf, Logistik, Finance und Support spricht und Ergebnisse liefert.",
      ],
      en: [
        "You have growth targets on Amazon and other marketplaces, but no end-to-end operational ownership.",
        "Marketing, catalog, ads and forecasting run in parallel — not as one system.",
        "You need an interface that talks to procurement, logistics, finance and support and delivers results.",
      ],
    },
    ergH2: { de: "Was sich verbessert", en: "What improves" },
    ergBullets: {
      de: [
        "Klare P&L-Steuerung: Umsatz, Marge, Contribution, TACOS/ACOS, Forecast.",
        "Eine Person verantwortet Strategie, Roadmap und Wochen-Operativ.",
        "Konsistente Steuerung über alle Marktplätze und D2C-Kanäle.",
        "Reporting und Wochenrhythmus, der für dein Management-Team funktioniert.",
      ],
      en: [
        "Clear P&L control: revenue, margin, contribution, TACOS/ACOS, forecast.",
        "One person owns strategy, roadmap and the weekly operative rhythm.",
        "Consistent steering across all marketplaces and D2C channels.",
        "Reporting and weekly rhythm that works for your management team.",
      ],
    },
    highlight: {
      de: "<b>P&L-first.</b> Jede Maßnahme wird daran gemessen, was sie für Umsatz, Marge oder Geschwindigkeit der Execution bringt — nicht an Vanity-Metriken.",
      en: "<b>P&L-first.</b> Every action is measured by what it delivers for revenue, margin or speed of execution — not vanity metrics.",
    },
    vorH2: { de: "Vier Phasen — mit Deliverables je Phase.", en: "Four phases — with deliverables in each." },
    vorIntro: {
      de: "Statt losem „Beratungs-Pingpong“ gibt es einen klaren Ablauf. Am Ende jeder Phase entscheiden wir gemeinsam: weiter oder Stopp.",
      en: "Instead of loose consulting ping-pong, a clear flow. At the end of each phase we decide together: continue or stop.",
    },
    steps: [
      { num: "Phase 01", h3: { de: "Audit & P&L-Review", en: "Audit & P&L review" }, p: { de: "Review von Umsatz, Marge, Kostenstruktur, Ads-Effizienz, Katalog- und Operations-Setup.", en: "Review of revenue, margin, cost structure, ad efficiency, catalog and operations setup." } },
      { num: "Phase 02", h3: { de: "Strategie & Roadmap", en: "Strategy & roadmap" }, p: { de: "Klare Priorisierung: welche Kanäle, Produkte und Hebel zuerst — inklusive Budgetplanung.", en: "Clear priorities: which channels, products and levers first — including budget plan." } },
      { num: "Phase 03", h3: { de: "Wochen-Operativ", en: "Weekly operative" }, p: { de: "Operative Steuerung im wöchentlichen Takt: Katalog, Ads, Launches, Forecast, Reporting.", en: "Operational steering in a weekly cadence: catalog, ads, launches, forecast, reporting." } },
      { num: "Phase 04", h3: { de: "Skalierung & Hand-off", en: "Scale & hand-off" }, p: { de: "Aufbau von Reporting, SOPs und Team — damit das System auch ohne mich trägt.", en: "Build out reporting, SOPs and team — so the system runs without me." } },
    ],
    delivH2: { de: "Was konkret entsteht.", en: "What we deliver." },
    delivs: [
      { lbl: "D / 01", h4: { de: "P&L Cockpit", en: "P&L cockpit" }, p: { de: "Wöchentliche P&L mit Umsatz, Marge, Contribution und KPI-Drivers.", en: "Weekly P&L with revenue, margin, contribution and KPI drivers." } },
      { lbl: "D / 02", h4: { de: "Roadmap & OKRs", en: "Roadmap & OKRs" }, p: { de: "Quartals-Roadmap mit Prioritäten und messbaren Zielen.", en: "Quarterly roadmap with priorities and measurable goals." } },
      { lbl: "D / 03", h4: { de: "Forecasting-Modell", en: "Forecasting model" }, p: { de: "Absatz-, Budget- und Margenprognosen je Marktplatz und SKU.", en: "Sales, budget and margin forecasts per marketplace and SKU." } },
      { lbl: "D / 04", h4: { de: "Team-Setup", en: "Team setup" }, p: { de: "Rollen, Verantwortlichkeiten und Schnittstellen sauber definiert.", en: "Roles, responsibilities and interfaces cleanly defined." } },
    ],
    info: [
      { lbl: SETUP_LBLS.duration, val: { de: "6 — 12 Monate", en: "6 — 12 months" }, small: { de: "In der Regel 3–5 Tage / Woche · Retainer", en: "Typically 3–5 days / week · retainer" } },
      { lbl: SETUP_LBLS.engagement, val: { de: "Retainer + KPI-Ziele", en: "Retainer + KPI goals" }, small: AUDIT_SPRINT },
      { lbl: SETUP_LBLS.location, val: REMOTE_KOELN, small: PUNKT_VOROR },
      { lbl: SETUP_LBLS.availability, val: Q1, small: MANDAT },
    ],
    related: [
      { slug: "amazon-growth", label: REL.amazon.label, h4: REL.amazon.h4 },
      { slug: "produktlaunch", label: REL.launch.label, h4: REL.launch.h4 },
      { slug: "multichannel", label: REL.multi.label, h4: REL.multi.h4 },
      { slug: "shopify-d2c", label: REL.shop.label, h4: REL.shop.h4 },
    ],
  },

  {
    slug: "amazon-growth",
    icon: "trend",
    title: { de: "Amazon Growth & Catalogue Excellence", en: "Amazon Growth & Catalogue Excellence" },
    eyebrow: { de: "Wachstumsmodul", en: "Growth module" },
    h1: { de: "Amazon Growth & Catalogue Excellence", en: "Amazon Growth & Catalogue Excellence" },
    lead: {
      de: "Katalog-Rebuild, SEO- & Conversion-Content, Internationalisierung und Ads-Struktur — damit Amazon <b>profitabel skaliert</b>.",
      en: "Catalog rebuild, SEO & conversion content, internationalization and ad structure — so Amazon <b>scales profitably</b>.",
    },
    shortDesc: {
      de: "Amazon als profitablen Wachstumskanal aufbauen — Katalog, Content und Ads so strukturiert, dass das Fundament trägt und Ranking, Conversion und Marge gemeinsam wachsen.",
      en: "Build Amazon as a profitable growth channel — catalog, content and ads structured so the foundation holds and ranking, conversion and margin grow together.",
    },
    heroImg: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&h=900&fit=crop&q=80",
    anlassH2: { de: "Wann macht das Sinn?", en: "When does this make sense?" },
    anlassText: {
      de: "Wenn Amazon läuft, aber <b>Marge, Ranking oder Conversion stagnieren</b>. Wenn der Katalog historisch gewachsen ist, Content schwach performt oder Ads-Spend nicht in die Marge zahlt.",
      en: "When Amazon is running but <b>margin, ranking or conversion stagnate</b>. When the catalog grew organically, content underperforms or ad spend isn't paying into margin.",
    },
    anlassBullets: {
      de: [
        "TACOS / ACOS sind nicht im Griff, Profit wächst nicht im Verhältnis zu Umsatz.",
        "Rankings oder Conversion brechen ein — niemand weiß, woran es liegt.",
        "Internationalisierung (EU, US) wäre der nächste Hebel — aber das aktuelle Setup trägt das nicht.",
      ],
      en: [
        "TACOS / ACOS are out of control, profit isn't growing in line with revenue.",
        "Rankings or conversion break — nobody knows why.",
        "Internationalization (EU, US) would be the next lever — but the current setup can't carry it.",
      ],
    },
    ergH2: { de: "Was sich verbessert", en: "What improves" },
    ergBullets: {
      de: [
        "Klar strukturierter Katalog: Hauptprodukte, Variationen, Brand Stores, A+.",
        "Conversion-orientierter Content: Titel, Bullets, Bilder, A+ aufeinander abgestimmt.",
        "Ads-Struktur, die Marge und Ranking gleichzeitig optimiert — nicht nur ACOS.",
        "Sauberes Reporting auf SKU- und Marktebene, das Entscheidungen ermöglicht.",
      ],
      en: [
        "Clearly structured catalog: hero products, variations, Brand Stores, A+.",
        "Conversion-led content: title, bullets, images, A+ all aligned.",
        "Ads structure that optimizes margin and ranking together — not just ACOS.",
        "Clean reporting at SKU and market level that drives decisions.",
      ],
    },
    highlight: {
      de: "<b>Profit über Klicks.</b> Jede Maßnahme wird daran gemessen, was sie für die Contribution-Marge je SKU bringt.",
      en: "<b>Profit over clicks.</b> Every action is measured by what it delivers for contribution margin per SKU.",
    },
    vorH2: { de: "Vier Phasen — mit Deliverables je Phase.", en: "Four phases — with deliverables in each." },
    vorIntro: {
      de: "Vom Audit bis zur skalierten Ads-Struktur — jede Phase mit klarem Deliverable.",
      en: "From audit to scaled ads structure — every phase with a clear deliverable.",
    },
    steps: [
      { num: "Phase 01", h3: { de: "Catalog & Content Audit", en: "Catalog & content audit" }, p: { de: "Review von Listings, A+, Brand Store, Reviews, Backend-Keywords und Wettbewerb.", en: "Review of listings, A+, Brand Store, reviews, backend keywords and competition." } },
      { num: "Phase 02", h3: { de: "Catalog Rebuild", en: "Catalog rebuild" }, p: { de: "Neue Katalog-Architektur, Variationen, SEO-optimierter Content und A+ Layouts.", en: "New catalog architecture, variations, SEO-optimized content and A+ layouts." } },
      { num: "Phase 03", h3: { de: "Ads-Struktur", en: "Ads structure" }, p: { de: "Sponsored Products, Brands, Display — strukturiert nach Marge, nicht nur ACOS.", en: "Sponsored Products, Brands, Display — structured by margin, not just ACOS." } },
      { num: "Phase 04", h3: { de: "Internationalisierung", en: "Internationalization" }, p: { de: "Roll-out auf EU- oder US-Marktplätze mit lokalisierten Listings und Ads.", en: "Roll-out to EU or US marketplaces with localized listings and ads." } },
    ],
    delivH2: { de: "Was konkret entsteht.", en: "What we deliver." },
    delivs: [
      { lbl: "D / 01", h4: { de: "Catalog Blueprint", en: "Catalog blueprint" }, p: { de: "Strukturplan: Hauptprodukte, Variationen, Bundles, Brand Store.", en: "Structure plan: hero products, variations, bundles, Brand Store." } },
      { lbl: "D / 02", h4: { de: "Content Pack", en: "Content pack" }, p: { de: "Listings, A+ Content, Brand Store Layouts — produktionsreif.", en: "Listings, A+ content, Brand Store layouts — production-ready." } },
      { lbl: "D / 03", h4: { de: "Ads-Cockpit", en: "Ads cockpit" }, p: { de: "Kampagnenstruktur, Bid-Logik, Reporting nach SKU und Marge.", en: "Campaign structure, bid logic, reporting by SKU and margin." } },
      { lbl: "D / 04", h4: { de: "Internationaler Roll-out", en: "International roll-out" }, p: { de: "Lokalisierte Listings, Steuer-Setup, Fulfillment-Logik für EU oder US.", en: "Localized listings, tax setup, fulfillment logic for EU or US." } },
    ],
    info: [
      { lbl: SETUP_LBLS.duration, val: { de: "3 — 6 Monate", en: "3 — 6 months" }, small: { de: "Audit + Catalog Rebuild + Ads-Iteration", en: "Audit + catalog rebuild + ads iteration" } },
      { lbl: SETUP_LBLS.engagement, val: { de: "Projekt oder Retainer", en: "Project or retainer" }, small: AUDIT_SPRINT },
      { lbl: SETUP_LBLS.location, val: REMOTE_KOELN, small: PUNKT_VOROR },
      { lbl: SETUP_LBLS.availability, val: Q1, small: MANDAT },
    ],
    related: [
      { slug: "head-of-marketplace", ...REL.head },
      { slug: "multichannel", ...REL.multi },
      { slug: "produktlaunch", ...REL.launch },
      { slug: "operations-erp", ...REL.ops },
    ],
  },

  {
    slug: "produktlaunch",
    icon: "rocket",
    title: { de: "Produktlaunch End-to-End", en: "Product Launch End-to-End" },
    eyebrow: { de: "Launch-Modul", en: "Launch module" },
    h1: { de: "Produktlaunch End-to-End", en: "Product Launch End-to-End" },
    lead: {
      de: "Von der Produktidee über Marktvalidierung und Forecasts bis zum <b>Launch-Setup und der Skalierung</b> nach Volumen- und Profit-Zielen.",
      en: "From product idea through market validation and forecasts to <b>launch setup and scaling</b> against volume and profit targets.",
    },
    shortDesc: {
      de: "Von der Produktidee bis zum skalierten Bestseller — Marktvalidierung, Forecasting, Content, Listing-Setup und Launch-Ads als wiederholbare Methodik.",
      en: "From idea to scaled bestseller — market validation, forecasting, content, listing setup and launch ads as a repeatable method.",
    },
    heroImg: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&h=900&fit=crop&q=80",
    anlassH2: { de: "Wann beginnt ein Produktlaunch?", en: "When does a product launch begin?" },
    anlassText: {
      de: "Wenn <b>30–200 neue SKUs</b> in den Markt sollen und die bisherige Launch-Methodik nicht skaliert. Jeder Launch wird zum Einzelprojekt — das frisst Marge, Zeit und Teamenergie.",
      en: "When <b>30–200 new SKUs</b> need to go to market and the current launch method doesn't scale. Every launch becomes a one-off project — eating margin, time and team energy.",
    },
    anlassBullets: {
      de: [
        "Neue Produkte sollen schnell und profitabel im Markt landen.",
        "Launches funktionieren mal — aber sind nicht wiederholbar.",
        "Forecasting für neue SKUs ist eher Bauchgefühl als Modell.",
      ],
      en: [
        "New products need to land quickly and profitably in the market.",
        "Launches sometimes work — but are not repeatable.",
        "Forecasting for new SKUs is gut feel rather than a model.",
      ],
    },
    ergH2: { de: "Was sich verbessert", en: "What improves" },
    ergBullets: {
      de: [
        "Wiederholbarer Launch-Prozess: Idee → Validierung → Launch → Scale.",
        "Forecasting-Modell, das Absatz und Marge ab Tag 1 planbar macht.",
        "Launch-Content-Library: Listing-Templates, A+ Layouts, Visual Standards.",
        "Launch-Ads-Playbook: Strukturen, Budgets, KPIs je Phase.",
      ],
      en: [
        "Repeatable launch process: idea → validation → launch → scale.",
        "Forecasting model that makes sales and margin plannable from day 1.",
        "Launch content library: listing templates, A+ layouts, visual standards.",
        "Launch ads playbook: structures, budgets, KPIs by phase.",
      ],
    },
    highlight: {
      de: "<b>Launches als System</b> — nicht als Einzelprojekt. Jeder Launch macht den nächsten schneller.",
      en: "<b>Launches as a system</b> — not one-off projects. Every launch makes the next one faster.",
    },
    vorH2: { de: "Vier Phasen — mit Deliverables je Phase.", en: "Four phases — with deliverables in each." },
    vorIntro: { de: "Von der Idee bis zum skalierten Produkt — als wiederholbarer Prozess.", en: "From idea to scaled product — as a repeatable process." },
    steps: [
      { num: "Phase 01", h3: { de: "Idee & Validierung", en: "Idea & validation" }, p: { de: "Markt-, Wettbewerbs- und Nachfrage-Analyse. Produkt-Briefing für Sourcing.", en: "Market, competitive and demand analysis. Product briefing for sourcing." } },
      { num: "Phase 02", h3: { de: "Forecasting", en: "Forecasting" }, p: { de: "Absatz- und Margenmodell, Stückzahlen, Budgetplan.", en: "Sales and margin model, unit forecasts, budget plan." } },
      { num: "Phase 03", h3: { de: "Launch-Setup", en: "Launch setup" }, p: { de: "Listings, A+, Brand Store, Ads-Setup, Reviews-Strategie.", en: "Listings, A+, Brand Store, ads setup, reviews strategy." } },
      { num: "Phase 04", h3: { de: "Skalierung", en: "Scale" }, p: { de: "Performance-Optimierung, Bestseller-Strategie, Variationen, Cross-Channel.", en: "Performance optimization, bestseller strategy, variations, cross-channel." } },
    ],
    delivH2: { de: "Was konkret entsteht.", en: "What we deliver." },
    delivs: [
      { lbl: "D / 01", h4: { de: "Launch-Briefing", en: "Launch briefing" }, p: { de: "Markt-Analyse, Wettbewerbs-Mapping, Produkt-Brief für Sourcing.", en: "Market analysis, competitive mapping, product brief for sourcing." } },
      { lbl: "D / 02", h4: { de: "Forecast-Modell", en: "Forecast model" }, p: { de: "Absatz-, Budget- und Margenprognosen — je SKU und Kanal.", en: "Sales, budget and margin forecasts — per SKU and channel." } },
      { lbl: "D / 03", h4: { de: "Launch-Pack", en: "Launch pack" }, p: { de: "Listings, A+, Brand Store, Ads-Setup — produktionsreif.", en: "Listings, A+, Brand Store, ads setup — production-ready." } },
      { lbl: "D / 04", h4: { de: "Scale-Playbook", en: "Scale playbook" }, p: { de: "KPIs, Budget-Logik und Cross-Channel-Plan für die Skalierung.", en: "KPIs, budget logic and cross-channel plan for scaling." } },
    ],
    info: [
      { lbl: SETUP_LBLS.duration, val: { de: "3 — 6 Monate", en: "3 — 6 months" }, small: { de: "Je nach Anzahl Launches", en: "Depending on number of launches" } },
      { lbl: SETUP_LBLS.engagement, val: { de: "Projekt", en: "Project" }, small: { de: "Pro Launch oder als Launch-Welle", en: "Per launch or as a launch wave" } },
      { lbl: SETUP_LBLS.location, val: REMOTE_KOELN, small: PUNKT_VOROR },
      { lbl: SETUP_LBLS.availability, val: Q1, small: MANDAT },
    ],
    related: [
      { slug: "amazon-growth", ...REL.amazon },
      { slug: "head-of-marketplace", ...REL.head },
      { slug: "multichannel", ...REL.multi },
      { slug: "ai-workflows", ...REL.ai },
    ],
  },

  {
    slug: "multichannel",
    icon: "grid",
    title: { de: "Multichannel Expansion", en: "Multichannel Expansion" },
    eyebrow: { de: "Expansion-Modul", en: "Expansion module" },
    h1: { de: "Multichannel Expansion", en: "Multichannel Expansion" },
    lead: {
      de: "Aufbau und Steuerung weiterer Marktplätze — <b>saubere Katalog-Architektur</b>, Preislogik, Inventory- und Promo-Prozesse für Otto, Kaufland, Walmart, bol.com.",
      en: "Build and run additional marketplaces — <b>clean catalog architecture</b>, pricing logic, inventory and promo processes for Otto, Kaufland, Walmart, bol.com.",
    },
    shortDesc: {
      de: "Aufbau und Steuerung weiterer Marktplätze — saubere Katalog-Architektur, Preislogik, Inventory- und Promotions-Prozesse für Otto, Kaufland, Walmart und mehr.",
      en: "Build and run additional marketplaces — clean catalog architecture, pricing logic, inventory and promotion processes for Otto, Kaufland, Walmart and more.",
    },
    heroImg: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=900&fit=crop&q=80",
    anlassH2: { de: "Wann lohnt sich Multichannel?", en: "When is multichannel worth it?" },
    anlassText: {
      de: "Wenn Amazon stark läuft, aber <b>Konzentrationsrisiko</b> wächst — und weitere Marktplätze (Otto, Kaufland, Walmart, bol.com) als zusätzlicher Profit-Hebel offen liegen.",
      en: "When Amazon is strong, but <b>concentration risk</b> grows — and additional marketplaces (Otto, Kaufland, Walmart, bol.com) sit there as an additional profit lever.",
    },
    anlassBullets: {
      de: [
        "Amazon-Anteil am Umsatz ist hoch — du willst Risiko diversifizieren.",
        "Weitere Marktplätze stehen auf der Roadmap, aber niemand zieht sie durch.",
        "Katalog, Content und Preislogik passen nicht auf andere Marktplatz-Standards.",
      ],
      en: [
        "Amazon share of revenue is high — you want to diversify risk.",
        "Additional marketplaces are on the roadmap, but nobody pulls them through.",
        "Catalog, content and pricing logic don't fit other marketplace standards.",
      ],
    },
    ergH2: { de: "Was sich verbessert", en: "What improves" },
    ergBullets: {
      de: [
        "Sauber strukturierte Marktplatz-Setups mit konsistentem Catalog und Pricing.",
        "Promo- und Sale-Prozesse, die auf jedem Channel zuverlässig laufen.",
        "Inventory-Sync und Reporting über alle Channels in einem Layer.",
        "Channel-spezifische Ads- und Visibility-Strategien, die zur P&L beitragen.",
      ],
      en: [
        "Cleanly structured marketplace setups with consistent catalog and pricing.",
        "Promo and sale processes that run reliably on every channel.",
        "Inventory sync and reporting across all channels in one layer.",
        "Channel-specific ads and visibility strategies that contribute to the P&L.",
      ],
    },
    highlight: {
      de: "<b>Ein System, kein Flickwerk.</b> Marketplaces und D2C werden gemeinsam betrieben — ein Reporting, ein Operator.",
      en: "<b>One system, not patchwork.</b> Marketplaces and D2C are run together — one reporting layer, one operator.",
    },
    vorH2: { de: "Vier Phasen — mit Deliverables je Phase.", en: "Four phases — with deliverables in each." },
    vorIntro: { de: "Vom Audit der Channel-Eignung bis zum laufenden Betrieb.", en: "From channel-fit audit to ongoing operation." },
    steps: [
      { num: "Phase 01", h3: { de: "Channel-Audit", en: "Channel audit" }, p: { de: "Welche Marktplätze passen — Fit von Produkt, Marge, Wettbewerb, Operations.", en: "Which marketplaces fit — product, margin, competition, operations fit." } },
      { num: "Phase 02", h3: { de: "Setup & Integration", en: "Setup & integration" }, p: { de: "Konten-, Catalog-, Pricing- und Inventory-Setup je Marktplatz.", en: "Account, catalog, pricing and inventory setup per marketplace." } },
      { num: "Phase 03", h3: { de: "Launch je Channel", en: "Launch per channel" }, p: { de: "Content, Promo, Ads — und Aufbau eines stabilen Wochenrhythmus.", en: "Content, promo, ads — and building a stable weekly rhythm." } },
      { num: "Phase 04", h3: { de: "Skalierung & Steuerung", en: "Scale & steering" }, p: { de: "Cross-Channel-Reporting, Promo-Pläne, gemeinsame Pricing-Logik.", en: "Cross-channel reporting, promo plans, shared pricing logic." } },
    ],
    delivH2: { de: "Was konkret entsteht.", en: "What we deliver." },
    delivs: [
      { lbl: "D / 01", h4: { de: "Channel-Scorecard", en: "Channel scorecard" }, p: { de: "Bewertung pro Marktplatz: Fit, Aufwand, Marge, Risiko.", en: "Per-marketplace assessment: fit, effort, margin, risk." } },
      { lbl: "D / 02", h4: { de: "Multichannel-Setup", en: "Multichannel setup" }, p: { de: "Konten, Catalog-Mappings, Pricing-Logik, Inventory-Sync.", en: "Accounts, catalog mappings, pricing logic, inventory sync." } },
      { lbl: "D / 03", h4: { de: "Launch-Plan je Channel", en: "Per-channel launch plan" }, p: { de: "Phasenplan mit Content, Promo, Ads und KPI-Zielen.", en: "Phased plan with content, promo, ads and KPI goals." } },
      { lbl: "D / 04", h4: { de: "Reporting-Layer", en: "Reporting layer" }, p: { de: "Cross-Channel-Reporting für Management und Operativ.", en: "Cross-channel reporting for management and operations." } },
    ],
    info: [
      { lbl: SETUP_LBLS.duration, val: { de: "4 — 9 Monate", en: "4 — 9 months" }, small: { de: "Je nach Channel-Anzahl", en: "Depending on number of channels" } },
      { lbl: SETUP_LBLS.engagement, val: { de: "Projekt oder Retainer", en: "Project or retainer" }, small: AUDIT_SPRINT },
      { lbl: SETUP_LBLS.location, val: REMOTE_KOELN, small: PUNKT_VOROR },
      { lbl: SETUP_LBLS.availability, val: Q1, small: MANDAT },
    ],
    related: [
      { slug: "head-of-marketplace", ...REL.head },
      { slug: "amazon-growth", ...REL.amazon },
      { slug: "operations-erp", ...REL.ops },
      { slug: "shopify-d2c", ...REL.shop },
    ],
  },

  {
    slug: "shopify-d2c",
    icon: "bag",
    title: { de: "Shopify & D2C Growth", en: "Shopify & D2C Growth" },
    eyebrow: { de: "D2C-Modul", en: "D2C module" },
    h1: { de: "Shopify & D2C Growth", en: "Shopify & D2C Growth" },
    lead: {
      de: "Shopify-Setup oder -Optimierung, <b>Google Ads</b>, Conversion-Optimierung und SEO — damit dein Shop zur Marken- und Profitmaschine wird.",
      en: "Shopify setup or optimization, <b>Google Ads</b>, conversion optimization and SEO — so your shop becomes a brand and profit engine.",
    },
    shortDesc: {
      de: "Shopify als Marken- und Profitmaschine — Setup, Performance Marketing über Google Ads, Conversion-Optimierung und SEO als zusammenhängendes System.",
      en: "Shopify as brand and profit engine — setup, performance marketing via Google Ads, conversion optimization and SEO as one connected system.",
    },
    heroImg: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=1200&h=900&fit=crop&q=80",
    anlassH2: { de: "Wann passt dieses Modul?", en: "When does this module fit?" },
    anlassText: {
      de: "Wenn dein <b>Shopify-Shop läuft, aber nicht wächst</b>. Conversion bleibt unter Branchenschnitt, Google Ads sind instabil, Tracking ist Stückwerk.",
      en: "When your <b>Shopify shop runs but doesn't grow</b>. Conversion stays below benchmark, Google Ads are unstable, tracking is patchwork.",
    },
    anlassBullets: {
      de: [
        "Shopify-Conversion-Rate liegt unter Erwartung — Ursachen unklar.",
        "Google Ads laufen, aber Marge ist nicht steuerbar.",
        "Tracking ist lückenhaft, GA4/Consent-Mode/Server-Side ist nicht sauber.",
      ],
      en: [
        "Shopify conversion rate is below expectation — causes unclear.",
        "Google Ads are running, but margin isn't steerable.",
        "Tracking is patchy, GA4 / consent-mode / server-side isn't clean.",
      ],
    },
    ergH2: { de: "Was sich verbessert", en: "What improves" },
    ergBullets: {
      de: [
        "Shopify Setup mit klarer IA, sauberen Templates und stabilem Tech-Stack.",
        "Google Ads-Struktur, die Profit (nicht nur ROAS) optimiert.",
        "Tracking End-to-End: GA4, Consent-Mode, Server-Side, Enhanced Conversions.",
        "CRO-Roadmap mit messbaren Tests auf Landing-, Cart- und Checkout-Ebene.",
      ],
      en: [
        "Shopify setup with clear IA, clean templates and a stable tech stack.",
        "Google Ads structure that optimizes profit (not just ROAS).",
        "End-to-end tracking: GA4, consent mode, server-side, enhanced conversions.",
        "CRO roadmap with measurable tests at landing, cart and checkout level.",
      ],
    },
    highlight: {
      de: "<b>D2C als Profit-Channel</b> — nicht als Marketing-Spielwiese.",
      en: "<b>D2C as a profit channel</b> — not a marketing playground.",
    },
    vorH2: { de: "Vier Phasen — mit Deliverables je Phase.", en: "Four phases — with deliverables in each." },
    vorIntro: { de: "Vom Shop-Audit bis zur skalierten Performance-Marketing-Maschine.", en: "From shop audit to scaled performance-marketing machine." },
    steps: [
      { num: "Phase 01", h3: { de: "Shop & Tracking Audit", en: "Shop & tracking audit" }, p: { de: "Tech-, Conversion- und Tracking-Audit. Quick Wins identifiziert.", en: "Tech, conversion and tracking audit. Quick wins identified." } },
      { num: "Phase 02", h3: { de: "CRO & Setup", en: "CRO & setup" }, p: { de: "Template-, IA- und Checkout-Optimierung. Tracking End-to-End.", en: "Template, IA and checkout optimization. End-to-end tracking." } },
      { num: "Phase 03", h3: { de: "Google Ads & SEO", en: "Google Ads & SEO" }, p: { de: "Profitable Ads-Struktur, SEO-Roadmap, Content-Hub-Aufbau.", en: "Profitable ads structure, SEO roadmap, content-hub buildout." } },
      { num: "Phase 04", h3: { de: "Skalierung", en: "Scale" }, p: { de: "A/B-Testing, neue Funnels, Skalierungs-Pfad für Budget und Marge.", en: "A/B testing, new funnels, scaling path for budget and margin." } },
    ],
    delivH2: { de: "Was konkret entsteht.", en: "What we deliver." },
    delivs: [
      { lbl: "D / 01", h4: { de: "Shop-Audit", en: "Shop audit" }, p: { de: "Tech, Conversion und Tracking sauber dokumentiert.", en: "Tech, conversion and tracking documented cleanly." } },
      { lbl: "D / 02", h4: { de: "CRO-Roadmap", en: "CRO roadmap" }, p: { de: "Priorisierte Test-Roadmap mit Hypothesen und KPIs.", en: "Prioritized test roadmap with hypotheses and KPIs." } },
      { lbl: "D / 03", h4: { de: "Ads-Cockpit", en: "Ads cockpit" }, p: { de: "Google Ads-Struktur mit Reporting nach Marge, nicht nur ROAS.", en: "Google Ads structure with reporting by margin, not just ROAS." } },
      { lbl: "D / 04", h4: { de: "Tracking-Stack", en: "Tracking stack" }, p: { de: "GA4, Consent-Mode, Server-Side, Enhanced Conversions.", en: "GA4, consent mode, server-side, enhanced conversions." } },
    ],
    info: [
      { lbl: SETUP_LBLS.duration, val: { de: "3 — 9 Monate", en: "3 — 9 months" }, small: { de: "Je nach Tech-Stack und Ads-Volumen", en: "Depending on tech stack and ad volume" } },
      { lbl: SETUP_LBLS.engagement, val: { de: "Projekt oder Retainer", en: "Project or retainer" }, small: { de: "Audit-Sprint möglich", en: "Audit sprint possible" } },
      { lbl: SETUP_LBLS.location, val: REMOTE_KOELN, small: PUNKT_VOROR },
      { lbl: SETUP_LBLS.availability, val: Q1, small: MANDAT },
    ],
    related: [
      { slug: "head-of-marketplace", ...REL.head },
      { slug: "amazon-growth", ...REL.amazon },
      { slug: "operations-erp", ...REL.ops },
      { slug: "ai-workflows", ...REL.ai },
    ],
  },

  {
    slug: "operations-erp",
    icon: "gear",
    title: { de: "Operations, ERP & Tooling", en: "Operations, ERP & Tooling" },
    eyebrow: { de: "System-Modul", en: "System module" },
    h1: { de: "Operations, ERP & Tooling", en: "Operations, ERP & Tooling" },
    lead: {
      de: "Prozesse, Datenfluss und Automatisierung über <b>ERP / Tools</b> — damit Wachstum nicht im Operativen scheitert.",
      en: "Processes, data flow and automation via <b>ERP / tools</b> — so growth doesn't fail in the operational layer.",
    },
    shortDesc: {
      de: "Saubere Prozesse, Datenfluss und Automatisierung über ERP und Tools — damit Wachstum nicht im Operativen scheitert. Erfahrung mit Plentymarkets, Billbee, NetSuite und JTL.",
      en: "Clean processes, data flow and automation via ERP and tools — so growth doesn't fail in the operational layer. Experience with Plentymarkets, Billbee, NetSuite and JTL.",
    },
    heroImg: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=900&fit=crop&q=80",
    anlassH2: { de: "Wann brauchst du ein Operations-Setup?", en: "When do you need an operations setup?" },
    anlassText: {
      de: "Wenn Wachstum kommt — aber <b>ERP, Workflows, Support und Reporting Flickwerk</b> sind. Jeder Channel anders, jedes Reporting Handarbeit. Tools sind da, aber niemand orchestriert sie.",
      en: "When growth comes — but <b>ERP, workflows, support and reporting are patchwork</b>. Every channel handled differently, every report assembled by hand. Tools exist, but nobody orchestrates them.",
    },
    anlassBullets: {
      de: [
        "ERP / Fulfillment-Setup wurde historisch aufgebaut und stößt an Grenzen.",
        "Reporting wird wöchentlich von Hand zusammengebastelt.",
        "Manuelle Schritte zwischen Order, ERP, Versand, Support und Reporting.",
      ],
      en: [
        "ERP / fulfillment setup grew organically and hits its limits.",
        "Reporting is hand-built weekly.",
        "Manual steps between order, ERP, shipping, support and reporting.",
      ],
    },
    ergH2: { de: "Was sich verbessert", en: "What improves" },
    ergBullets: {
      de: [
        "ERP-Setup mit klarem Datenfluss von Order bis Reporting.",
        "Sauberes Reporting-Layer (Cross-Channel, Cross-Country).",
        "Automatisierte Schnittstellen zwischen Marketplaces, D2C, ERP und Support.",
        "SOPs und Tool-Standards, die das Team produktiver machen.",
      ],
      en: [
        "ERP setup with clear data flow from order through reporting.",
        "Clean reporting layer (cross-channel, cross-country).",
        "Automated interfaces between marketplaces, D2C, ERP and support.",
        "SOPs and tool standards that make the team more productive.",
      ],
    },
    highlight: {
      de: "<b>Operations als Wettbewerbsvorteil.</b> Stabile Prozesse skalieren mit Wachstum mit — statt es zu bremsen.",
      en: "<b>Operations as a competitive advantage.</b> Stable processes scale with growth — instead of slowing it down.",
    },
    vorH2: { de: "Vier Phasen — mit Deliverables je Phase.", en: "Four phases — with deliverables in each." },
    vorIntro: { de: "Vom ERP-Audit bis zur automatisierten Datenkette.", en: "From ERP audit to automated data chain." },
    steps: [
      { num: "Phase 01", h3: { de: "Ops-Audit", en: "Ops audit" }, p: { de: "Mapping aller Prozesse, Tools, Schnittstellen und Bruchstellen.", en: "Mapping of all processes, tools, interfaces and break points." } },
      { num: "Phase 02", h3: { de: "ERP- & Tool-Setup", en: "ERP & tool setup" }, p: { de: "Plenty / Billbee / NetSuite / JTL — Setup, Konfiguration, Migration.", en: "Plenty / Billbee / NetSuite / JTL — setup, configuration, migration." } },
      { num: "Phase 03", h3: { de: "Integration & Automatisierung", en: "Integration & automation" }, p: { de: "Schnittstellen zwischen Marketplaces, D2C, ERP, Support, Reporting.", en: "Interfaces between marketplaces, D2C, ERP, support, reporting." } },
      { num: "Phase 04", h3: { de: "SOPs & Reporting", en: "SOPs & reporting" }, p: { de: "Dokumentierte Prozesse, Reporting-Layer, Team-Onboarding.", en: "Documented processes, reporting layer, team onboarding." } },
    ],
    delivH2: { de: "Was konkret entsteht.", en: "What we deliver." },
    delivs: [
      { lbl: "D / 01", h4: { de: "Ops-Map", en: "Ops map" }, p: { de: "Visualisierung aller Prozesse, Tools, Datenflüsse und Engpässe.", en: "Visualization of all processes, tools, data flows and bottlenecks." } },
      { lbl: "D / 02", h4: { de: "ERP-Setup", en: "ERP setup" }, p: { de: "Konfiguriertes ERP — Stammdaten, Bestände, Aufträge, Schnittstellen.", en: "Configured ERP — master data, inventory, orders, interfaces." } },
      { lbl: "D / 03", h4: { de: "Automatisierungs-Layer", en: "Automation layer" }, p: { de: "Schnittstellen und Workflows zwischen allen Systemen.", en: "Interfaces and workflows between all systems." } },
      { lbl: "D / 04", h4: { de: "SOP-Bibliothek", en: "SOP library" }, p: { de: "Dokumentierte Prozesse — vom Onboarding bis zum Monatsabschluss.", en: "Documented processes — from onboarding to monthly close." } },
    ],
    info: [
      { lbl: SETUP_LBLS.duration, val: { de: "4 — 9 Monate", en: "4 — 9 months" }, small: { de: "Je nach System-Komplexität", en: "Depending on system complexity" } },
      { lbl: SETUP_LBLS.engagement, val: { de: "Projekt oder Retainer", en: "Project or retainer" }, small: AUDIT_SPRINT },
      { lbl: SETUP_LBLS.location, val: REMOTE_KOELN, small: { de: "Vor-Ort für ERP-Workshops", en: "On-site for ERP workshops" } },
      { lbl: SETUP_LBLS.availability, val: Q1, small: MANDAT },
    ],
    related: [
      { slug: "head-of-marketplace", ...REL.head },
      { slug: "multichannel", ...REL.multi },
      { slug: "customer-support", ...REL.support },
      { slug: "ai-workflows", ...REL.ai },
    ],
  },

  {
    slug: "customer-support",
    icon: "chat",
    title: { de: "Customer Support Setup (Zendesk)", en: "Customer Support Setup (Zendesk)" },
    eyebrow: { de: "Support-Modul", en: "Support module" },
    h1: { de: "Customer Support Setup (Zendesk)", en: "Customer Support Setup (Zendesk)" },
    lead: {
      de: "Skalierbares, multichannel-fähiges Customer-Support-Team in <b>Zendesk</b> — Prozesse, SLAs und Qualitätsstandards.",
      en: "Scalable, multichannel customer support team in <b>Zendesk</b> — processes, SLAs and quality standards.",
    },
    shortDesc: {
      de: "Aufbau eines skalierbaren, multichannel-fähigen Customer Support Teams in Zendesk — inklusive Prozesse, Makros, SLAs und Qualitätsstandards.",
      en: "Build a scalable, multichannel customer support team in Zendesk — including processes, macros, SLAs and quality standards.",
    },
    heroImg: "https://images.unsplash.com/photo-1553775282-20af80779df7?w=1200&h=900&fit=crop&q=80",
    anlassH2: { de: "Wann lohnt sich ein Support-Setup?", en: "When is a support setup worthwhile?" },
    anlassText: {
      de: "Wenn Support <b>aus dem E-Mail-Postfach rauswächst</b>: Mehrere Kanäle, mehrere Marktplätze, internationales Volumen. Qualität schwankt, Kennzahlen fehlen.",
      en: "When support <b>outgrows the inbox</b>: multiple channels, multiple marketplaces, international volume. Quality varies, metrics are missing.",
    },
    anlassBullets: {
      de: [
        "Anfragen kommen aus Amazon, Otto, Shopify, Mail, Social — alles unsortiert.",
        "Antwortzeiten und Qualität schwanken — keine SLAs, keine Standards.",
        "Reporting auf Volumen, Themen, NPS oder Marketplaces fehlt.",
      ],
      en: [
        "Inquiries arrive from Amazon, Otto, Shopify, mail, social — all unsorted.",
        "Response times and quality vary — no SLAs, no standards.",
        "Reporting on volume, topics, NPS or marketplaces is missing.",
      ],
    },
    ergH2: { de: "Was sich verbessert", en: "What improves" },
    ergBullets: {
      de: [
        "Zentralisiertes Support-Tool (Zendesk) mit allen Channels integriert.",
        "Makros, Tags und Workflows, die Antwortqualität und -geschwindigkeit erhöhen.",
        "SLAs, Reporting und Eskalationspfade — auch über Sprachen hinweg.",
        "Aufbau / Onboarding des Support-Teams (Inhouse oder extern).",
      ],
      en: [
        "Centralized support tool (Zendesk) with all channels integrated.",
        "Macros, tags and workflows that improve answer quality and speed.",
        "SLAs, reporting and escalation paths — across languages too.",
        "Buildout / onboarding of the support team (in-house or external).",
      ],
    },
    highlight: {
      de: "<b>Support als Marken-Touchpoint.</b> Saubere Prozesse schützen Marge und Reviews — und entlasten Operations.",
      en: "<b>Support as a brand touchpoint.</b> Clean processes protect margin and reviews — and offload operations.",
    },
    vorH2: { de: "Vier Phasen — mit Deliverables je Phase.", en: "Four phases — with deliverables in each." },
    vorIntro: { de: "Vom Setup bis zum laufenden Support-Team im Wochenrhythmus.", en: "From setup to a support team running on a weekly rhythm." },
    steps: [
      { num: "Phase 01", h3: { de: "Support-Audit", en: "Support audit" }, p: { de: "Channel-, Volumen- und Themen-Analyse. Aktueller Status und Lücken.", en: "Channel, volume and topic analysis. Current status and gaps." } },
      { num: "Phase 02", h3: { de: "Zendesk-Setup", en: "Zendesk setup" }, p: { de: "Channels, Triggers, Makros, Tags, SLAs, Reporting konfiguriert.", en: "Channels, triggers, macros, tags, SLAs, reporting configured." } },
      { num: "Phase 03", h3: { de: "Team-Buildout", en: "Team buildout" }, p: { de: "Rollen, Trainings, Multilingual-Setup, Qualitätsstandards.", en: "Roles, training, multilingual setup, quality standards." } },
      { num: "Phase 04", h3: { de: "Skalierung & Reporting", en: "Scale & reporting" }, p: { de: "Monatliche Reviews, NPS, Volumen-Forecasts, Optimierung.", en: "Monthly reviews, NPS, volume forecasts, optimization." } },
    ],
    delivH2: { de: "Was konkret entsteht.", en: "What we deliver." },
    delivs: [
      { lbl: "D / 01", h4: { de: "Support-Audit", en: "Support audit" }, p: { de: "Aktueller Stand, Themen, Volumina, Channel-Mix.", en: "Current state, topics, volumes, channel mix." } },
      { lbl: "D / 02", h4: { de: "Zendesk-Konfiguration", en: "Zendesk configuration" }, p: { de: "Triggers, Makros, Tags, SLAs, Reporting — fertig eingerichtet.", en: "Triggers, macros, tags, SLAs, reporting — ready to use." } },
      { lbl: "D / 03", h4: { de: "Team-Setup", en: "Team setup" }, p: { de: "Rollen, Trainings, Skripte, Qualitätsstandards.", en: "Roles, training, scripts, quality standards." } },
      { lbl: "D / 04", h4: { de: "Reporting-Cockpit", en: "Reporting cockpit" }, p: { de: "Monatliche Reviews mit Volumen, Themen, NPS, Marketplace-Splits.", en: "Monthly reviews with volume, topics, NPS, marketplace splits." } },
    ],
    info: [
      { lbl: SETUP_LBLS.duration, val: { de: "3 — 6 Monate", en: "3 — 6 months" }, small: { de: "Je nach Team-Größe und Channel-Anzahl", en: "Depending on team size and channel count" } },
      { lbl: SETUP_LBLS.engagement, val: { de: "Projekt oder Retainer", en: "Project or retainer" }, small: AUDIT_SPRINT },
      { lbl: SETUP_LBLS.location, val: REMOTE_KOELN, small: { de: "Vor-Ort für Team-Onboarding", en: "On-site for team onboarding" } },
      { lbl: SETUP_LBLS.availability, val: Q1, small: MANDAT },
    ],
    related: [
      { slug: "head-of-marketplace", ...REL.head },
      { slug: "operations-erp", ...REL.ops },
      { slug: "multichannel", ...REL.multi },
      { slug: "ai-workflows", ...REL.ai },
    ],
  },

  {
    slug: "ai-workflows",
    icon: "spark",
    title: { de: "AI Workflows & Agentic Execution", en: "AI Workflows & Agentic Execution" },
    eyebrow: { de: "Automatisierungs-Modul", en: "Automation module" },
    h1: { de: "AI Workflows & Agentic Execution", en: "AI Workflows & Agentic Execution" },
    lead: {
      de: "Strukturen und Workflows, um <b>Content, Launches und Reporting</b> mit AI / Agenten schneller und wiederholbar umzusetzen.",
      en: "Structures and workflows to execute <b>content, launches and reporting</b> with AI / agents — faster and repeatable.",
    },
    shortDesc: {
      de: "Strukturen und Workflows, um Content, Launches und Reporting mit AI und Agenten schneller und wiederholbar umzusetzen. Praktisch, nicht hype-getrieben.",
      en: "Structures and workflows to ship content, launches and reporting with AI and agents — faster and repeatable. Practical, not hype-driven.",
    },
    heroImg: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&h=900&fit=crop&q=80",
    anlassH2: { de: "Wann ist AI sinnvoll?", en: "When does AI make sense?" },
    anlassText: {
      de: "Wenn Wachstum durch <b>manuelle Operative gebremst</b> wird — Content, Listings, Übersetzungen, Reporting. AI / Agenten sind ein realer Hebel, wenn die Workflows sauber strukturiert sind.",
      en: "When growth is <b>throttled by manual operations</b> — content, listings, translations, reporting. AI / agents are a real lever once workflows are properly structured.",
    },
    anlassBullets: {
      de: [
        "Content-Produktion ist Engpass — Listings, A+, Übersetzungen, Social.",
        "Reporting wird wöchentlich manuell zusammengebaut.",
        "Launches und Catalog-Workflows skalieren nicht, weil sie Handarbeit sind.",
      ],
      en: [
        "Content production is the bottleneck — listings, A+, translations, social.",
        "Reporting is built manually each week.",
        "Launches and catalog workflows don't scale because they're hand-built.",
      ],
    },
    ergH2: { de: "Was sich verbessert", en: "What improves" },
    ergBullets: {
      de: [
        "AI-gestützte Content-Workflows (Listings, A+, Übersetzungen, Social).",
        "Automatisiertes Reporting auf Marketplace-, SKU- und Marken-Ebene.",
        "Agenten für Catalog-Maintenance, Pricing-Checks und Content-QA.",
        "Klare Standards: was AI macht, was Mensch macht — kein Wildwuchs.",
      ],
      en: [
        "AI-assisted content workflows (listings, A+, translations, social).",
        "Automated reporting at marketplace, SKU and brand level.",
        "Agents for catalog maintenance, pricing checks and content QA.",
        "Clear standards: what AI does, what humans do — no sprawl.",
      ],
    },
    highlight: {
      de: "<b>AI als Operator</b> — nicht als Demo. Jeder Workflow wird daran gemessen, was er für die P&L bringt.",
      en: "<b>AI as an operator</b> — not a demo. Every workflow is measured by what it delivers for the P&L.",
    },
    vorH2: { de: "Vier Phasen — mit Deliverables je Phase.", en: "Four phases — with deliverables in each." },
    vorIntro: { de: "Von der Workflow-Map bis zu produktiven AI-Operatoren.", en: "From workflow map to productive AI operators." },
    steps: [
      { num: "Phase 01", h3: { de: "Workflow-Audit", en: "Workflow audit" }, p: { de: "Mapping der manuellen Workflows. AI-Potenzial-Ranking nach Aufwand und Impact.", en: "Mapping of manual workflows. AI-potential ranking by effort and impact." } },
      { num: "Phase 02", h3: { de: "Prototypen", en: "Prototypes" }, p: { de: "1–3 priorisierte Workflows als Prototypen — Content, Reporting, Catalog.", en: "1–3 prioritized workflows as prototypes — content, reporting, catalog." } },
      { num: "Phase 03", h3: { de: "Produktivsetzung", en: "Productionization" }, p: { de: "Workflows in den Tages-/Wochenbetrieb integriert, mit klaren SOPs.", en: "Workflows integrated into daily/weekly operations, with clear SOPs." } },
      { num: "Phase 04", h3: { de: "Skalierung & Governance", en: "Scale & governance" }, p: { de: "Weitere Workflows ergänzt. Governance, QA und Tool-Standards.", en: "Further workflows added. Governance, QA and tool standards." } },
    ],
    delivH2: { de: "Was konkret entsteht.", en: "What we deliver." },
    delivs: [
      { lbl: "D / 01", h4: { de: "Workflow-Map", en: "Workflow map" }, p: { de: "Visualisierung manueller Prozesse mit AI-Potenzial-Score.", en: "Visualization of manual processes with AI-potential score." } },
      { lbl: "D / 02", h4: { de: "Prototypen", en: "Prototypes" }, p: { de: "1–3 produktiv einsetzbare AI-Workflows — Content, Reporting, Catalog.", en: "1–3 production-ready AI workflows — content, reporting, catalog." } },
      { lbl: "D / 03", h4: { de: "AI-SOPs", en: "AI SOPs" }, p: { de: "Dokumentierte Prozesse: was macht AI, was macht Mensch, wie wird gemessen.", en: "Documented processes: what AI does, what humans do, how it's measured." } },
      { lbl: "D / 04", h4: { de: "Skalierungs-Plan", en: "Scaling plan" }, p: { de: "Roadmap für weitere Workflows, Governance, Tool-Standards.", en: "Roadmap for further workflows, governance, tool standards." } },
    ],
    info: [
      { lbl: SETUP_LBLS.duration, val: { de: "3 — 6 Monate", en: "3 — 6 months" }, small: { de: "Workflow-Audit + 1–3 Workflows produktiv", en: "Workflow audit + 1–3 workflows in production" } },
      { lbl: SETUP_LBLS.engagement, val: { de: "Projekt oder Retainer", en: "Project or retainer" }, small: AUDIT_SPRINT },
      { lbl: SETUP_LBLS.location, val: REMOTE_KOELN, small: PUNKT_VOROR },
      { lbl: SETUP_LBLS.availability, val: Q1, small: MANDAT },
    ],
    related: [
      { slug: "operations-erp", ...REL.ops },
      { slug: "amazon-growth", ...REL.amazon },
      { slug: "produktlaunch", ...REL.launch },
      { slug: "customer-support", ...REL.support },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
