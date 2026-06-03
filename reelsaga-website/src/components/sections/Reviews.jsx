import React from 'react';
import { getHome } from '../../content';

/* App-store review cards. */
export default function Reviews() {
  const { reviews } = getHome();
  return (
    <div className="fh-reviews">
      {reviews.map((r, i) => (
        <div className="fh-review" key={i}>
          <div className="rstars">★★★★★</div>
          <p>{r.text}</p>
          <div className="who">
            <div className="av" style={{ background: r.c, color: r.cf }}>{r.av}</div>
            <div><div className="wn">{r.name}</div><div className="wm">{r.src}</div></div>
          </div>
        </div>
      ))}
    </div>
  );
}
