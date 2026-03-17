# A/B Test Designer — DramaSnap

**Framework:** Controlled Experimentation with Statistical Rigor
**Date:** March 17, 2026
**Author:** Product & Data Team

---

## Overview

This document defines three high-priority A/B tests for DramaSnap's Q2 2026 roadmap. Each test targets a specific point in the user journey where data suggests significant conversion or retention lift is achievable. Tests are designed to be statistically sound, instrumented before launch, and governed by pre-registered decision criteria to prevent HARKing (Hypothesizing After Results are Known).

**Experimentation principles:**
1. Pre-register all hypotheses and decision criteria before exposing users
2. Run tests to pre-determined sample sizes — do not stop early based on directional results
3. Measure primary metric + guardrail metrics simultaneously
4. Ship only if primary metric improves AND no guardrail metric degrades significantly

---

## Test 1: Onboarding Flow Redesign

### Background

Current onboarding requires new users to complete a 3-step setup process (genre selection → content rating preferences → notification opt-in) before accessing content. Hypothesis: this friction is causing drop-off before the first "aha moment" (completing a full episode).

### Hypothesis

> If we reduce new user onboarding from 3 steps to 1 step (genre selection only), then Day 1 retention will increase by ≥ 8 percentage points because users will reach the first episode faster, and the emotional hook of completing a 60-second episode will outweigh the cost of a less-personalized initial experience.

### Test Design

**Test name:** `onboarding_simplification_v1`
**Traffic allocation:** 50% control / 50% treatment
**Randomization unit:** User (device ID prior to account creation; user ID post-creation)
**Target population:** All new organic and paid installs (exclude enterprise/B2B)
**Exclusions:** Users referred by a specific series deep link (they bypass onboarding entirely)

#### Variant Descriptions

| Variant | Name | Description |
|---|---|---|
| Control (A) | 3-Step Onboarding | Step 1: Genre multi-select (up to 5) → Step 2: Content rating (All Ages / Teen / Mature) → Step 3: Notification permission prompt |
| Treatment (B) | 1-Step Onboarding | Single screen: Genre multi-select (up to 3) with "Skip" option → Immediately into first recommended episode |

**Key design decisions for Treatment B:**
- Notification opt-in deferred to post-first-episode (contextual ask: "Get notified when Episode 2 drops")
- Content rating default = platform minimum (All Ages); adjustable in profile settings
- "Skip" option on genre selection takes user directly to editorially curated "New User Starter" playlist

#### Sample Size Calculation

| Parameter | Value |
|---|---|
| Baseline D1 retention | 34% |
| Minimum Detectable Effect (MDE) | +8 percentage points (to 42%) |
| Statistical significance (α) | 0.05 (two-tailed) |
| Statistical power (1-β) | 0.80 |
| Required users per variant | ~1,100 |
| Total required users | ~2,200 |
| Estimated daily new installs | ~350 |
| Expected test duration | ~7 days (for sample size) |
| Recommended test duration | **14 days** (to capture weekly seasonality) |

*Sample size calculated using two-proportion z-test. Calculator: `z_alpha = 1.96`, `z_beta = 0.84`.*

#### Metrics

| Metric Type | Metric | Direction | Notes |
|---|---|---|---|
| Primary | D1 Retention | Increase | Defined as returning to app within 24 hours of install |
| Secondary | Time to first episode completion | Decrease | Lower is better |
| Secondary | First-session episode completions | Increase | Episodes completed in install session |
| Secondary | Onboarding completion rate | Increase | % who reach first episode |
| Guardrail | D7 Retention | No significant decrease | Must not trade D1 for D7 |
| Guardrail | Recommendation quality (episode 1–5 completion rate) | No significant decrease | Less personalization should not harm content fit |
| Guardrail | Notification opt-in rate | Monitor | May decrease; acceptable if D1 improves |
| Debug | Funnel drop-off by step | N/A | Diagnose where drop-off occurs |

#### Risks and Guardrails

| Risk | Mitigation |
|---|---|
| Lower personalization → worse content fit → lower engagement depth | Monitor episode 1–5 completion rate as guardrail metric |
| Deferred notification prompt → lower push opt-in → weaker re-engagement | Accept if D1 improves; re-test contextual notification prompt timing separately |
| "Skip" users (no genre) may have worse LTV | Segment analysis: compare "skip" vs "selected genre" sub-groups post-test |
| Novelty effect inflating Treatment B results | 14-day test duration captures two full weekly cycles |

### Analysis Plan

**Primary analysis:** Chi-square test on D1 retention rates between Control and Treatment. Two-tailed, α = 0.05.

**Segmentation analysis (post-hoc, pre-registered):**
- By acquisition channel (organic vs. paid vs. social referral)
- By device OS (iOS vs. Android)
- By geography (US vs. international)
- By genre selected (to check if simplification harms specific genre segments)

