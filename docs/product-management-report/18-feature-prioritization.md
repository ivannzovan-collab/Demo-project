# Feature Prioritization — RICE Framework Analysis

**Framework:** RICE (Reach × Impact × Confidence ÷ Effort)
**Date:** March 17, 2026
**Author:** Product Team

---

## Overview

RICE scoring provides a structured, defensible method for ranking features against a shared prioritization metric. It reduces the influence of the loudest voice in the room and surfaces features that maximize value per unit of engineering effort.

**Scoring definitions:**
- **Reach:** Number of users impacted per quarter (estimated users who would use this feature)
- **Impact:** Effect on core metric per user who engages (scale: 0.25 = minimal, 0.5 = low, 1 = medium, 2 = high, 3 = massive)
- **Confidence:** Team's certainty in reach and impact estimates (scale: 0–100%)
- **Effort:** Engineering weeks required (cross-functional team: 1 designer + 2 RN engineers + 1 backend engineer)

**RICE Score formula:** `(Reach × Impact × Confidence) / Effort`

**Core metric optimized:** Monthly Active Users who complete ≥ 5 episodes (Engaged Monthly Active Users — EMAU)

---

## RICE Scoring Table

| # | Feature | Reach | Impact | Confidence | Effort (weeks) | RICE Score |
|---|---|---|---|---|---|---|
| 1 | Personalized Recommendations | 85,000 | 3 | 95% | ~0.85 | **286,647** |
| 2 | Social Sharing | 60,000 | 2 | 75% | ~0.50 | **180,000** |
| 3 | Achievement Badges | 50,000 | 1 | 80% | ~0.33 | **120,000** |
| 4 | Offline Downloads | 60,000 | 3 | 75% | ~1.25 | **108,000** |
| 5 | Live Comments | 35,000 | 2 | 75% | ~0.50 | **105,000** |
| 6 | Multi-Language Dubbing | 70,000 | 2 | 60% | ~1.00 | **84,000** |
| 7 | Gift / Tipping | 20,000 | 2 | 80% | ~0.40 | **80,000** |
| 8 | Interactive Storylines | 30,000 | 3 | 30% | ~1.00 | **27,000** |
| 9 | Watch Parties | 15,000 | 2 | 55% | ~1.00 | **16,500** |
| 10 | Creator Tools | 5,000 | 3 | 30% | ~0.35 | **12,857** |

*Note: RICE scores are relative, not absolute. Small differences are noise; order-of-magnitude differences are signal.*

---

## Detailed Feature Breakdown

### Feature 1: Personalized Recommendations
**RICE Score: 286,647** | **Priority: P0**

| Parameter | Value | Rationale |
|---|---|---|
| Reach | 85,000 | ~100% of active users interact with the home feed; all users see recommendations |
| Impact | 3 (Massive) | Recommendations are the primary discovery mechanism; quality directly drives episode starts and retention |
| Confidence | 95% | Netflix and Spotify data conclusively shows personalization drives 3–5x engagement lift |
| Effort | ~3 weeks | Collaborative filtering model using viewing history, ratings, and genre signals; existing ML infrastructure can be leveraged |

**What this feature does:** Uses viewing history, ratings, watch time, and genre preferences to surface the most relevant drama series for each user on the home screen, replacing the editorial-only "Top Dramas" list.

**Why the impact is massive:**
- Discovery is the primary retention driver for content platforms — if users can't find something to watch, they leave
- Current state: home screen shows same editorial list to all users; users with 10+ episodes watched still see beginner content
- Expected improvement: episode start rate from home screen increases from 32% to 55–65% based on comparable platforms

**Key risks:**
- Cold start problem (new users have no history) — mitigated by genre selection at onboarding
- Filter bubble (users only see one genre) — mitigated by intentional diversity injection (30% outside primary genre)
- Model quality plateau — requires continuous retraining as content library grows

**Definition of done:** Recommendation model serves personalized content to ≥ 80% of returning users; home screen episode start rate improves ≥ 15% in A/B test.

---

### Feature 2: Social Sharing
**RICE Score: 180,000** | **Priority: P0**

