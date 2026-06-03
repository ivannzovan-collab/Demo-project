import React from 'react';
import { getCategories, getSeriesByCategory, getSeriesByIds, getAllSeries } from '../content';
import CategoryHero from '../components/sections/CategoryHero';
import SeriesRail from '../components/sections/SeriesRail';
import PosterRail from '../components/sections/PosterRail';
import CategoryFeature from '../components/sections/CategoryFeature';
import TopGenreCard from '../components/sections/TopGenreCard';
import SectionHeading from '../components/common/SectionHeading';
import PageFooter from '../components/layout/PageFooter';

/* Realistic / Animated category page. Animated mirrors the Realistic curation.
   Pure composition: section ids come from the data, cards self-hydrate. */
export default function CategoryPage({ type }) {
  React.useEffect(() => { window.scrollTo(0, 0); }, [type]);

  const cats = getCategories();
  const srcType = type === 'animated' ? 'realistic' : type;
  const all = getSeriesByCategory(srcType);
  const pool = all.length >= 6 ? all : getAllSeries();
  const isReal = srcType === 'realistic';

  const dedupeIds = (list) => list.filter((v, i, a) => a.indexOf(v) === i).slice(0, 8).map((t) => t.id);
  const featuredAuto = pool.filter((t) => t.hot || t.rank).slice(0, 3);
  const featured = isReal ? getSeriesByIds(cats.realistic.hero) : (featuredAuto.length ? featuredAuto : pool.slice(0, 3));
  const trendingIds = isReal ? cats.realistic.trending : dedupeIds([...pool].filter((t) => t.rank || t.hot).concat(pool));
  const freshIds = dedupeIds(pool.filter((t) => t.new).concat(pool));
  const recIds = [...pool].reverse().slice(0, 8).map((t) => t.id);
  const guiltyIds = dedupeIds(pool.filter((t) => (t.genres || []).some((g) => ['Steamy', 'Romance', 'Billionaire', 'Billionaires'].includes(g))).concat(pool));

  const stack = (ids) => getSeriesByIds(ids).map((t) => t.image || t.titleArt).filter(Boolean);
  const { sections, feature, topGenres } = cats;

  return (
    <div className="page fh cat-page">
      <CategoryHero type={type} featured={featured.length ? featured : pool.slice(0, 3)} />

      <section className="fh-sec"><div className="fhw">
        <div className="fh-sep" />
        <SectionHeading word={sections.trending} sep={false} />
        <div className="trending-glow"><SeriesRail seriesIds={trendingIds} /></div>
        <div className="fh-sep" style={{ marginTop: 34 }} />
      </div></section>

      <section className="fh-sec"><div className="fhw">
        <SectionHeading word={sections.newReleases} sep={false} />
        <PosterRail seriesIds={freshIds} />
        <div className="fh-sep" style={{ marginTop: 34 }} />
      </div></section>

      <section className="fh-sec"><div className="fhw">
        <SectionHeading word={sections.recommended} sep={false} />
        <PosterRail seriesIds={recIds} />
        <CategoryFeature id={feature.id} cover={feature.cover} logo={feature.logo} title={feature.title} />
        <div className="fh-sep" style={{ marginTop: 40 }} />
      </div></section>

      <section className="fh-sec"><div className="fhw">
        <SectionHeading word={sections.guilty} sep={false} />
        <PosterRail seriesIds={guiltyIds} />
        <div className="fh-sep" style={{ marginTop: 34 }} />
      </div></section>

      <section className="fh-sec" style={{ paddingBottom: 30 }}><div className="fhw">
        <div className="topg-grid">
          {topGenres.map((g) => (
            <TopGenreCard key={g.title} route={g.route} title={g.title} accent={g.accent} bg={g.bg} blurb={g.blurb} covers={stack(g.covers)} />
          ))}
        </div>
      </div></section>

      <PageFooter />
    </div>
  );
}
