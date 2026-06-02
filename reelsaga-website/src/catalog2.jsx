import React from 'react';
import { useRS, RSCtx, PageFooter } from './components.jsx';
import { RS_DATA, RS_BY_TYPE, RS_GET } from './data.js';
import { FhRow, Kicker, ArrowBtn, SideArrow, pick, BLURB, RowChevron } from './home3.jsx';
import { CATEGORIES, BOOKS } from './content.js';
/* ReelSaga — category landing pages (Realistic / Animated / Books).
   All copy + which shows appear where comes from content.js (CATEGORIES, BOOKS);
   this file only lays them out. */
const { useState, useEffect, useRef } = React;

/* Resolve a list of show ids to the cover images stacked inside a "top genre" card. */
const stack = (ids) => pick(ids).map((t) => t.image || t.titleArt).filter(Boolean);

/* ---------- Category hero: single skewed poster, rotating ---------- */
function CatHero({ type, featured }) {
  const { toast } = useRS();
  const [i, setI] = useState(0);
  const timer = useRef(0);
  const slides = featured.length ? featured : [RS_DATA.titles[0]];
  useEffect(() => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setI((v) => (v + 1) % slides.length), 6500);
    return () => clearTimeout(timer.current);
  }, [i, slides.length]);
  const move = (d) => setI((v) => (v + d + slides.length) % slides.length);
  const t = slides[i];
  const img = t.image || t.titleArt;
  const syn = t.synopsis || t.tagline || BLURB;
  return (
    <section className="cat-hero">
      <div className="fhw">
        <div className="cat-hero-grid">
          <button className="fh-side prev" onClick={() => move(-1)} aria-label="Previous"><SideArrow dir="prev" /></button>
          <div className="cat-hcopy" key={i}>
            <h1 className="fh-h1">{t.title}</h1>
            <p className="cat-hsub">{syn}</p>
            <div className="fh-hbtns">
              <button className="fh-btn fh-btn--yellow" onClick={() => toast('Heading to the App Store…')}>Download the app <ArrowBtn /></button>
              <button className="fh-btn fh-btn--ghost" onClick={() => toast(type === 'books' ? `Opening ${t.title}` : `Playing the ${t.title} trailer`)}>{type === 'books' ? 'Start Reading' : 'Watch Trailer'}</button>
            </div>
            <div className="fh-dots">{slides.map((_, k) => <button key={k} className={k === i ? 'on' : ''} onClick={() => setI(k)} aria-label={`Slide ${k + 1}`} />)}</div>
          </div>
          <div className="cat-hero-poster swap" key={'p' + i}>
            <div className="chp-glow" />
            <div className="pslice">{img ? <img src={img} alt={t.title} /> : <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(160deg,${t.tint || '#1b2950'},#0a1228)` }} />}</div>
          </div>
          <button className="fh-side next" onClick={() => move(1)} aria-label="Next"><SideArrow dir="next" /></button>
        </div>
      </div>
    </section>);

}

/* ---------- Caption card (poster + title + genre below) ---------- */
function CapCard({ t, bare }) {
  const { openSeries } = useRS();
  const img = t.image || t.titleArt;
  return (
    <div className="cap-card" onClick={() => openSeries(t.id)} role="button" tabIndex={0}>
      <div className="cap-cover">
        {img ? <img src={img} alt={t.title} /> : <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(160deg,${t.tint || '#1b2950'},#0a1228)` }} />}
        <div className="cap-play" style={{ padding: "0px 0px 24px" }}>{t.type === 'books' ? <span className="cap-read">Read</span> : <img className="trailer-btn" src="/assets/fig/trailer-btn.svg" alt="Trailer" />}</div>
      </div>
      {!bare && <div className="cap-title">{t.title}</div>}
      {!bare && <div className="cap-genre">{(t.genres || []).slice(0, 2).join(' | ')}</div>}
    </div>);

}

/* Horizontal carousel of caption cards. */
function CapRow({ items }) {
  const track = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const onScroll = () => {const el = track.current;if (el) setScrolled(el.scrollLeft > 12);};
  const scroll = (d) => {const el = track.current;if (el) el.scrollBy({ left: d * el.clientWidth * 0.8, behavior: 'smooth' });};
  return (
    <div className={`fh-row ${scrolled ? 'scrolled' : ''}`}>
      <div className="fh-track cap-track" ref={track} onScroll={onScroll}>
        {items.map((t, k) => <CapCard key={t.id + '-' + k} t={t} />)}
      </div>
      <div className="fh-rowfade" />
      <button className="fh-rowarrow prev" onClick={() => scroll(-1)} aria-label="Previous"><RowChevron dir="prev" /></button>
      <button className="fh-rowarrow next" onClick={() => scroll(1)} aria-label="Next"><RowChevron dir="next" /></button>
    </div>);

}

/* ---------- Generic feature banner (image on the right) ---------- */
function CatFeature({ id, cover, logo, title, badge }) {
  const { openSeries } = useRS();
  const t = RS_GET(id);
  return (
    <div className="fh-feature fh-feature--rev">
      <div className="ff-body">
        <h3>{title}</h3>
        <span className="ff-complete">{badge || 'Complete'}</span>
        <p>{t ? t.synopsis || t.tagline : ''}</p>
        <button className="fh-btn fh-btn--yellow" onClick={() => openSeries(id)}>Watch now <ArrowBtn /></button>
      </div>
      <div className="ff-cover ff-cover--right">
        <img className="bg" src={cover} alt="" />
        {logo && <img className="logo" src={logo} alt={title} />}
      </div>
    </div>);

}

/* ---------- Top-genre cards ---------- */
function TopGenre({ title, blurb, covers, accent, bg, go, route }) {
  return (
    <div className="topg-card" onClick={() => go(route)} role="button" tabIndex={0} style={{ '--acc': accent, background: bg }}>
      <div className="topg-glow" />
      <div className="topg-stack">
        {covers.map((c, i) => <img key={i} src={c} alt="" className={`tgi tgi-${i}`} />)}
      </div>
      <div className="topg-body">
        <h4>{title}</h4>
        <p>{blurb}</p>
      </div>
      <button className="topg-more">Browse more
        <svg className="tgm-arrow" width="26" height="12" viewBox="0 0 26 12" fill="none"><path d="M1 6H24M24 6L19 1.5M24 6L19 10.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </button>
    </div>);

}

/* ---------- Ranked carousel (numbered) used on the Books page ---------- */
function RankRow({ items }) {
  const track = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const onScroll = () => {const el = track.current;if (el) setScrolled(el.scrollLeft > 12);};
  const scroll = (d) => {const el = track.current;if (el) el.scrollBy({ left: d * el.clientWidth * 0.8, behavior: 'smooth' });};
  return (
    <div className={`fh-row ${scrolled ? 'scrolled' : ''}`}>
      <div className="fh-track rank-track" ref={track} onScroll={onScroll}>
        {items.map((t, k) =>
        <div className={`rank-cap ${k === 0 ? 'first' : ''}`} key={t.id + '-' + k}>
            <img className="rank-num" src={`/assets/fig/num-${k + 1}.png`} alt={`${k + 1}`} style={{ width: "117px", height: "152px" }} />
            <CapCard t={t} bare />
          </div>
        )}
      </div>
      <div className="fh-rowfade" />
      <button className="fh-rowarrow prev" onClick={() => scroll(-1)} aria-label="Previous"><RowChevron dir="prev" /></button>
      <button className="fh-rowarrow next" onClick={() => scroll(1)} aria-label="Next"><RowChevron dir="next" /></button>
    </div>);

}

/* ---------- Infinite-scrolling book strip (under the Books hero) ---------- */
function BookMarquee({ items }) {
  const { openSeries } = useRS();
  const row = [...items, ...items]; // duplicated so the loop is seamless
  return (
    <div className="book-marquee">
      <div className="bm-track">
        {row.map((t, k) => {
          const img = t.image || t.titleArt;
          return (
            <div key={t.id + '-' + k} className="bm-card" onClick={() => openSeries(t.id)} role="button" tabIndex={0} aria-hidden={k >= items.length || undefined}>
              {img ? <img src={img} alt={t.title} /> : <div className="bm-art" style={{ background: `linear-gradient(160deg,${t.tint || '#1b2950'},#0a1228)` }} />}
            </div>);
        })}
      </div>
    </div>);
}

/* ======================= BOOKS PAGE ======================= */
function BooksPage({ pool }) {
  const hero = pick(BOOKS.hero);
  const marquee = pick(BOOKS.marquee);
  const newReleases = pick(BOOKS.newReleases);
  const trending = pick(BOOKS.trending);
  const more = pick(BOOKS.more);
  return (
    <div className="page fh cat-page">
      <CatHero type="books" featured={hero.length ? hero : pool.slice(0, 3)} />

      <section className="fh-sec"><div className="fhw">
        <div className="fh-sep" />
        <BookMarquee items={marquee} />
        <div className="fh-sep" style={{ marginTop: 40 }} />
      </div></section>

      <section className="fh-sec"><div className="fhw">
        <Kicker word={BOOKS.sections.newReleases} sep={false} />
        <CapRow items={newReleases} />
        <div className="fh-sep" style={{ marginTop: 34 }} />
      </div></section>

      <section className="fh-sec"><div className="fhw">
        <Kicker word={BOOKS.sections.trending} sep={false} />
        <RankRow items={trending} />
        <div className="fh-sep" style={{ marginTop: 34 }} />
      </div></section>

      <section className="fh-sec" style={{ paddingBottom: 30 }}><div className="fhw">
        <Kicker word={BOOKS.sections.more} sep={false} />
        <CapRow items={more} />
      </div></section>

      <PageFooter />
    </div>);

}

/* ======================= REALISTIC / ANIMATED PAGE ======================= */
function Catalog({ type }) {
  const ctx = useRS();
  const { go } = ctx;
  useEffect(() => {window.scrollTo(0, 0);}, [type]);

  // Animated mirrors the Realistic page's design + curation (same hero, trending and rows).
  const srcType = type === 'animated' ? 'realistic' : type;
  const all = RS_BY_TYPE(srcType);
  const pool = all.length >= 6 ? all : RS_DATA.titles;
  if (type === 'books') return <RSCtx.Provider value={{ ...ctx, openSeries: (id) => ctx.go('book', { id }) }}><BooksPage pool={pool} /></RSCtx.Provider>;

  // Hand-curated Realistic page (matches Figma 109-2813); other types fall back to auto-picks.
  const isReal = srcType === 'realistic';
  const realHero = pick(CATEGORIES.realistic.hero);
  const realTrending = pick(CATEGORIES.realistic.trending);

  const featuredAuto = pool.filter((t) => t.hot || t.rank).slice(0, 3);
  const featured = isReal ? realHero : featuredAuto.length ? featuredAuto : pool.slice(0, 3);
  const trending = isReal ? realTrending :
  [...pool].filter((t) => t.rank || t.hot).concat(pool).filter((v, i, a) => a.indexOf(v) === i).slice(0, 8);
  const fresh = pool.filter((t) => t.new).concat(pool).filter((v, i, a) => a.indexOf(v) === i).slice(0, 8);
  const rec = [...pool].reverse().slice(0, 8);
  const guilty = pool.filter((t) => t.genres.some((g) => ['Steamy', 'Romance', 'Billionaire', 'Billionaires'].includes(g))).concat(pool).filter((v, i, a) => a.indexOf(v) === i).slice(0, 8);

  const { sections, feature, topGenres } = CATEGORIES;

  return (
    <div className="page fh cat-page">
      <CatHero type={type} featured={featured.length ? featured : pool.slice(0, 3)} />
      <section className="fh-sec"><div className="fhw">
        <div className="fh-sep" />
        <Kicker word={sections.trending} sep={false} />
        <div className="trending-glow"><FhRow items={trending} /></div>
        <div className="fh-sep" style={{ marginTop: 34 }} />
      </div></section>

      <section className="fh-sec"><div className="fhw">
        <Kicker word={sections.newReleases} sep={false} />
        <CapRow items={fresh} />
        <div className="fh-sep" style={{ marginTop: 34 }} />
      </div></section>

      <section className="fh-sec"><div className="fhw">
        <Kicker word={sections.recommended} sep={false} />
        <CapRow items={rec} />
        <CatFeature id={feature.id} cover={feature.cover} logo={feature.logo} title={feature.title} />
        <div className="fh-sep" style={{ marginTop: 40 }} />
      </div></section>

      <section className="fh-sec"><div className="fhw">
        <Kicker word={sections.guilty} sep={false} />
        <CapRow items={guilty} />
        <div className="fh-sep" style={{ marginTop: 34 }} />
      </div></section>

      <section className="fh-sec" style={{ paddingBottom: 30 }}><div className="fhw">
        <div className="topg-grid">
          {topGenres.map((g) => (
            <TopGenre key={g.title} go={go} route={g.route} title={g.title} accent={g.accent} bg={g.bg} blurb={g.blurb} covers={stack(g.covers)} />
          ))}
        </div>
      </div></section>

      <PageFooter />
    </div>);

}

export { Catalog };
