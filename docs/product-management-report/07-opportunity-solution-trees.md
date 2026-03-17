# Teresa Torres' Opportunity Solution Trees: DramaSnap

## Overview

Teresa Torres' Opportunity Solution Tree (OST) framework, from *Continuous Discovery Habits* (2021), provides a visual structure for organizing product discovery. The tree starts with a desired outcome (business goal), branches into opportunity nodes (customer needs, pain points, desires), and maps solutions to each opportunity. The discipline forces teams to explore multiple opportunities rather than jumping to the first solution, and to test assumptions before committing to build.

**OST Structure:**
```
Desired Outcome
├── Opportunity 1
│   ├── Solution 1a
│   └── Solution 1b
├── Opportunity 2
│   ├── Solution 2a
│   └── Solution 2b
└── Opportunity 3
    └── Solution 3a
```

---

## Desired Outcome: 3x Weekly Active Viewers (WAV)

**Definition:** Weekly Active Viewers (WAV) = users who watch at least 5 episodes in a given week

**Current Baseline:** [To be established at launch]

**Target:** 3x WAV within 12 months of launch

**Why This Metric:**
- WAV captures meaningful engagement (5+ episodes), not just opens
- Weekly cadence correlates with subscription retention better than daily/monthly metrics
- Tripling is ambitious enough to require genuine product-led growth, not just marketing spend
- Tracks the core behavior that drives DramaSnap's business (watch time drives subscription value, ad revenue, and content recommendation quality)

**Connected Business Metrics:**
- WAV → Subscription retention (high WAV users churn at 3x lower rate)
- WAV → Content recommendation quality (active users generate better behavioral signals)
- WAV → Word-of-mouth referrals (engaged users are 4x more likely to recommend)

---

## Opportunity Map

### Opportunity 1: Users Struggle to Start Watching Quickly

**Evidence:** User research shows that 35–40% of app sessions that end without watching any content are abandoned in the first 30 seconds — the user opened the app but couldn't find something to watch before losing motivation.

**Customer Quote:** *"I open the app and then I spend 5 minutes trying to figure out what to watch and then my train pulls in and I never started anything."*

**Sub-Opportunities:**
- 1a: Users don't know what to watch first (choice paralysis)
- 1b: Users can't quickly evaluate whether a series is right for them
- 1c: The path from opening the app to watching the first episode is too long

**Opportunity Size:** Large — affects 35–40% of sessions; directly impacts WAV by reducing the frequency of successful sessions

**Solutions Mapped to Opportunity 1:**

| Solution | Description | Hypothesis |
|----------|-------------|------------|
| **1a: "Play Now" Button** | Single-tap button on home screen that starts the highest-confidence recommendation immediately | If we reduce the action required to start watching to 1 tap, session abandonment rate will decrease by 20% |
| **1b: 15-Second Series Preview** | Auto-playing 15-second hook preview when browsing series (no tap required) | If users can preview the hook without committing, they will find relevant series 2x faster |
| **1c: "My Vibe" Mood Selector** | 5-option mood picker on home screen that filters recommendations to the user's current emotional state | If users can express their current mood and get a filtered recommendation, they will start watching 30% more often |
| **1d: Personalized "Today's Pick"** | One algorithmically curated recommendation per day, with confidence score and why-it's-for-you explanation | If users trust a single curated pick, they will bypass browsing and start immediately |

---

### Opportunity 2: Users Lose Momentum Between Sessions

**Evidence:** Completion data shows that 45% of series started are abandoned between episodes 10–30 — far short of the 100-episode arc. Users report losing track of the story, forgetting characters, or simply losing the habit of returning.

**Customer Quote:** *"I was really into it and then I went on a business trip and by the time I got back I couldn't remember what was happening and I just started something new."*

**Sub-Opportunities:**
- 2a: Users forget the story context when they return after a gap
- 2b: Users don't feel urgency to return to a paused series
- 2c: Users' habits break around travel, schedule disruption, or competing content

**Solutions Mapped to Opportunity 2:**

