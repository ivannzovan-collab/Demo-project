import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const asset = (name) => `${import.meta.env.BASE_URL}reelsaga/${name}`;

// Vertical posters used for the tilted collage behind the hero and the closing CTA.
const COLLAGE = Array.from({ length: 12 }, (_, i) =>
  asset(`poster-${String(i + 1).padStart(2, '0')}.webp`)
);

// Three featured character posters fanned out on the right of the hero.
const HERO_FEATURE = [asset('poster-09.webp'), asset('poster-05.webp'), asset('poster-08.webp')];

// Cards link into the existing video player using the demo movie ids (1–5).
const ORIGINALS = [
  { img: asset('poster-01.webp'), title: 'My Twins Have Two Daddies', tag: 'Romance', movieId: '1' },
  { img: asset('review-02.webp'), title: "The Phantom's Kiss", tag: 'Fantasy', movieId: '2' },
  { img: asset('review-03.webp'), title: "Cursed by My Dead Husband's Rival", tag: 'Drama', movieId: '3' },
  { img: asset('poster-02.webp'), title: 'Eyes of the Storm', tag: 'Thriller', movieId: '4' },
  { img: asset('poster-03.webp'), title: 'One Deadly Night', tag: 'Mystery', movieId: '5' },
  { img: asset('review-06.webp'), title: 'Billionaire Husband, Vampire King', tag: 'Romance', movieId: '1' },
];

const MUST_WATCH = [
  { img: asset('mustwatch-02.webp'), title: 'Two Alpha Kings: One Virgin Mate', rating: '4.9', movieId: '2' },
  { img: asset('mustwatch-03.webp'), title: 'BMP: Spark', rating: '4.8', movieId: '3' },
  { img: asset('mustwatch-04.webp'), title: 'Alpha, Not My Type', rating: '4.7', movieId: '4' },
  { img: asset('mustwatch-05.webp'), title: 'Cuffed by the Silver Fox Captain', rating: '4.9', movieId: '5' },
  { img: asset('review-04.webp'), title: 'Her Billionaire Bodyguard', rating: '4.6', movieId: '1' },
  { img: asset('review-05.webp'), title: "The CEO's Secret Heir", rating: '4.8', movieId: '2' },
];

const REVIEWS = [
  {
    text: "I absolutely love this app. The stories are awesome. They're not forever long. It's really great. I wish there were more stories. Keep adding to them. Thank you.",
    name: 'Marisol R.',
    source: 'App Store · verified review',
  },
  {
    text: "I find that it is a good app. I don't mind watching ads to read the books. I wouldn't change anything.",
    name: 'Jamie W.',
    source: 'Google Play · verified review',
  },
  {
    text: "Bingeable in the best way. Six-minute chapters mean I always tell myself ‘just one more’ — and then it's midnight. The slow-burn romance picks are unreal.",
    name: 'Priya N.',
    source: 'App Store · verified review',
  },
  {
    text: 'The vertical format is perfect for my commute. Crime and sci-fi are my favorites and the new chapters every day keep me coming back. Worth every minute.',
    name: 'Devin T.',
    source: 'Google Play · verified review',
  },
];

const NAV_LINKS = ['Home', 'Realistic', 'Animated', 'Books'];

function Logo() {
  return (
    <a className="rs-logo" href="/" aria-label="ReelSaga home">
      <img className="rs-logo__mark" src={asset('logo-mark.png')} alt="" />
      <span className="rs-logo__word">
        <b>Reel</b>saga
      </span>
    </a>
  );
}

function Stars() {
  return (
    <div className="rs-stars" aria-label="5 out of 5 stars">
      {'★★★★★'}
    </div>
  );
}

// A horizontally scrolling row of cards with prev/next controls.
function ScrollRow({ children, label }) {
  const ref = useRef(null);
  const scroll = (dir) => {
    const el = ref.current;
    if (el) el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: 'smooth' });
  };
  return (
    <div className="rs-row">
      <div className="rs-row__track" ref={ref}>
        {children}
      </div>
      <button className="rs-row__nav rs-row__nav--prev" onClick={() => scroll(-1)} aria-label={`Scroll ${label} left`}>
        {'‹'}
      </button>
      <button className="rs-row__nav rs-row__nav--next" onClick={() => scroll(1)} aria-label={`Scroll ${label} right`}>
        {'›'}
      </button>
    </div>
  );
}

function SectionHead({ label, children, blurb }) {
  return (
    <div className="rs-head">
      <span className="rs-head__label">{label}</span>
      <div className="rs-head__row">
        <h2 className="rs-head__title">{children}</h2>
        <p className="rs-head__blurb">
          ReelSaga is the home of serialized vertical fiction. New chapters drop daily — crime, romance,
          sci-fi, slow-burn. {blurb}
        </p>
      </div>
    </div>
  );
}

