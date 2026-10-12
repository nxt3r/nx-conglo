# Nx Conglo

> An independent studio building web apps and digital services in public.

**Live:** [nxt3r.github.io/nx-conglo](https://nxt3r.github.io/nx-conglo/)

---

## What is this?

The homepage and portfolio site for **Nx Conglo** — a solo-built studio shipping web apps under one roof. It lists every product we've launched, links to each one, and gives a single place to see what's live, what's in beta, and what's next.

Currently:

| Product | Status | Link |
|---|---|---|
| **Career OS** | 🟢 Live | [nxt3r.github.io/Career-OS-Build](https://nxt3r.github.io/Career-OS-Build) |
| **Fixtional** | 🟡 Beta | [nxt3r.github.io/Fixtional](https://nxt3r.github.io/Fixtional) |

---

## Tech stack

- **[Next.js 16](https://nextjs.org/)** — App Router, static export
- **[Tailwind CSS 4](https://tailwindcss.com/)** — utility-first styling
- **[Turbopack](https://turbo.build/pack)** — dev bundler
- **TypeScript** — strict mode
- **GitHub Pages** — hosting via GitHub Actions
- **Zero runtime dependencies** — pure static HTML/CSS/JS output

---

## How it works

The whole site is a **static export** (`output: "export"` in `next.config.ts`) served from GitHub Pages. No server, no edge functions, no runtime. Just files.

**basePath handling:** Because GitHub Pages serves this repo at `nxt3r.github.io/nx-conglo/` (not the domain root), all routes and assets use the `/nx-conglo` prefix in production. This is set conditionally in `next.config.ts`:

```ts
const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/nx-conglo" : "";