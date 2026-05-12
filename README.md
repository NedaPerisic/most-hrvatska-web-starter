# MOST Hrvatska — Web rebuild starter

Astro 5 + Tailwind 4 + TypeScript starter za website MOST stranke.

## Quick start

```bash
# 1. Install pnpm if you don't have it
npm install -g pnpm

# 2. Install dependencies
pnpm install

# 3. Start dev server
pnpm dev
# → opens at http://localhost:4321
```

## Što je već uključeno

✅ **5 page templates** — homepage, member detail (`/clanovi/[slug]`), policy page (`/policy/[slug]`), news list (`/vijesti`), news detail (`/vijesti/[slug]`)
✅ **Donate page** sa 4-step funnel (amount → method → confirm)
✅ **Join/Membership page** sa 3-field form (low friction)
✅ **About page** (`/o-nama`)
✅ **Schema markup** — Organization, WebSite, Person, NewsArticle, FAQPage, BreadcrumbList (svi JSON-LD)
✅ **SEO** — sitemap auto-generation, meta tags, OG tags, Twitter Cards, hreflang
✅ **GEO/AEO** — robots.txt allowing AI crawlers, llms.txt, llms-full.txt
✅ **Accessibility** — skip-to-content, ARIA labels, focus visible, keyboard nav, reduced-motion
✅ **Performance** — Astro static-first, font preload, Tailwind purge, image lazy loading ready
✅ **Mobile-first** — responsive header + drawer menu + bottom nav
✅ **Brand** — MOST blue palette + accent orange CTA, Inter typography

## Struktura

```
astro-starter/
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── MobileBottomNav.astro
│   │   └── schema/
│   │       ├── OrganizationSchema.astro
│   │       ├── WebSiteSchema.astro
│   │       ├── PersonSchema.astro
│   │       ├── NewsArticleSchema.astro
│   │       ├── FAQPageSchema.astro
│   │       └── BreadcrumbSchema.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── doniraj.astro
│   │   ├── pridruzi-se.astro
│   │   ├── o-nama/index.astro
│   │   ├── clanovi/[slug].astro
│   │   ├── policy/[slug].astro
│   │   └── vijesti/
│   │       ├── index.astro
│   │       └── [slug].astro
│   └── styles/
│       └── global.css
├── public/
│   ├── robots.txt
│   ├── llms.txt
│   └── llms-full.txt
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

## Što treba dodati u produkciji

🔲 **Sanity Studio integration** — vidi `briefs/dev-architecture.md` sekcija 3 za pune schema definicije
🔲 **Stripe Checkout** za donate flow — backend webhook handler
🔲 **Newsletter integration** — MailerLite/ConvertKit/Resend Audiences
🔲 **Pretraga** — Pagefind (build-time index)
🔲 **OG image generator** — Vercel OG / Satori
🔲 **Member photos** — replace placeholder gradients
🔲 **Real news data** — connect Sanity CMS, remove hardcoded posts
🔲 **Lokalno [zupanija] template** — 21 županija
🔲 **Peticije template**
🔲 **Search results page**
🔲 **404 + 500 error pages**
🔲 **Cookie consent** (GDPR)
🔲 **Analytics** — Vercel Analytics + GA4

## Brand tokens

Definirani u `tailwind.config.mjs`:

```js
colors: {
  most: { 50, 100, 200, ..., 700 (primary), 800, 900 },
  accent: { 50, 400, 500 (CTA), 600 },
}
```

Tipografija:
- Display + body: **Inter** (Google Fonts)
- Mono: **JetBrains Mono**

Spacing: 4px base grid (Tailwind default)

## Performance targets

- LCP < 1s
- INP < 100ms
- CLS < 0.05
- Total page weight < 200KB initial
- JS budget per page: < 50KB after gzip

## Deployment

Recommended: **Vercel** (zero config za Astro).

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## Reference dokumentacija

- Master strategy: `../MASTER-strategy.md`
- HTML report: `../MOST-strategy-report.html`
- Briefs:
  - `../briefs/nova-ux-funnels.md` (UX flows + conversion principi)
  - `../briefs/mia-design-system.md` (design tokens + komponenti)
  - `../briefs/jasminka-content.md` (content uzorci + voice)
  - `../briefs/dev-architecture.md` (tech arhitektura)

## Komande

```bash
pnpm dev        # Start dev server
pnpm build      # Production build → dist/
pnpm preview    # Preview production build
pnpm check      # TypeScript check
pnpm format     # Prettier format
```

## Licenca

© MOST Hrvatska. All rights reserved.
