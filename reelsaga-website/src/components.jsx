import React from 'react';
/* global React */
/* ReelSaga — shared components. Exports to window. */
const { useState, useEffect, useRef, useContext, createContext } = React;

/* ---------------- App context (routing + global UI) ---------------- */
const RSCtx = createContext({});
const useRS = () => useContext(RSCtx);

/* ---------------- Icons ---------------- */
const I = {
  play:   (p) => <svg viewBox="0 0 24 24" width={p.s||20} height={p.s||20} fill={p.f||'currentColor'} {...p}><path d="M6 4l14 8-14 8z"/></svg>,
  replay: (p) => <svg viewBox="0 0 24 24" width={p.s||22} height={p.s||22} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>,
  arrowUR:(p) => <svg viewBox="0 0 24 24" width={p.s||20} height={p.s||20} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M9 7h8v8"/></svg>,
  chevR:  (p) => <svg viewBox="0 0 24 24" width={p.s||18} height={p.s||18} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6"/></svg>,
  chevL:  (p) => <svg viewBox="0 0 24 24" width={p.s||18} height={p.s||18} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M15 6l-6 6 6 6"/></svg>,
  search: (p) => <svg viewBox="0 0 24 24" width={p.s||20} height={p.s||20} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4-4"/></svg>,
  heart:  (p) => <svg viewBox="0 0 24 24" width={p.s||20} height={p.s||20} fill={p.f||'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21C5 14.5 3 11 3 8a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 3-2 6.5-9 13z"/></svg>,
  bookmark:(p)=> <svg viewBox="0 0 24 24" width={p.s||20} height={p.s||20} fill={p.f||'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 3h14v18l-7-5-7 5z"/></svg>,
  flame:  (p) => <svg viewBox="0 0 24 24" width={p.s||18} height={p.s||18} fill="currentColor"><path d="M13 2c0 5-6 6-6 12a7 7 0 1 0 14 0c0-3-3-4-4-7 0 3-2 4-4 5z"/></svg>,
  bolt:   (p) => <svg viewBox="0 0 24 24" width={p.s||18} height={p.s||18} fill="currentColor"><path d="M13 1L3 14h7l-1 9 11-14h-7z"/></svg>,
  star:   (p) => <svg viewBox="0 0 24 24" width={p.s||18} height={p.s||18} fill="currentColor"><path d="M12 2l2.9 6 6.6.9-4.8 4.5 1.2 6.6L12 16.8 6.1 20l1.2-6.6L2.5 8.9 9.1 8z"/></svg>,
  sparkle:(p) => <svg viewBox="0 0 24 24" width={p.s||18} height={p.s||18} fill="currentColor"><path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8z"/></svg>,
  plus:   (p) => <svg viewBox="0 0 24 24" width={p.s||18} height={p.s||18} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg>,
  close:  (p) => <svg viewBox="0 0 24 24" width={p.s||20} height={p.s||20} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg>,
  menu:   (p) => <svg viewBox="0 0 24 24" width={p.s||22} height={p.s||22} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>,
  check:  (p) => <svg viewBox="0 0 24 24" width={p.s||18} height={p.s||18} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12l5 5L20 6"/></svg>,
  lock:   (p) => <svg viewBox="0 0 24 24" width={p.s||18} height={p.s||18} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>,
  clock:  (p) => <svg viewBox="0 0 24 24" width={p.s||16} height={p.s||16} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>,
  book:   (p) => <svg viewBox="0 0 24 24" width={p.s||20} height={p.s||20} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M19 3v18"/></svg>,
  film:   (p) => <svg viewBox="0 0 24 24" width={p.s||20} height={p.s||20} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M8 4v16M16 4v16M3 9h5M16 9h5M3 15h5M16 15h5"/></svg>,
  download:(p)=> <svg viewBox="0 0 24 24" width={p.s||18} height={p.s||18} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14"/></svg>,
  volume: (p) => <svg viewBox="0 0 24 24" width={p.s||18} height={p.s||18} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5 6 9H3v6h3l5 4z"/><path d="M16 9a4 4 0 0 1 0 6"/><path d="M19 6a8 8 0 0 1 0 12"/></svg>,
  volumeX:(p) => <svg viewBox="0 0 24 24" width={p.s||18} height={p.s||18} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5 6 9H3v6h3l5 4z"/><path d="M22 9l-6 6M16 9l6 6"/></svg>,
  comment:(p) => <svg viewBox="0 0 24 24" width={p.s||18} height={p.s||18} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a8 8 0 0 1-11.5 7.2L3 21l1.8-6.5A8 8 0 1 1 21 12z"/></svg>,
  share:  (p) => <svg viewBox="0 0 24 24" width={p.s||18} height={p.s||18} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 13.5 6.8 4M15.4 6.5 8.6 10.5"/></svg>,
  chevUp: (p) => <svg viewBox="0 0 24 24" width={p.s||18} height={p.s||18} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M6 15l6-6 6 6"/></svg>,
  bell:   (p) => <svg viewBox="0 0 24 24" width={p.s||18} height={p.s||18} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9a6 6 0 0 1 12 0c0 5 2 7 2 7H4s2-2 2-7z"/><path d="M10 20a2 2 0 0 0 4 0"/></svg>,
  trailerPlay: (p) => <svg viewBox="0 0 36 36" width={p.s||22} height={p.s||22} fill="none"><path d="M22.2617 10.0143C27.838 13.2101 30.6262 14.8081 30.9184 17.1521C30.9669 17.5407 30.9669 17.9338 30.9184 18.3225C30.6262 20.6665 27.838 22.2644 22.2617 25.4602C16.7389 28.6253 13.9775 30.2079 11.8149 29.2892C11.456 29.1367 11.1175 28.9405 10.8068 28.705C8.93434 27.2855 8.93434 24.1028 8.93434 17.7373C8.93434 11.3718 8.93434 8.18902 10.8068 6.7695C11.1175 6.53399 11.4561 6.33779 11.8149 6.18536C13.9775 5.26661 16.7389 6.84918 22.2617 10.0143Z" fill="#111C3A"/><path d="M21.9461 10.3318C27.5224 13.5277 30.1529 14.9153 30.4451 17.2594C30.4936 17.648 30.4936 18.0411 30.4451 18.4297C30.1529 20.7738 28.0479 21.0578 22.6293 24.4638C17.5269 27.2085 14.8706 29.0013 12.708 28.0826C12.3492 27.9302 12.0106 27.734 11.6999 27.4984C9.82746 26.0789 9.82746 22.8962 9.82746 16.5307C9.82746 10.6907 8.93403 8.71675 10.8065 7.29723C11.1172 7.06172 11.4557 6.86552 11.8145 6.71309C13.9772 5.79434 16.4233 7.1667 21.9461 10.3318Z" fill="url(#rsTrailerGrad)"/><defs><linearGradient id="rsTrailerGrad" x1="12.3764" y1="27.9088" x2="25.0684" y2="11.827" gradientUnits="userSpaceOnUse"><stop offset="0.283654" stopColor="#111C3A"/><stop offset="1" stopColor="#3D4B74"/></linearGradient></defs></svg>,
  apple:  (p) => <svg viewBox="0 0 24 24" width={p.s||22} height={p.s||22} fill="currentColor"><path d="M16.4 12.8c0-2 1.6-3 1.7-3a3.7 3.7 0 0 0-2.9-1.6c-1.2-.1-2.4.7-3 .7s-1.6-.7-2.6-.7A4 4 0 0 0 6.2 10c-1.5 2.5-.4 6.3 1 8.4.7 1 1.5 2.2 2.6 2.1 1-.04 1.4-.66 2.6-.66s1.6.66 2.6.64c1.1-.02 1.8-1 2.5-2a9 9 0 0 0 1.1-2.3c-.03-.01-2.2-.86-2.2-3.4zM14.6 6.6A3.6 3.6 0 0 0 15.4 4a3.7 3.7 0 0 0-2.4 1.2 3.4 3.4 0 0 0-.86 2.5 3 3 0 0 0 2.5-1.1z"/></svg>,
  gplay:  (p) => <svg viewBox="0 0 24 24" width={p.s||20} height={p.s||20}><path d="M3.6 2.3 13 12 3.6 21.7c-.4-.2-.6-.6-.6-1.1V3.4c0-.5.2-.9.6-1.1z" fill="#34d399"/><path d="m16.3 8.9 3.9 2.2c.8.5.8 1.3 0 1.8l-3.9 2.2L13 12z" fill="#fbbf24"/><path d="M3.6 2.3c.3-.2.7-.2 1.1 0L16.3 8.9 13 12z" fill="#60a5fa"/><path d="M13 12l3.3 3.1L4.7 21.7c-.4.2-.8.2-1.1 0z" fill="#f87171"/></svg>,
  google: (p) => <svg viewBox="0 0 24 24" width={p.s||18} height={p.s||18}><path fill="#4285F4" d="M22 12.2c0-.7-.1-1.4-.2-2H12v3.8h5.6a4.8 4.8 0 0 1-2 3.2v2.6h3.3c1.9-1.8 3-4.4 3-7.6z"/><path fill="#34A853" d="M12 22c2.7 0 5-.9 6.7-2.4l-3.3-2.6c-.9.6-2.1 1-3.4 1-2.6 0-4.7-1.7-5.5-4.1H3.1v2.6A10 10 0 0 0 12 22z"/><path fill="#FBBC05" d="M6.5 13.9c-.2-.6-.3-1.2-.3-1.9s.1-1.3.3-1.9V7.5H3.1A10 10 0 0 0 2 12c0 1.6.4 3.1 1.1 4.5z"/><path fill="#EA4335" d="M12 6c1.5 0 2.8.5 3.8 1.5l2.9-2.9A10 10 0 0 0 3.1 7.5l3.4 2.6C7.3 7.7 9.4 6 12 6z"/></svg>,
};

/* ---------------- Reveal on scroll ---------------- */
function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const items = el.matches('.reveal') ? [el] : el.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    items.forEach(i => io.observe(i));
    return () => io.disconnect();
  }, []);
  return ref;
}

