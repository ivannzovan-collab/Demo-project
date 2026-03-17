# Hooked Model — DramaSnap

**Framework:** Nir Eyal's Hooked Model (Trigger → Action → Variable Reward → Investment)
**Date:** March 17, 2026
**Author:** Product Team

---

## Overview

The Hooked Model describes how products build habits by cycling users through four phases until the behavior becomes automatic. For DramaSnap, the goal is to make watching a daily 60-second drama episode as habitual as checking social media — a low-friction, emotionally rewarding behavior that users return to without needing external prompting.

Each pass through the Hook cycle increases a user's investment in the platform, raising the probability of the next cycle triggering spontaneously from within.

---

## Phase 1: Triggers

Triggers are the actuators of behavior — the sparks that initiate the Hook cycle. They come in two forms: **external** (delivered by the product) and **internal** (arising from the user's emotional state).

### 1.1 External Triggers

External triggers contain explicit information about what to do next. DramaSnap deploys four external trigger channels:

#### Push Notifications
| Trigger Type | Message Example | Optimal Send Time | Target Segment |
|---|---|---|---|
| New episode drop | "Episode 47 of 'Crimson Vow' just dropped. 60 seconds. Watch now." | 7:00–9:00 AM local | Active subscribers mid-series |
| Cliffhanger reminder | "You stopped right before the twist. Find out what happened." | 12:00–1:00 PM local | Users who exited on episode ending |
| Social proof | "12 of your contacts watched 'Midnight CEO' today." | 6:00–8:00 PM local | Users with 3+ connected contacts |
| Streak protection | "Don't break your 7-day streak. One episode takes 60 seconds." | 8:00–10:00 PM local | Streak-holding active users |
| Re-engagement | "New drama added in your favorite genre: Workplace Romance." | Varies | Lapsed (7–30 days inactive) |

**Best practices:**
- Cap push notifications at 2 per day maximum
- Allow granular notification preferences in settings
- A/B test copy continuously; dramatic/emotional language outperforms generic CTAs
- Honor quiet hours (10 PM – 7 AM) unless user opts into late-night drops

#### Social Triggers
- **Share cards:** Auto-generated vertical clips from episode highlights, shareable to Instagram Reels, TikTok, and WhatsApp
- **Tag mechanics:** "Watch with me" feature allows users to tag contacts directly into a drama series
- **Leaderboards:** Weekly watch streaks displayed among friends create ambient competitive triggers
- **Discovery shares:** When a contact starts a new drama, friends receive a subtle notification ("Sarah just started watching 'Steel Hearts'")

#### Email / In-App Inbox
| Email Type | Frequency | Content |
|---|---|---|
| Weekly Drama Digest | Weekly (Sunday evening) | Top 5 dramas, personalized based on viewing history |
| New Release Alert | Per-release | Series premiere notification with episode 1 preview |
| Streak milestone | Triggered | Celebration of 7/30/100-day milestones |
| Win-back series | D7, D14, D30 post-lapse | Escalating re-engagement sequence with new content highlight |

#### Widget (Home Screen / Lock Screen)
- **iOS/Android widget:** Displays current episode number, series name, and a one-tap "Resume" button
- **Lock screen widget (iOS 16+):** Shows episode thumbnail and progress ring
- **Goal:** Reduce cognitive load of "deciding to open the app" — the trigger is present before the user opens their phone for any purpose

---

### 1.2 Internal Triggers

Internal triggers are the most powerful and the end-goal of the Hook cycle. They are negative emotional states that users learn (consciously or not) to associate with the DramaSnap behavior as relief.

#### Boredom
**Emotional state:** "I have nothing engaging to do right now."
**Context:** Commute, waiting room, lunch break, ad break on TV
**DramaSnap response:** Each episode is precisely 60 seconds — perfectly calibrated for micro-boredom windows. The format signals "I can finish this before my stop."
**Design reinforcement:** Episode length timer visible before tapping play. "Just 60 seconds" messaging in onboarding.

#### Curiosity / Anticipation
**Emotional state:** "I need to know what happens next."
**Context:** Every episode ends on a narrative hook — unresolved tension, shocking reveal, or emotional cliffhanger
**DramaSnap response:** The AI script engine is instructed to end every episode with an open loop. The brain cannot resist closing open loops (Zeigarnik effect).
**Design reinforcement:** Episode end screen shows "Episode N+1 available" with a 3-second autoplay countdown.

#### FOMO (Fear of Missing Out)
**Emotional state:** "Everyone is talking about this and I'm out of the loop."
**Context:** Social media chatter, group chat discussions, trending content
**DramaSnap response:** Social activity feed shows friends' progress in real-time. "Trending this week" surface prominently on home screen. Limited-time series (100-episode arcs that conclude) create urgency.
**Design reinforcement:** Social proof counters ("2.3M episodes watched today"), trending badges on series cards.

#### Identity / Self-Concept
**Emotional state:** "I am someone who keeps up with culture / who finishes things I start."
**Context:** Series completion, milestone achievements
**DramaSnap response:** Completion certificates, series badges, "finished" profile icons that signal cultural engagement to social peers
**Design reinforcement:** Shareable completion cards ("I just finished all 100 episodes of 'The Glass Throne'")

---

## Phase 2: Action

The Action is the simplest behavior in anticipation of a reward. Fogg's Behavior Model states: Behavior = Motivation × Ability × Trigger. DramaSnap maximizes Ability (reduces friction) to ensure even low-motivation users complete the action.

### 2.1 The Core Action: One-Tap Episode Start

The target action is: **tap once → episode begins playing within 2 seconds.**

No loading screen, no pre-roll ad (for paid users), no mandatory episode summary to dismiss.

### 2.2 Friction Reduction Audit

| Friction Point | Industry Default | DramaSnap Target | Method |
|---|---|---|---|
| Time to first frame | 4–8 seconds | < 2 seconds | Pre-buffered episodes via CDN edge caching |
| Taps to start episode | 3–5 taps | 1 tap | Deep link widget, persistent "Resume" button |
| Account creation gate | Before any content | After episode 3 | Guest mode with progress sync on signup |
| Episode selection cognitive load | Browse → Select → Confirm | Auto-queued next episode | Linear series format; no episode choice required |
| Vertical orientation friction | Many apps require landscape | Vertical-native | Full-bleed 9:16 content, thumb-zone controls |
| Subtitle/audio setup | Manual | Auto-detect device language | Locale-based default with easy toggle |

### 2.3 Motivation Amplifiers

When motivation is low (e.g., casual browsing), action probability increases with:
- **Social proof at point of action:** "3.1M people watched this episode"
- **Progress visibility:** Series progress bar showing "You're 60% through this story"
- **Commitment escalation:** "You've already invested 23 minutes in this story"
- **Low-cost sampling:** Free tier allows 5 episodes per drama before paywall — enough to create investment

---

## Phase 3: Variable Reward

Variable rewards are the engine of habit formation. Predictable rewards are boring; variable rewards trigger dopamine responses and keep users coming back. Eyal identifies three reward types. DramaSnap activates all three.

### 3.1 Rewards of the Tribe (Social Validation)

Humans are wired to seek acceptance and belonging. DramaSnap's tribal rewards include:

| Reward Mechanism | Trigger | Variable Element |
|---|---|---|
| Live reaction emojis | During episode playback | Which emotions others are expressing in real-time |
| Comment likes | Post-episode comment thread | Which comments get upvoted, who replies |
| Watch party reactions | Synchronized group viewing | Friends' reactions to the same moment |
| "Watched together" badge | Post-episode with contacts | Social proof visible on series card |
| Leaderboard position | Weekly streak ranking | Who else is watching, relative standing |

**Variable element:** Users never know if their comment will go viral, if a friend will react to their share, or how many others are watching the same episode right now. This uncertainty drives repeated social engagement.

### 3.2 Rewards of the Hunt (Discovery and Narrative)

The drive to seek information, resources, and narrative resolution:

| Reward Mechanism | Variable Element |
|---|---|
| Episodic plot twists | AI generates unique twist configurations; users cannot predict which type of twist is coming |
| Discovery of new series | Recommendation algorithm surfaces surprising matches; each home screen refresh shows different options |
| "Hidden gem" badge | Awarded for watching series with < 10K views that score > 4.5 stars; discovery feels like finding treasure |
| Narrative resolution | 100-episode arc means each episode is a hunt for resolution, but the path is variable and surprising |
| Character development reveals | Backstory episodes (unlocked mid-series) reveal character motivations retroactively |

**Variable element:** The AI script engine is designed with intentional variability — genre-blending, unexpected character choices, subverted tropes. No two series arcs follow the same pattern.

### 3.3 Rewards of the Self (Completion and Mastery)

The drive to achieve goals, demonstrate competence, and feel consistent with self-image:

| Reward Mechanism | Variable Element |
|---|---|
| Series completion badge | Not every series is completable on free tier; which badges are achievable depends on subscription status |
| Genre mastery levels | "Romance Expert: Level 4" — progress is visible, level-up timing is unpredictable |
| Streak milestones | 7, 30, 60, 100, 365 days; each unlocks a different visual reward |
| Personalization improvement | "Your taste profile is 78% calibrated" — accuracy improves at variable intervals based on ratings |
| Episode completion rate | Personal stats screen shows "You finish 94% of episodes you start" — mastery made visible |

---

## Phase 4: Investment

Investment increases the likelihood of returning. Unlike rewards, investment asks users to put something in — time, data, social capital, money — which increases the value of future rewards and raises switching costs.

### 4.1 Watchlist

**What users do:** Save series to their personal watchlist
**Value created:** Personalized content queue; each added series improves recommendation quality
**Future trigger created:** "You have 12 series waiting on your watchlist" push notification
**Switching cost raised:** A curated watchlist built over weeks is not portable to a competitor

### 4.2 Ratings and Reviews

**What users do:** Star-rate episodes (1–5), leave optional text reviews
**Value created:** Taste profile refinement; each rating makes the algorithm more accurate
**Future trigger created:** "Based on your ratings, we found your next obsession" personalized email
**Switching cost raised:** Hundreds of ratings represent a personal taste database that disappears on platform exit

### 4.3 Comments and Social Graph

**What users do:** Comment on episodes, reply to others, follow other viewers
**Value created:** Community belonging, asynchronous social experience around shared narrative
**Future trigger created:** "Someone replied to your comment on Episode 12" notification
**Switching cost raised:** Social connections, comment history, and reply threads are platform-locked

### 4.4 Sharing and Content Contribution

**What users do:** Share episodes, series, and reaction clips to external social networks
**Value created:** Social identity expression; "I am someone who discovers great drama"
**Future trigger created:** Friend views the share, joins platform, appears in user's social feed
**Switching cost raised:** Being the "person who recommends good dramas" in a social circle is an identity that reinforces continued use

---

## Three Specific Hook Cycles

### Hook Cycle 1: New User Activation

**Goal:** Get a new user from install → first completed episode → first investment action within 24 hours.

```
EXTERNAL TRIGGER
├── App Store discovery (search: "short drama", "mini series")
├── Social share from existing user (TikTok clip, WhatsApp link)
└── Paid UA campaign (vertical video ad showing episode clip)
         ↓
ACTION (friction-minimized)
├── No login required for first 3 episodes (guest mode)
├── Genre selection: 3 taps to personalize (not 20-question quiz)
├── First episode auto-plays within 2 seconds of app open
└── 60-second episode: commitment is nearly zero
         ↓
VARIABLE REWARD (first 10 minutes)
├── Tribe: "47,000 people watched this episode today"
├── Hunt: Episode 1 ends on a cliffhanger — open loop created
└── Self: "Episode 1 of 100 complete" — progress bar appears
         ↓
INVESTMENT
├── Account creation prompted after episode 3 (progress preservation framing)
├── Genre rating: "Did you like this? Tap to improve recommendations"
├── Watchlist prompt: "Save this series to continue later"
└── Social connect: "See what your friends are watching" (optional)
         ↓
INTERNAL TRIGGER SEEDED
└── Curiosity: "What happens in episode 2?" → opens loop for tomorrow
```

**Success metric:** D1 retention ≥ 45%, first investment action (rating/save) within session 1.

---

### Hook Cycle 2: Daily Engagement (Active User, Day 7–30)

**Goal:** Convert an active user into a daily-habit user with an internal trigger established.

```
INTERNAL TRIGGER (morning)
├── User picks up phone during commute
├── Feels mild boredom / routine desire for entertainment
└── Without opening any app, thinks: "Time for my episode"
         ↓
EXTERNAL TRIGGER (reinforcement)
├── Lock screen widget shows: "Episode 23 of 'The Glass Throne' — Resume"
└── (OR) Push: "Good morning. Your streak is at 8 days. Keep it going."
         ↓
ACTION
├── One tap on widget → episode begins immediately
├── 60 seconds consumed during commute
└── User exits the episode naturally at series end
         ↓
VARIABLE REWARD
├── Hunt: Episode 23 ends with unexpected betrayal — shock response
├── Tribe: 3 friends also watching; friend comment on episode 22 visible
└── Self: "9-day streak — you're in the top 12% of viewers this week"
         ↓
INVESTMENT
├── User drops a reaction emoji mid-episode
├── Leaves a comment: "Did NOT see that coming"
├── Rates episode 5 stars
└── Autoplay queues Episode 24 → user watches second episode back-to-back
         ↓
INTERNAL TRIGGER STRENGTHENED
└── Tomorrow morning: same boredom state → same neural pathway → same behavior
    (no external trigger needed after ~21 days of this cycle)
```

**Success metric:** D30 retention ≥ 25%, daily active sessions ≥ 1.2/day, streak length ≥ 7 days for 40% of D30 users.

---

### Hook Cycle 3: Re-Engagement of Lapsed Users (Day 14–60 Inactive)

**Goal:** Bring back a churned user by creating a new open loop tied to identity and social context.

```
EXTERNAL TRIGGER — Sequence
├── Day 7 lapse: Email "You left 'Crimson Vow' on a cliffhanger. Episode 31 is waiting."
├── Day 14 lapse: Push "While you were away, the plot twisted. See what you missed."
├── Day 21 lapse: Social trigger "Your friend Jamie finished 'Crimson Vow'. You were on episode 30."
└── Day 30 lapse: Email with personalized "New for you" series based on prior viewing
         ↓
ACTION (re-entry friction reduced)
├── Deep link opens directly to the paused episode (no browse required)
├── "Previously on..." 15-second recap auto-plays before episode
├── Returning user badge: "Welcome back — you're on a comeback streak now"
└── Free premium episode unlock: "We missed you. Episode unlocked, on us."
         ↓
VARIABLE REWARD (re-engagement hook)
├── Hunt: Recap primes curiosity; "Previously on" reminds of unresolved tension
├── Tribe: Social context "Jamie finished this — what did you think of the ending?"
└── Self: Completion instinct reactivated — "You're 70% through this story"
         ↓
INVESTMENT
├── Re-rating prompt: "Do you still feel the same about Episode 30?"
├── Series completion challenge: "Finish this series by Sunday and earn a badge"
└── Subscription prompt: "Pick up where you left off with unlimited episodes"
         ↓
INTERNAL TRIGGER RE-ESTABLISHED
└── Identity: "I finish what I start" — completion drive reactivated
    Curiosity: The narrative thread still open in memory resurfaces
```

**Success metric:** Win-back rate ≥ 15% for 14-day lapsed, ≥ 8% for 30-day lapsed. Re-engaged users who convert to paid within 7 days of return = target 25%.

---

## Ethical Guardrails

The Hooked Model can create genuine value or cause genuine harm depending on implementation choices. DramaSnap commits to the following ethical constraints:

### Guardrail 1: Habit-Forming for Users, Not Against Them

**Principle:** We build habits only for behaviors users would endorse on reflection.
**Implementation:**
- Weekly usage summary available in-app ("You watched 47 episodes this week — does that feel right to you?")
- "Mindful watching" mode: optional daily episode limit with user-set cap
- No dark patterns in notification frequency — user controls are prominent and respected

### Guardrail 2: Variable Rewards Must Deliver Real Value

**Principle:** Variable rewards must correspond to genuine content quality, not manufactured anxiety.
**Implementation:**
- No artificial scarcity (fake "only 2 hours left" timers)
- Social proof figures are real, not inflated
- Cliffhangers serve the narrative; they are not contrived "engagement hooks" that feel manipulative on reflection

### Guardrail 3: Investment Must Be Reciprocal

**Principle:** Every investment action (rating, comment, share) must visibly improve the user's experience.
**Implementation:**
- Recommendation accuracy score shown after each rating ("Your profile is now 82% calibrated")
- Comments receive genuine responses from community managers during first 30 days of a series
- Shared content that drives sign-ups earns the sharer a premium episode credit (visible, not hidden)

### Guardrail 4: Re-Engagement Must Respect Lapsed Users' Choice

**Principle:** Users who lapse may have made a conscious decision. Win-back sequences stop after 3 unanswered triggers.
**Implementation:**
- Re-engagement sequence has a hard cap of 3 messages before a 30-day silence period
- "Pause my account" option (not just "delete") for users who want a break without losing data
- Unsubscribe from re-engagement emails is a single click, not buried in settings

### Guardrail 5: Transparency About Recommendation Logic

**Principle:** Users have a right to understand why they are being shown specific content.
**Implementation:**
- "Why am I seeing this?" accessible on every recommendation card
- Option to reset taste profile at any time
- No opaque viral content suppression — if a series is trending, users can see why

### Guardrail 6: Vulnerable User Protections

**Principle:** Streak mechanics and variable rewards can be harmful to users with compulsive tendencies.
**Implementation:**
- Streak "freeze" mechanic allows users to pause without losing streak (removes anxiety-driven compulsion)
- No streak mechanics visible to users under 18
- Usage alerts: optional notification when daily usage exceeds user-set threshold
- No gambling-adjacent mechanics (loot boxes, randomized paid unlocks)

---

## Hook Cycle Measurement Framework

| Hook Phase | Primary Metric | Target | Measurement Method |
|---|---|---|---|
| External Trigger | Push CTR | > 8% | Push analytics |
| External Trigger | Email open rate | > 35% | Email platform |
| Action | Time to first play | < 2s | App performance monitoring |
| Action | Session start rate from trigger | > 40% | Funnel analytics |
| Variable Reward | Episode completion rate | > 85% | Player events |
| Variable Reward | Autoplay acceptance rate | > 60% | Player events |
| Investment | Rating submission rate | > 30% of completions | In-app events |
| Investment | Watchlist add rate | > 20% per session | In-app events |
| Internal Trigger | D7 return without notification | > 35% | Cohort analysis |
| Internal Trigger | Daily active / Monthly active | > 0.35 | DAU/MAU ratio |

---

*The Hooked Model, applied ethically, transforms DramaSnap from an app users remember to use into a platform that becomes part of users' daily emotional vocabulary — the thing they reach for when they need 60 seconds of story.*
