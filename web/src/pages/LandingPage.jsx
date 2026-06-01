import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

/*
  ReelSaga landing page — rebuilt to match the Figma file "Web" (node 109:173).
  Exact tokens, copy, typography and geometry are taken from the Figma design.

  NOTE ON IMAGERY: the 82 cover/character bitmaps live on figma.com, which this
  build environment's network policy blocks, so they can't be vendored into the
  repo from here. Every card therefore uses a colour-matched gradient placeholder
  with the real title. The data is structured so that dropping in real artwork is
  a one-line change: add `image: '/figma/xxx.png'` to any item below.
*/

const BLURB =
  'ReelSaga is the home of serialized vertical fiction. New chapters drop daily - crime, romance, sci-fi, slow-burn. Watch one, or fall into all twelve.';

// Colour-matched gradient placeholders (sampled from the Figma covers).
const G = {
  demon:     'radial-gradient(150px 150px at 50% 24%, rgba(255,214,150,.35), transparent 60%), linear-gradient(155deg,#3a1c0a,#8a3a10 55%,#d2691e)',
  phantom:   'radial-gradient(150px 150px at 50% 24%, rgba(170,225,255,.25), transparent 60%), linear-gradient(155deg,#091a2c,#15384f 55%,#2f6f86)',
  cursed:    'radial-gradient(150px 150px at 50% 24%, rgba(240,180,255,.28), transparent 60%), linear-gradient(155deg,#1f0f2e,#4a1a55 55%,#7d2a6b)',
  storm:     'radial-gradient(160px 150px at 30% 24%, rgba(150,210,255,.40), transparent 55%), linear-gradient(115deg,#102a6b 0%,#1f7fd0 48%,#b5286a 52%,#7a1f4e 100%)',
  vampire:   'radial-gradient(150px 150px at 50% 24%, rgba(255,150,170,.30), transparent 60%), linear-gradient(155deg,#2a0a12,#7a142a 55%,#b81e3c)',
  strangler: 'radial-gradient(220px 180px at 50% 16%, rgba(190,210,235,.18), transparent 60%), linear-gradient(170deg,#0a1322,#16243c 55%,#2c4768)',
  ball:      'radial-gradient(150px 150px at 50% 22%, rgba(255,220,170,.30), transparent 60%), linear-gradient(155deg,#2a0f1a,#6e2238 55%,#b07a4e)',
  spark:     'radial-gradient(150px 150px at 50% 22%, rgba(170,220,255,.32), transparent 60%), linear-gradient(155deg,#0a2240,#185a9c 55%,#36a0e0)',
  type:      'radial-gradient(150px 150px at 50% 22%, rgba(255,200,200,.28), transparent 60%), linear-gradient(155deg,#2e1320,#7a2740 55%,#c06a7e)',
  fox:       'radial-gradient(150px 150px at 50% 22%, rgba(255,235,180,.30), transparent 60%), linear-gradient(155deg,#241a0c,#6e5018 55%,#caa24e)',
  // hero portrait slices
  pManFire:  'radial-gradient(120px 140px at 50% 30%, rgba(255,210,150,.4), transparent 60%), linear-gradient(160deg,#1a0c06,#6e2c0e 55%,#d2691e)',
  pBride:    'radial-gradient(120px 140px at 50% 30%, rgba(220,235,250,.35), transparent 60%), linear-gradient(160deg,#10202e,#2b4a5e 55%,#7d97a6)',
  pSuit:     'radial-gradient(120px 140px at 50% 30%, rgba(255,190,150,.35), transparent 60%), linear-gradient(160deg,#231009,#7a2a1e 55%,#c25a2e)',
};

const ORIGINALS = [
  { title: 'My One Deadly Night With the Demon', art: 'demon' },
  { title: 'The Phantom’s Kiss', art: 'phantom' },
  { title: 'Cursed By My Dead Husband’s Rival', art: 'cursed' },
  { title: 'Eyes of the Storm', art: 'storm' },
  { title: 'My Billionaire Vampire', art: 'vampire' },
];

