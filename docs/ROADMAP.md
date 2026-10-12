Nx Conglo — Project Context & Roadmap
Quick reference
Repo	https://github.com/nxt3r/nx-conglo
Live	https://nxt3r.github.io/nx-conglo/
Local	D:\Projects\nx-conglo
GitHub user	nxt3r (note: nxt3r, not next3r)
Current version	v1.0.0 (tagged, released 2026)
Stack	Next.js 16 · Tailwind CSS 4 · Turbopack · TypeScript · GitHub Pages
Render mode	Static export (output: "export") — zero runtime
basePath	/nx-conglo in prod only
What Nx Conglo is
An independent solo-built studio shipping web apps under one parent brand. The site is a portfolio: it lists every product, links out to each, and gives one place to see what's live / in beta / coming.

Products featured:

Career OS — live — nxt3r.github.io/Career-OS-Build

Fixtional — beta — nxt3r.github.io/Fixtional

Parent brand: Nx Conglo, est. 2026, "Building businesses that matter."

What we actually built — the CP journey
Every checkpoint was deliberate. Here's the sequence, so you can rebuild mental context fast:

CP1 — Scaffold
create-next-app with Next 16, TypeScript, Tailwind 4, Turbopack, App Router. Basic folder structure in place.

CP2 — Deploy pipeline
GitHub Actions → GitHub Pages. Static export configured in next.config.ts. basePath: /nx-conglo conditional on NODE_ENV === "production". Every push to main auto-deploys. No manual step.

CP3 — Homepage skeleton
Hero section, stat bar (initially hardcoded placeholders), business card grid scaffolding.

CP4 — Business cards + logos
BusinessCard.tsx component, businesses.ts data file, logos served via next/image with NEXT_PUBLIC_BASE_PATH prefix. First basePath trap hit here — logos worked in dev but 404'd on Pages until the prefix pattern was nailed down.

CP5a — Real content + detail pages
Swapped 3 placeholders for 2 real businesses (Career OS, Fixtional)

Added src/data/site.ts as source of truth for stats

Homepage stats became: 0 Businesses · 1 Country · 1 App live · 1 In beta · 2026 Founded

Built /businesses/[id] dynamic route with generateStaticParams() and dynamicParams = false

Added not-found.tsx for unknown business ids

Per-page generateMetadata() for SEO

CP5b — Navbar + Footer
Sticky top navbar with NX wordmark + anchor links

Footer with copyright, quick links, GitHub

Moved <main> wrapper up to layout.tsx

AnchorLink.tsx component — smooth-scroll and re-click-safe (hash-match detection forces scrollIntoView even when the URL hash is already set)

scroll-behavior: smooth in globals.css with prefers-reduced-motion guard

scroll-mt-20 on anchored sections so sticky navbar doesn't cover them

CP5c — SEO polish
metadataBase set to canonical URL via src/lib/site-url.ts

Root layout metadata: title template, description, OG, Twitter card, robots directives

Home + per-business generateMetadata()

sitemap.ts → generates sitemap.xml at build with all routes

robots.ts → generates robots.txt at build

public/og.png — 1200×630 branded OG image (moved from public/logos/ to public/ root after 404 — the file location has to match the metadata path)

CP5d — Brand integration
NX mark as transparent PNG (after a very long SVG rabbit hole — see "Lessons learned")

BrandMark.tsx component with manual NEXT_PUBLIC_BASE_PATH prefix + aspect-ratio math

Mark appears at: navbar (28px), hero (64px), footer (20px)

Favicon: square 512×512 PNG at src/app/icon.png (Next auto-detects)

Release — v1.0.0
README with full project documentation

MIT LICENSE

Annotated git tag: git tag -a v1.0.0 -m "..." → git push origin v1.0.0

GitHub Release created via UI with notes

