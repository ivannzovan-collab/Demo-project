# Product-Led Growth (PLG) Strategy: DramaSnap

## Overview

Product-Led Growth (PLG), as defined by Wes Bush and the OpenView Partners framework, is a go-to-market strategy where the product itself is the primary driver of customer acquisition, retention, and expansion. In PLG, users experience the product's value before or without engaging a sales team — the product does the selling.

For DramaSnap, PLG means:
- Users can try the product without friction (no credit card, no long setup)
- The product demonstrates its value within the first session
- Satisfied users naturally become advocates and invite others
- Conversion from free to paid is driven by product value, not sales pressure

The key question for any PLG strategy: **"Does the product, by itself, generate a sustainable cycle of acquisition → activation → retention → referral → expansion?"**

---

## Self-Serve Growth Motion

### Free Tier Design

The free tier is the primary acquisition mechanism for DramaSnap. It must be designed to:
1. Allow genuine value exploration without friction
2. Demonstrate the core product experience (not a watered-down demo)
3. Create natural conversion moments when users hit the free tier ceiling
4. Not feel like a permanent option — it should feel like a preview

**Free Tier Specifications:**

| Feature | Free Tier | Premium ($6.99/month) |
|---------|-----------|----------------------|
| Access to series | First 20 episodes of any series | Unlimited |
| New series per month | 5 new series | All new series |
| Offline downloads | None | Up to 10 series |
| Ad experience | 1 x 15-sec ad per 3 episodes | Ad-free |
| Audio quality | Standard | High quality |
| Personalization | Basic (genre-level) | Full (behavioral) |
| Early access to new series | No | Yes (+24 hours) |
| Community features | Read-only | Full participation |
| Download to watch later | No | Yes |

**Free tier design principles:**

1. **The 20-episode rule:** 20 episodes is enough for genuine story investment (about 20 minutes of content). A user who has watched 20 episodes of one series and hits the wall has already crossed the psychological threshold of "I want to know what happens." This is the ideal moment for the upgrade prompt.

2. **No time limit on the free trial:** Time-limited free trials create anxiety. A free tier with content limits creates desire. "You've watched 20 of your free episodes in this series" is a more motivating conversion trigger than "Your 7-day trial expires in 2 days."

3. **Ad-supported dignity:** The free tier ad experience must not be so intrusive that it poisons the product. One 15-second ad per 3 episodes (5 minutes of viewing) is respectful. Ad placements should be at natural episode breaks, never mid-episode.

4. **Meaningful differentiation, not crippled product:** The free tier should be a great product. Personalization quality, early access, and offline downloads are meaningful premium features — not basic functionality withheld to coerce upgrades.

---

### Activation Metrics

Activation is the moment when a new user first experiences DramaSnap's core value. The activation event is:

**"Episode 5 Completion in First Session"**

Why episode 5, not episode 1:
- Episode 1 completion indicates "I tried it"
- Episode 5 completion indicates "I'm invested" — the user has crossed the story-investment threshold and experienced the cliffhanger loop multiple times
- Users who reach episode 5 in their first session have a 3x higher 7-day retention rate than users who stop after episode 1

### Activation Funnel

```
Install
│ 100% of installs
▼
App Opened (Day 1)
│ Target: 75% (day-1 open rate)
▼
Series Selected
│ Target: 65% (series selection within 60 seconds of app open)
▼
Episode 1 Completed
│ Target: 55% (episode 1 completion)
▼
Episode 5 Completed
│ Target: 35% [ACTIVATION EVENT]
▼
7-Day Retained User
│ Target: 45% of activated users
▼
Free→Premium Conversion
│ Target: 20% of 7-day retained users within 30 days
```

### Activation Improvement Levers

| Lever | Estimated Impact | Implementation |
|-------|-----------------|----------------|
| Reduce time-to-first-episode (< 30 sec) | +10% episode 1 completion | Streamlined onboarding; skip registration before watching |
| Taste quiz → better first recommendation | +8% episode 5 completion | 5-question onboarding quiz |
| Auto-advance to next episode | +12% episode 5 completion | Opt-in auto-advance with 3-second delay |
| Better first-episode hook quality | +15% episode 5 completion | Curated "signature series" for new users |
| Remove email verification at registration | +5% episode 1 completion | Social sign-in only (no email verification step) |

---

## Product Qualified Lead (PQL) Definition

In PLG, a Product Qualified Lead (PQL) is a user who has demonstrated product engagement patterns that predict a high probability of converting to a paying customer. PQLs are more reliable conversion signals than marketing qualified leads (MQLs) because they are based on actual behavior, not demographic inference.

### DramaSnap PQL Criteria

A user is classified as a PQL when they meet ALL of the following conditions:

