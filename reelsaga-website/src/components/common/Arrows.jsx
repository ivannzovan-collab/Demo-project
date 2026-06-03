import React from 'react';

/* Shared arrow glyphs used by the hero, carousels and CTA buttons. */

// The curved "download / watch" arrow inside yellow CTA buttons.
export const ArrowBtn = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="19" viewBox="0 0 23 20" fill="none" style={{ flex: 'none' }}>
    <path d="M17.2569 14.1873L21.8618 9.7684L12.6519 0.930664V5.95413H10.2332C5.1166 5.95413 0.930298 10.1404 0.930298 15.257V18.327C0.930298 18.6061 1.20938 18.8851 1.48847 18.8851H1.5815C1.76756 18.8851 1.95362 18.6991 2.04664 18.513C2.2327 15.8152 4.46539 13.7686 7.16323 13.7686H12.6519V18.6061L14.9544 16.3967" stroke="currentColor" strokeWidth="1.86058" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Hero prev/next arrows (PNG).
export const SideArrow = ({ dir }) => (
  <img className="side-arrow-img" src={dir === 'prev' ? '/assets/fig/arrow-left.png' : '/assets/fig/arrow-right.png'} alt="" width="61" height="61" />
);

// Circular carousel arrow (ring + chevron).
export const RowChevron = ({ dir }) => (
  <svg viewBox="0 0 82 82" width="82" height="82" fill="none" style={dir === 'prev' ? { transform: 'scaleX(-1)' } : undefined}>
    <circle className="ra-circle" cx="41" cy="41" r="25.965" stroke="currentColor" strokeWidth="3.075" />
    <path d="M36.2161 55.3464L49.8828 41.6797L36.2161 28.013" stroke="currentColor" strokeWidth="3.075" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