| Parameter | Value | Rationale |
|---|---|---|
| Reach | 60,000 | ~70% of active users, based on social sharing benchmarks in entertainment apps |
| Impact | 2 (High) | Social sharing drives both engagement (social reward) and acquisition (viral loops) |
| Confidence | 75% | Strong evidence from TikTok/Instagram that short-form drama clips are highly shareable |
| Effort | ~1 week | Share card generation (auto-clip from episode highlight) + platform SDK integrations |

**What this feature does:** Generates shareable vertical video clips from episode highlights with DramaSnap branding overlay. Users can share to Instagram Reels, TikTok, WhatsApp, and iMessage.

**Why high confidence:** Short-form vertical drama is already a proven viral format on TikTok. DramaSnap's native 60-second episodes are already sized for social sharing with minimal editing.

**Growth loop enabled:**
```
User shares episode clip
→ Contact sees clip on Instagram/TikTok
→ Contact clicks link in bio/story
→ Contact installs DramaSnap
→ Contact watches shared episode + subscribes
→ Contact shares to their network
```

**Definition of done:** Share button present on episode end screen; auto-generated clip created within 10 seconds; share card includes DramaSnap download link; sharing event tracked in analytics.

---

### Feature 3: Achievement Badges
**RICE Score: 120,000** | **Priority: P1**

| Parameter | Value | Rationale |
|---|---|---|
| Reach | 50,000 | ~60% of active users — gamification appeals to completionist and competitive users |
| Impact | 1 (Medium) | Reinforces retention and investment behaviors; not a primary acquisition driver |
| Confidence | 80% | Gamification benchmarks from Duolingo (streaks) and fitness apps show 15–25% retention lift for badge earners |
| Effort | ~1 week | Badge engine with trigger conditions; profile display; notification on earn |

**Badge system design:**

| Badge Category | Examples | Trigger |
|---|---|---|
| Completion | "First Steps" (1 episode), "Binge Machine" (10 in a day) | Episode count milestones |
| Series | "Devoted Fan" (series completion), "Drama Queen/King" (5 series complete) | Series completion |
| Streak | "7-Day Warrior", "30-Day Devotee", "Century Club" | Consecutive day streaks |
| Social | "Trendsetter" (share that drives 10+ installs), "Critic's Choice" (50 ratings) | Social action milestones |
| Discovery | "Hidden Gem Hunter" (watch series with < 5K views before 10K), "Early Adopter" | Discovery behaviors |

**Why medium impact:** Badges improve retention for users who earn them, but their presence doesn't drive acquisition. They deepen existing engagement rather than creating new engagement.

---

### Feature 4: Offline Downloads
**RICE Score: 108,000** | **Priority: P1**

| Parameter | Value | Rationale |
|---|---|---|
| Reach | 60,000 | ~70% of users — commuting context is primary use case; offline access removes a major barrier |
| Impact | 3 (Massive) | For commute-focused users, offline access is the difference between using the app 5 days/week vs. 0 |
| Confidence | 75% | Netflix data: users who download have 2–3x higher retention; DramaSnap commute use case is similar |
| Effort | ~5 weeks | Content encryption/DRM, download queue management, storage management UI, expiry logic (24–48hr) |

**Why effort is high:** DRM implementation is technically complex. Downloaded content must be encrypted, time-limited (expire after 48 hours to prevent piracy), and storage-managed (prevent users from filling phone storage). Background download queue with progress UI adds additional complexity.

**Segmentation note:** This feature disproportionately benefits Binge Enthusiasts in commute-heavy markets (New York, Tokyo, London, Mumbai). International markets with variable connectivity also benefit enormously.

**Gate to Blaze tier:** Downloads as a paid-tier-exclusive feature adds meaningful value to the $9.99 Blaze subscription. The upgrade message "Watch anywhere, even offline" is compelling for commute users.

---

### Feature 5: Live Comments
**RICE Score: 105,000** | **Priority: P1**

| Parameter | Value | Rationale |
|---|---|---|
| Reach | 35,000 | ~40% of active users — social engagement features have lower reach than content features |
| Impact | 2 (High) | Community features drive powerful habit loops (social investment → return for social reward) |
| Confidence | 75% | Bilibili (Chinese streaming) data shows live comments increase watch time 30–40%; applies to drama context |
| Effort | ~1 week | Overlay comment system on episode player; moderation pipeline; rate limiting |