**Confidence interval reporting:** Report 95% CI for effect size, not just p-value.

**Cuped/Variance reduction:** Not applicable for new user test (no pre-experiment data). Use post-stratification on device type if sample size allows.

### Decision Criteria

| Outcome | Decision |
|---|---|
| D1 retention improves ≥ 8pp AND no guardrail degradation | Ship Treatment B, archive Control |
| D1 retention improves 4–7pp AND no guardrail degradation | Consider shipping; hold team review; evaluate secondary metrics holistically |
| D1 retention improves < 4pp OR any guardrail degrades significantly | Do not ship; run follow-up qualitative research to understand failure mode |
| D1 retention significantly decreases | Immediately stop test; investigate root cause |

**Decision owner:** Head of Product
**Decision deadline:** 14 days after reaching minimum sample size

---

## Test 2: Auto-Play Binge Prompt

### Background

Session analysis shows that 68% of users who complete one episode do not watch a second episode in the same session. The gap between episode end and decision to continue is the primary abandonment point. Current behavior: episode ends → static "Next Episode" button appears → user must tap. Hypothesis: a countdown autoplay with easy cancel increases episode-per-session depth significantly.

### Hypothesis

> If we replace the static "Next Episode" screen with a 3-second countdown autoplay (with visible cancel option), then average episodes per session will increase by ≥ 25% because the default will change from "opt in to continue" to "opt out of stopping," reducing decision fatigue at the highest-friction moment in the viewing session.

### Test Design

**Test name:** `autoplay_binge_v2`
**Traffic allocation:** 50% control / 50% treatment
**Randomization unit:** User ID
**Target population:** All active users who have completed at least 1 episode (exclude first-session users to avoid interaction with onboarding test)
**Exclusions:** Users in Test 1 (onboarding) — see cross-test interaction notes

#### Variant Descriptions

| Variant | Name | Description |
|---|---|---|
| Control (A) | Manual Next | Episode ends → black screen → "Next Episode" button with thumbnail → user must tap to continue |
| Treatment (B) | 3-Second Autoplay | Episode ends → next episode preview thumbnail fills screen → 3-second countdown ring → "Cancel" tap to stop → episode begins automatically if no action |

**Key design decisions for Treatment B:**
- Countdown ring is visible and prominent (not a subtle indicator)
- "Cancel" button is large, thumb-accessible (bottom-center of screen)
- Autoplay only triggers for the same series (does not jump to a different drama)
- If user is on final episode of series, Treatment B shows "Series Complete" screen (no autoplay)
- Autoplay does not trigger if the session gap since last interaction > 30 minutes (prevent background autoplay)

#### Sample Size Calculation

| Parameter | Value |
|---|---|
| Baseline episodes/session | 2.1 |
| Expected standard deviation | 1.8 episodes |
| MDE | +25% = 0.525 episodes (to 2.625) |
| Statistical significance (α) | 0.05 (two-tailed) |
| Statistical power (1-β) | 0.80 |
| Required users per variant | ~740 |
| Total required users | ~1,480 |
| Estimated eligible daily active users | ~5,000 |
| Expected test duration | 5 days (sample) |
| Recommended test duration | **14 days** (seasonality + novelty effect decay) |

*Sample size for continuous metric (t-test): uses estimated standard deviation from pilot data.*

#### Metrics

| Metric Type | Metric | Direction | Notes |
|---|---|---|---|
| Primary | Episodes per session | Increase | Mean episodes in sessions where user watches ≥ 1 episode |
| Secondary | Session duration | Increase | Minutes per session |
| Secondary | Series completion rate | Increase | % who complete all 100 episodes of started series |
| Secondary | Autoplay cancellation rate | Monitor | High cancellation rate signals user rejection |
| Guardrail | D7 Retention | No significant decrease | Binge now should not cannibalize return visits |
| Guardrail | User-reported satisfaction (CSAT) | No significant decrease | Survey 5% of users weekly |
| Guardrail | Uninstall rate | No significant increase | Aggressive autoplay must not drive churn |
| Debug | Autoplay triggered per session | N/A | Confirm feature is firing correctly |

#### Risks and Guardrails

| Risk | Mitigation |
|---|---|
| Autoplay feels aggressive → user frustration → churn | Large, clear "Cancel" button; 3 seconds (not 1–2) gives adequate reaction time |
| Binge sessions drain "content bank" faster → user runs out of series → churn | Monitor series completion acceleration; increase content library in parallel |
| Users binge late at night, disrupting sleep → negative brand association | Optional "Wind Down" mode (user-set): disable autoplay after 10 PM |
| Session depth increases but D7 retention falls (binge-and-burn pattern) | D7 retention as hard guardrail; test fails if this degrades significantly |

### Analysis Plan

