import React from 'react';
import { useRS, I } from './components.jsx';
import { RS_DATA, RS_BY_TYPE, RS_GET } from './data.js';
import { FhRow, Kicker, ArrowBtn, SideArrow, FIG, pick, BLURB, RowChevron } from './home3.jsx';
/* global React, useRS, I, RS_DATA, RS_BY_TYPE, RS_GET, FhRow, Kicker, ArrowBtn, SideArrow, FIG, pick, BLURB */
/* ReelSaga — category landing page (Realistic / Animated / Books), per Figma node 109-2813 */
const { useState: cS, useEffect: cE, useRef: cR } = React;

const CAT_META = {
  realistic: { label: 'Realistic', hero: ['Classroom Queen: ', 'Mafia Bloodline'] },
  animated: { label: 'Animated', hero: ['Blade of the ', 'Fallen Lord'] },
  books: { label: 'Books', hero: ['Two Alpha Kings, ', 'One Virgin Mate'] }
};

/* ---------- Category hero: single skewed poster, rotating ---------- */
function CatHero({ type, featured }) {
  const { toast } = useRS();
  const [i, setI] = cS(0);
  const tmr = cR(0);
  const slides = featured.length ? featured : [RS_DATA.titles[0]];
  cE(() => {clearTimeout(tmr.current);tmr.current = setTimeout(() => setI((v) => (v + 1) % slides.length), 6500);return () => clearTimeout(tmr.current);}, [i, slides.length]);
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
        <div className="cap-play" style={{ padding: "0px 0px 24px" }}><span className="trailer-btn" style={{ textAlign: "center", margin: "0px", fontSize: "25px", fontWeight: "600" }}><I.trailerPlay s={26} />Trailer</span></div>
      </div>
      {!bare && <div className="cap-title">{t.title}</div>}
      {!bare && <div className="cap-genre">{(t.genres || []).slice(0, 2).join(' | ')}</div>}
    </div>);

}
function CapRow({ items }) {
  const track = cR(null);
  const [scrolled, setScrolled] = cS(false);
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

/* ---------- Generic feature banner ---------- */
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

/* ======================= CATALOG PAGE ======================= */
function Spotlight({ items }) {
  const { openSeries } = useRS();
  const [center, setCenter] = cS(Math.min(2, items.length - 1));
  const move = (d) => setCenter((c) => Math.max(0, Math.min(items.length - 1, c + d)));
  return (
    <div className="spot-rel">
      <div className="spot-glow" />
      <button className="fh-rowarrow prev" onClick={() => move(-1)} aria-label="Previous"><RowChevron dir="prev" /></button>
      <div className="spot-stage">
        {items.map((t, k) => {
          const dist = k - center;
          if (Math.abs(dist) > 2) return null;
          const cls = dist === 0 ? 'feat' : Math.abs(dist) === 1 ? 'mid' : 'peek';
          const img = t.image || t.titleArt;
          return (
            <div key={t.id + '-' + k} className={`spot-card ${cls}`} onClick={() => {dist === 0 ? openSeries(t.id) : setCenter(k);}}>
              {img ? <img src={img} alt={t.title} /> : <div className="spot-art" style={{ background: `linear-gradient(160deg,${t.tint || '#1b2950'},#0a1228)` }} />}
              {!img && <div className="spot-name">{t.title}</div>}
            </div>);

        })}
      </div>
      <button className="fh-rowarrow next" onClick={() => move(1)} aria-label="Next"><RowChevron dir="next" /></button>
    </div>);

}

function RankRow({ items }) {
  const track = cR(null);
  const [scrolled, setScrolled] = cS(false);
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

function BooksPage({ pool }) {
  const { toast } = useRS();
  const heroF = pick(['classroom-queen', 'cursed-rival', 'two-alpha-kings']);
  const spot = pick(['phantoms-kiss', 'cursed-rival', 'suburban-strangler', 'two-alpha-kings', 'bound-roses']);
  const cards = pick(['two-alpha-kings', 'billionaire-alphas', 'silver-fox', 'cursed-rival', 'bride-dies-twice', 'classroom-queen', 'phantoms-kiss', 'bound-roses']);
  const ranked = pick(['cursed-rival', 'bride-dies-twice', 'silver-fox', 'billionaire-alphas', 'two-alpha-kings']);
  return (
    <div className="page fh cat-page">
      <CatHero type="books" featured={heroF.length ? heroF : pool.slice(0, 3)} />

      <section className="fh-sec"><div className="fhw">
        <div className="fh-sep" />
        <Spotlight items={spot} />
        <div className="fh-sep" style={{ marginTop: 40 }} />
      </div></section>

      <section className="fh-sec"><div className="fhw">
        <Kicker word="New Releases" sep={false} compact />
        <CapRow items={cards} />
        <div className="fh-sep" style={{ marginTop: 34 }} />
      </div></section>

      <section className="fh-sec"><div className="fhw">
        <Kicker word="Trending" sep={false} compact />
        <RankRow items={ranked} />
        <div className="fh-sep" style={{ marginTop: 34 }} />
      </div></section>

      <section className="fh-sec" style={{ paddingBottom: 30 }}><div className="fhw">
        <Kicker word="Neka kategorija" sep={false} compact />
        <CapRow items={[...cards].reverse()} />
      </div></section>

      <footer className="fh-foot"><div className="fhw fh-foot-in">
        <span className="fcopy">2026 Reel saga</span>
        <div className="flinks">
          <a onClick={() => toast('Privacy Policy')}>Privacy Policy</a>
          <a onClick={() => toast('Terms')}>Terms</a>
        </div>
      </div></footer>
    </div>);

}

function Catalog({ type }) {
  const { go, toast } = useRS();
  cE(() => {window.scrollTo(0, 0);}, [type]);
  const all = RS_BY_TYPE(type);
  const pool = all.length >= 6 ? all : RS_DATA.titles;
  const meta = CAT_META[type] || CAT_META.realistic;
  if (type === 'books') return <BooksPage pool={pool} />;

  // exact curation for the Realistic page (matches Figma 109-2813)
  const REAL = {
    hero: pick(['classroom-queen', 'two-alpha-kings', 'bride-dies-twice']),
    trending: pick(['bride-dies-twice', 'two-alpha-kings', 'classroom-queen', 'billionaire-alphas', 'cursed-rival', 'silver-fox', 'eyes-of-storm', 'suburban-strangler'])
  };
  const isReal = type === 'realistic';

  const featuredAuto = pool.filter((t) => t.hot || t.rank).slice(0, 3);
  const featured = isReal ? REAL.hero : featuredAuto.length ? featuredAuto : pool.slice(0, 3);
  const trending = isReal ? REAL.trending :
  [...pool].filter((t) => t.rank || t.hot).concat(pool).filter((v, i, a) => a.indexOf(v) === i).slice(0, 8);
  const fresh = pool.filter((t) => t.new).concat(pool).filter((v, i, a) => a.indexOf(v) === i).slice(0, 8);
  const rec = [...pool].reverse().slice(0, 8);
  const guilty = pool.filter((t) => t.genres.some((g) => ['Steamy', 'Romance', 'Billionaire', 'Billionaires'].includes(g))).concat(pool).filter((v, i, a) => a.indexOf(v) === i).slice(0, 8);

  const stack = (ids) => pick(ids).map((t) => t.image || t.titleArt).filter(Boolean);

  return (
    <div className="page fh cat-page">
      <CatHero type={type} featured={featured.length ? featured : pool.slice(0, 3)} />
      <section className="fh-sec"><div className="fhw">
        <div className="fh-sep" />
        <Kicker word="Trending" sep={false} compact />
        <div className="trending-glow"><FhRow items={trending} /></div>
        <div className="fh-sep" style={{ marginTop: 34 }} />
      </div></section>

      <section className="fh-sec"><div className="fhw">
        <Kicker word="New Releases" sep={false} compact />
        <CapRow items={fresh} />
        <div className="fh-sep" style={{ marginTop: 34 }} />
      </div></section>

      <section className="fh-sec"><div className="fhw">
        <Kicker word="Recommended" sep={false} compact />
        <CapRow items={rec} />
        <CatFeature id="bound-roses" cover={FIG + 'mustwatch-cover.png'} logo={FIG + 'mustwatch-logo.png'} title="How I Became the Alpha Queen" />
        <div className="fh-sep" style={{ marginTop: 40 }} />
      </div></section>

      <section className="fh-sec"><div className="fhw">
        <Kicker word="Guilty Pleasure" sep={false} compact />
        <CapRow items={guilty} />
        <div className="fh-sep" style={{ marginTop: 34 }} />
      </div></section>

      <section className="fh-sec" style={{ paddingBottom: 30 }}><div className="fhw">
        <div className="topg-grid">
          <TopGenre go={go} route="realistic" title="Top Romance" accent="rgba(120,60,180,.5)"
            bg="linear-gradient(180deg, #1B163F 0%, #121A33 100%)"
            blurb="The slow-burns, the fake-dating, the one-bed tropes you keep coming back for."
            covers={stack(['bride-dies-twice', 'two-alpha-kings'])} />
          <TopGenre go={go} route="realistic" title="Top Drama" accent="rgba(56,86,170,.5)"
            bg="linear-gradient(180deg, #111C3A 0%, #121A33 100%)"
            blurb="Family secrets, courtroom reckonings and the lies that finally catch up."
            covers={stack(['two-alpha-kings', 'billionaire-alphas'])} />
          <TopGenre go={go} route="animated" title="Top Supernatural" accent="rgba(170,120,50,.5)"
            bg="linear-gradient(180deg, #2B2418 0%, #131A33 100%)"
            blurb="Fated mates, cursed bloodlines and the monsters who fall in love."
            covers={stack(['billionaire-alphas', 'classroom-queen'])} />
        </div>
      </div></section>

      <footer className="fh-foot"><div className="fhw fh-foot-in">
        <span className="fcopy">2026 Reel saga</span>
        <div className="flinks">
          <a onClick={() => toast('Privacy Policy')}>Privacy Policy</a>
          <a onClick={() => toast('Terms')}>Terms</a>
        </div>
      </div></footer>
    </div>);

}

export { Catalog };