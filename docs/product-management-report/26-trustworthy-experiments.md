# Trustworthy Experiments — DramaSnap Experimentation Program

**Framework:** Trustworthy Online Controlled Experiments
**Date:** March 17, 2026
**Author:** Data Science & Product Team

---

## Overview

DramaSnap's growth depends on learning faster than competitors. Trustworthy experiments are the mechanism for turning user behavior data into reliable product insights. "Trustworthy" means experiments that produce valid causal inferences — not misleading p-hacks, not biased samples, not decisions made on insufficient evidence.

This document establishes DramaSnap's experimentation program: infrastructure, metric definitions, common pitfalls to avoid, and the governance process for running, analyzing, and acting on experiments.

---

## Part 1: Experimentation Infrastructure

### 1.1 Feature Flagging System

The foundation of any experimentation program is a feature flagging system that can:
1. Assign users to variants deterministically (same user always gets same variant)
2. Target specific user segments (new users only, paid subscribers only, etc.)
3. Support concurrent experiments with mutual exclusion
4. Roll out changes gradually (0% → 5% → 25% → 100%)
5. Roll back instantly if anomalies detected

**DramaSnap's flag system:**

| Component | Technology | Rationale |
|---|---|---|
| Feature flag management | LaunchDarkly (managed service) | SDK available for React Native; supports user context for targeting |
| Client-side SDK | LaunchDarkly React Native SDK | Evaluates flags client-side after receiving user context; < 50ms flag evaluation |
| Server-side SDK | LaunchDarkly Node.js SDK | Used for API-level experiments (e.g., recommendation algorithm variants) |
| Flag config storage | LaunchDarkly hosted + local cache | 60-second cache on client; prevents network dependency for flag evaluation |
| Killswitch | LaunchDarkly % rollout → 0% | Any experiment can be turned off in < 30 seconds by any team member with LaunchDarkly access |

**Flag taxonomy:** Flags are named using the convention `[team]_[feature]_[variant_description]_[v#]`:
- `product_onboarding_1step_v1` (Test 1)
- `product_autoplay_countdown3s_v2` (Test 2)
- `monetization_paywall_ep3_v1` (Test 3)

---

### 1.2 User Bucketing

Correct user bucketing is the most critical infrastructure requirement. Errors in bucketing invalidate experiments entirely.

**Bucketing algorithm:**

```
bucket = hash(experiment_key + user_id) mod 100

if bucket < 50: variant = "control"
if bucket >= 50: variant = "treatment"
```

**Key properties of this approach:**
- **Deterministic:** Same user always assigned to same variant for same experiment
- **Independent:** Different experiment keys produce independent hash values; user in control for Exp A may be in treatment for Exp B
- **Uniform:** Hash function produces approximately uniform distribution (verify with sample size ratio monitoring)

**User identifier strategy:**
- Authenticated users: user_id (persistent across devices, reinstalls)
- Unauthenticated users: device_id (persistent within install; lost on reinstall)
- Edge case: User authenticates mid-experiment → carry device_id variant assignment to user_id. Do not reassign to a new variant.

**User identity stitching:**

```
When user authenticates during an experiment:
1. Look up device_id → variant_assignment in experiment_assignments table
2. Carry that assignment to user_id
3. Log identity stitch event for SRM check
```

---

### 1.3 Metrics Pipeline

Every experiment requires pre-instrumented metrics. Metrics that are not instrumented before an experiment launches cannot be used as outcome metrics.

**Event collection architecture:**

```
Mobile App (React Native)
    │ Segment SDK tracks events
    ▼
Segment (collection + routing)
    ├──→ Mixpanel (product analytics, funnel analysis)
    ├──→ BigQuery (data warehouse, experiment analysis)
    └──→ Amplitude (behavioral analytics, cohort analysis)

Backend API (Node.js)
    │ Server-side events for purchase, subscription, content events
    ▼
Segment (server-side SDK)
    └──→ BigQuery (joins with client events)

Experiment assignment service
    │ Writes bucketing events
    ▼
BigQuery experiment_assignments table
```

**Core event schema:**

```sql
CREATE TABLE events (
    event_id UUID PRIMARY KEY,
    user_id VARCHAR,
    device_id VARCHAR,
    event_name VARCHAR,
    timestamp TIMESTAMP,
    session_id VARCHAR,
    experiment_assignments JSONB,  -- {"exp_key": "variant_name"}
    properties JSONB
);
```