File map — where everything lives
text
nx-conglo/
├── .github/workflows/           # Pages deploy pipeline
├── public/
│   ├── brand/
│   │   └── nx-mark.png          # Wide NX mark (500×260) — navbar/hero/footer
│   ├── logos/
│   │   ├── career-os.png
│   │   └── fixtional.png
│   └── og.png                   # 1200×630 social card
├── src/
│   ├── app/
│   │   ├── businesses/[id]/
│   │   │   ├── page.tsx         # detail page + generateStaticParams
│   │   │   └── not-found.tsx
│   │   ├── layout.tsx           # navbar + footer shell, root metadata
│   │   ├── page.tsx             # homepage
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   ├── icon.png             # square favicon (512×512)
│   │   └── globals.css
│   ├── components/
│   │   ├── AnchorLink.tsx       # re-click-safe smooth scroll
│   │   ├── BrandMark.tsx        # NX mark, aspect-ratio aware
│   │   ├── BusinessCard.tsx
│   │   ├── Footer.tsx
│   │   └── Navbar.tsx
│   ├── data/
│   │   ├── businesses.ts        # ← EDIT HERE to add a business
│   │   └── site.ts              # ← EDIT HERE to change stats
│   └── lib/
│       └── site-url.ts          # canonical URL helper
├── next.config.ts               # basePath logic lives here
├── README.md
├── LICENSE
└── docs/
    └── ROADMAP.md               # this file, if you save it here
Critical patterns — do NOT break these
1. basePath handling
ts
// next.config.ts
const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/nx-conglo" : "";
Dev = no prefix at localhost:3000

Prod = /nx-conglo on Pages

Every next/image src from public/ needs manual prefix: ${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}

Internal <Link> needs no prefix — Next handles it automatically

2. Proving prod works before push
powershell
npm run build
Remove-Item -Recurse -Force _preview -ErrorAction SilentlyContinue
mkdir _preview
xcopy /E /I out _preview\nx-conglo
npx serve _preview
# → open http://localhost:<port>/nx-conglo/
npx serve out alone does not work — it serves at / but the HTML expects /nx-conglo/. The _preview/nx-conglo/ rename is the trick.

3. _preview/ is gitignored
Never commit it. It's a local artifact.

4. Dynamic routes require generateStaticParams
output: "export" means no server. Every route must exist at build time. Adding a business = adding to businesses.ts = auto-generated page on next build.

5. Favicon caching is aggressive
After changing icon.png, hard-refresh (Ctrl+Shift+R) or test in incognito. Sometimes takes minutes to update even then.

Lessons learned the hard way
The basePath double-prefix
next/image + basePath + static export + public/ assets = inconsistent. Sometimes it auto-prefixes, sometimes it doesn't. The reliable pattern is manual prefixing via NEXT_PUBLIC_BASE_PATH. We use this in BrandMark.tsx and BusinessCard.tsx.

The SVG-to-PNG rabbit hole
You spent ~45 minutes trying to get a clean vector SVG of the NX mark:

Original "SVG" was actually a base64-encoded PNG wrapped in SVG tags

vtracer produced 40+ noisy paths full of JPEG artifacts

Photopea's SVG export kept rasterizing

Resolution: exported a transparent PNG and used that. Works identically at the sizes we render. Vector purism isn't worth it for a small logo on a personal site.

The Photopea selection vs path confusion
The blue outline in Photopea is a selection (marching ants), not a vector path. Converting requires Select → Convert to Path to move into the Paths panel. Just seeing a blue outline does not mean you have vector geometry.

The white-on-white logo
Exported the mark as white-on-transparent, dropped it on a white navbar, couldn't see it. Fix: re-export as dark (#0f172a), matching the text color.

The 1200×630 aspect trap
Exported the mark at OG image dimensions (1200×630), which left tons of padding. In a 28px navbar slot, the actual NX rendered at ~9px. Fix: crop tight to the mark before export. Now 500×260.

npx serve out doesn't prove basePath
Already covered above — use the _preview/nx-conglo/ dance.

