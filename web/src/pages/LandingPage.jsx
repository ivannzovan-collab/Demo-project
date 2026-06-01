import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

// Gradient "cover art" presets — used as placeholders until real poster images
// are supplied. Each item below references one of these by key, so swapping in
// real artwork later is a one-line change (set `image` on the data object).
const GRADIENTS = {
  demon:     'radial-gradient(150px 160px at 50% 26%, rgba(255,210,140,.30), transparent 60%), linear-gradient(155deg, #3a1c0a 0%, #8a3a10 55%, #d2691e 100%)',
  phantom:   'radial-gradient(150px 160px at 50% 26%, rgba(180,230,255,.24), transparent 60%), linear-gradient(155deg, #0d2233 0%, #1d4a63 55%, #2f7d8c 100%)',
  muse:      'radial-gradient(150px 160px at 50% 26%, rgba(255,180,240,.26), transparent 60%), linear-gradient(155deg, #241033 0%, #5a1f5e 55%, #7d2a6b 100%)',
  storm:     'radial-gradient(150px 160px at 50% 26%, rgba(150,210,255,.32), transparent 60%), linear-gradient(155deg, #0a1f3a 0%, #11468a 55%, #1f7fd0 100%)',
  vampire:   'radial-gradient(150px 160px at 50% 26%, rgba(255,150,170,.28), transparent 60%), linear-gradient(155deg, #2a0a14 0%, #7a142a 55%, #b81e3c 100%)',
  strangler: 'radial-gradient(180px 220px at 50% 20%, rgba(180,200,230,.20), transparent 60%), linear-gradient(160deg, #0c1526 0%, #1c2c44 55%, #33506e 100%)',
  rose:      'radial-gradient(150px 160px at 50% 26%, rgba(255,200,210,.28), transparent 60%), linear-gradient(155deg, #33121f 0%, #7a2740 55%, #c06a7e 100%)',
  gold:      'radial-gradient(150px 160px at 50% 26%, rgba(255,235,170,.32), transparent 60%), linear-gradient(155deg, #3a2a0a 0%, #8a6510 55%, #e0a92e 100%)',
};

const BLURB =
  'ReelSaga is the home of serialized vertical fiction. New chapters drop daily — crime, romance, sci-fi, slow-burn. Watch one, or fall into all twelve.';

const HERO_SLIDES = [
  { pre: 'Epic stories told in', accent: 'animated', post: 'vertical reels…', art: ['demon', 'phantom', 'muse'] },
  { pre: 'Crime, romance and', accent: 'slow-burn', post: 'drama, every day.', art: ['storm', 'vampire', 'strangler'] },
  { pre: 'Watch one reel now,', accent: 'binge', post: 'all twelve tonight.', art: ['rose', 'gold', 'demon'] },
];

const ORIGINALS = [
  { title: 'My One Deadly Night With the Demon', art: 'demon' },
  { title: 'The Phantom’s Kiss', art: 'phantom' },
  { title: 'Cursed by My Dead Husband’s Rival', art: 'muse' },
  { title: 'Eyes of the Storm', art: 'storm' },
  { title: 'My Billionaire Vampire', art: 'vampire' },
  { title: 'The Heiress Gambit', art: 'gold' },
];

const MUST_WATCH = [
  { title: 'Two Alpha Kings, One Virgin Mate', art: 'rose' },
  { title: 'Bump to Spark', art: 'storm' },
  { title: 'Alpha Is Not My Type', art: 'vampire' },
  { title: 'Cuffed to the Silver Fox Captain', art: 'gold' },
  { title: 'Second Chance Spark', art: 'phantom' },
  { title: 'The Billionaire’s Bodyguard', art: 'muse' },
];

const REVIEWS = [
  {
    initial: 'M', avatar: 'gold', name: 'Marisol R.', source: 'App Store · verified review',
    text: 'I absolutely love this app. The stories are awesome. They’re not forever long. It’s really great. I wish there were more stories. Keep adding to them. Thank you.',
  },
  {
    initial: 'J', avatar: 'purple', name: 'Jamie W.', source: 'Google Play · verified review',
    text: 'I find that it is a good app. I don’t mind watching ads to read the books. I wouldn’t change anything.',
  },
];

/* ---------- Small presentational helpers ---------- */

const ArrowIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12h13M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const ChevronLeft = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const ChevronRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function Logo() {
  return (
    <Link to="/" className="rs-logo" aria-label="ReelSaga home">
      <svg className="rs-logo-svg" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6 2.5h12A1.5 1.5 0 0 1 19.5 4v17.2a.6.6 0 0 1-.92.5L12 18.2l-6.58 3.5a.6.6 0 0 1-.92-.5V4A1.5 1.5 0 0 1 6 2.5Z" fill="#f3b51c" />
        <path d="M10 7.6l5 3.4-5 3.4z" fill="#0a0e27" />
      </svg>
      <span className="rs-logo-text">Reel<span className="rs-logo-accent">saga</span></span>
    </Link>
  );
}

/* ---------- Sections ---------- */