/* ---------------- Brand mark ---------------- */
function BrandMark({ variant = 'yellow', onClick }) {
  return (
    <button className="brand" onClick={onClick} aria-label="ReelSaga home">
      <img className="brand-logo" src="/assets/logos/reelsaga-logo.png" alt="ReelSaga"/>
    </button>
  );
}

/* ---------------- Chips ---------------- */
function Chips({ genres, variant = 'solid', max }) {
  const list = max ? genres.slice(0, max) : genres;
  return <>{list.map(g => <span key={g} className={`chip chip--${variant}`}>{g}</span>)}</>;
}

/* ---------------- Buttons ---------------- */
function DownloadBtn({ label = 'Download the app', lg, ghost }) {
  const { toast } = useRS();
  return (
    <button className={`btn ${ghost ? 'btn--ghost' : 'btn--primary'} ${lg ? 'btn--lg' : ''}`}
      onClick={() => toast('Heading to the App Store…')}>
      {label}<I.arrowUR s={18}/>
    </button>
  );
}
function WatchBtn({ label = 'Watch free', onClick, lg }) {
  return (
    <button className={`btn btn--primary has-disc ${lg ? 'btn--lg' : ''}`} onClick={onClick}>
      <span className="play-disc"><I.play s={14} f="var(--rs-yellow)"/></span>{label}
    </button>
  );
}

