// ReelSaga v1-lite personalization engine.
// Pure functions only — the entire ranking runtime from the Two-Week Build Spec:
//   lift(s)  = 1.2 if any onboarding pick matches s.tags (via table.chips.match_patterns) else 1.0
//   final(s) = s.score * lift(s)
//   ties break final -> score -> plist position (deterministic, QA-reproducible)
// No network, no state beyond the picks. Fail-open: a missing table renders plist order.

const LIFT_PER_MATCH = 1.2;

function compilePattern(table, pick) {
  const src = table.chips.match_patterns[pick];
  return src ? new RegExp(src, 'i') : null;
}

/** Chips that match an entry's tags, in the order the user picked them. */
export function matchedPicks(entry, picks, table) {
  const blob = ` ${entry.tags.join(' , ')} `.toLowerCase();
  return picks.filter(p => {
    const re = compilePattern(table, p);
    return re && re.test(blob);
  });
}

function decorateSeries(table, picks) {
  return table.series.map((s, plistPos) => {
    const hits = matchedPicks(s, picks, table);
    const lift = hits.length ? LIFT_PER_MATCH : 1.0;
    const final = Math.round(s.score * lift * 10) / 10;
    return { ...s, plistPos, hits, lift, final };
  });
}

function byFinalScorePlist(a, b) {
  return (b.final - a.final) || (b.score - a.score) || (a.plistPos - b.plistPos);
}

function byScorePlist(a, b) {
  return (b.score - a.score) || (a.plistPos - b.plistPos);
}

/**
 * Rank the video catalog. Returns:
 *   plist    — catalog order as shipped (fail-open / control order)
 *   default  — today's one-size-fits-all order (score desc), the "was #N" baseline
 *   home     — personalized order (final desc), equals `default` when picks is empty
 *   wasPos   — id -> 1-based position in `default`
 * Passing a null/missing table fails open to plist order with no scores.
 */
export function rankSeries(table, picks = []) {
  if (!table) return null;
  const pool = decorateSeries(table, picks);
  const plist = [...pool].sort((a, b) => a.plistPos - b.plistPos);
  const dflt = [...pool].sort(byScorePlist);
  const home = [...pool].sort(byFinalScorePlist);
  const wasPos = Object.fromEntries(dflt.map((s, i) => [s.id, i + 1]));
  return { plist, default: dflt, home, wasPos };
}

/**
 * Payoff carousel: 3 playable cards, always.
 * Eligible (free_ep) matches first, sorted by final; fewer than 3 matches is
 * padded with the eligible global top; zero picks -> global top 3.
 */
export function payoffSeries(table, picks = []) {
  if (!table) return [];
  const { home } = rankSeries(table, picks);
  const eligible = home.filter(s => s.free_ep);
  const matched = eligible.filter(s => s.hits.length > 0);
  const padding = eligible.filter(s => s.hits.length === 0);
  return [...matched, ...padding].slice(0, 3);
}

/**
 * Books tab order: match count desc, then catalog position (pos).
 * With no picks this is exactly the seeded catalog order.
 */
export function rankBooks(table, picks = []) {
  if (!table) return null;
  const pool = table.books.map(b => ({ ...b, hits: matchedPicks(b, picks, table) }));
  return [...pool].sort((a, b) => (b.hits.length - a.hits.length) || (a.pos - b.pos));
}

/** Payoff for the books path: 3 cards, matches first, padded with catalog order. */
export function payoffBooks(table, picks = []) {
  if (!table) return [];
  const home = rankBooks(table, picks);
  const matched = home.filter(b => b.hits.length > 0);
  const padding = home.filter(b => b.hits.length === 0);
  return [...matched, ...padding].slice(0, 3);
}

/** The 12 chips for a path, straight from the table. */
export function chipsFor(table, path) {
  return table ? table.chips[path] : [];
}
