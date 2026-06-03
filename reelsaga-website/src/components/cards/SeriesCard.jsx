import React from 'react';
import { useRS } from '../../hooks/useRS';
import { getSeries, getCopy } from '../../content';
import { useTrailerActive } from '../../hooks/useTrailerActive';
import CardTrailer from '../series/CardTrailer';

/* Home/category poster card. Pass only an `id`; the card hydrates itself
   from the content layer (and renders nothing for an unknown id). */
export default function SeriesCard({ id, mw, rank }) {
  const { openSeries } = useRS();
  const cardRef = React.useRef(null);
  const t = getSeries(id);
  const trailerActive = useTrailerActive(cardRef, !!(t && t.video));
  if (!t) return null;
  return (
    <div ref={cardRef} className={`fh-card ${mw ? 'mw' : ''}`} onClick={() => openSeries(t.id)} role="button" tabIndex={0}>
      {t.image
        ? <img className="cv" src={t.image} alt={t.title} loading="lazy" />
        : <div className="cv" style={{ background: `radial-gradient(130% 80% at 70% 8%, ${t.glow || '#3a4a7a'}aa, ${t.glow || '#3a4a7a'}11 46%, transparent 66%), linear-gradient(160deg, ${t.tint || '#1b2950'}, #0a1228 92%)` }} />}
      {t.video && <CardTrailer video={t.video} active={trailerActive} />}
      <div className="cfade" />
      {rank && <div className="crank">{rank}</div>}
      <div className="cplay">
        {t.type === 'books'
          ? <span className="cap-read">{getCopy().buttons.read}</span>
          : <img className="trailer-btn" src="/assets/fig/trailer-btn.svg" alt="Trailer" />}
      </div>
      {t.titleArt ? <img className="clogo" src={t.titleArt} alt={t.title} /> : <div className="ctitle">{t.title}</div>}
    </div>
  );
}
