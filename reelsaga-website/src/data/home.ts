/* Home page content: hero slides, the rails (which series appear, by id),
   section headings, the feature banner, review cards and the closing band.
   Series are referenced by id only — reorder/add freely. */

const FIG = '/assets/fig/';

export const home = {
  // Rotating hero. head = [text, emphasised word, text]; browse = [label, route]; fan = 3 covers.
  heroSlides: [
    { head: ['Epic stories about ', 'animated', ' legends.'], browse: ['Browse Animated', 'animated'], fan: [FIG + 'cover-e.png', FIG + 'cover-d.png', FIG + 'cover-f.png'] },
    { head: ['Drama that feels ', 'dangerously', ' real.'], browse: ['Browse Realistic', 'realistic'], fan: [FIG + 'originals-strip.jpg', FIG + 'suburban-cover.png', FIG + 'cover-b.png'] },
    { head: ['Romance you ', 'choose', ' yourself.'], browse: ['Browse Books', 'books'], fan: [FIG + 'cover-f.png', FIG + 'mustwatch-cover.png', FIG + 'cover-d.png'] },
  ],
  heroCollage: FIG + 'hero-collage.png',

  // The carousels — kicker heading + sub-headline + the series ids to show.
  rails: [
    {
      id: 'originals', kicker: 'Originals', seeAll: 'realistic',
      subhead: { line1: 'Sagas you won’t', em: 'find anywhere else.' },
      seriesIds: ['phantoms-kiss', 'two-alpha-kings', 'cursed-rival', 'eyes-of-storm', 'silver-fox', 'bound-roses', 'wolfsbane', 'quiet-wife'],
    },
    {
      id: 'must-watch', kicker: 'Must watch', seeAll: 'animated', mustWatch: true,
      subhead: { line1: '4.9★ from people', em: 'who couldn’t put it down.' },
      seriesIds: ['silver-fox', 'two-alpha-kings', 'bound-roses', 'eyes-of-storm', 'burning-vows', 'office-hours', 'cursed-rival', 'suburban-strangler'],
    },
  ],

  // The feature banner shown under the Originals rail.
  feature: { id: 'suburban-strangler', title: 'The Suburban Strangler', badge: 'Complete', cover: FIG + 'suburban-cover.png', logo: FIG + 'suburban-logo.png' },

  // Heading above the review cards.
  reviewsHeading: { kicker: 'Reviews', subhead: { line1: '4.9★ from people', em: 'who couldn’t put it down.' } },

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

export default home;
