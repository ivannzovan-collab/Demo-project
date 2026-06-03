import React from 'react';

/* Inline SVG icon set. Each icon takes { s } (size) and passes through props;
   some take { f } (fill). Referenced as I.play, I.search, etc. */
const I = {
  play:   (p) => <svg viewBox="0 0 24 24" width={p.s||20} height={p.s||20} fill={p.f||'currentColor'} {...p}><path d="M6 4l14 8-14 8z"/></svg>,
  replay: (p) => <svg viewBox="0 0 24 24" width={p.s||22} height={p.s||22} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>,
  arrowUR:(p) => <svg viewBox="0 0 24 24" width={p.s||20} height={p.s||20} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M9 7h8v8"/></svg>,
  chevR:  (p) => <svg viewBox="0 0 24 24" width={p.s||18} height={p.s||18} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6"/></svg>,
  chevL:  (p) => <svg viewBox="0 0 24 24" width={p.s||18} height={p.s||18} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M15 6l-6 6 6 6"/></svg>,
  search: (p) => <svg viewBox="0 0 24 24" width={p.s||20} height={p.s||20} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4-4"/></svg>,
  heart:  (p) => <svg viewBox="0 0 24 24" width={p.s||20} height={p.s||20} fill={p.f||'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21C5 14.5 3 11 3 8a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 3-2 6.5-9 13z"/></svg>,
  bookmark:(p)=> <svg viewBox="0 0 24 24" width={p.s||20} height={p.s||20} fill={p.f||'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 3h14v18l-7-5-7 5z"/></svg>,
  sparkle:(p) => <svg viewBox="0 0 24 24" width={p.s||18} height={p.s||18} fill="currentColor"><path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8z"/></svg>,
  close:  (p) => <svg viewBox="0 0 24 24" width={p.s||20} height={p.s||20} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg>,
  menu:   (p) => <svg viewBox="0 0 24 24" width={p.s||22} height={p.s||22} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>,
  check:  (p) => <svg viewBox="0 0 24 24" width={p.s||18} height={p.s||18} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12l5 5L20 6"/></svg>,
  book:   (p) => <svg viewBox="0 0 24 24" width={p.s||20} height={p.s||20} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M19 3v18"/></svg>,
  film:   (p) => <svg viewBox="0 0 24 24" width={p.s||20} height={p.s||20} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M8 4v16M16 4v16M3 9h5M16 9h5M3 15h5M16 15h5"/></svg>,
  volume: (p) => <svg viewBox="0 0 24 24" width={p.s||18} height={p.s||18} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5 6 9H3v6h3l5 4z"/><path d="M16 9a4 4 0 0 1 0 6"/><path d="M19 6a8 8 0 0 1 0 12"/></svg>,
  volumeX:(p) => <svg viewBox="0 0 24 24" width={p.s||18} height={p.s||18} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5 6 9H3v6h3l5 4z"/><path d="M22 9l-6 6M16 9l6 6"/></svg>,
  apple:  (p) => <svg viewBox="0 0 24 24" width={p.s||22} height={p.s||22} fill="currentColor"><path d="M16.4 12.8c0-2 1.6-3 1.7-3a3.7 3.7 0 0 0-2.9-1.6c-1.2-.1-2.4.7-3 .7s-1.6-.7-2.6-.7A4 4 0 0 0 6.2 10c-1.5 2.5-.4 6.3 1 8.4.7 1 1.5 2.2 2.6 2.1 1-.04 1.4-.66 2.6-.66s1.6.66 2.6.64c1.1-.02 1.8-1 2.5-2a9 9 0 0 0 1.1-2.3c-.03-.01-2.2-.86-2.2-3.4zM14.6 6.6A3.6 3.6 0 0 0 15.4 4a3.7 3.7 0 0 0-2.4 1.2 3.4 3.4 0 0 0-.86 2.5 3 3 0 0 0 2.5-1.1z"/></svg>,
  gplay:  (p) => <svg viewBox="0 0 24 24" width={p.s||20} height={p.s||20}><path d="M3.6 2.3 13 12 3.6 21.7c-.4-.2-.6-.6-.6-1.1V3.4c0-.5.2-.9.6-1.1z" fill="#34d399"/><path d="m16.3 8.9 3.9 2.2c.8.5.8 1.3 0 1.8l-3.9 2.2L13 12z" fill="#fbbf24"/><path d="M3.6 2.3c.3-.2.7-.2 1.1 0L16.3 8.9 13 12z" fill="#60a5fa"/><path d="M13 12l3.3 3.1L4.7 21.7c-.4.2-.8.2-1.1 0z" fill="#f87171"/></svg>,
  google: (p) => <svg viewBox="0 0 24 24" width={p.s||18} height={p.s||18}><path fill="#4285F4" d="M22 12.2c0-.7-.1-1.4-.2-2H12v3.8h5.6a4.8 4.8 0 0 1-2 3.2v2.6h3.3c1.9-1.8 3-4.4 3-7.6z"/><path fill="#34A853" d="M12 22c2.7 0 5-.9 6.7-2.4l-3.3-2.6c-.9.6-2.1 1-3.4 1-2.6 0-4.7-1.7-5.5-4.1H3.1v2.6A10 10 0 0 0 12 22z"/><path fill="#FBBC05" d="M6.5 13.9c-.2-.6-.3-1.2-.3-1.9s.1-1.3.3-1.9V7.5H3.1A10 10 0 0 0 2 12c0 1.6.4 3.1 1.1 4.5z"/><path fill="#EA4335" d="M12 6c1.5 0 2.8.5 3.8 1.5l2.9-2.9A10 10 0 0 0 3.1 7.5l3.4 2.6C7.3 7.7 9.4 6 12 6z"/></svg>,
};

export { I };
export default I;
