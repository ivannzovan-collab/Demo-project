import React from 'react';
import SeriesCard from '../cards/SeriesCard';
import { RowChevron } from '../common/Arrows';

/* Horizontal carousel of SeriesCards, referenced by id. */
export default function SeriesRail({ seriesIds, mw }) {
  const track = React.useRef(null);
  const [scrolled, setScrolled] = React.useState(false);
  const onScroll = () => { const el = track.current; if (el) setScrolled(el.scrollLeft > 12); };
  const scroll = (delta) => { const el = track.current; if (el) el.scrollBy({ left: delta * el.clientWidth * 0.8, behavior: 'smooth' }); };
  return (
    <div className={`fh-row ${scrolled ? 'scrolled' : ''}`}>
      <div className="fh-track" ref={track} onScroll={onScroll}>
        {seriesIds.map((id, k) => <SeriesCard key={id + '-' + k} id={id} mw={mw} />)}
      </div>
      <div className="fh-rowfade" />
      <button className="fh-rowarrow prev" onClick={() => scroll(-1)} aria-label="Previous"><RowChevron dir="prev" /></button>
      <button className="fh-rowarrow next" onClick={() => scroll(1)} aria-label="Next"><RowChevron dir="next" /></button>
    </div>
  );
}