| Solution | Description | Hypothesis |
|----------|-------------|------------|
| **2a: Story Recap Micro-Card** | 15-second recap of previous episode events shown before starting a new session | If users are instantly re-contextualized, mid-arc abandonment will decrease by 15% |
| **2b: "Cliffhanger Alert" Notification** | Push notification 24 hours after a cliffhanger episode: "You stopped at a cliffhanger. What happens next?" | If we remind users they're at a high-tension moment, return-to-series rate within 48 hours will increase by 25% |
| **2c: Watch Streak Mechanic** | Daily watch streak counter with visual reward at 7-day milestones | If streak visibility increases habitual daily opening, WAV will increase by 10% |
| **2d: "Finish This Week" Challenge** | Auto-detected "you're X episodes from finishing" with a completion deadline notification | If users are shown they can finish a series this week, completion rates will increase by 20% |

---

### Opportunity 3: Users Don't Know What to Watch After Finishing a Series

**Evidence:** Churn data shows the highest churn point is within 7 days of completing a series. Users who watch the final episode of a series and don't start a new one within 48 hours are 3x more likely to cancel their subscription in the following 30 days.

**Customer Quote:** *"I finished the series and I was a little sad about it and then I just... didn't know what to watch next. I ended up going back to TikTok."*

**Sub-Opportunities:**
- 3a: The transition from series completion to new series start has no guidance
- 3b: Recommendations after completion feel generic, not continuation-aware
- 3c: Users feel the "series hangover" and need a bridge, not just a new recommendation

**Solutions Mapped to Opportunity 3:**

| Solution | Description | Hypothesis |
|----------|-------------|------------|
| **3a: Completion Sequence** | Immediately upon finishing a series, show a curated "Because you loved [X]" next series recommendation with auto-play preview | If we intercept the completion moment with a strong next-series recommendation, users will start a new series before closing the app 40% of the time |
| **3b: Series "Hangover" Content** | Post-completion fan theory discussion, alternative endings, or creator notes shown as a bridge | If we give users more to explore about the series they just finished, time-to-next-series will decrease from 3 days to 1 day |
| **3c: "New to You" Genre Expansion** | After completing a series, recommend one series in the same sub-genre and one in a new genre | If we balance comfort recommendations with gentle genre expansion, long-term variety prevents catalog fatigue |

---

### Opportunity 4: New Users Don't Experience the Value Quickly Enough

**Evidence:** Beta testing shows that 30% of new users who download the app do not watch a single complete episode in their first session. Users who do not complete at least one episode in their first session have a 70% 30-day churn rate.

**Customer Quote:** *"I downloaded it, looked around, and I wasn't sure where to start. I meant to come back but I never did."*

**Sub-Opportunities:**
- 4a: New users don't have enough context to choose a series confidently
- 4b: The first episode of the recommended series doesn't hook them
- 4c: Onboarding is too generic and doesn't personalize quickly enough

**Solutions Mapped to Opportunity 4:**

| Solution | Description | Hypothesis |
|----------|-------------|------------|
| **4a: Taste Quiz Onboarding** | 5-question taste quiz that creates an immediate preference profile before showing content | If new users provide taste signals upfront, first-session recommendation relevance will improve and episode-1 completion rate will increase by 30% |
| **4b: "Your First Series" Curation** | Algorithmically select the single highest-quality series in the user's inferred genre for first exposure; make it the only recommendation at first session | If we eliminate choice in the first session and guarantee a high-quality first impression, 7-day retention will increase by 25% |
| **4c: Progressive Onboarding** | Instead of a full onboarding flow, teach the product through the first 3 episodes (show UI hints contextually as needed) | If onboarding friction is eliminated and users start watching immediately, time-to-first-episode will decrease from 4 minutes to 30 seconds |

---

### Opportunity 5: Users Don't Share DramaSnap with Friends

**Evidence:** Referral rate data shows that only 5–8% of monthly active users have referred a friend. Users who do refer friends have 2x higher lifetime value. The current product has no native sharing mechanics.

**Customer Quote:** *"I keep telling my friend to try it but there's no easy way to send her a specific episode or series to make her want to watch it."*

**Sub-Opportunities:**
- 5a: Users have no easy way to share specific content
- 5b: Shared content doesn't give the recipient enough context to be compelled to download
- 5c: There's no incentive for users to actively recommend DramaSnap

**Solutions Mapped to Opportunity 5:**

