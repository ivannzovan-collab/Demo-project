import React from 'react';
import { RSCtx } from './hooks/useRS';
import { track } from './lib/analytics';
import I from './components/common/icons';
import Header from './components/layout/Header';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import BooksPage from './pages/BooksPage';
import BookPage from './pages/BookPage';
import BlogPage from './pages/BlogPage';
import ArticlePage from './pages/ArticlePage';
import AuthModal from './components/auth/AuthModal';
import SearchOverlay from './components/layout/SearchOverlay';
import SeriesModal from './components/series/SeriesModal';

/* App shell: hash-based routing + the global search / series / toast overlays.
   Holds no content — each route renders a page; pages own their composition. */
function App() {
  const [route, setRoute] = React.useState({ view: 'home', params: {} });
  const [signIn, setSignIn] = React.useState(false);
  const [search, setSearch] = React.useState(false);
  const [series, setSeries] = React.useState(null);
  const [toastMsg, setToastMsg] = React.useState(null);
  const toastTimer = React.useRef(0);

  const go = React.useCallback((view, params = {}) => {
    track('Page Viewed', { view, ...(params.id ? { id: params.id } : {}) });
    setRoute({ view, params });
    window.history.pushState({ view, params }, '', '#' + view + (params.id ? '/' + params.id : ''));
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const toast = React.useCallback((msg) => {
    setToastMsg(msg);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToastMsg(null), 2800);
  }, []);

  // browser back/forward + initial hash
  React.useEffect(() => {
    const onPop = (e) => { if (e.state && e.state.view) setRoute({ view: e.state.view, params: e.state.params || {} }); else setRoute({ view: 'home', params: {} }); window.scrollTo(0, 0); };
    window.addEventListener('popstate', onPop);
    const h = window.location.hash.replace('#', '');
    if (h) { const [v, id] = h.split('/'); if (v) setRoute({ view: v, params: id ? { id } : {} }); }
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  // cmd/ctrl+k or "/" opens search
  React.useEffect(() => {
    const k = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); setSearch((s) => !s); }
      if (e.key === '/' && !/INPUT|TEXTAREA/.test(document.activeElement.tagName)) { e.preventDefault(); setSearch(true); }
    };
    window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k);
  }, []);

  const ctx = {
    view: route.view, params: route.params, go,
    openSignIn: () => setSignIn(true),
    openSearch: () => setSearch(true),
    openSeries: (id) => { track('Series Opened', { id }); setSeries(id); },
    toast,
  };

  let body;
  switch (route.view) {
    case 'home': body = <HomePage />; break;
    case 'realistic': case 'animated': body = <CategoryPage key={route.view} type={route.view} />; break;
    case 'books': body = <BooksPage key="books" />; break;
    case 'book': body = <BookPage key={route.params.id} id={route.params.id} />; break;
    case 'blog': body = <BlogPage />; break;
    case 'article': body = <ArticlePage key={route.params.id} id={route.params.id} />; break;
    default: body = <HomePage />;
  }

  return (
    <RSCtx.Provider value={ctx}>
      <Header />
      {body}
      {signIn && <AuthModal onClose={() => setSignIn(false)} />}
      {search && <SearchOverlay onClose={() => setSearch(false)} />}
      {series && <SeriesModal id={series} onClose={() => setSeries(null)} />}
      {toastMsg && <div className="toast"><I.check s={18} />{toastMsg}</div>}
    </RSCtx.Provider>
  );
}

export { App };
export default App;