/* ---------------- Poster card ---------------- */
function genreGlyph(genres) {
  const g = (genres && genres[0]) || '';
  if (['Werewolf'].includes(g)) return I.flame;
  if (['Action','Fantasy'].includes(g)) return I.bolt;
  if (['Romance','Steamy','Forbidden'].includes(g)) return I.heart;
  if (['Crime','Thriller'].includes(g)) return I.star;
  return I.sparkle;
}
function PosterCard({ t, showRank }) {
  const { openSeries } = useRS();
  const Glyph = genreGlyph(t.genres);
  return (
    <div className="poster" onClick={() => openSeries(t.id)} role="button" tabIndex={0}>
      {t.image
        ? <img className="poster-bg" src={t.image} alt={t.title} loading="lazy"/>
        : <div className="poster-art" style={{ background:`radial-gradient(130% 80% at 72% 6%, ${t.glow}cc 0%, ${t.glow}22 42%, transparent 64%), radial-gradient(90% 70% at 18% 100%, ${t.glow}66 0%, transparent 55%), linear-gradient(160deg, ${t.tint} 0%, #0a1228 92%)` }}>
            <div className="glyph" style={{ color: t.glow }}><Glyph s={150}/></div>
            {t.titleArt
              ? <img className="titleart-img" src={t.titleArt} alt={t.title}/>
              : <div className="arttitle">{t.title}</div>}
          </div>}
      <div className="pfade"/>
      {showRank && t.rank && <div className="prank">{t.rank}</div>}
      {!showRank && (t.hot || t.new) && (
        <div className="pbadge"><span className={`badge-pill ${t.hot ? 'badge-hot' : 'badge-new'}`}>{t.hot ? 'Hot' : 'New'}</span></div>
      )}
      <div className="pplay"><span className="trailer-btn"><I.trailerPlay s={26}/>Trailer</span></div>
      <div className="pbody">
        <div className="ptitle">{t.title}</div>
        <div className="pgenres"><Chips genres={t.genres} variant="mute" max={2}/></div>
      </div>
    </div>
  );
}