| Solution | Description | Hypothesis |
|----------|-------------|------------|
| **5a: Episode Clip Sharing** | Allow users to share a 15-second "hook clip" from any episode via iMessage, WhatsApp, Instagram | If we provide a frictionless share action, the share rate will increase from 5% to 15% of MAU per month |
| **5b: Series Invite Link** | A unique deep link that gives the recipient the first 10 episodes free on DramaSnap (regardless of their current plan) | If recipients get free episodes as the invitation CTA, download conversion from shared links will be 3x higher than organic |
| **5c: Referral Reward Program** | Sharer earns 1 month free Premium for each friend who subscribes (up to 3 months/year) | If there's a meaningful financial incentive, active referral rate will increase from 5% to 15% of MAU |

---

## Assumption Mapping for Top Solutions

For the highest-priority solutions, we identify the assumptions that must be true for the solution to deliver the expected outcome. Assumptions are rated by importance and current confidence level.

### Top Solution: "Play Now" Button (Opportunity 1)

| Assumption | Importance | Confidence | Risk Level |
|-----------|-----------|------------|------------|
| Users are abandoning because of choice friction, not content quality | Critical | Medium | High |
| The algorithm can reliably select the right episode to auto-play | Critical | Low | High |
| Users trust a single recommendation enough to start without browsing | Important | Medium | Medium |
| One-tap start doesn't cause confusion about what was selected | Important | High | Low |
| Playing the wrong content in auto-mode doesn't cause frustration that increases bounce | Critical | Medium | High |

**Key Assumption to Test First:** Users abandon because of choice friction (not content quality). If users abandon because the content itself is not appealing, a "Play Now" button solves the wrong problem.

### Top Solution: "Cliffhanger Alert" Notification (Opportunity 2)

| Assumption | Importance | Confidence | Risk Level |
|-----------|-----------|------------|------------|
| Users who stopped at a cliffhanger are in a "return-intent" state | Critical | High | Low |
| A push notification 24h after cliffhanger will be received positively | Important | Medium | Medium |
| Notification timing (24h) is better than immediate or longer delay | Moderate | Low | Medium |
| Users don't disable notifications at a high rate after receiving these | Critical | Low | High |
| The "cliffhanger" detection algorithm identifies the right episodes | Important | Medium | Medium |

**Key Assumption to Test First:** Notification opt-out rate after receiving cliffhanger alerts. If this notification causes high opt-out, the entire channel is compromised.

### Top Solution: Taste Quiz Onboarding (Opportunity 4)

| Assumption | Importance | Confidence | Risk Level |
|-----------|-----------|------------|------------|
| New users are willing to complete a 5-question quiz before accessing content | Critical | Medium | High |
| Quiz signals significantly improve recommendation relevance vs. no quiz | Critical | Medium | High |
| A "better recommendation" is what drives new user activation, not just having any recommendation | Important | Medium | Medium |
| The quiz doesn't add enough friction to increase app abandonment before first view | Critical | Medium | High |

**Key Assumption to Test First:** Does the quiz reduce or increase activation rate vs. skipping to content immediately? There is a real risk that any onboarding step reduces activation.

---

## Four Detailed Experiments

### Experiment 1: "Play Now" Button — Choice Paralysis Reduction

**Hypothesis:**
If we add a single-tap "Play Now" button to the DramaSnap home screen that immediately starts the highest-confidence recommendation for that user, then we expect to see a 20% reduction in sessions with zero episode completions (ghost sessions) among users who see the button, compared to the control group (standard browse UI), measured over 4 weeks.

**Rationale:** Ghost sessions (users open app, watch nothing, close) are a leading indicator of engagement failure. Reducing them by improving the path-to-play addresses the specific friction point identified in session analysis.

**Test Design:**
- **Type:** A/B test
- **Sample:** 50,000 users randomly assigned (25,000 treatment, 25,000 control)
- **Duration:** 4 weeks
- **Treatment:** Home screen includes "Play Now" button with single-tap start
- **Control:** Standard home screen with browse-first UX
- **Primary metric:** Ghost session rate (sessions with 0 episode completions)
- **Secondary metrics:** Session start rate, episode completion rate, 7-day retention
- **Guardrail metrics:** User satisfaction score (in-app micro-survey), episode abandonment rate (started but stopped mid-episode)

