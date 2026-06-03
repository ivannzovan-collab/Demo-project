import React from 'react';

/* Returns whether `ref`'s element should currently be playing its trailer.
     desktop (hover-capable) → play on hover, stop on leave
     mobile  (touch/coarse)  → play ~1s after scrolling into view, stop on leave */
export function useTrailerActive(ref, enabled) {
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
