import React from 'react';
import PosterCard from '../cards/PosterCard';
import { RowChevron } from '../common/Arrows';

/* Horizontal carousel of caption cards, referenced by id. */
export default function PosterRail({ seriesIds }) {
  const track = React.useRef(null);
  const [scrolled, setScrolled] = React.useState(false);
  const onScroll = () => { const el = track.current; if (el) setScrolled(el.scrollLeft > 12); };
  const scroll = (d) => { const el = track.current; if (el) el.scrollBy({ left: d * el.clientWidth * 0.8, behavior: 'smooth' }); };
  return (
    <div className={`fh-row ${scrolled ? 'scrolled' : ''}`}>
      <div className="fh-track cap-track" ref={track} onScroll={onScroll}>
        {seriesIds.map((id, k) => <PosterCard key={id + '-' + k} id={id} />)}
      </div>
      <div className="fh-rowfade" />
      <button className="fh-rowarrow prev" onClick={() => scroll(-1)} aria-label="Previous"><RowChevron dir="prev" /></button>
      <button className="fh-rowarrow next" onClick={() => scroll(1)} aria-label="Next"><RowChevron dir="next" /></button>
    </div>
  );
}
