import React from 'react';
import { useRS, I } from './components.jsx';
import { RS_GET } from './data.js';
import { trailerUrl } from './trailer.jsx';
/* global React, useRS, I, RS_GET */
/* ReelSaga — series preview overlay (click a poster → this opens) */
const { useEffect: smE, useState: smS, useRef: smR } = React;

function SeriesOverlay({ id, onClose }) {
  const { toast } = useRS();
  const t = RS_GET(id);
  const videoRef = smR(null);
  const [playing, setPlaying] = smS(false);
  const [muted, setMuted] = smS(true);
  const [prog, setProg] = smS(0);
  const [ended, setEnded] = smS(false);
  const hasTrailer = !!(t && t.video);

  smE(() => {
    const esc = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', esc);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', esc); document.body.style.overflow = ''; };
  }, [id]);

  // Autoplay the trailer (muted, once) when the overlay opens for a series that has one.
  smE(() => {
    const v = videoRef.current;
    if (!v || !hasTrailer) return;
    setEnded(false);
    v.muted = true; setMuted(true);
    const p = v.play(); if (p && p.catch) p.catch(() => {});
  }, [id, hasTrailer]);

  if (!t) return null;

  const poster = t.image || t.titleArt || null;
  const tintBg = `radial-gradient(120% 80% at 70% 8%, ${t.glow||'#3a4a7a'}aa, ${t.glow||'#3a4a7a'}11 46%, transparent 66%), linear-gradient(160deg, ${t.tint||'#1b2950'} 0%, #0a1228 94%)`;
  const synopsis = t.synopsis || t.tagline || 'A new ReelSaga original. Tap play to watch the first scene, then continue in the app.';
  const watch = () => toast('Download the app to keep watching');

  const togglePlay = () => {
    const v = videoRef.current; if (!v) return;
    if (v.paused) { const p = v.play(); if (p && p.catch) p.catch(() => {}); }
    else { v.pause(); }
  };
  const restart = () => {
    const v = videoRef.current; if (!v) return;
    v.currentTime = 0; setEnded(false);
    const p = v.play(); if (p && p.catch) p.catch(() => {});
  };
  const toggleMute = () => {
    const v = videoRef.current; if (!v) return;
    v.muted = !v.muted; setMuted(v.muted);
  };

  return (
    <div className="series-back" onMouseDown={(e)=> e.target===e.currentTarget && onClose()}>
      <button className="series-close" onClick={onClose} aria-label="Close">
        <svg viewBox="0 0 61 61" width="61" height="61" fill="none">
          <circle cx="30.5" cy="30.5" r="29" stroke="currentColor" strokeWidth="2"/>
          <path d="M22 22 L39 39 M39 22 L22 39" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>

      <div className="series-modal">
        {/* left: vertical player */}
        <div className="series-player" onClick={hasTrailer ? (ended ? restart : togglePlay) : watch}>
          {hasTrailer
            ? <video ref={videoRef} className="series-video" src={trailerUrl(t.video)} playsInline
                poster={poster || undefined}
                onPlay={()=>{ setPlaying(true); setEnded(false); }} onPause={()=>setPlaying(false)}
                onEnded={()=>{ setPlaying(false); setEnded(true); }}
                onTimeUpdate={(e)=>{ const v=e.currentTarget; setProg(v.duration ? v.currentTime/v.duration : 0); }} />
            : (poster ? <img src={poster} alt={t.title}/> : <div className="sp-art" style={{background:tintBg}}/>)}
          <div className="sp-shade"/>
          <button className={`series-play ${hasTrailer && playing ? 'is-hidden' : ''} ${ended ? 'series-play--replay' : ''}`}
            onClick={(e)=>{ e.stopPropagation(); if (!hasTrailer) return watch(); ended ? restart() : togglePlay(); }}
            aria-label={ended ? 'Replay' : (playing ? 'Pause' : 'Play')}>
            {ended ? <I.replay s={34}/> : <I.play s={34}/>}
            <img key={ended ? 'replay' : 'play'} className="series-play-png" alt=""
              src={ended ? '/assets/fig/replay-btn.png' : '/assets/fig/play-btn.png'}
              onError={(e)=>{ e.currentTarget.style.display = 'none'; }} />
          </button>
          {hasTrailer && (
            <button className="series-mute" onClick={(e)=>{ e.stopPropagation(); toggleMute(); }}
              aria-label={muted ? 'Unmute' : 'Mute'}>
              {muted ? <I.volumeX s={20}/> : <I.volume s={20}/>}
            </button>
          )}
          <div className="series-progress"><i style={hasTrailer ? { width:`${prog*100}%` } : undefined}/></div>
        </div>

        {/* right: info */}
        <div className="series-info">
          <h2>{t.title}</h2>
          <div className="series-genres">
            {(t.genres||[]).map(g => <span key={g} className="sg-chip">{g}</span>)}
          </div>
          <p className="series-syn">{synopsis}</p>
          <div className="series-foot">
            <div className="series-cont">Download the app to continue watching</div>
            <button className="series-watchmore" onClick={watch}>
              Watch more
              <svg width="23" height="20" viewBox="0 0 23 20" fill="none"><path d="M17.2569 14.1873L21.8618 9.7684L12.6519 0.930664V5.95413H10.2332C5.1166 5.95413 0.930298 10.1404 0.930298 15.257V18.327C0.930298 18.6061 1.20938 18.8851 1.48847 18.8851H1.5815C1.76756 18.8851 1.95362 18.6991 2.04664 18.513C2.2327 15.8152 4.46539 13.7686 7.16323 13.7686H12.6519V18.6061L14.9544 16.3967" stroke="#03162A" strokeWidth="1.86058" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { SeriesOverlay };
