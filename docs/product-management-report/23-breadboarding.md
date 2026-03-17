# Breadboarding — Core Viewing Experience

**Framework:** Shape Up Breadboarding
**Feature area:** Core viewing experience (browse → watch → complete → return)
**Date:** March 17, 2026
**Author:** Product Design Team

---

## Overview

Breadboarding maps the user interface affordances and system responsibilities of a feature without committing to visual design. It captures *what the interface allows users to do* and *what the system does in response* — answering the wiring question before the design question.

This breadboard covers the complete core viewing loop: discovering a drama series, watching an episode, completing an episode, unlocking content, and resuming watching on a return visit.

---

## 10-Step User Journey

The core viewing experience follows this journey from first open to daily habit:

| Step | User Goal | Where They Are | What They Need |
|---|---|---|---|
| 1 | Discover something interesting | Home Screen | Browse content by genre/trend; see enough context to make a choice |
| 2 | Evaluate a series | Series Detail Screen | Synopsis, episode count, genre, rating; sense of whether this is worth starting |
| 3 | Start the first episode | Episode Player | Video to start immediately; minimal friction between decision and playback |
| 4 | Watch an episode | Episode Player | Immersive full-screen video; minimal UI chrome; controls accessible but not intrusive |
| 5 | React to the episode | Episode End Screen | Rating, immediate path to next episode, share option |
| 6 | Continue to next episode | Episode Player | Autoplay or explicit tap; momentum maintained |
| 7 | Hit the paywall (episode 4) | Paywall Screen | Clear value proposition; minimal friction to subscribe; not trapped |
| 8 | Subscribe and unlock | Paywall → Player | Seamless resumption of series after payment |
| 9 | Close app; return later | Home Screen (return visit) | Immediate "Continue Watching" surface; no rediscovery required |
| 10 | Complete a series | Series Complete Screen | Emotional reward; path to next series; investment (share, badge) |

---

## UI Affordances Table

The following 14 affordances represent every user-accessible action in the core viewing flow:

| # | Affordance | Location | User Action | Result |
|---|---|---|---|---|
| A1 | Series Card | Home Screen | Tap | Opens Series Detail Screen |
| A2 | Genre Filter | Home Screen | Tap genre pill | Filters visible series to selected genre |
| A3 | Search Bar | Home Screen | Tap + type | Opens Search Screen with results |
| A4 | "Play Episode 1" Button | Series Detail Screen | Tap | Begins episode playback; navigates to Episode Player |
| A5 | Episode List | Series Detail Screen | Scroll + tap episode row | Opens that specific episode in player (skips to N) |
| A6 | Video Surface (player) | Episode Player | Tap | Reveals/hides player controls overlay |
| A7 | Pause / Play Button | Episode Player (controls overlay) | Tap | Pauses / resumes playback |
| A8 | Progress Scrubber | Episode Player (controls overlay) | Drag | Seeks to timestamp within episode |
| A9 | Subtitles Toggle | Episode Player (controls overlay) | Tap | Enables/disables subtitle overlay |
| A10 | Episode End — Rate | Episode End Screen | Tap 1–5 stars | Submits rating; updates recommendation model |
| A11 | Episode End — Next Episode | Episode End Screen | Tap (or autoplay) | Navigates to next episode player |
| A12 | Episode End — Share | Episode End Screen | Tap | Opens share sheet with episode clip + app link |
| A13 | Paywall — Subscribe | Paywall Screen | Tap tier button | Initiates App Store IAP flow |
| A14 | Continue Watching Card | Home Screen | Tap | Opens Episode Player at user's current episode |

---

## System Responsibilities Table

The following 12 system responsibilities correspond to the user affordances above:

