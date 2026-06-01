import React from 'react';

/* ============================================================
   ReelSaga — hover/scroll trailer previews.

   Videos live in S3 at:
     https://ngs-video-prod.s3.us-east-1.amazonaws.com/trailers/{type}/{id}/{kind}.mp4
       type : 'Anime' | 'Shorts'
       id   : the show's numeric id
       kind : 'TRAILER_720' | 'TEASER_720'

   A show opts in by adding a `video: { type, id, kind }` field in data.js —
   no JS changes needed to add or swap a trailer. The descriptor is also
   mirrored onto the <video> element as data-video-* attributes.

   Behaviour:
     desktop (hover-capable) → play on hover, stop on leave
     mobile  (touch/coarse)  → play ~1s after scrolling into view, stop on leave
   All previews are muted, looped, and lazy-loaded (src is set only on first play).
   ============================================================ */

const VIDEO_BASE = 'https://ngs-video-prod.s3.us-east-1.amazonaws.com/trailers';

function trailerUrl({ type, id, kind = 'TRAILER_720' }) {
  return `${VIDEO_BASE}/${type}/${id}/${kind}.mp4`;
}

// Returns whether `ref`'s element should currently be playing its trailer.
function useTrailerActive(ref, enabled) {
  const [active, setActive] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el || !enabled) return undefined;

    const coarse = window.matchMedia('(hover: none), (pointer: coarse)').matches;

    if (!coarse) {
      // Desktop: hover to play.
      const on = () => setActive(true);
      const off = () => setActive(false);
      el.addEventListener('mouseenter', on);
      el.addEventListener('mouseleave', off);
      return () => {
        el.removeEventListener('mouseenter', on);
        el.removeEventListener('mouseleave', off);
      };
    }

    // Mobile: autoplay ~1s after the card scrolls into view.
    let timer = 0;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            timer = window.setTimeout(() => setActive(true), 1000);
          } else {
            window.clearTimeout(timer);
            setActive(false);
          }
        });
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => {
      window.clearTimeout(timer);
      io.disconnect();
    };
  }, [ref, enabled]);
  return active;
}

// Muted, looped, lazy-loaded <video> that fades in over a card's cover.
function CardTrailer({ video, active }) {
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

export { CardTrailer, useTrailerActive, trailerUrl };
