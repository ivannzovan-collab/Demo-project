# Stakeholder Update — DramaSnap

**Date:** March 17, 2026
**Period covered:** Sprint 6 (March 3 – March 17, 2026)
**Author:** Head of Product
**Distribution:** Board, Investors, Executive Team, Department Leads

---

## Executive Summary

DramaSnap ended Sprint 6 with its strongest retention week since beta launch, exceeding our D1 retention target for the first time. Paid subscriber count crossed 1,600 with a conversion rate of 3.2%. The content library grew to 45 drama series with the addition of 12 new series this sprint, and the personalized recommendation system shipped to 100% of returning users, driving a meaningful uplift in home screen engagement.

**Four headlines:**
1. D1 retention reached 42% this week — first time exceeding our 40% internal target; up from 34% at sprint start
2. Paid subscribers grew 18% week-over-week to 1,600 total; conversion rate stable at 3.2%
3. Personalized recommendations (shipped March 10) showing early positive signal: home screen episode start rate up from 32% to 41% in first 7 days
4. AI content pipeline achieved 5 series/week production cadence for the first time; content cost per episode reduced 12% through prompt optimization

---

## Key Metrics Dashboard

### Core Engagement Metrics

| Metric | Sprint Start (Mar 3) | Current (Mar 17) | Target | Status |
|---|---|---|---|---|
| Total Installs (cumulative) | 38,400 | 50,000 | 50,000 by Mar 31 | On Track |
| Daily Active Users (DAU) | 6,200 | 8,000 | 8,000 by Mar 31 | On Track |
| Monthly Active Users (MAU) | 28,000 | 33,000 | 35,000 by Mar 31 | On Track |
| DAU/MAU Ratio | 0.22 | 0.24 | 0.30 by Q2 end | Below Target |
| Episodes per Session | 4.8 | 5.3 | 7.0 by Q2 end | Below Target |

### Retention Metrics

| Metric | Sprint Start | Current | Q2 Target | Status |
|---|---|---|---|---|
| D1 Retention | 34% | 42% | 40% | Exceeding Target |
| D7 Retention | 15% | 18% | 25% | Below Target |
| D30 Retention | 8% | 9% | 16% | Below Target |
| Average Streak Length | 2.8 days | 3.2 days | 7.0 days | Below Target |
| Series Completion Rate | 20% | 22% | 40% | Below Target |

### Monetization Metrics

| Metric | Sprint Start | Current | Q2 Target | Status |
|---|---|---|---|---|
| Paid Subscribers | 1,358 | 1,600 | 6,000 by Q2 end | Below Target (early) |
| Free-to-Paid Conversion | 3.0% | 3.2% | 5.5% | Below Target |
| MRR | $12,900 | $15,984 | $60,000 by Q2 end | Below Target (early) |
| ARPU (paid) | $9.49 | $9.99 | $9.99 | On Target |
| Subscriber D7 Churn | — | 12% | < 8% | Below Target |

### Content Metrics

| Metric | Sprint Start | Current | Q2 Target | Status |
|---|---|---|---|---|
| Total Series in Library | 33 | 45 | 150 by Q2 end | Below Target |
| New Series per Week | 3 | 5 | 5 per week | On Target |
| Average Episode Rating | 3.7 / 5.0 | 3.9 / 5.0 | 4.2 / 5.0 | Below Target |
| Episode Completion Rate | 80% | 83% | 85% | Near Target |
| Content Cost per Episode | Baseline | -12% | -25% | In Progress |

### Platform Health

| Metric | Current | Target | Status |
|---|---|---|---|
| App Store Rating (iOS) | 4.3 / 5.0 | ≥ 4.2 | On Target |
| Google Play Rating | 4.1 / 5.0 | ≥ 4.2 | Below Target |
| Crash-Free Session Rate | 99.2% | ≥ 99.5% | Below Target |
| Episode Load Time p90 | 2.8s | < 2.0s | Below Target |
| Platform Uptime (30 days) | 99.7% | ≥ 99.9% | Below Target |

---

## What Shipped (Sprint 6)

