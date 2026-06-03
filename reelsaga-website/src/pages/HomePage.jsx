import React from 'react';
import { useRS } from '../hooks/useRS';
import { getHome, getCopy } from '../content';
import Hero from '../components/sections/Hero';
import SeriesRail from '../components/sections/SeriesRail';
import FeatureBanner from '../components/sections/FeatureBanner';
import Reviews from '../components/sections/Reviews';
import Collage from '../components/sections/Collage';
import SectionHeading from '../components/common/SectionHeading';
import PageFooter from '../components/layout/PageFooter';
import { ArrowBtn } from '../components/common/Arrows';

/* Home page — pure composition; all content comes from getHome()/getCopy(). */
export default function HomePage() {
  const { toast } = useRS();
  const home = getHome();
  const copy = getCopy();
  const [originals, mustWatch] = home.rails;
  const { reviewsHeading, closing } = home;
  return (
    <div className="page fh">
      <Hero />

      <section className="fh-sec"><div className="fhw">
        <SectionHeading word={originals.kicker} seeAll={originals.seeAll} title={originals.subhead} />
        <SeriesRail seriesIds={originals.seriesIds} />
        <FeatureBanner />
      </div></section>

      <section className="fh-sec"><div className="fhw">
        <SectionHeading word={mustWatch.kicker} seeAll={mustWatch.seeAll} title={mustWatch.subhead} />
        <SeriesRail seriesIds={mustWatch.seriesIds} mw />
      </div></section>

      <section className="fh-sec" style={{ paddingBottom: 20 }}><div className="fhw">
        <SectionHeading word={reviewsHeading.kicker} title={reviewsHeading.subhead} />
        <Reviews />
      </div></section>

      <section className="fh-closing">
        <Collage />
        <div className="fh-closing-inner fhw">
          <h2>{closing.title.pre}<em>{closing.title.em}</em>{closing.title.post}</h2>
          <p>{closing.text}</p>
          <div className="fh-hbtns">
            <button className="fh-btn fh-btn--yellow" onClick={() => toast(copy.toasts.download)}>{copy.buttons.download} <ArrowBtn /></button>
          </div>
        </div>
      </section>

      <PageFooter />
    </div>
  );
}
