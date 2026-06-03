/* ============================================================
   ReelSaga — analytics wrapper (the single seam for Amplitude).
   Components/pages call track(); App/main call initAnalytics().
   All Amplitude usage lives here so events are consistent and
   easy to find. Session Replay (rrweb) is enabled in initAll.
   ============================================================ */

import * as amplitude from '@amplitude/unified';

const AMPLITUDE_API_KEY = 'eb163fb30edb7f327e93dcf51bb3c059';
let started = false;

/** Initialise Amplitude analytics + rrweb session replay.
 *  Client-side only, runs exactly once for the app's lifetime. */
export function initAnalytics(): void {
  if (started || typeof window === 'undefined') return;
  started = true;
  amplitude.initAll(AMPLITUDE_API_KEY, {
    serverZone: 'EU',
    analytics: { autocapture: true },
    sessionReplay: { sampleRate: 1 },
  });
}

/** Track a single analytics event (no-op during SSR / non-browser). */
export function track(eventName: string, props?: Record<string, unknown>): void {
  if (typeof window === 'undefined') return;
  amplitude.track(eventName, props);
}
