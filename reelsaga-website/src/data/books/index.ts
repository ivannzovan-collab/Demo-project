/* ============================================================
   Book reader data: the readable chapter text + retailer links
   for each book. The book's CARD data (title, cover, blurb,
   genres) lives in ../series.ts; getBook(id) merges the two.

   A book uses DEFAULT_CHAPTERS unless it has an entry in
   `bookReaders` overriding `chapters` and/or `retailers`.
   ============================================================ */

import type { BookReader, Chapter } from '../../types';

// Sample chapters used by any book that doesn't ship its own text yet.
export const DEFAULT_CHAPTERS: Chapter[] = [
  {
    body: [
      'The rain had not stopped for three days, and Mia had run out of excuses. She stood under the awning of a shuttered diner on the edge of the Nightfell district, soaked to the bone, watching the last bus splash away without her — and that was the precise, humiliating moment a black car slowed at the curb and a low voice asked if she needed a ride.',
      'She should have said no. Everyone in the city knew the rules about the people who lived past the river: you did not get in their cars, you did not learn their names, and you certainly did not tell a room full of them that the brooding stranger beside you was your boyfriend. Mia did all three before the night was over.',
      'In her defense, the man — Kael, she would learn far too late — had not corrected her. He had simply raised one eyebrow, slid an arm around her waist as if they had practiced it a hundred times, and let the lie stand in front of the entire Nightfell court.',
    ],
  },
  {
    body: [
      'Morning arrived the way bad decisions usually do: too bright and far too soon. Mia woke on a couch the size of a small country, under a coat that was not hers and smelled like cedar and trouble, with no memory of agreeing to any of it.',
      'Kael was already awake, leaning in the doorway with two cups of coffee and an expression she was beginning to recognize as his version of amusement. "One moon cycle," he said, handing her the warmer cup. "Keep the story straight, and you walk away free. Break it, and the council walks away with you."',
      'It was, Mia thought, a remarkably bad deal. She took the coffee anyway.',
    ],
  },
  {
    body: [
      'The council met in a hall built to make people feel small, and it worked. Twelve seats, eleven of them filled with wolves who had been alive long enough to consider Kael an upstart and Mia an insult. The twelfth seat belonged to Vance, who smiled at her the way a door smiles right before it closes.',
      '"Tell us how you met," Vance said, and the room leaned in. Mia opened her mouth, fully intending to lie, and found that the truth was somehow worse and far more convincing. By the time she finished, even she half believed they were in love.',
    ],
  },
  {
    body: [
      'Here is the thing nobody warns you about pretending: do it well enough, for long enough, and your body forgets it is pretending. Mia caught herself reaching for Kael’s hand in the corridor when there was no one watching. He caught himself letting her.',
      '"This is a performance," she reminded them both, somewhere around the third week. "I know," Kael said, in the tone of a man reading a map that has stopped matching the road. Neither of them mentioned it again, which was its own kind of confession.',
    ],
  },
  {
    body: [
      'The night the curse surfaced, it did not knock. It came up through the old bloodline like floodwater, the way Vance had always promised it would, and it came for Mia because the council had finally decided she was real enough to be worth destroying.',
      'Kael stepped in front of her without thinking, which told her everything the past month had refused to say out loud. "You were supposed to walk away free," he said. "I changed my mind," Mia answered, and meant it more than anything she had ever pretended.',
      'What happens next is, as they say, another chapter — and there are fifty-five more of them waiting in the app.',
    ],
  },
];

// Per-book overrides. Anything omitted falls back to the defaults above.
// `retailers` is where store links (e.g. Barnes & Noble) go once available.
export const bookReaders: Record<string, Partial<BookReader>> = {
  // 'fake-dating-werewolf': { retailers: [{ name: 'Barnes & Noble', url: 'https://...' }] },
};

export default bookReaders;
