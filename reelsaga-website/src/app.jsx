import React from 'react';
import { RSCtx, Nav, I } from './components.jsx';
import { Home } from './home3.jsx';
import { Catalog } from './catalog2.jsx';
import { TitleDetail } from './catalog.jsx';
import { Blog, Article } from './blog2.jsx';
import { SignInModal, SearchOverlay } from './widgets.jsx';
import { SeriesOverlay } from './series-modal.jsx';
/* global React, ReactDOM, RSCtx, Nav, Home, Catalog, TitleDetail, Blog, Article, SignInModal, SearchOverlay, I */
const { useState: aUS, useEffect: aUE, useCallback } = React;

function App() {
  const [route, setRoute] = aUS({ view:'home', params:{} });
  const [signIn, setSignIn] = aUS(false);
  const [search, setSearch] = aUS(false);
  const [series, setSeries] = aUS(null);
  const [toastMsg, setToastMsg] = aUS(null);
  const toastTimer = React.useRef(0);

  const go = useCallback((view, params={}) => {
    setRoute({ view, params });
    window.history.pushState({ view, params }, '', '#' + view + (params.id ? '/'+params.id : ''));
    window.scrollTo({ top:0, behavior:'auto' });
  }, []);

  const toast = useCallback((msg) => {
    setToastMsg(msg);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(()=>setToastMsg(null), 2800);
  }, []);

  // back/forward
  aUE(() => {
    const onPop = (e) => { if (e.state && e.state.view) setRoute({ view:e.state.view, params:e.state.params||{} }); else setRoute({ view:'home', params:{} }); window.scrollTo(0,0); };
    window.addEventListener('popstate', onPop);
    // initial hash
    const h = window.location.hash.replace('#','');
    if (h) { const [v,id] = h.split('/'); if (v) setRoute({ view:v, params: id?{id}:{} }); }
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  // cmd+k search
  aUE(() => {
    const k = (e) => {
      if ((e.metaKey||e.ctrlKey) && e.key.toLowerCase()==='k') { e.preventDefault(); setSearch(s=>!s); }
      if (e.key === '/' && !/INPUT|TEXTAREA/.test(document.activeElement.tagName)) { e.preventDefault(); setSearch(true); }
    };
    window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k);
  }, []);

  const ctx = { view: route.view, params: route.params, go, openSignIn:()=>setSignIn(true), openSearch:()=>setSearch(true), openSeries:(id)=>setSeries(id), toast };

  let body;
  switch (route.view) {
    case 'home': body = <Home/>; break;
    case 'realistic': case 'animated': case 'books': body = <Catalog key={route.view} type={route.view}/>; break;
    case 'title': body = <TitleDetail key={route.params.id} id={route.params.id}/>; break;
    case 'blog': body = <Blog/>; break;
    case 'article': body = <Article key={route.params.id} id={route.params.id}/>; break;
    default: body = <Home/>;
  }

  return (
    <RSCtx.Provider value={ctx}>
      <Nav/>
      {body}
      {signIn && <SignInModal onClose={()=>setSignIn(false)}/>}
      {search && <SearchOverlay onClose={()=>setSearch(false)}/>}
      {series && <SeriesOverlay id={series} onClose={()=>setSeries(null)}/>}
      {toastMsg && <div className="toast"><I.check s={18}/>{toastMsg}</div>}
    </RSCtx.Provider>
  );
}

export { App };