| # | System Responsibility | Trigger | Response | SLA |
|---|---|---|---|---|
| S1 | Serve home screen content | App open (authenticated) | Return personalized series rows from recommendation service; fall back to editorial if model score unavailable | < 1.5s response |
| S2 | Fetch series metadata | Series card tap | Return series detail (title, synopsis, episode list, rating, genre, thumbnail) from series service | < 500ms |
| S3 | Check episode access rights | Episode play request | Verify: (1) is episode within free tier limit? (2) does user have active subscription? (3) is episode published? | < 200ms |
| S4 | Stream episode video | Access check passes | Return HLS manifest URL for episode from CDN; begin adaptive bitrate stream | First frame < 2s (4G) |
| S5 | Pre-buffer next episode | Episode playback begins | Background fetch HLS manifest for episode N+1 in same series | Complete before episode N ends |
| S6 | Record episode completion | User watches ≥ 85% of duration | Write completion event to user_progress table; trigger: badge check, recommendation model update, streak update | Async; < 5s |
| S7 | Trigger paywall | Episode N+1 access check fails (free limit reached) | Return 402 status with paywall metadata; client renders Paywall Screen | < 200ms |
| S8 | Process subscription purchase | IAP confirmation received from App Store/Google Play | Write subscription record; update user tier; return access grant to client | < 10s end-to-end |
| S9 | Generate share clip | Share button tap | Extract 15-second clip from episode video at timestamp-of-share; generate share card image; return shareable URL | < 30s (async, show spinner) |
| S10 | Persist and sync progress | Episode completion event | Update user_progress (last_watched_episode, completion_percentage); sync across user's devices | < 30s sync |
| S11 | Serve "Continue Watching" | Home screen load | Query user_progress for all in-progress series; return ordered by recency; include episode_id and series_id | < 500ms |
| S12 | Award series completion badge | Episode 100 completion event | Check series completion; write badge_earned record; send push notification; return badge metadata to client | < 5s |

---

## Wiring Diagram

The wiring diagram shows how affordances (user actions) connect to system responsibilities and what screens result. Four core flows:

---

### Flow 1: Watch Episode

```
[HOME SCREEN]
    │
    │ User taps Series Card [A1]
    ▼
[SERIES DETAIL SCREEN]
    │ System: Fetch series metadata [S2]
    │
    │ User taps "Play Episode 1" [A4]
    ▼
[ACCESS CHECK]
    │ System: Check episode access rights [S3]
    │
    ├─── Access granted ──────────────────────────────────────────┐
    │                                                              │
    │                                                              ▼
    │                                                    [EPISODE PLAYER]
    │                                                        │ System: Stream episode [S4]
    │                                                        │ System: Pre-buffer N+1 [S5]
    │                                                        │
    │                                                        │ User watches episode
    │                                                        │
    │                                                        │ ≥ 85% watched
    │                                                        ▼
    │                                              System: Record completion [S6]
    │
    └─── Access denied (free limit) ────────────────────────────▶
                                                        [PAYWALL SCREEN]
                                                         (see Flow 3)
```

---

### Flow 2: Episode Complete

```
[EPISODE PLAYER]
    │ User watches to ≥ 85%
    │ System: Record completion [S6]
    │
    │ Episode ends (or 85% threshold reached)
    ▼
[EPISODE END SCREEN]
    │
    ├── User taps star rating [A10]
    │       │ System: Write rating to user_progress
    │       │ System: Trigger recommendation model update
    │       └── Rating submitted; stars fill visually
    │
    ├── User taps Share [A12]
    │       │ System: Generate share clip [S9]
    │       └── iOS/Android share sheet opens with clip + link
    │
    ├── User taps Next Episode [A11]
    │       │ System: Check access rights for N+1 [S3]
    │       ├── Access granted → [EPISODE PLAYER for N+1]
    │       └── Access denied → [PAYWALL SCREEN] (see Flow 3)
    │
    └── Autoplay countdown reaches 0 (user does nothing for 3s)
            │ System: Check access rights for N+1 [S3]
            ├── Access granted → [EPISODE PLAYER for N+1] (auto-navigates)
            └── Access denied → [PAYWALL SCREEN] (auto-navigates)
```

---

### Flow 3: Unlock Series (Paywall → Subscribe)

```
[PAYWALL SCREEN]
    │ System: Triggered by access denied response [S7]
    │ Screen shows: remaining episodes, Blaze tier benefits, price
    │
    │ User taps "Subscribe — $9.99/month" [A13]
    ▼
[APP STORE IAP SHEET]
    │ (Native iOS/Android payment sheet — outside DramaSnap UI)
    │
    ├── User cancels
    │       └── Returns to [PAYWALL SCREEN]
    │
    └── User confirms purchase
            │ App Store/Google Play sends purchase confirmation
            ▼
        [ACCESS GRANT PROCESSING]
            │ System: Process subscription [S8]
            │ Writes subscription record
            │ Updates user tier to Blaze
            │
            ▼
        [SUBSCRIPTION CONFIRMED SCREEN]
            │ "You're now a Blaze subscriber!"
            │ Series access badge animates
            │
            │ Auto-navigates after 2s (or user taps Continue)
            ▼
        [EPISODE PLAYER — Episode N] (the episode that was blocked)
            │ System: Stream episode [S4]
            └── User continues watching seamlessly
```