**Computed metrics pipeline (dbt models):**

Raw events → dbt transformation → experiment_results table → Looker dashboard

The `experiment_results` table is rebuilt nightly and includes:
- All users bucketed in active experiments
- Their assignment date
- All metric values from assignment date through analysis date
- Experiment-level aggregations (mean, variance, sample size)

---

## Part 2: OEC — Overall Evaluation Criterion

### Definition

The Overall Evaluation Criterion (OEC) is the single metric that best captures the long-term value an experiment creates for both users and the business. It is used when primary metrics point in different directions.

**DramaSnap's OEC:**

> **Engaged Watch Rate (EWR):** The proportion of user-days (for active users) on which the user completes at least one full episode.

**Formula:**
```
EWR = (user-days with ≥ 1 completed episode) / (total user-days for active users in window)
```

**Why this metric:**
- Captures frequency (how often users return AND engage) in a single number
- Distinguishes genuine engagement from passive opening of the app
- Predicts subscription conversion and LTV better than raw DAU
- Sensitive to changes in both content quality, UX friction, and notification effectiveness
- Can be computed at user-level, cohort-level, and aggregate level

**EWR current baseline (March 2026):** 0.38 (users complete at least 1 episode on 38% of their active days)

**EWR target (Q2 2026):** 0.52

**Why not use revenue/conversion as OEC:**
Conversion rate is too rare (< 5% of users) to detect signal in week-long experiments with typical sample sizes. EWR is more sensitive, more frequent, and a leading indicator of conversion.

---

## Part 3: Guardrail and Debug Metrics

### Guardrail Metrics

Guardrail metrics define the minimum bar for experiment health. An experiment can show primary metric improvement but still fail if a guardrail metric degrades significantly. Guardrail degradation means the experiment is creating harm even if the measured benefit looks positive.

| Guardrail Metric | Definition | Threshold | Rationale |
|---|---|---|---|
| D7 Retention | % users who return on day 7 | Must not decrease > 3pp | Short-term engagement gains should not trade against habit formation |
| Crash-free session rate | Sessions without crashes / total sessions | Must not decrease > 0.5pp | User experience floor; any increase in crashes is unacceptable |
| Uninstall rate | Uninstalls / installs in period | Must not increase > 30% relative | Proxy for strong user rejection of a change |
| Subscription churn rate | Canceled subscriptions / active subscriptions | Must not increase > 5pp | Paid users' experience must not degrade |
| App Store rating | Rolling 7-day average rating | Must not fall below 4.0 | Brand health floor |
| Customer support contact rate | Support tickets / active users | Must not increase > 20% relative | Proxy for confusion or frustration |

### Debug Metrics

Debug metrics are not decision inputs — they help diagnose why a result occurred. They are not evaluated for statistical significance.

| Debug Metric | What It Diagnoses |
|---|---|
| Bucketing ratio (treatment:control ratio) | SRM (Sample Ratio Mismatch) detection |
| Flag evaluation error rate | Feature flag delivery failures |
| Episode load time (p50, p90, p99) | Performance regressions |
| API error rate by endpoint | Backend issues affecting user experience |
| Session start rate from push notification | Notification delivery health |
| Paywall view rate | Whether paywall is triggering correctly |
| Episode completion rate by device type | Platform-specific issues |

---

## Part 4: Sample Size Calculator

### Formula

For comparing two proportions (binary metrics like D7 retention, conversion):

```
n = (z_α/2 + z_β)² × (p₁(1-p₁) + p₂(1-p₂)) / (p₁ - p₂)²

Where:
- z_α/2 = 1.96 (two-tailed, α = 0.05)
- z_β = 0.84 (power = 0.80)
- p₁ = baseline rate
- p₂ = expected rate after treatment
- n = sample size per variant
```

For comparing two means (continuous metrics like episodes/session):

```
n = 2 × (z_α/2 + z_β)² × σ² / δ²

Where:
- σ² = variance of metric (estimated from historical data)
- δ = minimum detectable effect (absolute difference)
```

### MDE Table

Minimum Detectable Effects at standard significance (α = 0.05) and power (80%), per variant sample sizes:

#### Binary Metrics (D1 Retention, Conversion Rate)

