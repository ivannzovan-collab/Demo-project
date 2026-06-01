import React from 'react';
import { useRS, I, useReveal, PosterCard, Chips, DownloadBtn, WatchBtn, Footer } from './components.jsx';
import { RS_DATA, RS_BY_TYPE, RS_GET } from './data.js';
import { PhoneMockup } from './widgets.jsx';
/* global React, useRS, I, useReveal, RS_DATA, RS_BY_TYPE, RS_GET, PosterCard, Chips, DownloadBtn, WatchBtn, PhoneMockup, Footer */
const { useRef: hUR, useState: hUS, useEffect: hUE } = React;

const T = RS_DATA.titles;
const byGenre = (g) => T.filter(t => t.genres.includes(g));
const imgOf = (t) => t.image || t.titleArt || null;

/* ---------------- Generic poster carousel (rows) ---------------- */
function Carousel({ items, showRank }) {
  const track = hUR(null);
  const scroll = (dir) => { const t = track.current; if (t) t.scrollBy({ left: dir * (t.clientWidth * 0.85), behavior:'smooth' }); };
  return (
    <div className="carousel">
      <button className="car-btn prev" onClick={()=>scroll(-1)} aria-label="Previous"><I.chevL/></button>
      <div className="carousel-track" ref={track}>
        {items.map((t,i) => <PosterCard key={t.id+'-'+i} t={t} showRank={showRank}/>)}
      </div>
      <button className="car-btn next" onClick={()=>scroll(1)} aria-label="Next"><I.chevR/></button>
    </div>
  );
}

/* ---------------- Streaming row ---------------- */
function Row({ title, icon, items, seeAll, big, showRank }) {
  const { go } = useRS();
  const track = hUR(null);
  const [ends, setEnds] = hUS({ l:true, r:false });
  const Ic = icon;
  const upd = () => { const el = track.current; if(!el) return;
    setEnds({ l: el.scrollLeft < 8, r: el.scrollLeft + el.clientWidth >= el.scrollWidth - 8 }); };
  hUE(() => { upd(); }, []);
  const scroll = (d) => { const el = track.current; if (el) el.scrollBy({ left: d * el.clientWidth * 0.8, behavior:'smooth' }); };
  return (
    <div className="row">
      <div className="row-head">
        <h3>{Ic && <Ic s={20}/>}{title}</h3>
        {seeAll && <button className="see-all" onClick={()=>go(seeAll)}>See all <I.chevR s={14}/></button>}
      </div>
      <div className="row-rel">
        <button className={`row-arrow prev ${ends.l?'hide':''}`} onClick={()=>scroll(-1)} aria-label="Previous"><span className="ra-disc"><I.chevL s={18}/></span></button>
        <div className={`row-track ${big?'big':''}`} ref={track} onScroll={upd}>
          {items.map((t,i) => <PosterCard key={t.id+'-'+i} t={t} showRank={showRank}/>)}
        </div>
        <button className={`row-arrow next ${ends.r?'hide':''}`} onClick={()=>scroll(1)} aria-label="Next"><span className="ra-disc"><I.chevR s={18}/></span></button>
      </div>
    </div>
  );
}

/* ---------------- Must-watch landscape cards ---------------- */
function MustWatch({ items }) {
  const { go } = useRS();
  const track = hUR(null);
  const scroll = (d) => { const el = track.current; if (el) el.scrollBy({ left: d * el.clientWidth * 0.8, behavior:'smooth' }); };
  return (
    <div className="row">
      <div className="row-head"><h3><I.star s={20}/>Must-watch this week</h3></div>
      <div className="row-rel">
        <button className="row-arrow prev" onClick={()=>scroll(-1)}><span className="ra-disc"><I.chevL s={18}/></span></button>
        <div className="mw-track" ref={track}>
          {items.map(t => (
            <div key={t.id} className="mw-card" onClick={()=>go('title',{id:t.id})}>
              <div className="mw-thumb">
                {imgOf(t) ? <img src={imgOf(t)} alt=""/> : <div style={{position:'absolute',inset:0,background:`linear-gradient(165deg,${t.tint||'#1b2950'},#0a1228)`}}/>}
              </div>
              <div className="mw-body">
                <div className="mwt">{t.title}</div>
                <div className="mwg"><Chips genres={t.genres} variant="mute" max={2}/></div>
                <div className="mws">{t.synopsis || t.tagline}</div>
                <div className="mwplay"><I.play s={14}/> {t.type==='books'?'Start reading':'Watch free'}</div>
              </div>
            </div>
          ))}
        </div>
        <button className="row-arrow next" onClick={()=>scroll(1)}><span className="ra-disc"><I.chevR s={18}/></span></button>
      </div>
    </div>
  );
}

