#!/usr/bin/env python3
"""
ReelSaga sitemap generator.

Reads data/catalog.json (the single source of truth) and writes a sitemap index
+ child sitemaps into reelsaga-website/public/ — which Vite serves at the web root,
so the index resolves at https://reel-saga.com/sitemap.xml and children at
https://reel-saga.com/sitemap-*.xml.

Run:  python3 scripts/seo/generate_sitemap.py

Maintenance:
  * Add / curate titles by editing data/catalog.json (slug, title, format flags,
    themes). That file is the single source of truth — there are no inline lists.
  * Flip audio output with the CONFIG toggles below.
  * Do NOT hand-edit the generated XML; this script is its source of truth.
"""

import json
from datetime import date
from pathlib import Path
from collections import defaultdict

# -----------------------------------------------------------------------------
# PATHS  (resolved relative to this file, so the script runs from any cwd)
# -----------------------------------------------------------------------------
REPO_ROOT = Path(__file__).resolve().parents[2]          # scripts/seo/ -> repo root
CATALOG   = REPO_ROOT / "data" / "catalog.json"          # input: single source of truth
OUT_DIR   = REPO_ROOT / "reelsaga-website" / "public"    # output: Vite serves this at "/"

# -----------------------------------------------------------------------------
# CONFIG
# -----------------------------------------------------------------------------
DOMAIN = "https://reel-saga.com"
LASTMOD = date.today().isoformat()   # placeholder; feed real per-page dates when tracked

# Audio toggles — emission policy layered on each title's format flags.
INCLUDE_AUDIOBOOKS   = True    # emit /books/<slug>/listen/ for every book (minus NO_AUDIOBOOK)
INCLUDE_SERIES_AUDIO = False   # emit /series/.../<slug>/listen/ (audio-drama) for series
NO_AUDIOBOOK = set()           # per-slug exclusions, e.g. {"double-booked", "the-marriage-pact"}

MIN_TITLES_PER_THEME_PAGE = 4  # only emit a theme collection page with >= this many titles

# Recommendation theme -> URL stem. The per-title theme TAGS live in catalog.json;
# this just maps a theme key to the slug stem used for its collection pages.
THEME_STEMS = {
    "werewolf":     "werewolf-shifter-romance",
    "mafia":        "mafia-mob-romance",
    "billionaire":  "billionaire-ceo-romance",
    "forbidden":    "forbidden-romance",
    "thriller":     "dark-mystery-thriller",
    "supernatural": "vampire-demon-supernatural",
    "secretbaby":   "secret-baby-pregnancy",
    "secondchance": "second-chance-divorce",
}

# Curated "...like flagship" funnel pages (anchored on multi-format flagships).
LIKE_PAGES = [
    "dark-mystery-shows-like-the-suburban-strangler",
    "dark-mystery-books-like-the-suburban-strangler",
    "dark-anime-like-the-suburban-strangler",
    "dark-anime-like-my-one-deadly-night-with-the-demon",
    "vampire-romance-anime-like-my-billionaire-husband-is-a-vampire-king",
    "vampire-romance-books-like-my-billionaire-husband-is-a-vampire-king",
    "royal-romance-shows-like-the-royal-baby-scandal",
    "royal-romance-books-like-the-royal-baby-scandal",
    "mafia-romance-shows-like-classroom-queen-mafia-bloodline",
    "mafia-romance-books-like-classroom-queen-mafia-bloodline",
    "second-chance-dramas-like-the-bride-who-dies-twice",
    "supernatural-romance-books-like-the-phantoms-kiss",
    "medical-thriller-anime-like-the-surgeon-who-stole-my-face",
    "medical-thriller-books-like-the-surgeon-who-stole-my-face",
]

# -----------------------------------------------------------------------------
# LOAD CATALOG
# -----------------------------------------------------------------------------
data = json.loads(CATALOG.read_text(encoding="utf-8"))
titles = sorted(data["titles"], key=lambda r: r["slug"])

# -----------------------------------------------------------------------------
# BUILD URL LIST  (group, loc, changefreq, priority)
# -----------------------------------------------------------------------------
urls = []

def add(group, path, cf, pr):
    loc = f"{DOMAIN}/{path}".rstrip("/") + "/"             # absolute + trailing slash
    loc = loc.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
    urls.append((group, loc, cf, pr))

# --- static / pillar pages ---
add("pages", "",                  "daily",  "1.0")  # home
add("pages", "series",            "daily",  "0.9")
add("pages", "series/realistic",  "weekly", "0.8")
add("pages", "series/anime",      "weekly", "0.8")
add("pages", "books",             "daily",  "0.9")
add("pages", "recommendations",   "weekly", "0.7")
add("pages", "articles",          "daily",  "0.8")
add("pages", "about",             "yearly", "0.3")
add("pages", "privacy",           "yearly", "0.2")
add("pages", "terms",             "yearly", "0.2")

