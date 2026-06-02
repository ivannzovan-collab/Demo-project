import React from 'react';
import { useRS, I } from './components.jsx';
import { RS_GET } from './data.js';
import { CardTrailer, useTrailerActive } from './trailer.jsx';
/* global React, useRS, I, useReveal, RS_DATA, RS_GET */
/* ReelSaga — Home rebuilt 1:1 from the mounted Figma "Web" file. Loaded last → wins. */
const { useState: fS, useEffect: fE, useRef: fR } = React;

const FIG = '/assets/fig/';
const BLURB = 'ReelSaga is the home of serialized vertical fiction. New chapters drop daily — crime, romance, sci-fi, slow-burn. Watch one, or fall into all twelve.';
const pick = (ids) => ids.map(RS_GET).filter(Boolean);
const COLLAGE = [FIG + 'cover-f.png', FIG + 'cover-d.png', FIG + 'cover-e.png', FIG + 'mustwatch-cover.png', FIG + 'cover-b.png', FIG + 'originals-strip.jpg', '/assets/images/poster-live-1.png', '/assets/images/poster-live-3.png'];

function Collage() {
  return <div className="fh-collage"><img className="collage-img" src={FIG + 'collage-bg.png'} alt="" /></div>;
}

/* Figma hero side arrows (PNG) */
const SideArrow = ({ dir }) =>
<img className="side-arrow-img" src={dir === 'prev' ? '/assets/fig/arrow-left.png' : '/assets/fig/arrow-right.png'} alt="" width="61" height="61" />;

const ArrowBtn = () =>
<svg xmlns="http://www.w3.org/2000/svg" width="22" height="19" viewBox="0 0 23 20" fill="none" style={{ flex: 'none' }}>
    <path d="M17.2569 14.1873L21.8618 9.7684L12.6519 0.930664V5.95413H10.2332C5.1166 5.95413 0.930298 10.1404 0.930298 15.257V18.327C0.930298 18.6061 1.20938 18.8851 1.48847 18.8851H1.5815C1.76756 18.8851 1.95362 18.6991 2.04664 18.513C2.2327 15.8152 4.46539 13.7686 7.16323 13.7686H12.6519V18.6061L14.9544 16.3967" stroke="currentColor" strokeWidth="1.86058" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
  </svg>;


/* ======================= HERO ======================= */
const SLIDES = [
{ head: ['Epic stories about ', 'animated', ' legends.'], browse: ['Browse Animated', 'animated'],
  fan: [FIG + 'cover-e.png', FIG + 'cover-d.png', FIG + 'cover-f.png'] },
{ head: ['Drama that feels ', 'dangerously', ' real.'], browse: ['Browse Realistic', 'realistic'],
  fan: [FIG + 'originals-strip.jpg', FIG + 'suburban-cover.png', FIG + 'cover-b.png'] },
{ head: ['Romance you ', 'choose', ' yourself.'], browse: ['Browse Books', 'books'],
  fan: [FIG + 'cover-f.png', FIG + 'mustwatch-cover.png', FIG + 'cover-d.png'] }];

function Hero() {
  const { go, toast } = useRS();
  const [i, setI] = fS(0);
  const t = fR(0);
  fE(() => {clearTimeout(t.current);t.current = setTimeout(() => setI((v) => (v + 1) % SLIDES.length), 6500);return () => clearTimeout(t.current);}, [i]);
  const s = SLIDES[i];
  const move = (d) => setI((v) => (v + d + SLIDES.length) % SLIDES.length);
  return (
    <section className="fh-hero">
      <Collage />
      <div className="fhw">
        <div className="fh-hero-grid">
          <button className="fh-side prev" onClick={() => move(-1)} aria-label="Previous"><SideArrow dir="prev" /></button>
          <div className="fh-hcopy">
            <div className="fh-hslide" key={i}>
              <h1 className="fh-h1">{s.head[0]}<em>{s.head[1]}</em>{s.head[2]}</h1>
              <p className="fh-hsub">{BLURB}</p>
            </div>
            <div className="fh-hbtns">
              <button className="fh-btn fh-btn--yellow" onClick={() => toast('Heading to the App Store…')}>Download the app <ArrowBtn /></button>
              <button className="fh-btn fh-btn--ghost" onClick={() => go(s.browse[1])}>{s.browse[0]}</button>
            </div>
            <div className="fh-dots">{SLIDES.map((_, k) => <button key={k} className={k === i ? 'on' : ''} onClick={() => setI(k)} aria-label={`Slide ${k + 1}`} />)}</div>
          </div>
          <div className="fh-fan swap" key={'fan' + i}>
            <div className="fan-glow" />
            {s.fan.map((p, k) => <div key={k} className="pslice" style={{ animationDelay: `${(s.fan.length - 1 - k) * 0.16}s` }}><img src={p} alt="" /></div>)}
          </div>
          <button className="fh-side next" onClick={() => move(1)} aria-label="Next"><SideArrow dir="next" /></button>
        </div>
      </div>
    </section>);

}

