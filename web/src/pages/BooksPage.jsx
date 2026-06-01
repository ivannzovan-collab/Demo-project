import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  PlayIcon,
  Chevron,
  Poster,
  Carousel,
  RowHead,
  SiteNav,
  SiteFooter,
} from '../components/reelsaga';
import { B_HERO, B_TOP, B_NEW, B_TRENDING, B_PICKS } from '../data/booksData';
import '../styles/reelsaga.css';

/* Featured "Top" coverflow: a center cover flanked by scaled-down neighbours.
   Clicking a side cover (or an arrow) re-centers it. */
function BookFlow({ items }) {
  const n = items.length;
  const [center, setCenter] = useState(Math.floor(n / 2));
  const rel = (i) => {
    let d = i - center;
    if (d > n / 2) d -= n;
    if (d < -n / 2) d += n;
    return d;
  };
  const cls = (d) => {
    if (d === 0) return 'rs-flow__item--center';
    const side = d < 0 ? 'left' : 'right';
    return `${Math.abs(d) === 1 ? 'rs-flow__item--near' : 'rs-flow__item--far'} rs-flow__item--${side}`;
  };
  return (
    <div className="rs-flow">
      <div className="rs-flow__glow" aria-hidden="true" />
      <button type="button" className="rs-arrow rs-arrow--prev" aria-label="Previous book"
        onClick={() => setCenter((center - 1 + n) % n)}><Chevron dir="left" /></button>
      <div className="rs-flow__row">
        {items.map((b, i) => {
          const d = rel(i);
          if (Math.abs(d) > 2) return null;
          return (
            <div key={b.id} className={`rs-flow__item ${cls(d)}`} style={{ order: d + 10 }}
              onClick={() => setCenter(i)}>
              <Poster item={b} variant="book" />
            </div>
          );
        })}
      </div>
      <button type="button" className="rs-arrow rs-arrow--next" aria-label="Next book"
        onClick={() => setCenter((center + 1) % n)}><Chevron dir="right" /></button>
    </div>
  );
}

export default function BooksPage() {
  return (
    <div className="rs-landing" id="top">
      <SiteNav active="Books" />

      {/* HERO */}
      <section className="rs-hero">
        <div className="rs-hero__bg" aria-hidden="true" />
        <div className="rs-hero__inner">
          <div className="rs-hero__copy">
            <div className="rs-featured__tags">
              {B_HERO.genre.map((g) => <span key={g} className="rs-chip">{g}</span>)}
            </div>
            <h1 className="rs-hero__title">{B_HERO.title}</h1>
            <p className="rs-hero__body">{B_HERO.body}</p>
            <div className="rs-hero__cta">
              <Link className="rs-btn rs-btn--accent" to="/app"><PlayIcon /> {B_HERO.primaryCta}</Link>
              <Link className="rs-btn rs-btn--ghost" to="/app">{B_HERO.secondaryCta}</Link>
            </div>
            <div className="rs-dots" aria-hidden="true">
              <span className="is-on" /><span /><span /><span />
            </div>
          </div>
          <div className={`rs-hero__media rs-tone-${B_HERO.tone}`}>
            {B_HERO.image ? <img src={B_HERO.image} alt={B_HERO.title} /> : null}
            <div className="rs-poster__shade" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* FEATURED COVERFLOW */}
      <BookFlow items={B_TOP} />

      <main className="rs-main">
        <section className="rs-section">
          <RowHead id="new" title={B_NEW.title} />
          <Carousel items={B_NEW.items} />
        </section>

        <section className="rs-section">
          <RowHead title={B_TRENDING.title} />
          <Carousel items={B_TRENDING.items} variant="ranked" />
        </section>

        <section className="rs-section">
          <RowHead title={B_PICKS.title} />
          <Carousel items={B_PICKS.items} />
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
