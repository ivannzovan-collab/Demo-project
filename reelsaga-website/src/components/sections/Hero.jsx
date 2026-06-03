import React from 'react';
import { useRS } from '../../hooks/useRS';
import { getHome, getCopy } from '../../content';
import { SideArrow, ArrowBtn } from '../common/Arrows';
import Collage from './Collage';

/* Home hero: rotating headline + browse CTA + fanned-out covers. */
export default function Hero() {
  const { go, toast } = useRS();
  const { heroSlides: slides, heroCollage } = getHome();
  const copy = getCopy();
  const [index, setIndex] = React.useState(0);
  const timer = React.useRef(0);

  React.useEffect(() => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setIndex((v) => (v + 1) % slides.length), 6500);
    return () => clearTimeout(timer.current);
  }, [index, slides.length]);

  const move = (delta) => setIndex((v) => (v + delta + slides.length) % slides.length);
  const slide = slides[index];

  return (
    <section className="fh-hero">
      <Collage src={heroCollage} />
      <div className="fhw">
        <div className="fh-hero-grid">
          <button className="fh-side prev" onClick={() => move(-1)} aria-label="Previous"><SideArrow dir="prev" /></button>
          <div className="fh-hcopy">
            <div className="fh-hslide" key={index}>
              <h1 className="fh-h1">{slide.head[0]}<em>{slide.head[1]}</em>{slide.head[2]}</h1>
              <p className="fh-hsub">{copy.blurb}</p>
            </div>
            <div className="fh-hbtns">
              <button className="fh-btn fh-btn--yellow" onClick={() => toast(copy.toasts.download)}>{copy.buttons.download} <ArrowBtn /></button>
              <button className="fh-btn fh-btn--ghost" onClick={() => go(slide.browse[1])}>{slide.browse[0]}</button>
            </div>
            <div className="fh-dots">
              {slides.map((_, k) => <button key={k} className={k === index ? 'on' : ''} onClick={() => setIndex(k)} aria-label={`Slide ${k + 1}`} />)}
            </div>
          </div>
          <div className="fh-fan swap" key={'fan' + index}>
            <div className="fan-glow" />
            {slide.fan.map((cover, k) => <div key={k} className="pslice" style={{ animationDelay: `${k * 0.16}s` }}><img src={cover} alt="" /></div>)}
          </div>
          <button className="fh-side next" onClick={() => move(1)} aria-label="Next"><SideArrow dir="next" /></button>
        </div>
      </div>
    </section>
  );
}