| Baseline | n = 500 | n = 1,000 | n = 2,000 | n = 5,000 | n = 10,000 |
|---|---|---|---|---|---|
| 5% (conversion) | ±3.0pp | ±2.1pp | ±1.5pp | ±0.9pp | ±0.7pp |
| 20% (D7 retention) | ±4.9pp | ±3.5pp | ±2.5pp | ±1.6pp | ±1.1pp |
| 35% (D1 retention) | ±5.9pp | ±4.2pp | ±3.0pp | ±1.9pp | ±1.3pp |
| 50% (episode completion) | ±6.2pp | ±4.4pp | ±3.1pp | ±2.0pp | ±1.4pp |

**Reading the table:** To detect a 3pp improvement in D1 retention (baseline 35%), you need approximately 2,000 users per variant (4,000 total).

#### Continuous Metrics (Episodes per Session)

| Baseline Mean | Std Dev | MDE (5% relative) | MDE (10% relative) | MDE (20% relative) | n per variant needed (10% MDE) |
|---|---|---|---|---|---|
| 2.1 episodes | 1.8 | 0.11 | 0.21 | 0.42 | ~1,200 |
| 5.3 episodes | 3.2 | 0.27 | 0.53 | 1.06 | ~950 |
| 8.0 episodes | 4.5 | 0.40 | 0.80 | 1.60 | ~990 |

---

## Part 5: Common Pitfalls

### Pitfall 1: Multiple Testing Problem (p-hacking)

**What it is:** Running many statistical tests on the same experiment data and reporting the ones that show significance. With 20 tests at α = 0.05, you expect 1 false positive even if there is no real effect.

**How it manifests at DramaSnap:**
- Analyst tests 15 subgroup analyses until one shows significance and reports that subgroup as "the finding"
- Team peeks at results daily and stops the test when p < 0.05 — even if the test hasn't reached its pre-specified sample size
- Multiple metrics are tested without alpha correction; one metric shows significance by chance

