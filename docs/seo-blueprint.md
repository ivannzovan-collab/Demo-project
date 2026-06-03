# ReelSaga SEO Blueprint
`reel-saga.com` · companion to `sitemap.xml` · English only

This is the on-page spec for every page type the sitemap emits: URL pattern, `<title>`, meta
description, canonical rule, Open Graph, heading hierarchy (single H1), and JSON-LD schema.
Build pages to these templates; the sitemap only ever lists the **canonical** URL of each page.

---

## 0. Global rules (read first)

**One H1 per page — always.** Your Tudum audit flagged a page with two H1s ("Wednesday Season 2…"
+ "All 8 Episodes…Streaming Now"). Don't replicate that. Each template below has exactly one H1 =
the page's primary subject. Any hero-banner / "streaming now" line is an **H2 or a `<p>`**, never a
second H1.

**Canonical strategy (this is the core decision).** The same IP exists across formats
(e.g. *The Suburban Strangler* is a book **and** an anime; *The Royal Baby Scandal* is book +
realistic + anime). Each piece of content has exactly **one canonical home**:

| Content | Canonical home |
|---|---|
| The video (realistic) | `/series/realistic/<slug>/watch/` |
| The video (anime) | `/series/anime/<slug>/watch/` |
| The book text | `/books/<slug>/read/` |
| The audiobook | `/books/<slug>/listen/` |

Your draft had **both** `series/.../read/` and `books/.../read/`. That is duplicate content and would
split ranking signals. Fix: there is **no** standalone `series/.../read/` page. Instead the series
hub shows a short teaser + a "Read the book" link to `/books/<slug>/read/`, and the book hub shows a
"Watch the series" link to the relevant `watch/` page. Cross-format pages are **links, not URLs** —
that's why they're absent from the sitemap. If you ever do build a cross-format teaser page, set its
`<link rel="canonical">` to the real home so it stays out of the index.

**Realistic vs Anime are separate productions.** A title in both lists (8 of them) is two distinct
videos (different art) of one story, so each gets its own `/series/realistic/` and `/series/anime/`
URL. They are not duplicates. Each cross-links the other and the book under an "Also available as"
block.

**Breadcrumbs everywhere.** Every page below the pillar level ships a visible breadcrumb trail and a
matching `BreadcrumbList` JSON-LD. Pattern: `Home › Series › Anime › The Suburban Strangler › Watch`.

**Image alt text** follows your Tudum standard — descriptive, not keyword-stuffed. Good:
`Jenna Ortega as Wednesday Addams in Season 2`. Use `<picture>` with responsive `srcset` for the
poster/key-art (PageSpeed is a ranking factor, as you noted).

**`reel-saga.com`** is the canonical host. Pick `https://` + non-`www` (matches the generator).
301-redirect the other three variants (`http`, `www`) to it. All canonicals are absolute and
trailing-slashed.

---

## 1. Home — `/`
- **Title:** `ReelSaga — Binge Short Drama Series, Books & Audio`
- **Meta (~155 chars):** `Stream addictive short drama series, read web novels, and listen to audiobooks. New episodes daily across realistic drama, anime, and books on ReelSaga.`
- **Canonical:** `https://reel-saga.com/`
- **OG:** `og:type=website`, `og:title`, `og:description`, `og:image` (brand key art 1200×630), `og:url`
- **H1:** `ReelSaga` (logo-locked is fine, but the rendered H1 must exist once)
  - H2: `Trending Now` · `New on ReelSaga` · `Browse by Genre` · `Series` · `Books`
- **Schema:** `WebSite` (with `potentialAction` → `SearchAction` for the sitelinks search box) +
  `Organization` (logo, sameAs social profiles).

---

## 2. Pillar & category index pages
`/series/`, `/series/realistic/`, `/series/anime/`, `/books/`, `/recommendations/`, `/articles/`

- **Title:** `Anime Short Dramas — Watch Free Episodes | ReelSaga` (vary per index)
- **Meta:** one sentence on what the catalog covers + "browse all" intent.
- **Canonical:** self.
- **OG:** `og:type=website`.
- **H1 (one):** `Anime Short Dramas` (the category name)
  - H2: alphabetical / genre groupings, `Most Popular`, `Recently Added`
- **Schema:** `CollectionPage` + `BreadcrumbList` + an `ItemList` of the titles shown (with
  `position` + `url`). This is your best shot at category-keyword ranking
  ("anime drama app", "short drama series").

---

## 3. Series hub — `/series/{realistic|anime}/<slug>/`
Canonical landing page for a video production.

- **Title:** `<Title> — Watch the <Anime|> Series | ReelSaga`
  e.g. `The Suburban Strangler — Watch the Anime Series | ReelSaga`
- **Meta (~155):** 1–2 sentence logline + hook + "Watch free episodes on ReelSaga." Lead with the
  strongest genre keyword (mafia / werewolf / billionaire / vampire).