function Navbar() {
  return (
    <header className="rs-header">
      <nav className="rs-nav">
        <div className="rs-nav-left">
          <Logo />
          <div className="rs-nav-links">
            <a className="rs-navlink is-active" href="#top">Home</a>
            <a className="rs-navlink" href="#originals">Realistic</a>
            <a className="rs-navlink" href="#originals">Animated</a>
            <a className="rs-navlink" href="#must-watch">Books</a>
          </div>
        </div>
        <div className="rs-nav-right">
          <a className="rs-navlink" href="#reviews">Blog</a>
          <a className="rs-navlink rs-signin" href="#">Sign in</a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  const [slide, setSlide] = useState(0);
  const count = HERO_SLIDES.length;
  const go = (n) => setSlide((n + count) % count);

  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % count), 6500);
    return () => clearInterval(id);
  }, [count]);

  const data = HERO_SLIDES[slide];

  return (
    <section className="rs-hero" id="top">
      <button className="rs-hero-arrow prev" onClick={() => go(slide - 1)} aria-label="Previous slide">
        <ChevronLeft />
      </button>

      <div className="rs-hero-copy">
        <h1 className="rs-hero-title">
          {data.pre} <span className="rs-accent">{data.accent}</span> {data.post}
        </h1>
        <p className="rs-hero-sub">{BLURB}</p>
        <div className="rs-hero-actions">
          <Link to="/browse" className="rs-btn rs-btn-primary">
            Download the app <ArrowIcon />
          </Link>
          <Link to="/browse" className="rs-btn rs-btn-ghost">Browse Animated</Link>
        </div>
        <div className="rs-dots" role="tablist" aria-label="Hero slides">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              className={`rs-dot ${i === slide ? 'is-active' : ''}`}
              onClick={() => go(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-selected={i === slide}
              role="tab"
            />
          ))}
        </div>
      </div>

      <div className="rs-hero-visual">
        <div className="rs-portraits">
          {data.art.map((a, i) => (
            <div key={i} className="rs-portrait" style={{ background: GRADIENTS[a] }} />
          ))}
        </div>
      </div>

      <button className="rs-hero-arrow next" onClick={() => go(slide + 1)} aria-label="Next slide">
        <ChevronRight />
      </button>
    </section>
  );
}

function PosterCard({ title, art }) {
  return (
    <div className="rs-poster" style={{ background: GRADIENTS[art] }} role="button" tabIndex={0}>
      <h3 className="rs-poster-title">{title}</h3>
    </div>
  );
}

function SectionHead({ kicker, lead, accent }) {
  return (
    <div className="rs-section-head">
      <div>
        <h2 className="rs-kicker">{kicker}</h2>
        <p className="rs-subtitle">
          {lead} <span className="rs-accent">{accent}</span>
        </p>
      </div>
      <p className="rs-head-note">{BLURB}</p>
    </div>
  );
}

function ContentRow({ id, kicker, lead, accent, items }) {
  const ref = useRef(null);
  const scroll = (dir) => ref.current?.scrollBy({ left: dir * 360, behavior: 'smooth' });

  return (
    <section className="rs-section" id={id}>
      <div className="rs-container">
        <SectionHead kicker={kicker} lead={lead} accent={accent} />
        <div className="rs-row">
          <div className="rs-scroller" ref={ref}>
            {items.map((it, i) => (
              <PosterCard key={i} {...it} />
            ))}
          </div>
          <button className="rs-row-arrow" onClick={() => scroll(1)} aria-label="Scroll for more">
            <ChevronRight />
          </button>
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
          <div className="rs-featured-poster" style={{ background: GRADIENTS.strangler }}>
            <h3 className="rs-poster-title">The Suburban Strangler</h3>
          </div>
          <div className="rs-featured-body">
            <span className="rs-tag">Complete</span>
            <h3>The Suburban Strangler</h3>
            <p>
              A forensic cleaner searching for his missing sister and a detective hunting her
              father’s killer are forced into a dangerous alliance. When a fresh crime scene reveals
              an impossible link between their tragedies, they uncover a deadly secret that turns
              them from hunters into the hunted.
            </p>
            <Link to="/browse" className="rs-btn rs-btn-primary">
              Watch now <ArrowIcon />
            </Link>
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
        <SectionHead kicker="Reviews" lead="4.9★ from people who" accent="couldn’t put it down." />
        <div className="rs-reviews-grid">
          {REVIEWS.map((r, i) => (
            <article className="rs-review" key={i}>
              <div className="rs-stars" aria-label="Rated 5 out of 5">★★★★★</div>
              <p className="rs-review-text">{r.text}</p>
              <div className="rs-reviewer">
                <span className={`rs-avatar ${r.avatar}`} aria-hidden="true">{r.initial}</span>
                <div>
                  <div className="rs-reviewer-name">{r.name}</div>
                  <div className="rs-reviewer-src">{r.source}</div>
                </div>
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
        <h2>
          Your next <span className="rs-accent">obsession</span> is six minutes long.
        </h2>
        <p>
          Free to start. New chapters drop every day. Take the saga with you — on iOS, Android, and
          the big screen.
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="rs-footer">
      <div className="rs-footer-inner">
        <span>© 2026 ReelSaga</span>
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
      <ContentRow id="originals" kicker="Originals" lead="Sagas you won’t find" accent="anywhere else." items={ORIGINALS} />
      <Featured />
      <ContentRow id="must-watch" kicker="Must watch" lead="4.9★ from people who" accent="couldn’t put it down." items={MUST_WATCH} />
      <Reviews />
      <Closing />
      <Footer />
    </div>
  );
}
