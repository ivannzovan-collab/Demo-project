/* ============================================================
   ReelSaga — CENTRAL CONTENT / CONFIG
   ------------------------------------------------------------
   Everything editable about the site lives here (page copy,
   which shows appear where, section headings, reviews, book
   chapters, blog entries, nav + footer links, the phone reel).
   The actual show/book catalog lives in `data.js`; here we just
   reference shows by their `id`.

   To change the site you edit THIS file (and data.js for the
   catalog) — components never hardcode content.
   ============================================================ */

/* asset folders */
export const IMG = '/assets/images/';
export const FIG = '/assets/fig/';

/* one-line marketing blurb reused across the site */
export const BLURB =
  'ReelSaga is the home of serialized vertical fiction. New chapters drop daily — crime, romance, sci-fi, slow-burn. Watch one, or fall into all twelve.';

export const COPYRIGHT = '2026 Reel saga';

/* Small footer shown at the bottom of every page: [label, toast message]. */
export const PAGE_FOOTER = [
  ['Privacy Policy', 'Privacy Policy'],
  ['Terms', 'Terms'],
];

/* ---------------- Top navigation ---------------- */
export const NAV_TABS = [
  ['home', 'Home'],
  ['realistic', 'Realistic'],
  ['animated', 'Animated'],
  ['books', 'Books'],
];

/* ---------------- Footer (the detailed footer on legacy pages) ---------------- */
export const FOOTER = {
  blurb:
    'The home of serialized vertical fiction. New chapters drop daily — crime, romance, sci-fi, slow-burn. Watch one, or fall into all twelve.',
  // Each link is [label, action]; action is { go } to route or { toast } to flash a message.
  columns: [
    { title: 'Watch', links: [['Realistic', { go: 'realistic' }], ['Animated', { go: 'animated' }], ['Books', { go: 'books' }], ['New & trending', { go: 'realistic' }]] },
    { title: 'Company', links: [['About', { toast: 'About ReelSaga' }], ['Careers', { toast: 'We are hiring!' }], ['Press', { toast: 'Press kit' }], ['Blog', { go: 'blog' }]] },
    { title: 'Support', links: [['Help center', { toast: 'Help center' }], ['Creators', { toast: 'For creators' }], ['Terms', { toast: 'Terms of service' }], ['Privacy', { toast: 'Privacy policy' }]] },
  ],
  bottom: '© 2026 ReelSaga. A Nanobit studio, part of Stillfront Group.',
  bottomLinks: [['Terms', 'Terms'], ['Privacy', 'Privacy'], ['Cookies', 'Cookies']], // [label, toast]
};