/* ---------------- Nav ---------------- */
const NAV_TABS = [['home','Home'],['realistic','Realistic'],['animated','Animated'],['books','Books']];
function Nav() {
  const { view, go, openSignIn, openSearch } = useRS();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on(); window.addEventListener('scroll', on, { passive:true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  useEffect(() => { setMenuOpen(false); }, [view]); // close the mobile menu on navigation
  const navTo = (k) => { setMenuOpen(false); go(k); };
  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
      <div className="wrap">
        <BrandMark variant="yellow" onClick={() => navTo('home')}/>
        <div className="nav-links">
          {NAV_TABS.map(([k,label]) => (
            <button key={k} className={`nav-link ${view===k ? 'active' : ''}`} onClick={() => go(k)}>{label}</button>
          ))}
        </div>
        <div className="nav-right">
          <button className={`nav-link ${view==='blog' ? 'active' : ''}`} onClick={() => go('blog')}>Blog</button>
          <button className="nav-link" onClick={openSignIn}>Sign in</button>
          <button className="nav-icon-btn" aria-label="Search" onClick={openSearch}><I.search s={19}/></button>
          <button className="nav-burger" aria-label="Menu" aria-expanded={menuOpen} onClick={() => setMenuOpen((o) => !o)}>
            {menuOpen ? <I.close s={22}/> : <I.menu s={22}/>}
          </button>
        </div>
      </div>
      <div className="nav-mobile">
        {NAV_TABS.map(([k,label]) => (
          <button key={k} className={`nav-mlink ${view===k ? 'active' : ''}`} onClick={() => navTo(k)}>{label}</button>
        ))}
        <button className={`nav-mlink ${view==='blog' ? 'active' : ''}`} onClick={() => navTo('blog')}>Blog</button>
        <button className="nav-mlink" onClick={() => { setMenuOpen(false); openSignIn(); }}>Sign in</button>
      </div>
    </nav>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  const { go, toast } = useRS();
  const col = (title, items) => (
    <div>
      <h5>{title}</h5>
      <div className="footer-links">
        {items.map(([label, fn]) => <a key={label} onClick={fn} style={{cursor:'pointer'}}>{label}</a>)}
      </div>
    </div>
  );
  const dl = () => toast('Heading to the App Store…');
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div>
            <BrandMark variant="white" onClick={() => go('home')}/>
            <p className="footer-blurb">The home of serialized vertical fiction. New chapters drop daily — crime, romance, sci-fi, slow-burn. Watch one, or fall into all twelve.</p>
            <div className="store-badges">
              <button className="store-badge" onClick={dl}><I.apple s={22}/><span><div className="sb-sm">Download on the</div><div className="sb-lg">App Store</div></span></button>
              <button className="store-badge" onClick={dl}><I.gplay s={20}/><span><div className="sb-sm">Get it on</div><div className="sb-lg">Google Play</div></span></button>
            </div>
          </div>
          {col('Watch', [['Realistic',()=>go('realistic')],['Animated',()=>go('animated')],['Books',()=>go('books')],['New & trending',()=>go('realistic')]])}
          {col('Company', [['About',()=>toast('About ReelSaga')],['Careers',()=>toast('We are hiring!')],['Press',()=>toast('Press kit')],['Blog',()=>go('blog')]])}
          {col('Support', [['Help center',()=>toast('Help center')],['Creators',()=>toast('For creators')],['Terms',()=>toast('Terms of service')],['Privacy',()=>toast('Privacy policy')]])}
        </div>
        <div className="footer-bottom">
          <span>© 2026 ReelSaga. A Nanobit studio, part of Stillfront Group.</span>
          <span style={{display:'flex',gap:20}}>
            <a onClick={()=>toast('Terms')} style={{cursor:'pointer'}}>Terms</a>
            <a onClick={()=>toast('Privacy')} style={{cursor:'pointer'}}>Privacy</a>
            <a onClick={()=>toast('Cookies')} style={{cursor:'pointer'}}>Cookies</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export {
  RSCtx, useRS, I, useReveal, BrandMark, Chips, DownloadBtn, WatchBtn, PosterCard, Nav, Footer, NAV_TABS,
};
