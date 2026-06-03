import React from 'react';
import { useRS } from '../../hooks/useRS';
import { getCopy } from '../../content';

/* A "Top genre" card: stacked covers + blurb, links to a category route.
   `covers` is a list of image URLs supplied by the page. */
export default function TopGenreCard({ title, blurb, covers, accent, bg, route }) {
  const { go } = useRS();
  const copy = getCopy();
  return (
    <div className="topg-card" onClick={() => go(route)} role="button" tabIndex={0} style={{ '--acc': accent, background: bg }}>
      <div className="topg-glow" />
      <div className="topg-stack">
        {covers.map((c, i) => <img key={i} src={c} alt="" className={`tgi tgi-${i}`} />)}
      </div>
      <div className="topg-body">
        <h4>{title}</h4>
        <p>{blurb}</p>
      </div>
      <button className="topg-more">{copy.buttons.browseMore}
        <svg className="tgm-arrow" width="26" height="12" viewBox="0 0 26 12" fill="none"><path d="M1 6H24M24 6L19 1.5M24 6L19 10.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </button>
    </div>
  );
}
