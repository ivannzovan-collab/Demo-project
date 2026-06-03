import React from 'react';
import { useRS } from '../../hooks/useRS';
import { getCopy } from '../../content';

/* A section's kicker word + optional split sub-headline ({ line1, em })
   and an optional "See all" link to a route. */
export default function SectionHeading({ word, title, sep = true, seeAll }) {
  const { go } = useRS();
  const copy = getCopy();
  return (
    <>
      {sep && <div className="fh-sep" />}
      <div className="fh-kicker-row">
        <div className="fh-kicker" style={{ fontSize: '28px' }}>{word}</div>
        {seeAll && (
          <button className="fh-seeall" onClick={() => go(seeAll)}>
            {copy.buttons.seeAll}
            <svg viewBox="0 0 82 82" width="20" height="20" fill="none"><path d="M36.2161 55.3464L49.8828 41.6797L36.2161 28.013" stroke="currentColor" strokeWidth="4.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
        )}
      </div>
      {title && (
        <div className="fh-subhead">
          <h3>{title.line1}<br /><em>{title.em}</em></h3>
          <p>{copy.blurb}</p>
        </div>
      )}
    </>
  );
}
