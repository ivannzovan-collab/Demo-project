/* ============================================================
   ReelSaga — shared content types (the data layer's contract).
   Editing content means editing files in src/data/; these types
   make a typo in a series/book object a compile error, not a
   blank card at runtime.
   ============================================================ */

export type Category = 'realistic' | 'animated' | 'books';

/** Ribbon/rail membership hints shown on a card. */
export type Badge = 'originals' | 'trending' | 'new' | 'hot' | 'complete';

/** A trailer descriptor. Streams from
 *  `${config.trailerBaseUrl}/${type}/${id}/${kind}.mp4`. */
export interface VideoRef {
  type: 'Anime' | 'Shorts';
  id: number;
  kind?: 'TRAILER_720' | 'TEASER_720';
}

/** A catalog title — a drama/series OR a book's card.
 *  Only the fields every card needs are required; the rest are
 *  optional and feature-specific (covers, trailers, ratings…). */
export interface Title {
  id: string;            // stable unique key, referenced from rails
  slug: string;          // URL segment (currently equals id)
  title: string;
  type: Category;
  tagline?: string;
  synopsis?: string;
  genres?: string[];
  image?: string;        // cover art
  titleArt?: string;     // optional title-treatment / logo image
  video?: VideoRef;      // enables the hover/scroll + modal trailer
  badges?: Badge[];
  /* visual fallback when there is no cover image */
  tint?: string;
  glow?: string;
  wide?: boolean;
  /* display-only catalog metadata */
  rank?: number;
  hot?: boolean;
  new?: boolean;
  complete?: boolean;
  episodes?: number;
  chapterCount?: number; // books: total chapters (for the progress bar)
  runtime?: string;
  rating?: number;
  views?: string;
}

export type Series = Title;

export interface Retailer {
  name: string;
  url: string;
}

/** One readable chapter. `title` is optional — the reader falls back
 *  to "Chapter N". `body` is an array of paragraphs. */
export interface Chapter {
  title?: string;
  body: string[];
}

/** Per-book reader data, merged onto the catalog Title by getBook(). */
export interface BookReader {
  retailers: Retailer[];
  chapters: Chapter[];
}

/** What getBook() returns: the catalog title plus its reader data. */
export type BookView = Title & BookReader;

/** An ordered home rail that references series by id. */
export interface HomeSection {
  id: string;
  title: string;
  seriesIds: string[];
  kicker?: string;
  subhead?: { line1: string; em: string };
}

/** A header/footer navigation entry: a label + a route key. */
export type NavItem = [route: string, label: string];
