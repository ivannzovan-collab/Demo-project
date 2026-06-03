import React from 'react';
import { useRS } from '../../hooks/useRS';
import { getCopy } from '../../content';
import I from '../common/icons';
import DownloadArrow from './DownloadArrow';
import ChapterReader from './ChapterReader';
import PageFooter from '../layout/PageFooter';

/* Book detail hero (cover + info + reading progress) plus the chapter reader.
   Owns the reading-progress state; the book is supplied by the page (getBook). */
export default function BookDetail({ book: t }) {
  const { toast } = useRS();
  const copy = getCopy();
  const chaptersText = t.chapters;            // array of { title?, body[] }
  const [chapter, setChapter] = React.useState(1);
  const [done, setDone] = React.useState(0);
  const readRef = React.useRef(null);

  const cover = t.image || t.titleArt || null;
  const totalChapters = t.chapterCount || t.episodes || 60;
  const status = t.complete ? copy.reader.statusComplete : copy.reader.statusOngoing;
  const synopsis = t.synopsis || t.tagline || '';
  const genres = t.genres || [];
  const pct = Math.min(100, (done / totalChapters) * 100);

  const toReader = () => { if (readRef.current) readRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' }); };
  const finishChapter = () => {
    setDone((d) => Math.max(d, chapter));
    if (chapter < chaptersText.length) { setChapter((c) => c + 1); toReader(); }
    else toast(copy.gating.read);
  };
  const prevChapter = () => { setChapter((c) => Math.max(1, c - 1)); toReader(); };

  return (
    <div className="page book-page">
      <section className="book-detail"><div className="fhw">
        <div className="bd-grid">
          <div className="bd-cover">
            {cover
              ? <img src={cover} alt={t.title} />
              : <div className="bd-cover-art" style={{ background: `linear-gradient(160deg, ${t.tint || '#1b2950'}, #0a1228)` }}><span className="bd-cover-title">{t.title}</span></div>}
          </div>
          <div className="bd-info">
            <h1>{t.title}</h1>
            <div className="bd-tags">{genres.map((g) => <span key={g} className="bd-tag">{g}</span>)}</div>

            <div className="bd-chapters">
              <div className="bdc-head"><I.book s={20} /><span className="bdc-label">{copy.reader.chaptersLabel}</span><span className="bdc-count">{done}/{totalChapters}</span></div>
              <div className="bdc-bar"><i style={{ width: `${pct}%` }} /></div>
            </div>

            <div className="bd-status"><I.film s={18} /><span className="bdc-label">{copy.reader.storyLabel}</span><span className="bd-status-val">{status}</span></div>

            <p className="bd-syn">{synopsis}</p>

            <button className="bd-dl" onClick={() => toast(copy.toasts.download)}>{copy.buttons.download} <DownloadArrow /></button>
          </div>
        </div>
      </div></section>

      <div className="fhw"><div className="fh-sep" style={{ margin: '34px 0 0' }} /></div>

      <ChapterReader readRef={readRef} chapters={chaptersText} chapter={chapter} onPrev={prevChapter} onFinish={finishChapter} />

      <PageFooter variant="book" />
    </div>
  );
}