### 1. Personalized Recommendation Engine (March 10)
Shipped to 100% of returning users (users with ≥ 5 episode completions). Collaborative filtering model serving personalized "For You" row on home screen. Initial signal: home screen episode start rate up from 32% to 41% in first 7 days. Full 14-day A/B test results available March 24. Feature flag allows instant rollback if quality issues emerge.

### 2. Social Sharing (March 12)
Episode share button now generates a 15-second auto-clipped episode highlight with DramaSnap watermark and app download link. Available to all users (free and paid). Share integrations live: iOS Share Sheet, Android Share Sheet (all apps including WhatsApp, Instagram, TikTok). First week: 2,400 shares generated, 180 attributed installs (7.5% share-to-install rate — strong signal for organic growth loop).

### 3. Achievement Badge System (March 13)
Launched 15 initial badges across 5 categories (Completion, Streak, Series, Social, Discovery). In first 5 days: 68% of active users have earned at least 1 badge. Badge notification drives 22% re-open rate within 1 hour. Most earned badge: "First Episode" (34,000 earns). Rarest earned: "Hidden Gem Hunter" (43 earns). Profile badge display live.

### 4. Annual Subscription Plan (March 6)
$95.88/year option ($7.99/month effective, 20% savings vs. monthly). Displayed as default on paywall screen with monthly toggle. Early data: 31% of new subscribers choosing annual (target: 40%). Annual subscribers have meaningfully lower 30-day churn than monthly (6% vs. 18%) — expected.

### 5. Content Pipeline Optimization (March 3–17)
AI Engineering shipped updated prompting strategy for script generation that reduces repetitive plot structures. Average episode rating for new series published this sprint: 4.1/5.0, up from 3.7/5.0 for prior sprint. Production throughput reached 5 series/week. Cost per episode down 12% through output token optimization.

### 6. "Previously On" Recap (March 15)
Soft-launched to 20% of users (full rollout pending A/B test completion). Triggers when user returns to a series after ≥ 48 hours of inactivity. Shows 3 episode recap sentences, skippable, 12-second auto-advance. Early data: users who see recap have 18% higher episode start rate vs. control. Skip rate: 34% (within expected range). Full rollout decision pending Sprint 7 analysis.

---

## Key Wins

### Win 1: D1 Retention Exceeds Target for First Time
D1 retention reached 42% this week — first time crossing the 40% internal target since launch. This follows the combined impact of the onboarding simplification (shipped Sprint 5) and the recommendation engine (shipped this sprint). Previous high was 38%. While one week does not make a trend, this is the strongest signal to date that the core hook is working for new users. Next milestone: sustain ≥ 40% D1 retention for 2 consecutive weeks.

### Win 2: Content Pipeline Achieves Velocity Target
The AI/Content team shipped 5 new series this sprint for the first time, hitting our weekly cadence target. Critically, quality improved simultaneously: average rating for new series 4.1/5.0 vs. 3.7/5.0 last sprint. The decoupling of "more content" from "lower quality" was our biggest content risk; this sprint suggests it's achievable. We need to maintain this for 4 consecutive sprints before we can call it a reliable capability.

### Win 3: Social Sharing Creates First Viral Loop Signal
The 2,400 shares in the first 5 days of social sharing exceeded our internal projection (1,500). More importantly, 7.5% of shares converted to an attributed install — a K-factor contribution of 0.075 from sharing alone. Combined with other organic channels, we're seeing the early shape of a viral loop. If we can scale sharing to 15,000/month (plausible at current growth), the K-factor contribution becomes meaningful (K ≈ 0.15–0.20), which changes our paid UA economics materially.

### Win 4: Annual Plan Shows Strong Early Uptake
31% of new subscribers in the first 11 days of the annual plan chose the annual option. This exceeds the industry benchmark for first-week annual uptake (~20%) and, if sustained, meaningfully improves LTV. An annual subscriber paying $95.88 upfront has 2.8x higher projected LTV than a monthly subscriber, even accounting for the discount. This gives us more room on CAC.

---

## Risks and Blockers

### Risk 1: D7 and D30 Retention Remain Significantly Below Target
**Status: Active Risk | Severity: High**

