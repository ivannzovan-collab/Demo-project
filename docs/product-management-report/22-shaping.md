# Feature Shaping — Smart Binge

**Framework:** Shape Up Feature Shaping
**Feature:** Smart Binge (Series Completion Momentum System)
**Date:** March 17, 2026
**Shaper:** Head of Product
**Appetite:** 4 weeks (small team: 1 designer + 1 RN engineer + 1 backend engineer)

---

## The Problem

### What We Observe

Series completion rate is 22%. This means that of every 100 users who start a drama series, only 22 reach episode 100. The other 78 abandon somewhere in the middle — most commonly between episodes 10–30.

This is a critical product failure for two reasons:

1. **The business case for DramaSnap is narrative completion.** The 60-second format's unique value proposition is "finish the story in micro-moments." If users don't finish, we haven't delivered on the core promise.
2. **Completion predicts subscription conversion.** Users who complete a series convert to paid at 3.8x the rate of users who abandon. Completion is our strongest predictor of LTV.

### What Users Tell Us

From user interviews (n=24, conducted February 2026):

- "I get really into a show and then just... lose track of where I was."
- "I don't remember what happened in the last few episodes when I come back."
- "There are so many series now, I start new ones and forget about ones I was watching."
- "Sometimes I can't remember if I actually cared about this story or just started it randomly."
- "I felt like I was 80% through and then just stopped. I'm not sure why."

### What the Data Shows

| Drop-off window | % of users who abandon in this window | Primary behavioral signal |
|---|---|---|
| Episodes 1–3 | 35% of all abandons | Never converted to habit; weak content fit |
| Episodes 4–10 | 28% of all abandons | Hit paywall and didn't convert; or initial interest waned |
| Episodes 11–30 | 25% of all abandons | **The Momentum Valley** — invested but lost continuity |
| Episodes 31–70 | 9% of all abandons | Deep investment; abandonment usually life-event (travel, busy period) |
| Episodes 71–99 | 3% of all abandons | Almost never abandon at this point |

**The problem we are shaping for:** The Momentum Valley (episodes 11–30). Users are past the paywall, they've invested real time, but they're not "hooked" strongly enough to maintain daily habit. They lose the thread.

---

## Appetite

**4 weeks.**

This is a medium-stakes feature. It's not the core product (that was Cycle 1), but it's not a minor enhancement either. 4 weeks allows us to build something meaningful without over-engineering.

**What we will NOT do to maintain the 4-week budget:**
- Build a full AI-personalization system for recap content
- Create a new content format (interactive recaps, mini-episodes)
- Rebuild the episode player from scratch
- Instrument and analyze individual watch behavior patterns in real-time

If a solution requires any of these, it is out of appetite and needs to be re-shaped.

---

## Three Solution Shapes Compared

Before committing to a shape, we explored three approaches:

### Shape A: Streak Rescue System (Rejected)

**Concept:** Aggressive re-engagement notifications when a user hasn't watched for 24 hours during an active series. Includes "binge challenge" mechanics (watch 5 episodes today to restore your streak).

**How it works:**
- Push notification at 24-hour inactivity mark: "Don't lose your momentum on 'The Glass Throne' — Episode 15 is waiting"
- Escalating urgency: 48-hour notification, 72-hour notification
- "Binge challenge" popup when user returns: "Watch 3 episodes in a row to get back on track"

**Why rejected:**
- Does not solve the underlying problem (users lose the thread of the story)
- Purely coercive — relies on anxiety and guilt, not genuine value
- High risk of notification fatigue → unsubscribes from all notifications
- Doesn't help users who return but still can't remember where the story was
- Feels manipulative rather than helpful

---

### Shape B: Deep Continuity Dashboard (Rejected)

**Concept:** A dedicated "My Stories" screen with detailed series tracking — character maps, plot summaries, episode recaps, "story so far" summaries.

**How it works:**
- New tab in navigation: "My Stories"
- Per-series view: character relationship diagram, plot timeline, key events, episode synopses
- AI-generated story summary updates after each episode

**Why rejected:**
- Requires significant AI investment (per-series summarization, character relationship extraction)
- Adds a new navigation tab — complex wayfinding for a problem users don't consciously identify
- "My Stories" is a high-effort interaction; users with momentum don't need it; users who've lost momentum may not return to use it
- Over-engineered for a 4-week appetite
- Users don't want to read summaries — they want to feel the story