**Prevention:**
1. **Pre-register primary metric** before experiment launches (in Notion experiment doc). Only the pre-registered primary metric is used for the ship decision.
2. **Apply Bonferroni correction** for all subgroup analyses: divide α by the number of subgroup tests run. If testing 5 subgroups, use α = 0.01 per test.
3. **Do not peek.** Analysis is run only after reaching the pre-specified sample size. The experiment team sees no metric results during the experiment run (dashboard view restricted to debug metrics only until sample size is reached).
4. **Use sequential testing methodology** (alpha spending with O'Brien-Fleming bounds) for experiments where early stopping may be needed for business reasons.

---

### Pitfall 2: Simpson's Paradox

**What it is:** A trend that appears in aggregated data reverses when data is disaggregated by a confounding variable. An experiment can show Treatment "better" in aggregate while being worse for both iOS users and Android users separately.

**How it manifests at DramaSnap:**
- Autoplay experiment shows higher episodes/session in aggregate for Treatment
- Disaggregation reveals: iOS users (60% of base) had 15% worse experience; Android users (40% of base) had 40% better experience
- The aggregate benefit is driven entirely by the Android improvement, masked by mix shift

**Prevention:**
1. **Always disaggregate by platform (iOS/Android)** as a post-hoc analysis for all experiments.
2. **Check for mix shift in experiment assignments:** If Treatment has proportionally more Android users than Control (even slightly), the aggregate result is confounded.
3. **Flag Simpson's paradox risk** in the experiment design document for any experiment where platform or geography mix is likely to vary between variants.
4. **Use stratified randomization** when platform-level differences are expected: ensure iOS/Android ratio is balanced across Control and Treatment by design.

---

### Pitfall 3: Novelty and Primacy Effects

**What it is:**
- **Novelty effect:** Users engage more with a new feature simply because it's new, not because it's better. The effect inflates Treatment performance temporarily and decays over time.
- **Primacy effect:** Users resist a new experience initially, underperforming on early metrics even when the long-term experience is better. The effect depresses Treatment performance temporarily.

**How it manifests at DramaSnap:**
- New "Achievement Badges" feature shows massive D7 engagement lift in week 1 (novelty). Week 3 data shows the lift has decayed by 60%.
- Redesigned onboarding flow shows lower D1 retention in week 1 (users are disoriented by the change). Week 3 data shows it performs better than control.
- Team makes ship/kill decision based on week 1 data, missing the true long-term effect.

**Prevention:**
1. **Run all experiments for ≥ 14 days** regardless of when the minimum sample size is reached. Two full weekly cycles capture seasonality and allow novelty effects to decay.
2. **Analyze week 1 vs. week 2 effect sizes separately.** If effect size in week 2 is > 30% different from week 1, flag a potential novelty/primacy effect and extend the experiment.
3. **For new UI elements specifically:** Run for 21 days. Novelty effects in UI features typically stabilize after 2 weeks of user exposure.
4. **Pre-register novelty effect check** in experiment design: "We will compare week 1 and week 2 effect sizes. If they differ by > 30%, we will extend the experiment by 7 days."

---

### Pitfall 4: Sample Ratio Mismatch (SRM)

**What it is:** The actual ratio of users in Control vs. Treatment does not match the intended ratio. If you designed a 50/50 split but observe 55/45, the experiment is biased and results cannot be trusted.

**How it causes harm:** SRM usually indicates a bug in the assignment system — typically that a specific user segment (e.g., users who use a specific device, or users who are power users who trigger more events) is being systematically over- or under-assigned to one variant. The metric difference between variants may be caused by this selection bias, not by the treatment itself.

**Common SRM causes at DramaSnap:**
- Users who reinstall the app mid-experiment are re-bucketed (if using device_id)
- Users who clear app data lose their assignment and get re-randomized
- Bug in flag evaluation that returns default variant for certain user states
- Bot traffic or automated testing traffic assigned to one variant disproportionately

**Detection:**

Run a chi-square test on the assignment ratio:

```python
from scipy.stats import chi2_contingency

observed = [actual_control_count, actual_treatment_count]
expected = [total_users * 0.5, total_users * 0.5]  # expected 50/50

chi2, p_value = chi2_contingency([observed, expected])[:2]

if p_value < 0.01:
    FLAG: "SRM detected — do not interpret results"
```

**SRM threshold:** p < 0.01 triggers SRM flag. Experiment is paused and root cause investigated before analysis proceeds.

**Prevention:**
- Run SRM check on Day 2 of every experiment (before significant data accumulates)
- SRM check is a pre-requisite for any experiment dashboard to show results
- Build SRM detection into the automated experiment health dashboard

---

## Part 6: Experiment Review Process

### Pre-Launch Checklist

Every experiment must complete this checklist before any users are bucketed:

**Scope and design:**
- [ ] Experiment hypothesis written in standard format: "If [change], then [outcome] because [mechanism]"
- [ ] Primary metric defined and pre-registered (exactly one)
- [ ] Guardrail metrics listed (standard set + any experiment-specific guardrails)
- [ ] Debug metrics listed
- [ ] Sample size calculated and documented (with baseline, MDE, α, power)
- [ ] Test duration specified (minimum 14 days; justified if shorter)
- [ ] Mutual exclusion documented (which other experiments does this conflict with?)
- [ ] Target population defined (which users are eligible? which are excluded?)

**Technical:**
- [ ] Feature flag created in LaunchDarkly with correct targeting rules
- [ ] All primary and guardrail metric events instrumented and verified in staging
- [ ] SRM check query written and validated in BigQuery
- [ ] Holdout group confirmed excluded from this experiment
- [ ] Rollback plan documented (flag set to 0% returns to control behavior)

**Governance:**
- [ ] Experiment document created in Notion (linked to this checklist)
- [ ] Head of Product approved experiment design
- [ ] Data scientist reviewed statistical methodology
- [ ] Engineering lead confirmed instrumentation coverage

**Pre-launch sign-off:** Head of Product + Data Scientist must both approve before launch.

---

### Post-Experiment Analysis Template

After an experiment reaches its pre-specified sample size and duration:

```
EXPERIMENT: [experiment_key]
Analysis date: [YYYY-MM-DD]
Analyst: [Name]

1. SRM CHECK
   - Expected ratio: [50/50 or specified]
   - Observed ratio: [control_count / treatment_count]
   - Chi-square p-value: [p]
   - SRM present: [YES/NO]
   - If YES: STOP — do not interpret results; investigate root cause

2. PRIMARY METRIC
   - Metric name: [metric]
   - Control value: [mean ± SE]
   - Treatment value: [mean ± SE]
   - Absolute difference: [delta]
   - Relative difference: [% change]
   - 95% Confidence Interval: [lower, upper]
   - p-value: [p]
   - Statistically significant: [YES/NO] (threshold: p < 0.05)
   - Practically significant: [YES/NO] (exceeds pre-registered MDE)

3. GUARDRAIL METRICS
   For each guardrail metric:
   - [Metric name]: Control [value] | Treatment [value] | Change [delta] | Guardrail status [PASS/FAIL]

4. NOVELTY/PRIMACY CHECK
   - Week 1 effect: [delta]
   - Week 2 effect: [delta]
   - Difference between weeks: [%]
   - Novelty effect suspected: [YES/NO]

5. SUBGROUP ANALYSIS (pre-registered only)
   For each pre-registered subgroup:
   - [Subgroup]: n=[count] | Control [value] | Treatment [value] | Effect [delta] | Corrected p-value [p]

6. INTERPRETATION
   - What happened: [plain language explanation]
   - What we believe caused it: [mechanism]
   - What we believe about users who benefited most: [segment insight]
   - Surprising finding (if any): [description]
   - Limitations: [known confounds, limitations of analysis]

7. RECOMMENDATION
   - Primary recommendation: [SHIP / DO NOT SHIP / EXTEND / INVESTIGATE]
   - Rationale: [2–3 sentences]
   - Conditions: [any conditions on shipping, monitoring requirements]
```

---

### Decision Documentation

After analysis is complete, the decision and its rationale are documented permanently:

**Decision record format:**

```
Experiment: [name]
Decision: [SHIP / DO NOT SHIP / EXTEND / ITERATE]
Decision date: [YYYY-MM-DD]
Decision owner: [Name]

Decision rationale:
[2–3 paragraph explanation that future team members can read and understand
without access to the analyst — what did we learn, why did we decide what we decided,
what would have changed the decision?]

What we learned (regardless of decision):
[Key insight from this experiment that should inform future experiments or product decisions]

What we're watching post-ship (if shipping):
[Metrics to monitor in the 30 days after shipping; criteria that would trigger rollback]

Rollback criteria (if shipping):
[Specific metric thresholds that would trigger emergency rollback]

Links:
- Experiment design doc: [Notion link]
- Analysis notebook: [BigQuery / Jupyter link]
- Feature flag: [LaunchDarkly link]
```

**Permanent record:** Decision records are stored in Notion under `Product / Experiments / [Year] / [Quarter]` and are never deleted. They form DramaSnap's institutional memory of what has and hasn't worked.

---

### Experiment Review Board

**Cadence:** Bi-weekly (every other Wednesday, 45 minutes)

**Attendees:** Head of Product, Data Scientist, 2 PMs on rotating basis

**Agenda:**

| Time | Item |
|---|---|
| 0–5 min | Review active experiments: SRM status, sample size progress |
| 5–15 min | Analysis review: any experiments that reached sample size since last meeting |
| 15–30 min | Decision discussion: Ship / No-ship decisions on completed experiments |
| 30–40 min | Upcoming experiments: pre-launch checklist review |
| 40–45 min | Experiment calendar: upcoming conflicts, mutual exclusion planning |

**Quorum:** Head of Product must be present. Decisions cannot be made without Head of Product present.

---

## Experimentation Maturity Roadmap

DramaSnap's experimentation capability will evolve over time:

| Maturity Level | Capability | Target Date |
|---|---|---|
| Level 1 (current) | Manual A/B tests; feature flags; basic metrics pipeline | Achieved |
| Level 2 | Automated SRM detection; pre-launch checklist enforcement; experiment calendar | Q2 2026 |
| Level 3 | CUPED variance reduction; sequential testing; automated novelty detection | Q3 2026 |
| Level 4 | Multi-armed bandit for content recommendations; automated decision support | Q4 2026 |
| Level 5 | Interleaving experiments for recommendation; holdout calibration; causal inference | 2027 |

*Level 2 is the minimum bar for trustworthy experiments. All experiments launched after April 1, 2026 must meet Level 2 standards.*

---

*Trustworthy experiments are not about making experiments more complicated — they are about making our learning more reliable. Every shortcut in experiment design is a tax on future decisions made on bad information.*