---

### Flow 4: Resume Watching (Return Visit)

```
[APP OPEN — RETURNING USER]
    │ System: Serve home screen content [S1]
    │ System: Serve "Continue Watching" row [S11]
    │
    │ Home screen renders with:
    │  Row 1: "Continue Watching" [A14] — series in progress
    │  Row 2: Trending Today
    │  Row 3: For You (recommendations)
    │
    │ User taps Continue Watching card [A14]
    ▼
[ACCESS CHECK]
    │ System: Check episode access rights [S3]
    │
    ├── Access granted
    │       ▼
    │   [PREVIOUSLY ON RECAP SCREEN] (if ≥ 48h since last watch)
    │       │ Shows: 3 episode recap sentences
    │       │ User taps Skip or waits 12s
    │       ▼
    │   [EPISODE PLAYER — User's current episode]
    │       │ System: Stream episode [S4]
    │       └── User resumes series
    │
    └── Access denied (subscription expired)
            ▼
        [SUBSCRIPTION LAPSED SCREEN]
            │ "Your Blaze subscription has expired"
            │ "Resubscribe to continue watching"
            │ [Resubscribe button] → [PAYWALL SCREEN] (Flow 3)
            │ [Browse free content button] → [HOME SCREEN]
```

---

## Six Vertical Slices

A vertical slice is a thin, complete path through the system — enough to demo end-to-end behavior for a specific scenario without building every feature. Slices are ordered by criticality for early validation.

### Slice 1: "Watch Your First Episode" (Demo Day 1)

**Demo path:**
1. Open app (fresh install, no account)
2. See home screen with 3 genre rows (editorial, no personalization)
3. Tap a series card → series detail loads
4. Tap "Play Episode 1" → episode player opens, video plays
5. Watch full episode → episode end screen appears with rating prompt
6. Tap "Next Episode" → Episode 2 begins playing

**Includes:**
- Home screen with hardcoded editorial series list
- Series detail screen (metadata only; no user ratings displayed)
- Episode player (video playback, pause/play, episode counter)
- Episode end screen (rating UI + next episode button)
- Access check (always passes — no paywall logic in this slice)

**Excludes:**
- Authentication (no login required)
- Progress persistence (session only)
- Personalized recommendations
- Paywall
- Previously On Recap

**Risks:**
- Video CDN setup must be complete before this slice can be demonstrated
- "Watch time ≥ 85% = completion" threshold must be instrumented (needed for S6)

---

### Slice 2: "Returning User Resumes" (Demo Day 5)

**Demo path:**
1. Open app (returning user, has watched episodes 1–3 of "The Glass Throne")
2. "Continue Watching" row visible at top of home screen
3. Tap series card → player opens at Episode 4 (correct resume point)
4. Watch Episode 4 → end screen → tap Next Episode → Episode 5 plays

**Includes:**
- User authentication (email login)
- Progress persistence (server-side user_progress table)
- "Continue Watching" API endpoint (S11)
- Episode access check for episodes 1–5 (all pass — no paywall yet)
- Series progress indicator on home screen card

**Excludes:**
- Previously On Recap (not built in this slice)
- Paywall (episodes 1–5 all free in this slice)
- Cross-device sync testing

**Risks:**
- user_progress write/read cycle must be fast enough that home screen refresh after episode complete shows updated progress

---

### Slice 3: "Paywall and Subscribe" (Demo Day 8)

**Demo path:**
1. User has completed Episodes 1–3 of a series
2. Taps "Next Episode" on Episode 3 end screen
3. Paywall screen appears with "Episodes 4–100 require Blaze"
4. User taps "Subscribe — $9.99/month"
5. App Store payment sheet appears
6. User confirms (using Sandbox test account)
7. Subscription confirmed screen shows
8. Episode 4 plays automatically

**Includes:**
- Access check logic (episodes 4+ require subscription check)
- Paywall screen (Blaze tier only; single price point)
- Apple IAP integration (sandbox environment)
- Subscription record write and user tier update
- Access re-check after subscription confirmation

