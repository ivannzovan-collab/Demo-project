import { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  NAV_LINKS,
  HERO,
  HERO_PREVIEWS,
  ORIGINALS,
  FEATURED,
  MUST_WATCH,
  REVIEWS,
  FOOTER_CTA,
  FOOTER,
} from '../data/landingData';
import './LandingPage.css';

/* ---------- tiny inline icons ---------- */
const PlayIcon = () => (
  <svg className="rs-ic" width="14" height="16" viewBox="0 0 14 16" aria-hidden="true">
    <path d="M1 1.7v12.6c0 .9 1 1.5 1.8 1L13 9c.8-.5.8-1.6 0-2L2.8.7C2 .2 1 .8 1 1.7Z" fill="currentColor" />
  </svg>
);
const StarIcon = () => (
  <svg className="rs-ic" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.8 6.2 20.9l1.1-6.5L2.6 9.3l6.5-.9L12 2.5Z"
      fill="currentColor"
    />
  </svg>
);
const Chevron = ({ dir = 'right' }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"
    style={{ transform: dir === 'left' ? 'rotate(180deg)' : 'none' }}>
    <path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2.2"
      strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ---------- poster card with graceful placeholder ---------- */
function Poster({ item, variant }) {
  return (
    <article className={`rs-poster rs-tone-${item.tone}${variant ? ` rs-poster--${variant}` : ''}`}>
      {item.image ? (
        <img className="rs-poster__img" src={item.image} alt={item.title} loading="lazy" />
      ) : null}
      <div className="rs-poster__shade" aria-hidden="true" />
      {typeof item.rating === 'number' && (
        <span className="rs-poster__badge"><StarIcon /> {item.rating.toFixed(1)}</span>
      )}
      <div className="rs-poster__info">
        <h3 className="rs-poster__title">{item.title}</h3>
        <div className="rs-poster__meta">
          {item.genre && <span>{item.genre.join(' · ')}</span>}
          {item.episodes && <span className="rs-poster__eps">{item.episodes} eps</span>}
        </div>
      </div>
    </article>
  );
}

/* ---------- horizontally scrollable carousel ---------- */
function Carousel({ items }) {
  const trackRef = useRef(null);
  const nudge = (dir) => {
    const el = trackRef.current;
    if (el) el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.85, 760), behavior: 'smooth' });
  };
  return (
    <div className="rs-carousel">
      <button type="button" className="rs-arrow rs-arrow--prev" aria-label="Scroll left"
        onClick={() => nudge(-1)}><Chevron dir="left" /></button>
      <div className="rs-carousel__track" ref={trackRef}>
        {items.map((it) => <Poster key={it.id} item={it} />)}
      </div>
      <button type="button" className="rs-arrow rs-arrow--next" aria-label="Scroll right"
        onClick={() => nudge(1)}><Chevron dir="right" /></button>
    </div>
  );
}

function SectionHead({ id, title, eyebrow, body }) {
  return (
    <div className="rs-sechead" id={id}>
      <h2 className="rs-sechead__title">{title}</h2>
      <div className="rs-sechead__copy">
        <p className="rs-eyebrow">{eyebrow}</p>
        <p className="rs-sechead__body">{body}</p>
      </div>
    </div>
  );
}