---

### Shape C: Momentum Layer (Selected)

**Concept:** Surface contextual momentum cues directly inside the existing viewing flow — not a new screen, but layered information at moments when users need it most.

**How it works:**
- **Story Arc Progress Bar:** A narrative progress indicator on the series page (not just episode count but "Act 1 / Act 2 / Act 3") — users understand they're in the rising action, the climax, etc.
- **Momentum Card:** A persistent card in "Continue Watching" that shows not just the episode but the emotional state of the series: a one-line "The story so far" hook
- **Previously On Recap:** A 10–15 second auto-playing recap at the start of any episode where the user has been away > 48 hours

**Why selected:**
- Fits entirely within the existing user flow — no new navigation required
- Delivers value at the exact moment of re-engagement (when the user returns after a gap)
- "Previously On" is a proven TV convention that users already understand
- Does not rely on coercion — delivers genuine contextual value
- Achievable in 4 weeks (no novel AI systems required; recap is a template-based summary of the last 3 episodes)

---

## Chosen Shape: The Momentum Layer

### What We're Building

Three connected elements that work together to maintain narrative momentum through the Momentum Valley:

---

### Element 1: Story Arc Progress Bar

**Where it lives:** Series detail screen, below the episode count.

**What it shows:**
```
[Series Detail Screen]
Title: The Glass Throne
Episodes: 100  |  Genre: Thriller  |  Rating: 4.4★

STORY ARC PROGRESS
[═══════════════════════░░░░░░░░░░░░░░]
      Act I                Act II        Act III
    Setup (1-25)    Rising Stakes (26-70)  Climax (71-100)
                     ▲ You are here (Ep 34)
```

**Design decisions:**
- Three-act structure is intuitive to all narrative consumers; no explanation needed
- Progress shown relative to narrative structure, not just episode count (watching episode 34 of 100 feels arbitrary; being in "Rising Stakes" feels like progress)
- Acts labeled with emotional content, not just numbers (users feel the story, not the count)
- Act boundaries are set by the AI script pipeline at series generation time (each series has a tagged 3-act structure)

**What it does not do:**
- Does not show spoilers about upcoming acts
- Does not show other users' progress
- Does not add any tappable interaction (display only)

---

### Element 2: Momentum Card

**Where it lives:** "Continue Watching" row on home screen.

**What it shows:**
```
[Continue Watching Card — Series in Momentum Valley]
┌─────────────────────────────────────┐
│  [Episode still]                    │
│  THE GLASS THRONE                   │
│  Episode 34 • Act II: Rising Stakes │
│  ─────────────────────────────────  │
│  "Elena just discovered the         │
│   conspiracy. The stakes got real." │
│                                     │
│  [▶ CONTINUE]                       │
└─────────────────────────────────────┘
```

**The one-line hook** (the "Elena just discovered..." text) is:
- Automatically generated by GPT-4 at series publish time for every episode
- A narrative present-tense summary of the emotional/story state entering this episode
- Maximum 15 words — must fit on the card without truncation
- Not a plot spoiler — captures the emotional context, not the resolution

**Behavior:**
- Only shows for series where the user is in episodes 11–70 AND has been inactive ≥ 24 hours
- For series with momentum (watched today), shows standard episode thumbnail + number
- Personalized per user per series; different cards for different users based on their progress

---

### Element 3: Previously On Recap

**Where it lives:** Appears before episode plays, replacing the standard loading transition.

**When it triggers:** User returns to a series after ≥ 48 hours of inactivity.

**What it shows:** A 12-second text-over-still recap of the previous 3 episodes:

```
[Previously on The Glass Throne...]

Episode 31: Elena infiltrated the council.
Episode 32: Marcus revealed he is not who he claimed.
Episode 33: The election was called early — someone moved the date.

[▶ Continue to Episode 34] or [Skip]
```

**Design decisions:**
- 12 seconds is skippable but not intrusive — respects user's time while delivering value
- Text over still images (not video recap) — production-ready from series metadata, no new content generation required
- Three episodes maximum — enough context to re-orient; more would be overwhelming
- "Skip" always available — the feature serves users who want it; never forces those who don't
- Only triggers when ≥ 48 hours inactive — does not interrupt users with momentum

