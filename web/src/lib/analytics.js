// ReelSaga v1-lite analytics (spec section 2).
// Events land in an in-browser log (localStorage + console) — the prototype
// stand-in for the real pipeline. Step events fire exactly once per step.

const LOG_KEY = 'rs_events';
const FIRED_KEY = 'rs_events_fired';

function readJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function writeJSON(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // storage unavailable — analytics must never break the app
  }
}

export function track(event, props = {}) {
  const entry = { event, props, ts: new Date().toISOString() };
  const log = readJSON(LOG_KEY, []);
  log.push(entry);
  writeJSON(LOG_KEY, log);
  // eslint-disable-next-line no-console
  console.log(`[analytics] ${event}`, props);
  return entry;
}

/** Fire once per unique key (e.g. once per onboarding step), per user record. */
export function trackOnce(onceKey, event, props = {}) {
  const fired = readJSON(FIRED_KEY, {});
  if (fired[onceKey]) return null;
  fired[onceKey] = true;
  writeJSON(FIRED_KEY, fired);
  return track(event, props);
}

export function getEvents() {
  return readJSON(LOG_KEY, []);
}

export function resetAnalytics() {
  localStorage.removeItem(LOG_KEY);
  localStorage.removeItem(FIRED_KEY);
}
