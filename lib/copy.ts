/**
 * String dictionaries for DE / EN.
 * Keep keys flat-namespaced (`home.hero.h1`, `footer.copy`, …).
 *
 * Pages call `useT()` and pass `{ de, en }` pairs (often referencing
 * these helpers via the `t()` helper at the bottom).
 */

export const COPY = {
  // ===== NAV / FOOTER / CTAs =====
  cta: {
    bookCall: { de: "Erstgespräch anfragen", en: "Request a first call" },
    bookCallShort: { de: "Erstgespräch", en: "Book a call" },
    viewServices: { de: "Leistungen ansehen", en: "See services" },
    sendInquiry: { de: "Anfrage senden", en: "Send inquiry" },
    replyNote: { de: "Antwort binnen 1 Werktag.", en: "Reply within 1 working day." },
    available: { de: "Q1 / 2026 — 1 Mandat verfügbar", en: "Q1 / 2026 — 1 slot open" },
  },
  footer: {
    sitepath: { de: "Seite", en: "Site" },
    site: { de: "Site", en: "Site" },
    contact: { de: "Kontakt", en: "Contact" },
    legal: { de: "Legal", en: "Legal" },
    home: { de: "Startseite", en: "Home" },
    cases: { de: "Cases", en: "Cases" },
    about: { de: "Über mich", en: "About" },
    process: { de: "Prozess", en: "Process" },
    services: { de: "Leistungen", en: "Services" },
    all: { de: "Alle ansehen", en: "View all" },
    firstCall: { de: "Erstgespräch", en: "First call" },
    imprint: { de: "Impressum", en: "Imprint" },
    privacy: { de: "Datenschutz", en: "Privacy" },
    copy: { de: "© 2026 Joachim Heidel · Jokomerce", en: "© 2026 Joachim Heidel · Jokomerce" },
    tag: {
      de: "Gebaut in Köln · Für Marketplace-Operator.",
      en: "Built in Cologne · Crafted for marketplace operators.",
    },
    blurb: {
      de: "Marketplace & D2C Wachstum mit P&L-Verantwortung. Joachim Heidel · Köln/Bonn · DE & US.",
      en: "Marketplace & D2C growth with real P&L ownership. Joachim Heidel · Cologne/Bonn · DE & US.",
    },
  },

  // ===== FINAL CTA (shared dark section) =====
  finalCTA: {
    h2De: "Lass uns über dein <span class='acc'>Marketplace</span>- & D2C-Setup sprechen.",
    h2En: "Let's talk about your <span class='acc'>marketplace</span> & D2C setup.",
    body: {
      de: "Wenn du dein Marktplatz- und D2C-Geschäft profitabel skalieren willst — mit klarer P&L-Verantwortung und echter Umsetzung — dann lass uns sprechen. Im Erstgespräch schauen wir uns deine aktuelle Situation an und klären, wie Jokomerce dich konkret unterstützen kann.",
      en: "If you want to scale your marketplace and D2C business profitably — with clear P&L ownership and real execution — let's talk. In the first call we look at your current situation and clarify how Jokomerce can specifically support you.",
    },
  },

  // ===== HOMEPAGE =====
  home: {
    hero: {
      eyebrow: { de: "Marketplace Operator · End-to-End", en: "Marketplace operator · End-to-end" },
      h1De: "Marketplace- & D2C-Wachstum—mit echter <span class='acc'>P&L-Verantwortung</span>.",
      h1En: "Marketplace & D2C growth—with real <span class='acc'>P&L ownership</span>.",
      lead: {
        de: "Ich baue und skaliere profitable Marketplace- und D2C-Geschäfte <b>end-to-end</b> — von Produktidee und Forecasting über Katalog, Content und Ads bis zur vollen P&L-Verantwortung und Prozessautomatisierung.",
        en: "I build and scale profitable marketplace and D2C businesses <b>end-to-end</b> — from product idea and forecasting through catalog, content and ads to full P&L ownership and workflow automation.",
      },
      avail: {
        de: "Verfügbar ab Februar 2026 · 1 Mandat offen",
        en: "Available from February 2026 · 1 slot open",
      },
      portraitRole: { de: "Head of Marketplace · Founder", en: "Head of Marketplace · Founder" },
      kpis: {
        launches: { de: "Produktlaunches", en: "Product launches" },
        markets: { de: "Marktplätze", en: "Marketplaces" },
        countries: { de: "Märkte", en: "Markets" },
        ownership: { de: "Ownership", en: "Ownership" },
      },
    },
    marqueeLabel: { de: "Aktiv auf →", en: "Live on →" },
    trust: {
      trusted: { de: "Vertrauen von", en: "Trusted by" },
      brands: { de: "Marken & Händlern in DE / US", en: "brands & merchants in DE / US" },
    },
    problem: {
      eyebrow: { de: "Das Problem", en: "The problem" },
      h2De: "Marketplace & D2C laufen. Aber sie <span class='acc'>skalieren nicht</span>.",
      h2En: "Marketplace & D2C are running. But they're not <span class='acc'>compounding</span>.",
      intro: {
        de: "Sechs Muster sehe ich bei nahezu jeder Marke mit €1–20 Mio. Umsatz über Amazon, weitere Marktplätze und D2C. Erkennst du eines davon wieder — dann ist genau hier mein Einstiegspunkt.",
        en: "Six patterns I see at almost every brand with €1–20M revenue across Amazon, additional marketplaces and D2C. If one or more sound familiar — that's where I usually step in.",
      },
      stats: {
        s1Num: { de: "€1–20M", en: "€1–20M" },
        s1Lbl: { de: "Typischer Umsatz von Kunden", en: "Typical brand revenue" },
        s2Lbl: { de: "Kanäle parallel betrieben", en: "Channels operated in parallel" },
        s3Lbl: { de: "Operator mit P&L-Verantwortung", en: "Operator with P&L ownership" },
        s4Lbl: { de: "PowerPoint-Decks ausgeliefert", en: "PowerPoint decks shipped" },
      },
      cta: {
        eyebrow: { de: "Wenn du dich wiederfindest", en: "If this sounds familiar" },
        textDe: "Du brauchst keinen weiteren Berater — sondern jemanden, der <b>Verantwortung übernimmt</b>.",
        textEn: "You don't need another advisor — you need someone who <b>takes responsibility</b>.",
      },
    },
    pull: {
      eyebrow: { de: "Prinzip", en: "Principle" },
      bodyDe:
        "Wachstum ohne <span class='acc'>Profit</span> ist kein Wachstum. Jede Entscheidung muss sich in der P&L beweisen — oder sie wird nicht getroffen.",
      bodyEn:
        "Growth without <span class='acc'>profit</span> is not growth. Every decision earns its place in the P&L — or it doesn't happen.",
    },
    audience: {
      eyebrow: { de: "Zielgruppe", en: "Audience" },
      h2: { de: "Für wen ist Jokomerce ideal?", en: "Who is Jokomerce built for?" },
      leadDe:
        "Ich arbeite mit Marken und Händlern, die Marktplätze und D2C nicht nur <b>mitlaufen</b> lassen wollen, sondern als echten <b>Profit-Hebel</b> betreiben. Je komplexer dein Setup (Kanäle, Produkte, Länder), desto mehr zahlt sich ein klarer Head of Marketplace / CMO auf Zeit aus.",
      leadEn:
        "I work with brands and merchants that don't want marketplaces and D2C just <b>running along</b> in the background — but operated as a real <b>profit lever</b>. The more complex your setup (channels, products, countries), the more a clear Head of Marketplace / fractional CMO pays off.",
    },
    services: {
      eyebrow: { de: "Leistungen", en: "Services" },
      h2Pre: { de: "Was", en: "What" },
      h2Tail: { de: " ich für dich übernehme.", en: " I take on for you." },
    },
    diff: {
      eyebrow: { de: "Der Unterschied", en: "The difference" },
      h2De: "Klassische Beratung baut <span class='acc'>Decks</span>. Jokomerce baut die <span class='acc'>P&L</span>.",
      h2En: "Classic consulting builds <span class='acc'>decks</span>. Jokomerce builds <span class='acc'>the P&L</span>.",
      intro: {
        de: "Fünf Dimensionen, an denen typische Mandate scheitern — und wie ich stattdessen arbeite.",
        en: "Five dimensions where most engagements fail — and how I work instead.",
      },
      colThemHead: { de: "Klassische Beratung", en: "Classic consulting" },
      colThemTag: { de: "Was du sonst bekommst", en: "What you usually get" },
      colMeHead: { de: "Jokomerce", en: "Jokomerce" },
      colMeTag: { de: "Was du mit mir bekommst", en: "What you get with me" },
      footStatLbl: { de: "Operator / Decks pro Mandat", en: "Operator / Decks per engagement" },
      footClaimDe:
        "Strategie und Execution in <b>einer Person</b>. Gemessen an Marge — nicht an Vanity-Metriken.",
      footClaimEn:
        "Strategy and execution in <b>one person</b>. Measured in margin — not vanity metrics.",
    },
    process: {
      eyebrow: { de: "Prozess", en: "Process" },
      h2Pre: { de: "So", en: "How" },
      h2Tail: { de: " läuft unsere Zusammenarbeit ab.", en: " we work together." },
      intro: {
        de: "Statt losem „Beratungs-Pingpong\" gibt es einen klaren Ablauf in vier Phasen — mit Deliverables je Phase und einer Entscheidung am Ende: weiter oder Stopp.",
        en: "No loose consulting back-and-forth. A clear four-phase rhythm — with deliverables at every stage and the option to stop or continue at the end of each phase.",
      },
      phases: [
        {
          title: { de: "Audit & Ziele", en: "Audit & goals" },
          bodyDe:
            "Gemeinsam reviewen wir P&L, Katalog, Content, Ads, Prozesse und Tools. Wir definieren <b>Ziele und KPIs</b> — Umsatz, Marge, TACOS, Rankings — und finden die ersten Quick Wins.",
          bodyEn:
            "Together we review your P&L, catalog, content, ads, processes and tools. We jointly define <b>goals and KPIs</b> — revenue, margin, TACOS, rankings — and surface the first quick wins.",
          bullets: {
            de: ["P&L-Review & Kostenstruktur", "Katalog- & Content-Audit", "KPI-Baseline & Ziele"],
            en: ["P&L review & cost structure", "Catalog & content audit", "KPI baseline & goals"],
          },
          delivLbl: { de: "Deliverable", en: "Deliverable" },
          delivVal: {
            de: "Audit-Report + priorisierte Roadmap · 1–2 Wochen",
            en: "Audit report + prioritized roadmap · 1–2 weeks",
          },
        },
        {
          title: { de: "Plan & Priorisierung", en: "Plan & prioritization" },
          bodyDe:
            "Eine klare Roadmap mit Prioritäten: <b>welche Kanäle, welche Produkte, welche Hebel zuerst</b>. Inklusive Ressourcen- und Budgetplanung — damit die nächsten 90 Tage einen echten Plan haben, keine Wunschliste.",
          bodyEn:
            "A clear roadmap with priorities: <b>which channels, which products, which levers first</b>. Including resource and budget planning so the next 90 days have a real plan, not a wish list.",
          bullets: {
            de: ["Kanal- & Produkt-Priorisierung", "Ressourcen- & Budgetplan", "90-Tage-Roadmap"],
            en: ["Channel & product priority", "Resource & budget plan", "90-day roadmap"],
          },
          delivLbl: { de: "Deliverable", en: "Deliverable" },
          delivVal: {
            de: "Roadmap + Budgetplan + KPI-Ziele · 1 Woche",
            en: "Roadmap + budget plan + KPI targets · 1 week",
          },
        },
        {
          title: { de: "Umsetzung", en: "Execution" },
          bodyDe:
            "Operative Umsetzung in den vereinbarten Bereichen: <b>Katalog, Content, Ads, Launches, ERP, Support, AI-Workflows</b>. Wöchentlicher P&L-Takt. Entscheidungen werden getroffen und umgesetzt — nicht geparkt.",
          bodyEn:
            "Operational delivery in the agreed areas: <b>catalog, content, ads, launches, ERP, support, AI workflows</b>. Weekly P&L cadence. Decisions get made and shipped — not parked.",
          bullets: {
            de: ["Katalog & Content-Produktion", "Ads-Struktur & Launches", "Ops, ERP & Support"],
            en: ["Catalog & content production", "Ads structure & launches", "Ops, ERP & support"],
          },
          delivLbl: { de: "Takt", en: "Cadence" },
          delivVal: {
            de: "Wöchentlicher P&L-Review + Monats-Review · laufend",
            en: "Weekly P&L review + monthly review · ongoing",
          },
        },
        {
          title: { de: "Skalierung & Governance", en: "Scale & governance" },
          bodyDe:
            "Aufbau von <b>Reporting, SOPs und Automatisierung</b>, damit Wachstum stabil und steuerbar bleibt — unabhängig von einer Person. Sauberer Hand-off an dein Team, wenn das System trägt.",
          bodyEn:
            "Build out <b>reporting, SOPs and automation</b> so growth stays stable and steerable — independent of any single person. Clean hand-off back to your team when the system runs by itself.",
          bullets: {
            de: ["Reporting & SOP-Bibliothek", "AI-Workflow-Automatisierung", "Sauberer Hand-off"],
            en: ["Reporting & SOP library", "AI workflow automation", "Clean hand-off"],
          },
          delivLbl: { de: "Ergebnis", en: "Outcome" },
          delivVal: {
            de: "Ein System, das dein Team auch ohne mich operativ trägt.",
            en: "A scalable system your team can operate without me.",
          },
        },
      ],
    },
    cases: {
      eyebrow: { de: "Cases", en: "Cases" },
      h2Pre: { de: "Ausgewählte", en: "Selected" },
      h2Tail: { de: " Projekte & Rollen.", en: " projects & roles." },
      recent: { de: "Aktuelle Mandate", en: "Recent mandates" },
      moreNote: {
        de: "Weitere Cases auf Anfrage — konkrete Zahlen direkt im Gespräch.",
        en: "More cases on request — concrete numbers shared directly with serious inquiries.",
      },
      c1: {
        badge: { de: "Interim Head of Marketplace", en: "Head of Marketplace · interim" },
        h3: {
          de: "Von Amazon-only zur profitablen Multichannel-Marke.",
          en: "From Amazon-only to a profitable multichannel brand.",
        },
        rows: [
          {
            k: { de: "Ausgangslage", en: "Starting point" },
            v: {
              de: "Starker Amazon-Fokus, schwache Profitabilität, kaum Multichannel-Präsenz.",
              en: "Strong Amazon focus, weak profitability, almost no multichannel presence.",
            },
          },
          {
            k: { de: "Ziel", en: "Goal" },
            v: {
              de: "Profitables Wachstum auf Amazon + Aufbau Otto, Kaufland und D2C-Shop.",
              en: "Profitable growth on Amazon + buildout of Otto, Kaufland and D2C shop.",
            },
          },
          {
            k: { de: "Maßnahmen", en: "Actions" },
            v: {
              de: "Katalog-Rebuild, Content-Optimierung, neue PPC-Struktur, Reporting & Forecasting, weitere Marktplätze, Zendesk Support-Team.",
              en: "Catalog rebuild, content optimization, new PPC structure, reporting & forecasting, additional marketplaces, Zendesk support team.",
            },
          },
          {
            k: { de: "Ergebnis", en: "Result" },
            v: {
              de: "Stabilere Rankings, bessere Contribution Margin, skalierbare Ads-Struktur, klarer Multichannel-Fahrplan.",
              en: "Stable rankings, improved contribution margin, scalable ads structure, clear multichannel roadmap.",
            },
            isResult: true,
          },
          {
            k: { de: "Stack", en: "Stack" },
            v: {
              de: "Amazon · Otto · Kaufland · Shopify · Plentymarkets · Zendesk",
              en: "Amazon · Otto · Kaufland · Shopify · Plentymarkets · Zendesk",
            },
          },
        ],
      },
      c2: {
        badge: { de: "Expansion DE / US", en: "Marketplace expansion DE / US" },
        h3: {
          de: "US-Aufbau — ohne die EU-Marge zu zerreißen.",
          en: "Building out the US — without breaking the EU margin.",
        },
        rows: [
          {
            k: { de: "Ausgangslage", en: "Starting point" },
            v: {
              de: "Etablierte Amazon-EU-Marke vor US-Expansion (Amazon, Walmart) — ohne den Fokus auf die EU-P&L zu verlieren.",
              en: "Established Amazon EU brand wanting to expand into US (Amazon, Walmart) — without losing focus on the EU P&L.",
            },
          },
          {
            k: { de: "Ziel", en: "Goal" },
            v: {
              de: "Profitabler US-Einstieg, parallele Skalierung in EU, gemeinsames Reporting.",
              en: "Profitable US entry, parallel growth on EU, one shared reporting layer.",
            },
          },
          {
            k: { de: "Maßnahmen", en: "Actions" },
            v: {
              de: "Lokalisierter Katalog, PPC nach Markt, Fulfillment- & Steuer-Setup, wöchentlicher P&L-Takt, AI-Workflows für Content.",
              en: "Localized catalog, PPC by market, fulfillment & tax setup, weekly P&L cadence, AI workflows for content.",
            },
          },
          {
            k: { de: "Ergebnis", en: "Result" },
            v: {
              de: "US-Live binnen eines Quartals, sauberes Cross-Market-Reporting, kein Margenverlust in EU.",
              en: "Live US sales within one quarter, clean cross-market reporting, no margin compression in EU.",
            },
            isResult: true,
          },
          {
            k: { de: "Stack", en: "Stack" },
            v: {
              de: "Amazon EU · Amazon US · Walmart · Billbee · NetSuite",
              en: "Amazon EU · Amazon US · Walmart · Billbee · NetSuite",
            },
          },
        ],
      },
    },
    testimonial: {
      eyebrow: { de: "Stimmen", en: "Voices" },
      quoteDe:
        "„Joachim verkauft keine Decks. Er nimmt die P&L und zieht <span class='acc'>die richtigen Hebel</span> — ruhig, wöchentlich, profitabel.\"",
      quoteEn:
        "„Joachim doesn't sell you decks. He <span class='acc'>takes the P&L</span> and pulls the right levers — calmly, weekly, profitably.\"",
      who: { de: "M. Schmidt", en: "M. Schmidt" },
      role: { de: "Gründer · D2C-Marke (anonymisiert)", en: "Founder · D2C brand (anonymized)" },
      statN: { de: "7", en: "7" },
      statL: {
        de: "Jahre operative Verantwortung über Marktplätze & D2C in DE und US.",
        en: "Years operating marketplaces & D2C across DE and US.",
      },
    },
    aboutBlock: {
      eyebrow: { de: "Über mich", en: "About" },
      h2Pre: { de: "Wer", en: "Who" },
      h2Tail: { de: " hinter Jokomerce steckt.", en: " is behind Jokomerce." },
      capWho: { de: "Joachim Heidel — Founder · Jokomerce", en: "Joachim Heidel — Founder · Jokomerce" },
      capPlace: { de: "Köln · Bonn · DE", en: "Cologne · Bonn · DE" },
      p1De:
        "Ich bin Joachim Heidel. Für Marken und Händler übernehme ich die Rolle als <b>Head of Marketplace oder CMO auf Zeit</b>. Ich verantworte Wachstum und Profitabilität (P&L) über Amazon, weitere Marktplätze und Shopify-D2C — von der Strategie bis zur operativen Umsetzung.",
      p1En:
        "I'm Joachim Heidel. For brands and merchants I take on the role of <b>Head of Marketplace or CMO on demand</b>. I own growth and profitability (P&L) across Amazon, additional marketplaces and Shopify D2C — from strategy through operational delivery.",
      pull: {
        de: "Strategie und operative Umsetzung in einer Person — gemessen an Marge, nicht an Vanity-Metriken.",
        en: "Strategy and operational execution in one person — measured in margin, not vanity metrics.",
      },
      p2De:
        "Mit Erfahrung aus Inhouse, Agentur und Interim-Setups habe ich <b>1 000+ Produktlaunches</b> begleitet, globale Amazon-Kataloge optimiert und skalierbare Systeme aus Prozessen, Content, Ads und Automatisierung aufgebaut. Jokomerce steht für <b>pragmatische Umsetzung, klare Priorisierung und messbaren Business-Impact</b>.",
      p2En:
        "With experience from in-house, agency and interim setups, I've guided <b>1,000+ product launches</b>, rebuilt global Amazon catalogs and built scalable systems out of processes, content, ads and automation. Jokomerce stands for <b>pragmatic execution, clear prioritization and measurable business impact</b>.",
      timeline: [
        {
          date: { de: "2024 — heute", en: "2024 — today" },
          posDe: "<b>Jokomerce</b> · Marketplace & D2C Consultant",
          posEn: "<b>Jokomerce</b> · Marketplace & D2C consultant",
          small: { de: "Head of Marketplace / Interim CMO · DE + US", en: "Head of Marketplace / Interim CMO · DE + US" },
          org: { de: "freiberuflich · DE / US", en: "freelance · DE / US" },
        },
        {
          date: { de: "2022 — 2024", en: "2022 — 2024" },
          posDe: "Senior Marketplace Manager",
          posEn: "Senior Marketplace Manager",
          small: {
            de: "Amazon PAN-EU, Otto, Walmart, eBay, bol.com · Shopify + Google Ads · Aufbau Zendesk-Support",
            en: "Amazon PAN-EU, Otto, Walmart, eBay, bol.com · Shopify + Google Ads · Zendesk support buildout",
          },
          org: { de: "WETHEBRANDS_", en: "WETHEBRANDS_" },
        },
        {
          date: { de: "2019 — 2022", en: "2019 — 2022" },
          posDe: "SEO-Projektmanager",
          posEn: "SEO Project Manager",
          small: {
            de: "SEO-Projekte B2B / B2C · Shopify / Webflow / WordPress",
            en: "B2B / B2C SEO projects · Shopify / Webflow / WordPress",
          },
          org: { de: "TrafficDesign GmbH", en: "TrafficDesign GmbH" },
        },
        {
          date: { de: "2016 — 2017", en: "2016 — 2017" },
          posDe: "Unternehmensberater (studentisch)",
          posEn: "Consultant (student association)",
          small: { de: "Strategieprojekte für KMU", en: "Strategy projects for SMEs" },
          org: { de: "Contact & Cooperation Trier", en: "Contact & Cooperation Trier" },
        },
      ],
    },
    faq: {
      eyebrow: { de: "FAQ", en: "FAQ" },
      h2Pre: { de: "Häufige", en: "Frequent" },
      h2Tail: { de: " Fragen.", en: " questions." },
      colLH3: { de: "Praktische Antworten — kein Marketing-Sprech.", en: "Practical answers — no fluff." },
      colLP: {
        de: "Wenn deine Frage hier nicht steht, stell sie direkt im Erstgespräch. Die meisten Setups haben Eigenheiten, die sich erst im Gespräch klären lassen.",
        en: "If your question isn't covered here, just ask it directly in the first call. Most setups have specifics that only become clear in conversation.",
      },
      items: [
        {
          q: { de: "In welcher Rolle arbeitest du typischerweise?", en: "In which role do you typically work?" },
          aDe: "Meistens als <b>Head of Marketplace oder CMO auf Zeit</b> — mit klarer P&L-Verantwortung und direkter Einbindung ins Team. Die Engagement-Form ist in der Regel Retainer-basiert; Projekt-Setups gehen bei klar umrissenen Launches.",
          aEn: "Mostly as <b>Head of Marketplace or CMO on demand</b> — with clear P&L responsibility and direct integration into your team. Engagement form is normally retainer-based; project setups are possible for clearly scoped launches.",
        },
        {
          q: { de: "Arbeitest du nur mit Amazon-Fokus oder auch Multichannel?", en: "Amazon only or full multichannel?" },
          aDe: "Beides. Viele Projekte starten mit Amazon und werden dann auf weitere Marktplätze und D2C (Shopify) erweitert. Die Stärke liegt darin, sie als <b>ein System</b> zu betreiben, nicht als drei isolierte Projekte.",
          aEn: "Both. Many projects start with Amazon and then expand to additional marketplaces and D2C (Shopify). The strength is operating them as <b>one system</b>, not three siloed projects.",
        },
        {
          q: { de: "Wie startest du typischerweise in ein Projekt?", en: "How do you typically start a project?" },
          aDe: "In der Regel mit einem Audit (P&L, Katalog, Ads, Prozesse), aus dem eine klare Roadmap entsteht. Danach entscheiden wir, ob wir in einem Projekt-Setup oder als laufende Rolle mit P&L-Ownership zusammenarbeiten.",
          aEn: "Usually with an audit (P&L, catalog, ads, processes) that produces a clear roadmap. After that we decide whether to continue as a project or as an ongoing role with P&L ownership.",
        },
        {
          q: { de: "Arbeitest du remote oder vor Ort?", en: "Remote or on-site?" },
          aDe: "Überwiegend remote, mit punktuellen Vor-Ort-Tagen für Workshops oder Teamaufbau. Standort Köln / Bonn; Kunden überwiegend in Deutschland und den USA.",
          aEn: "Mostly remote, with occasional on-site days for workshops or team buildout. Based in the Cologne / Bonn region; clients are mainly in Germany and the US.",
        },
        {
          q: { de: "Wie sieht das Preismodell aus?", en: "What does the pricing model look like?" },
          aDe: "In der Regel <b>Retainer-basiert</b>, abgestimmt auf Umfang und Verantwortung. Wir definieren im Erstgespräch genau, was drin ist und was nicht. Audits und kurze Launch-Projekte können auch fest gepreist werden.",
          aEn: "Usually <b>retainer-based</b>, scoped to the scope and responsibility. We define exactly what's in and what's out in the first call. Audits and short launch projects can also be priced as fixed scopes.",
        },
        {
          q: { de: "Arbeitest du mit meinem bestehenden Team / meiner Agentur?", en: "Do you work with my existing team / agency?" },
          aDe: "Ja — Jokomerce arbeitet typischerweise in dein bestehendes Setup hinein. Ziel ist, das Ergebnis zu verantworten — nicht Menschen zu ersetzen. Wo Teile fehlen, erweitern wir gezielt (z. B. Zendesk-Support, AI-Workflows, weitere Marketplace-Operator).",
          aEn: "Yes — Jokomerce typically operates inside your existing setup. The goal is to own the result, not to replace people. Where parts of the team or agency stack are missing, we extend it (e.g. Zendesk support, AI workflows, additional marketplace operators).",
        },
      ],
    },
    contact: {
      eyebrow: { de: "Kontakt", en: "Contact" },
      h2Pre: { de: "Erzähl", en: "Tell" },
      h2Tail: { de: " mir kurz von deinem Setup.", en: " me about your setup." },
      infoH3: { de: "Direkter Draht.", en: "Direct line." },
      infoP: {
        de: "Das Erstgespräch dauert ~30 Minuten. Wir schauen auf deine aktuelle Situation, sprechen über deine Ziele und klären, ob und wie wir zusammenarbeiten. Kein Deck, kein Sales-Pitch.",
        en: "The first call takes ~30 minutes. We look at your current situation, talk about your goals and clarify whether and how we can work together. No deck, no sales pitch.",
      },
      labels: {
        email: { de: "E-Mail", en: "E-mail" },
        location: { de: "Standort", en: "Location" },
        markets: { de: "Märkte", en: "Markets" },
        availability: { de: "Verfügbarkeit", en: "Availability" },
        availabilityVal: { de: "Ab 02 / 2026 · 1 Slot", en: "From Feb 2026 · 1 slot" },
        name: { de: "Name", en: "Name" },
        company: { de: "Unternehmen", en: "Company" },
        channels: { de: "Aktive Kanäle", en: "Active channels" },
        challenge: { de: "Aktuelle Herausforderung", en: "Your current challenge" },
        challengePh: { de: "Was läuft gut, wo hakt es?", en: "What's working, where are the gaps?" },
        start: { de: "Wunschstart", en: "Desired start" },
        startOpts: {
          de: ["Sofort", "In 1–3 Monaten", "Später"],
          en: ["Immediately", "In 1–3 months", "Later"],
        },
        revenue: { de: "Ungefährer Jahresumsatz (optional)", en: "Approx. annual revenue (optional)" },
        revenueNA: { de: "— keine Angabe", en: "— prefer not to say" },
      },
    },
  },

  // ===== ABOUT PAGE =====
  about: {
    eyebrow: { de: "Über mich", en: "About" },
    h1De: "<span class='acc'>Joachim Heidel</span> — Head of Marketplace & CMO auf Zeit.",
    h1En: "<span class='acc'>Joachim Heidel</span> — Head of Marketplace & CMO on demand.",
    lead: {
      de: "Für Marken und Händler verantworte ich Wachstum und Profitabilität (P&L) über Amazon, weitere Marktplätze und Shopify-D2C — von der Strategie bis zur operativen Umsetzung.",
      en: "For brands and merchants I own growth and profitability (P&L) across Amazon, additional marketplaces and Shopify D2C — from strategy through operational delivery.",
    },
    bg: { de: "Hintergrund", en: "Background" },
    bgH2: { de: "Wer hinter Jokomerce steckt.", en: "Who is behind Jokomerce." },
    p1De:
      "Ich bin <b>Joachim Heidel</b>. Für Marken und Händler übernehme ich die Rolle als <b>Head of Marketplace</b> oder <b>CMO auf Zeit</b>. Ich verantworte Wachstum und Profitabilität (P&L) über Amazon, weitere Marktplätze und Shopify-D2C — von der Strategie bis zur operativen Umsetzung.",
    p1En:
      "I'm <b>Joachim Heidel</b>. For brands and merchants I take on the role of <b>Head of Marketplace</b> or <b>CMO on demand</b>. I own growth and profitability (P&L) across Amazon, additional marketplaces and Shopify D2C — from strategy through operational delivery.",
    pull: {
      de: "Strategie und operative Umsetzung in einer Person — gemessen an Marge, nicht an Vanity-Metriken.",
      en: "Strategy and operational execution in one person — measured in margin, not vanity metrics.",
    },
    p2De:
      "Mit Erfahrung aus <b>Inhouse, Agentur und Interim-Setups</b> habe ich 1 000+ Produktlaunches begleitet, globale Amazon-Kataloge umgebaut und skalierbare Systeme aus Prozessen, Content, Ads und Automatisierung aufgebaut.",
    p2En:
      "With experience from <b>in-house, agency and interim setups</b>, I've guided 1,000+ product launches, rebuilt global Amazon catalogs and built scalable systems out of processes, content, ads and automation.",
    p3De:
      "Jokomerce steht für <b>pragmatische Umsetzung, klare Priorisierung und messbaren Business-Impact</b>. Kein PowerPoint-Beraterspiel — operative Verantwortung für die Zahlen, die zählen.",
    p3En:
      "Jokomerce stands for <b>pragmatic execution, clear prioritization and measurable business impact</b>. No PowerPoint consulting games — operational ownership of the numbers that matter.",
    skillsEy: { de: "Kernkompetenzen", en: "Core competencies" },
    skillsH2: { de: "Wo ich operativ arbeite.", en: "Where I operate." },
    stationsEy: { de: "Stationen", en: "Stations" },
    stationsH2: { de: "Aus Inhouse, Agentur, Interim.", en: "From in-house, agency, interim." },
    eduEy: { de: "Ausbildung", en: "Education" },
    eduH2: { de: "Wirtschaftspsychologie + Marketing.", en: "Business psychology + marketing." },
    skills: {
      de: [
        "Marketplace Growth & Profitability (P&L)",
        "Multichannel-Expansion (Amazon, Otto, Kaufland …)",
        "Shopify & Google Ads (D2C Growth)",
        "Katalog-Architektur & Content-Excellence",
        "ERP / Tooling & Operations-Setup",
        "Customer Support (Zendesk) & AI-Workflows",
      ],
      en: [
        "Marketplace growth & profitability (P&L)",
        "Multichannel expansion (Amazon, Otto, Kaufland …)",
        "Shopify & Google Ads (D2C growth)",
        "Catalog architecture & content excellence",
        "ERP / tooling & operations setup",
        "Customer Support (Zendesk) & AI workflows",
      ],
    },
    eduMaster: {
      de: "Master Wirtschaftspsychologie",
      en: "Master in Business Psychology",
    },
    eduMasterOrg: {
      de: "CBS International Business School",
      en: "CBS International Business School",
    },
    eduBachelor: {
      de: "Bachelor Marketing / BWL",
      en: "Bachelor in Marketing / Business",
    },
    eduBachelorOrg: { de: "Universität Trier", en: "University of Trier" },
  },

  // ===== CONTACT PAGE =====
  contactPage: {
    eyebrow: { de: "Kontakt", en: "Contact" },
    h1De: "Erstgespräch <span class='acc'>anfragen</span>.",
    h1En: "Request a <span class='acc'>first call</span>.",
    lead: {
      de: "~30 Minuten. Wir schauen auf deine aktuelle Situation, klären Ziele und entscheiden, ob und wie wir zusammenarbeiten. <b>Kein Deck, kein Sales-Pitch.</b>",
      en: "~30 minutes. We look at your current situation, clarify goals and decide whether and how we work together. <b>No deck, no sales pitch.</b>",
    },
    infoH3: { de: "Direkter Draht.", en: "Direct line." },
    infoP: {
      de: "Antwort innerhalb von 1 Werktag. Termine über das Formular oder direkt per Mail / LinkedIn.",
      en: "Reply within 1 working day. Book via the form or directly via e-mail / LinkedIn.",
    },
    labels: {
      email: { de: "E-Mail", en: "E-mail" },
      location: { de: "Standort", en: "Location" },
      markets: { de: "Märkte", en: "Markets" },
      avail: { de: "Verfügbar", en: "Available" },
      availVal: { de: "Ab Februar 2026 · 1 Slot", en: "From February 2026 · 1 slot" },
      name: { de: "Name", en: "Name" },
      company: { de: "Unternehmen", en: "Company" },
      position: { de: "Position", en: "Position" },
      positionPh: { de: "z. B. CMO, Head of Ecom", en: "e.g. CMO, Head of Ecom" },
      activeCh: { de: "Aktive Kanäle", en: "Active channels" },
      whatPh: {
        de: "Worum geht's konkret?",
        en: "What's it about?",
      },
      whatPhField: {
        de: "Was läuft gut, wo hakt es? Welches Ziel hast du für die nächsten 6–12 Monate?",
        en: "What's working, what's stuck? What's your goal for the next 6–12 months?",
      },
      start: { de: "Wunschstart", en: "Desired start" },
      startOpts: { de: ["Sofort", "In 1–3 Monaten", "Später"], en: ["Immediately", "In 1–3 months", "Later"] },
      revenue: { de: "Jahresumsatz (optional)", en: "Annual revenue (optional)" },
      revNA: { de: "— keine Angabe", en: "— prefer not to say" },
      note: {
        de: "Antwort binnen 1 Werktag · keine Mailing-Listen.",
        en: "Reply within 1 working day · no mailing lists.",
      },
    },
  },

  // ===== LEISTUNGEN OVERVIEW =====
  leistungen: {
    eyebrow: { de: "Leistungen", en: "Services" },
    h1De: "Was ich für dich <span class='acc'>übernehme</span>.",
    h1En: "What I <span class='acc'>take on</span> for you.",
    lead: {
      de: "Acht Module, die einzeln oder in Kombination funktionieren — vom <b>Head of Marketplace</b> bis zur <b>AI-Workflow-Automatisierung</b>. Alle mit klarer P&L-Logik und operativer Verantwortung.",
      en: "Eight modules that work alone or in combination — from <b>Head of Marketplace</b> to <b>AI workflow automation</b>. All with clear P&L logic and operational ownership.",
    },
    startBtn: { de: "Wie wir starten", en: "How we start" },
    modulesEy: { de: "Module", en: "Modules" },
    modulesH2: { de: "Acht Leistungs-Bausteine.", en: "Eight building blocks." },
    modulesIntro: {
      de: "Jedes Modul kann als Projekt oder als laufende Rolle funktionieren. Häufig kombinieren wir 2–3 davon zu einer Head-of-Marketplace-Rolle mit klarer P&L-Ownership.",
      en: "Each module can run as a project or as an ongoing role. Often 2–3 of them combine into a Head of Marketplace role with clear P&L ownership.",
    },
    platfEy: { de: "Plattformen", en: "Platforms" },
    platfH2: { de: "Wo ich operativ aktiv bin.", en: "Where I operate." },
    platfIntro: {
      de: "Erfahrung über die wichtigsten Marketplaces und D2C-Tools in DE, EU und US.",
      en: "Experience across the leading marketplaces and D2C tools in DE, EU and US.",
    },
  },

  // ===== SERVICE DETAIL PAGE — generic section labels =====
  servicePage: {
    eyAnlass: { de: "Anlass", en: "Context" },
    eyErgebnis: { de: "Ergebnis", en: "Result" },
    eyVorgehen: { de: "Vorgehen", en: "Approach" },
    eyDeliv: { de: "Deliverables", en: "Deliverables" },
    eySetup: { de: "Setup & Dauer", en: "Setup & duration" },
    setupH2: {
      de: "Wie lange dauert es und wie startet es?",
      en: "How long does it take and how do we start?",
    },
    eyRelated: { de: "Weitere Module", en: "Related modules" },
    relatedH2: { de: "Passt oft dazu.", en: "Often paired with this." },
    relatedIntro: {
      de: "Multichannel-Setups skalieren am besten, wenn mehrere Bausteine ineinandergreifen. Diese Leistungen werden häufig in Kombination angefragt.",
      en: "Multichannel setups scale best when several building blocks interlock. These modules are often requested in combination.",
    },
    allServices: { de: "Alle Leistungen", en: "All services" },
  },
};
