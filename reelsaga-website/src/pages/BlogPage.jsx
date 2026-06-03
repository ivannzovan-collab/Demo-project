import React from 'react';
import { useRS } from '../hooks/useRS';
import { getBlog } from '../content';
import BlogCategoryRow from '../components/sections/BlogCategoryRow';
import LatestNews from '../components/sections/LatestNews';
import PageFooter from '../components/layout/PageFooter';

/* Blog landing page — hero + category rows + latest news. */
export default function BlogPage() {
  const { go } = useRS();
  const blog = getBlog();
  React.useEffect(() => { window.scrollTo(0, 0); }, []);
  const open = (id) => go('article', { id });
  return (
    <div className="page blogp">
      <section className="blog-hero-sec"><div className="fhw">
        <div className="blog-hero">
          <div className="bh-banner"><img src={blog.hero.cover} alt=""/></div>
          <h1>{blog.hero.title}</h1>
          <p>{blog.hero.sub}</p>
        </div>
        <div className="fh-sep" style={{ marginTop: 44 }}/>
      </div></section>

      <BlogCategoryRow onOpen={open} />

      <LatestNews onOpen={open} />

      <BlogCategoryRow onOpen={open} />

      <PageFooter style={{ marginTop: 50 }} />
    </div>
  );
}