function HomePage() {
  const navigate = useNavigate();
  const play = (movieId) => navigate(`/player/${movieId}?episode=0`);

  const collage = (variant) => (
    <div className={`rs-collage rs-collage--${variant}`} aria-hidden="true">
      <div className="rs-collage__grid">
        {Array.from({ length: 32 }).map((_, i) => (
          <img key={i} src={COLLAGE[i % COLLAGE.length]} alt="" loading="lazy" />
        ))}
      </div>
      <div className="rs-collage__veil" />
    </div>
  );

  return (
    <div className="rs">
      {/* ---------- Nav ---------- */}
      <header className="rs-nav">
        <div className="rs-nav__inner">
          <Logo />
          <nav className="rs-nav__links">
            {NAV_LINKS.map((l) => (
              <a key={l} href="/" className={l === 'Home' ? 'is-active' : ''}>
                {l}
              </a>
            ))}
          </nav>
          <div className="rs-nav__right">
            <a href="/">Blog</a>
            <a href="/" className="rs-nav__signin">Sign in</a>
          </div>
        </div>
      </header>

      {/* ---------- Hero ---------- */}
      <section className="rs-hero">
        {collage('hero')}
        <div className="rs-hero__feature" aria-hidden="true">
          {HERO_FEATURE.map((src, i) => (
            <div className="rs-hero__poster" key={i} style={{ '--i': i }}>
              <img src={src} alt="" />
            </div>
          ))}
        </div>
        <div className="rs-hero__content">
          <h1 className="rs-hero__title">
            Epic sagas, <em>six minutes</em> at a time.
          </h1>
          <p className="rs-hero__lede">
            ReelSaga is the home of serialized vertical fiction. New chapters drop daily — crime,
            romance, sci-fi, slow-burn. Watch one, or fall into all twelve.
          </p>
          <div className="rs-hero__actions">
            <button className="rs-btn rs-btn--primary" onClick={() => play('1')}>
              Download the app
              <span className="rs-btn__icon">{'➜'}</span>
            </button>
            <button className="rs-btn rs-btn--ghost" onClick={() => play('1')}>
              {'▶'} Browse Animated
            </button>
          </div>
          <div className="rs-dots" aria-hidden="true">
            <span className="is-active" />
            <span />
            <span />
          </div>
        </div>
      </section>

      <main className="rs-main">
        {/* ---------- Originals ---------- */}
        <section className="rs-section">
          <SectionHead label="Originals" blurb="Watch one, or fall into all twelve.">
            Sagas you won't find <em>anywhere else.</em>
          </SectionHead>
          <ScrollRow label="Originals">
            {ORIGINALS.map((m) => (
              <button className="rs-card" key={m.title} onClick={() => play(m.movieId)}>
                <div className="rs-card__art">
                  <img src={m.img} alt={m.title} loading="lazy" />
                  <span className="rs-card__tag">{m.tag}</span>
                </div>
                <h3 className="rs-card__title">{m.title}</h3>
              </button>
            ))}
          </ScrollRow>
        </section>

        {/* ---------- Featured banner ---------- */}
        <section className="rs-feature">
          <img className="rs-feature__bg" src={asset('suburban-bg.webp')} alt="" aria-hidden="true" />
          <div className="rs-feature__cover">
            <img src={asset('suburban-cover.webp')} alt="The Suburban Strangler key art" />
          </div>
          <div className="rs-feature__info">
            <img className="rs-feature__logo" src={asset('suburban-logo.png')} alt="" aria-hidden="true" />
            <div className="rs-feature__titleRow">
              <h2 className="rs-feature__title">The Suburban Strangler</h2>
              <span className="rs-badge">Complete</span>
            </div>
            <p className="rs-feature__synopsis">
              A forensic cleaner searching for his missing sister and a detective hunting her father's
              killer are forced into a dangerous alliance. When a fresh crime scene reveals an
              impossible link between their tragedies, they uncover a deadly secret that turns them
              from hunters into the hunted.
            </p>
            <button className="rs-btn rs-btn--primary" onClick={() => play('2')}>
              {'▶'} Watch now
            </button>
          </div>
        </section>

        {/* ---------- Must watch ---------- */}
        <section className="rs-section">
          <SectionHead label="Must watch" blurb="Watch one, or fall into all twelve.">
            The titles everyone's <em>racing through.</em>
          </SectionHead>
          <ScrollRow label="Must watch">
            {MUST_WATCH.map((m) => (
              <button className="rs-card" key={m.title} onClick={() => play(m.movieId)}>
                <div className="rs-card__art">
                  <img src={m.img} alt={m.title} loading="lazy" />
                  <span className="rs-card__rating">{'★'} {m.rating}</span>
                </div>
                <h3 className="rs-card__title">{m.title}</h3>
              </button>
            ))}
          </ScrollRow>
        </section>

        {/* ---------- Reviews ---------- */}
        <section className="rs-section">
          <SectionHead label="Reviews" blurb="Watch one, or fall into all twelve.">
            4.9{'★'} from people who <em>couldn't put it down.</em>
          </SectionHead>
          <div className="rs-reviews">
            {REVIEWS.map((r) => (
              <figure className="rs-review" key={r.name}>
                <Stars />
                <blockquote className="rs-review__text">{r.text}</blockquote>
                <figcaption className="rs-review__by">
                  <span className="rs-review__avatar">{r.name.charAt(0)}</span>
                  <span>
                    <b>{r.name}</b>
                    <small>{r.source}</small>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      </main>

      {/* ---------- Closing CTA ---------- */}
      <section className="rs-cta">
        {collage('cta')}
        <div className="rs-cta__content">
          <h2 className="rs-cta__title">
            Your next <em>obsession</em> is six minutes long.
          </h2>
          <p className="rs-cta__sub">
            Free to start. New chapters drop every day. Take the saga with you — on iOS, Android, and
            the big screen.
          </p>
          <button className="rs-btn rs-btn--primary rs-btn--lg" onClick={() => play('1')}>
            Download the app
            <span className="rs-btn__icon">{'➜'}</span>
          </button>
        </div>
      </section>

      {/* ---------- Footer ---------- */}
      <footer className="rs-footer">
        <span>© 2026 Reel saga</span>
        <div className="rs-footer__links">
          <a href="/">Privacy Policy</a>
          <a href="/">Terms</a>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