**Behavioral Criteria (must meet all three):**

| Criterion | Threshold | Rationale |
|-----------|-----------|-----------|
| Episodes completed | ≥ 15 episodes completed (lifetime) | Demonstrates genuine engagement beyond casual try |
| Session frequency | ≥ 3 sessions in the past 7 days | Demonstrates habitual usage |
| Free tier limit approach | Used ≥ 80% of free episode allowance in 1+ series | Demonstrates conversion readiness |

**Timing Criteria (must meet one):**

| Trigger | Description |
|---------|-------------|
| Free episode limit hit | User attempts to watch episode 21+ in a series |
| Series completion | User finishes a 20-episode free arc and is offered the next series |
| High-value content moment | User hits the paywall at a peak cliffhanger moment |

### PQL Scoring Model

For more nuanced conversion targeting, use a PQL score (0–100):

| Signal | Weight | Max Points |
|--------|--------|-----------|
| Episodes completed (lifetime) | 25% | 25 |
| Sessions per week (last 4 weeks) | 20% | 20 |
| Content diversity (genres watched) | 10% | 10 |
| Social sharing actions | 15% | 15 |
| Free tier utilization % | 20% | 20 |
| Profile completion (taste preferences set) | 10% | 10 |
| **TOTAL** | | **100** |

**PQL threshold:** Score ≥ 60

**PQL conversion approach by score:**

| PQL Score | Conversion Approach |
|-----------|---------------------|
| 60–70 | In-app upgrade prompt with social proof ("10,000+ people like you are on Premium") |
| 71–85 | Upgrade prompt + limited-time offer (first month 50% off) |
| 86–100 | Direct trigger: "You just hit episode 21 — this is where the story gets really good" |

---

## Freemium vs. Free Trial Analysis

### Option A: Pure Freemium

**Model:** Free tier exists indefinitely. No time limit. Users pay when they want more.

**Pros:**
- No pressure; low anxiety for new users
- Users who never convert still have value (ad revenue, data, word-of-mouth)
- Larger top-of-funnel (more people try)

**Cons:**
- Longer time-to-conversion (no urgency)
- Free tier users may be satisfied without converting
- Need to carefully balance free vs. paid value

**Suitable for:** Mass-market consumer apps where social network effects require large free user base.

---

### Option B: Free Trial

**Model:** Full access for 7–14 days, then must subscribe.

**Pros:**
- Creates urgency (trial expiration)
- Higher conversion rate from trialists vs. freemium users
- Clearer "moment of truth" for the product

**Cons:**
- Higher acquisition friction (some users won't start if they know it's a trial)
- Users churn at trial end if not convinced; all-or-nothing
- Doesn't benefit from ad revenue of non-converting users

**Suitable for:** B2B SaaS or products where full value can be experienced in 7–14 days.

---

### Option C: Hybrid (Recommended)

**Model:** Permanent free tier (limited to first 20 episodes per series) PLUS an optional "Premium Trial" that can be activated for 7 days to experience the full platform.

**Why Hybrid is Best for DramaSnap:**

1. **Drama is binge-driven:** A 7-day trial aligns with natural binge behavior. A user who starts a 100-episode series will naturally consume many episodes in 7 days and convert at high rates.

2. **The free tier builds behavioral data:** Even non-converting free users generate behavioral data that improves the recommendation engine (which ultimately improves retention for all users).

3. **The free tier drives viral growth:** Non-converting free users still share content and drive installs. This would be lost with a trial-only model.

4. **The trial creates urgency:** When a highly engaged free user activates the trial (triggered by PQL score or manual action), the 7-day countdown creates the urgency that pure freemium lacks.

**Hybrid Model Specifications:**

- **Free tier:** Permanent access to first 20 episodes of any series; 1 ad per 3 episodes
- **Premium trial:** 7-day full access, activated by user choice or triggered by PQL
- **Trial trigger:** At PQL score ≥ 70, show "Try Premium free for 7 days — no credit card required"
- **Post-trial conversion:** Frictionless conversion with saved payment method from trial signup

---

## PLG Flywheel

The PLG flywheel is the virtuous cycle that powers self-sustaining growth. Each stage feeds into the next:

