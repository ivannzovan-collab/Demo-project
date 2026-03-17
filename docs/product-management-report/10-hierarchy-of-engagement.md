# Sarah Tavel's Hierarchy of Engagement: DramaSnap

## Overview

Sarah Tavel's Hierarchy of Engagement framework (Greylock Partners, 2017) argues that the most defensible consumer products are built in layers. The hierarchy has three levels:

1. **Level 1: Core Action** — Get users to do the thing the product is built for
2. **Level 2: Accruing Benefits** — As users do the core action repeatedly, they accumulate benefits that make the product more valuable to them personally
3. **Level 3: Mounting Losses** — Users accumulate assets or relationships in the product that they would lose by leaving, creating switching costs

Products that only achieve Level 1 have usage but no retention. Products that reach Level 3 have a moat.

Tavel's key insight: every design, growth, and product decision should be evaluated against this hierarchy. Does this feature help more users reach Level 1? Does it accelerate accruing benefits at Level 2? Does it add to mounting losses at Level 3?

---

## North Star Metric: Weekly Episodes Completed per Active User

**Definition:** Total episodes completed by active users in a given week divided by the number of active users that week.

**Why "completed" and not "started" or "watched":**
- Completion indicates genuine engagement, not accidental autoplay
- A completed episode generates a valid behavioral signal for the personalization engine
- Completion at the episode level is the direct antecedent to cliffhanger-driven return (the core engagement loop)

**Active user definition:** A user who has opened the app at least once in the past 7 days

**North Star Benchmark Targets:**

| Stage | WAV Target (Episodes Completed/Active User/Week) | Business Signal |
|-------|------------------------------------------------|-----------------|
| Launch | 5 episodes/week | Minimal viability; most users trying but not binging |
| Month 3 | 10 episodes/week | Early PMF signal; habitual users emerging |
| Month 6 | 15 episodes/week | Strong engagement; subscription retention >70% |
| Month 12 | 20+ episodes/week | Category-leading engagement; churn <3%/month |

**Why this is the North Star and not DAU or MAU:**
- DAU/MAU ratios tell you frequency but not depth
- Revenue per user correlates more strongly with episode completion than with session frequency
- Subscription retention (the core business metric) is most directly predicted by weekly episode completion, not raw session count

---

## Level 1: Core Action — Watching Episodes

### The Core Action

The core action on DramaSnap is **completing an episode**. Not opening the app. Not starting an episode. Completing one, experiencing the cliffhanger, and feeling the pull toward the next one.

Everything at Level 1 is designed to maximize:
1. **Activation** — New users completing their first episode
2. **Session depth** — Users completing multiple episodes per session
3. **Return frequency** — Users returning for another session within 24 hours

### The Engagement Ladder

The Level 1 engagement ladder maps the progression from first-time user to habitual viewer:

**Rung 1: The First Episode (Activation)**

*Goal: Every new user completes their first episode within their first session*

The first episode is the product's most critical moment. A user who completes episode 1 is 3x more likely to complete episode 5. A user who completes episode 5 is 5x more likely to subscribe.

Design priorities:
- Reduce time-to-first-episode below 30 seconds from app open
- Curate the first recommended series for new users (highest-rated, strongest opening hook)
- Make the first episode the best possible introduction to the format and tone
- End episode 1 with the strongest possible cliffhanger — the "oh no, what happens next?" moment must be felt

**Rung 2: The First Session (Multi-Episode)**

*Goal: Users who start watching complete 5+ episodes in their first session*

The 5-episode threshold is significant: at 5 episodes, users have been exposed to the story arc's first major complication, have started forming character attachments, and are past the "trying it out" phase into genuine investment.

Design priorities:
- Auto-advance to next episode with 3-second countdown (but skippable — never trap users)
- Episode end screen should show the next episode title and hint at what happens (not spoil, but entice)
- Progress indicator showing how far along the arc the user is ("Episode 5 of 100 — the plot is about to thicken")

**Rung 3: The Return Visit (Habit Formation)**

*Goal: Users return within 24 hours of their first session*

Habit formation in entertainment apps is typically driven by: cliffhanger anxiety, streak mechanics, and notification triggers. The 24-hour return threshold is critical because it determines whether the app becomes part of the daily routine.

Design priorities:
- Cliffhanger detection: If a user's last episode ended on a high-tension moment, trigger a "What happens next?" push notification 20 hours later
- Session completion visualization: "You finished episode 23 today — the next episode drops the biggest twist of the series."
- Morning habit design: Users who watch during morning commute should receive a notification at their typical commute time

**Rung 4: The Weekly Habit**

*Goal: Users watch on 4+ days in a given week*

Four-day weekly engagement is the threshold above which subscription churn drops dramatically (below 2% monthly for 4+ day users vs. 8%+ for 1-2 day users).