/* ---------------- HOME ---------------- */
export const HOME = {
  // Rotating hero. head = [text, emphasised word, text]; browse = [button label, route]; fan = 3 cover images.
  heroSlides: [
    { head: ['Epic stories about ', 'animated', ' legends.'], browse: ['Browse Animated', 'animated'], fan: [FIG + 'cover-e.png', FIG + 'cover-d.png', FIG + 'cover-f.png'] },
    { head: ['Drama that feels ', 'dangerously', ' real.'], browse: ['Browse Realistic', 'realistic'], fan: [FIG + 'originals-strip.jpg', FIG + 'suburban-cover.png', FIG + 'cover-b.png'] },
    { head: ['Romance you ', 'choose', ' yourself.'], browse: ['Browse Books', 'books'], fan: [FIG + 'cover-f.png', FIG + 'mustwatch-cover.png', FIG + 'cover-d.png'] },
  ],
  heroCollage: FIG + 'hero-collage.png',

  // Carousels — just list show ids; reorder/add freely.
  originals: ['phantoms-kiss', 'two-alpha-kings', 'cursed-rival', 'eyes-of-storm', 'silver-fox', 'bound-roses', 'wolfsbane', 'quiet-wife'],
  mustWatch: ['silver-fox', 'two-alpha-kings', 'bound-roses', 'eyes-of-storm', 'burning-vows', 'office-hours', 'cursed-rival', 'suburban-strangler'],

  // Section headings (kicker word + split sub-headline: line1 + emphasised em).
  sections: {
    originals: { kicker: 'Originals', seeAll: 'realistic', title: { line1: 'Sagas you won’t', em: 'find anywhere else.' } },
    mustWatch: { kicker: 'Must watch', seeAll: 'animated', title: { line1: '4.9★ from people', em: 'who couldn’t put it down.' } },
    reviews: { kicker: 'Reviews', title: { line1: '4.9★ from people', em: 'who couldn’t put it down.' } },
  },

  // Feature banner under the Originals row.
  feature: { id: 'suburban-strangler', title: 'The Suburban Strangler', badge: 'Complete', cover: FIG + 'suburban-cover.png', logo: FIG + 'suburban-logo.png' },

  // App-store review cards.
  reviews: [
    { text: 'I absolutely love this app. The stories are awesome. They’re not forever long. It’s really great. I wish there were more stories. Keep adding to them. Thank you.', name: 'Marisol R.', src: 'App Store · verified review', av: 'M', c: '#FEC200', cf: '#111C3A' },
    { text: 'I find that it is a good app. I don’t mind watching ads to read the books. I wouldn’t change anything.', name: 'Jamie W.', src: 'Google Play · verified review', av: 'J', c: '#6f5ab0', cf: '#fff' },
  ],

  // Closing band: "Your next <em>obsession</em> is six minutes long."
  closing: {
    title: { pre: 'Your next ', em: 'obsession', post: ' is six minutes long.' },
    text: 'Free to start. New chapters drop every day. Take the saga with you — on iOS, Android, and the big screen.',
  },
};

/* ---------------- CATEGORY PAGES (Realistic / Animated / Books) ---------------- */
export const CATEGORIES = {
  // Hero headline split per category (kept for reference; the hero uses the curated shows below).
  meta: {
    realistic: { label: 'Realistic', hero: ['Classroom Queen: ', 'Mafia Bloodline'] },
    animated: { label: 'Animated', hero: ['Blade of the ', 'Fallen Lord'] },
    books: { label: 'Books', hero: ['Two Alpha Kings, ', 'One Virgin Mate'] },
  },
  sections: { trending: 'Trending', newReleases: 'New Releases', recommended: 'Recommended', guilty: 'Guilty Pleasure' },

  // Realistic page is hand-curated to match the Figma; Animated mirrors it.
  realistic: {
    hero: ['classroom-queen', 'two-alpha-kings', 'bride-dies-twice'],
    trending: ['bride-dies-twice', 'two-alpha-kings', 'classroom-queen', 'billionaire-alphas', 'cursed-rival', 'silver-fox', 'eyes-of-storm', 'suburban-strangler'],
  },

  // The "Recommended" feature banner.
  feature: { id: 'bound-roses', title: 'How I Became the Alpha Queen', cover: FIG + 'mustwatch-cover.png', logo: FIG + 'mustwatch-logo.png' },

  // The three "Top genre" cards at the bottom. covers = show ids (their art is stacked).
  topGenres: [
    { title: 'Top Romance', route: 'realistic', accent: 'rgba(120,60,180,.5)', bg: 'linear-gradient(180deg, #1B163F 0%, #121A33 100%)', blurb: 'The slow-burns, the fake-dating, the one-bed tropes you keep coming back for.', covers: ['bride-dies-twice', 'two-alpha-kings'] },
    { title: 'Top Drama', route: 'realistic', accent: 'rgba(56,86,170,.5)', bg: 'linear-gradient(180deg, #111C3A 0%, #121A33 100%)', blurb: 'Family secrets, courtroom reckonings and the lies that finally catch up.', covers: ['two-alpha-kings', 'billionaire-alphas'] },
    { title: 'Top Supernatural', route: 'animated', accent: 'rgba(170,120,50,.5)', bg: 'linear-gradient(180deg, #2B2418 0%, #131A33 100%)', blurb: 'Fated mates, cursed bloodlines and the monsters who fall in love.', covers: ['billionaire-alphas', 'classroom-queen'] },
  ],
};