**Primary analysis:** Two-sample t-test (or Mann-Whitney U if distribution is heavily skewed) on episodes/session. Two-tailed, α = 0.05.

**Distribution inspection:** Plot episode/session distributions for both variants. Check for multimodality (casual 1-episode users vs. binge users); consider quantile regression if bimodal.

**Segmentation analysis:**
- By subscription tier (free users may behave differently due to paywall interruption)
- By series genre (some genres may be more binge-prone than others)
- By session time of day (morning commute vs. evening couch sessions)

**Novelty effect check:** Compare weeks 1 and 2 effect sizes. If effect size decays significantly in week 2, treat with caution — may be novelty, not habit.

### Decision Criteria

| Outcome | Decision |
|---|---|
| Episodes/session increases ≥ 25% AND D7 retention not degraded AND cancellation rate < 40% | Ship Treatment B |
| Episodes/session increases 15–24% AND guardrails clear AND cancellation rate < 40% | Ship with 30-day monitoring plan |
| Cancellation rate ≥ 60% | Do not ship regardless of primary metric; retest with 5-second or 10-second countdown |
| D7 retention degrades significantly | Do not ship; binge-and-burn pattern confirmed; investigate content depth |

**Decision owner:** Head of Product + Head of Growth
**Decision deadline:** 14 days after reaching minimum sample size

---

## Test 3: Paywall Placement Optimization

### Background

DramaSnap's current paywall triggers at episode 5 of any drama series, requiring a subscription to continue. Conversion rate from free-to-paid is 2.8%. Hypothesis: earlier paywall placement (episode 3) may increase conversion because users are still in peak emotional investment from episode cliffhangers, but the risk is that too-early gating alienates users who haven't yet committed. This is a high-stakes test — the revenue and retention implications are significant.

### Hypothesis

> If we move the paywall from episode 5 to episode 3, then free-to-paid conversion rate will increase by ≥ 40% (from 2.8% to ≥ 3.9%) because users at episode 3 have sufficient narrative investment to feel the urgency of the cliffhanger but have not yet had their curiosity satisfied enough to disengage before being asked to pay.

### Test Design

**Test name:** `paywall_placement_ep3_v1`
**Traffic allocation:** 50% control / 50% treatment
**Randomization unit:** User ID
**Target population:** Free-tier users who have started at least one drama series
**Exclusions:** Users already on paid subscription; users in referral/gifted-episode programs

#### Variant Descriptions

| Variant | Name | Description |
|---|---|---|
| Control (A) | Episode 5 Gate | Episodes 1–5 free → paywall screen after episode 5 completion → subscribe to continue |
| Treatment (B) | Episode 3 Gate | Episodes 1–3 free → paywall screen after episode 3 completion → subscribe to continue |

**Key design decisions:**
- Paywall screen is identical in both variants (no paywall copy optimization in this test)
- Both variants offer same pricing ($4.99/month base tier)
- "Sample another series" option on paywall (allows starting episodes 1–3 of a different series) present in both variants
- Paywall screen in both variants shows: episode count remaining, series completion percentage, and subscription benefits

#### Sample Size Calculation

| Parameter | Value |
|---|---|
| Baseline conversion rate (control) | 2.8% |
| Target conversion rate (treatment) | 3.9% (+40%) |
| Statistical significance (α) | 0.05 (two-tailed) |
| Statistical power (1-β) | 0.80 |
| Required users per variant | ~3,200 |
| Total required users | ~6,400 |
| Estimated eligible daily users hitting paywall | ~800 |
| Expected test duration | ~8 days (sample) |
| Recommended test duration | **21 days** (longer for conversion metric; capture payment processing lag) |

*Conversion is a rare event requiring larger samples. 21-day run accounts for weekly variation in spending behavior.*

#### Metrics