**What this feature does:** Allows users to post short reactions that appear as floating text over the episode video, timed to the moment in the episode they were posted (Danmaku-style, popularized by Bilibili and NicoNico).

**Why this creates powerful social bonds:**
- Users feel they are "watching together" even asynchronously
- Comments at plot twist moments create shared emotional experiences
- High-engagement episodes generate hundreds of comments that make re-watches more rewarding

**Moderation requirements:** Live comments require investment in moderation (both automated and human) to prevent abuse. Pre-launch: word filter + report system. Post-scale: ML-assisted moderation.

---

### Feature 6: Multi-Language Dubbing
**RICE Score: 84,000** | **Priority: P1**

| Parameter | Value | Rationale |
|---|---|---|
| Reach | 70,000 | Very high reach — 80% of global entertainment consumers prefer content in their native language |
| Impact | 2 (High) | For non-English speakers, language is a go/no-go decision, not a nice-to-have |
| Confidence | 60% | ElevenLabs dubbing quality in non-English languages not yet validated for drama context |
| Effort | ~4 weeks | Dubbing pipeline using ElevenLabs (already integrated for English); QA process; language detection |

**Why confidence is only 60%:** AI-generated dubbing quality in languages other than English is variable. Dramatic dialogue requires emotional nuance that current TTS models handle inconsistently in tonal languages (Mandarin, Japanese) and languages with complex morphology (Arabic, Hindi). Quality validation is required before launch.

**Priority languages by market opportunity:**

| Language | Target Market | DAU Potential | Dubbing Difficulty |
|---|---|---|---|
| Spanish (Latin America) | Mexico, Colombia, Argentina | High | Low (Latin romance languages well-supported) |
| Portuguese | Brazil | High | Low |
| Hindi | India | Very High | Medium |
| Indonesian | Indonesia | High | Medium |
| Japanese | Japan | Medium | High (tonal/cultural nuance) |

---

### Feature 7: Gift / Tipping
**RICE Score: 80,000** | **Priority: P2**

| Parameter | Value | Rationale |
|---|---|---|
| Reach | 20,000 | ~25% of active users — tipping/gifting behavior is concentrated in Superfan segment |
| Impact | 2 (High) | High ARPU impact on the users who engage; also creates social gifting viral loops |
| Confidence | 80% | Strong evidence from live streaming (Twitch, TikTok Live) that virtual gifting generates 30–40% of platform revenue from < 5% of users |
| Effort | ~2 weeks | Virtual coin purchase flow; gift sending UI; creator/series gift receipt display; payment processing |

**Gifting mechanics:**
- Users purchase "DramaCoins" (IAP in $1.99 / $4.99 / $9.99 / $19.99 denominations)
- Send "episode gifts" to specific series/creators (DramaCoins converted to visual effects visible to all viewers)
- Gift subscriptions (gift Blaze or Inferno tier to contacts)
- Creator revenue share from coins (planned for Phase 2 when human-assisted creator tools exist)

**Why P2 (not P1):** This feature requires a functioning Superfan community and mature content library before tipping becomes meaningful. Launching too early risks low utilization and poor ROI on engineering effort.

---

### Feature 8: Interactive Storylines
**RICE Score: 27,000** | **Priority: P3**

| Parameter | Value | Rationale |
|---|---|---|
| Reach | 30,000 | ~35% of active users would engage with interactive elements |
| Impact | 3 (Massive) | Differentiated product; if executed well, creates unparalleled engagement |
| Confidence | 30% | Netflix Interactive (Bandersnatch) had mixed reception; AI generation of branching narratives is untested at scale; massive production complexity |
| Effort | ~30 weeks | Branching narrative authoring system; conditional episode rendering; AI script generation for multiple branches; playback state management |

**Why the score is low despite high reach and impact:** The confidence is 30% because the execution complexity is enormous. Branching narratives require exponentially more content (2^N episodes for N decision points), AI quality must be maintained across all branches, and user comprehension of branching must be designed carefully. This is a Phase 3 differentiator, not an MVP feature.

