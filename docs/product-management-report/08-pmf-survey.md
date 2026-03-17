# Product-Market Fit Survey Design: DramaSnap

## Overview

The Product-Market Fit (PMF) survey methodology, popularized by Sean Ellis and expanded by Rahul Vohra (Superhuman), uses a single core question to benchmark how indispensable a product has become to its users. The infamous "40% rule" states that if 40%+ of users say they would be "very disappointed" if the product went away, you have achieved product-market fit.

This document covers DramaSnap's full PMF survey design, analysis plan, improvement roadmap, distribution strategy, and tracking framework.

**The Core Insight:** PMF is not a binary switch. It is a spectrum, and the survey is a diagnostic tool that tells you not just *whether* you have PMF, but *who* has PMF with your product, *why* it resonates with them, and *what's blocking* everyone else from reaching that level of enthusiasm.

---

## Full PMF Survey (9 Questions)

**Survey Name:** "Help Us Build the Best Drama App Ever"

**Introduction Text:**
> "You've been using DramaSnap and your opinion matters enormously to us. This 3-minute survey helps us understand what's working, what isn't, and what would make DramaSnap indispensable to you. There are no right or wrong answers — honest feedback, even if critical, is what helps us improve."

---

### Question 1 (Core PMF Question — Ellis)

**Question:** How would you feel if you could no longer use DramaSnap?

