/* ============================================================
   ReelSaga — content access seam.

   THE ONLY MODULE COMPONENTS IMPORT FOR DATA. Components never
   touch ../data/* directly; they call these accessors. That keeps
   one place to change if the data source ever moves from local
   files to a CMS (the accessors would become async; nothing else
   changes).
   ============================================================ */

import { series } from '../data/series';
import { home } from '../data/home';
import { categories, booksPage } from '../data/categories';
import { blog } from '../data/blog';
import { bookReaders, DEFAULT_CHAPTERS } from '../data/books';
import { navigation, pageFooter } from '../data/navigation';
import { config } from '../data/config';
import { copy } from '../data/copy';
import type { Series, BookView } from '../types';

const byId = new Map(series.map((s) => [s.id, s]));
const bySlug = new Map(series.map((s) => [s.slug, s]));

/* ---- global config / copy / navigation ---- */
export const getConfig = () => config;
export const getCopy = () => copy;
export const getNavigation = () => navigation;
export const getPageFooter = () => pageFooter;

/* ---- series catalog ---- */
export const getAllSeries = (): Series[] => series;
export const getSeries = (id: string): Series | null => byId.get(id) ?? null;
export const getSeriesBySlug = (slug: string): Series | null => bySlug.get(slug) ?? null;
export const getSeriesByCategory = (category: string): Series[] => series.filter((s) => s.type === category);
/** Resolve a list of ids to titles, dropping any id that doesn't exist. */
export const getSeriesByIds = (ids: string[]): Series[] =>
  ids.map((id) => byId.get(id)).filter((s): s is Series => Boolean(s));

/* ---- home page ---- */
export const getHome = () => home;

/* ---- category pages ---- */
export const getCategories = () => categories;
export const getBooksPage = () => booksPage;

/* ---- books ---- */
export const getAllBooks = (): Series[] => series.filter((s) => s.type === 'books');
/** A book = its catalog title merged with reader data (chapters + retailers). */
export const getBook = (id: string): BookView | null => {
  const base = byId.get(id);
  if (!base) return null;
  const reader = bookReaders[id] ?? {};
  return {
    ...base,
    chapters: reader.chapters ?? DEFAULT_CHAPTERS,
    retailers: reader.retailers ?? [],
  };
};

/* ---- blog ---- */
export const getBlog = () => blog;