- **Canonical:** self.
- **OG:** `og:type=video.tv_show`, `og:image` = key art, `og:video` if you expose a trailer URL.
- **H1 (one):** `<Title>`
  - H2: `Watch Episodes` · `Story` (synopsis) · `Cast & Characters` · `Also available as`
    (links to book / other-style series) · `Ratings & Reviews` (summary, links to `reviews/`) ·
    `More Like This` (links to the matching `/recommendations/` pages)
- **Schema:** `TVSeries`
```json
{
  "@context": "https://schema.org",
  "@type": "TVSeries",
  "name": "The Suburban Strangler",
  "url": "https://reel-saga.com/series/anime/the-suburban-strangler/",
  "image": "https://reel-saga.com/img/the-suburban-strangler-keyart.jpg",
  "description": "<one-paragraph logline>",
  "genre": ["Thriller", "Mystery", "Romance"],
  "numberOfEpisodes": 30,
  "inLanguage": "en",
  "trailer": {
    "@type": "VideoObject",
    "name": "The Suburban Strangler — Official Trailer",
    "thumbnailUrl": "https://reel-saga.com/img/strangler-trailer.jpg",
    "uploadDate": "2026-06-01",
    "contentUrl": "https://reel-saga.com/series/anime/the-suburban-strangler/watch/"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": 4.6, "ratingCount": 1280, "bestRating": 5
  }
}
```
Pair with `BreadcrumbList`. Only include `aggregateRating` when you have real ratings — fabricating
them risks a manual action.

---

## 4. Watch page — `/series/{…}/<slug>/watch/`
The actual player / episode list. Highest commercial-intent page for video.

- **Title:** `Watch <Title> — Free Episodes Online | ReelSaga`
- **Meta:** "Stream all episodes of <Title>… Start watching free on ReelSaga." Mention episode count.
- **Canonical:** self.
- **OG:** `og:type=video.episode` (or `video.tv_show`), `og:video:url`, `og:image`.
- **H1 (one):** `Watch <Title>`
  - H2: `Episodes` (list) · `Synopsis` · `Where the Story Continues` (book/audio links)
- **Schema:** `VideoObject` for the trailer/first episode (`name`, `description`, `thumbnailUrl`,
  `uploadDate`, `duration` in ISO-8601 e.g. `PT2M30S`, `contentUrl`, `embedUrl`), nested as
  `episode`/`trailer` of the parent `TVSeries`. Add `BreadcrumbList`.

---

## 5. Book hub — `/books/<slug>/`
Canonical landing page for a novel.

- **Title:** `<Title> — Read the Web Novel | ReelSaga`
- **Meta (~155):** logline + "Read free chapters online" + genre keyword.
- **Canonical:** self.
- **OG:** `og:type=book`, `og:image` = cover, `book:author`, `book:tag`.
- **H1 (one):** `<Title>`
  - H2: `Read Now` (link/CTA to `read/`) · `Synopsis` · `Chapters` · `Also available as`
    (audiobook `listen/`, series `watch/` where they exist) · `Ratings & Reviews` · `More Like This`
- **Schema:** `Book`
```json
{
  "@context": "https://schema.org",
  "@type": "Book",
  "name": "The Suburban Strangler",
  "url": "https://reel-saga.com/books/the-suburban-strangler/",
  "image": "https://reel-saga.com/img/the-suburban-strangler-cover.jpg",
  "author": { "@type": "Person", "name": "<Author / ReelSaga Originals>" },
  "inLanguage": "en",
  "genre": ["Thriller", "Romance"],
  "numberOfPages": 0,
  "bookFormat": "https://schema.org/EBook",
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": 4.5, "ratingCount": 980, "bestRating": 5 }
}
```

---

