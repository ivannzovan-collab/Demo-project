import React from 'react';
import { useRS, I, useReveal, Footer } from './components.jsx';
import { RS_DATA } from './data.js';
/* global React, useRS, I, useReveal, RS_DATA, Footer */
const { useEffect: bUE } = React;

const BLOG_IMG = {
  'why-vertical':'/assets/images/category-realistic.png',
  'anatomy-cliffhanger':'/assets/images/poster-live-1.png',
  'werewolf-renaissance':'/assets/images/poster-live-3.png',
  'writers-room':'/assets/images/category-animated.png',
  'read-or-watch':'/assets/images/category-books.png',
  'creator-payouts':'/assets/images/poster-live-2.png',
};
function blogImg(id){ return BLOG_IMG[id] || '/assets/images/category-books.png'; }

function Blog() {
  const { go } = useRS();
  const ref = useReveal();
  bUE(()=>window.scrollTo(0,0),[]);
  const [feat, ...rest] = RS_DATA.blog;
  return (
    <div className="page" ref={ref}>
      <section className="page-head">
        <div className="wrap">
          <div className="eyebrow reveal"><I.book s={16}/> The ReelSaga Blog</div>
          <h1 className="reveal">Notes from the writers room</h1>
          <p className="reveal">Craft, genre and the strange new art of the sixty-second cliffhanger.</p>
        </div>
      </section>

      <section className="section tight" style={{paddingTop:40}}>
        <div className="wrap">
          <div className="blog-feature reveal" onClick={()=>go('article',{id:feat.id})} style={{cursor:'pointer'}}>
            <div className="bf-img"><img src={blogImg(feat.id)} alt=""/></div>
            <div className="bf-body">
              <div className="blog-meta"><span className="blog-cat">{feat.cat}</span><span>·</span><span>{feat.date}</span><span>·</span><span>{feat.read} read</span></div>
              <h2 className="sec-title" style={{fontSize:32,margin:'16px 0 14px',letterSpacing:'-.6px'}}>{feat.title}</h2>
              <p style={{color:'var(--rs-muted)',fontSize:16.5,lineHeight:1.6}}>{feat.excerpt}</p>
              <div className="blog-read">Read the story <I.chevR s={15}/></div>
            </div>
          </div>

          <div className="blog-grid reveal d1" style={{marginTop:34}}>
            {rest.map(b => (
              <div key={b.id} className="blog-card" onClick={()=>go('article',{id:b.id})}>
                <div className="blog-meta"><span className="blog-cat">{b.cat}</span><span>·</span><span>{b.read} read</span></div>
                <h3>{b.title}</h3>
                <p>{b.excerpt}</p>
                <div className="blog-read">Read more <I.chevR s={14}/></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

const ARTICLE_BODY = [
  { h:null, p:'For years the conventional wisdom was simple: serious stories needed room to breathe. A prestige drama earned its silences. A novel earned its slow chapters. Then a generation grew up reading and watching on a screen the size of a palm, in the gaps between everything else, and the whole equation quietly flipped.' },
  { h:'The cliffhanger is the unit', p:'On ReelSaga the atom of storytelling is not the season or the chapter — it is the sixty-second beat that ends on a question. Writers learn to think in these units the way a poet thinks in lines. Every episode has a job: open a loop, twist it, and slam the door before the viewer can look away.' },
  { h:null, p:'That constraint sounds limiting. In practice it is liberating. There is no room for the filler that pads a streaming episode to fill a slot. Every second has to earn the next tap, and the audience tells you instantly — in replays, in saves, in the exact frame where they bailed — whether it did.' },
  { h:'Read it or watch it', p:'The same story often lives twice on the app: once as a reel you watch, once as a branching book you read. Neither is the “real” version. They are two doors into the same room, and which one you choose says more about your commute than your taste. Both end on the same question.' },
  { h:null, p:'None of this replaces the long forms we love. It sits beside them — a different muscle for a different moment. But anyone who still calls it a gimmick has not watched a stranger on a train gasp at a phone, then immediately tap to find out what happens next.' },
];
function Article({ id }) {
  const { go } = useRS();
  const ref = useReveal();
  bUE(()=>window.scrollTo(0,0),[id]);
  const post = RS_DATA.blog.find(b=>b.id===id) || RS_DATA.blog[0];
  const more = RS_DATA.blog.filter(b=>b.id!==post.id).slice(0,3);
  return (
    <div className="page" ref={ref}>
      <article className="article">
        <button className="see-all" onClick={()=>go('blog')} style={{marginBottom:8}}><I.chevL s={15}/> All articles</button>
        <div className="blog-meta" style={{marginTop:18}}><span className="blog-cat">{post.cat}</span><span>·</span><span>{post.date}</span><span>·</span><span>{post.read} read</span></div>
        <h1>{post.title}</h1>
        <p className="lead">{post.excerpt}</p>
      </article>
      <div className="wrap" style={{maxWidth:760,padding:'0 24px'}}>
        <div className="bf-img reveal" style={{aspectRatio:'16/8',borderRadius:18,overflow:'hidden',position:'relative',margin:'12px 0 8px',border:'1px solid var(--rs-line)'}}>
          <img src={blogImg(post.id)} alt="" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'}}/>
        </div>
      </div>
      <article className="article" style={{paddingTop:8}}>
        <div className="article-body">
          {ARTICLE_BODY.map((b,i)=>(<React.Fragment key={i}>{b.h && <h2>{b.h}</h2>}<p>{b.p}</p></React.Fragment>))}
        </div>
        <div style={{borderTop:'1px solid var(--rs-line)',marginTop:36,paddingTop:30}}>
          <div className="eyebrow"><I.book s={15}/> Keep reading</div>
          <div className="blog-grid" style={{gridTemplateColumns:'1fr 1fr 1fr',marginTop:20}}>
            {more.map(b=>(
              <div key={b.id} className="blog-card" onClick={()=>go('article',{id:b.id})}>
                <div className="blog-meta"><span className="blog-cat">{b.cat}</span></div>
                <h3 style={{fontSize:18}}>{b.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </article>
      <Footer/>
    </div>
  );
}

export { Blog, Article };
