import React from 'react';
import { useRS } from '../../hooks/useRS';
import { getAllSeries, getCopy } from '../../content';
import { SideArrow, ArrowBtn } from '../common/Arrows';

/* Category hero: a single rotating skewed poster + copy. `featured` is a list
   of catalog titles supplied by the page. */
export default function CategoryHero({ type, featured }) {
  const { toast } = useRS();
  const copy = getCopy();
  const [i, setI] = React.useState(0);
  const timer = React.useRef(0);
  const slides = featured.length ? featured : [getAllSeries()[0]];
  React.useEffect(() => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setI((v) => (v + 1) % slides.length), 6500);
    return () => clearTimeout(timer.current);
  }, [i, slides.length]);
  const move = (d) => setI((v) => (v + d + slides.length) % slides.length);
  const t = slides[i];
  const img = t.image || t.titleArt;
  const syn = t.synopsis || t.tagline || copy.blurb;
  return (
    <section className="cat-hero">
      <div className="fhw">
        <div className="cat-hero-grid">
          <button className="fh-side prev" onClick={() => move(-1)} aria-label="Previous"><SideArrow dir="prev" /></button>
          <div className="cat-hcopy" key={i}>
            <h1 className="fh-h1">{t.title}</h1>
            <p className="cat-hsub">{syn}</p>
            <div className="fh-hbtns">
              <button className="fh-btn fh-btn--yellow" onClick={() => toast(copy.toasts.download)}>{copy.buttons.download} <ArrowBtn /></button>
              <button className="fh-btn fh-btn--ghost" onClick={() => toast(type === 'books' ? `Opening ${t.title}` : `Playing the ${t.title} trailer`)}>{type === 'books' ? copy.buttons.startReading : copy.buttons.watchTrailer}</button>
            </div>
            <div className="fh-dots">{slides.map((_, k) => <button key={k} className={k === i ? 'on' : ''} onClick={() => setI(k)} aria-label={`Slide ${k + 1}`} />)}</div>
          </div>
          <div className="cat-hero-poster swap" key={'p' + i}>
            <div className="chp-glow" />
            <div className="pslice">{img ? <img src={img} alt={t.title} /> : <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(160deg,${t.tint || '#1b2950'},#0a1228)` }} />}</div>
          </div>
          <button className="fh-side next" onClick={() => move(1)} aria-label="Next"><SideArrow dir="next" /></button>
        </div>
      </div>
    </section>
  );
}
