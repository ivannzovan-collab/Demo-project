// Content for the ReelSaga landing page (web/src/pages/LandingPage.jsx).
// Implemented from Figma file "Web" (node 109:173).
//
// Image fills from the design could not be bundled (the cover art lives behind
// figma.com asset URLs that this environment cannot reach), so each item carries
// an optional `image` path under /images and a `tone` used to render a styled
// gradient placeholder until the real artwork is dropped in. See
// web/public/images/figma-assets.json for the full asset manifest.

export const NAV_LINKS = [
  { label: 'Home', href: '#top', active: true },
  { label: 'Realistic', href: '#originals' },
  { label: 'Animated', href: '#must-watch' },
  { label: 'Books', href: '#reviews' },
];

export const HERO = {
  title: 'Your next obsession starts here.',
  body:
    'ReelSaga is the home of serialized vertical fiction. New chapters drop daily — crime, romance, sci-fi, slow-burn. Watch one, or fall into all twelve.',
  primaryCta: 'Download the app',
  secondaryCta: 'Browse Animated',
};

// Three vertical previews stacked on the right of the hero.
export const HERO_PREVIEWS = [
  { title: 'The Phantom’s Kiss', tone: 1, image: '' },
  { title: 'One Deadly Night', tone: 3, image: '' },
  { title: 'Cursed by My Dead Husband’s Rival', tone: 5, image: '' },
];

export const ORIGINALS = {
  eyebrow: 'Sagas you won’t find anywhere else.',
  body:
    'Made in-house and impossible to binge responsibly. Every ReelSaga Original is written, shot and scored for the vertical screen.',
  items: [
    { id: 'o1', title: 'The Phantom’s Kiss', genre: ['Romance', 'Supernatural'], rating: 4.9, episodes: 48, tone: 1 },
    { id: 'o2', title: 'Billionaire Husband, Vampire King', genre: ['Romance', 'Fantasy'], rating: 4.8, episodes: 60, tone: 2 },
    { id: 'o3', title: 'One Deadly Night', genre: ['Thriller', 'Crime'], rating: 4.7, episodes: 36, tone: 3 },
    { id: 'o4', title: 'Cursed by My Dead Husband’s Rival', genre: ['Drama', 'Revenge'], rating: 4.9, episodes: 52, tone: 5 },
    { id: 'o5', title: 'My Twins Have Two Daddies', genre: ['Romance', 'Comedy'], rating: 4.6, episodes: 40, tone: 4 },
    { id: 'o6', title: 'The Suburban Strangler', genre: ['Crime', 'Mystery'], rating: 4.9, episodes: 44, tone: 6 },
  ],
};

// Spotlight banner.
export const FEATURED = {
  title: 'The Suburban Strangler',
  status: 'Complete',
  genre: ['Crime', 'Mystery'],
  cta: 'Watch now',
  tone: 6,
  image: '',
  body:
    'A forensic cleaner searching for his missing sister and a detective hunting her father’s killer are forced into a dangerous alliance. When a fresh crime scene reveals an impossible link between their tragedies, they uncover a deadly secret that turns them from hunters into the hunted.',
};

export const MUST_WATCH = {
  eyebrow: '4.9★ from people who couldn’t put it down.',
  body:
    'Reader-favourite chapters and breakout hits, refreshed every week. If the whole feed is talking about it, you’ll find it here.',
  items: [
    { id: 'm1', title: 'Midnight Heir', genre: ['Romance', 'Drama'], rating: 4.8, episodes: 50, tone: 2 },
    { id: 'm2', title: 'Nan Shorts: Reborn', genre: ['Animated', 'Fantasy'], rating: 4.7, episodes: 30, tone: 7 },
    { id: 'm3', title: 'The Last Alpha’s Bride', genre: ['Romance', 'Fantasy'], rating: 4.9, episodes: 56, tone: 4 },
    { id: 'm4', title: 'Contract With a Devil', genre: ['Supernatural', 'Romance'], rating: 4.6, episodes: 42, tone: 1 },
    { id: 'm5', title: 'Heir to Nothing', genre: ['Drama', 'Revenge'], rating: 4.8, episodes: 48, tone: 5 },
    { id: 'm6', title: 'Stardust Academy', genre: ['Animated', 'Sci-fi'], rating: 4.5, episodes: 24, tone: 8 },
  ],
};

export const REVIEWS = {
  eyebrow: '4.9★ from people who couldn’t put it down.',
  body:
    'Two million chapters watched and counting. Here’s what keeps ReelSaga regulars coming back every single day.',
  items: [
    {
      id: 'r1',
      quote:
        'I came for one chapter and lost an entire weekend. ReelSaga finally gets what serialized drama should feel like.',
      name: 'Mara K.',
      handle: 'Premium member · 1 yr',
      rating: 5,
    },
    {
      id: 'r2',
      quote:
        'The vertical format is genius. It’s the only app that survives my commute and somehow makes it too short.',
      name: 'Devon R.',
      handle: 'Daily watcher',
      rating: 5,
    },
    {
      id: 'r3',
      quote:
        'The Originals here beat half of what’s on the big streamers. Bold, bingeable and gorgeous on a phone.',
      name: 'Priya S.',
      handle: 'Premium member · 6 mo',
      rating: 5,
    },
  ],
};

export const FOOTER_CTA = {
  title: 'Your next obsession\nis six minutes long.',
  body:
    'Free to start. New chapters drop every day. Take the saga with you — on iOS, Android, and the big screen.',
  primaryCta: 'Download the app',
  secondaryCta: 'Start watching',
};

export const FOOTER = {
  copyright: '© 2026 ReelSaga',
  links: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms', href: '#' },
  ],
};