Future plans — the menu
Nothing here is required. Pick what appeals when you have time.

Quick wins (30 min or less each)
JSON-LD structured data — Organization + WebSite schema in layout. Google rich results. 5 min.

Site-wide not-found.tsx — currently only businesses/[id]/not-found.tsx exists. Add src/app/not-found.tsx for the whole site.

Facebook/LinkedIn re-scrape — if OG image ever looks stale in shares, hit the debuggers again.

Medium (1–2 hours each)
Dark mode — Tailwind 4's @variant dark, a theme toggle in navbar, localStorage persistence. Respects prefers-color-scheme by default.

Dynamic per-business OG images — Next's ImageResponse generates unique cards at build time. Makes LinkedIn/Twitter shares for each business look custom.

Analytics — Plausible (paid, privacy-first, works on Pages) or Umami (self-hosted or paid, also works).

Bigger (session-sized)
Blog / notes section — if you want to write in public. MDX files in content/, [slug] route with generateStaticParams, done.

Contact form — needs a backend or Formspree/Web3Forms. Static sites can't POST anywhere by default.

Custom domain — if you ever buy one (e.g. nxconglo.com), it's a DNS CNAME + next.config.ts change (drop the basePath because you'd then serve at root). Also update SITE_URL in src/lib/site-url.ts.

When you ship the next batch
Tag v1.1.0 for minor additions (new business, new section)

Tag v2.0.0 for major redesign or restructure

Semantic versioning: MAJOR.MINOR.PATCH

PATCH = bug fix

MINOR = new feature, backwards compatible

MAJOR = breaking changes

How to add a new business (the common task)
Drop logo at public/logos/{id}.png (16:9 works best)

Edit src/data/businesses.ts — append to the array:

ts
{
  id: "new-thing",
  name: "New Thing",
  tagline: "Short punchy line",
  description: "One or two sentences.",
  logo: "/logos/new-thing.png",
  status: "live",  // or "beta" or "coming-soon"
  url: "https://...",
  tags: ["Web", "Category"],
  year: 2026,
}
Update src/data/site.ts stats if needed

npm run dev → verify card renders + detail page works

Prod-sim with the _preview/nx-conglo/ dance

Commit, push, done — everything else (sitemap, card, detail page) auto-generates

Debugging checklist — when something breaks
Site looks unstyled locally:

Confirm postcss.config.mjs has "@tailwindcss/postcss": {}

Confirm globals.css starts with @import "tailwindcss";

Restart dev server after any config change

Assets 404 on live but work locally:

99% of the time: missing NEXT_PUBLIC_BASE_PATH prefix on a public/ asset

Check the live page's DevTools → Network → look at the actual requested URL

If it says /nx-conglo/nx-conglo/... → double prefix, remove the manual one

If it says /logos/... (no prefix) → missing manual prefix, add it

Favicon not updating:

Hard refresh (Ctrl+Shift+R)

Try incognito

Confirm src/app/icon.png exists and loads at /icon.png (dev) or /nx-conglo/icon.png (prod)

Deploy workflow fails:

Check Actions tab → the failing step

Most common: TypeScript error, missing generateStaticParams, or bad path in next.config.ts

Fix, push, workflow re-runs

Anchor scroll doesn't trigger on re-click:

AnchorLink.tsx should be handling this — verify you're using it, not a raw <Link>, for /#businesses and /#about

Where to find help later
When you come back to this project in 3 months and forget everything:

Read this document first — it's the map

Read README.md — it's the public-facing summary

Check git log --oneline — every CP commit is labeled

Check git tag — versions marked

Look at next.config.ts — basePath logic is the most confusing part, and it's all in one small file

Search the codebase for NEXT_PUBLIC_BASE_PATH — that's where all the asset-prefix magic lives

Credits
Built by nxt3r with Nx Conglo as the parent brand.
Co-piloted by Claude across CP1 → CP5d → v1.0.0 release.

Timeline: 2026, from empty repo to tagged release.

