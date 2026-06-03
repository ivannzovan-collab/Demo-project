import React from 'react';
import { getBlog } from '../../content';

/* The blog "Latest News" panel: one feature + a list of items. */
export default function LatestNews({ onOpen }) {
  const blog = getBlog();
  return (
    <section className="blog-sec"><div className="fhw">
      <div className="latest-panel">
        <div className="blog-kicker">{blog.latestTitle}</div>
        <div className="latest-grid">
          <div className="latest-feat" onClick={() => onOpen(blog.latestFeature.id)} role="button" tabIndex={0}>
            <div className="lf-img"><img src={blog.latestFeature.img} alt=""/></div>
            <h3>{blog.latestFeature.title}</h3>
            <p>{blog.latestFeature.sub}</p>
          </div>
          <div className="latest-list">
            {blog.news.map((n, i) => (
              <div className="latest-item" key={i} onClick={() => onOpen(n.id)} role="button" tabIndex={0}>
                <div className="li-txt"><h4>{n.title}</h4><p>{n.sub}</p></div>
                <div className="li-thumb"><img src={n.img} alt=""/></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div></section>
  );
}
