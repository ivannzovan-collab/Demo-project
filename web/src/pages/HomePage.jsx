import { useNavigate } from 'react-router-dom';
import { MOCK_MOVIES, TRENDING_IDS, NEW_RELEASE_IDS, CONTINUE_WATCHING } from '../data/mockData';
import './HomePage.css';

function HomePage() {
  const navigate = useNavigate();

  const handleMovieClick = (movieId, startEpisode = 0) => {
    navigate(`/player/${movieId}?episode=${startEpisode}`);
  };

  const renderMovieCard = (movie, showProgress = null) => (
    <div
      key={movie.id}
      className="movie-card"
      onClick={() => handleMovieClick(movie.id, 0)}
    >
      <img src={movie.thumbnailUrl} alt={movie.title} className="movie-thumbnail" />
      {showProgress !== null && (
        <div className="progress-bar">
          <div className="progress" style={{ width: `${showProgress * 100}%` }} />
        </div>
      )}
      <h3 className="movie-title">{movie.title}</h3>
      <div className="genre-tags">
        {movie.genre.slice(0, 2).map((g, i) => (
          <span key={i} className="genre-tag">{g}</span>
        ))}
      </div>
      <div className="movie-meta">
        <span className="rating">⭐ {movie.rating}</span>
        <span className="episodes">{movie.totalEpisodes} eps</span>
      </div>
    </div>
  );

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
              onClick={() => handleMovieClick(item.movie.id, item.episodeNumber - 1)}
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

  const renderSection = (title, movieIds) => {
    const movies = movieIds
      .map(id => MOCK_MOVIES.find(m => m.id === id))
      .filter(Boolean);

    return (
      <div className="section">
        <h2 className="section-title">{title}</h2>
        <div className="movie-scroll">
          {movies.map(movie => renderMovieCard(movie))}
        </div>
      </div>
    );
  };

  return (
    <div className="home-page">
      <header className="header">
        <h1 className="logo">DramaSnap</h1>
        <div className="header-right">
          <button className="icon-button">🔍</button>
          <button className="icon-button">👤</button>
        </div>
      </header>

      <main className="main-content">
        {renderContinueWatching()}
        {renderSection('🔥 Trending This Week', TRENDING_IDS)}
        {renderSection('🆕 New This Week', NEW_RELEASE_IDS)}

        <div className="section">
          <h2 className="section-title">All Movies</h2>
          <div className="movie-scroll">
            {MOCK_MOVIES.map(movie => renderMovieCard(movie))}
          </div>
        </div>

        <footer className="footer">
          <p>🤖 Powered by AI-Generated Content</p>
          <p className="demo-note">Web Demo Version - Full mobile experience coming soon!</p>
        </footer>
      </main>
    </div>
  );
}

export default HomePage;