/* ---------------- Promo banner ---------------- */
function Promo() {
  const { toast } = useRS();
  const pics = T.filter(imgOf).slice(0,3);
  return (
    <div className="promo reveal">
      <div className="pl">
        <div className="pkick">ReelSaga Premium</div>
        <h3>One membership. Every cliffhanger, unlocked.</h3>
        <p>Skip the wait, binge ad-free, and unlock every episode the moment it drops. Cancel anytime — your Library keeps your place forever.</p>
        <button className="btn btn--primary" style={{marginTop:22}} onClick={()=>toast('Premium — 7 days free')}>Try Premium free <I.arrowUR s={17}/></button>
      </div>
      <div className="promo-posters">
        {pics.map(t => <img key={t.id} src={imgOf(t)} alt=""/>)}
      </div>
    </div>
  );
}

/* ---------------- Find your vibe ---------------- */
function FindVibe() {
  const { go } = useRS();
  const fans = T.filter(imgOf).slice(0,3);
  const surprise = () => { const t = T[Math.floor(Math.random()*T.length)]; go('title',{id:t.id}); };
  return (
    <div className="vibe reveal">
      <div className="vl">
        <div className="vkick">Find your vibe</div>
        <h3>Not sure what to watch?</h3>
        <p>Tell us nothing. Tap once and we’ll throw you straight into a saga worth losing an evening to.</p>
        <button className="vbtn" onClick={surprise}><I.sparkle s={18}/> Surprise me</button>
      </div>
      <div className="vibe-fan">{fans.map(t => <img key={t.id} src={imgOf(t)} alt=""/>)}</div>
    </div>
  );
}