const MUST_WATCH = [
  { title: 'Two Alpha Kings, One Virgin Mate', art: 'ball' },
  { title: 'Bump to Spark', art: 'spark' },
  { title: 'Alpha Is Not My Type', art: 'type' },
  { title: 'Cuffed to the Silver Fox Captain', art: 'fox' },
  { title: 'Bump to Spark', art: 'spark' },
  { title: 'Alpha Is Not My Type', art: 'type' },
];

const REVIEWS = [
  {
    initial: 'M', avatar: 'gold', name: 'Marisol R.', source: 'App Store - verified review',
    text: 'I absolutely love this app. The stories are awesome. They’re not forever long. It’s really great. I wish there were more stories. Keep adding to them. Thank you.',
  },
  {
    initial: 'J', avatar: 'purple', name: 'Jamie W.', source: 'Google Play - verified review',
    text: 'I find that it is a good app. I don’t mind watching ads to read the books. I wouldn’t change anything.',
  },
];

/* ---------- icons ---------- */
const ArrowIcon = () => (
  <svg width="20" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M4 12h13M12 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const Chevron = ({ dir = 'right' }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"
       style={{ transform: dir === 'left' ? 'rotate(180deg)' : 'none' }}>
    <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function Logo() {
  return (
    <Link to="/" className="rs-logo" aria-label="ReelSaga home">
      <span className="rs-logo-mark" aria-hidden="true">
        <svg viewBox="0 0 38 38" width="34" height="34">
          <rect x="2" y="2" width="34" height="34" rx="9" fill="#fec200" />
          <path d="M15 12.5l11 6.5-11 6.5z" fill="#050e27" />
        </svg>
      </span>
      <span className="rs-logo-text"><b>Reel</b><span>saga</span></span>
    </Link>
  );
}

function Navbar() {
  return (
    <header className="rs-header">
      <div className="rs-container rs-nav">
        <Logo />
        <nav className="rs-nav-links">
          <a className="is-active" href="#top">Home</a>
          <a href="#originals">Realistic</a>
          <a href="#originals">Animated</a>
          <a href="#must-watch">Books</a>
        </nav>
        <div className="rs-nav-right">
          <a href="#reviews">Blog</a>
          <a href="#" className="rs-signin">Sign in</a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % 3), 6500);
    return () => clearInterval(id);
  }, []);
  return (
    <section className="rs-hero" id="top">
      <button className="rs-hero-arrow prev" onClick={() => setSlide((s) => (s + 2) % 3)} aria-label="Previous"><Chevron dir="left" /></button>

      <div className="rs-hero-copy">
        <h1 className="rs-hero-title">
          Epic naslov o <span className="rs-accent">animiranim</span><br />Reelovima...
        </h1>
        <p className="rs-hero-sub">{BLURB}</p>
        <div className="rs-hero-actions">
          <Link to="/browse" className="rs-btn rs-btn-primary">Download the app <ArrowIcon /></Link>
          <Link to="/browse" className="rs-btn rs-btn-ghost">Browse Animated</Link>
        </div>
        <div className="rs-dots" role="tablist" aria-label="Hero slides">
          {[0, 1, 2].map((i) => (
            <button key={i} className={`rs-dot ${i === slide ? 'is-active' : ''}`} onClick={() => setSlide(i)} aria-label={`Slide ${i + 1}`} />
          ))}
        </div>
      </div>

      <div className="rs-hero-visual">
        <div className="rs-portraits">
          <div className="rs-portrait" style={{ background: G.pManFire }} />
          <div className="rs-portrait" style={{ background: G.pBride }} />
          <div className="rs-portrait" style={{ background: G.pSuit }} />
        </div>
      </div>

      <button className="rs-hero-arrow next" onClick={() => setSlide((s) => (s + 1) % 3)} aria-label="Next"><Chevron /></button>
    </section>
  );
}

