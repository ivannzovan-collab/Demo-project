# Shape Up Plan — DramaSnap MVP

**Framework:** Basecamp's Shape Up
**Date:** March 17, 2026
**Author:** Product Team

---

## Overview

Shape Up replaces sprint planning and feature backlogs with a six-week cycle of deliberate bets on shaped work. There is no backlog — only a betting table where the best shaped pitches compete for the team's time. Each cycle ends with shipped, working software or an explicit decision not to continue.

DramaSnap is in the pre-PMF stage, which makes Shape Up particularly well-suited: it forces the team to commit to finishing real work in a fixed time box rather than accumulating unfinished features across endless sprints.

---

## Six-Week Appetite for MVP

**Total MVP timeline:** Two 6-week build cycles + 2 weeks cool-down = **14 weeks to beta**

**Why 6 weeks per cycle:**
- 6 weeks is long enough to build something meaningful without losing the thread
- Short enough to prevent scope creep from being institutionalized
- Forces hard prioritization: if it doesn't fit in 6 weeks, it either gets cut or re-shaped

**Cool-down period (2 weeks between cycles):**
- Fix bugs discovered at end of cycle
- Write pitches for next betting table
- Conduct user research to inform shaping
- Technical infrastructure work not tied to a specific feature

---

## Shaping — Cycle 1: "The Cold Open"

*Cycle 1 builds the core viewing product: the ability to find a drama, watch it, and want to come back tomorrow.*

### Problem

A new user downloads DramaSnap. They need to experience the core emotional hook — "I need to know what happens next" — within the first 5 minutes. If they don't feel that pull, they will not return.

The current state is a blank canvas. There is no browse experience, no player, no progress tracking. The problem is: how do we build the smallest coherent experience that creates the emotional hook reliably?

**What's at stake:** If users don't feel the hook in cycle 1, cycle 2 has nothing to build on.

### Fat Marker Sketch — Cycle 1

```
[HOME SCREEN]
┌─────────────────────────────────┐
│  DramaSnap Logo                 │
│  ┌─────────────────────────┐   │
│  │  CONTINUE WATCHING       │   │
│  │  [Series Card] [Card]    │   │
│  └─────────────────────────┘   │
│  ┌─────────────────────────┐   │
│  │  TRENDING TODAY          │   │
│  │  [Card] [Card] [Card]    │   │
│  └─────────────────────────┘   │
│  ┌─────────────────────────┐   │
│  │  ROMANCE                 │   │
│  │  [Card] [Card] [Card]    │   │
│  └─────────────────────────┘   │
└─────────────────────────────────┘

[EPISODE PLAYER]
┌─────────────────────────────────┐
│                                 │
│     [FULL-SCREEN VIDEO 9:16]    │
│                                 │
│  EP 3 of 100 ●●●○○○○○○○       │
│         The Glass Throne        │
│  ─────────────────────── ⚙     │
└─────────────────────────────────┘

[EPISODE END SCREEN]
┌─────────────────────────────────┐
│   ★★★★☆  Rate this episode     │
│                                 │
│   ┌───────────────────────┐    │
│   │  NEXT EPISODE (3s)  ▶  │    │
│   └───────────────────────┘    │
│                                 │
│   Episode 4 of 100              │
│   "The Betrayal Begins"         │
└─────────────────────────────────┘
```

### Included in Cycle 1 Scope

| Element | What's included | What's explicitly NOT included |
|---|---|---|
| Home screen | Trending row, 3 genre rows, Continue Watching row | Personalized recommendations (hand-curated editorial only) |
| Series detail | Title, description, episode list, first episode play | User reviews, related series, cast bios |
| Episode player | Full-screen 9:16 video, tap-to-pause, episode counter, subtitles | Speed controls, sleep timer, PiP mode |
| Episode end screen | Rating prompt, autoplay countdown, Next Episode CTA | Share button, badge notification (cycle 2) |
| Progress tracking | Resume from last episode, episode completion tracking | Cross-device sync (local only in cycle 1) |
| Onboarding | Genre selection (3 options), guest mode (3 free episodes) | Tutorial overlay, notification permission prompt (deferred to post-first-episode) |
| Authentication | Email signup + Apple/Google SSO, triggered at episode 4 | Profile photo upload, social connections |
| Paywall | Episode 4 gate, Blaze tier ($9.99) subscription | Annual plan toggle, Spark tier, Inferno tier |

