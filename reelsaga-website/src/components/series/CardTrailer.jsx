import React from 'react';
import { trailerUrl } from '../../lib/trailer';

/* Muted, looped, lazy-loaded <video> that fades in over a card's cover while
   `active`. The src is set only on first play, so trailers download on demand. */
export default function CardTrailer({ video, active }) {
  const ref = React.useRef(null);
  const loaded = React.useRef(false);
  const kind = video.kind || 'TRAILER_720';

  React.useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true; // ensure muted (React doesn't always reflect the prop to the DOM)
    if (active) {
      if (!loaded.current) {
        v.src = trailerUrl(video); // lazy: download starts only now
        loaded.current = true;
      }
      const p = v.play();
      if (p && typeof p.catch === 'function') p.catch(() => {}); // ignore autoplay rejections
    } else if (loaded.current) {
      v.pause();
    }
  }, [active]);

  return (
    <video
      ref={ref}
      className={`cv-video ${active ? 'playing' : ''}`}
      muted
      loop
      playsInline
      preload="none"
      data-video-type={video.type}
      data-video-id={video.id}
      data-video-kind={kind}
    />
  );
}
