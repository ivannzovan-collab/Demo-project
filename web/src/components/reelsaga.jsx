import { useRef } from 'react';
import { Link } from 'react-router-dom';

/* Shared ReelSaga UI used by the marketing landing page and the category
   pages (Realistic, and future Animated/Books). Styles live in
   web/src/styles/reelsaga.css. */

/* ---------- icons ---------- */
export const PlayIcon = () => (
  <svg className="rs-ic" width="14" height="16" viewBox="0 0 14 16" aria-hidden="true">
    <path d="M1 1.7v12.6c0 .9 1 1.5 1.8 1L13 9c.8-.5.8-1.6 0-2L2.8.7C2 .2 1 .8 1 1.7Z" fill="currentColor" />
  </svg>
);
export const StarIcon = () => (
  <svg className="rs-ic" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.8 6.2 20.9l1.1-6.5L2.6 9.3l6.5-.9L12 2.5Z" fill="currentColor" />
  </svg>
);
export const Chevron = ({ dir = 'right' }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"
    style={{ transform: dir === 'left' ? 'rotate(180deg)' : 'none' }}>
    <path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2.2"
      strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ---------- poster card (graceful gradient placeholder) ----------
   item: { title, tone, image?, rating?, genre?[], episodes?, caption?, rank? } */
export function Poster({ item, variant }) {
  const card = (
    <article className={`rs-poster rs-tone-${item.tone}${variant ? ` rs-poster--${variant}` : ''}`}>
      {item.image ? (
        <img className="rs-poster__img" src={item.image} alt={item.title} loading="lazy" />
      ) : null}
      <div className="rs-poster__shade" aria-hidden="true" />
      {item.rank ? <span className="rs-rank">{item.rank}</span> : null}
      {typeof item.rating === 'number' && (
        <span className="rs-poster__badge"><StarIcon /> {item.rating.toFixed(1)}</span>
      )}
      <div className="rs-poster__info">
        <h3 className="rs-poster__title">{item.title}</h3>
        {item.genre && (
          <div className="rs-poster__meta">
            <span>{item.genre.join(' · ')}</span>
            {item.episodes && <span className="rs-poster__eps">{item.episodes} eps</span>}
          </div>
        )}
      </div>
    </article>
  );
  if (!item.caption) return card;
  return (
    <div className="rs-poster-wrap">
      {card}
      <span className="rs-poster-cap">{item.caption}</span>
    </div>
  );
}

/* ---------- horizontally scrollable row ---------- */
export function Carousel({ items, variant }) {
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
        {items.map((it) => <Poster key={it.id} item={it} variant={variant} />)}
      </div>
      <button type="button" className="rs-arrow rs-arrow--next" aria-label="Scroll right"
        onClick={() => nudge(1)}><Chevron dir="right" /></button>
    </div>
  );
}

/* ---------- section headers ---------- */
export function SectionHead({ id, title, eyebrow, body }) {
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
export function RowHead({ id, title }) {
  return <h2 className="rs-rowhead" id={id}>{title}</h2>;
}

/* ---------- featured spotlight banner ----------
   data: { title, status, genre[], body, cta, tone, image? } */
export function FeaturedBanner({ data }) {
  return (
    <section className="rs-featured" aria-label="Featured saga">
      <div className={`rs-featured__art rs-tone-${data.tone}`}>
        {data.image ? <img src={data.image} alt={data.title} /> : null}
        <div className="rs-featured__art-shade" aria-hidden="true" />
      </div>
      <div className="rs-featured__body">
        <div className="rs-featured__tags">
          {data.status && <span className="rs-chip rs-chip--done">{data.status}</span>}
          {data.genre?.map((g) => <span key={g} className="rs-chip">{g}</span>)}
        </div>
        <h2 className="rs-featured__title">{data.title}</h2>
        <p className="rs-featured__desc">{data.body}</p>
        <Link className="rs-btn rs-btn--accent" to="/app"><PlayIcon /> {data.cta}</Link>
      </div>
    </section>
  );
}

/* ---------- site chrome ---------- */
export function SiteNav({ active }) {
  const links = [
    { label: 'Home', to: '/' },
    { label: 'Realistic', to: '/realistic' },
    { label: 'Animated', href: '#' },
    { label: 'Books', href: '#' },
  ];
  return (
    <header className="rs-nav">
      <div className="rs-nav__inner">
        <Link className="rs-logo" to="/" aria-label="ReelSaga home">
          Reel<span className="rs-logo__accent">saga</span>
        </Link>
        <nav className="rs-nav__links" aria-label="Primary">
          {links.map((l) => {
            const cls = `rs-nav__link${active === l.label ? ' is-active' : ''}`;
            return l.to
              ? <Link key={l.label} to={l.to} className={cls}>{l.label}</Link>
              : <a key={l.label} href={l.href} className={cls}>{l.label}</a>;
          })}
        </nav>
        <div className="rs-nav__right">
          <a className="rs-nav__link" href="#">Blog</a>
          <Link className="rs-signin" to="/app">Sign in</Link>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="rs-footer">
      <div className="rs-footer__inner">
        <span className="rs-footer__copy">© 2026 ReelSaga</span>
        <nav className="rs-footer__links" aria-label="Legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms</a>
        </nav>
      </div>
    </footer>
  );
}
