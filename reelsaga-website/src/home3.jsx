import React from 'react';
import { useRS, PageFooter } from './components.jsx';
import { RS_GET } from './data.js';
import { HOME, BLURB, FIG } from './content.js';
import { CardTrailer, useTrailerActive } from './trailer.jsx';
/* ReelSaga — Home page. All copy + curation comes from content.js (HOME);
   this file is just presentation. */
const { useState, useEffect, useRef } = React;

/* Resolve a list of show ids (from content.js) to full title objects. */
const pick = (ids) => ids.map(RS_GET).filter(Boolean);

/* Faded poster-collage backdrop (hero + closing). Falls back if the art is missing. */
function Collage({ src }) {
  return (
    <div className="fh-collage">
      <img
        className="collage-img"
        src={src || FIG + 'collage-bg.png'}
        alt=""
        onError={(e) => { if (e.currentTarget.src.indexOf('collage-bg.png') < 0) e.currentTarget.src = FIG + 'collage-bg.png'; }}
      />
    </div>
  );
}

/* Hero prev/next arrows (PNG). */
const SideArrow = ({ dir }) => (
  <img className="side-arrow-img" src={dir === 'prev' ? FIG + 'arrow-left.png' : FIG + 'arrow-right.png'} alt="" width="61" height="61" />
);

/* The curved "download / watch" arrow used inside yellow CTA buttons. */
const ArrowBtn = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="19" viewBox="0 0 23 20" fill="none" style={{ flex: 'none' }}>
    <path d="M17.2569 14.1873L21.8618 9.7684L12.6519 0.930664V5.95413H10.2332C5.1166 5.95413 0.930298 10.1404 0.930298 15.257V18.327C0.930298 18.6061 1.20938 18.8851 1.48847 18.8851H1.5815C1.76756 18.8851 1.95362 18.6991 2.04664 18.513C2.2327 15.8152 4.46539 13.7686 7.16323 13.7686H12.6519V18.6061L14.9544 16.3967" stroke="currentColor" strokeWidth="1.86058" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ======================= HERO ======================= */
function Hero() {
  const { go, toast } = useRS();
  const slides = HOME.heroSlides;
  const [index, setIndex] = useState(0);
  const timer = useRef(0);

  useEffect(() => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setIndex((v) => (v + 1) % slides.length), 6500);
    return () => clearTimeout(timer.current);
  }, [index, slides.length]);

  const move = (delta) => setIndex((v) => (v + delta + slides.length) % slides.length);
  const slide = slides[index];

  return (
    <section className="fh-hero">
      <Collage src={HOME.heroCollage} />
      <div className="fhw">
        <div className="fh-hero-grid">
          <button className="fh-side prev" onClick={() => move(-1)} aria-label="Previous"><SideArrow dir="prev" /></button>
          <div className="fh-hcopy">
            <div className="fh-hslide" key={index}>
              <h1 className="fh-h1">{slide.head[0]}<em>{slide.head[1]}</em>{slide.head[2]}</h1>
              <p className="fh-hsub">{BLURB}</p>
            </div>
            <div className="fh-hbtns">
              <button className="fh-btn fh-btn--yellow" onClick={() => toast('Heading to the App Store…')}>Download the app <ArrowBtn /></button>
              <button className="fh-btn fh-btn--ghost" onClick={() => go(slide.browse[1])}>{slide.browse[0]}</button>
            </div>
            <div className="fh-dots">
              {slides.map((_, k) => <button key={k} className={k === index ? 'on' : ''} onClick={() => setIndex(k)} aria-label={`Slide ${k + 1}`} />)}
            </div>
          </div>
          <div className="fh-fan swap" key={'fan' + index}>
            <div className="fan-glow" />
            {slide.fan.map((cover, k) => <div key={k} className="pslice" style={{ animationDelay: `${k * 0.16}s` }}><img src={cover} alt="" /></div>)}
          </div>
          <button className="fh-side next" onClick={() => move(1)} aria-label="Next"><SideArrow dir="next" /></button>
        </div>
      </div>
    </section>
  );
}

/* ======================= POSTER CARD + ROW ======================= */
function FhCard({ t, mw, rank }) {
  const { openSeries } = useRS();
  const cardRef = useRef(null);
  const trailerActive = useTrailerActive(cardRef, !!t.video);
  return (
    <div ref={cardRef} className={`fh-card ${mw ? 'mw' : ''}`} onClick={() => openSeries(t.id)} role="button" tabIndex={0}>
      {t.image
        ? <img className="cv" src={t.image} alt={t.title} loading="lazy" />
        : <div className="cv" style={{ background: `radial-gradient(130% 80% at 70% 8%, ${t.glow || '#3a4a7a'}aa, ${t.glow || '#3a4a7a'}11 46%, transparent 66%), linear-gradient(160deg, ${t.tint || '#1b2950'}, #0a1228 92%)` }} />}
      {t.video && <CardTrailer video={t.video} active={trailerActive} />}
      <div className="cfade" />
      {rank && <div className="crank">{rank}</div>}
      <div className="cplay">
        {t.type === 'books'
          ? <span className="cap-read">Read</span>
          : <img className="trailer-btn" src="/assets/fig/trailer-btn.svg" alt="Trailer" />}
      </div>
      {t.titleArt ? <img className="clogo" src={t.titleArt} alt={t.title} /> : <div className="ctitle">{t.title}</div>}
    </div>
  );
}

