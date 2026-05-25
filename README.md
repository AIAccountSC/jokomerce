# Jokomerce — Next.js

Pixel-faithful port of the Jokomerce design (Marketplace & D2C consulting onepager + 11 subpages) to Next.js 14 (App Router, TypeScript).

## Stack

- **Next.js 14** App Router + TypeScript
- **No Tailwind** — vanilla CSS preserved from the original design (Geist + Geist Mono via Google Fonts)
- **Client components** only where needed (nav scroll progress, language toggle, sticky-process scrollytelling, KPI count-up, headline word-reveal)

## Pages

- `/` — Homepage (Hero, Marquee, Problem, Audience, Services, Difference, Process, Cases, Testimonial, About, Final CTA, FAQ, Contact)
- `/leistungen` — Services overview (8 modules + platforms grid)
- `/leistungen/[slug]` — 8 service detail pages
  - `head-of-marketplace`, `amazon-growth`, `produktlaunch`, `multichannel`, `shopify-d2c`, `operations-erp`, `customer-support`, `ai-workflows`
- `/about` — Joachim Heidel bio + skills + timeline + education
- `/contact` — Inquiry form with channel chips + direct contact

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy to Vercel

```bash
# Option 1: CLI
npx vercel

# Option 2: Push to GitHub, import the repo at vercel.com/new
```

Zero environment variables required.

## Design provenance

The original prototype lives in `jokecomerce/` (HTML/CSS/JS handoff from Claude Design). Everything in `/app` and `/components` is a port of that prototype — content text, German copy, animations, icon library, scroll behaviors, and the Swiss-grid editorial layout are all preserved.
