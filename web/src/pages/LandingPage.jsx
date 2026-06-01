import { Link } from 'react-router-dom';
import {
  PlayIcon,
  StarIcon,
  Poster,
  Carousel,
  SectionHead,
  FeaturedBanner,
  SiteNav,
  SiteFooter,
} from '../components/reelsaga';
import {
  HERO,
  HERO_PREVIEWS,
  ORIGINALS,
  FEATURED,
  MUST_WATCH,
  REVIEWS,
  FOOTER_CTA,
} from '../data/landingData';
import '../styles/reelsaga.css';

export default function LandingPage() {
  return (
    <div className="rs-landing" id="top">
      <SiteNav active="Home" />

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

        <FeaturedBanner data={FEATURED} />

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

      <SiteFooter />
    </div>
  );
}