**Path to higher confidence:** Run a 1-episode "choice" experiment (single branch point, two outcomes) with 10,000 users. If engagement and completion metrics improve meaningfully, invest in full implementation.

---

### Feature 9: Watch Parties
**RICE Score: 16,500** | **Priority: P3**

| Parameter | Value | Rationale |
|---|---|---|
| Reach | 15,000 | ~18% of active users — synchronized social viewing is a niche behavior |
| Impact | 2 (High) | High engagement for users who use it; strong retention for the social cluster |
| Confidence | 55% | Mixed evidence from Netflix Party / Teleparty — active users but not mainstream behavior |
| Effort | ~4 weeks | Real-time synchronization engine, WebSocket architecture, shared chat, invite system |

**Why P3:** Watch parties require solving hard real-time synchronization challenges across mobile networks with variable latency. The feature also requires a critical mass of users to be worthwhile (you need someone to watch with). Launch after social graph is established.

---

### Feature 10: Creator Tools
**RICE Score: 12,857** | **Priority: P3**

| Parameter | Value | Rationale |
|---|---|---|
| Reach | 5,000 | Small initial creator/power-user segment |
| Impact | 3 (Massive) | If creator tools work, enables user-generated drama content → content flywheel |
| Confidence | 30% | UGC drama creation is a completely new behavior; unclear if users want to create vs. consume |
| Effort | ~14 weeks | Script editor, AI generation interface, review/publishing pipeline, creator profile system |

**Why P3 despite massive impact:** The confidence is 30% because enabling users to create professional-quality drama content involves solving hard UX problems (script writing, actor selection, scene direction). Current AI video generation quality also requires careful curation — uncurated UGC may degrade platform content quality. This is a long-term strategic bet that requires its own dedicated exploration phase.

---

## Priority Ranking Summary

| Rank | Feature | RICE Score | Priority Tier | Quarter |
|---|---|---|---|---|
| 1 | Personalized Recommendations | 286,647 | P0 | Q2 2026 |
| 2 | Social Sharing | 180,000 | P0 | Q2 2026 |
| 3 | Achievement Badges | 120,000 | P1 | Q2 2026 |
| 4 | Offline Downloads | 108,000 | P1 | Q3 2026 |
| 5 | Live Comments | 105,000 | P1 | Q3 2026 |
| 6 | Multi-Language Dubbing | 84,000 | P1 | Q3 2026 |
| 7 | Gift / Tipping | 80,000 | P2 | Q4 2026 |
| 8 | Interactive Storylines | 27,000 | P3 | Q1 2027 |
| 9 | Watch Parties | 16,500 | P3 | Q1 2027 |
| 10 | Creator Tools | 12,857 | P3 | Q2 2027 |

---

## Three-Phase Roadmap

### Phase 1: Engagement Foundation (Q2 2026 — Weeks 1–8)

**Theme:** Get users to their "aha moment" faster and reward them for returning.

**Features shipping:**
1. **Personalized Recommendations** (Weeks 1–3)
   - Deploy collaborative filtering model on home screen
   - A/B test against editorial baseline
   - Success: home screen episode start rate ≥ 50%

2. **Social Sharing** (Weeks 2–3, parallel with Recommendations)
   - Launch share card generation and social platform integrations
   - Track viral coefficient (K-factor)
   - Success: ≥ 15% of users share at least once in first 30 days

3. **Achievement Badges** (Weeks 4–5)
   - Launch badge engine with 15 initial badges
   - Profile badge display
   - Success: ≥ 40% of active users earn at least 1 badge in first 30 days

**Phase 1 OKR:**
- D7 retention ≥ 25% (baseline: 18%)
- Episodes/session ≥ 5.5 (baseline: 4.2)
- Viral K-factor ≥ 0.3

---

### Phase 2: Depth and Scale (Q3 2026 — Weeks 9–20)

**Theme:** Serve international audiences and enable binging behaviors that drive subscription conversion.

**Features shipping:**
4. **Offline Downloads** (Weeks 9–13)
   - Implement DRM and download queue
   - Gate to Blaze tier
   - Success: Blaze conversion rate increases ≥ 20% in markets with long commutes