/* ---------------- BOOKS PAGE ---------------- */
export const BOOKS = {
  hero: ['classroom-queen', 'cursed-rival', 'two-alpha-kings'],
  // Coverflow under the hero — the 3rd id starts centered/zoomed; reorder to taste.
  spotlight: ['two-alpha-kings', 'silver-fox', 'fake-dating-werewolf', 'eyes-of-storm', 'bound-roses'],
  newReleases: ['two-alpha-kings', 'billionaire-alphas', 'silver-fox', 'cursed-rival', 'bride-dies-twice', 'classroom-queen', 'phantoms-kiss', 'bound-roses'],
  trending: ['cursed-rival', 'bride-dies-twice', 'silver-fox', 'billionaire-alphas', 'two-alpha-kings'],
  more: ['bound-roses', 'phantoms-kiss', 'classroom-queen', 'bride-dies-twice', 'cursed-rival', 'silver-fox', 'billionaire-alphas', 'two-alpha-kings'],
  sections: { newReleases: 'New Releases', trending: 'Trending', more: 'Neka kategorija' },
};

/* ---------------- BOOK READER ---------------- */
export const READER = {
  // One array of paragraphs per chapter. Add a chapter by adding an array.
  chapters: [
    [
      'The rain had not stopped for three days, and Mia had run out of excuses. She stood under the awning of a shuttered diner on the edge of the Nightfell district, soaked to the bone, watching the last bus splash away without her — and that was the precise, humiliating moment a black car slowed at the curb and a low voice asked if she needed a ride.',
      'She should have said no. Everyone in the city knew the rules about the people who lived past the river: you did not get in their cars, you did not learn their names, and you certainly did not tell a room full of them that the brooding stranger beside you was your boyfriend. Mia did all three before the night was over.',
      'In her defense, the man — Kael, she would learn far too late — had not corrected her. He had simply raised one eyebrow, slid an arm around her waist as if they had practiced it a hundred times, and let the lie stand in front of the entire Nightfell court.',
    ],
    [
      'Morning arrived the way bad decisions usually do: too bright and far too soon. Mia woke on a couch the size of a small country, under a coat that was not hers and smelled like cedar and trouble, with no memory of agreeing to any of it.',
      'Kael was already awake, leaning in the doorway with two cups of coffee and an expression she was beginning to recognize as his version of amusement. "One moon cycle," he said, handing her the warmer cup. "Keep the story straight, and you walk away free. Break it, and the council walks away with you."',
      'It was, Mia thought, a remarkably bad deal. She took the coffee anyway.',
    ],
    [
      'The council met in a hall built to make people feel small, and it worked. Twelve seats, eleven of them filled with wolves who had been alive long enough to consider Kael an upstart and Mia an insult. The twelfth seat belonged to Vance, who smiled at her the way a door smiles right before it closes.',
      '"Tell us how you met," Vance said, and the room leaned in. Mia opened her mouth, fully intending to lie, and found that the truth was somehow worse and far more convincing. By the time she finished, even she half believed they were in love.',
    ],
    [
      'Here is the thing nobody warns you about pretending: do it well enough, for long enough, and your body forgets it is pretending. Mia caught herself reaching for Kael’s hand in the corridor when there was no one watching. He caught himself letting her.',
      '"This is a performance," she reminded them both, somewhere around the third week. "I know," Kael said, in the tone of a man reading a map that has stopped matching the road. Neither of them mentioned it again, which was its own kind of confession.',
    ],
    [
      'The night the curse surfaced, it did not knock. It came up through the old bloodline like floodwater, the way Vance had always promised it would, and it came for Mia because the council had finally decided she was real enough to be worth destroying.',
      'Kael stepped in front of her without thinking, which told her everything the past month had refused to say out loud. "You were supposed to walk away free," he said. "I changed my mind," Mia answered, and meant it more than anything she had ever pretended.',
      'What happens next is, as they say, another chapter — and there are fifty-five more of them waiting in the app.',
    ],
  ],
};