**Kill Criteria:**
- If ghost session rate does not decrease by at least 10% in treatment group → pause and investigate why
- If episode abandonment rate increases by >5% in treatment group (people start but immediately stop the auto-selected content) → kill the feature; it solves the wrong problem

**Success Criteria:**
- Ghost session rate decreases by 20%+ → ship to 100% of users
- 7-day retention improves by 5%+ → prioritize algorithmic recommendation quality

---

### Experiment 2: "Story Recap" Micro-Card — Momentum Recovery

**Hypothesis:**
If we show a 15-second recap micro-card summarizing the previous episode's key events before each episode that is watched after a 48-hour gap, then we expect to see a 15% decrease in mid-series abandonment rate (series started but not completed through episode 50) among returning users, measured over 8 weeks.

**Rationale:** Mid-arc abandonment (episodes 10–30) represents the highest volume loss point in the content funnel. Story context loss is the most commonly cited reason for abandonment in user interviews.

**Test Design:**
- **Type:** A/B test targeting users with series in progress (episodes 10–50)
- **Sample:** 30,000 active series users (15,000 treatment, 15,000 control)
- **Duration:** 8 weeks (longer to observe abandonment patterns)
- **Treatment:** Recap micro-card appears before first episode of each session after 48h gap
- **Control:** No recap; standard episode start
- **Primary metric:** Mid-series abandonment rate (users who stop watching a series between episodes 10–50)
- **Secondary metrics:** Average episodes per return session, 30-day series completion rate
- **Guardrail metrics:** Skip rate on recap card (if >80% skip immediately, recaps aren't helping)

**Kill Criteria:**
- If mid-series abandonment does not decrease by at least 8% → the problem is not story context loss; investigate alternative hypotheses
- If 50%+ of users disable or skip recaps consistently → recaps are friction, not value; redesign format

**Success Criteria:**
- Mid-series abandonment decreases 15%+ → ship to all users
- 30-day series completion rate improves → use as input for content arc design guidelines

---

### Experiment 3: Taste Quiz vs. Direct-to-Content Onboarding — Activation Optimization

**Hypothesis:**
If we present new users with a 5-question taste quiz that creates a preference profile before showing content, then we expect to see a 25% increase in episode-1 completion rate (new users who complete their first episode) compared to new users who go directly to a default content browse experience, measured over 6 weeks.

**Rationale:** Episode-1 completion is the strongest leading indicator of 30-day retention. Improving first-episode relevance through taste signals should improve this metric — but we must verify that the quiz doesn't add friction that reduces overall activation.

**Test Design:**
- **Type:** A/B test on all new user registrations
- **Sample:** All new users over 6 weeks (continuous allocation)
- **Treatment A:** Taste quiz (5 questions: genre, mood, relationship type, pacing, forbidden tropes) → personalized first series
- **Treatment B:** Skip quiz, immediate access to a single curated "best first series" pick
- **Control:** Skip quiz, show standard browse catalog
- **Primary metric:** Episode-1 completion rate
- **Secondary metrics:** Time-to-first-episode, 7-day retention, quiz completion rate (for Treatment A)
- **Guardrail metrics:** App abandonment rate during onboarding (users who close the app before watching episode 1)

**Kill Criteria:**
- If quiz reduces episode-1 completion rate vs. direct-to-content (Treatment B) → the quiz adds more friction than value; explore lighter preference collection (implicit signals)
- If app abandonment during onboarding increases by >5% → quiz friction is too high; shorten to 3 questions or make skippable

**Success Criteria:**
- Taste quiz increases episode-1 completion by 25%+ with no increase in abandonment → ship taste quiz
- If Treatment B (curated single pick) outperforms both quiz and standard browse → "best first series" curation is the activation lever; optimize curation model

---

### Experiment 4: Episode Clip Sharing — Viral Growth Loop

**Hypothesis:**
If we allow users to share a 15-second "hook clip" from any episode with a deep link that gives the recipient access to the first 10 episodes free, then we expect to see a referral-to-install conversion rate of 25%+ (recipients who click the link and install the app), compared to our current baseline of standard referral links which convert at ~8%, measured over 8 weeks.

**Rationale:** The referral loop is the highest-efficiency growth channel (CAC near zero) but current share mechanics are weak. A content-forward share mechanic (the clip is the hook) is more compelling than a generic app invitation.

**Test Design:**
- **Type:** Holdout test + measurement (no control group possible for viral mechanics)
- **Measurement approach:** Track all shared clips vs. all other sharing methods; compare install conversion
- **Duration:** 8 weeks
- **Treatment:** Episode clip sharing feature with 15-second preview and deep link to first 10 free episodes
- **Baseline:** Current referral program (standard deep link, no clip)
- **Primary metric:** Referral install conversion rate (clicks → installs)
- **Secondary metrics:** Share rate (% of active users sharing per week), viral coefficient (k-factor), new user retention from referred installs vs. organic installs
- **Guardrail metrics:** Content rights complaints (ensure clip sharing doesn't create IP/licensing issues with AI generation pipeline)

**Kill Criteria:**
- If referral install conversion from clip shares is less than 15% → clips are not the compelling hook; explore other share formats (series synopsis, character preview)
- If share rate (% of users using the feature) is below 5% of MAU → feature is built but not used; investigate discoverability and placement

**Success Criteria:**
- Referral install conversion >25% → invest in making share mechanics prominent in the UI
- Viral coefficient (k-factor) >0.3 → this is a meaningful contribution to organic growth; expand to more share surfaces

---

## Experiment Sequencing Plan

Run experiments in order of strategic priority and dependency:

### Phase 1 (Months 1–2): Activation Experiments

**Goal:** Maximize new user activation (episode-1 completion)

| Priority | Experiment | Expected Duration | Decision Gate |
|----------|-----------|------------------|---------------|
| P1 | Taste Quiz vs. Direct-to-Content | 6 weeks | Episode-1 completion |
| P2 | "Play Now" Button | 4 weeks | Ghost session rate |

**Rationale:** Activation is the first funnel gate. No engagement or retention optimization matters if new users don't activate.

---

### Phase 2 (Months 2–4): Engagement Experiments

**Goal:** Increase episodes per active user per week (WAV)

| Priority | Experiment | Expected Duration | Decision Gate |
|----------|-----------|------------------|---------------|
| P1 | Story Recap Micro-Card | 8 weeks | Mid-series abandonment |
| P2 | Cliffhanger Alert Notification | 4 weeks | 48h return rate |

**Rationale:** After activation is optimized, maximize depth of engagement (episodes per session, return frequency).

---

### Phase 3 (Months 4–6): Growth Experiments

**Goal:** Increase organic acquisition through viral mechanics

| Priority | Experiment | Expected Duration | Decision Gate |
|----------|-----------|------------------|---------------|
| P1 | Episode Clip Sharing | 8 weeks | Referral install conversion |
| P2 | Referral Reward Program | 8 weeks | Active referral rate |

**Rationale:** Growth experiments are most valuable after product-market fit signals are positive. Running viral experiments before activation is optimized wastes referred users.

---

## Weekly OST Review Checklist

Use this checklist in weekly product team rituals to maintain the OST as a living document:

### Evidence Review
- [ ] What new customer interviews were conducted this week? What did they reveal?
- [ ] Are there new support tickets, app reviews, or churn surveys that surface new opportunities?
- [ ] Are any current opportunity nodes better understood or disproved by recent evidence?

### Experiment Review
- [ ] Which experiments are currently running? What is the status?
- [ ] Have any experiments hit their kill criteria? What's the decision?
- [ ] Are there experiments that should be paused, accelerated, or redesigned?

### Tree Maintenance
- [ ] Have we added any new solutions to existing opportunities based on ideation?
- [ ] Are there new sub-opportunities discovered from recent research that should be added to the tree?
- [ ] Are any opportunity nodes stale (no solution tested in 60+ days)?

### Alignment Check
- [ ] Is every active experiment traceable to a node on the OST?
- [ ] Is every item on the roadmap traceable to a node on the OST?
- [ ] Are we working on exactly ONE experiment per major opportunity node at a time?

### Progress Toward Desired Outcome
- [ ] What is the current WAV metric? Are we on track for 3x?
- [ ] Which completed experiments have demonstrably moved WAV?
- [ ] What is the most important thing we could do in the next 2 weeks to move WAV?

---

*Framework based on Teresa Torres' Opportunity Solution Trees from Continuous Discovery Habits (2021). Analysis current as of March 2026.*