**Excludes:**
- Google Play IAP (iOS-only for this slice)
- Annual plan toggle
- Subscription management / cancel flow

**Risks:**
- App Store sandbox environment must be configured
- IAP product IDs must be registered in App Store Connect before this slice can be demonstrated
- Webhook from App Store to backend must be implemented (receipt validation)

---

### Slice 4: "Previously On Recap" (Demo Day 12)

**Demo path:**
1. User has been away from a series for 3 days
2. Opens app → taps Continue Watching card
3. Previously On Recap screen appears (12 seconds)
4. Shows last 3 episode recap sentences for the user's current series
5. User taps Skip → Episode player opens immediately
6. Alternatively: user waits 12 seconds → episode plays automatically

**Includes:**
- Inactivity check (last_watched_at < NOW() - 48h)
- Recap screen with 3 episode recap sentences from database
- Skip button (immediate navigation to player)
- Auto-advance to player after 12 seconds
- recap_sentence data populated in episodes table for ≥ 5 test series

**Excludes:**
- AI generation of recap sentences (manual population for demo)
- "Don't show recaps" settings toggle
- Recap analytics events (added in Slice 6)

**Risks:**
- Recap sentences must be pre-loaded in database before this slice demo
- Inactivity logic relies on correct user_progress timestamps — must validate data integrity

---

### Slice 5: "Series Completion" (Demo Day 15)

**Demo path:**
1. User completes Episode 100 of a series
2. Series Complete screen appears (celebratory animation)
3. Badge awarded: "Series Complete: The Glass Throne"
4. Badge notification fires
5. "Explore Similar Series" recommendations appear
6. User taps a recommended series → series detail screen

**Includes:**
- Episode 100 completion detection (S12)
- Series Complete screen with animation
- Badge award logic and badge notification
- Badge visible on profile screen
- "Similar Series" recommendation query (based on genre + completed series)

**Excludes:**
- Share completion card (nice to have; scope hammer to cool-down if time-constrained)
- Social proof ("N users also completed this series")

**Risks:**
- Badge animation requires design asset creation; must be in pipeline before demo
- "Similar Series" recommendation logic needs at least 10 series in the same genre

---

### Slice 6: "Full Instrumented Experience" (Demo Day 18)

**Demo path:**
The complete happy path (Slices 1–5 in sequence) with all analytics events firing.

**Includes:**
- All analytics events from S1–S12
- Segment event tracking for: episode_started, episode_completed, paywall_viewed, subscription_purchased, share_initiated, recap_shown, recap_skipped, badge_earned
- Episode load time monitoring (p90 measured)
- Error tracking via Sentry

**Excludes:**
- Analytics dashboard (backend events only; visualization is Phase 2)
- A/B test infrastructure (separate implementation)

**Risks:**
- Analytics event specification must be finalized and documented before this slice begins
- All prior slices must be stable before instrumentation layer is added

---

## Slice Sequencing Rationale

The slice sequence is ordered by:

1. **User value delivery first:** Slices 1 and 2 deliver the core experience before any monetization or retention mechanics. This allows early user testing of the fundamental product.

2. **Revenue-critical path third:** The paywall (Slice 3) must work before any paid beta, but it builds on Slices 1 and 2. Getting monetization wrong early is worse than getting it in week 2 of development.

3. **Retention features after core loop:** Slices 4 and 5 (Previously On, Series Completion) build on top of a working core loop. They cannot be validated without users who are already completing episodes.

4. **Instrumentation last (but not optional):** Slice 6 ensures every prior behavior is observable. Without instrumentation, decisions in cycles 2 and 3 will be made in the dark. Adding analytics at the end of the cycle (rather than in every slice) reduces noise during rapid development without sacrificing final instrumentation quality.

**Critical path dependencies:**
```
Slice 1 (Watch Episode)
    └── Slice 2 (Resume) — requires auth + progress
            └── Slice 3 (Paywall) — requires access check + IAP
                    └── Slice 4 (Previously On) — requires progress timestamps
                            └── Slice 5 (Completion) — requires episode 100 detection
                                    └── Slice 6 (Instrumentation) — requires all events defined
```

All slices on the critical path — no slice can be built before its predecessor is working.

---

*This breadboard defines the wiring of DramaSnap's core viewing experience. It is intentionally free of pixel-level design decisions. The designer uses this wiring to create the visual design; the engineers use it to define API contracts. Both start from the same map.*
