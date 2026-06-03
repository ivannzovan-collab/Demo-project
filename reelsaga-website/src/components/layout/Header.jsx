import React from 'react';
import { useRS } from '../../hooks/useRS';
import { getNavigation } from '../../content';
import I from '../common/icons';
import BrandMark from '../common/BrandMark';

/* Top navigation bar (tabs + blog link + search + mobile menu). */
export default function Header() {
  const { view, go, openSearch } = useRS();
  const { tabs, blog } = getNavigation();
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  React.useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on(); window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  React.useEffect(() => { setMenuOpen(false); }, [view]); // close mobile menu on navigation
  const navTo = (k) => { setMenuOpen(false); go(k); };
  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
      <div className="wrap">
        <BrandMark onClick={() => navTo('home')} />
        <div className="nav-links">
          {tabs.map(([k, label]) => (
            <button key={k} className={`nav-link ${view === k ? 'active' : ''}`} onClick={() => go(k)}>{label}</button>
          ))}
        </div>
        <div className="nav-right">
          <button className={`nav-link ${view === blog[0] ? 'active' : ''}`} onClick={() => go(blog[0])}>{blog[1]}</button>
          <button className="nav-icon-btn" aria-label="Search" onClick={openSearch}><I.search s={19} /></button>
          <button className="nav-burger" aria-label="Menu" aria-expanded={menuOpen} onClick={() => setMenuOpen((o) => !o)}>
            {menuOpen ? <I.close s={22} /> : <I.menu s={22} />}
          </button>
        </div>
      </div>
      <div className="nav-mobile">
        {tabs.map(([k, label]) => (
          <button key={k} className={`nav-mlink ${view === k ? 'active' : ''}`} onClick={() => navTo(k)}>{label}</button>
        ))}
        <button className={`nav-mlink ${view === blog[0] ? 'active' : ''}`} onClick={() => navTo(blog[0])}>{blog[1]}</button>
      </div>
    </nav>
  );
}