Design priorities:
- Weekly episode completion visible to users ("You've watched 18 episodes this week — your personal best!")
- Series scheduling (optional): Users can set reminders for their "DramaSnap time" (commute, lunch, before bed)
- Content scheduling: Drop new episodes of flagship series on specific days to create "must-check" behavior

**Rung 5: The Power User**

*Goal: Weekly Active Viewers who complete 20+ episodes per week*

Power users are the product's most valuable cohort: they generate the best behavioral data for personalization, they are the most likely referrers, and they have the lowest churn rate. They are also the early adopters for new features.

Design priorities:
- Power user recognition: Milestones for 100 episodes, 500 episodes, first completed series
- Early access: Power users get access to new series 24 hours before general release
- Creator proximity: Power users get access to "creator notes" and "behind the scenes" content (easily produced by AI alongside the series)

### Engagement Ladder Measurement

| Rung | Metric | Target |
|------|--------|--------|
| Rung 1: First Episode | Activation rate (first episode completion) | >60% of new installs |
| Rung 2: First Session | 5-episode session rate | >35% of activated users |
| Rung 3: Return Visit | 24-hour return rate | >45% |
| Rung 4: Weekly Habit | 4+ day weekly engagement rate | >25% of MAU |
| Rung 5: Power User | 20+ episodes/week | >10% of MAU |

---

## Level 2: Accruing Benefits

At Level 2, users accumulate benefits that make DramaSnap increasingly valuable to them personally with each session. The product gets better the more they use it. This is the key mechanism that separates a sticky product from a leaky bucket.

### Benefit 1: Personalization Accumulation

**How it accrues:** Every episode a user watches contributes data to their preference profile. The system learns:
- Which genres they complete vs. abandon
- Which narrative structures keep them watching (slow burn vs. fast pace)
- Which character archetypes they engage with most (dominant leads vs. gentle giants)
- Which story themes they rewatch or share
- What time of day they watch (correlates with mood)

**The benefit:** Recommendations become increasingly accurate. After 50 episodes, the DramaSnap feed feels curated. After 200 episodes, it feels like the app knows you.

**Making the benefit visible to users:**
- "You've watched 50 episodes — DramaSnap is getting to know your taste"
- "Recommended because you loved the slow-burn tension in [Series X]"
- "Based on your history, you prefer stories where characters overcome family opposition — here's your next series"

**Why this accrues:** A user with a 200-episode behavioral profile gets dramatically better recommendations than a new user. Starting over on a competitor means giving up that profile.

### Benefit 2: Watch History and Library

**How it accrues:** Every completed series is added to the user's watch history and library. Users can:
- Review their completed series
- Return to a favorite series for a rewatch
- See their personal ratings history
- Build a "Saved" list of series they want to watch next

**The benefit:** The library becomes a personal record of entertainment history — nostalgic, useful for recommendations to friends, and satisfying to review ("I've watched 24 series this year").

**Making the benefit visible:**
- Annual "Your DramaSnap Year" recap (similar to Spotify Wrapped) showing total episodes, favorite genres, most-watched characters
- Profile page that shows watch history and allows custom lists
- "You watched this 6 months ago — want to rewatch?" seasonal prompts

### Benefit 3: Saved Series Queue

**How it accrues:** Users who browse and save series to their watchlist accumulate a personalized queue that grows over time. The longer they use DramaSnap, the more curated their queue becomes.

**The benefit:** A user with a 20-series watchlist never experiences "I don't know what to watch." The queue itself eliminates decision paralysis.

**Design consideration:** Never let the queue feel overwhelming. Surface the top 3 recommendations from the queue at any given time, not all 20. "Your top picks from your saved list."

### Benefit 4: Social Graph and Community Standing

**How it accrues (Phase 2 — Month 6+):** As users interact with the community (comments, reactions, fan theories), they build a social presence. Followers, fan theory upvotes, "first to finish" badges, and comment history accumulate.

**The benefit:** Users who have built social connections on DramaSnap are watching with friends, even if asynchronously. The community makes episodes more meaningful — you're not just watching, you're participating in a shared cultural experience.

### Benefit 5: Co-Creator Access (Phase 3 — Year 2)

**How it accrues:** Power users who have demonstrated deep engagement earn access to co-creator features: early series previews, the ability to vote on series endings, access to creator Q&As.

**The benefit:** These users are not just consumers — they are co-owners of the DramaSnap universe. Their investment in the platform is personal and creative, not just habitual.

### Level 2 Summary

| Benefit | Begins Accruing | Full Value Realized | Transferable to Competitor? |
|---------|----------------|--------------------|-----------------------------|
| Personalization profile | After 10 episodes | After 200+ episodes | No |
| Watch history / library | After 1 series | After 10+ series | No |
| Saved series queue | After first save | After 10+ saves | No |
| Social graph | After first interaction | After 3+ months | No |
| Co-creator access | After 500 episodes | Ongoing | No |

