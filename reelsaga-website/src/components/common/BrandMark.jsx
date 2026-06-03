import React from 'react';
import { getConfig } from '../../content';

/* The ReelSaga wordmark/logo button (brand assets come from config). */
export default function BrandMark({ onClick }) {
  const { brand } = getConfig();
  return (
    <button className="brand" onClick={onClick} aria-label={`${brand.name} home`}>
      <img className="brand-logo" src={brand.logo} alt={brand.name} />
    </button>
  );
}
