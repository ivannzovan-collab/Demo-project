import React from 'react';
import { useRS } from '../../hooks/useRS';
import { getAllSeries, getCopy } from '../../content';
import I from '../common/icons';

/* Full-screen search. Matches title/genre; a result opens the reader (books)
   or the series trailer modal (everything else). */
export default function SearchOverlay({ onClose }) {
  const { go, openSeries } = useRS();
  const copy = getCopy().search;
  const [q, setQ] = React.useState('');
  const inp = React.useRef(null);
  React.useEffect(() => {
    inp.current && inp.current.focus();
    const esc = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', esc); return () => window.removeEventListener('keydown', esc);
  }, []);
  const ql = q.trim().toLowerCase();
  const all = getAllSeries();
  const results = ql
    ? all.filter((t) => t.title.toLowerCase().includes(ql) || (t.genres || []).some((g) => g.toLowerCase().includes(ql))).slice(0, 7)
    : all.filter((t) => t.hot || t.rank).slice(0, 5);
  const open = (t) => { onClose(); if (t.type === 'books') go('book', { id: t.id }); else openSeries(t.id); };
  return (
    <div className="search-wrap" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="search-box">
        <div className="search-input">
          <I.search s={24} /><input ref={inp} value={q} onChange={(e) => setQ(e.target.value)} placeholder={copy.placeholder} />
          <button className="nav-icon-btn" onClick={onClose}><I.close /></button>
        </div>
        <div className="search-results">
          {!ql && <div className="search-hint" style={{ textAlign: 'left', padding: '8px 14px', textTransform: 'uppercase', letterSpacing: '.1em', fontWeight: 700, color: 'var(--rs-muted)' }}>{copy.trending}</div>}
          {results.map((t) => (
            <div key={t.id} className="search-res" onClick={() => open(t)}>
              <div className="sr-thumb">{t.image ? <img src={t.image} alt="" /> : <div style={{ width: '100%', height: '100%', background: `linear-gradient(165deg,${t.tint || '#1b2950'},#0a1228)` }} />}</div>
              <div style={{ flex: 1 }}>
                <span className="sr-type">{t.type === 'books' ? copy.typeLabels.books : t.type === 'animated' ? copy.typeLabels.animated : copy.typeLabels.realistic}</span>
                <div style={{ fontWeight: 700, fontSize: 15 }}>{t.title}</div>
                <div style={{ color: 'var(--rs-muted)', fontSize: 13, marginTop: 3 }}>{(t.genres || []).join(' · ')}</div>
              </div>
              <I.chevR s={18} />
            </div>
          ))}
          {ql && results.length === 0 && <div className="search-hint">{copy.empty} “{q}”. {copy.emptyHint}</div>}
        </div>
        <div className="search-hint">Press <kbd>Esc</kbd> to close</div>
      </div>
    </div>
  );
}
