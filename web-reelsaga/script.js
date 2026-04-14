// Tiny progressive enhancements for the ReelSaga landing page.

(() => {
  // Pause marquee on hover (keyboard friendly).
  const marquees = document.querySelectorAll(".marquee__track");
  marquees.forEach((track) => {
    const parent = track.parentElement;
    const pause = () => (track.style.animationPlayState = "paused");
    const play = () => (track.style.animationPlayState = "running");
    parent.addEventListener("mouseenter", pause);
    parent.addEventListener("mouseleave", play);
    parent.addEventListener("focusin", pause);
    parent.addEventListener("focusout", play);
  });

  // Subtle parallax tilt for the hero phone stack.
  const stage = document.querySelector(".hero__stage");
  if (stage && matchMedia("(hover: hover)").matches) {
    const phones = stage.querySelectorAll(".phone");
    const base = new WeakMap();
    phones.forEach((el) => {
      const style = getComputedStyle(el);
      const match = /rotate\(([-0-9.]+)deg\)/.exec(style.transform || "");
      base.set(el, match ? parseFloat(match[1]) : 0);
    });
    stage.addEventListener("pointermove", (e) => {
      const rect = stage.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      phones.forEach((el, i) => {
        const r = base.get(el) ?? 0;
        const depth = i === 2 ? 10 : 6;
        el.style.transform = `rotate(${r}deg) translate(${x * depth}px, ${
          y * depth
        }px)`;
      });
    });
    stage.addEventListener("pointerleave", () => {
      phones.forEach((el) => {
        const r = base.get(el) ?? 0;
        el.style.transform = `rotate(${r}deg)`;
      });
    });
  }

  // Reveal sections on scroll.
  const revealables = document.querySelectorAll(
    ".originals__head, .card, .download__frame"
  );
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animation = "rise 0.8s ease both";
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealables.forEach((el) => io.observe(el));

  // Shrink nav subtly once user scrolls.
  const nav = document.querySelector(".nav");
  if (nav) {
    const onScroll = () => {
      nav.style.paddingBlock = window.scrollY > 30 ? "12px" : "20px";
      nav.style.borderBottomColor =
        window.scrollY > 30
          ? "rgba(245,235,214,0.12)"
          : "rgba(245,235,214,0.06)";
    };
    document.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }
})();
