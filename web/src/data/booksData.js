// Content for the Books category page (web/src/pages/BooksPage.jsx),
// implemented from Figma file "Web" (node 109:1110).
//
// Cover-art binaries are not bundled (figma.com egress is blocked in the build
// environment); each cover uses a `tone` gradient placeholder. See
// web/public/images/README.md to add real artwork.

export const B_HERO = {
  title: 'Classroom Queen: Mafia Bloodline',
  body:
    'The web-novel sensation, now on ReelSaga. Top of her class by day, heir to a crime family by blood — read every chapter of the saga that started it all before the series drops.',
  genre: ['Romance', 'Crime'],
  primaryCta: 'Download the app',
  secondaryCta: 'Start Reading',
  tone: 5,
  image: '',
};

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
const pick = (...keys) => keys.map((k) => CATALOG.find((c) => c.key === k));
const withIds = (prefix, items) => items.map((it, i) => ({ ...it, id: `${prefix}${i + 1}` }));
const withRank = (items) => items.map((it, i) => ({ ...it, rank: i + 1 }));
const titlesOnly = (items) => items.map(({ caption, ...rest }) => rest);

// Featured "Top 5" coverflow — rank badges, no genre caption.
export const B_TOP = withRank(
  titlesOnly(withIds('top', pick('cursed', 'vampire', 'alpha', 'silverfox', 'deadly'))),
);

export const B_NEW = {
  title: 'New Releases',
  items: withIds('bn', pick('twins', 'lastalpha', 'devil', 'midnight', 'phantom', 'silverfox', 'deadly')),
};
export const B_TRENDING = {
  title: 'Trending',
  items: withRank(withIds('bt', pick('alpha', 'cursed', 'vampire', 'bump', 'twokings', 'deadly', 'midnight'))),
};
export const B_PICKS = {
  title: 'Editor’s Picks',
  items: withIds('bp', pick('phantom', 'twins', 'silverfox', 'devil', 'lastalpha', 'alpha', 'vampire')),
};
