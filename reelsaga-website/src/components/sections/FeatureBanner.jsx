import React from 'react';
import { useRS } from '../../hooks/useRS';
import { getHome, getSeries, getCopy } from '../../content';
import { ArrowBtn } from '../common/Arrows';

/* The feature banner under the Home Originals rail (synopsis from the catalog). */
export default function FeatureBanner() {
  const { openSeries } = useRS();
  const f = getHome().feature;
  const copy = getCopy();
  const show = getSeries(f.id);
  return (
    <div className="fh-feature">
      <div className="ff-cover">
        <img className="bg" src={f.cover} alt="" />
        <img className="logo" src={f.logo} alt={f.title} />
      </div>
      <div className="ff-body">
        <h3>{f.title}</h3>
        <span className="ff-complete">{f.badge}</span>
        <p>{show ? show.synopsis : ''}</p>
        <button className="fh-btn fh-btn--yellow" onClick={() => openSeries(f.id)}>{copy.buttons.watchNow} <ArrowBtn /></button>
      </div>
    </div>
  );
}
