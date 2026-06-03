import React from 'react';
import { useRS, RSCtx } from '../hooks/useRS';
import { getBooksPage, getSeriesByIds } from '../content';
import CategoryHero from '../components/sections/CategoryHero';
import Spotlight from '../components/sections/Spotlight';
import PosterRail from '../components/sections/PosterRail';
import RankedRail from '../components/sections/RankedRail';
import SectionHeading from '../components/common/SectionHeading';
import PageFooter from '../components/layout/PageFooter';

function BooksPageInner() {
  const bp = getBooksPage();
  const hero = getSeriesByIds(bp.hero);
  return (
    <div className="page fh cat-page">
      <CategoryHero type="books" featured={hero} />

      <section className="fh-sec"><div className="fhw">
        <div className="fh-sep" />
        <Spotlight seriesIds={bp.spotlight} />
        <div className="fh-sep" style={{ marginTop: 40 }} />
      </div></section>

      <section className="fh-sec"><div className="fhw">
        <SectionHeading word={bp.sections.newReleases} sep={false} />
        <PosterRail seriesIds={bp.newReleases} />
        <div className="fh-sep" style={{ marginTop: 34 }} />
      </div></section>

      <section className="fh-sec"><div className="fhw">
        <SectionHeading word={bp.sections.trending} sep={false} />
        <RankedRail seriesIds={bp.trending} />
        <div className="fh-sep" style={{ marginTop: 34 }} />
      </div></section>

      <section className="fh-sec" style={{ paddingBottom: 30 }}><div className="fhw">
        <SectionHeading word={bp.sections.more} sep={false} />
        <PosterRail seriesIds={bp.more} />
      </div></section>

      <PageFooter />
    </div>
  );
}

/* Books page. Overrides the context so that on this tab every cover reads as a
   book (asBook) and opening one routes to the reader instead of the trailer. */
export default function BooksPage() {
  const ctx = useRS();
  React.useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <RSCtx.Provider value={{ ...ctx, asBook: true, openSeries: (id) => ctx.go('book', { id }) }}>
      <BooksPageInner />
    </RSCtx.Provider>
  );
}
