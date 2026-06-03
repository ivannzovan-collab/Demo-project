import React from 'react';
import { getCopy } from '../../content';
import DownloadArrow from './DownloadArrow';
import ReadingModeToggle from './ReadingModeToggle';

/* The reading pane: the current chapter's text, prev/finish navigation, and the
   dark/light toggle. `readRef` is attached so the page can scroll here. */
export default function ChapterReader({ readRef, chapters, chapter, onPrev, onFinish }) {
  const copy = getCopy();
  const [dark, setDark] = React.useState(true);
  const current = chapters[chapter - 1];
  return (
    <section className={`book-read ${dark ? 'is-dark' : 'is-light'}`} ref={readRef}><div className="fhw">
      <div className="br-grid">
        <article className="br-article">
          <h2>{current.title || `Chapter ${chapter}`}</h2>
          {current.body.map((p, i) => <p key={i}>{p}</p>)}
          <div className="br-nav">
            {chapter > 1 && <button className="br-prev" onClick={onPrev}>{copy.reader.previous}</button>}
            <button className="br-next" onClick={onFinish}>
              {chapter < chapters.length ? `${copy.reader.finishChapter} ${chapter}` : copy.gating.bookContinueButton} <DownloadArrow />
            </button>
          </div>
        </article>
        <ReadingModeToggle dark={dark} onChange={setDark} />
      </div>
    </div></section>
  );
}