/* ---------------- Billboard hero ---------------- */
const FEATURED = ['wolfsbane','burning-vows','fallen-lord','quiet-wife'];
function Billboard() {
  const { go, toast } = useRS();
  const feats = FEATURED.map(RS_GET).filter(Boolean);
  const [idx, setIdx] = hUS(0);
  const timer = hUR(0);
  const reset = () => { clearTimeout(timer.current); timer.current = setTimeout(()=>setIdx(i=>(i+1)%feats.length), 7000); };
  hUE(() => { reset(); return () => clearTimeout(timer.current); }, [idx]);
  const f = feats[idx];
  const isBook = f.type==='books';
  return (
    <section className="billboard">
      {feats.map((t,i) => (
        <div key={t.id} className={`bb-slide ${i===idx?'on':''}`}>
          <img src={imgOf(t)} alt=""/>
          <div className="bb-grad-b"/><div className="bb-grad-l"/>
        </div>
      ))}
      <div className="wrap bb-inner">
        <div className="bb-copy" key={f.id}>
          <div className="bb-eyebrow"><I.sparkle s={15}/> {f.type==='animated'?'Animated original':isBook?'Interactive book':'ReelSaga original'}</div>
          <h1 className="bb-title">{f.title}</h1>
          <div className="bb-meta">
            <span className="stars">★</span> <b>{f.rating}</b>
            <span className="mdot"/><span>{(isBook?f.chapters:f.episodes)} {isBook?'chapters':'episodes'}</span>
            <span className="mdot"/><span className="mtag">{f.genres[0]}</span>
            {f.genres[1] && <span className="mtag">{f.genres[1]}</span>}
            <span className="mdot"/><span>{f.views} views</span>
          </div>
          <p className="bb-syn">{f.synopsis || f.tagline}</p>
          <div className="bb-actions">
            <WatchBtn label={isBook?'Start reading':'Watch now'} lg onClick={()=>toast(isBook?`Opening ${f.title}`:`Now playing ${f.title}`)}/>
            <button className="btn btn--ghost btn--lg" onClick={()=>go('title',{id:f.id})}>More info <I.chevR s={16}/></button>
          </div>
          <div className="bb-dots">
            {feats.map((_,i)=><button key={i} className={i===idx?'on':''} onClick={()=>setIdx(i)} aria-label={`Featured ${i+1}`}/>)}
          </div>
        </div>
      </div>
      <div className="bb-thumbs">
        {feats.map((t,i) => (
          <div key={t.id} className={`bb-thumb ${i===idx?'on':''}`} onClick={()=>setIdx(i)}><img src={imgOf(t)} alt={t.title}/></div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- FAQ + Stats + Testimonials (kept) ---------------- */
function StatsBand() {
  return (<div className="stats-band reveal">{RS_DATA.stats.map(s => (
    <div className="stat" key={s.label}><div className="sv">{s.value}</div><div className="sl">{s.label}</div></div>))}</div>);
}
function Testimonials() {
  return (<div className="testi-grid">{RS_DATA.testimonials.map((t,i) => (
    <div className={`testi reveal d${(i%2)+1}`} key={i}><div className="quo">“</div><p>{t.quote}</p>
      <div className="who"><div className="av">{t.name[0]}</div><div><div className="wn">{t.name}</div><div className="wm">{t.meta}</div></div></div>
    </div>))}</div>);
}
function FAQ() {
  const [open, setOpen] = hUS(0);
  return (<div className="faq-list">{RS_DATA.faqs.map((f,i) => (
    <div key={i} className={`faq-item ${open===i?'open':''}`}>
      <button className="faq-q" onClick={()=>setOpen(open===i?-1:i)}>{f.q}<span className="fi"><I.plus s={16}/></span></button>
      <div className="faq-a">{f.a}</div></div>))}</div>);
}
function QR() {
  const cells = [];
  for (let i=0;i<13;i++) for (let j=0;j<13;j++) {
    const corner = (i<3&&j<3)||(i<3&&j>9)||(i>9&&j<3);
    if (corner || ((i*7 + j*13 + i*j)%3===0)) cells.push(<rect key={i+'-'+j} x={j*7.6} y={i*7.6} width="6.4" height="6.4" rx="1.4" fill="#050E27"/>);
  }
  return <div className="qr-box"><svg viewBox="0 0 99 99">{cells}</svg></div>;
}

/* ---------------- HOME ---------------- */
function Home() {
  const { go, toast } = useRS();
  const ref = useReveal();
  const ranked = T.filter(t=>t.rank).sort((a,b)=>a.rank-b.rank).concat(T.filter(t=>t.hot&&!t.rank)).slice(0,10).map((t,i)=>({...t,rank:i+1}));
  const vip = T.filter(t=>t.hot).concat(T.filter(t=>!t.hot)).slice(0,9);
  const fresh = T.filter(t=>t.new).concat(T.filter(t=>!t.new)).slice(0,9);
  const mustWatch = T.filter(t=>t.synopsis).slice(0,6);

  return (
    <div className="page" ref={ref}>
      <Billboard/>

      <div className="rows-wrap">
        <div className="wrap">
          <div className="rows-divider"/>
          <Row title="Trending now" icon={I.flame} items={ranked} showRank seeAll="realistic"/>
          <Row title="VIP Series" icon={I.star} items={vip} big/>
          <Row title="New releases" icon={I.sparkle} items={fresh} seeAll="animated"/>

          <div style={{margin:'8px 0 34px'}}><MustWatch items={mustWatch}/></div>

          <div className="reveal" style={{marginBottom:38}}><Promo/></div>

          <Row title="Billionaire Romance" icon={I.heart} items={byGenre('Billionaires').concat(byGenre('Romance')).slice(0,9)}/>
          <Row title="Werewolf & fated mates" icon={I.flame} items={byGenre('Werewolf').concat(byGenre('Fantasy')).slice(0,9)}/>
          <Row title="Crime & thriller" icon={I.star} items={byGenre('Crime').concat(byGenre('Thriller'),byGenre('Drama')).slice(0,9)}/>

          <div style={{margin:'10px 0 40px'}}><FindVibe/></div>

          <Row title="Animated sagas" icon={I.sparkle} items={RS_BY_TYPE('animated')} seeAll="animated"/>
          <Row title="Books to fall into" icon={I.book} items={RS_BY_TYPE('books')} seeAll="books"/>
        </div>
      </div>

      {/* Stats */}
      <section className="section tight band band--warm" style={{paddingTop:40}}><div className="wrap"><StatsBand/></div></section>

      {/* Testimonials */}
      <section className="section tight band band--violet">
        <div className="wrap">
          <div className="sec-head reveal"><div><div className="eyebrow"><I.heart s={15}/> Loved by readers</div>
            <h2 className="sec-title" style={{marginTop:12}}>Don’t take our word for it</h2></div></div>
          <Testimonials/>
        </div>
      </section>

      {/* FAQ */}
      <section className="section tight band band--soft">
        <div className="wrap">
          <div className="sec-head reveal" style={{justifyContent:'center',textAlign:'center'}}><div><h2 className="sec-title">Questions, answered</h2></div></div>
          <div className="reveal d1"><FAQ/></div>
        </div>
      </section>

      {/* CTA band */}
      <section className="section">
        <div className="wrap">
          <div className="cta-band reveal">
            <div>
              <div className="eyebrow"><I.download s={15}/> Get ReelSaga</div>
              <h2 style={{marginTop:14}}>Your next obsession is one tap away.</h2>
              <p>Free to start, daily new episodes, and a library that never forgets where you left off. Scan to download.</p>
              <div className="qr">
                <QR/>
                <div>
                  <div style={{color:'var(--rs-muted)',fontSize:14,marginBottom:12}}>Scan with your phone camera, or grab it directly:</div>
                  <div className="store-badges" style={{margin:0}}>
                    <button className="store-badge" onClick={()=>toast('Heading to the App Store…')}><I.apple s={22}/><span><div className="sb-sm">Download on the</div><div className="sb-lg">App Store</div></span></button>
                    <button className="store-badge" onClick={()=>toast('Heading to Google Play…')}><I.gplay s={20}/><span><div className="sb-sm">Get it on</div><div className="sb-lg">Google Play</div></span></button>
                  </div>
                </div>
              </div>
            </div>
            <div className="cta-phones"><PhoneMockup/></div>
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  );
}

export { Home, Carousel };
