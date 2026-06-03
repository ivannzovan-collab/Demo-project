/* Category-page content (Realistic / Animated / Books).
   Series are referenced by id; section titles + curation live here. */

const FIG = '/assets/fig/';

export const categories = {
  // Per-category hero label + headline (kept for reference; the hero rotates
  // through the curated shows below).
  meta: {
    realistic: { label: 'Realistic', hero: ['Classroom Queen: ', 'Mafia Bloodline'] },
    animated: { label: 'Animated', hero: ['Blade of the ', 'Fallen Lord'] },
    books: { label: 'Books', hero: ['Two Alpha Kings, ', 'One Virgin Mate'] },
  },

  // Section heading words shared by the Realistic/Animated pages.
  sections: { trending: 'Trending', newReleases: 'New Releases', recommended: 'Recommended', guilty: 'Guilty Pleasure' },

  // The Realistic page is hand-curated to match the Figma; Animated mirrors it.
  realistic: {
    hero: ['classroom-queen', 'two-alpha-kings', 'bride-dies-twice'],
    trending: ['bride-dies-twice', 'two-alpha-kings', 'classroom-queen', 'billionaire-alphas', 'cursed-rival', 'silver-fox', 'eyes-of-storm', 'suburban-strangler'],
  },

  // The "Recommended" feature banner.
  feature: { id: 'bound-roses', title: 'How I Became the Alpha Queen', cover: FIG + 'mustwatch-cover.png', logo: FIG + 'mustwatch-logo.png' },

  // The three "Top genre" cards at the bottom. covers = series ids (art is stacked).
  topGenres: [
    { title: 'Top Romance', route: 'realistic', accent: 'rgba(120,60,180,.5)', bg: 'linear-gradient(180deg, #1B163F 0%, #121A33 100%)', blurb: 'The slow-burns, the fake-dating, the one-bed tropes you keep coming back for.', covers: ['bride-dies-twice', 'two-alpha-kings'] },
    { title: 'Top Drama', route: 'realistic', accent: 'rgba(56,86,170,.5)', bg: 'linear-gradient(180deg, #111C3A 0%, #121A33 100%)', blurb: 'Family secrets, courtroom reckonings and the lies that finally catch up.', covers: ['two-alpha-kings', 'billionaire-alphas'] },
    { title: 'Top Supernatural', route: 'animated', accent: 'rgba(170,120,50,.5)', bg: 'linear-gradient(180deg, #2B2418 0%, #131A33 100%)', blurb: 'Fated mates, cursed bloodlines and the monsters who fall in love.', covers: ['billionaire-alphas', 'classroom-queen'] },
  ],
};

// The Books page.
export const booksPage = {
  hero: ['classroom-queen', 'cursed-rival', 'two-alpha-kings'],
  // Coverflow under the hero — the 3rd id starts centered/zoomed; reorder to taste.
  spotlight: ['two-alpha-kings', 'silver-fox', 'fake-dating-werewolf', 'eyes-of-storm', 'bound-roses'],
  newReleases: ['two-alpha-kings', 'billionaire-alphas', 'silver-fox', 'cursed-rival', 'bride-dies-twice', 'classroom-queen', 'phantoms-kiss', 'bound-roses'],
  trending: ['cursed-rival', 'bride-dies-twice', 'silver-fox', 'billionaire-alphas', 'two-alpha-kings'],
  more: ['bound-roses', 'phantoms-kiss', 'classroom-queen', 'bride-dies-twice', 'cursed-rival', 'silver-fox', 'billionaire-alphas', 'two-alpha-kings'],
  sections: { newReleases: 'New Releases', trending: 'Trending', more: 'Neka kategorija' },
};

export default categories;