**Content generation pipeline:**
- At series publish time, GPT-4 generates a 15-word "recap sentence" for every episode
- Recap sentences stored in `episodes.recap_sentence` field in database
- At playback, backend checks: `last_watched_at < NOW() - 48 hours` → serve last 3 recap sentences
- No real-time AI generation in the playback path (avoids latency and cost)

---

## Rabbit Holes

Five risks bounded before building:

### Rabbit Hole 1: Recap Content Quality

**Risk:** GPT-4-generated recap sentences are spoilers, wrong, or tonally off. Users trust the recap and are misled about the story.

**Bounding decision:**
- Recap sentences are generated and reviewed during the content quality gate, not on-demand
- Editorial team reviews all recap sentences for the first 50 series before launch
- Automated quality check: recap sentence must not contain specific episode-ending events (last lines of script are flagged and excluded from recap generation prompts)
- User "report a recap" button (tiny, accessible) feeds a review queue

---

### Rabbit Hole 2: Three-Act Structure Doesn't Apply to All Genres

**Risk:** Not all drama series follow a clean 3-act structure. Anthology-style series (standalone 10-episode arcs within a 100-episode series) or non-linear narratives don't map to Setup/Rising Stakes/Climax.

**Bounding decision:**
- For MVP, only apply Story Arc Progress Bar to series tagged as "linear narrative" in the content pipeline
- Series tagged as "anthology" or "non-linear" show standard episode count progress bar (no 3-act overlay)
- Act boundaries are defined by content team at series publish time; default template is 3-act (25/45/30 episode split)

---

### Rabbit Hole 3: Previously On Recap Interrupts Binging

**Risk:** The 12-second recap plays every time a binge viewer comes back to the app, even after just a lunch break. Users who binge 10 episodes in the morning, step away for 3 hours, and return are interrupted unnecessarily.

**Bounding decision:**
- Trigger threshold is 48 hours, not 24 hours or shorter
- If user watches ≥ 3 episodes in the current session (defined as < 2 hour gap between episodes), recap is suppressed for the remainder of the session even if a gap occurs
- "Don't show recaps" toggle in settings (single tap to disable globally)

---

### Rabbit Hole 4: Momentum Card "Story So Far" Language May Contain Implicit Spoilers

**Risk:** The card text "Elena just discovered the conspiracy" tells users who haven't watched Episode 33 what happened in Episode 33.

**Bounding decision:**
- Momentum card text is generated for the episode the user is *about to watch*, not the episode they last watched
- Text describes the emotional/story state that *enters* the upcoming episode, not the resolution of the previous episode
- Prompt engineering constraint: "Do not reveal what happened in the last episode; describe the emotional situation the viewer enters as they begin Episode N"
- Edge case: user on episode 1 (no momentum card shown; card only appears for episodes ≥ 5)

---

### Rabbit Hole 5: Backend Performance — Per-User, Per-Series Recap Card Generation

**Risk:** Generating personalized momentum cards for every user's "Continue Watching" series on home screen load would be extremely expensive if done in real-time (O(users × in-progress series) database queries per home screen load).

**Bounding decision:**
- Momentum card text is static (pre-generated at episode publish time) — no per-user generation
- The only per-user element is "which episode are you on?" — a single database lookup
- Home screen API call returns Continue Watching series with `current_episode_id`; client fetches `episodes.recap_sentence` for that episode from local cache
- Recap sentences cached on device for 7 days; invalidated on episode completion

---

## No-Gos

Explicit exclusions that will not be built in this shaping:

1. **AI-generated video recaps** — pre-rendered video "Previously On" segments. Text-over-still is sufficient and 10x cheaper/faster to produce. If validated, video recaps can be built in a future cycle.

2. **Character relationship maps** — Visualizing who knows whom, relationship dynamics, etc. Compelling feature but requires structured data extraction from scripts. Out of appetite for this cycle; shapes separately if validated.

3. **Personalized "Story So Far" summaries tailored to user's specific watch path** — If a user skipped episodes, their story summary should reflect that. This is technically interesting but adds significant complexity to the recap generation pipeline. All users see the same episode recap sentences; skip behavior is not reflected.

