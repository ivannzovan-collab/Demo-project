import React from 'react';
import { useRS } from './components.jsx';
import { BLOG, COPYRIGHT } from './content.js';
/* ReelSaga — Blog list + Article pages. All copy + imagery comes from
   content.js (BLOG); this file only arranges it. */
const { useEffect } = React;

/* A single category card (cover + title + subtitle). */
function BlogCatCard({ c, onOpen }) {
  return (
    <div className="blog-cat-card" onClick={onOpen} role="button" tabIndex={0}>
      <div className="bcc-img"><img src={c.img} alt=""/></div>
      <h4>{c.title}</h4>
      <p>{c.sub}</p>
    </div>
  );
}

/* The "category" row of cards — shown twice on the blog. */
function CatRowBlock({ onOpen }) {
  return (
    <section className="blog-sec"><div className="fhw">
      <div className="blog-kicker">{BLOG.categoryTitle}</div>
      <div className="blog-cat-grid">
        {BLOG.categoryItems.map((c, i) => <BlogCatCard key={i} c={c} onOpen={() => onOpen(c.id)}/>)}
      </div>
    </div></section>
  );
}

function Blog() {
  const { toast, go } = useRS();
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const open = (id) => go('article', { id });
  return (
    <div className="page blogp">
      {/* hero banner */}
      <section className="blog-hero-sec"><div className="fhw">
        <div className="blog-hero">
          <div className="bh-banner"><img src={BLOG.hero.cover} alt=""/></div>
          <h1>{BLOG.hero.title}</h1>
          <p>{BLOG.hero.sub}</p>
        </div>
        <div className="fh-sep" style={{ marginTop: 44 }}/>
      </div></section>

      <CatRowBlock onOpen={open}/>

      {/* latest news */}
      <section className="blog-sec"><div className="fhw">
        <div className="latest-panel">
          <div className="blog-kicker">{BLOG.latestTitle}</div>
          <div className="latest-grid">
            <div className="latest-feat" onClick={() => open(BLOG.latestFeature.id)} role="button" tabIndex={0}>
              <div className="lf-img"><img src={BLOG.latestFeature.img} alt=""/></div>
              <h3>{BLOG.latestFeature.title}</h3>
              <p>{BLOG.latestFeature.sub}</p>
            </div>
            <div className="latest-list">
              {BLOG.news.map((n, i) => (
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
        <span className="fcopy">{COPYRIGHT}</span>
        <div className="flinks">
          <a onClick={() => toast('Privacy Policy')}>Privacy Policy</a>
          <a onClick={() => toast('Terms')}>Terms</a>
        </div>
      </div></footer>
    </div>
  );
}

function Article({ id }) {
  const { toast } = useRS();
  useEffect(() => { window.scrollTo(0, 0); }, [id]);
  return (
    <div className="page blog-article">
      <div className="ba-hero"><img src={BLOG.articleHero} alt=""/></div>
      <div className="ba-head">
        <h1>{BLOG.hero.title}</h1>
        <p>{BLOG.hero.sub}</p>
      </div>
      <div className="fhw"><div className="ba-sep"/></div>
      <article className="ba-body">
        {BLOG.articleBody.map((p, i) => <p key={i}>{p}</p>)}
        <div className="ba-inset"><img src={BLOG.articleInset} alt=""/></div>
        <p>{BLOG.articleBody[0]}</p>
      </article>
      <footer className="fh-foot" style={{ marginTop: 50 }}><div className="fhw fh-foot-in">
        <span className="fcopy">{COPYRIGHT}</span>
        <div className="flinks">
          <a onClick={() => toast('Privacy Policy')}>Privacy Policy</a>
          <a onClick={() => toast('Terms')}>Terms</a>
        </div>
      </div></footer>
    </div>
  );
}

export { Blog, Article };
