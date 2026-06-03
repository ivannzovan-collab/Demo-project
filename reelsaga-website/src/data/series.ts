/* ============================================================
   ReelSaga — the series/book catalog (single source of truth).
   Every drama AND every book card lives here; rails reference
   these entries by `id`. Books additionally have reader data
   (chapters + retailers) in ./books/index.ts.

   To add a title: append an object below and reference its id
   from a rail in home.ts / categories.ts. To give it a card
   trailer, add a `video: { type, id, kind }` (streams from
   config.trailerBaseUrl/{type}/{id}/{kind}.mp4).
   ============================================================ */

import type { Series } from '../types';

export const series: Series[] = [
  // ---------------- FIGMA HERO / ORIGINALS COVERS (real art) ----------------
  {
    id: 'phantoms-kiss', slug: 'phantoms-kiss', title: "The Phantom's Kiss", type: 'realistic',
    genres: ['Crime', 'Romance'], image: '/assets/fig/originals-strip.jpg', wide: true,
    video: { type: 'Shorts', id: 125, kind: 'TRAILER_720' },
    rank: 1, hot: true, episodes: 54, runtime: '74s', rating: 4.9, views: '14.8M',
    tagline: 'A detective and the ghost she swore she buried.',
    synopsis: 'Detective Mara Quinn hunts a killer who leaves no prints and no witnesses — only a kiss. The deeper she digs, the more the trail points to the partner she watched die three years ago. In a neon city that never sleeps, the dead do not always stay dead.',
  },
  {
    id: 'two-alpha-kings', slug: 'two-alpha-kings', title: 'Two Alpha Kings, One Virgin Mate', type: 'books',
    genres: ['Werewolf', 'Billionaire'], image: '/assets/fig/cover-f.png',
    video: { type: 'Anime', id: 104, kind: 'TRAILER_720' },
    rank: 2, hot: true, chapterCount: 72, rating: 4.8, views: '11.2M',
    tagline: 'Two rival kings. One fated mate. No peace treaty survives this.',
    synopsis: 'When the moon binds Aria to not one but two warring alpha kings, the only thing fiercer than their hatred for each other is their need for her. A branching saga where every choice you make redraws the borders of two kingdoms.',
  },
  {
    id: 'cursed-rival', slug: 'cursed-rival', title: "Cursed by My Dead Husband's Rival", type: 'realistic',
    genres: ['Revenge', 'Fantasy'], image: '/assets/fig/cover-e.png',
    video: { type: 'Shorts', id: 125, kind: 'TRAILER_720' },
    rank: 3, new: true, episodes: 40, runtime: '70s', rating: 4.7, views: '6.9M',
    tagline: 'He cursed her at the funeral. The widow had other plans.',
    synopsis: 'On the night they bury her husband, his oldest rival lays a curse on the widow Selene — bound to the bloodline until the debt is paid. But Selene was never the grieving wife everyone thought, and the forest remembers who really lit the pyre.',
  },
  {
    id: 'eyes-of-storm', slug: 'eyes-of-storm', title: 'Eyes of the Storm', type: 'realistic',
    genres: ['Drama', 'Romance'], image: '/assets/fig/cover-d.png',
    hot: true, episodes: 46, runtime: '72s', rating: 4.8, views: '8.3M',
    tagline: 'She walked into the water. He pulled out a secret.',
    synopsis: 'When a runaway bride is found breathing on a midnight shore with no memory of how she got there, the diver who saved her becomes the only person she trusts — and the one with the most to hide about the night she nearly drowned.',
  },
  {
    id: 'silver-fox', slug: 'silver-fox', title: 'Cuffed to My Silver Fox Captain', type: 'realistic',
    genres: ['Romance', 'Comedy'], image: '/assets/fig/cover-b.png', titleArt: '/assets/fig/cover-cuffed-logo.png',
    new: true, episodes: 38, runtime: '66s', rating: 4.7, views: '5.6M',
    tagline: 'One pair of handcuffs. One very long stakeout.',
    synopsis: 'A rookie reporter handcuffs herself to the wrong man during a sting — the gruff harbor captain who wants nothing to do with her story. Now they are stuck together, literally, until the tide and the truth come in.',
  },
  {
    id: 'bound-roses', slug: 'bound-roses', title: 'Bound by Roses', type: 'books',
    genres: ['Romance', 'Steamy'], image: '/assets/fig/mustwatch-cover.png',
    hot: true, chapterCount: 61, rating: 4.8, views: '7.4M',
    tagline: 'Every rose he sent came with a thorn she would feel later.',
    synopsis: 'A florist who arranges weddings she will never have is hired by the city’s most guarded heir to stage a romance for the cameras. Chapter by chapter, the petals fall — and so does she.',
  },
  {
    id: 'suburban-strangler', slug: 'suburban-strangler', title: 'The Suburban Strangler', type: 'realistic',
    genres: ['Crime', 'Thriller'], image: '/assets/fig/suburban-cover.png', wide: true,
    episodes: 32, runtime: '70s', rating: 4.9, views: '9.7M', complete: true,
    tagline: 'Hunters by day. Hunted by the same secret.',
    synopsis: 'A forensic cleaner searching for his missing sister and a detective hunting her father’s killer are forced into a dangerous alliance. When a fresh crime scene reveals an impossible link between their tragedies, they uncover a deadly secret that turns them from hunters into the hunted.',
  },
  {
    id: 'bride-dies-twice', slug: 'bride-dies-twice', title: 'The Bride Who Dies Twice', type: 'realistic',
    genres: ['Thriller', 'Romance'], image: '/assets/fig/cover-d.png',
    hot: true, episodes: 44, runtime: '72s', rating: 4.8, views: '8.1M',
    tagline: 'She drowned on her wedding day. Then she woke up.',
    synopsis: 'A bride is pulled lifeless from the lake on her wedding night — and wakes three days later with no memory and a stranger who swears he watched her die. As the truth surfaces, she realizes someone wanted her gone, and they are about to try again.',
  },
  {
    id: 'classroom-queen', slug: 'classroom-queen', title: 'Classroom Queen: Mafia Bloodline', type: 'realistic',
    genres: ['Crime', 'Drama'], image: '/assets/fig/cover-e.png',
    rank: 1, hot: true, episodes: 58, runtime: '74s', rating: 4.9, views: '13.6M',
    tagline: 'Top of her class. Heir to a war she never chose.',
    synopsis: 'A forensic cleaner searching for his missing sister and a detective hunting her father’s killer are forced into a dangerous alliance. When a fresh crime scene reveals an impossible link between their tragedies, they uncover a deadly secret that turns them from hunters into the hunted.',
  },
  {
    id: 'billionaire-alphas', slug: 'billionaire-alphas', title: "Billionaire Alpha's Fated Mate", type: 'realistic',
    genres: ['Werewolf', 'Billionaire'], image: '/assets/fig/mustwatch-cover.png',
    new: true, episodes: 50, runtime: '70s', rating: 4.7, views: '7.0M',
    tagline: 'He runs an empire by day and a pack by moonlight.',
    synopsis: 'The city’s most ruthless billionaire is hiding a second life — and a wolf that has just recognized its fated mate in the one woman his board wants destroyed.',
  },

  // ---------------- REALISTIC (live-action) ----------------
  {
    id: 'wolfsbane', slug: 'wolfsbane', title: 'Wolfsbane', type: 'realistic',
    genres: ['Werewolf', 'Romance'], image: '/assets/images/poster-live-3.png',
    rank: 1, hot: true, episodes: 48, runtime: '72s', rating: 4.9, views: '12.4M',
    tagline: 'She ran from the pack. He is the reason she came back.',
    synopsis: 'When Lena returns to the fog-bound town she swore to forget, the boy she left behind has become the Alpha — and the only one who can keep her alive. But the wolf at her heels is wearing a human face, and the truth about her bloodline is about to tear two packs apart.',
  },
  {
    id: 'burning-vows', slug: 'burning-vows', title: 'Burning Vows', type: 'realistic',
    genres: ['Drama', 'Romance'], image: '/assets/images/poster-live-1.png',
    rank: 2, hot: true, episodes: 36, runtime: '68s', rating: 4.8, views: '9.1M',
    tagline: 'He pulled her from the fire. She set his whole world alight.',
    synopsis: 'A wedding day ends in smoke when a kitchen fire traps the bride — and the firefighter who saves her is the man she left at the altar three years ago. Now they have sixty seconds at a time to decide whether the past is worth burning down.',
  },
  {
    id: 'office-hours', slug: 'office-hours', title: 'Office Hours', type: 'realistic',
    genres: ['Forbidden', 'Romance'], image: '/assets/images/poster-live-2.png',
    rank: 3, episodes: 42, runtime: '70s', rating: 4.7, views: '7.8M',
    tagline: 'The one lesson he never meant to teach.',
    synopsis: 'A brilliant scholarship student and the professor who could end her career with a single word. Behind the locked door of his study, the rules of the university — and of the heart — start to come undone.',
  },
  {
    id: 'playboy', slug: 'playboy', title: 'The Playboy Who Wanted to Die', type: 'realistic',
    genres: ['Billionaires', 'Drama'], titleArt: '/assets/images/title-playboy.png',
    tint: '#1b2a52', glow: '#4a5fa8', new: true, episodes: 60, runtime: '75s', rating: 4.6, views: '5.2M',
    tagline: 'He had everything. He wanted nothing — until her.',
    synopsis: 'The heir to the largest fortune in the city plans the perfect exit. The night nurse hired to watch him has other plans. A slow-burn about a man learning to want a tomorrow.',
  },
  { id: 'married-mob', slug: 'married-mob', title: 'Married to the Mob', type: 'realistic', genres: ['Crime', 'Romance'], tint: '#2a1d2e', glow: '#8a4a6a', episodes: 30, runtime: '66s', rating: 4.5, views: '4.4M', tagline: 'She said "I do" to the wrong family.' },
  { id: 'cinderella-contract', slug: 'cinderella-contract', title: 'The Cinderella Contract', type: 'realistic', genres: ['Billionaires', 'Romance'], tint: '#23284a', glow: '#5b6bb0', hot: true, episodes: 33, runtime: '69s', rating: 4.7, views: '6.0M', tagline: 'Ninety days. One ring. No falling in love.' },
  { id: 'secret-baby', slug: 'secret-baby', title: "The CEO's Secret Baby", type: 'realistic', genres: ['Pregnancy', 'Drama'], tint: '#2c2433', glow: '#7a5a8a', episodes: 40, runtime: '71s', rating: 4.6, views: '5.5M', tagline: 'Five years. One secret. His eyes.' },
  { id: 'revenge-heels', slug: 'revenge-heels', title: 'Revenge in Heels', type: 'realistic', genres: ['Drama', 'Crime'], tint: '#311e22', glow: '#9a4a52', episodes: 28, runtime: '64s', rating: 4.4, views: '3.9M', tagline: 'They buried her. They forgot to check her pulse.' },
  { id: 'quiet-wife', slug: 'quiet-wife', title: 'The Quiet Wife', type: 'realistic', genres: ['Thriller', 'Crime'], image: '/assets/images/category-realistic.png', wide: true, episodes: 24, runtime: '70s', rating: 4.8, views: '6.7M', tagline: 'Everyone trusted her. That was her first mistake.' },

  // ---------------- ANIMATED (anime) ----------------
  {
    id: 'fallen-lord', slug: 'fallen-lord', title: 'Blade of the Fallen Lord', type: 'animated',
    genres: ['Action', 'Fantasy'], image: '/assets/images/category-animated.png', wide: true,
    rank: 1, hot: true, episodes: 52, runtime: '80s', rating: 4.9, views: '10.2M',
    tagline: 'A dead emperor. A borrowed body. One last war.',
    synopsis: 'Betrayed and slain, the old warlord wakes in the body of a disgraced young swordsman. With a lifetime of battles behind closed eyes, he sets out to reclaim a throne that no longer remembers his name.',
  },
  { id: 'crimson-academy', slug: 'crimson-academy', title: 'Crimson Academy', type: 'animated', genres: ['Fantasy', 'Romance'], tint: '#311c20', glow: '#a04a52', hot: true, episodes: 46, runtime: '78s', rating: 4.7, views: '8.0M', tagline: 'Magic chose her. The Academy wants her gone.' },
  { id: 'villainess', slug: 'villainess', title: 'Reborn as the Villainess', type: 'animated', genres: ['Fantasy', 'Comedy'], tint: '#2a2042', glow: '#6f5ab0', new: true, episodes: 38, runtime: '74s', rating: 4.6, views: '6.3M', tagline: 'She read the book. She knows how she dies. Not today.' },
  { id: 'onmyoji', slug: 'onmyoji', title: 'The Last Onmyoji', type: 'animated', genres: ['Action', 'Fantasy'], tint: '#1c2a3a', glow: '#4a7aa0', episodes: 44, runtime: '79s', rating: 4.5, views: '4.9M', tagline: 'The spirits are loose. He is the only seal left.' },
  { id: 'spirit-contract', slug: 'spirit-contract', title: 'Spirit Contract', type: 'animated', genres: ['Fantasy', 'Drama'], tint: '#22302a', glow: '#4a8a6a', episodes: 35, runtime: '76s', rating: 4.4, views: '3.6M', tagline: 'Sign in blood. Pay in memories.' },
  { id: 'nine-realms', slug: 'nine-realms', title: 'Sword of the Nine Realms', type: 'animated', genres: ['Action', 'Fantasy'], tint: '#2c2620', glow: '#a07a4a', episodes: 50, runtime: '81s', rating: 4.7, views: '7.1M', tagline: 'Nine kingdoms. One blade. No mercy.' },

  // ---------------- BOOKS (interactive) ----------------
  {
    id: 'double-trouble', slug: 'double-trouble', title: 'Double Trouble', type: 'books',
    genres: ['Romance', 'Comedy'], image: '/assets/images/category-books.png', wide: true,
    titleArt: '/assets/images/title-double-trouble.png',
    new: true, chapterCount: 64, rating: 4.8, views: '5.9M',
    tagline: 'Two brothers. One mix-up. A very bad idea.',
    synopsis: 'When Mia agrees to a single date with the wrong twin, she opens a door neither of them can close. Told in branching chapters where every choice you make rewrites the night.',
  },
  { id: 'fake-dating-werewolf', slug: 'fake-dating-werewolf', title: 'Accidentally Fake Dating a Werewolf', type: 'books', genres: ['Werewolf', 'Romance'], image: '/assets/fig/cover-e.png', tint: '#23283f', glow: '#5b6bb0', hot: true, chapterCount: 58, rating: 4.7, views: '6.4M', tagline: 'He needed a mate by moonrise. She just needed a ride home.', synopsis: 'Stranded on the wrong side of the city, Mia blurts out that the brooding stranger beside her is her boyfriend — and accidentally binds herself to the alpha of the Nightfell pack. Now she has one moon cycle to keep up the lie, survive a court that wants her gone, and decide whether the fake romance she invented is the only real thing she has left.' },
  { id: 'framed', slug: 'framed', title: 'Framed by His Rich Friends', type: 'books', genres: ['Drama', 'Billionaires'], tint: '#2a2433', glow: '#7a5a8a', chapterCount: 47, rating: 4.5, views: '3.8M', tagline: 'They needed someone to blame. She was just the new girl.' },
  { id: 'reluctant-mate', slug: 'reluctant-mate', title: "The Alpha's Reluctant Mate", type: 'books', genres: ['Werewolf', 'Steamy'], tint: '#2c1e22', glow: '#9a4a5a', chapterCount: 71, rating: 4.8, views: '8.2M', tagline: 'Fate picked him. She is still deciding.' },
  { id: 'moonlight', slug: 'moonlight', title: 'Bound by Moonlight', type: 'books', genres: ['Romance', 'Fantasy'], tint: '#1e2a44', glow: '#4a6ab0', chapterCount: 53, rating: 4.6, views: '4.1M', tagline: 'A promise made under a full moon never really fades.' },
  { id: 'bodyguard', slug: 'bodyguard', title: 'Her Billionaire Bodyguard', type: 'books', genres: ['Billionaires', 'Steamy'], tint: '#26283a', glow: '#6a6aa0', chapterCount: 49, rating: 4.5, views: '3.3M', tagline: 'Paid to protect her. Determined to keep her.' },
];

export default series;
