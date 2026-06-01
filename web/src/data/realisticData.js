// Content for the Realistic category page (web/src/pages/RealisticPage.jsx),
// implemented from Figma file "Web" (node 109:661).
//
// As with the landing page, cover-art binaries are not bundled (figma.com egress
// is blocked in the build environment), so each poster carries a `tone` used to
// render a gradient placeholder. Drop real art in web/public/images and set an
// `image` field to use it. See web/public/images/README.md.

export const R_HERO = {
  title: 'Classroom Queen: Mafia Bloodline',
  body:
    'Top of her class by day, heir to a crime family by blood. When a rival syndicate’s heir transfers into the seat beside her, the smartest girl in school has to outplay a boy who already knows every one of her secrets.',
  genre: ['Romance', 'Crime'],
  primaryCta: 'Download the app',
  secondaryCta: 'Watch Trailer',
  tone: 5,
  image: '',
};

// A shared pool of "realistic" (live-action style) sagas reused across rows,
// the way a real catalog repeats titles between Trending / New / Recommended.
const CATALOG = [
  { key: 'alpha', title: 'Alpha is Not My Type', caption: 'Romance | Werewolf', tone: 1 },
  { key: 'silverfox', title: 'Cuffed to My Silver Fox Captain', caption: 'Romance | Drama', tone: 6 },
  { key: 'bump', title: 'From Bump to Spark', caption: 'Romance | Comedy', tone: 4 },
  { key: 'twokings', title: 'Two Alpha Kings, One Virgin Mate', caption: 'Werewolf | Comedy', tone: 2 },
  { key: 'phantom', title: 'The Phantom’s Kiss', caption: 'Romance | Supernatural', tone: 1 },
  { key: 'vampire', title: 'Billionaire Husband, Vampire King', caption: 'Romance | Fantasy', tone: 2 },
  { key: 'deadly', title: 'One Deadly Night', caption: 'Crime | Mystery', tone: 3 },
  { key: 'cursed', title: 'Cursed by My Dead Husband’s Rival', caption: 'Romance | Drama', tone: 5 },
  { key: 'twins', title: 'My Twins Have Two Daddies', caption: 'Romance | Comedy', tone: 4 },
  { key: 'lastalpha', title: 'The Last Alpha’s Bride', caption: 'Werewolf | Comedy', tone: 6 },
  { key: 'devil', title: 'Contract With a Devil', caption: 'Romance | Supernatural', tone: 7 },
  { key: 'midnight', title: 'Midnight Heir', caption: 'Romance | Drama', tone: 8 },
];
const pick = (...keys) => keys.map((k) => {
  const base = CATALOG.find((c) => c.key === k);
  return { ...base, id: undefined };
});
// give each row stable, unique ids and (for trending) a rank
const withIds = (prefix, items) =>
  items.map((it, i) => ({ ...it, id: `${prefix}${i + 1}` }));
const withRank = (items) => items.map((it, i) => ({ ...it, rank: i + 1 }));

export const R_TRENDING = {
  title: 'Trending',
  items: withRank(withIds('t', pick('alpha', 'silverfox', 'deadly', 'vampire', 'cursed', 'bump', 'twokings'))),
};
export const R_NEW = {
  title: 'New Releases',
  items: withIds('n', pick('twins', 'lastalpha', 'devil', 'midnight', 'phantom', 'silverfox', 'deadly')),
};
export const R_RECOMMENDED = {
  title: 'Recommended',
  items: withIds('rc', pick('vampire', 'bump', 'cursed', 'alpha', 'twokings', 'midnight', 'twins')),
};
export const R_GUILTY = {
  title: 'Guilty Pleasure',
  items: withIds('g', pick('lastalpha', 'phantom', 'devil', 'deadly', 'silverfox', 'alpha', 'vampire')),
};

export const R_BROWSE = [
  {
    id: 'b1',
    title: 'Romance',
    body: 'Slow burns, second chances and love that refuses to quit. Start a new heartbreak tonight.',
    cta: 'Browse more',
    tone: 4,
  },
  {
    id: 'b2',
    title: 'Werewolf & Fated Mates',
    body: 'Alphas, rival packs and bonds written in the blood. The full-moon binge starts here.',
    cta: 'Browse more',
    tone: 6,
  },
  {
    id: 'b3',
    title: 'Crime & Thriller',
    body: 'Cold cases, dangerous alliances and twists you won’t see coming. Watch with the lights on.',
    cta: 'Browse more',
    tone: 3,
  },
];