| Metric Type | Metric | Direction | Notes |
|---|---|---|---|
| Primary | Free-to-paid conversion rate | Increase | Defined as subscription purchase within 7 days of hitting paywall |
| Secondary | Revenue per new user | Increase | Accounts for conversion rate × price |
| Secondary | Paywall bounce rate | Monitor | % who see paywall and uninstall or go inactive |
| Secondary | "Sample another series" usage | Monitor | Proxy for continued engagement post-paywall |
| Guardrail | D7 Retention (free users who don't convert) | No significant decrease | Earlier gate should not drive away non-converters entirely |
| Guardrail | Uninstall rate within 24h of paywall | No significant increase | Key churn signal |
| Guardrail | Paid subscriber D30 retention | No significant decrease | Subscribers who converted at ep 3 vs. ep 5 — are ep 3 subscribers less committed? |
| Debug | Paywall screen view rate | N/A | Confirm paywall is triggering at correct episode |

#### Risks and Guardrails

| Risk | Mitigation |
|---|---|
| Episode 3 too early → insufficient investment → high paywall bounce → churn | Paywall bounce rate as guardrail; uninstall rate monitored hourly in first 48 hours |
| Lower-investment paid subscribers → higher subscriber churn | Monitor D30 paid retention separately for treatment cohort |
| Test causes permanent brand damage ("DramaSnap is too aggressive") | App store reviews monitored daily; halt criteria if reviews trend negative |
| Revenue increase from higher conversion offset by lower LTV of early-converted subscribers | LTV analysis at 90 days post-test; full ROI evaluation before permanent rollout |

**Halt criteria (automatic test pause):**
- Uninstall rate in treatment group exceeds control by > 30% on any single day
- App store rating drops below 4.0 in the week following launch
- Paid subscriber D7 churn in treatment exceeds control by > 20%

### Analysis Plan

**Primary analysis:** Two-proportion z-test on conversion rates. Two-tailed, α = 0.05.

**Time-to-convert analysis:** Kaplan-Meier survival curve for time from paywall view to subscription. Compare conversion velocity between variants — does Treatment B convert faster or just more?

**Segmentation analysis:**
- By genre (some genres may have stronger narrative hooks at episode 3)
- By acquisition channel (paid UA vs. organic — different price sensitivity)
- By device type (iOS vs. Android — different payment friction)
- By geography (US vs. international — different purchasing power parity)

**LTV modeling (post-test):** Estimate 90-day and 12-month LTV for treatment vs. control converters using early retention signals.

### Decision Criteria

| Outcome | Decision |
|---|---|
| Conversion rate improves ≥ 40% AND no guardrail degradation AND halt criteria not triggered | Ship Treatment B; update paywall to episode 3 |
| Conversion rate improves 20–39% AND no guardrail degradation | Consider shipping; model LTV impact; hold executive review |
| Conversion rate improves but uninstall rate or D7 free-user retention degrades significantly | Do not ship; net user lifetime value likely negative |
| Conversion rate does not improve significantly | Revert to episode 5 gate; investigate alternative monetization approaches (see Test 2A: paywall copy optimization) |

**Decision owner:** Head of Product + CFO
**Decision deadline:** 21 days after reaching minimum sample size

---

## Cross-Test Interaction Notes

Running multiple experiments simultaneously creates the risk of interaction effects — where a user's experience in one test influences their behavior in another.

### Interaction Risk Matrix

| Test A | Test B | Interaction Risk | Mitigation |
|---|---|---|---|
| Test 1 (Onboarding) | Test 2 (Autoplay) | **Low** — different journey stages (onboarding vs. ongoing use) | Exclude Test 1 users from Test 2 for first 7 days post-install to allow stabilization |
| Test 1 (Onboarding) | Test 3 (Paywall) | **Medium** — onboarding experience affects investment level at paywall hit | Separate analysis of Test 3 results by Test 1 variant assignment |
| Test 2 (Autoplay) | Test 3 (Paywall) | **High** — users in autoplay test will hit the paywall at different episode speeds | **Mutual exclusion required:** Bucket users into one of three test populations (Test 2 only / Test 3 only / neither). Do not assign users to both Test 2 and Test 3 simultaneously. |

### Mutual Exclusion Implementation

```
User bucketing logic (at install/session start):
├── Hash(user_id) mod 100:
│   ├── 0–32: Test 1 eligible pool
│   ├── 33–65: Test 2 eligible pool
│   ├── 66–82: Test 3 eligible pool
│   └── 83–99: Holdout (no active tests — baseline measurement)
```

**Holdout group (17%):** Maintained as a clean control to detect overall experimentation effects. Compare holdout cohort metrics to historical baseline monthly.

### Sequential Testing Plan

If all three tests are run and results are positive:
1. Ship Test 1 (Onboarding) first — affects all new users
2. Allow 2-week stabilization
3. Ship Test 2 (Autoplay) — now tests against new onboarding baseline
4. Allow 2-week stabilization
5. Re-run Test 3 (Paywall) — paywall test results may change with new onboarding and autoplay behavior

**Rationale:** Shipping order matters. Each upstream change (onboarding) creates a new baseline for downstream tests (paywall). Run tests independently, then validate combined effects.

---

## Experimentation Infrastructure Requirements

For these tests to be valid, the following infrastructure must be in place before test launch:

| Requirement | Status | Owner |
|---|---|---|
| Feature flag system (user-level bucketing) | Required | Engineering |
| Event instrumentation for all defined metrics | Required | Data Engineering |
| Real-time anomaly detection dashboard | Required | Data Engineering |
| Pre-test data validation (SRM check) | Required | Data Science |
| Holdout group implementation | Required | Engineering |
| Decision documentation template | Required | Product |
| Experiment review board (weekly) | Required | Product + Data |

---

*All tests follow DramaSnap's experimentation charter: pre-register, respect users, ship on evidence, not intuition.*
