import React from 'react';
import { useRS, I } from './components.jsx';
import { RS_GET } from './data.js';
/* ReelSaga — Book detail + chapter reader (Figma node 173:318) */
const { useEffect: bkE, useState: bkS } = React;

/* curved "download/share" arrow used on the site's Download buttons */
const DlArrow = () => (
  <svg width="21" height="18" viewBox="0 0 23 20" fill="none" style={{ flex: 'none' }}>
    <path d="M17.2569 14.1873L21.8618 9.7684L12.6519 0.930664V5.95413H10.2332C5.1166 5.95413 0.930298 10.1404 0.930298 15.257V18.327C0.930298 18.6061 1.20938 18.8851 1.48847 18.8851H1.5815C1.76756 18.8851 1.95362 18.6991 2.04664 18.513C2.2327 15.8152 4.46539 13.7686 7.16323 13.7686H12.6519V18.6061L14.9544 16.3967" stroke="currentColor" strokeWidth="1.86058" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const Moon = () => <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>;
const Sun = () => <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>;

const CHAPTER_BODY = [
  'The rain had not stopped for three days, and Mia had run out of excuses. She stood under the awning of a shuttered diner on the edge of the Nightfell district, soaked to the bone, watching the last bus splash away without her — and that was the precise, humiliating moment a black car slowed at the curb and a low voice asked if she needed a ride.',
  'She should have said no. Everyone in the city knew the rules about the people who lived past the river: you did not get in their cars, you did not learn their names, and you certainly did not, under any circumstances, tell a room full of them that the brooding stranger beside you was your boyfriend. Mia did all three before the night was over.',
  'In her defense, the man — Kael, she would learn far too late — had not corrected her. He had simply raised one eyebrow, slid an arm around her waist as if they had practiced it a hundred times, and let the lie stand in front of the entire Nightfell court. By the time she understood what she had agreed to, the moon was up, the doors were locked, and the only way out was through.',
  'One moon cycle. That was the bargain she had stumbled into: pretend long enough to satisfy a council that wanted Kael weak and mateless, and walk away free. Simple, if she could keep her story straight, survive the people who saw straight through it, and ignore the inconvenient, dangerous truth that the fake thing she had invented was starting to feel like the only real thing she had left.',
];

function BookDetail({ id }) {
  const { go, toast } = useRS();
  const t = RS_GET(id);
  const [dark, setDark] = bkS(true);
  bkE(() => { window.scrollTo(0, 0); }, [id]);
  if (!t) return <div className="page" style={{ paddingTop: 220, textAlign: 'center' }}><p>Book not found.</p><button className="bd-dl" style={{ margin: '18px auto 0' }} onClick={() => go('books')}>Back to Books</button></div>;

  const cover = t.image || t.titleArt || null;
  const chapters = t.chapters || t.episodes || 60;
  const status = t.complete ? 'Complete' : 'Ongoing';
  const synopsis = t.synopsis || t.tagline || '';
  const genres = t.genres || [];

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
              <div className="bdc-head"><I.book s={20} /><span className="bdc-label">Chapters:</span><span className="bdc-count">0/{chapters}</span></div>
              <div className="bdc-bar"><i style={{ width: '0%' }} /></div>
            </div>

            <div className="bd-status"><I.film s={18} /><span className="bdc-label">Story:</span><span className="bd-status-val">{status}</span></div>

            <p className="bd-syn">{synopsis}</p>

            <button className="bd-dl" onClick={() => toast('Heading to the App Store…')}>Download the app <DlArrow /></button>
          </div>
        </div>
      </div></section>

      <div className="fhw"><div className="fh-sep" style={{ margin: '34px 0 0' }} /></div>

      <section className={`book-read ${dark ? 'is-dark' : 'is-light'}`}><div className="fhw">
        <div className="br-grid">
          <article className="br-article">
            <h2>Chapter 1</h2>
            {CHAPTER_BODY.map((p, i) => <p key={i}>{p}</p>)}
          </article>
          <div className="br-toggle">
            <button className={`brt ${dark ? 'on' : ''}`} onClick={() => setDark(true)} aria-label="Dark reading mode"><Moon /></button>
            <button className={`brt ${!dark ? 'on' : ''}`} onClick={() => setDark(false)} aria-label="Light reading mode"><Sun /></button>
          </div>
        </div>
      </div></section>

      <footer className="book-foot"><div className="fhw bf-in">
        <span className="bf-copy">2026 Reel saga</span>
        <div className="bf-links">
          <a onClick={() => toast('Privacy Policy')}>Privacy Policy</a>
          <a onClick={() => toast('Terms')}>Terms</a>
        </div>
      </div></footer>
    </div>
  );
}

export { BookDetail };
