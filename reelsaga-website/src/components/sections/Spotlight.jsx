import React from 'react';
import { useRS } from '../../hooks/useRS';
import { getSeriesByIds } from '../../content';
import { RowChevron } from '../common/Arrows';

/* Coverflow under the Books hero. The centered cover is zoomed (.feat); the
   covers either side shrink (.mid / .peek). The white arrows — or a click on a
   side cover — scroll it along (wrapping past either end), which zooms the new
   centre in and the old one out. flex `order` keeps the centre cover centred. */
export default function Spotlight({ seriesIds }) {
  const { openSeries } = useRS();
  const items = getSeriesByIds(seriesIds);
  const n = items.length;
  const [center, setCenter] = React.useState(Math.min(2, n - 1));
  const move = (d) => setCenter((c) => (c + d + n) % n);
  return (
    <div className="spot-rel">
      <div className="spot-glow" />
      <button className="fh-rowarrow prev" onClick={() => move(-1)} aria-label="Previous"><RowChevron dir="prev" /></button>
      <div className="spot-stage">
        {items.map((t, k) => {
          let dist = k - center;
          if (dist > n / 2) dist -= n;
          else if (dist < -n / 2) dist += n;
          if (Math.abs(dist) > 2) return null;
          const cls = dist === 0 ? 'feat' : Math.abs(dist) === 1 ? 'mid' : 'peek';
          const img = t.image || t.titleArt;
          return (
            <div key={t.id + '-' + k} className={`spot-card ${cls}`} style={{ order: dist + 2 }} onClick={() => (dist === 0 ? openSeries(t.id) : setCenter(k))}>
              {img ? <img src={img} alt={t.title} /> : <div className="spot-art" style={{ background: `linear-gradient(160deg,${t.tint || '#1b2950'},#0a1228)` }} />}
              {!img && <div className="spot-name">{t.title}</div>}
            </div>);
        })}
      </div>
      <button className="fh-rowarrow next" onClick={() => move(1)} aria-label="Next"><RowChevron dir="next" /></button>
    </div>
  );
}
