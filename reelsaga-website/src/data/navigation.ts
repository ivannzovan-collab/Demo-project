/* Header tabs + the small per-page footer links. */

import type { NavItem } from '../types';

export const navigation = {
  // Main header tabs (centre of the nav bar).
  tabs: [
    ['home', 'Home'],
    ['realistic', 'Realistic'],
    ['animated', 'Animated'],
    ['books', 'Books'],
  ] as NavItem[],
  // Standalone right-aligned header tab.
  blog: ['blog', 'Blog'] as NavItem,
};

// Small footer at the bottom of every page: [label, toast message].
export const pageFooter: Array<[label: string, toast: string]> = [
  ['Privacy Policy', 'Privacy Policy'],
  ['Terms', 'Terms'],
];

export default navigation;
