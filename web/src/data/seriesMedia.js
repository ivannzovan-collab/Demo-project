// Presentation helpers for ordering_table.json series & books.
// The table carries titles/tags/scores only, so the prototype renders
// deterministic gradient cover art and plays stock sample episodes.

const SAMPLE_VIDEOS = [
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
];

function hashString(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h * 31 + str.charCodeAt(i)) >>> 0;
  }
  return h;
}

/** Deterministic two-stop gradient per title, used as cover art. */
export function coverGradient(title) {
  const h = hashString(title);
  const hue1 = h % 360;
  const hue2 = (hue1 + 40 + (h % 60)) % 360;
  return `linear-gradient(160deg, hsl(${hue1}, 62%, 32%) 0%, hsl(${hue2}, 70%, 18%) 100%)`;
}

export const RS_PREFIX = 'rs-';

/** Adapt a table series into the movie shape VideoPlayerPage renders. */
export function seriesToMovie(series) {
  return {
    id: `${RS_PREFIX}${series.id}`,
    title: series.title,
    description: series.tags.join(' · '),
    genre: series.tags.slice(0, 3),
    totalEpisodes: 60,
    thumbnailUrl: null,
    rating: null,
    episodes: [1, 2, 3].map(n => ({
      id: `${RS_PREFIX}${series.id}-${n}`,
      episodeNumber: n,
      title: n === 1 ? 'Episode 1 (Free)' : `Episode ${n}`,
      videoUrl: SAMPLE_VIDEOS[(hashString(series.title) + n) % SAMPLE_VIDEOS.length],
      duration: 60,
    })),
  };
}

/** Resolve an rs-<id> route param back to a series from the given table. */
export function findSeriesMovie(table, movieId) {
  if (!table || !movieId?.startsWith(RS_PREFIX)) return null;
  const id = Number(movieId.slice(RS_PREFIX.length).split('-')[0]);
  const series = table.series.find(s => s.id === id);
  return series ? seriesToMovie(series) : null;
}
