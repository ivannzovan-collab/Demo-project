import { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { MOCK_MOVIES } from '../data/mockData';
import './VideoPlayerPage.css';

function VideoPlayerPage() {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const movie = MOCK_MOVIES.find(m => m.id === movieId);
  const startEpisode = parseInt(searchParams.get('episode') || '0');

  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(startEpisode);
  const [showControls, setShowControls] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const videoRef = useRef(null);
  const controlsTimerRef = useRef(null);

  if (!movie) {
    return <div className="error">Movie not found</div>;
  }

  const currentEpisode = movie.episodes[currentEpisodeIndex];

  useEffect(() => {
    const resetControlsTimer = () => {
      if (controlsTimerRef.current) {
        clearTimeout(controlsTimerRef.current);
      }
      setShowControls(true);

      if (!isPaused) {
        controlsTimerRef.current = setTimeout(() => {
          setShowControls(false);
        }, 3000);
      }
    };

    resetControlsTimer();

    return () => {
      if (controlsTimerRef.current) {
        clearTimeout(controlsTimerRef.current);
      }
    };
  }, [isPaused, currentEpisodeIndex]);

  const goToNextEpisode = () => {
    if (currentEpisodeIndex < movie.episodes.length - 1) {
      setCurrentEpisodeIndex(currentEpisodeIndex + 1);
      setProgress(0);
      setIsPaused(false);
    } else {
      navigate('/');
    }
  };

  const goToPreviousEpisode = () => {
    if (currentEpisodeIndex > 0) {
      setCurrentEpisodeIndex(currentEpisodeIndex - 1);
      setProgress(0);
      setIsPaused(false);
    } else {
      navigate('/');
    }
  };

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPaused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
      setIsPaused(!isPaused);
    }
  };

  const handleVideoClick = () => {
    if (!showControls) {
      setShowControls(true);
    }
  };

  const handleVideoEnd = () => {
    setTimeout(() => {
      goToNextEpisode();
    }, 1000);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const duration = videoRef.current.duration;
      if (duration > 0) {
        setProgress(current / duration);
      }
    }
  };

  const handleKeyPress = (e) => {
    switch(e.key) {
      case ' ':
        e.preventDefault();
        handlePlayPause();
        break;
      case 'ArrowRight':
        goToNextEpisode();
        break;
      case 'ArrowLeft':
        goToPreviousEpisode();
        break;
      case 'Escape':
        navigate('/');
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [currentEpisodeIndex, isPaused]);

  return (
    <div className="video-player-page">
      <div className="video-container" onClick={handleVideoClick}>
        <video
          ref={videoRef}
          src={currentEpisode.videoUrl}
          className="video"
          autoPlay
          onEnded={handleVideoEnd}
          onTimeUpdate={handleTimeUpdate}
        />

        {showControls && (
          <div className="controls-overlay">
            <div className="top-bar">
              <button className="back-button" onClick={() => navigate('/')}>
                ← Back
              </button>
              <div className="episode-info">
                <div className="episode-text">
                  Episode {currentEpisodeIndex + 1}/{movie.episodes.length}
                </div>
                <div className="episode-title">{currentEpisode.title}</div>
              </div>
              <div className="placeholder"></div>
            </div>

            <div className="center-controls">
              <button className="play-button" onClick={handlePlayPause}>
                {isPaused ? '▶️' : '⏸'}
              </button>
            </div>

            <div className="bottom-bar">
              <div className="progress-container">
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${progress * 100}%` }} />
                </div>
              </div>

              <div className="movie-info">
                <h2 className="movie-title">{movie.title}</h2>
                <p className="movie-genre">{movie.genre.join(' • ')}</p>
              </div>

              <div className="action-buttons">
                <button className="action-button">
                  <span className="action-icon">❤️</span>
                  <span className="action-text">Like</span>
                </button>
                <button className="action-button">
                  <span className="action-icon">💬</span>
                  <span className="action-text">Comment</span>
                </button>
                <button className="action-button">
                  <span className="action-icon">↗️</span>
                  <span className="action-text">Share</span>
                </button>
              </div>

              <div className="navigation-hints">
                <div className="hint-row">
                  <button
                    className="nav-button"
                    onClick={goToPreviousEpisode}
                    disabled={currentEpisodeIndex === 0}
                  >
                    ← Previous Episode
                  </button>
                  <button
                    className="nav-button"
                    onClick={goToNextEpisode}
                    disabled={currentEpisodeIndex === movie.episodes.length - 1}
                  >
                    Next Episode →
                  </button>
                </div>
                <div className="keyboard-hints">
                  <span>Space: Play/Pause</span>
                  <span>←/→: Navigate</span>
                  <span>Esc: Exit</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default VideoPlayerPage;