/* ---------------- BLOG ---------------- */
export const BLOG = {
  hero: { cover: FIG + 'cover-f.png', title: 'Classroom Queen: Mafia Bloodline', sub: 'Podnaslov sa par dodatnih iformacija' },
  categoryTitle: 'Naslov Kategorije',
  // Category card rows (shown twice on the blog). [{ id, img, title, sub }]
  categoryItems: [
    { id: 'classroom-queen', img: FIG + 'cover-e.png', title: 'Classroom Queen: Mafia Bloodline', sub: 'Podnaslov sa par dodatnih informacija o clanku' },
    { id: 'cursed-rival', img: FIG + 'cover-e.png', title: 'Classroom Queen: Mafia Bloodline', sub: 'Podnaslov sa par dodatnih informacija o clanku' },
    { id: 'billionaire-alphas', img: FIG + 'cover-e.png', title: 'Classroom Queen: Mafia Bloodline', sub: 'Podnaslov sa par dodatnih informacija o clanku' },
    { id: 'bride-dies-twice', img: FIG + 'cover-e.png', title: 'Classroom Queen: Mafia Bloodline', sub: 'Podnaslov sa par dodatnih informacija o clanku' },
  ],
  latestTitle: 'Latest News',
  latestFeature: { id: 'suburban-strangler', img: FIG + 'suburban-cover.png', title: 'Classroom Queen: Mafia Bloodline', sub: 'Podnaslov sa par dodatnih informacija o clanku' },
  news: [
    { id: 'phantoms-kiss', title: 'Classroom Queen: Mafia Bloodline', sub: 'Podnaslov sa par dodatnih informacija o clanku', img: FIG + 'originals-strip.jpg' },
    { id: 'phantoms-kiss', title: 'Classroom Queen: Mafia Bloodline', sub: 'Podnaslov sa par dodatnih informacija o clanku', img: FIG + 'originals-strip.jpg' },
    { id: 'phantoms-kiss', title: 'Classroom Queen: Mafia Bloodline', sub: 'Podnaslov sa par dodatnih informacija o clanku', img: FIG + 'originals-strip.jpg' },
  ],
  // Article body paragraphs + an inset image after them.
  articleHero: FIG + 'cover-f.png',
  articleInset: FIG + 'suburban-cover.png',
  articleBody: [
    'From the moment we meet Rachel in the opening minutes, she is already fighting something. At first she is quietly navigating the feeling that her impending nuptials might be doomed, and worrying that her future in-laws have it out for her; then, later, she is protecting herself from a danger that has poisoned her bloodline and threatens her life. Getting the role required a similar kind of mettle — you have to go tooth and nail and give it your all, and then close your eyes and pray that you make it to the next round.',
    'In the series, the performer captivates in every frame as a young woman with a complicated relationship to family and marriage, struggling to survive the days leading up to her wedding. As her discovery of a generational secret reveals the story behind her parents’ own wedding day, Rachel must come to terms with what it means to truly love another person — and whom she can really trust.',
    'This was by far the most challenging role taken on yet, says the actor — with a lot of pride, because the hope is to always feel like you are leveling up and taking on characters that feel far away from you. It is really like looking at a mountain and knowing that you have to climb it, with this imminent dread and fear right before you start.',
    'She can next be seen as a very different kind of leading lady, and sat down with us to unpack the emotional and physical toll of playing a character who is in a constant state of paranoia — how the role pushed her as a performer, and more.',
  ],
};

/* ---------------- PHONE-MOCKUP REEL (download CTA) ---------------- */
export const REELS = [
  { id: 'wolfsbane', img: IMG + 'poster-live-3.png', title: 'Wolfsbane', genres: ['Werewolf', 'Romance'], ep: 'Episode 12', likes: '48.2K' },
  { id: 'burning-vows', img: IMG + 'poster-live-1.png', title: 'Burning Vows', genres: ['Drama', 'Romance'], ep: 'Episode 7', likes: '31.7K' },
  { id: 'office-hours', img: IMG + 'poster-live-2.png', title: 'Office Hours', genres: ['Forbidden', 'Romance'], ep: 'Episode 21', likes: '27.4K' },
];
