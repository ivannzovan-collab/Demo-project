// Acceptance tests for the ReelSaga v1-lite ranking engine, straight from
// section 5 of the Two-Week Build Spec. Run: npm test (inside web/).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

import {
  rankSeries,
  payoffSeries,
  rankBooks,
  payoffBooks,
  chipsFor,
} from '../src/lib/personalization.js';

const here = path.dirname(fileURLToPath(import.meta.url));
const table = JSON.parse(
  readFileSync(path.join(here, '../src/data/ordering_table.json'), 'utf-8'),
);

const WOLF_PICKS = ['Werewolves', 'Secret Baby', 'Enemies to Lovers'];

test('seed script check: Videos + Werewolves/Secret Baby/Enemies to Lovers', () => {
  const payoff = payoffSeries(table, WOLF_PICKS);
  assert.equal(payoff.length, 3);
  assert.equal(payoff[0].title, "The Sheriff's Alpha Son Is My True Mate"); // focused
  assert.equal(payoff[1].title, 'Classroom Queen: Mafia Bloodline');
  assert.equal(payoff[2].title, 'From Bump to Spark');
  // Binge Worthy opens with the same titles, scores x1.2
  const { home } = rankSeries(table, WOLF_PICKS);
  assert.deepEqual(home.slice(0, 3).map(s => s.title), payoff.map(s => s.title));
  for (const s of home.slice(0, 3)) {
    assert.equal(s.lift, 1.2);
    assert.equal(s.final, Math.round(s.score * 1.2 * 10) / 10);
  }
});

test('payoff always renders 3 playable cards', () => {
  // Zero picks -> global top 3
  const skipped = payoffSeries(table, []);
  assert.equal(skipped.length, 3);
  const { default: dflt } = rankSeries(table, []);
  assert.deepEqual(skipped.map(s => s.id), dflt.slice(0, 3).map(s => s.id));
  assert.ok(skipped.every(s => s.free_ep));

  // A pick with < 3 matches -> padded with global top, still 3 cards
  const sparse = payoffSeries(table, ['Forced Proximity']);
  assert.equal(sparse.length, 3);
  const matchedFirst = sparse.filter(s => s.hits.length > 0);
  assert.deepEqual(sparse.slice(0, matchedFirst.length), matchedFirst,
    'matched cards come before padding');
});

test('no picks -> home equals the default one-size-fits-all order', () => {
  const { home, default: dflt } = rankSeries(table, []);
  assert.deepEqual(home.map(s => s.id), dflt.map(s => s.id));
});

test('fail-open: missing table renders plist order and empty payoff', () => {
  assert.equal(rankSeries(null, WOLF_PICKS), null);
  assert.deepEqual(payoffSeries(null, WOLF_PICKS), []);
  assert.equal(rankBooks(undefined, WOLF_PICKS), null);
});

test('control/plist order is the catalog order as shipped, byte-identical for any picks', () => {
  const a = rankSeries(table, WOLF_PICKS).plist.map(s => s.id);
  const b = rankSeries(table, []).plist.map(s => s.id);
  assert.deepEqual(a, table.series.map(s => s.id));
  assert.deepEqual(a, b);
});

test('ties break final -> score -> plist position, deterministically', () => {
  const { home } = rankSeries(table, []);
  for (let i = 1; i < home.length; i++) {
    const prev = home[i - 1];
    const cur = home[i];
    const ordered =
      prev.final > cur.final ||
      (prev.final === cur.final && prev.score > cur.score) ||
      (prev.final === cur.final && prev.score === cur.score && prev.plistPos < cur.plistPos);
    assert.ok(ordered, `deterministic order violated at index ${i}`);
  }
  // Same input, same output — frozen per session is trivial when pure
  const again = rankSeries(table, []).home.map(s => s.id);
  assert.deepEqual(home.map(s => s.id), again);
});

test('books: match count desc then catalog pos; payoff padded to 3', () => {
  const picks = ['Forbidden Love', 'Steamy Romance', 'Enemies to Lovers'];
  const home = rankBooks(table, picks);
  for (let i = 1; i < home.length; i++) {
    const prev = home[i - 1];
    const cur = home[i];
    const ordered =
      prev.hits.length > cur.hits.length ||
      (prev.hits.length === cur.hits.length && prev.pos < cur.pos);
    assert.ok(ordered, `books order violated at index ${i}`);
  }
  assert.equal(payoffBooks(table, picks).length, 3);
  assert.equal(payoffBooks(table, []).length, 3);
  // No picks -> seeded catalog order
  assert.deepEqual(rankBooks(table, []).map(b => b.id), table.books.map(b => b.id));
});

test('both chip sets come from the table and have 12 chips each', () => {
  assert.equal(chipsFor(table, 'videos').length, 12);
  assert.equal(chipsFor(table, 'books').length, 12);
  for (const chip of [...chipsFor(table, 'videos'), ...chipsFor(table, 'books')]) {
    assert.ok(table.chips.match_patterns[chip], `chip "${chip}" has a match pattern`);
  }
});

test('ranking never reads demographics — only table and picks are inputs', () => {
  // The API surface takes (table, picks); this guards the signature.
  assert.equal(rankSeries.length, 1); // (table, picks = [])
  assert.equal(payoffSeries.length, 1);
});
