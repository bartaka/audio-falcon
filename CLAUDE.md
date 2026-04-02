# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Main App (root)
```bash
npm run start          # Dev server (Vite)
npm run build          # TypeScript check + production build
npm run serve          # Preview production build
npm run test           # Run tests in watch mode (Vitest)
npm run test:no-watch  # Single test run
npm run test:coverage  # Coverage report
```

### Sanity Studio (`/studio`)
```bash
cd studio
npm run dev            # Dev server
npm run build          # Production build
npm run deploy         # Deploy to Sanity hosting
```

## Architecture

**Monorepo** with two independent apps:
- Root: Vite + React 18 + TypeScript frontend
- `studio/`: Sanity CMS for content management

### Frontend Data Flow

Content is fetched from Sanity (project ID `njjblh1d`, dataset `production`) at runtime. The Sanity client lives in `src/data/sanityClient.ts` and uses `VITE_SANITY_PROJECT` / `VITE_SANITY_DATASET` env vars.

Two content types drive dynamic content:
- **Projects** — portfolio tiles rendered by `src/components/portfolio/Portfolio.tsx`
- **Banners** — header carousel rendered by `src/components/carousel/Banners.tsx`

The `src/utils/Images.ts` `urlFor()` helper wraps `@sanity/image-url` for all Sanity image references.

The `src/data/whatWeDo.ts` file contains **static** (non-CMS) service data used by the WhatWeDo section.

### Page Structure

Single route (`/`) — all content is one scrollable page:
`Header (Nav + Banners carousel) → Portfolio → WhatWeDo → AboutUs → ContactUs → Footer`

React Scroll handles smooth anchor navigation. React Router is present but the app is effectively single-page.

### Styling

Components use **SCSS modules** (`.module.scss` per component) combined with **Tailwind CSS** utility classes. Global design tokens (colors, typography) are defined in `src/scss/variables.scss`. Custom fonts (League Gothic, Am Sans) are loaded in `src/index.scss`.

### Contact Form

`src/components/contactUs/ContactUsForm.tsx` submits via EmailJS using `VITE_SERVICE_ID`, `VITE_TEMPLATE_ID`, `VITE_PUBLIC_KEY` env vars.

### Environment Variables

Copy `.env.template` to `.env` and fill in:
```
VITE_SERVICE_ID=        # EmailJS
VITE_TEMPLATE_ID=       # EmailJS
VITE_PUBLIC_KEY=        # EmailJS
VITE_SANITY_PROJECT=    # Sanity project ID
VITE_SANITY_DATASET=    # Sanity dataset
```

### Testing

Uses **Vitest** (not Jest) with jsdom environment. Setup file referenced in `vite.config.js` at `./src/setupTests.ts`. No tests currently exist in the codebase.

### Deployment

Frontend deploys to **Firebase** (configured via `firebase.json` / `.firebaserc`).
