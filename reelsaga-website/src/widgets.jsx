import React from 'react';
import { useRS, I, Chips, BrandMark } from './components.jsx';
import { RS_DATA } from './data.js';
/* global React, useRS, I, RS_DATA, Chips */
/* ReelSaga — phone mockup + overlays */
const { useState: uS, useEffect: uE, useRef: uR } = React;

/* ---------------- Animated phone reel ---------------- */
const REELS = [
  { id:'wolfsbane', img:'/assets/images/poster-live-3.png', title:'Wolfsbane', genres:['Werewolf','Romance'], ep:'Episode 12', likes:'48.2K' },
  { id:'burning-vows', img:'/assets/images/poster-live-1.png', title:'Burning Vows', genres:['Drama','Romance'], ep:'Episode 7', likes:'31.7K' },
  { id:'office-hours', img:'/assets/images/poster-live-2.png', title:'Office Hours', genres:['Forbidden','Romance'], ep:'Episode 21', likes:'27.4K' },
];
function PhoneMockup() {
  const { go } = useRS();
  const [idx, setIdx] = uS(0);
  const [prog, setProg] = uS(0);
  const [paused, setPaused] = uS(false);
  const [liked, setLiked] = uS(false);
  const raf = uR(0); const last = uR(0); const DUR = 6500;
  uE(() => {
    let live = true;
    const tick = (ts) => {
      if (!live) return;
      if (!last.current) last.current = ts;
      const dt = ts - last.current; last.current = ts;
      if (!paused) {
        setProg(p => {
          const np = p + dt / DUR;
          if (np >= 1) { setIdx(i => (i + 1) % REELS.length); setLiked(false); return 0; }
          return np;
        });
      }
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => { live = false; cancelAnimationFrame(raf.current); last.current = 0; };
  }, [paused]);
  const r = REELS[idx];
  return (
    <div className={`phone ${paused ? 'paused' : ''}`}>
      <div className="phone-screen" onClick={() => setPaused(p => !p)}>
        {REELS.map((s, i) => (
          <div key={s.id} className="reel-slide reel-fade" style={{ opacity: i===idx ? 1 : 0, zIndex: i===idx ? 1 : 0 }}>
            <img src={s.img} alt={s.title}/>
            <div className="reel-shade"/>
          </div>
        ))}
        <div className="reel-status"><span>9:41</span><span>ReelSaga</span></div>
        <div className="reel-rail">
          <button className="ra" onClick={(e)=>{e.stopPropagation(); setLiked(l=>!l);}}>
            <span className="rc" style={{ color: liked ? '#FEC200' : '#fff' }}><I.heart s={19} f={liked ? '#FEC200' : 'none'}/></span>
            <small>{r.likes}</small>
          </button>
          <div className="ra"><span className="rc"><I.bookmark s={18}/></span><small>Save</small></div>
          <div className="ra"><span className="rc"><I.sparkle s={18}/></span><small>162</small></div>
        </div>
        <div className="reel-bigplay"><span><I.play s={22} f="#fff"/></span></div>
        <div className="reel-info">
          <div className="ri-genres"><Chips genres={r.genres} variant="solid"/></div>
          <div className="ri-title">{r.title}</div>
          <div className="ri-ep">{r.ep} · tap to {paused ? 'play' : 'pause'}</div>
        </div>
        <div className="reel-progress"><i style={{ width:`${prog*100}%`, transition: prog===0?'none':'width .1s linear' }}/></div>
      </div>
      <img className="frame-img" src="/assets/images/phone-frame.png" alt=""/>
    </div>
  );
}

/* ---------------- Sign-in modal ---------------- */
function SignInModal({ onClose }) {
  const { toast } = useRS();
  const [mode, setMode] = uS('signin');
  uE(() => {
    const esc = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', esc); return () => window.removeEventListener('keydown', esc);
  }, []);
  const submit = (e) => { e.preventDefault(); onClose(); toast(mode==='signin' ? 'Welcome back!' : 'Account created — check your inbox'); };
  return (
    <div className="modal-back" onMouseDown={(e)=> e.target===e.currentTarget && onClose()}>
      <div className="modal">
        <button className="mclose" onClick={onClose} aria-label="Close"><I.close/></button>
        <div style={{display:'flex',justifyContent:'center',marginBottom:18}}><BrandMark variant="yellow"/></div>
        <h2>{mode==='signin' ? 'Welcome back' : 'Create your account'}</h2>
        <p className="msub">{mode==='signin' ? 'Pick up every saga right where you left off.' : 'New chapters drop daily. Don\u2019t miss a cliffhanger.'}</p>
        <form onSubmit={submit}>
          {mode==='signup' && <div className="field"><label>Name</label><input type="text" placeholder="Your name" required/></div>}
          <div className="field"><label>Email</label><input type="email" placeholder="you@example.com" required/></div>
          <div className="field"><label>Password</label><input type="password" placeholder="••••••••" required/></div>
          <button className="btn btn--primary" type="submit" style={{width:'100%',marginTop:22}}>{mode==='signin' ? 'Sign in' : 'Create account'}</button>
        </form>
        <div className="divider">or continue with</div>
        <div className="oauth">
          <button onClick={()=>{onClose(); toast('Continuing with Google…');}}><I.google s={18}/>Google</button>
          <button onClick={()=>{onClose(); toast('Continuing with Apple…');}}><I.apple s={18}/>Apple</button>
        </div>
        <p className="fineprint">
          {mode==='signin' ? <>New to ReelSaga? <span className="switch" onClick={()=>setMode('signup')}>Create an account</span></>
                           : <>Already have an account? <span className="switch" onClick={()=>setMode('signin')}>Sign in</span></>}
        </p>
      </div>
    </div>
  );
}

/* ---------------- Search overlay ---------------- */
function SearchOverlay({ onClose }) {
  const { go, openSeries } = useRS();
  const [q, setQ] = uS('');
  const inp = uR(null);
  uE(() => { inp.current && inp.current.focus();
    const esc = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', esc); return () => window.removeEventListener('keydown', esc);
  }, []);
  const ql = q.trim().toLowerCase();
  const results = ql ? RS_DATA.titles.filter(t =>
    t.title.toLowerCase().includes(ql) || t.genres.some(g => g.toLowerCase().includes(ql))
  ).slice(0, 7) : RS_DATA.titles.filter(t => t.hot || t.rank).slice(0, 5);
  const open = (t) => { onClose(); if (t.type === 'books') go('book', { id: t.id }); else openSeries(t.id); };
  return (
    <div className="search-wrap" onMouseDown={(e)=> e.target===e.currentTarget && onClose()}>
      <div className="search-box">
        <div className="search-input">
          <I.search s={24}/><input ref={inp} value={q} onChange={e=>setQ(e.target.value)} placeholder="Search shows, books, genres…"/>
          <button className="nav-icon-btn" onClick={onClose}><I.close/></button>
        </div>
        <div className="search-results">
          {!ql && <div className="search-hint" style={{textAlign:'left',padding:'8px 14px',textTransform:'uppercase',letterSpacing:'.1em',fontWeight:700,color:'var(--rs-muted)'}}>Trending now</div>}
          {results.map(t => (
            <div key={t.id} className="search-res" onClick={()=>open(t)}>
              <div className="sr-thumb">{t.image ? <img src={t.image} alt=""/> : <div style={{width:'100%',height:'100%',background:`linear-gradient(165deg,${t.tint||'#1b2950'},#0a1228)`}}/>}</div>
              <div style={{flex:1}}>
                <span className="sr-type">{t.type==='books'?'Book':t.type==='animated'?'Animated':'Realistic'}</span>
                <div style={{fontWeight:700,fontSize:15}}>{t.title}</div>
                <div style={{color:'var(--rs-muted)',fontSize:13,marginTop:3}}>{t.genres.join(' · ')}</div>
              </div>
              <I.chevR s={18}/>
            </div>
          ))}
          {ql && results.length===0 && <div className="search-hint">No results for “{q}”. Try a genre like Romance or Werewolf.</div>}
        </div>
        <div className="search-hint">Press <kbd>Esc</kbd> to close</div>
      </div>
    </div>
  );
}

export { PhoneMockup, SignInModal, SearchOverlay, REELS };
