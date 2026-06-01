import React from 'react';
import { useRS } from './components.jsx';
/* global React, useRS */
/* ReelSaga — Blog page (matches Figma blog mock) */
const { useEffect: blE } = React;
const FB = '/assets/fig/';

const CAT_ITEMS = [
  { id:'classroom-queen', img: FB+'cover-e.png', title:'Classroom Queen: Mafia Bloodline', sub:'Podnaslov sa par dodatnih informacija o clanku' },
  { id:'cursed-rival', img: FB+'cover-e.png', title:'Classroom Queen: Mafia Bloodline', sub:'Podnaslov sa par dodatnih informacija o clanku' },
  { id:'billionaire-alphas', img: FB+'cover-e.png', title:'Classroom Queen: Mafia Bloodline', sub:'Podnaslov sa par dodatnih informacija o clanku' },
  { id:'bride-dies-twice', img: FB+'cover-e.png', title:'Classroom Queen: Mafia Bloodline', sub:'Podnaslov sa par dodatnih informacija o clanku' },
];
const NEWS_ITEMS = [
  { id:'phantoms-kiss', title:'Classroom Queen: Mafia Bloodline', sub:'Podnaslov sa par dodatnih informacija o clanku', img: FB+'originals-strip.jpg' },
  { id:'phantoms-kiss', title:'Classroom Queen: Mafia Bloodline', sub:'Podnaslov sa par dodatnih informacija o clanku', img: FB+'originals-strip.jpg' },
  { id:'phantoms-kiss', title:'Classroom Queen: Mafia Bloodline', sub:'Podnaslov sa par dodatnih informacija o clanku', img: FB+'originals-strip.jpg' },
];

function BlogCatCard({ c, onOpen }) {
  return (
    <div className="blog-cat-card" onClick={onOpen} role="button" tabIndex={0}>
      <div className="bcc-img"><img src={c.img} alt=""/></div>
      <h4>{c.title}</h4>
      <p>{c.sub}</p>
    </div>
  );
}

function CatRowBlock({ onOpen }) {
  return (
    <section className="blog-sec"><div className="fhw">
      <div className="blog-kicker">Naslov Kategorije</div>
      <div className="blog-cat-grid">
        {CAT_ITEMS.map((c, i) => <BlogCatCard key={i} c={c} onOpen={() => onOpen(c.id)}/>)}
      </div>
    </div></section>
  );
}

function Blog() {
  const { toast, go } = useRS();
  blE(() => { window.scrollTo(0, 0); }, []);
  const open = (id) => go('article', { id });
  return (
    <div className="page blogp">
      {/* hero banner */}
      <section className="blog-hero-sec"><div className="fhw">
        <div className="blog-hero">
          <div className="bh-banner"><img src={FB+'cover-f.png'} alt=""/></div>
          <h1>Classroom Queen: Mafia Bloodline</h1>
          <p>Podnaslov sa par dodatnih iformacija</p>
        </div>
        <div className="fh-sep" style={{ marginTop: 44 }}/>
      </div></section>

      <CatRowBlock onOpen={open}/>

      {/* latest news */}
      <section className="blog-sec"><div className="fhw">
        <div className="latest-panel">
          <div className="blog-kicker">Latest News</div>
          <div className="latest-grid">
            <div className="latest-feat" onClick={() => open('suburban-strangler')} role="button" tabIndex={0}>
              <div className="lf-img"><img src={FB+'suburban-cover.png'} alt=""/></div>
              <h3>Classroom Queen: Mafia Bloodline</h3>
              <p>Podnaslov sa par dodatnih informacija o clanku</p>
            </div>
            <div className="latest-list">
              {NEWS_ITEMS.map((n, i) => (
                <div className="latest-item" key={i} onClick={() => open(n.id)} role="button" tabIndex={0}>
                  <div className="li-txt"><h4>{n.title}</h4><p>{n.sub}</p></div>
                  <div className="li-thumb"><img src={n.img} alt=""/></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div></section>

      <CatRowBlock onOpen={open}/>

      <footer className="fh-foot" style={{ marginTop: 50 }}><div className="fhw fh-foot-in">
        <span className="fcopy">2026 Reel saga</span>
        <div className="flinks">
          <a onClick={() => toast('Privacy Policy')}>Privacy Policy</a>
          <a onClick={() => toast('Terms')}>Terms</a>
        </div>
      </div></footer>
    </div>
  );
}

const BA_TEXT = [
  'From the moment we meet Rachel in the opening minutes, she is already fighting something. At first she is quietly navigating the feeling that her impending nuptials might be doomed, and worrying that her future in-laws have it out for her; then, later, she is protecting herself from a danger that has poisoned her bloodline and threatens her life. Getting the role required a similar kind of mettle — you have to go tooth and nail and give it your all, and then close your eyes and pray that you make it to the next round.',
  'In the series, the performer captivates in every frame as a young woman with a complicated relationship to family and marriage, struggling to survive the days leading up to her wedding. As her discovery of a generational secret reveals the story behind her parents’ own wedding day, Rachel must come to terms with what it means to truly love another person — and whom she can really trust.',
  'This was by far the most challenging role taken on yet, says the actor — with a lot of pride, because the hope is to always feel like you are leveling up and taking on characters that feel far away from you. It is really like looking at a mountain and knowing that you have to climb it, with this imminent dread and fear right before you start.',
  'She can next be seen as a very different kind of leading lady, and sat down with us to unpack the emotional and physical toll of playing a character who is in a constant state of paranoia — how the role pushed her as a performer, and more.',
];
function Article({ id }) {
  const { toast } = useRS();
  blE(() => { window.scrollTo(0, 0); }, [id]);
  return (
    <div className="page blog-article">
      <div className="ba-hero"><img src={FB+'cover-f.png'} alt=""/></div>
      <div className="ba-head">
        <h1>Classroom Queen: Mafia Bloodline</h1>
        <p>Podnaslov sa par dodatnih iformacija</p>
      </div>
      <div className="fhw"><div className="ba-sep"/></div>
      <article className="ba-body">
        {BA_TEXT.map((p, i) => <p key={i}>{p}</p>)}
        <div className="ba-inset"><img src={FB+'suburban-cover.png'} alt=""/></div>
        <p>{BA_TEXT[0]}</p>
      </article>
      <footer className="fh-foot" style={{ marginTop: 50 }}><div className="fhw fh-foot-in">
        <span className="fcopy">2026 Reel saga</span>
        <div className="flinks">
          <a onClick={() => toast('Privacy Policy')}>Privacy Policy</a>
          <a onClick={() => toast('Terms')}>Terms</a>
        </div>
      </div></footer>
    </div>
  );
}

export { Blog, Article };