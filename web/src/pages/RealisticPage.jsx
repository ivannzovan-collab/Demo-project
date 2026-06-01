import { Link } from 'react-router-dom';
import {
  PlayIcon,
  Carousel,
  RowHead,
  FeaturedBanner,
  SiteNav,
  SiteFooter,
} from '../components/reelsaga';
import { FEATURED } from '../data/landingData';
import {
  R_HERO,
  R_TRENDING,
  R_NEW,
  R_RECOMMENDED,
  R_GUILTY,
  R_BROWSE,
} from '../data/realisticData';
import '../styles/reelsaga.css';

export default function RealisticPage() {
  return (
    <div className="rs-landing" id="top">
      <SiteNav active="Realistic" />

      {/* HERO — featured saga spotlight */}
      <section className="rs-hero">
        <div className="rs-hero__bg" aria-hidden="true" />
        <div className="rs-hero__inner">
          <div className="rs-hero__copy">
            <div className="rs-featured__tags">
              {R_HERO.genre.map((g) => <span key={g} className="rs-chip">{g}</span>)}
            </div>
            <h1 className="rs-hero__title">{R_HERO.title}</h1>
            <p className="rs-hero__body">{R_HERO.body}</p>
            <div className="rs-hero__cta">
              <Link className="rs-btn rs-btn--accent" to="/app"><PlayIcon /> {R_HERO.primaryCta}</Link>
              <Link className="rs-btn rs-btn--ghost" to="/app"><PlayIcon /> {R_HERO.secondaryCta}</Link>
            </div>
            <div className="rs-dots" aria-hidden="true">
              <span className="is-on" /><span /><span /><span />
            </div>
          </div>
          <div className={`rs-hero__media rs-tone-${R_HERO.tone}`}>
            {R_HERO.image ? <img src={R_HERO.image} alt={R_HERO.title} /> : null}
            <div className="rs-poster__shade" aria-hidden="true" />
          </div>
        </div>
      </section>

      <main className="rs-main">
        <section className="rs-section">
          <RowHead id="trending" title={R_TRENDING.title} />
          <Carousel items={R_TRENDING.items} variant="ranked" />
        </section>

        <section className="rs-section">
          <RowHead title={R_NEW.title} />
          <Carousel items={R_NEW.items} />
        </section>

        <section className="rs-section">
          <RowHead title={R_RECOMMENDED.title} />
          <Carousel items={R_RECOMMENDED.items} />
        </section>

        <FeaturedBanner data={FEATURED} />

        <section className="rs-section">
          <RowHead title={R_GUILTY.title} />
          <Carousel items={R_GUILTY.items} />
        </section>

        {/* Browse-more promos */}
        <section className="rs-browse" aria-label="Browse by genre">
          {R_BROWSE.map((p) => (
            <article key={p.id} className={`rs-promo rs-tone-${p.tone}`}>
              <div className="rs-promo__shade" aria-hidden="true" />
              <h3 className="rs-promo__title">{p.title}</h3>
              <p className="rs-promo__body">{p.body}</p>
              <Link className="rs-btn rs-btn--accent" to="/realistic">{p.cta}</Link>
            </article>
          ))}
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
