import React from 'react';
import { getBlog } from '../content';
import PageFooter from '../components/layout/PageFooter';

/* A blog article. (Content is the shared sample article for every id.) */
export default function ArticlePage({ id }) {
  const blog = getBlog();
  React.useEffect(() => { window.scrollTo(0, 0); }, [id]);
  return (
    <div className="page blog-article">
      <div className="ba-hero"><img src={blog.articleHero} alt=""/></div>
      <div className="ba-head">
        <h1>{blog.hero.title}</h1>
        <p>{blog.hero.sub}</p>
      </div>
      <div className="fhw"><div className="ba-sep"/></div>
      <article className="ba-body">
        {blog.articleBody.map((p, i) => <p key={i}>{p}</p>)}
        <div className="ba-inset"><img src={blog.articleInset} alt=""/></div>
        <p>{blog.articleBody[0]}</p>
      </article>
      <PageFooter style={{ marginTop: 50 }} />
    </div>
  );
}
