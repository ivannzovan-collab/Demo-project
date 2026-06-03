import React from 'react';
import { useRS } from '../../hooks/useRS';
import { getSeries, getCopy } from '../../content';

/* Caption card (poster + title + genre below). Self-hydrates from `id`.
   On the Books tab every card reads as a book (asBook from context). */
export default function PosterCard({ id, bare }) {
  const { openSeries, asBook } = useRS();
  const t = getSeries(id);
  if (!t) return null;
  const img = t.image || t.titleArt;
  const isBook = asBook || t.type === 'books';
  return (
    <div className="cap-card" onClick={() => openSeries(t.id)} role="button" tabIndex={0}>
      <div className="cap-cover">
        {img ? <img src={img} alt={t.title} /> : <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(160deg,${t.tint || '#1b2950'},#0a1228)` }} />}
        <div className="cap-play" style={{ padding: "0px 0px 24px" }}>{isBook ? <span className="cap-read">{getCopy().buttons.read}</span> : <img className="trailer-btn" src="/assets/fig/trailer-btn.svg" alt="Trailer" />}</div>
      </div>
      {!bare && <div className="cap-title">{t.title}</div>}
      {!bare && <div className="cap-genre">{(t.genres || []).slice(0, 2).join(' | ')}</div>}
    </div>
  );
}
