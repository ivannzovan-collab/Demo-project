import React from 'react';

const FIG = '/assets/fig/';

/* Faded poster-collage backdrop used behind the hero and the closing band. */
export default function Collage({ src }) {
  return (
    <div className="fh-collage">
      <img
        className="collage-img"
        src={src || FIG + 'collage-bg.png'}
        alt=""
        onError={(e) => { if (e.currentTarget.src.indexOf('collage-bg.png') < 0) e.currentTarget.src = FIG + 'collage-bg.png'; }}
      />
    </div>
  );
}