D7 retention at 18% and D30 at 9% are well below Q2 targets (25% and 16% respectively). D1 improvement is a positive signal, but it doesn't automatically translate to D7/D30 if the daily habit loop isn't forming. The gap between D1 (42%) and D7 (18%) — a 24-point drop — suggests users who return on day 1 are not converting into daily habits. Series completion rate (22%) is the underlying driver: users who don't finish series have no anchor pulling them back daily.

**Mitigation plan:** The "Smart Binge" momentum system (shaped, ready for betting table) is designed specifically for this. Streak mechanics and achievement badges (launched this sprint) should help but are unlikely to fully close the gap. The D7/D30 gap is the most important metric to move in Q2 and requires focus from both Product and Content teams.

**What we need from stakeholders:** Prioritization alignment — should we slow content pipeline growth to invest more engineering capacity in retention mechanics? Or maintain content velocity to grow the library while retention features catch up?

---

### Risk 2: Android Platform Quality Below iOS
**Status: Active Risk | Severity: Medium**

Google Play rating (4.1) is below iOS App Store (4.3) and below our target (4.2). Crash-free session rate on Android (98.8%) is below iOS (99.6%). Three specific issues are driving Android underperformance: (1) video playback stuttering on mid-range Android devices (identified: Samsung Galaxy A series), (2) episode load times 40% slower on Android due to CDN SDK differences, (3) push notification delivery rate 15% lower on Android.

**Mitigation plan:** Dedicated Android sprint beginning March 24 with focus on: CDN SDK parity, mid-range device video playback optimization, and push notification delivery improvement. Target: Android crash-free rate ≥ 99.2% and Play Store rating ≥ 4.2 by April 14.

**Budget implication:** Android optimization sprint consumes the equivalent of 2 engineer-weeks that were allocated to new feature development. This shifts the offline downloads feature from Sprint 8 to Sprint 9.

---

### Risk 3: AI Content Cost Structure Under Pressure
**Status: Watch | Severity: Medium**

Runway ML API pricing increased 22% on March 1. While our 12% cost reduction from prompt optimization partially offsets this, the net cost per episode is now 8% higher than at project start. At current production volumes (5 series/week × 100 episodes × current cost), content production cost is $X per month. At 150 series/week (Q2 target), the content cost line item becomes a significant portion of the cost structure.

**Mitigation plan:** Three parallel workstreams: (1) Evaluate Pika 1.0 as a partial Runway replacement for lower-stakes episode types (proven quality acceptable for < 20% of episode types); (2) Investigate self-hosting open-source video generation models (1–2 month lead time; significant engineering effort); (3) Model content cost at Q2 volume and build into financial projections before Series A materials.

**What we need from stakeholders:** Finance team alignment on content cost projections for Series A materials. Need updated model by April 1.

---

### Risk 4: Paywall Conversion Stalled at 3.2%
**Status: Watch | Severity: Medium**

Free-to-paid conversion has been between 2.8% and 3.2% for 6 weeks. The paywall placement A/B test (episode 3 vs. episode 5) is designed to improve this, but it won't begin until April 1 (after Sample Size 2 reaches the needed 6,400 users). Until then, conversion improvement depends on organic factors: content quality, recommendation accuracy, and word-of-mouth.

**Mitigation plan:** While waiting for the A/B test, ship two quick improvements to the paywall screen: (1) Add "your friends watch Blaze" social proof element (requires permission marketing — users must have opted into social features); (2) Test annual plan as the primary CTA (currently shown as secondary) to see if higher perceived value improves conversion without changing price.

**What we need from stakeholders:** Legal review of social proof messaging on the paywall screen — want to confirm we can reference user counts in paid marketing without specific disclosure requirements.

---

## Next Sprint Priorities (Sprint 7: March 18 – April 1)

### Priority 1: Android Platform Quality Sprint
Dedicated Android engineering focus: video playback on mid-range devices, CDN SDK parity, push notification delivery improvement.
**Owner:** Mobile Engineering Lead
**Target:** Android crash-free rate ≥ 99.2%, Play Store rating ≥ 4.1 by April 1

### Priority 2: "Previously On" Recap — Full Rollout Decision
14-day A/B test completes March 29. Analyze results and make ship/hold decision by March 31.
**Owner:** PM: Player Experience
**Target:** Decision made; if shipping, 100% rollout by April 7