/* ======================= CARD + ROW ======================= */
function FhCard({ t, mw, rank }) {
  const { openSeries } = useRS();
  const cardRef = fR(null);
  const trailerActive = useTrailerActive(cardRef, !!t.video);
  return (
    <div ref={cardRef} className={`fh-card ${mw ? 'mw' : ''}`} onClick={() => openSeries(t.id)} role="button" tabIndex={0}>
      {t.image ?
      <img className="cv" src={t.image} alt={t.title} loading="lazy" /> :
      <div className="cv" style={{ background: `radial-gradient(130% 80% at 70% 8%, ${t.glow || '#3a4a7a'}aa, ${t.glow || '#3a4a7a'}11 46%, transparent 66%), linear-gradient(160deg, ${t.tint || '#1b2950'}, #0a1228 92%)` }} />}
      {t.video && <CardTrailer video={t.video} active={trailerActive} />}
      <div className="cfade" />
      {rank && <div className="crank">{rank}</div>}
      <div className="cplay"><span className="trailer-btn"><I.trailerPlay s={26} />Trailer</span></div>
      {t.titleArt ? <img className="clogo" src={t.titleArt} alt={t.title} /> : <div className="ctitle">{t.title}</div>}
    </div>);

}

/* Figma icon_close_light @82: 51.93px circle (3.075 stroke) + chevron */
const RowChevron = ({ dir }) =>
<svg viewBox="0 0 82 82" width="82" height="82" fill="none" style={dir === 'prev' ? { transform: 'scaleX(-1)' } : undefined}>
    <circle className="ra-circle" cx="41" cy="41" r="25.965" stroke="currentColor" strokeWidth="3.075" />
    <path d="M36.2161 55.3464L49.8828 41.6797L36.2161 28.013" stroke="currentColor" strokeWidth="3.075" strokeLinecap="round" strokeLinejoin="round" />
  </svg>;


function FhRow({ items, mw }) {
  const track = fR(null);
  const [scrolled, setScrolled] = fS(false);
  const onScroll = () => {const el = track.current;if (el) setScrolled(el.scrollLeft > 12);};
  const scroll = (d) => {const el = track.current;if (el) el.scrollBy({ left: d * el.clientWidth * 0.8, behavior: 'smooth' });};
  return (
    <div className={`fh-row ${scrolled ? 'scrolled' : ''}`}>
      <div className="fh-track" ref={track} onScroll={onScroll}>
        {items.map((t, k) => <FhCard key={t.id + '-' + k} t={t} mw={mw} />)}
      </div>
      <div className="fh-rowfade" />
      <button className="fh-rowarrow prev" onClick={() => scroll(-1)} aria-label="Previous"><RowChevron dir="prev" /></button>
      <button className="fh-rowarrow next" onClick={() => scroll(1)} aria-label="Next"><RowChevron dir="next" /></button>
    </div>);

}

/* ======================= SECTION HEAD ======================= */
function Kicker({ word, title, sep = true, seeAll, compact }) {
  const { go } = useRS();
  return (
    <>
      {sep && <div className="fh-sep" />}
      <div className="fh-kicker-row">
        <div className="fh-kicker" style={{ fontSize: "28px" }}>{word}</div>
        {seeAll &&
        <button className="fh-seeall" onClick={() => go(seeAll)}>
            See all
            <svg viewBox="0 0 82 82" width="20" height="20" fill="none"><path d="M36.2161 55.3464L49.8828 41.6797L36.2161 28.013" stroke="currentColor" strokeWidth="4.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
        }
      </div>
      {title && <div className="fh-subhead">
        <h3>{title}</h3>
        <p>{BLURB}</p>
      </div>}
    </>);

}

