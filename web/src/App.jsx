import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import RealisticPage from './pages/RealisticPage';
import BooksPage from './pages/BooksPage';
import HomePage from './pages/HomePage';
import VideoPlayerPage from './pages/VideoPlayerPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/realistic" element={<RealisticPage />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/app" element={<HomePage />} />
        <Route path="/player/:movieId" element={<VideoPlayerPage />} />
      </Routes>
    </Router>
  );
}

export default App;
