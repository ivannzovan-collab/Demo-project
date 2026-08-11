import { useEffect, useMemo } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { MOCK_MOVIES, CONTINUE_WATCHING } from '../data/mockData';
import { rankBooks } from '../lib/personalization';
import { buildShelves } from '../lib/shelves';
import { getUser, getABVariant, loadTable, getCatalog } from '../lib/userState';
import { coverGradient, RS_PREFIX } from '../data/seriesMedia';
import DevPanel from '../components/DevPanel';
import './HomePage.css';

function HomePage() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const user = getUser();
  const variant = getABVariant();
  const table = loadTable();       // null when delivery failed (fail-open)
  const catalog = getCatalog();    // the app's catalog always exists
  // Control renders plist order everywhere; missing table fails open the same way.
  const personalized = variant === 'treatment' && !!table;
  const picks = personalized ? user.picks : [];

  // Onboarding runs once, treatment arm only; skip never blocks home.
  useEffect(() => {
    if (variant === 'treatment' && table && !user.onboardingDone) {
      navigate('/onboarding', { replace: true });
    }
  }, [variant, table, user.onboardingDone, navigate]);

  // One sort at app open, frozen for the session (pure + deterministic).
  const { shelves, wasPos, nowPos } = useMemo(
    () => buildShelves(catalog, picks, personalized && picks.length > 0),
    [catalog, personalized, picks.join('|')],
  );
  const books = useMemo(
    () => rankBooks(catalog, picks),
    [catalog, picks.join('|')],
  );

  const tab = searchParams.get('tab') === 'books' ? 'books' : 'videos';
  const readingBook = books.find(b => String(b.id) === searchParams.get('read'));

  const setTab = (t) => {
    const next = new URLSearchParams(searchParams);
    if (t === 'books') next.set('tab', 'books');
    else next.delete('tab');
    next.delete('read');
    setSearchParams(next, { replace: true });
  };

  const openBook = (book) => {
    const next = new URLSearchParams(searchParams);
    next.set('tab', 'books');
    next.set('read', String(book.id));
    setSearchParams(next);
  };

  const closeBook = () => {
    const next = new URLSearchParams(searchParams);
    next.delete('read');
    setSearchParams(next, { replace: true });
  };

  const playSeries = (series) => {
    navigate(`/player/${RS_PREFIX}${series.id}?episode=0`);
  };

  const renderSeriesCard = (series, shelf) => {
    const moved =
      shelf.rerankable &&
      personalized &&
      series.hits?.length > 0 &&
      nowPos[series.id] < wasPos[series.id];
    return (
      <div key={series.id} className="movie-card" onClick={() => playSeries(series)}>
        <div className="series-art" style={{ background: coverGradient(series.title) }}>
          {shelf.key === 'exclusive' && <span className="series-badge">EXCLUSIVE</span>}
          {shelf.key === 'upcoming' && <span className="series-badge upcoming">SOON</span>}
          {moved && (
            <span className="series-badge lift">▲ was #{wasPos[series.id]}</span>
          )}
          {series.formats.includes('anime') && <span className="series-format">ANIME</span>}
        </div>
        <h3 className="movie-title">{series.title}</h3>
        <div className="genre-tags">
          {series.tags.slice(0, 2).map((t, i) => (
            <span key={i} className={`genre-tag ${series.hits?.includes?.(t) ? 'hit' : ''}`}>{t}</span>
          ))}
        </div>
        <div className="movie-meta">
          {table && (
            <span className="rating">
              ★ {personalized && series.hits?.length ? series.final : series.score}
            </span>
          )}
          {personalized && series.hits?.length > 0 && (
            <span className="match-note">matches {series.hits[0]}</span>
          )}
        </div>
      </div>
    );
  };

  const renderContinueWatching = () => {
    const continueItems = CONTINUE_WATCHING.map(item => {
      const movie = MOCK_MOVIES.find(m => m.id === item.movieId);
      return movie ? { movie, ...item } : null;
    }).filter(Boolean);

    if (continueItems.length === 0) return null;

    return (
      <div className="section">
        <h2 className="section-title">Continue Watching</h2>
        <div className="continue-scroll">
          {continueItems.map(item => (
            <div
              key={item.movie.id}
              className="continue-card"
              onClick={() => navigate(`/player/${item.movie.id}?episode=${item.episodeNumber - 1}`)}
            >
              <img src={item.movie.thumbnailUrl} alt={item.movie.title} className="continue-thumbnail" />
              <div className="progress-bar">
                <div className="progress" style={{ width: `${item.progress * 100}%` }} />
              </div>
              <div className="continue-info">
                <h3 className="continue-title">{item.movie.title}</h3>
                <p className="episode-number">Episode {item.episodeNumber}/{item.movie.totalEpisodes}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="home-page">
      <header className="header">
        <h1 className="logo">ReelSaga</h1>
        <nav className="tab-nav">
          <button className={`tab-button ${tab === 'videos' ? 'active' : ''}`} onClick={() => setTab('videos')}>
            Videos
          </button>
          <button className={`tab-button ${tab === 'books' ? 'active' : ''}`} onClick={() => setTab('books')}>
            Books
          </button>
        </nav>
        <div className="header-right">
          <button className="icon-button">🔍</button>
          <button className="icon-button" onClick={() => navigate('/onboarding')} title="Retake onboarding">👤</button>
        </div>
      </header>

      {personalized && picks.length > 0 && (
        <div className="for-you-bar">
          For you: {picks.join(' · ')}
          <button className="for-you-edit" onClick={() => navigate('/onboarding')}>Edit</button>
        </div>
      )}

      <main className="main-content">
        {tab === 'videos' && (
          <>
            {renderContinueWatching()}
            {shelves.map(shelf => (
              <div className="section" key={shelf.key}>
                <h2 className="section-title">{shelf.title}</h2>
                <div className="movie-scroll">
                  {shelf.items.map(s => renderSeriesCard(s, shelf))}
                </div>
              </div>
            ))}
          </>
        )}

        {tab === 'books' && (
          <div className="section">
            <h2 className="section-title">📚 Books for you</h2>
            <div className="book-list">
              {books.map((book, i) => (
                <div key={book.id} className={`book-row ${book.hits.length ? 'matched' : ''}`} onClick={() => openBook(book)}>
                  <span className="book-rank">{i + 1}</span>
                  <div className="book-cover" style={{ background: coverGradient(book.title) }}>📖</div>
                  <div className="book-info">
                    <h3 className="book-title">{book.title}</h3>
                    <p className="book-tags">
                      {book.tags.slice(0, 4).join(' · ')}
                      {book.hits.length > 0 && (
                        <span className="match-note"> — matches {book.hits.join(', ')}</span>
                      )}
                    </p>
                  </div>
                  <button className="book-read" onClick={(e) => { e.stopPropagation(); openBook(book); }}>
                    READ
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        <footer className="footer">
          <p>🤖 Powered by AI-Generated Content</p>
          <p className="demo-note">
            ReelSaga v1-lite prototype · arm: {variant}
            {!table && ' · table missing — fail-open plist order'}
          </p>
        </footer>
      </main>

      {readingBook && (
        <div className="reader-overlay" onClick={closeBook}>
          <div className="reader-modal" onClick={(e) => e.stopPropagation()}>
            <button className="reader-close" onClick={closeBook}>✕</button>
            <div className="reader-cover" style={{ background: coverGradient(readingBook.title) }} />
            <h2 className="reader-title">{readingBook.title}</h2>
            <p className="reader-chapter">Chapter 1</p>
            <p className="reader-body">
              This is the free first chapter. In the prototype, chapter text is a
              placeholder — the full reading experience ships with the books
              content pipeline.
            </p>
            <p className="reader-body reader-sample">
              {readingBook.tags.join(' · ')}
            </p>
          </div>
        </div>
      )}

      <DevPanel />
    </div>
  );
}

export default HomePage;