/* ======================= FEATURE BANNER ======================= */
function Feature() {
  const { openSeries, toast } = useRS();
  const t = RS_GET('suburban-strangler');
  return (
    <div className="fh-feature">
      <div className="ff-cover">
        <img className="bg" src={FIG + 'suburban-cover.png'} alt="" />
        <img className="logo" src={FIG + 'suburban-logo.png'} alt="The Suburban Strangler" />
      </div>
      <div className="ff-body">
        <h3>The Suburban Strangler</h3>
        <span className="ff-complete">Complete</span>
        <p>{t ? t.synopsis : ''}</p>
        <button className="fh-btn fh-btn--yellow" onClick={() => openSeries('suburban-strangler')}>Watch now <ArrowBtn /></button>
      </div>
    </div>);

}

/* ======================= REVIEWS ======================= */
const REVIEWS = [
{ text: 'I absolutely love this app. The stories are awesome. They’re not forever long. It’s really great. I wish there were more stories. Keep adding to them. Thank you.', name: 'Marisol R.', src: 'App Store · verified review', av: 'M', c: '#FEC200', cf: '#111C3A' },
{ text: 'I find that it is a good app. I don’t mind watching ads to read the books. I wouldn’t change anything.', name: 'Jamie W.', src: 'Google Play · verified review', av: 'J', c: '#6f5ab0', cf: '#fff' }];

function Reviews() {
  return (
    <div className="fh-reviews">
      {REVIEWS.map((r, i) =>
      <div className="fh-review" key={i}>
          <div className="rstars">★★★★★</div>
          <p>{r.text}</p>
          <div className="who">
            <div className="av" style={{ background: r.c, color: r.cf }}>{r.av}</div>
            <div><div className="wn">{r.name}</div><div className="wm">{r.src}</div></div>
          </div>
        </div>
      )}
    </div>);

}

/* ======================= HOME ======================= */
function Home() {
  const { go, toast } = useRS();
  const originals = pick(['phantoms-kiss', 'two-alpha-kings', 'cursed-rival', 'eyes-of-storm', 'silver-fox', 'bound-roses', 'wolfsbane', 'quiet-wife']);
  const must = pick(['silver-fox', 'two-alpha-kings', 'bound-roses', 'eyes-of-storm', 'burning-vows', 'office-hours', 'cursed-rival', 'suburban-strangler']);
  return (
    <div className="page fh">
      <Hero />

      <section className="fh-sec"><div className="fhw">
        <Kicker word="Originals" seeAll="realistic" title={<>Sagas you won’t<br /><em>find anywhere else.</em></>} />
        <FhRow items={originals} />
        <Feature />
      </div></section>

      <section className="fh-sec"><div className="fhw">
        <Kicker word="Must watch" seeAll="animated" title={<>4.9★ from people<br /><em>who couldn’t put it down.</em></>} />
        <FhRow items={must} mw />
      </div></section>

      <section className="fh-sec" style={{ paddingBottom: 20 }}><div className="fhw">
        <Kicker word="Reviews" title={<>4.9★ from people<br /><em>who couldn’t put it down.</em></>} />
        <Reviews />
      </div></section>

      <section className="fh-closing">
        <Collage />
        <div className="fh-closing-inner fhw">
          <h2>Your next <em>obsession</em> is six minutes long.</h2>
          <p>Free to start. New chapters drop every day. Take the saga with you — on iOS, Android, and the big screen.</p>
          <div className="fh-hbtns">
            <button className="fh-btn fh-btn--yellow" onClick={() => toast('Heading to the App Store…')}>Download the app <ArrowBtn /></button>
          </div>
        </div>
      </section>

      <footer className="fh-foot"><div className="fhw fh-foot-in">
        <span className="fcopy">2026 Reel saga</span>
        <div className="flinks">
          <a onClick={() => toast('Privacy Policy')}>Privacy Policy</a>
          <a onClick={() => toast('Terms')}>Terms</a>
        </div>
      </div></footer>
    </div>);

}

export { Home, FhRow, FhCard, Kicker, Feature, ArrowBtn, SideArrow, RowChevron, FIG, pick, BLURB, Reviews };