5. **Live Comments** (Weeks 10–12, parallel)
   - Launch Danmaku comment overlay on all episodes
   - Moderation pipeline in place
   - Success: ≥ 30% of Blaze users engage with live comments monthly

6. **Multi-Language Dubbing** (Weeks 13–20)
   - Phase A: Spanish and Portuguese (lower dubbing complexity)
   - Phase B: Hindi and Indonesian (pending quality validation)
   - Success: New user acquisition from target language markets increases ≥ 40%

**Phase 2 OKR:**
- Blaze subscription conversion rate ≥ 5.5% (baseline: 3.2%)
- International MAU ≥ 30% of total MAU (baseline: estimated 15%)
- Comment engagement rate ≥ 25% of episode completions

---

### Phase 3: Monetization and Platform (Q4 2026 – Q1 2027)

**Theme:** Unlock superfan monetization and begin platform expansion.

**Features shipping:**
7. **Gift / Tipping** (Q4 2026)
   - Virtual coin purchase and gifting mechanics
   - Inferno tier integration (500 coins/month included)
   - Success: Superfan segment ARPU ≥ $35/month (subscription + coins)

8. **Interactive Storylines** (Q4 2026 pilot, Q1 2027 launch)
   - Single branch-point experiment with 10,000 users
   - Full interactive series if pilot validates
   - Success: Interactive episode completion rate ≥ 90% (vs. 85% linear baseline)

9. **Watch Parties** (Q1 2027)
   - Synchronized viewing for groups of 2–8 users
   - Success: Watch party users have ≥ 40% higher D30 retention

10. **Creator Tools** (Q2 2027, pending Phase 3 validation)
    - Begins with "assisted creation" — users guide AI generation with simple prompts
    - Full creator toolchain if adoption validates

---

## Assumptions to Validate

The following assumptions are embedded in RICE scores and must be validated before committing to Phase 2 and Phase 3 investments:

| # | Assumption | Feature Affected | Validation Method | Deadline |
|---|---|---|---|---|
| 1 | Personalization model accuracy improves engagement by ≥ 15% | Recommendations (#1) | A/B test in Phase 1 | Week 5 |
| 2 | Short-form drama clips are shareable on Instagram/TikTok (format fit) | Social Sharing (#2) | 2-week social sharing pilot with 1,000 users | Week 4 |
| 3 | Commute use case is significant enough to justify DRM investment | Offline Downloads (#4) | Survey: "Where do you primarily watch DramaSnap?" | Week 3 |
| 4 | AI dubbing quality in Spanish/Portuguese meets user acceptance threshold | Multi-Language Dubbing (#6) | Quality rating survey in target markets | Week 8 |
| 5 | Tipping behavior exists in DramaSnap's user base (not just live streaming) | Gift/Tipping (#7) | User interview series with 20 Superfan users | Week 6 |
| 6 | Users want to "watch with friends" synchronously on mobile | Watch Parties (#9) | Jobs-to-be-done interviews | Week 10 |
| 7 | Interactive storylines increase engagement (not just novelty) | Interactive Storylines (#8) | Single branch-point experiment | Week 16 |
| 8 | Non-professional creators can produce watchable drama content with AI assistance | Creator Tools (#10) | Closed beta with 50 power users | Q4 2026 |

---

## RICE Score Sensitivity Analysis

RICE scores are estimates built on assumptions. Key sensitivities:

| Feature | Score Driver | If assumption wrong | Score impact |
|---|---|---|---|
| Personalized Recommendations | 95% confidence | Confidence drops to 60% | Score falls to 180,000 (still #1) |
| Social Sharing | 75% confidence in viral effectiveness | K-factor < 0.1 | Score falls to ~54,000 (falls to #5) |
| Multi-Language Dubbing | 70,000 reach (international) | International installs < 20% of user base | Score falls to ~24,000 (falls to #9) |
| Interactive Storylines | 30% confidence | Confidence rises to 70% | Score rises to 63,000 (rises to #6 — triggers acceleration) |

**Guidance:** Re-run RICE scoring at the start of each quarter as assumption validations complete. Scores are inputs to a conversation, not substitutes for it.

---

*Feature prioritization is a living process. This framework provides a structured starting point, not a final answer. Revisit scores as user research, A/B test data, and market conditions evolve.*