---

## Level 3: Mounting Losses

At Level 3, users have accumulated assets or relationships in DramaSnap that they would lose by switching. Switching doesn't just mean finding another app — it means losing something valuable. This is the true moat.

### Loss 1: Series Progress

**What would be lost:** A user on episode 67 of 100 has invested significant time and emotional energy in that story. The characters feel known. The outcome is unknown and urgent. Switching to a competitor means:
- Starting over on the story arc from episode 1
- The emotional investment in the existing story is stranded
- The resolution they've been working toward (who wins? who gets together? who survives?) is permanently deferred

**Mounting loss dynamic:** The further along a user is in a series, the higher the loss. Episode 90 of 100 represents a near-total loss if abandoned.

**Design to amplify this loss:**
- Make series progress prominent and visible ("You're 67% through Forbidden Hearts")
- Show countdown to finish: "33 episodes until the ending of Forbidden Hearts"
- Remind users of their in-progress series when they haven't watched in 48 hours

### Loss 2: Personalized Feed and Taste Profile

**What would be lost:** A user who has watched 200+ episodes on DramaSnap has a rich preference profile that generates excellent recommendations. Switching to any competitor means:
- Going back to generic recommendations
- Re-educating a new system about their preferences over months
- Missing the "this was made for me" feeling that took months to develop

**This loss compounds over time** — the longer the user has been on DramaSnap, the better the personalization, and therefore the higher the cost of switching.

### Loss 3: Social Graph and Community (Phase 2)

**What would be lost:** Users who have built a social presence — followers, friends who follow their recommendations, a community where their opinion is respected — would lose this social capital by switching.

**This is the stickiest retention mechanism** for social platforms. The social graph creates an asymmetric switching cost: leaving means losing all social capital accumulated; staying means the social value compounds.

### Loss 4: Achievements and Badges

**What would be lost:** Gamification elements — episode streaks, series completion badges, "Power Viewer" status, milestone rewards — are psychological assets that disappear upon switching.

**Design principles for effective gamification in this context:**
- Achievements should feel like recognition, not manipulation
- Make achievements visible to others (the social context amplifies their value)
- Never take achievements away (no "your streak resets if you miss a day" — this is negative reinforcement)

### Loss 5: Exclusive Unlocked Content

**What would be lost:** Long-term subscribers who have unlocked special content — extended episodes, alternate endings, creator commentary, early access series — would lose access to this content by switching.

**Design consideration:** Exclusive content should feel like a reward for loyalty, not a paywall. The distinction matters to how users feel about the relationship with the platform.

---

## Retention Mechanics Summary Table

| Mechanic | Level | Type | Strength | Implementation Stage |
|---------|-------|------|---------|---------------------|
| Episode cliffhangers | L1 | Pull | Very High | Launch |
| Auto-advance | L1 | Pull | High | Launch |
| Push notification (cliffhanger) | L1 | Pull | High | Launch |
| Watch streak | L1/L2 | Pull + Loss | Medium | Launch |
| Personalization algorithm | L2 | Accruing benefit | Very High | Month 3 |
| Watch history and library | L2 | Accruing benefit | Medium | Launch |
| Saved series queue | L2 | Accruing benefit | Medium | Launch |
| Social graph | L2/L3 | Accruing + Loss | Very High | Month 6 |
| Personalization profile loss | L3 | Mounting loss | Very High | Month 3 |
| Series progress loss | L3 | Mounting loss | High | Launch |
| Achievements and badges | L3 | Mounting loss | Medium | Month 3 |
| Exclusive content unlocks | L3 | Mounting loss | Medium | Month 6 |
| Co-creator access | L2/L3 | Accruing + Loss | High | Year 2 |

---

## Design Principles for Hierarchy of Engagement

**Principle 1: Level 1 First, Always**

No amount of Level 2 or Level 3 mechanics will save a product where the core action (watching an episode) isn't compelling. Before investing in gamification or social features, ensure that the episode experience itself is deeply satisfying.

**Principle 2: Make Accruing Benefits Visible**

Users need to *see* that DramaSnap is getting more valuable. "DramaSnap has learned 47 things about your taste" is a concrete signal that the product is working for the user. Invisible benefits don't accrue psychologically.

**Principle 3: Never Punish Non-Use**

Retention mechanics should be about value accumulation, not punishment for absence. Streak mechanics that reset on a missed day feel punitive. Use "here's what you've built" framing, not "you'll lose this if you stop."

**Principle 4: Social Features Multiply All Three Levels**

Social mechanics make the core action (watching) more rewarding (friends are watching too), accelerate accruing benefits (social profile grows), and deepen mounting losses (social graph is the ultimate switching cost). Invest in social features earlier than instincts suggest.

---

*Framework based on Sarah Tavel's Hierarchy of Engagement (Greylock Partners, 2017). Analysis current as of March 2026.*
