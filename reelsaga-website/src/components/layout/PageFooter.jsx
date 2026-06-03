import React from 'react';
import { useRS } from '../../hooks/useRS';
import { getPageFooter, getCopy } from '../../content';

/* The small footer at the bottom of every page. The Book reader uses slightly
   different class names, so pass variant="book". Links come from content. */
export default function PageFooter({ variant = 'fh', style }) {
  const { toast } = useRS();
  const links = getPageFooter();
  const { copyright } = getCopy();
  const c = variant === 'book'
    ? { foot: 'book-foot', inner: 'fhw bf-in', copy: 'bf-copy', links: 'bf-links' }
    : { foot: 'fh-foot', inner: 'fhw fh-foot-in', copy: 'fcopy', links: 'flinks' };
  return (
    <footer className={c.foot} style={style}>
      <div className={c.inner}>
        <span className={c.copy}>{copyright}</span>
        <div className={c.links}>
          {links.map(([label, msg]) => <a key={label} onClick={() => toast(msg)}>{label}</a>)}
        </div>
      </div>
    </footer>
  );
}