```
                    ┌──────────────────────────────────────────┐
                    │                                          │
          ┌─────────┴─────────┐                    ┌─────────┴─────────┐
          │                   │                    │                   │
          │   ACQUISITION     │                    │   REFERRAL        │
          │                   │                    │                   │
          │ Free tier + SEO   │                    │ Clip sharing +    │
          │ + paid ads drive  │                    │ word-of-mouth     │
          │ installs          │                    │ from engaged users│
          └─────────┬─────────┘                    └─────────┬─────────┘
                    │                                          │
          ┌─────────┴─────────┐                    ┌─────────┴─────────┐
          │                   │                    │                   │
          │   ACTIVATION      │                    │   RETENTION       │
          │                   │                    │                   │
          │ First episode     │                    │ Personalization   │
          │ → episode 5       │                    │ + switching costs │
          │ → series start    │                    │ + community       │
          └─────────┬─────────┘                    └─────────┬─────────┘
                    │                                          │
                    │         ┌─────────────────┐             │
                    └─────────►                 ◄─────────────┘
                              │    REVENUE      │
                              │                 │
                              │ Free → Premium  │
                              │ conversion;     │
                              │ subscription    │
                              │ renewals        │
                              └─────────────────┘
```

### Flywheel Stage Details

**Acquisition → Activation:**
- SEO drives organic search discovery (genre-specific landing pages)
- Social ads target HXC segments (commuting drama fans 25–45)
- Word-of-mouth from satisfied users
- Clip sharing drives referred installs

**Activation → Revenue:**
- Episode 5 completion → series investment → free tier limit → upgrade prompt
- PQL scoring triggers conversion offers at optimal moment
- 7-day premium trial removes conversion barrier for engaged free users

**Revenue → Retention:**
- Premium features (offline, ad-free, early access) justify continued subscription
- Personalization improves as subscriber behavioral data accumulates
- Community features create social switching costs

**Retention → Referral:**
- Highly retained users generate shareable moments
- Community participation creates organic brand advocacy
- "Your friend invited you" mechanics drive high-quality installs

**Referral → Acquisition:**
- Referred users have 2x higher activation rate than cold organic users
- Referral brings in users who are pre-qualified by a friend's endorsement
- Viral coefficient compounds the acquisition flywheel

---

## PLG Metrics Dashboard

### Layer 1: Acquisition Metrics

| Metric | Definition | Target | Cadence |
|--------|------------|--------|---------|
| App downloads (organic) | Installs not attributed to paid ads | 60% of total | Weekly |
| App downloads (paid) | Installs attributed to paid campaigns | 40% of total | Weekly |
| CAC (blended) | Total acquisition spend / new subscribers | <$8 | Monthly |
| SEO organic sessions | Sessions from search engines | 20K/month by Month 6 | Monthly |

### Layer 2: Activation Metrics

| Metric | Definition | Target | Cadence |
|--------|------------|--------|---------|
| Day 1 activation rate | % of installs who complete episode 1 on Day 1 | >55% | Daily |
| Episode 5 completion rate | % of installs who complete episode 5 | >35% | Daily |
| Time to activation | Median time from install to episode 5 completion | <15 minutes | Weekly |
| Onboarding completion rate | % who complete taste quiz (if implemented) | >65% | Daily |

### Layer 3: Conversion Metrics

| Metric | Definition | Target | Cadence |
|--------|------------|--------|---------|
| Free → Premium conversion (30 days) | % of free users converting within 30 days | 15–20% | Monthly |
| Trial activation rate | % of PQLs who start 7-day trial | 40% | Monthly |
| Trial-to-paid conversion | % of trial users who subscribe at trial end | 55% | Monthly |
| PQL to conversion time | Days from PQL classification to subscription | <7 days | Monthly |

### Layer 4: Revenue Metrics

| Metric | Definition | Target | Cadence |
|--------|------------|--------|---------|
| MRR | Monthly recurring revenue | Track growth | Monthly |
| ARPU | Average revenue per user (paid + free ad) | $4–7 blended | Monthly |
| LTV (12-month) | Cumulative revenue per subscriber | >$75 | Quarterly |
| LTV:CAC ratio | LTV divided by CAC | >8:1 | Monthly |

### Layer 5: Retention Metrics

| Metric | Definition | Target | Cadence |
|--------|------------|--------|---------|
| D7 retention | % of users active 7 days after install | >45% | Weekly |
| D30 retention | % of users active 30 days after install | >30% | Monthly |
| Monthly churn (paid) | % of subscribers cancelling per month | <4% | Monthly |
| Subscription renewal rate | % renewing at 1-month, 3-month, 12-month | >80% | Monthly |

### Layer 6: Referral Metrics

| Metric | Definition | Target | Cadence |
|--------|------------|--------|---------|
| Referral rate | % of active users who refer ≥1 friend per month | >8% | Monthly |
| Referred user activation rate | Activation rate of referred users vs. organic | >2x organic | Monthly |
| Viral coefficient (K) | Average new users generated per user | >0.15 | Monthly |
| Organic % of new users | New users from non-paid sources | >50% by Month 12 | Monthly |

---

*PLG framework based on OpenView Partners' Product-Led Growth methodology (Wes Bush, 2019) and Reforge's growth frameworks. Analysis current as of March 2026.*