# --- per-title series + book pages ---
for rec in titles:
    s = rec["slug"]
    if rec.get("has_realistic"):
        add("series", f"series/realistic/{s}",          "weekly", "0.8")
        add("series", f"series/realistic/{s}/watch",    "weekly", "0.7")
        add("series", f"series/realistic/{s}/reviews",  "weekly", "0.5")
        if INCLUDE_SERIES_AUDIO:
            add("series", f"series/realistic/{s}/listen", "weekly", "0.6")
    if rec.get("has_anime"):
        add("series", f"series/anime/{s}",          "weekly", "0.8")
        add("series", f"series/anime/{s}/watch",    "weekly", "0.7")
        add("series", f"series/anime/{s}/reviews",  "weekly", "0.5")
        if INCLUDE_SERIES_AUDIO:
            add("series", f"series/anime/{s}/listen", "weekly", "0.6")
    if rec.get("has_book"):
        add("books", f"books/{s}",          "weekly", "0.8")
        add("books", f"books/{s}/read",     "weekly", "0.7")
        add("books", f"books/{s}/reviews",  "weekly", "0.5")
        if INCLUDE_AUDIOBOOKS and s not in NO_AUDIOBOOK:
            add("books", f"books/{s}/listen", "weekly", "0.6")

# --- recommendation: evergreen theme collections (per medium, if enough titles) ---
MEDIA = [("has_book", "books"), ("has_realistic", "dramas"), ("has_anime", "anime")]

theme_counts = {}
for tkey, stem in THEME_STEMS.items():
    for flag, suffix in MEDIA:
        members = [r for r in titles if tkey in r.get("themes", []) and r.get(flag)]
        theme_counts[(tkey, suffix)] = len(members)
        if len(members) >= MIN_TITLES_PER_THEME_PAGE:
            add("recommendations", f"recommendations/{stem}-{suffix}", "weekly", "0.6")

# --- recommendation: curated "...like flagship" funnel pages ---
for slug in LIKE_PAGES:
    add("recommendations", f"recommendations/{slug}", "weekly", "0.6")

# -----------------------------------------------------------------------------
# WRITE FILES
# -----------------------------------------------------------------------------
OUT_DIR.mkdir(parents=True, exist_ok=True)
groups = defaultdict(list)
for g, loc, cf, pr in urls:
    groups[g].append((loc, cf, pr))

def write_urlset(name, items):
    body = ['<?xml version="1.0" encoding="UTF-8"?>',
            '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
    for loc, cf, pr in items:
        body.append("  <url>")
        body.append(f"    <loc>{loc}</loc>")
        body.append(f"    <lastmod>{LASTMOD}</lastmod>")
        body.append(f"    <changefreq>{cf}</changefreq>")
        body.append(f"    <priority>{pr}</priority>")
        body.append("  </url>")
    body.append("</urlset>")
    (OUT_DIR / name).write_text("\n".join(body) + "\n", encoding="utf-8")

child_files = []
for g in ["pages", "series", "books", "recommendations"]:
    fname = f"sitemap-{g}.xml"
    write_urlset(fname, groups[g])
    child_files.append(fname)
# articles child is intentionally empty-but-present; append blog URLs as you publish
write_urlset("sitemap-articles.xml", groups.get("articles", []))
child_files.append("sitemap-articles.xml")

# sitemap index
idx = ['<?xml version="1.0" encoding="UTF-8"?>',
       '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
for f in child_files:
    idx.append("  <sitemap>")
    idx.append(f"    <loc>{DOMAIN}/{f}</loc>")
    idx.append(f"    <lastmod>{LASTMOD}</lastmod>")
    idx.append("  </sitemap>")
idx.append("</sitemapindex>")
(OUT_DIR / "sitemap.xml").write_text("\n".join(idx) + "\n", encoding="utf-8")

# -----------------------------------------------------------------------------
# REPORT
# -----------------------------------------------------------------------------
multi = [r for r in titles if sum([r.get("has_book", False), r.get("has_realistic", False), r.get("has_anime", False)]) > 1]
print(f"Source catalog:    {CATALOG.relative_to(REPO_ROOT)}  ({len(titles)} unique IPs)")
print(f"  books:           {sum(r.get('has_book', False) for r in titles)}")
print(f"  realistic:       {sum(r.get('has_realistic', False) for r in titles)}")
print(f"  anime:           {sum(r.get('has_anime', False) for r in titles)}")
print(f"Multi-format IPs:  {len(multi)}  -> {', '.join(sorted(r['slug'] for r in multi))}")
print(f"TOTAL URLs:        {len(urls)}")
for g in ["pages", "series", "books", "recommendations", "articles"]:
    print(f"  {g:16} {len(groups.get(g, []))}")
print("\nTheme-page eligibility (>= %d titles emits a page):" % MIN_TITLES_PER_THEME_PAGE)
for (tkey, suffix), n in sorted(theme_counts.items()):
    mark = "OK " if n >= MIN_TITLES_PER_THEME_PAGE else "-- "
    print(f"  {mark}{tkey:13}/{suffix:6} {n}")
print(f"\nWrote -> {OUT_DIR.relative_to(REPO_ROOT)}/  (sitemap.xml + {len(child_files)} child sitemaps)")