- [ ] Very disappointed
- [ ] Somewhat disappointed
- [ ] Not disappointed (it isn't really that useful)
- [ ] N/A — I no longer use DramaSnap

**Why this question:** This is the founding question of the Ellis PMF framework. The "very disappointed" percentage is the primary benchmark. The N/A option is important — users who have already churned should not be excluded from the survey if they received it; their response is informative.

---

### Question 2 (Persona Identification)

**Question:** How would you describe yourself to someone who's never met you? (Select the answer that best fits)

- [ ] Working professional who commutes regularly
- [ ] Stay-at-home parent with busy, fragmented schedule
- [ ] Student looking for entertainment between classes
- [ ] Remote worker looking for breaks from work-from-home
- [ ] Drama/romance fan who watches content on multiple platforms
- [ ] Someone who discovered short drama recently and is exploring
- [ ] Other: _______________

**Why this question:** Identifies which user segment has the strongest PMF signal. Allows segmented analysis of the "very disappointed" percentage.

---

### Question 3 (Alternative Identification)

**Question:** What would you use instead of DramaSnap if it were no longer available?

- [ ] ReelShort or ShortTV
- [ ] Netflix, Hulu, or another long-form streaming service
- [ ] TikTok or Instagram Reels
- [ ] Romance novels or fan fiction (Wattpad, Kindle Unlimited)
- [ ] Podcasts or audiobooks
- [ ] Nothing — I would just have less entertainment
- [ ] Other: _______________

**Why this question:** Identifies the true competitive alternative, which informs positioning and tells you which audiences are most "stuck" without DramaSnap vs. those who have easy alternatives.

---

### Question 4 (Main Benefit)

**Question:** What is the main benefit you get from DramaSnap? (Select one)

- [ ] I always have something engaging to watch during commutes/breaks
- [ ] The stories are personalized to my taste in a way other apps aren't
- [ ] The 60-second episodes fit perfectly into my schedule
- [ ] The subscription is better value than paying per-episode on other apps
- [ ] There's always new content — the catalog keeps growing
- [ ] I discovered genres I didn't know I loved
- [ ] Other: _______________

**Why this question:** The "main benefit" answer from "very disappointed" users tells you what language to use in your marketing copy and which features to double down on. This is Vohra's key insight — the very disappointed users are telling you your value proposition.

---

### Question 5 (Biggest Improvement)

**Question:** What is the single most important thing DramaSnap could do to make the experience better for you?

*(Open-ended text response)*

**Why this question:** The most important qualitative signal in the survey. Open-ended feedback from "very disappointed" users reveals what's already working. Open-ended feedback from "somewhat disappointed" users reveals the gap between where they are and becoming "very disappointed." This is the core of the Vohra improvement methodology.

---

### Question 6 (Recent Experience)

**Question:** Think about the last 7 days. What best describes your DramaSnap usage?

- [ ] I watched every day
- [ ] I watched 3–5 days
- [ ] I watched 1–2 days
- [ ] I opened the app but didn't watch anything
- [ ] I didn't open the app at all

**Why this question:** Correlates PMF response with actual usage. Users who say "very disappointed" but haven't watched in 7 days may be overrating their attachment. Users who watch every day but say "somewhat disappointed" are high-value upgrade targets.

---

### Question 7 (Content Satisfaction)

**Question:** How satisfied are you with the content quality on DramaSnap? (1–5 scale)

- 1 = Very unsatisfied — the content feels low quality or generic
- 2 = Mostly unsatisfied
- 3 = Neutral — it's okay but not impressive
- 4 = Mostly satisfied
- 5 = Very satisfied — the content regularly exceeds my expectations

**Why this question:** Content quality is the most important lever for AI-generated drama platforms. Understanding whether content quality is a PMF blocker (vs. features, pricing, or format) is critical for prioritization.

---

### Question 8 (Personalization Awareness)

**Question:** Have you noticed that DramaSnap's recommendations improve over time based on what you watch?

- [ ] Yes — the recommendations feel increasingly tailored to my taste
- [ ] Somewhat — I notice some improvement but it still feels generic sometimes
- [ ] No — the recommendations don't seem to adapt to my preferences
- [ ] I haven't been using it long enough to notice

**Why this question:** Personalization is DramaSnap's core differentiator. If the majority of users don't notice the personalization, either the feature isn't working or it isn't being communicated effectively. Both are critical failure modes.

---

### Question 9 (Referral Intent)

**Question:** How likely are you to recommend DramaSnap to a friend or family member who loves drama?

*(0–10 scale — standard Net Promoter Score question)*

- 0–6: Not likely at all
- 7–8: Might mention it but wouldn't actively push it
- 9–10: Would definitely and enthusiastically recommend it

**Why this question:** NPS correlates with PMF and tracks word-of-mouth potential. It also provides a secondary benchmark: NPS above 40 is typically associated with strong PMF for consumer apps.

---

## Analysis Plan

### Primary Analysis: PMF Score Calculation

**Step 1:** Calculate the "Very Disappointed" Percentage

```
PMF Score = (# "Very Disappointed" responses) / (# total valid responses) × 100
```

Exclude N/A responses from the denominator (churned users skew the denominator without reflecting current engagement).

**Step 2:** Benchmark Against Target

| PMF Score | Interpretation | Action |
|-----------|---------------|--------|
| <20% | Pre-PMF; significant work needed | Major product redesign; deep JTBD research |
| 20–29% | Trending toward PMF; one or two key improvements needed | Focus improvement engine on top complaints |
| 30–39% | Approaching PMF; strong foundation | Accelerate improvements on key gap areas |
| 40%+ | Product-Market Fit achieved | Shift investment toward growth |

**DramaSnap Target:** Achieve 40% "very disappointed" score within 12 months of launch

---

### Segmentation Analysis

After calculating the overall PMF score, segment the "very disappointed" responses by:

**By User Persona (Q2):**
Which persona segment has the highest PMF? This identifies the highest-value segment for go-to-market focus.

**By Competitive Alternative (Q3):**
Which alternative source has the highest "very disappointed" users? These are the users with the lowest escape velocity — they have no good alternative, making DramaSnap stickiest for them.

**By Main Benefit (Q4):**
Which benefit drives the strongest PMF? This tells you what language to use in marketing and what features drive the most retention.

**By Recent Usage (Q6):**
Cross-tab PMF score with usage frequency. Expected finding: daily users → 60%+ very disappointed; weekly users → 30–40%; monthly users → <15%.

**Expected Segment Results (Hypothesis):**

| Segment | Hypothesized PMF Score |
|---------|----------------------|
| Commuting professionals | 45–55% |
| Stay-at-home parents (mobile micro-sessions) | 50–60% |
| Short drama fans from ReelShort | 55–65% |
| TikTok migrants | 25–35% |
| Netflix casual users | 15–25% |

---

### HXC (Highest-Converting Customer) Identification

**The Vohra Method:** Read every single open-ended response from "very disappointed" users. Identify the patterns in what they love about DramaSnap (Q5) and what they think their alternatives are (Q3). These users define what DramaSnap should be.

**HXC Profile Building:**

From the survey data, identify the top 3 characteristics of "very disappointed" users:
1. What persona are they? (Q2 modal answer among very disappointed users)
2. What main benefit resonates most? (Q4 modal answer)
3. What alternative would they use? (Q3 modal answer — likely "nothing" or "ReelShort/ShortTV")

This HXC profile becomes the ICP (Ideal Customer Profile) for DramaSnap's marketing targeting.

---

## Improvement Roadmap (Vohra's Engine)

### The Vohra PMF Improvement Engine

Rahul Vohra's methodology for improving PMF score (from *The Product-Market Fit Game*, 2018):

1. **Segment:** Find the users with the highest PMF (very disappointed) and deeply understand them
2. **Build for them:** Make the product even better for the users who already love it (don't try to please everyone)
3. **Convert "somewhat disappointed" users:** Identify what's preventing them from becoming "very disappointed" using Q5 open-ended responses
4. **Eliminate friction for "not disappointed" users:** Either convert them or deprioritize them — don't build for users who will never love the product

### Converting "Somewhat Disappointed" to "Very Disappointed"

The highest-leverage action is understanding why "somewhat disappointed" users aren't "very disappointed." Their Q5 (biggest improvement) answers reveal the gap.

**Hypothesized Gap Themes and Actions:**

| Gap Theme | Frequency Hypothesis | Action |
|-----------|---------------------|--------|
| "Content quality isn't consistent" | 40% of somewhat disappointed | Improve QA pipeline; create "signature quality" tier |
| "I can't find content I like easily" | 25% | Improve recommendation algorithm; add mood-based filtering |
| "Episodes feel too short / story moves too fast" | 20% | Experiment with 90-second episode format for certain genres |
| "I wish there were more genres I'm interested in" | 15% | Expand genre catalog; use AI to test new genre viability |

**Roadmap Priority (Month 1–6 post-PMF survey):**

| Month | Priority Action | Target Metric |
|-------|----------------|---------------|
| Month 1 | Implement content quality scoring; hide bottom-quintile content from browse | Content satisfaction score (Q7) +0.5 |
| Month 2 | Launch mood-based filtering on home screen | "Can't find content" Q5 responses decrease 25% |
| Month 3 | Improve personalization transparency ("recommended because you liked X") | Personalization awareness (Q8) improves to 60% |
| Month 4 | Genre expansion: LGBTQ+ romance, psychological thriller | Genre variety Q5 responses decrease 20% |
| Month 5 | Introduce "Premium Quality" series label for top-QA content | Content satisfaction score +0.3 |
| Month 6 | Re-survey; measure PMF improvement | Target: +8% very disappointed |

---

## Survey Distribution Plan

### Timing: When to Survey

**First Survey:** 21–30 days after user registration

**Rationale:** Users need enough time to experience the product meaningfully (watch 10+ episodes across multiple sessions) but not so long that their memory of their first impression fades. 21–30 days is the standard window for subscription PMF surveys.

**Do NOT survey:**
- Users in their first 7 days (insufficient experience)
- Users who have only opened the app once (insufficient engagement)
- Users who have already requested cancellation (they've already decided; survey outcome is biased)

**Cadence for Repeat Surveys:**
- Quarterly re-survey of users who have been on the platform 90+ days
- Segment by cohort to track PMF improvement over time

### Channel Strategy

| Channel | Target Segment | Expected Response Rate |
|---------|---------------|----------------------|
| In-app survey (full-screen modal) | All 21-30 day users | 25–35% |
| Email survey (post-session trigger) | Users who just completed a series | 15–20% |
| Push notification → in-app | Highly engaged users (10+ episodes last week) | 20–30% |

### Response Volume Target

For statistically significant segment analysis:

| Segment | Minimum Response Target |
|---------|------------------------|
| Overall PMF score | 400 responses |
| Per persona segment | 75 responses per segment |
| Per competitive alternative segment | 50 responses per segment |

**Timeline to sufficient responses (assuming 15K MAU at survey launch):**
- At 30% response rate: 4,500 responses in first survey batch — far exceeds minimum
- For smaller user bases (<3K MAU): supplement in-app survey with email campaign

---

## PMF Score Tracking Over Time

### Tracking Dashboard

Track PMF score across cohorts and over time to measure product improvement velocity.

| Cohort | Survey Date | Very Disappointed % | Somewhat % | Not Disappointed % | NPS |
|--------|-------------|--------------------|-----------|--------------------|-----|
| Beta users | Month -2 | [Target: 35%] | — | — | — |
| Launch cohort | Month 1 | [Target: 30%] | — | — | — |
| Month 3 cohort | Month 3 | [Target: 35%] | — | — | — |
| Month 6 cohort | Month 6 | [Target: 38%] | — | — | — |
| Month 9 cohort | Month 9 | [Target: 40%] | — | — | — |
| Month 12 cohort | Month 12 | [Target: 45%] | — | — | — |

### Leading Indicators of PMF Improvement

Before PMF survey results are available (surveys take weeks to collect), track these leading indicators:

| Leading Indicator | PMF Correlation | Target Threshold |
|------------------|----------------|-----------------|
| 7-day retention | High | >40% |
| Weekly session frequency | High | >4 sessions/week for active users |
| Series completion rate | High | >30% of started series completed |
| Organic referral rate | High | >8% of MAU refer at least one friend |
| NPS score (Q9) | High | >30 |

---

## Decision Framework

**At each PMF survey cycle, use this decision tree:**

```
PMF Score >= 40%?
├── YES → Shift investment toward growth (paid acquisition, creator program)
│         Continue quarterly PMF tracking; defend score as product evolves
└── NO  → PMF Score >= 30%?
          ├── YES → Apply Vohra engine: read every very-disappointed open-end;
          │         identify top 3 improvement themes; build sprint around them;
          │         re-survey in 60 days
          └── NO  → PMF Score >= 20%?
                    ├── YES → Deep JTBD research: wrong users, wrong jobs, or wrong
                    │         product? Find HXC segment with highest sub-score;
                    │         narrow ICP; re-focus product on their specific job
                    └── NO  → Pre-PMF crisis: pause marketing spend; intensive
                               user research; consider pivot or major feature rethink
```

---

*PMF survey framework based on Sean Ellis' methodology and Rahul Vohra's Superhuman PMF engine. Analysis current as of March 2026.*
