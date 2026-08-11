// ReelSaga v1-lite user record + A/B gate.
// Onboarding answers persist on the device (spec: picks are already on the
// device; no server, no events pipeline, no upload). Skipped demographics are
// stored as null. The ranking path never reads gender or age.

import table from '../data/ordering_table.json';

const USER_KEY = 'rs_user';
const FLAG_KEY = 'rs_ab_variant';
const TABLE_KILL_KEY = 'rs_simulate_missing_table';

const EMPTY_USER = {
  onboardingDone: false, // completed or skipped — either way, never shown again
  skipped: false,
  path: null,            // 'videos' | 'books' | null
  picks: [],             // genre chips; [] if skipped
  gender: null,
  age: null,
  attribution: null,
};

function readJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

export function getUser() {
  return { ...EMPTY_USER, ...readJSON(USER_KEY, {}) };
}

export function saveUser(patch) {
  const next = { ...getUser(), ...patch };
  localStorage.setItem(USER_KEY, JSON.stringify(next));
  return next;
}

export function resetUser() {
  localStorage.removeItem(USER_KEY);
}

// --- A/B gate (spec: flag from the existing framework; control renders plist
// order everywhere; kill switch = the same flag). URL override ?ab=control or
// ?ab=treatment makes QA reproducible; assignment is sticky 50/50 otherwise.

export function getABVariant() {
  const url = new URLSearchParams(window.location.search).get('ab');
  if (url === 'control' || url === 'treatment') {
    localStorage.setItem(FLAG_KEY, url);
    return url;
  }
  let variant = localStorage.getItem(FLAG_KEY);
  if (variant !== 'control' && variant !== 'treatment') {
    variant = Math.random() < 0.5 ? 'control' : 'treatment';
    localStorage.setItem(FLAG_KEY, variant);
  }
  return variant;
}

export function setABVariant(variant) {
  localStorage.setItem(FLAG_KEY, variant);
}

// --- Table loading with fail-open. The dev panel can simulate a missing table
// to demonstrate: control arm and missing-table case render identical plist order.

export function loadTable() {
  if (localStorage.getItem(TABLE_KILL_KEY) === '1') return null;
  return table;
}

/** The catalog itself (titles/tags in plist order) always exists in the app,
 * independent of whether the ordering table delivery succeeded. */
export function getCatalog() {
  return table;
}

export function setSimulateMissingTable(on) {
  if (on) localStorage.setItem(TABLE_KILL_KEY, '1');
  else localStorage.removeItem(TABLE_KILL_KEY);
}

export function isSimulatingMissingTable() {
  return localStorage.getItem(TABLE_KILL_KEY) === '1';
}

/** Personalization is on only in the treatment arm with a table present. */
export function personalizationActive() {
  return getABVariant() === 'treatment' && loadTable() !== null;
}
