<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-000?style=flat-square&logo=nextdotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/GSAP-ScrollTrigger-88CE02?style=flat-square&logo=greensock&logoColor=black" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white" />
</p>

<h1 align="center">Interactive CV</h1>

<p align="center">
  <em>My résumé as a scroll-animated single page — and the same content rendered two different ways for two different readers.</em>
</p>

<p align="center">
  <strong><a href="https://cv-next-rose.vercel.app">Live Demo</a></strong>
</p>

---

## What it demonstrates

A one-page scroll-animated CV (GSAP-driven reveals, section transitions) that doubles as a print target: the same React tree renders a PDF-ready layout via CSS `@media print`, captured headlessly with Chrome's `--print-to-pdf`.

- **Hero → About → Experience → Skills → Education → Languages** — scroll-triggered sections, all content sourced from a single typed data file (`src/lib/constants.ts`)
- **Two PDF outputs from one codebase**, not two repos:
  - `/` (print mode) — a designed, single-page CV with a dark sidebar and stack-tag chips, meant for a human reader (email attachment, LinkedIn Featured)
  - `/ats` — a single-column, icon-free, sidebar-free layout of the *same data*, built to survive ATS/Greenhouse-class resume parsers that scramble multi-column PDFs
- **Dark/light theme** via `next-themes`, persisted and respecting `prefers-color-scheme`

## Why two CVs, not one

Multi-column PDF layouts (a sidebar next to a main content column) are still flagged by current ATS vendor guidance as a parsing risk — text order can scramble depending on the parser. Rather than compromise the designed version's layout to satisfy a parser, both versions are generated from the same `EXPERIENCES` / `SKILL_CATEGORIES` data: `PrintCV.tsx` (design, kept for humans) and `PrintCVATS.tsx` (single column, kept for automated application forms). Changing a bullet point once updates both PDFs.

## Architecture decisions

- **Print output via CSS, not a PDF library.** `.cv-print` is `display: none` in screen media and `display: flex` under `@media print`; generating the PDF is just `chrome --headless --print-to-pdf` against the live route. No `puppeteer`/`react-pdf` dependency, no layout re-implementation in a different rendering engine — the PDF is exactly what the browser would print.
- **A dedicated route for the ATS variant (`/ats`)** instead of a print-media toggle on the same page. The ATS layout has different structural requirements (no sidebar, no icons, standard section headings) that would fight with the designed layout's CSS if shared; a separate route keeps both simple.
- **One data source, two renderers.** `constants.ts` has no knowledge of which PDF will read it — `<hl>` markup in achievement strings is interpreted differently by each renderer (`.hl` colored span in the designed version, plain `<strong>` in the ATS version), so highlighting logic never has to be duplicated by hand.

## Getting started

```bash
git clone https://github.com/rramirezgit/cv-next.git
cd cv-next
npm install
npm run dev
```

```bash
npm run build   # static export (output: "export")
npm run lint    # ESLint
```

To regenerate a PDF after editing content: `npm run build`, serve `out/` locally (e.g. `npx serve -l 4173 out`), then run Chrome headless against `http://localhost:4173/` (designed CV) or `http://localhost:4173/ats` (ATS-safe CV) with `--print-to-pdf`.

## Stack

Next.js 16 (App Router, static export) · React 19 · TypeScript strict · GSAP 3 + `@gsap/react` · Tailwind CSS 4 · `next-themes`

---

<sub>Built by <a href="https://github.com/rramirezgit">Ricardo Ramirez</a> as part of a frontend portfolio — see the <a href="https://ricardoramirez-dev.vercel.app/work">full portfolio</a>.</sub>