/* ---------- page ---------- */
export default function LandingPage() {
  return (
    <div className="rs-landing" id="top">
      {/* NAV */}
      <header className="rs-nav">
        <div className="rs-nav__inner">
          <a className="rs-logo" href="#top" aria-label="ReelSaga home">
            Reel<span className="rs-logo__accent">saga</span>
          </a>
          <nav className="rs-nav__links" aria-label="Primary">
            {NAV_LINKS.map((l) => (
              <a key={l.label} href={l.href}
                className={`rs-nav__link${l.active ? ' is-active' : ''}`}>{l.label}</a>
            ))}
          </nav>
          <div className="rs-nav__right">
            <a className="rs-nav__link" href="#reviews">Blog</a>
            <Link className="rs-signin" to="/app">Sign in</Link>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="rs-hero">
        <div className="rs-hero__bg" aria-hidden="true" />
        <div className="rs-hero__inner">
          <div className="rs-hero__copy">
            <h1 className="rs-hero__title">{HERO.title}</h1>
            <p className="rs-hero__body">{HERO.body}</p>
            <div className="rs-hero__cta">
              <Link className="rs-btn rs-btn--accent" to="/app"><PlayIcon /> {HERO.primaryCta}</Link>
              <a className="rs-btn rs-btn--ghost" href="#must-watch"><PlayIcon /> {HERO.secondaryCta}</a>
            </div>
          </div>
          <div className="rs-hero__previews" aria-hidden="true">
            {HERO_PREVIEWS.map((p, i) => (
              <div key={p.title} className={`rs-hero__preview rs-hero__preview--${i}`}>
                <Poster item={p} variant="preview" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <main className="rs-main">
        {/* ORIGINALS */}
        <section className="rs-section">
          <SectionHead id="originals" title="Originals"
            eyebrow={ORIGINALS.eyebrow} body={ORIGINALS.body} />
          <Carousel items={ORIGINALS.items} />
        </section>

        {/* FEATURED BANNER */}
        <section className="rs-featured" aria-label="Featured saga">
          <div className={`rs-featured__art rs-tone-${FEATURED.tone}`}>
            {FEATURED.image ? <img src={FEATURED.image} alt={FEATURED.title} /> : null}
            <div className="rs-featured__art-shade" aria-hidden="true" />
          </div>
          <div className="rs-featured__body">
            <div className="rs-featured__tags">
              <span className="rs-chip rs-chip--done">{FEATURED.status}</span>
              {FEATURED.genre.map((g) => <span key={g} className="rs-chip">{g}</span>)}
            </div>
            <h2 className="rs-featured__title">{FEATURED.title}</h2>
            <p className="rs-featured__desc">{FEATURED.body}</p>
            <Link className="rs-btn rs-btn--accent" to="/app"><PlayIcon /> {FEATURED.cta}</Link>
          </div>
        </section>

        {/* MUST WATCH */}
        <section className="rs-section">
          <SectionHead id="must-watch" title="Must watch"
            eyebrow={MUST_WATCH.eyebrow} body={MUST_WATCH.body} />
          <Carousel items={MUST_WATCH.items} />
        </section>

        {/* REVIEWS */}
        <section className="rs-section">
          <SectionHead id="reviews" title="Reviews"
            eyebrow={REVIEWS.eyebrow} body={REVIEWS.body} />
          <div className="rs-reviews">
            {REVIEWS.items.map((r) => (
              <figure key={r.id} className="rs-review">
                <div className="rs-review__stars" aria-label={`${r.rating} out of 5`}>
                  {Array.from({ length: r.rating }).map((_, i) => <StarIcon key={i} />)}
                </div>
                <blockquote className="rs-review__quote">“{r.quote}”</blockquote>
                <figcaption className="rs-review__by">
                  <span className="rs-review__name">{r.name}</span>
                  <span className="rs-review__handle">{r.handle}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      </main>

      {/* FOOTER CTA */}
      <section className="rs-cta">
        <div className="rs-cta__bg" aria-hidden="true" />
        <div className="rs-cta__inner">
          <h2 className="rs-cta__title">{FOOTER_CTA.title}</h2>
          <p className="rs-cta__body">{FOOTER_CTA.body}</p>
          <div className="rs-cta__btns">
            <Link className="rs-btn rs-btn--accent" to="/app"><PlayIcon /> {FOOTER_CTA.primaryCta}</Link>
            <Link className="rs-btn rs-btn--ghost" to="/app">{FOOTER_CTA.secondaryCta}</Link>
          </div>
        </div>
      </section>

      {/* SITE FOOTER */}
      <footer className="rs-footer">
        <div className="rs-footer__inner">
          <span className="rs-footer__copy">{FOOTER.copyright}</span>
          <nav className="rs-footer__links" aria-label="Legal">
            {FOOTER.links.map((l) => <a key={l.label} href={l.href}>{l.label}</a>)}
          </nav>
        </div>
      </footer>
    </div>
  );
}