### Rabbit Holes — Cycle 1

These are scope traps that will swallow the cycle if not explicitly bounded:

**1. Recommendation engine in cycle 1**
*Trap:* The home screen "feels empty" without personalization; team is tempted to build collaborative filtering before launch.
*Bound:* Editorial curation by Head of Content. ML model is cycle 2. The home screen needs good content, not algorithmic content, on day one.

**2. Perfect video playback performance**
*Trap:* Engineering wants to achieve < 1 second load time on all network conditions before launch.
*Bound:* Target < 3 seconds p90 on 4G for cycle 1. Performance improvements are continuous, not launch-blocking.

**3. Flexible paywall configuration**
*Trap:* The paywall triggers at episode 4; stakeholders want to A/B test episode 3 before launch.
*Bound:* Hard-code paywall at episode 4 for cycle 1. A/B test infrastructure is cycle 2. Do not build a configurable paywall system in cycle 1.

**4. Subscription tier complexity**
*Trap:* Marketing wants all three tiers (Spark, Blaze, Inferno) available at launch for data collection.
*Bound:* Blaze tier only at launch. Adding additional tiers is 2 days of work; save it for after first revenue data.

**5. Content moderation pipeline**
*Trap:* Legal wants a full automated + human moderation system before any content is public.
*Bound:* For cycle 1 (closed beta, invited users), manual review of all published series is sufficient. Automated pipeline is cycle 2.

### No-Gos — Cycle 1

Explicit exclusions that will not be built regardless of requests:

1. Social features (comments, reactions, follows, sharing)
2. Multi-language support (English only)
3. Offline downloads
4. Live notifications / push (set up infrastructure, do not build notification logic)
5. Creator tools or UGC of any kind
6. Analytics dashboard visible to users

---

## Shaping — Cycle 2: "The Hook System"

*Cycle 2 builds the system that transforms a one-time viewer into a daily habit user.*

### Problem

After cycle 1, users can find and watch a drama. The problem cycle 2 solves: how do we get them to come back tomorrow, and the day after, and the day after?

Without a habit loop, DramaSnap is a novelty that users try once. With it, it's a daily ritual. Cycle 2 builds the hook system: personalization that improves with use, social investment mechanisms, achievement rewards, and the technical infrastructure for retention marketing.

### Fat Marker Sketch — Cycle 2

```
[PERSONALIZED HOME - returning user]
┌─────────────────────────────────┐
│  FOR YOU ✨                      │
│  [Series matched to ratings]    │
│  "Because you loved 'Vow'"      │
│                                 │
│  CONTINUE WATCHING              │
│  [Series with progress % ring]  │
└─────────────────────────────────┘

[PROFILE / ACHIEVEMENT SCREEN]
┌─────────────────────────────────┐
│  Marcus ◆ Blaze Subscriber      │
│  🔥 12-day streak               │
│                                 │
│  BADGES (6 earned / 24 total)   │
│  [First Episode] [7-Day Streak] │
│  [Binge Machine] [Drama Queen]  │
│                                 │
│  STATS                          │
│  Episodes: 84 | Series: 3       │
│  Completion: 94%                │
└─────────────────────────────────┘

[SHARE CARD - generated on episode end]
┌─────────────────────────────────┐
│  [Episode still]                │
│  "Episode 23 — The Glass Throne"│
│  "Just finished the twist 🤯"   │
│  Watch on DramaSnap             │
└─────────────────────────────────┘
```

### Included in Cycle 2 Scope

| Element | What's included | What's explicitly NOT included |
|---|---|---|
| Personalization | Collaborative filtering model on "For You" row; "Because you watched X" labels | Real-time recommendation updates (24-hour refresh is sufficient) |
| Cross-device sync | Progress sync via server (not just local storage) | Offline mode (sync on reconnect is separate) |
| Achievement system | Badge engine, 15 initial badges, badge notification, profile badge display | Badge marketplace, badge trading, badge NFTs (explicitly excluded forever) |
| Social sharing | Share card generation (static image + link), iOS/Android share sheet integration | In-app social feed, friend activity feed |
| Streak tracking | Daily streak counter, streak milestones (7/30/60 days), streak protection mechanic | Streak league, competitive streak boards |
| Push notifications | Infrastructure + notification types: new episode, streak reminder, recommendation | Full notification preference center (basic on/off only) |
| Watchlist | Save series button, watchlist tab in profile | Collaborative watchlists, shared watchlists |
| Annual subscription | Annual plan toggle on paywall, 20% discount messaging | Multi-currency pricing, PPP pricing |

