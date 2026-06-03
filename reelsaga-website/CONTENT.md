# Editing ReelSaga content

All site content lives in **`src/data/`**. You never need to touch a component
or a page to change what the site says — only the files in `src/data/`.

> The one rule: **content is edited only in `src/data/`.** Components (`src/components/`)
> and pages (`src/pages/`) contain layout only — no titles, links, or copy.

Components read content through one module, `src/content/index.ts` (the
accessors like `getSeries`, `getHome`, `getBook`). You don't need to edit that
file for day-to-day content changes.

After editing, run `npm run typecheck` to catch typos (a missing field becomes
an error), then `npm run dev` to preview.

---

## Where things live

| You want to change… | Edit this file |
| --- | --- |
| A drama/series or a book card (title, cover, tagline, trailer) | `src/data/series.ts` |
| Which series appear in a Home rail | `src/data/home.ts` |
| The Realistic / Animated / Books page curation | `src/data/categories.ts` |
| A book's chapters or retailer links | `src/data/books/index.ts` |
| Blog posts / article text | `src/data/blog.ts` |
| Header tabs & footer links | `src/data/navigation.ts` |
| Store / social / legal links, trailer host, logo | `src/data/config.ts` |
| Any button label, toast, gating or auth string | `src/data/copy.ts` |

---

## How to add a new series

1. Open `src/data/series.ts` and copy an existing object. Fill in the fields:

   ```ts
   {
     id: 'midnight-heist',          // unique, kebab-case — referenced from rails
     slug: 'midnight-heist',        // URL segment (usually the same as id)
     title: 'The Midnight Heist',
     type: 'realistic',             // 'realistic' | 'animated' | 'books'
     genres: ['Crime', 'Thriller'],
     image: '/assets/fig/cover-x.png',
     tagline: 'One night. One vault. No way out.',
     synopsis: 'Longer description shown in the trailer modal…',
     // optional: a card trailer (streams from config.trailerBaseUrl)
     video: { type: 'Shorts', id: 125, kind: 'TRAILER_720' },
   }
   ```

2. Show it somewhere by adding its **id** to a rail (see below). That's it — the
   card hydrates itself: `<SeriesCard id="midnight-heist" />` needs no other data.

If a series has no `image`, it renders a styled navy gradient (set `tint`/`glow`
to tint it).

## How to add it to a rail / section

Rails reference series **by id**. Add the id wherever you want it to appear:

- **Home** → `src/data/home.ts`, in a rail's `seriesIds` array.
- **Realistic / Animated** → `src/data/categories.ts`, in `realistic.trending`
  (Animated mirrors Realistic), etc.
- **Books page** → `src/data/categories.ts`, in `booksPage.newReleases`,
  `booksPage.trending`, `booksPage.spotlight`, or `booksPage.more`.

Reordering the array reorders the cards. No JSX changes.

## How to add or edit a book and its chapters

1. The book's **card** (title, cover, blurb, genres) is just a series with
   `type: 'books'` in `src/data/series.ts`.
2. Its **reader** (chapters + retailers) lives in `src/data/books/index.ts`.
   By default a book uses `DEFAULT_CHAPTERS`. To give a book its own text or
   store links, add an entry to `bookReaders`:

   ```ts
   export const bookReaders = {
     'midnight-heist': {
       retailers: [{ name: 'Barnes & Noble', url: 'https://…' }],
       chapters: [
         { title: 'Chapter 1', body: ['First paragraph…', 'Second paragraph…'] },
         { body: ['Chapter 2 has no title, so the reader shows "Chapter 2".'] },
       ],
     },
   };
   ```

   `chapters` is an array of `{ title?, body }`, where `body` is an array of
   paragraphs. Omit `title` to fall back to "Chapter N".

## How to change a link, store URL, or any copy

- **Links** (App Store, Google Play, social, legal, trailer host): `src/data/config.ts`.
- **Header tabs / footer links**: `src/data/navigation.ts`.
- **Any visible string** (buttons, toasts, gating messages, sign-in text):
  `src/data/copy.ts`.

## Where images go

Put image files under `public/assets/` (e.g. `public/assets/fig/cover-x.png`)
and reference them with an absolute path from the site root, e.g.
`/assets/fig/cover-x.png`. The folders are also available as
`config.assets.fig` / `config.assets.images`.

---

## Project layers (for developers)

```
src/data/        ← content (the only place to edit content)
src/content/     ← accessor seam (getSeries, getHome, …) — the only data import components use
src/lib/         ← analytics wrapper, trailer URL helper
src/components/  ← presentational, prop-driven (common / layout / cards / sections / series / books / auth)
src/pages/       ← composition only (HomePage, CategoryPage, BooksPage, BookPage, BlogPage, ArticlePage)
src/app.jsx      ← routes + shell + overlays
src/main.jsx     ← mount + analytics init
```

Cards are **self-hydrating**: `<SeriesCard id="…" />` / `<PosterCard id="…" />`
look up their own data, so pages and rails pass only ids. If the data source
ever moves to a CMS, only `src/content/index.ts` changes.
