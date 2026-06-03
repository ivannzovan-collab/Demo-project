import React from 'react';
import PosterCard from '../cards/PosterCard';
import { RowChevron } from '../common/Arrows';

/* Numbered carousel (Top-10 style) of caption cards, referenced by id. */
export default function RankedRail({ seriesIds }) {
  const track = React.useRef(null);
  const [scrolled, setScrolled] = React.useState(false);
  const onScroll = () => { const el = track.current; if (el) setScrolled(el.scrollLeft > 12); };
  const scroll = (d) => { const el = track.current; if (el) el.scrollBy({ left: d * el.clientWidth * 0.8, behavior: 'smooth' }); };
  return (
    <div className={`fh-row ${scrolled ? 'scrolled' : ''}`}>
      <div className="fh-track rank-track" ref={track} onScroll={onScroll}>
        {seriesIds.map((id, k) => (
          <div className={`rank-cap ${k === 0 ? 'first' : ''}`} key={id + '-' + k}>
            <img className="rank-num" src={`/assets/fig/num-${k + 1}.png`} alt={`${k + 1}`} style={{ width: "117px", height: "152px" }} />
            <PosterCard id={id} bare />
          </div>
        ))}
      </div>
      <div className="fh-rowfade" />
      <button className="fh-rowarrow prev" onClick={() => scroll(-1)} aria-label="Previous"><RowChevron dir="prev" /></button>
      <button className="fh-rowarrow next" onClick={() => scroll(1)} aria-label="Next"><RowChevron dir="next" /></button>
    </div>
  );
}
