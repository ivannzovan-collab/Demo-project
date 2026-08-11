# ReelSaga v1-lite — Onboarding + Personalization

Implementation of the **Onboarding + Personalization Two-Week Build Spec (v1-lite)**
(companion to the Onboarding GDD and Master PRD v2.0, Aug 10 2026). Ships in the
`web/` prototype. Every user-visible behavior from the spec is in; the two heavy
infrastructure pieces (live Tableau reads, per-user server processing) are replaced
by their static/client substitutes, exactly as the spec prescribes.

## Try it

```bash
cd web
npm install
npm run dev        # open http://localhost:5173
npm test           # acceptance tests (node --test, no extra deps)
```

Suggested demo script (mirrors the kit's 90-second walkthrough):

1. Fresh load → onboarding. Pick **Videos**, chips **Werewolves + Secret Baby +
   Enemies to Lovers** → payoff = *The Sheriff's Alpha Son Is My True Mate*
   (focused), *Classroom Queen: Mafia Bloodline*, *From Bump to Spark* — the
   spec's seed script check. PLAY starts the free episode 1.
2. Home → Binge Worthy opens with the same titles ×1.2, with "▲ was #N" badges.
3. Open the ⚙ demo panel → **simulate missing table** (fail-open) or **switch
   arm to control**: both render identical plist order, Exclusive and
   Coming Soon shelves never move. The same panel shows the analytics event log.
4. Reset demo → run the **Books** path, or Skip everything (skip never blocks
   home; zero picks → global top 3 payoff).

## The whole ranking

`web/src/lib/personalization.js` — pure functions, no network, no state beyond
the picks:

```
lift(s)  = 1.2 if any onboarding pick matches s.tags (table.chips.match_patterns) else 1.0
final(s) = s.score × lift(s)
payoff   = top 3 eligible by final (matches first, padded with global top)
books    = match count desc, then catalog pos
ties     = final → score → plist position          # deterministic, QA-reproducible
control or table missing → plist order              # fail-open
```

## Where things live

| Spec item | Code |
|---|---|
| Static ordering table (73 series, 254 books, chips, patterns) | `web/src/data/ordering_table.json` |
| Ranking + payoff + books order (spec §3 pseudocode) | `web/src/lib/personalization.js` |
| Onboarding screens 1–7, skip logic, persistence, copy fixes | `web/src/pages/OnboardingPage.jsx` |
| Home reorder within re-rankable shelves; Exclusive/Upcoming untouched | `web/src/lib/shelves.js`, `web/src/pages/HomePage.jsx` |
| A/B gate, kill switch, fail-open | `web/src/lib/userState.js` (`?ab=control` / `?ab=treatment` URL override) |
| Analytics (`onb_screen_viewed`, `onb_answered`, `onb_skipped`, `payoff_impressions`, `payoff_play`) | `web/src/lib/analytics.js` (fire-once per step; log in localStorage + ⚙ panel) |
| Acceptance tests (spec §5, incl. the seed script check) | `web/test/personalization.test.mjs` |

The three QA copy fixes land with the flow: "What is **your** age?",
"Non-binary" (hyphenation), and the progress bar renders exactly one segment
per question step.

Demographics: skipped answers are stored as `null`; no ranking path reads
gender or age (the engine's only inputs are the table and the picks — enforced
by test).

## Weekly refresh ritual

Replace `web/src/data/ordering_table.json` with the new export, nothing else
changes. Owner: Kruno, Mondays. If a week is missed the app keeps serving the
last table — stale, never broken. (In the shipped app this file arrives via
remote config when available; the prototype bundles it per the spec's fallback.)

## Explicitly out (per spec)

Tableau integration, server-side ranking, behavioral lifts / seen-state from
watch history, shelf floating, automated score refresh, Layer-2 events — the
behavioral layer arrives in v1.4 with the Velebit AI build. The stretch
seen-state item (0.5 / 0.2 multipliers from Continue Watching) is not wired in;
the sort has an obvious slot for it when v1.4 lands.