/* Circular carousel arrow (Figma icon_close_light): 51.93px ring + chevron. */
const RowChevron = ({ dir }) => (
  <svg viewBox="0 0 82 82" width="82" height="82" fill="none" style={dir === 'prev' ? { transform: 'scaleX(-1)' } : undefined}>
    <circle className="ra-circle" cx="41" cy="41" r="25.965" stroke="currentColor" strokeWidth="3.075" />
    <path d="M36.2161 55.3464L49.8828 41.6797L36.2161 28.013" stroke="currentColor" strokeWidth="3.075" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function FhRow({ items, mw }) {
  const track = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const onScroll = () => { const el = track.current; if (el) setScrolled(el.scrollLeft > 12); };
  const scroll = (delta) => { const el = track.current; if (el) el.scrollBy({ left: delta * el.clientWidth * 0.8, behavior: 'smooth' }); };
  return (
    <div className={`fh-row ${scrolled ? 'scrolled' : ''}`}>
      <div className="fh-track" ref={track} onScroll={onScroll}>
        {items.map((t, k) => <FhCard key={t.id + '-' + k} t={t} mw={mw} />)}
      </div>
      <div className="fh-rowfade" />
      <button className="fh-rowarrow prev" onClick={() => scroll(-1)} aria-label="Previous"><RowChevron dir="prev" /></button>
      <button className="fh-rowarrow next" onClick={() => scroll(1)} aria-label="Next"><RowChevron dir="next" /></button>
    </div>
  );
}

/* ======================= SECTION HEADING ======================= */
/* `title` is an optional { line1, em } object (the split sub-headline). */
function Kicker({ word, title, sep = true, seeAll }) {
  const { go } = useRS();
  return (
    <>
      {sep && <div className="fh-sep" />}
      <div className="fh-kicker-row">
        <div className="fh-kicker" style={{ fontSize: '28px' }}>{word}</div>
        {seeAll && (
          <button className="fh-seeall" onClick={() => go(seeAll)}>
            See all
            <svg viewBox="0 0 82 82" width="20" height="20" fill="none"><path d="M36.2161 55.3464L49.8828 41.6797L36.2161 28.013" stroke="currentColor" strokeWidth="4.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
        )}
      </div>
      {title && (
        <div className="fh-subhead">
          <h3>{title.line1}<br /><em>{title.em}</em></h3>
          <p>{BLURB}</p>
        </div>
      )}
    </>
  );
}

/* ======================= FEATURE BANNER ======================= */
function Feature() {
  const { openSeries } = useRS();
  const f = HOME.feature;
  const show = RS_GET(f.id);
  return (
    <div className="fh-feature">
      <div className="ff-cover">
        <img className="bg" src={f.cover} alt="" />
        <img className="logo" src={f.logo} alt={f.title} />
      </div>
      <div className="ff-body">
        <h3>{f.title}</h3>
        <span className="ff-complete">{f.badge}</span>
        <p>{show ? show.synopsis : ''}</p>
        <button className="fh-btn fh-btn--yellow" onClick={() => openSeries(f.id)}>Watch now <ArrowBtn /></button>
      </div>
    </div>
  );
}

/* ======================= REVIEWS ======================= */
function Reviews() {
  return (
    <div className="fh-reviews">
      {HOME.reviews.map((r, i) => (
        <div className="fh-review" key={i}>
          <div className="rstars">★★★★★</div>
          <p>{r.text}</p>
          <div className="who">
            <div className="av" style={{ background: r.c, color: r.cf }}>{r.av}</div>
            <div><div className="wn">{r.name}</div><div className="wm">{r.src}</div></div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ======================= HOME PAGE ======================= */
function Home() {
  const { toast } = useRS();
  const { sections, closing } = HOME;
  const originals = pick(HOME.originals);
  const mustWatch = pick(HOME.mustWatch);
  return (
    <div className="page fh">
      <Hero />

      <section className="fh-sec"><div className="fhw">
        <Kicker word={sections.originals.kicker} seeAll={sections.originals.seeAll} title={sections.originals.title} />
        <FhRow items={originals} />
        <Feature />
      </div></section>

      <section className="fh-sec"><div className="fhw">
        <Kicker word={sections.mustWatch.kicker} seeAll={sections.mustWatch.seeAll} title={sections.mustWatch.title} />
        <FhRow items={mustWatch} mw />
      </div></section>

      <section className="fh-sec" style={{ paddingBottom: 20 }}><div className="fhw">
        <Kicker word={sections.reviews.kicker} title={sections.reviews.title} />
        <Reviews />
      </div></section>

      <section className="fh-closing">
        <Collage />
        <div className="fh-closing-inner fhw">
          <h2>{closing.title.pre}<em>{closing.title.em}</em>{closing.title.post}</h2>
          <p>{closing.text}</p>
          <div className="fh-hbtns">
            <button className="fh-btn fh-btn--yellow" onClick={() => toast('Heading to the App Store…')}>Download the app <ArrowBtn /></button>
          </div>
        </div>
      </section>

      <PageFooter />
    </div>
  );
}

/* FIG + BLURB are re-exported so other pages can share the same constants. */
export { Home, FhRow, FhCard, Kicker, Feature, ArrowBtn, SideArrow, RowChevron, pick, Reviews, FIG, BLURB };
