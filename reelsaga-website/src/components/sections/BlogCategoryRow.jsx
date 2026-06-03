import React from 'react';
import { getBlog } from '../../content';

function BlogCatCard({ c, onOpen }) {
  return (
    <div className="blog-cat-card" onClick={onOpen} role="button" tabIndex={0}>
      <div className="bcc-img"><img src={c.img} alt=""/></div>
      <h4>{c.title}</h4>
      <p>{c.sub}</p>
    </div>
  );
}

/* The blog's category card grid (shown twice on the page). */
export default function BlogCategoryRow({ onOpen }) {
  const blog = getBlog();
  return (
    <section className="blog-sec"><div className="fhw">
      <div className="blog-kicker">{blog.categoryTitle}</div>
      <div className="blog-cat-grid">
        {blog.categoryItems.map((c, i) => <BlogCatCard key={i} c={c} onOpen={() => onOpen(c.id)} />)}
      </div>
    </div></section>
  );
}