### Rabbit Holes — Cycle 2

**1. Real-time recommendation updates**
*Bound:* 24-hour batch refresh is sufficient. Real-time updates require event streaming infrastructure that is cycle 3 work.

**2. Perfect badge icon design**
*Bound:* Use placeholder icons for cycle 2 launch; final icon polish is a cool-down week task, not a build blocker.

**3. Social feed (friend activity)**
*Bound:* Social sharing generates a clip for external networks. An in-app social feed requires a friend graph, which is out of scope for this cycle.

**4. Notification segmentation**
*Bound:* Two notification types at launch: "new episode drop" and "streak reminder." Advanced segmentation (best time, best message) is post-launch optimization.

**5. Share card customization**
*Bound:* One share card template. Custom designs and user-editable share cards are a future feature.

### No-Gos — Cycle 2

1. Live comments or in-app reactions
2. Watch parties
3. Creator profiles or attribution on share cards
4. Notification analytics dashboard
5. Referral program with tracking (referred users tracked in cycle 3)
6. Multi-language content

---

## Betting Table

Before each cycle begins, the betting table reviews all available pitches and selects which ones to bet 6 weeks on.

### Cycle 1 Betting Table Decision

**Date:** April 1, 2026

| Pitch | Appetite | Bet | Rationale |
|---|---|---|---|
| "The Cold Open" — Core viewing product | 6 weeks | ✅ BET | Foundation for everything; no other cycle can proceed without this |
| "Onboarding Personalization" — Advanced genre quiz + preference matching | 2 weeks | ❌ PASS | Diminishing returns vs. simple 3-genre selection; defer until retention data exists |
| "Web App" — Browser-based DramaSnap | 6 weeks | ❌ PASS | Mobile-first; web is post-PMF; betting table returns this if mobile retention > 30% D7 |

**Winning pitch:** "The Cold Open" — 6 weeks

### Cycle 2 Betting Table Decision

**Date:** May 13, 2026 (2 weeks after cycle 1 ships)

| Pitch | Appetite | Bet | Rationale |
|---|---|---|---|
| "The Hook System" — Personalization, badges, sharing, streaks | 6 weeks | ✅ BET | D7 retention from cycle 1 is the signal that makes this the right next bet |
| "Offline Downloads" — DRM + download queue | 4 weeks | ❌ PASS | Valuable but not the constraint on retention at this stage; defer to cycle 3 |
| "Multi-Language Dubbing" — Spanish + Portuguese | 3 weeks | ❌ PASS | International expansion is phase 2; English-speaking market not yet saturated |

**Winning pitch:** "The Hook System" — 6 weeks

---

## Building Phase

### Hill Charts

Shape Up uses hill charts to visualize problem-solving progress. Each scope is plotted on a hill: left side is "figuring out" (uncertainty), right side is "making it happen" (execution).

**Cycle 1 Hill Chart (Week 3 snapshot):**

```
          ↑ PEAK (figured out)
         /           \
FIGURING OUT         MAKING IT HAPPEN
        /               \
─────────────────────────────────────
  Onboarding UX ●       Home Screen ●●●
  Paywall Flow ●●       Episode Player ●●●
  Video Playback ●●●   Auth Flow ●●
  Episode End Screen ●●  Progress Tracking ●
```

*Reading: Home Screen and Episode Player are over the hill (execution). Paywall flow is mid-hill (design figured out, implementation in progress). Progress Tracking is still on the upslope (approach not yet decided).*

### Scope Hammering

When cycle work is falling behind, we scope-hammer rather than slip the deadline. The six-week boundary is fixed; scope is variable.

**Scope hammering questions:**
1. "Is this a 'nice to have' or a 'must have' for the hill chart to register this scope as done?"
2. "What's the simplest version of this that still creates the user value?"
3. "Can we ship a simpler version now and improve it in cool-down?"

**Cycle 1 scope hammers applied:**

