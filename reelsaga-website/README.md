# ReelSaga Website 🎬

A marketing + catalog website for **ReelSaga**, a vertical short-drama streaming
brand (navy + signature yellow design system). Recreated as a real Vite + React
app from a **Claude Design** handoff bundle (`claude.ai/design`) — the original
prototype was HTML/CSS/JS rendered in-browser via Babel standalone; this is the
same design ported to a proper build setup.

## Run it

```bash
cd reelsaga-website
npm install
npm run dev      # http://localhost:3001
```

```bash
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## What's in here

A single-page app with hash-based routing and these views:

- **Home** — rotating hero with a skewed poster fan, an "Originals" carousel, the
  Suburban Strangler feature banner, "Must watch" row, review cards, and a
  closing CTA band.
- **Realistic / Animated** category pages — category hero, a pink-glow "Trending"
  row, caption-card rows (New Releases / Recommended / Guilty Pleasure), a feature
  banner, and three "Top genre" cards.
- **Books** page — category hero, a coverflow "Spotlight", caption rows, and a
  gold-numbered ranked "Trending" row.
- **Title detail**, **Blog** + **Article** views.
- Global **series preview overlay** (click any poster), **sign-in modal**, and a
  **⌘K / `/` search overlay**.

### Source layout (`src/`)

| File | Role |
| --- | --- |
| `main.jsx` | Entry — imports stylesheets, renders `App` |
| `app.jsx` | Routing, global context, overlays, toasts |
| `data.js` | Content data (`RS_DATA`, `RS_GET`, `RS_BY_TYPE`) |
| `components.jsx` | Icons, context, nav, footer, poster card, buttons |
| `widgets.jsx` | Phone mockup, sign-in modal, search overlay |
| `home3.jsx` | Home page (the active Figma-matched design) |
| `catalog2.jsx` | Category landing pages (Realistic / Animated / Books) |
| `catalog.jsx` | Title-detail page (and original catalog) |
| `blog.jsx` | Blog list + article |
| `series-modal.jsx` | Series preview overlay |
| `home.jsx` | Original streaming home (kept for the reusable `Carousel`) |
| `*.css` | Verbatim design stylesheets (loaded in `main.jsx`) |

Static artwork lives in `public/assets/`.

## Notes

- The "Download the app", store, and "Watch" buttons fire confirmation toasts —
  there are no real app-store links wired up yet.
- A couple of cover images in `public/assets/fig/` are very large
  (`cover-d.png`, `cover-e.png` are ~18 MB each, exported at full resolution).
  They're displayed at ≤725 px, so they're safe to downscale if you want a
  lighter bundle.