4. **Momentum Scores / Gamification** — A "momentum meter" that depletes when users are inactive. Explicitly rejected as it conflates urgency/anxiety with genuine narrative momentum. See rejected Shape A (Streak Rescue System) rationale.

5. **Social momentum cues** — "12 of your friends are ahead of you in this series." Potentially compelling but requires social graph data that doesn't exist yet. Shapes for the social feature phase.

6. **Previously On configurable length** — 5-second / 10-second / 15-second options. Adds decision fatigue for a minor benefit. Ship with 12 seconds as the default; adjust post-launch based on skip rate data.

---

## Done-When Criteria

This feature is considered done when:

**Functional:**
- [ ] Story Arc Progress Bar visible on series detail screen for all series with ≥ 1 episode watched
- [ ] Three-act structure correctly displayed for linear narrative series; standard progress bar for non-linear/anthology series
- [ ] Momentum Card appears in Continue Watching row for all series where user is in episodes 11–70 AND last watched > 24 hours ago
- [ ] Momentum Card one-line hook text is populated for all episodes ≥ 5 of all currently published series
- [ ] Previously On Recap triggers when user opens episode after ≥ 48 hours of inactivity on that series
- [ ] Recap shows correct last 3 episodes with accurate recap sentences
- [ ] "Skip" button on Previously On Recap is functional and skips immediately
- [ ] "Don't show recaps" toggle in settings disables Previously On globally

**Quality:**
- [ ] Previously On Recap latency: displayed within 500ms of episode tap (pre-cached content)
- [ ] Recap sentences reviewed and approved for first 50 series by editorial team before launch
- [ ] No recap sentence identified as a spoiler in QA review
- [ ] Feature functions correctly in offline mode (graceful degradation: skip card and recap, play episode directly)

**Analytics:**
- [ ] Previously On shown event tracked (user_id, series_id, episode_id, timestamp)
- [ ] Previously On skipped event tracked (with time to skip)
- [ ] Momentum Card visible event tracked (impression)
- [ ] Momentum Card tapped event tracked
- [ ] Series completion rate measurable in pre/post cohort (must instrument before launch for holdout comparison)

---

## De-Risking Prototype Sequence

Before building the full feature, validate assumptions in this order:

### Step 1 (Week 0, before cycle starts): Editorial Validation

**What:** Head of Content reviews 20 GPT-4-generated recap sentences for accuracy and spoiler risk.
**Goal:** Validate that the content pipeline can produce acceptable recap sentences without major prompt engineering investment.
**Pass criteria:** ≥ 80% of sentences are rated "accurate and non-spoiling" by editorial reviewer.
**If fails:** Re-engineer recap generation prompt; add constraints; re-test before committing to Momentum Card element.

### Step 2 (Week 1): Story Arc Bar Prototype

**What:** Designer builds non-functional prototype of Story Arc Progress Bar in Figma. Share with 5 beta users.
**Goal:** Validate that three-act labeling (Setup / Rising Stakes / Climax) is intuitively understood without explanation.
**Pass criteria:** ≥ 4 of 5 users correctly identify what the bar represents without prompting.
**If fails:** Test alternative framing (Beginning / Middle / End; Part 1/2/3); do not proceed with the current labels.

### Step 3 (Week 2): Momentum Card A/B Test Design

**What:** Engineer implements basic version of Momentum Card (text only, no design polish). Run against control (standard card) for 1 week with 1,000 users.
**Goal:** Validate that momentum card copy increases "Continue Watching" tap rate.
**Pass criteria:** Momentum card tap rate ≥ 10% higher than standard card tap rate.
**If fails:** Test alternative card copy approaches; consider dropping the one-line hook if copy doesn't improve taps.

### Step 4 (Week 3): Previously On Usability Test

**What:** Designer tests Previously On Recap flow with 8 users who have been away from a series for ≥ 3 days.
**Goal:** Validate that recap correctly re-orients users and increases episode play rate vs. control.
**Pass criteria:** ≥ 6 of 8 users say recap was helpful; < 2 users say it was annoying or interruptive.
**If fails:** Test 6-second version; test different trigger threshold (72 hours instead of 48); consider making recap opt-in rather than opt-out.

---

*This shaped pitch is ready for the betting table. If approved, it begins on the first day of the next 4-week cycle. If not approved, it returns to the shaping pool for the following cycle.*