| Original scope | After hammering | Rationale |
|---|---|---|
| Subtitles with full styling (color, font, positioning) | Basic white text subtitles, bottom of screen | Styling is polish; functional subtitles are the value |
| Watchlist with reordering and collections | Watchlist with simple add/remove | Collections are P2; add/remove is the job to be done |
| Cross-device sync (real-time) | Local progress sync (server sync in cool-down) | 95% of users are on one device; cross-device is an edge case |
| Full subscription management page | Cancel button + confirmation modal | The cancel flow must exist; it doesn't need to be beautiful in v1 |

### Circuit Breaker Policy

**Rule:** If a scope is still on the upslope of the hill chart at Week 5 (with 1 week remaining), it is cut from the cycle automatically unless it is a P0 blocker.

**Why:** A scope that isn't figured out in Week 5 will not be figured out in Week 6. Shipping uncertainty creates bugs and UX debt. It is better to cut cleanly and re-shape for the next cycle.

**Q2 2026 circuit breaker activations:**

| Scope | Cut at | Re-shaped for | Reason |
|---|---|---|---|
| Full notification preference center | Week 5 | Cool-down | Still figuring out notification taxonomy; basic on/off shipped instead |
| Share card A/B variants | Week 5 | Cycle 3 | Required analytics infrastructure not ready |

---

## Team Structure

### Core Team (Per Cycle)

Shape Up mandates small, autonomous teams. DramaSnap's cycle team:

| Role | Person | Responsibilities |
|---|---|---|
| Designer | 1 × Product Designer | UI design, UX flows, prototype, copy |
| Mobile Engineers | 2 × React Native Engineers | iOS + Android app implementation |
| Backend Engineer | 1 × Node.js/FastAPI Engineer | API endpoints, database, AI pipeline |

**Total team size:** 4 people

**No PM in the build team.** The PM (Head of Product) is responsible for shaping, betting, and representing the team to stakeholders. During the build cycle, the team makes product decisions autonomously within the shaped boundaries. PM is available for clarification questions but does not attend daily standups or participate in day-to-day execution.

**Why this structure works:**
- 4 people can communicate with zero meeting overhead
- Designer and engineers work together, not in sequence (no "design handoff")
- Backend engineer is present from day 1, so API contracts are established early
- Small team = no coordination tax

### Cycle Communication Norms

- **No daily standups.** Weekly 30-minute team sync on Wednesday to surface blockers
- **Hill chart updates.** Each scope owner updates their hill chart position on Monday and Thursday
- **No interruptions from outside the team.** Stakeholder questions go through PM; PM decides what reaches the team
- **Async first.** Use Linear (tasks) and Slack (async messages) before synchronous meetings

---

## Definition of Done

A cycle is done when:

### Cycle 1 Done Criteria

- [ ] New user can open the app and watch episode 1 of a series within 60 seconds of first launch
- [ ] Guest mode allows episodes 1–3 without account creation
- [ ] Episode player plays video full-screen (9:16) with < 3 second load time on 4G
- [ ] Autoplay countdown plays episode N+1 after episode N completes
- [ ] Episode end screen shows rating prompt and next episode CTA
- [ ] Episode 4 triggers paywall; Blaze subscription can be purchased via App Store IAP
- [ ] Paid subscriber can watch all available episodes without interruption
- [ ] User progress (last watched episode) persists across app restarts
- [ ] Home screen shows Continue Watching, Trending, and ≥ 3 genre rows
- [ ] Authentication via email, Apple, and Google SSO all functional
- [ ] No P0 or P1 bugs in smoke test pass
- [ ] Crash-free session rate ≥ 99% in internal testing
- [ ] ≥ 20 drama series published and available in app

### Cycle 2 Done Criteria

- [ ] "For You" row on home screen shows personalized recommendations for returning users with ≥ 5 ratings
- [ ] User profile shows earned badges, streak count, and watch stats
- [ ] ≥ 5 badges achievable in first week of use
- [ ] Share button generates shareable episode card (image + link) on episode end screen
- [ ] Daily streak counter increments correctly; streak protection mechanic functional
- [ ] Push notification delivered for "new episode drop" and "streak reminder" events
- [ ] Watchlist add/remove functional; watchlist visible in profile
- [ ] Annual subscription plan available on paywall toggle
- [ ] Progress synced to server; resumes correctly after reinstall (within same device initially)
- [ ] All cycle 1 done criteria still passing (no regressions)

---

*Shape Up works because it trusts the team to solve problems within defined boundaries. The shaping work done before the cycle starts is the most important work. If the pitch is clear, the team can build. If the pitch is vague, the team will wander.*
