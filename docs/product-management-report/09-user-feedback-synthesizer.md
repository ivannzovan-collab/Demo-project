# User Feedback Synthesis Framework: DramaSnap

## Overview

Collecting user feedback is not the challenge. The challenge is making sense of hundreds of data points from different sources, at different cadences, with different biases — and translating them into clear product decisions. This framework defines how DramaSnap collects, tags, synthesizes, and acts on user feedback continuously.

The goal is a system that surfaces the right signal, in the right form, at the right time — not a feedback graveyard where insights go to die.

---

## Part 1: Collection Framework

### Channel 1: In-App Feedback

**Micro-Survey (Post-Episode)**

Triggered after every 10th episode per user (not after every episode — feedback fatigue is real).

- **Question 1:** "How was that episode?" (Thumbs up/down, 2 taps)
- **Question 2 (if thumbs down):** "What was the issue?" (Multiple choice: too short, story doesn't make sense, visual quality, audio quality, boring)
- **Question 3 (monthly, rotating):** One open-ended question from the PMF survey rotation

**Implementation notes:**
- Modal should appear at natural pause point (after credits) not mid-episode
- Users can dismiss with one tap and never be asked about that episode again
- Maximum frequency: once per session; never interrupt consecutive episode watching

**In-App Feedback Button**

- Persistent "?" icon in the Settings menu and in the player during episode (subtle, not distracting)
- Categories: Bug report, Content quality issue, Missing feature, Other
- All submissions tagged with: user ID, device type, app version, current screen, and timestamp

**NPS Survey (Quarterly)**

Triggered at 90-day intervals for active users (10+ episodes in the past 30 days).

Standard 0–10 scale + one open-ended: "What's the most important reason for your score?"

---

### Channel 2: App Store Reviews

**iOS App Store and Google Play**

- **Volume:** Monitor daily; prioritize reviews of 1–2 stars (problems) and 5 stars (strengths to amplify)
- **Tagging:** Every review tagged with primary theme (see taxonomy below)
- **Response protocol:**
  - 1-star reviews: Human response within 24 hours
  - 2-star reviews: Human response within 48 hours
  - 3–5 star reviews: Automated response template with personalized element

**Review Monitoring Tool:** Use Appbot, AppFollow, or similar automated monitoring to track volume, sentiment trend, and keyword frequency.

**Alert triggers:**
- 1-star review volume increases >20% week-over-week → escalate to PM immediately
- Average rating drops below 4.0 → P0 alert; trigger root cause analysis

---

### Channel 3: Social Media and Community

**Platforms to Monitor:**

| Platform | Volume | Sentiment Type | Monitoring Method |
|----------|--------|----------------|-------------------|
| TikTok (hashtag #DramaSnap) | High | Organic, unfiltered | Automated keyword monitoring |
| Reddit (r/DramaSnap + r/ShortDrama) | Medium | Detailed, analytical | Manual weekly review + keyword alerts |
| Twitter/X | Medium | Reactive, real-time | Automated monitoring |
| Instagram comments | Medium | Brief, emoji-heavy | Sample review weekly |
| Discord (DramaSnap community server) | Medium | Deep, community-driven | Community manager daily review |

**What to Look For:**
- Unprompted praise ("this app is so addictive")
- Specific feature requests with community upvoting ("I wish you could share clips")
- Competitive comparisons ("DramaSnap is so much better than ReelShort because...")
- Complaints that didn't become formal feedback ("the AI faces still look a little weird")

---

### Channel 4: Customer Support

**Support Channels:** In-app chat (primary), email (secondary)

**Ticket Categories (to enforce at intake):**
- Technical issue (app crashes, playback errors)
- Billing/subscription (charges, cancellations, refunds)
- Content issue (specific episode problem, quality complaint)
- Account issue (login, profile, data)
- Feature request
- General feedback / complaint

**Synthesis Responsibility:**
- Customer support team tags and closes tickets
- Weekly report sent to PM and product team: top 5 ticket categories by volume, top 5 specific issues, any new complaint patterns not previously documented

**Escalation Rule:** Any ticket category that grows >30% week-over-week is escalated to PM within 24 hours.

---

### Channel 5: User Interviews and Research Sessions

**Cadence:** Minimum 4 user interviews per month; 8+ during active discovery phases

**Interview Types:**

| Type | Description | Cadence |
|------|-------------|---------|
| New user onboarding interview | First 14 days after signup; understand first impressions | Ongoing (recruit weekly) |
| Churned user exit interview | Users who cancelled; understand failure reasons | Ongoing (within 7 days of cancellation) |
| Power user deep dive | High-engagement users (daily viewers); understand what they love | Monthly |
| Persona segment interview | Target specific demographics (commuters, parents, etc.) | Quarterly per segment |

**Incentive:** $20–$25 Amazon gift card for 45-minute interview; $10 for 20-minute quick call

**Interview guide note:** Use the JTBD interview guide from the JTBD document as the base structure.

---

## Part 2: Synthesis Method

### Tagging Taxonomy

All feedback from all channels is tagged with a standardized taxonomy. This enables cross-channel analysis (e.g., "content quality complaints from app store reviews + social media + support tickets = a pattern requiring action").

**Level 1: Theme Category (required)**

| Tag | Description |
|-----|-------------|
| CONTENT_QUALITY | Feedback about episode quality (visual, audio, script) |
| PERSONALIZATION | Feedback about recommendation or content tailoring |
| UX_NAVIGATION | Feedback about how easy it is to use the app |
| PRICING_VALUE | Feedback about cost, subscription, or value perception |
| CONTENT_VARIETY | Feedback about genre, catalog breadth, or specific content requests |
| TECHNICAL | Bug reports, crashes, playback issues |
| ENGAGEMENT | Feedback about habit, addiction, binge behavior |
| SOCIAL_SHARING | Feedback about sharing content with others |
| CREATOR_TOOLS | Feedback about creator features (future) |

**Level 2: Sentiment (required)**
- POSITIVE: Praise, satisfaction, delight
- NEGATIVE: Complaint, frustration, dissatisfaction
- NEUTRAL: Suggestion, question, observation

**Level 3: Specificity (required)**
- SPECIFIC: Refers to a specific feature, episode, or interaction
- GENERAL: General impression without specific reference

**Level 4: User Segment (when known)**
- POWER_USER (10+ sessions/week)
- CASUAL_USER (1–3 sessions/week)
- NEW_USER (<30 days)
- CHURNED
- UNKNOWN

---

### Affinity Mapping Process

**Weekly Affinity Mapping Session (45 minutes, PM + 1 researcher)**

1. Pull all tagged feedback from the past 7 days from all channels
2. Group similar feedback into affinity clusters
3. Name each cluster with a user-centric problem statement
4. Count volume in each cluster (number of distinct feedback instances)
5. Note any clusters that are growing vs. shrinking week-over-week
6. Identify top 3 clusters for the week: the most important problems users are experiencing

**Affinity Map Template:**

```
CLUSTER: [Problem Statement]
Volume this week: [N]
Volume last week: [N]
Trend: Growing / Stable / Declining
Source channels: [App Store / In-App / Social / Support / Interviews]
Representative quote: "[exact quote from a user]"
Proposed action: [specific product or content action]
Owner: [PM / Engineering / Content / Design]
```

---

### Pattern Identification Framework

A pattern is confirmed when a feedback theme appears in:
- 3+ distinct channels OR
- >5% of total feedback volume in a week OR
- Sustained for 3+ consecutive weeks

Patterns are escalated to the product roadmap discussion as evidence points (not as instant roadmap items — feedback is input, not specification).

**Pattern Escalation Levels:**

| Level | Criteria | Action |
|-------|----------|--------|
| Signal | Appears in 1 channel, <5% volume | Log and monitor |
| Trend | Appears in 2+ channels OR >5% volume | Include in weekly report; flag for investigation |
| Pattern | Appears in 3+ channels OR >10% volume for 3+ weeks | Escalate to roadmap discussion; requires PM investigation |
| Crisis | >20% of all feedback, 1-star reviews increasing, churn spiking | P0 escalation; executive briefing within 24 hours |

---

## Part 3: Sample Synthesis

### Week of [Date]: Sample Feedback Synthesis Report

*This is an illustrative sample showing the synthesizer in action.*

**Data inputs this week:**
- 312 app store reviews (iOS: 187, Android: 125)
- 847 post-episode thumbs down responses with category selection
- 43 in-app feedback form submissions
- 2,340 social media mentions scanned; 156 manually reviewed
- 94 support tickets
- 3 user interviews

**Total feedback instances analyzed: 3,495**

---

### Theme 1: Content Quality Concerns

**Volume:** 28% of all feedback (highest volume theme)
**Trend:** Stable (was 30% last week)
**Sentiment:** 90% Negative

**Pattern Description:** Users report that AI-generated faces look "off" or "uncanny" in close-up shots. This is appearing in app store reviews (1–2 star), social media comments, and support tickets. The specific complaint is about facial expressions during emotional scenes — the AI appears to generate stiff or unnatural facial movement.

**Representative Quotes:**
- "The story is great but the faces during emotional scenes look dead. Like they're not really feeling anything." — App Store review, 2 stars
- "Why do the eyes look like that? It's really distracting. Fix the face AI please." — Twitter comment
- "I love the plot but the acting (if you can call it that) is weird. The faces don't match what the characters are supposed to be feeling." — Reddit comment

**Proposed Action:**
- Short-term: Apply post-processing filter to close-up face shots to reduce artifact visibility
- Medium-term: Evaluate Runway vs. competing video generation models for emotional facial expression quality; A/B test on new series
- Long-term: Invest in a proprietary face-expression fine-tuning capability

**Owner:** Head of AI Production
**Priority:** High (affects 28% of feedback volume; directly impacts content quality score in PMF survey)

---

### Theme 2: Positive Engagement and Binge Satisfaction

**Volume:** 22% of all feedback
**Trend:** Growing (was 18% last week)
**Sentiment:** 100% Positive

**Pattern Description:** Users are expressing strong binge satisfaction — specifically, the "one more episode" mechanic combined with the cliffhanger format is generating enthusiastic organic sharing. Multiple users mention sharing the app with friends spontaneously.

**Representative Quotes:**
- "I finished 30 episodes in one sitting. My dinner got cold. Worth it." — App Store review, 5 stars
- "I'm obsessed. I've told everyone in my office about this app." — In-app feedback
- "The cliffhangers are genuinely stressful in the best way. I can't stop watching." — Reddit comment
- "This is the first app I've recommended to my mom in years and she's already on episode 50." — Interview participant

**Proposed Action:**
- Amplify: Use specific quotes in marketing materials (with permission)
- Series design: Analyze episode structure of highest-rated series; extract cliffhanger patterns for content guidelines
- Growth: Design "share your binge" social mechanic around multi-episode session completions

**Owner:** Marketing + Content
**Priority:** Amplify — this is the core value proposition working as intended

---

### Theme 3: Pricing Confusion

**Volume:** 15% of all feedback
**Trend:** Declining (was 22% three weeks ago; declining since FAQ was updated)
**Sentiment:** 85% Negative, 15% Neutral

**Pattern Description:** Users are confused about what the free tier includes vs. Premium. Specifically, users are unclear about whether specific series are free or Premium-only, and some report feeling surprised by a paywall after starting a series.

**Representative Quotes:**
- "I started watching a great series and then 20 episodes in it's suddenly asking me to subscribe. That felt like a bait and switch." — App Store review, 2 stars
- "Not clear which shows are free. I have to click on something to find out if I need to pay. Annoying." — In-app feedback
- "Why does the app not tell me upfront which series I can access without paying?" — Support ticket

**Proposed Action:**
- Immediate: Add Premium/Free badge to every series card in browse view
- Short-term: Show "you'll need Premium for this series" before investing in a series description, not after clicking play
- Medium-term: Redesign free tier to include at least the first 20 episodes of every series (reduces surprise friction)

**Owner:** Product Design
**Priority:** High (pricing friction is a top conversion blocker; declining trend suggests in-progress fix is working but needs to go further)

---

### Theme 4: Feature Requests — Social Sharing

**Volume:** 12% of all feedback
**Trend:** Growing (was 8% last week)
**Sentiment:** 100% Neutral-Positive (requests, not complaints)

**Pattern Description:** Users want to share specific episodes or clips with friends. Multiple users describe scenarios where they want to send a friend a specific moment ("you have to see this cliffhanger") but cannot do so natively in the app.

**Representative Quotes:**
- "I need a way to send my best friend the ending of episode 43 of Forbidden Hearts. She needs to see it." — App Store review, 4 stars
- "Please add clip sharing. I've been posting screenshots but it's not the same." — Twitter
- "If I could share a 15-second clip of the most dramatic moments, this app would go viral." — Reddit

**Proposed Action:**
- Validate against existing backlog: Clip sharing experiment is already planned (Experiment 4 in OST document)
- Accelerate: Growing volume of this request (from 8% to 12% in one week) is additional evidence to prioritize
- Design: Show specific quotes to design team as input for clip-sharing UI design

**Owner:** Growth Team
**Priority:** Medium-High (significant growth potential; already in roadmap but can accelerate)

---

### Theme 5: Technical Issues — Offline Download Bugs

**Volume:** 8% of all feedback
**Trend:** Stable
**Sentiment:** 100% Negative

**Pattern Description:** A subset of users report that offline downloads fail or expire unexpectedly, often citing the experience of getting on a flight or subway and discovering their downloaded episodes are gone.

**Representative Quotes:**
- "Downloaded 20 episodes for my flight. Got on the plane, opened the app, nothing was there. I was on the plane for 5 hours with nothing to watch." — App Store review, 1 star
- "Downloads keep disappearing. I'm on the 3.2.1 version. Is this a bug?" — Support ticket
- "My downloaded shows expired after 2 days. I thought they lasted 30 days?" — In-app feedback

**Proposed Action:**
- Immediate: Bug triage — investigate download expiry on version 3.2.1 specifically; appears version-specific
- Short-term: Add a "download expires in X days" indicator to downloaded content
- Communication: Update FAQ and in-app help text to clarify 30-day download expiry rules

**Owner:** Engineering (iOS and Android)
**Priority:** High (1-star reviews; travel use case is a key product scenario; version-specific suggests fixable bug)

---

## Part 4: Feedback-to-Action Pipeline

The feedback-to-action pipeline ensures that insights reach the right decision-makers and drive concrete actions — not just slide decks.

### Stage 1: Collect (Continuous)

All feedback collected continuously across all channels. Support team tags tickets. Monitoring tools flag app store review anomalies. Social media mentions aggregated daily.

**Owner:** Customer Support + Community Manager

---

### Stage 2: Tag (Daily)

All feedback instances from the previous 24 hours tagged using the taxonomy. Support tickets tagged at intake. App store reviews tagged by automated tool + human spot-check.

**Owner:** PM Coordinator or Junior PM

**Time commitment:** 30 minutes/day

---

### Stage 3: Synthesize (Weekly)

Weekly affinity mapping session. All feedback from the past 7 days grouped into clusters. Top 5 themes identified. Report drafted.

**Owner:** Product Manager

**Time commitment:** 45-minute session (Wednesday)

---

### Stage 4: Prioritize (Weekly)

Synthesized themes reviewed against current roadmap. Decisions:
- Does this change priority of any item already in the roadmap?
- Does this add a new item to the backlog?
- Does this require immediate P0 response?
- Does this validate or invalidate a current assumption?

**Owner:** PM + Engineering Lead

**Time commitment:** 30-minute slot in weekly product review (Thursday)

---

### Stage 5: Act (Sprint cycle)

Approved actions from the prioritization review are added to the sprint backlog. Large themes that require investigation (not immediate action) are scheduled for discovery sprints. Content team is briefed on content-related feedback themes.

**Owner:** PM + Engineering + Content

---

### Stage 6: Close the Loop (Monthly)

Users who submitted feedback and left contact information are notified when their issue or suggestion has been addressed. App store review replies updated when bugs are fixed. Community announcements when popular feature requests are shipped.

**Owner:** Community Manager + Support

**Template response (for users who flagged a fixed issue):**
> "Hi [Name], you reported [issue] in [month]. We're excited to let you know that in version [X.X.X], we've addressed this. Thank you for helping us improve — DramaSnap is better because of feedback from users like you."

---

## Part 5: Reporting Templates

### Weekly Feedback Report (for PM and Leadership)

**To:** Product Manager, Engineering Lead, Content Lead, CEO

**Frequency:** Every Friday by 3 PM

**Template:**

---

**DramaSnap User Feedback Report — Week of [Date]**

**Summary:**
Total feedback instances this week: [N]
Average app store rating: [X.X]
NPS (if surveyed this week): [X]

**Top 5 Themes This Week:**

| Rank | Theme | Volume | Trend | Priority |
|------|-------|--------|-------|---------|
| 1 | [Theme] | [%] | [Up/Down/Stable] | [High/Med/Low] |
| 2 | [Theme] | [%] | [Up/Down/Stable] | [High/Med/Low] |
| 3 | [Theme] | [%] | [Up/Down/Stable] | [High/Med/Low] |
| 4 | [Theme] | [%] | [Up/Down/Stable] | [High/Med/Low] |
| 5 | [Theme] | [%] | [Up/Down/Stable] | [High/Med/Low] |

**Escalations:** [Any P0 or crisis-level feedback patterns]

**Wins:** [Positive themes or feedback that validates a recent product decision]

**Top 3 Action Items from This Week's Feedback:**
1. [Action | Owner | Due date]
2. [Action | Owner | Due date]
3. [Action | Owner | Due date]

---

### Monthly Feedback Report (for Company-Wide)

**To:** All staff

**Frequency:** First Monday of each month

**Template:**

---

**DramaSnap User Voice — [Month Year]**

**By the numbers:**
- Total feedback collected this month: [N]
- App store reviews: [N] | Average rating: [X.X]
- Support tickets: [N] | Resolution time: [X hours average]
- User interviews conducted: [N]
- NPS this month: [X]

**The biggest thing our users are telling us:**

*[1–2 paragraph plain-language summary of the dominant feedback theme this month. Written for non-PM audience. Include specific quotes.]*

**What we fixed this month based on user feedback:**
1. [Feature/fix shipped | Feedback that drove it | % of feedback volume it addressed]
2. [Feature/fix shipped | Feedback that drove it | % of feedback volume it addressed]
3. [Feature/fix shipped | Feedback that drove it | % of feedback volume it addressed]

**What our users love about DramaSnap right now:**

*[Representative positive quote + context]*

**What we're working on next based on user feedback:**

*[2–3 bullet points on upcoming work directly driven by user feedback]*

**Trend watch:**
*[1–2 emerging patterns that are small now but worth watching]*

---

*Framework designed for continuous product discovery. Synthesis methods inspired by Teresa Torres (continuous discovery), Marty Cagan (inspired PM), and Intercom's customer feedback playbooks. Current as of March 2026.*
