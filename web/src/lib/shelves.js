// Home shelf construction (spec: reorder series within re-rankable shelves
// only; Exclusive and Upcoming untouched — identical for everyone in both arms).
// Shelf membership is fixed by the catalog (plist); personalization only
// changes the order inside shelves marked rerankable.

import { rankSeries } from './personalization';

export function buildShelves(table, picks, personalized) {
  const ranked = rankSeries(table, picks);
  if (!ranked) return { shelves: [], wasPos: {} };

  const { plist, home, default: dflt, wasPos } = ranked;
  const nowPos = Object.fromEntries(home.map((s, i) => [s.id, i + 1]));

  // Order inside re-rankable shelves: personalized -> final; control/fail-open -> plist.
  const orderOf = (members) => {
    const ids = new Set(members.map(s => s.id));
    const source = personalized ? home : plist;
    return source.filter(s => ids.has(s.id));
  };

  const anime = plist.filter(s => s.formats.includes('anime'));
  const shelves = [
    {
      key: 'binge',
      title: '🔥 Binge Worthy',
      rerankable: true,
      items: orderOf(plist).slice(0, 12),
    },
    {
      key: 'anime',
      title: '✨ Anime Spotlight',
      rerankable: true,
      items: orderOf(anime).slice(0, 12),
    },
    {
      key: 'exclusive',
      title: '👑 Exclusive Originals',
      rerankable: false, // untouched: plist order in both arms
      items: plist.slice(0, 6),
    },
    {
      key: 'upcoming',
      title: '🔜 Coming Soon',
      rerankable: false, // untouched: plist order in both arms
      items: plist.slice(-6),
    },
  ];

  return { shelves, wasPos, nowPos, defaultOrder: dflt };
}