function Cover({ title, art, variant }) {
  return (
    <div className={`rs-cover ${variant || ''}`} style={{ background: G[art] }} role="button" tabIndex={0}>
      <span className="rs-cover-title">{title}</span>
    </div>
  );
}

function SectionHead({ kicker, lead, accent }) {
  return (
    <div className="rs-head">
      <div className="rs-head-left">
        <h2 className="rs-kicker">{kicker}</h2>
        <p className="rs-subtitle">{lead} <span className="rs-accent">{accent}</span></p>
      </div>
      <p className="rs-head-note">{BLURB}</p>
    </div>
  );
}

function CoverRow({ id, kicker, lead, accent, items, variant }) {
  const ref = useRef(null);
  return (
    <section className="rs-section" id={id}>
      <div className="rs-container">
        <hr className="rs-divider" />
        <SectionHead kicker={kicker} lead={lead} accent={accent} />
        <div className="rs-row">
          <div className="rs-scroller" ref={ref}>
            {items.map((it, i) => <Cover key={i} {...it} variant={variant} />)}
          </div>
          <button className="rs-row-arrow" onClick={() => ref.current?.scrollBy({ left: 360, behavior: 'smooth' })} aria-label="Scroll for more"><Chevron /></button>
        </div>
      </div>
    </section>
  );
}

function Featured() {
  return (
    <section className="rs-section">
      <div className="rs-container">
        <div className="rs-featured">
          <div className="rs-featured-poster" style={{ background: G.strangler }}>
            <span className="rs-cover-title rs-strangler">The Suburban Strangler</span>
          </div>
          <div className="rs-featured-body">
            <h3 className="rs-featured-title">The Suburban Strangler</h3>
            <span className="rs-tag">Complete</span>
            <p className="rs-featured-desc">
              A forensic cleaner searching for his missing sister and a detective hunting her
              father’s killer are forced into a dangerous alliance. When a fresh crime scene reveals
              an impossible link between their tragedies, they uncover a deadly secret that turns
              them from hunters into the hunted.
            </p>
            <Link to="/browse" className="rs-btn rs-btn-primary">Watch now <ArrowIcon /></Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section className="rs-section" id="reviews">
      <div className="rs-container">
        <hr className="rs-divider" />
        <SectionHead kicker="Reviews" lead="4.9★ from people who" accent="couldn’t put it down." />
        <div className="rs-reviews">
          {REVIEWS.map((r, i) => (
            <article className="rs-review" key={i}>
              <div className="rs-stars" aria-label="Rated 5 out of 5">★★★★★</div>
              <p className="rs-review-text">{r.text}</p>
              <div className="rs-reviewer">
                <span className={`rs-avatar ${r.avatar}`} aria-hidden="true">{r.initial}</span>
                <span>
                  <span className="rs-reviewer-name">{r.name}</span>
                  <span className="rs-reviewer-src">{r.source}</span>
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Closing() {
  return (
    <section className="rs-closing">
      <div className="rs-container">
        <h2 className="rs-closing-title">Your next <span className="rs-accent">obsession</span> is six minutes long.</h2>
        <p className="rs-closing-sub">Free to start. New chapters drop every day. Take the saga with you - on iOS, Android, and the big screen.</p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="rs-footer">
      <div className="rs-container rs-footer-inner">
        <span>2026 Reel saga</span>
        <span className="rs-footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms</a>
        </span>
      </div>
    </footer>
  );
}

export default function LandingPage() {
  return (
    <div className="rs-landing">
      <Navbar />
      <div className="rs-container">
        <Hero />
      </div>
      <CoverRow id="originals" kicker="Originals" lead="Sagas you won’t find" accent="anywhere else." items={ORIGINALS} />
      <Featured />
      <CoverRow id="must-watch" kicker="Must watch" lead="4.9★ from people who" accent="couldn’t put it down." items={MUST_WATCH} variant="wide" />
      <Reviews />
      <Closing />
      <Footer />
    </div>
  );
}
