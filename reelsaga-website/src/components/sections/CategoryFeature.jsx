import React from 'react';
import { useRS } from '../../hooks/useRS';
import { getSeries, getCopy } from '../../content';
import { ArrowBtn } from '../common/Arrows';

/* Feature banner with the artwork on the right (Recommended section). */
export default function CategoryFeature({ id, cover, logo, title, badge }) {
  const { openSeries } = useRS();
  const copy = getCopy();
  const t = getSeries(id);
  return (
    <div className="fh-feature fh-feature--rev">
      <div className="ff-body">
        <h3>{title}</h3>
        <span className="ff-complete">{badge || copy.reader.statusComplete}</span>
        <p>{t ? t.synopsis || t.tagline : ''}</p>
        <button className="fh-btn fh-btn--yellow" onClick={() => openSeries(id)}>{copy.buttons.watchNow} <ArrowBtn /></button>
      </div>
      <div className="ff-cover ff-cover--right">
        <img className="bg" src={cover} alt="" />
        {logo && <img className="logo" src={logo} alt={title} />}
      </div>
    </div>
  );
}
