import React from 'react';
import { useRS, I, useReveal, PosterCard, Chips, WatchBtn, Footer } from './components.jsx';
import { RS_DATA, RS_BY_TYPE, RS_GET } from './data.js';
import { Carousel } from './home.jsx';
/* global React, useRS, I, useReveal, RS_DATA, RS_BY_TYPE, RS_GET, PosterCard, Chips, WatchBtn, Footer, Carousel */
const { useState: cUS, useEffect: cUE } = React;

const TYPE_META = {
  realistic: { eyebrow:'Live action', icon:I.film, title:'Realistic', sub:'Crime, romance and slow-burn drama, shot like film and built for the vertical screen.' },
  animated:  { eyebrow:'Anime', icon:I.sparkle, title:'Animated', sub:'Fantasy, action and reincarnation sagas — animated, addictive, and dropping daily.' },
  books:     { eyebrow:'Interactive', icon:I.book, title:'Books', sub:'Branching chapter stories where every choice you make rewrites the romance.' },
};

function Catalog({ type }) {
  const { go } = useRS();
  const ref = useReveal();
  const meta = TYPE_META[type];
  const all = RS_BY_TYPE(type);
  const genres = ['All', ...Array.from(new Set(all.flatMap(t => t.genres)))];
  const [filter, setFilter] = cUS('All');
  cUE(() => { setFilter('All'); window.scrollTo(0,0); }, [type]);
  const shown = filter==='All' ? all : all.filter(t => t.genres.includes(filter));
  const featured = all.find(t => t.rank) || all[0];
  const Ic = meta.icon;

  return (
    <div className="page" ref={ref}>
      <section className="page-head">
        <div className="wrap">
          <div className="eyebrow reveal"><Ic s={16}/> {meta.eyebrow}</div>
          <h1 className="reveal">{meta.title}</h1>
          <p className="reveal">{meta.sub}</p>
          <div className="filter-row reveal d1">
            {genres.map(g => (
              <button key={g} className={`filter-pill ${filter===g ? 'active' : ''}`} onClick={()=>setFilter(g)}>{g}</button>
            ))}
          </div>
        </div>
      </section>

      <section className="section tight" style={{paddingTop:48}}>
        <div className="wrap">
          <div className="poster-grid reveal">
            {shown.map(t => <PosterCard key={t.id} t={t}/>)}
          </div>
          {shown.length===0 && <p style={{color:'var(--rs-muted)',textAlign:'center',padding:'40px 0'}}>Nothing here yet — try another genre.</p>}
        </div>
      </section>

      <Footer/>
    </div>
  );
}