## 6. Read page — `/books/<slug>/read/`
SEO-rich text preview + free chapters. This is the **canonical reading URL** (your draft duplicated
it under `series/` — don't).

- **Title:** `Read <Title> Online — Free Chapters | ReelSaga`
- **Meta:** "Read <Title> free on ReelSaga. Chapter 1 begins…" Tease the hook.
- **Canonical:** self.
- **H1 (one):** `Read <Title>`
  - H2 per chapter: `Chapter 1: <name>`, `Chapter 2: …` (real H2s = crawlable long-form text, your
    indexable-content engine)
- **Schema:** `Book` with `hasPart` → `Chapter` items for free chapters, OR `Book` + a small
  `BreadcrumbList`. Keep the **actual chapter prose on the page** — that text is what ranks.

---

## 7. Listen page — `/books/<slug>/listen/`  (audiobook)
> ⚠️ Emitted for **all 180 books** by default (`INCLUDE_AUDIOBOOKS = True`). If some books have **no**
> audiobook, add their slugs to `NO_AUDIOBOOK` in the generator and re-run — empty `/listen/` pages
> are thin content and will drag the site's quality signal.

- **Title:** `Listen to <Title> — Audiobook | ReelSaga`
- **Meta:** "Listen to the full <Title> audiobook on ReelSaga."
- **Canonical:** self.
- **OG:** `og:type=music.song` (closest OG type) or `book`.
- **H1 (one):** `Listen to <Title>`
- **Schema:** `Audiobook` (subtype of `Book`) + `AudioObject` (`contentUrl`, `duration`, `encodingFormat`).

---

## 8. Reviews — `/series/{…}/<slug>/reviews/` and `/books/<slug>/reviews/`
- **Title:** `<Title> Reviews & Ratings | ReelSaga`
- **Meta:** "Read viewer/reader reviews and ratings for <Title>…"
- **Canonical:** self.
- **H1 (one):** `<Title> — Ratings & Reviews`
  - H2: `Overall Rating` · `Reader Reviews` / `Viewer Reviews`
- **Schema:** the parent `Book`/`TVSeries` carrying `aggregateRating` **plus** an array of `Review`
  (`author`, `reviewRating`, `reviewBody`, `datePublished`). Use **real** user reviews only.

---

## 9. Recommendation pages — `/recommendations/<slug>/`
Two subtypes, both `ItemList`-driven, both funnel to a primary title.

**A. Evergreen genre collections** (auto-generated, e.g. `werewolf-shifter-romance-books/`,
`vampire-demon-supernatural-anime/`). These capture genre search with no trademark risk.
- **Title:** `<Genre> Books to Read on ReelSaga` / `…Dramas to Watch` / `…Anime`
- **H1 (one):** `<Genre> on ReelSaga` (e.g. `Werewolf & Shifter Romance Books`)

**B. "…like <flagship>" funnels** (curated — your exact pattern, e.g.
`dark-mystery-shows-like-the-suburban-strangler/`). Anchored on a ReelSaga flagship and pointing to
related ReelSaga titles, so internal link equity flows to the hero IP.
- **Title:** `<N> Dark Mystery Shows Like The Suburban Strangler | ReelSaga`
- **Meta:** "Loved The Suburban Strangler? Here are <N> more dark mystery dramas to binge on ReelSaga."
- **H1 (one):** `Dark Mystery Shows Like The Suburban Strangler`
  - H2: a short intro, then one H2/H3 per recommended title (each links to its hub), plus a
    "Start with The Suburban Strangler" CTA at the top.
- **Schema (both):** `ItemList` (`itemListElement` → each title with `position`, `url`, `name`) +
  optional `FAQPage` ("What is it about?", "Where can I watch/read it?") for extra SERP real estate.

> Want to also chase **external** comparison demand ("shows like Wednesday", "books like It Ends With
> Us")? That's higher volume but editorial — write those by hand, anchor on the external IP in the H1,
> recommend ReelSaga titles in the body, and add the new slugs to `LIKE_PAGES`. I kept v1 on your own
> flagships to stay clean and trademark-safe.

---

## 10. Articles (blog) — `/articles/` and `/articles/<slug>/`
New posts as blogs. The index ships now; `sitemap-articles.xml` is **empty-but-present** — append a
URL each time you publish (or wire the generator to read an `articles.json`).

- **Article title:** `<Headline> | ReelSaga` (front-load the keyword, ≤ ~60 chars rendered)
- **Meta (~155):** summary with the target query.
- **Canonical:** self.
- **OG:** `og:type=article`, `article:published_time`, `article:author`, `og:image`.
- **H1 (one):** the headline. (If you ever embed a "Streaming Now" banner, it's an H2 — the Tudum trap.)
  - H2: section subheads.
- **Schema:** `Article` or `NewsArticle` (`headline`, `datePublished`, `dateModified`, `author`,
  `image`, `publisher`) + `BreadcrumbList`.

---

## 11. Deploy & maintenance

1. Host the files at the web root so the index resolves at `https://reel-saga.com/sitemap.xml`.
2. Add to `robots.txt`:
   ```
   Sitemap: https://reel-saga.com/sitemap.xml
   ```
3. Google Search Console → Sitemaps → submit `sitemap.xml` (the index; children are discovered).
4. `lastmod` is set to today as a placeholder. When you track real publish/update dates, feed them
   into the generator so `lastmod` is truthful (stale-but-changing `lastmod` erodes trust;
   Google largely ignores `changefreq`/`priority`, which is why they're kept minimal).
5. Re-run `python3 generate_sitemap.py` after catalog changes — it rebuilds `catalog.json` + all
   sitemaps deterministically. Edit titles in the three lists at the top; flip audio with the CONFIG
   toggles.

### Open items to confirm with your content team
- **`The Bride Who Died Twice` (book) vs `The Bride Who Dies Twice` (series)** — merged under
  `the-bride-who-dies-twice`. Confirm the canonical spelling; if the book keeps "Died", split them
  (remove the alias) and they'll get separate hubs.
- **Audiobooks** — confirm which of the 180 books actually have audio (see §7).
- **Author attribution** — `Book.author` needs a real value ("ReelSaga Originals"? per-title author?).