### Priority 3: Smart Binge Betting Table Pitch
Prepare and present the "Smart Binge" feature shape (Story Arc Bar + Momentum Card + Previously On) to the betting table for the Sprint 8 cycle.
**Owner:** Head of Product
**Target:** Pitch document complete by March 24; betting table meeting March 27

### Priority 4: Content Pipeline — Genre Expansion
Produce ≥ 10 series in 2 new genres (Comedy and Fantasy, both currently under-represented in the library) to improve recommendation diversity and expand addressable user base.
**Owner:** Head of Content + AI Engineering
**Target:** 10 new genre-diverse series published by April 1

### Priority 5: Social Sharing — Attribution Improvement
Current share-to-install attribution relies on link parameters and is estimated at 60% accuracy. Improve to Branch.io deep link implementation for accurate attribution across all social platforms.
**Owner:** Growth PM + Engineering
**Target:** Branch.io integration live by March 28; attribution accuracy ≥ 90%

### Priority 6: Series A Data Room Preparation
Begin compiling investor data room with updated metrics, retention cohort charts, LTV:CAC analysis, and content cost modeling at scale.
**Owner:** Head of Product + Finance
**Target:** Draft data room complete by April 7 for investor review

---

## Ask from Stakeholders

### Ask 1: Retention vs. Content Velocity — Resource Allocation Decision Needed

The team is at capacity. Android quality, Smart Binge retention features, and content pipeline growth are all competing for the same engineering hours. We need alignment from the board and executive team on the following prioritization question:

**The choice:**
- **Option A (Retention First):** Pause content pipeline growth at current velocity (5 series/week) and redirect AI Engineering capacity to recommendation quality improvement and Smart Binge features. Target: D7 retention ≥ 22% by June 1.
- **Option B (Growth First):** Maintain aggressive content pipeline growth (target: 10 series/week) to reach 150-series library by Q2 end. Accept that D7 retention improvement will be slower (target: 20% by June 1).

**Recommendation from Head of Product:** Option A. PMF is more important than library size right now. A 150-series library with 15% D7 retention is less fundable than a 90-series library with 25% D7 retention.

**Decision needed by:** March 24 (before Smart Binge betting table)

---

### Ask 2: Series A Timeline — Board Alignment Needed

We need clarity from the board on the Series A timeline. The current burn rate is sustainable for 8 months. Series A preparation requires 3–4 months of focused effort alongside product work. If we target a Series A close by August 2026, we need to begin formal investor outreach by May 1 — which means the data room must be complete by April 7 and the story must be locked by April 20.

**Decision needed by:** March 31

**Specific question:** Is the board aligned on an August 2026 close target, or should we model for a longer runway?

---

### Ask 3: Legal Review of Social Proof Messaging

We want to use social proof language on the paywall screen (e.g., "Join 1,600+ Blaze subscribers" or "X of your contacts are watching on Blaze"). Before implementing, we need a legal review confirming:
- Whether user count references in paid marketing require specific disclosure
- Whether "contacts are watching" messaging triggers any consent requirements beyond our current privacy policy
- Whether social proof claims constitute advertising under any applicable regulations (CCPA, CAN-SPAM, etc.)

**Needed by:** March 28 (to inform Sprint 7 paywall optimization work)

---

## Appendix: Metrics Definitions

| Metric | Definition |
|---|---|
| DAU | Unique user_ids with ≥ 1 app session open event in calendar day |
| MAU | Unique user_ids with ≥ 1 app session open event in calendar month |
| D1 Retention | Users who open the app on calendar day 1 after install day (install day = Day 0) |
| D7 Retention | Users who open the app on Day 7 (±1 day) after install |
| Episode completion | User watches ≥ 85% of episode duration |
| Conversion rate | New paid subscriptions / new users hitting paywall within 7 days |
| Series completion | User completes episode 100 of a series |
| Crash-free session | Session with 0 Sentry-reported crashes |
| Episode load time p90 | 90th percentile of time from episode tap to first video frame |

---

*Next stakeholder update: April 1, 2026. Questions and clarifications to Head of Product directly or via Slack #product-leadership.*
