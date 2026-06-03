/* Blog list + article content (hero, category cards, latest news, article body). */

const FIG = '/assets/fig/';

export const blog = {
  hero: { cover: FIG + 'cover-f.png', title: 'Classroom Queen: Mafia Bloodline', sub: 'Podnaslov sa par dodatnih iformacija' },
  categoryTitle: 'Naslov Kategorije',
  // Category card rows (shown twice on the blog).
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

export default blog;