/* ---------------- Title detail ---------------- */
function epTitle(i, type) {
  const watch = ['The morning after','A knock at midnight','Everything she hid','The wrong text','Caught in the rain','One last lie','The reading of the will','Blood in the snow','He saw the photo','She said his name','The locked room','Two minutes too late','A promise in the dark','The DNA result','Burned letters','Nobody left to trust'];
  return watch[i % watch.length];
}
function TitleDetail({ id }) {
  const { go, toast } = useRS();
  const ref = useReveal();
  const t = RS_GET(id);
  const [saved, setSaved] = cUS(false);
  cUE(() => { window.scrollTo(0,0); setSaved(false); }, [id]);
  if (!t) return <div className="page" style={{paddingTop:200,textAlign:'center'}}><p>Title not found.</p><button className="btn btn--primary" style={{marginTop:20}} onClick={()=>go('home')}>Back home</button></div>;

  const isBook = t.type==='books';
  const count = isBook ? t.chapters : t.episodes;
  const unit = isBook ? 'Chapter' : 'Episode';
  const bg = t.image || null;
  const related = RS_DATA.titles.filter(x => x.id!==t.id && x.genres.some(g => t.genres.includes(g))).slice(0,6);
  const relatedFill = related.length ? related : RS_DATA.titles.filter(x=>x.id!==t.id).slice(0,6);
  const eps = Array.from({length: Math.min(8, count)}, (_,i)=>i);

  return (
    <div className="page" ref={ref}>
      <section className="detail-hero">
        <div className="detail-bg">
          {bg ? <img src={bg} alt=""/> : <div style={{width:'100%',height:'100%',background:`radial-gradient(80% 60% at 75% 18%, ${t.glow||'#4a5fa8'}66 0%, ${t.glow||'#4a5fa8'}00 55%), linear-gradient(160deg, ${t.tint||'#1b2950'} 0%, #060f29 90%)`}}/>}
        </div>
        <div className="wrap">
          <div className="detail-inner">
            <div className="detail-poster">
              {t.image ? <img src={t.image} alt={t.title}/>
                : <div style={{position:'absolute',inset:0,background:`radial-gradient(130% 80% at 72% 6%, ${t.glow}cc 0%, ${t.glow}22 42%, transparent 64%), radial-gradient(90% 70% at 18% 100%, ${t.glow}66 0%, transparent 55%), linear-gradient(160deg, ${t.tint} 0%, #0a1228 92%)`}}>
                    {t.titleArt ? <img src={t.titleArt} alt={t.title} style={{position:'absolute',top:'50%',left:14,right:14,width:'calc(100% - 28px)',transform:'translateY(-50%)'}}/>
                      : <div style={{position:'absolute',top:48,left:16,right:16,fontFamily:'var(--rs-serif)',fontSize:26,fontWeight:500,textShadow:'0 2px 12px rgba(0,0,0,.5)'}}>{t.title}</div>}
                  </div>}
            </div>
            <div className="detail-copy">
              <div className="eyebrow">{isBook ? <I.book s={15}/> : <I.film s={15}/>} {t.type==='animated'?'Animated series':isBook?'Interactive book':'Original series'}</div>
              <h1>{t.title}</h1>
              <div className="detail-tag">{t.tagline}</div>
              <div className="detail-meta">
                <span className="stars">★</span> <b>{t.rating}</b>
                <span className="dot" style={{width:4,height:4,borderRadius:'50%',background:'var(--rs-muted)',display:'inline-block'}}/>
                <b>{count}</b> {unit.toLowerCase()}s
                {t.runtime && <><span className="dot" style={{width:4,height:4,borderRadius:'50%',background:'var(--rs-muted)',display:'inline-block'}}/><span>{t.runtime} each</span></>}
                <span className="dot" style={{width:4,height:4,borderRadius:'50%',background:'var(--rs-muted)',display:'inline-block'}}/>
                <span>{t.views} views</span>
              </div>
              <div className="detail-chips"><Chips genres={t.genres} variant="solid"/>{t.hot && <span className="chip chip--outline">Hot</span>}{t.new && <span className="chip chip--outline">New</span>}</div>
              <div className="detail-actions">
                <WatchBtn label={isBook ? 'Start reading' : 'Watch free'} lg onClick={()=>toast(isBook ? `Opening ${t.title}, Chapter 1` : `Now playing ${t.title} · Episode 1`)}/>
                <button className={`btn ${saved?'btn--primary':'btn--ghost'} btn--lg`} onClick={()=>{setSaved(s=>!s); toast(saved ? 'Removed from your list' : 'Added to your list');}}>
                  {saved ? <I.check s={18}/> : <I.plus s={18}/>}{saved ? 'In your list' : 'My list'}
                </button>
              </div>
              {t.synopsis && <p className="detail-syn">{t.synopsis}</p>}
            </div>
          </div>
        </div>
      </section>

      {/* Episodes / chapters */}
      <section className="section tight">
        <div className="wrap">
          <div className="sec-head reveal">
            <div><h2 className="sec-title" style={{fontSize:30}}>{isBook ? 'Chapters' : 'Episodes'}</h2>
              <p className="sec-sub" style={{fontSize:15}}>{count} {unit.toLowerCase()}s · first 3 free, the rest unlock with daily rewards.</p></div>
          </div>
          <div className="ep-grid reveal d1">
            {eps.map(i => {
              const locked = i >= 3;
              return (
                <div key={i} className="ep-row" onClick={()=>toast(locked ? `Unlock ${unit} ${i+1} with rewards` : `Now playing · ${unit} ${i+1}`)}>
                  <div className="epn">{String(i+1).padStart(2,'0')}</div>
                  <div style={{flex:1}}><div className="ept">{epTitle(i, t.type)}</div><div className="epd">{isBook ? `${4+ (i%5)} min read` : t.runtime}</div></div>
                  {locked ? <span className="eplock"><I.lock s={17}/></span> : <span className="epplay"><I.play s={18}/></span>}
                </div>
              );
            })}
          </div>
          {count > 8 && <div style={{textAlign:'center',marginTop:26}}><button className="btn btn--ghost" onClick={()=>toast('Get the app to see every episode')}>See all {count} {unit.toLowerCase()}s</button></div>}
        </div>
      </section>

      {/* Related */}
      <section className="section tight">
        <div className="wrap">
          <div className="sec-head reveal"><div><h2 className="sec-title" style={{fontSize:30}}>More like this</h2></div></div>
          <div className="reveal d1"><Carousel items={relatedFill}/></div>
        </div>
      </section>

      <Footer/>
    </div>
  );
}

export { Catalog, TitleDetail };
