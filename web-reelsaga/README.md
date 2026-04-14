# ReelSaga — Landing Page

A static, single-page landing site. No build step.

## Preview

```bash
# from repo root
cd web-reelsaga
python3 -m http.server 5173
# open http://localhost:5173
```

Or use any static server (`npx serve`, `live-server`, etc.).

## Files

- `index.html` — markup + inline SVG placeholders
- `styles.css` — all styles (Fraunces + Instrument Sans from Google Fonts)
- `script.js` — marquee pause, phone parallax, scroll reveals
- `assets/favicon.svg` — placeholder mark

## Brand palette

| Name      | Hex       |
| --------- | --------- |
| Primary 1 | `#FEC200` |
| Primary 2 | `#111C3A` |
| Primary 3 | `#050E27` |
| Primary 4 | `#9199A1` |

## Asset swap-in checklist (when ready)

1. **Logo SVG** — replace the two inline `<svg class="nav__mark">` blocks
   in `index.html` (nav and footer) with your provided mark, and swap the
   wordmark span with a proper logotype SVG if desired.
2. **Favicon** — overwrite `assets/favicon.svg`.
3. **Poster art** — the content cards and phone posters use CSS gradient
   placeholders (`.poster--1`...`.poster--5`, `.poster--hero`). Drop images
   into `assets/` and replace the `.card__thumb` / `.phone__screen` div
   contents with `<img>` tags. Keep the `::before` gradient overlay for
   legibility.
4. **Store badges** — replace the inline `.store` blocks with official
   Apple / Google SVG badges when available.
5. **Copy** — headlines are marked with `<em>` for the italic serif accent;
   tweak freely.
