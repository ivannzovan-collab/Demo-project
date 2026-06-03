import React from 'react';

const Moon = () => <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>;
const Sun = () => <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>;

/* Dark / Light reading-mode toggle for the book reader. */
export default function ReadingModeToggle({ dark, onChange }) {
  return (
    <div className="br-toggle">
      <button className={`brt ${dark ? 'on' : ''}`} onClick={() => onChange(true)} aria-label="Dark reading mode"><Moon /></button>
      <button className={`brt ${!dark ? 'on' : ''}`} onClick={() => onChange(false)} aria-label="Light reading mode"><Sun /></button>
    </div>
  );
}
