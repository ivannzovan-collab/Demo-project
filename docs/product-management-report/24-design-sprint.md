# Design Sprint — DramaSnap

**Framework:** Google Ventures 5-Day Design Sprint
**Sprint Focus:** Onboarding-to-First-Habit Experience
**Sprint Dates:** April 7–11, 2026
**Location:** DramaSnap HQ, San Francisco + Remote (hybrid)
**Sprint Master:** Head of Product

---

## Sprint Brief

**The challenge:** DramaSnap's current D1 retention is 34%. New users download the app, watch 1–2 episodes, and 66% don't return the next day. The core question is: what must happen in the first session for a user to establish a habit of returning daily?

**What we want to learn:** What is the minimum onboarding experience that creates a genuine emotional hook — the feeling of "I need to know what happens next" — reliably, within the first 5 minutes?

**Why a sprint now:** We have real user data from the closed beta (400 users, 3 weeks). We have hypotheses about why retention is low. We need to rapidly prototype and test solutions before committing to a 6-week build cycle.

---

## Sprint Team

| Role | Person | Why They're Here |
|---|---|---|
| **Decider** | CEO / Head of Product | Makes final decisions; breaks ties; owns the sprint outcome |
| **Designer** | Lead Product Designer | Owns Day 2–4 sketch and prototype work |
| **Frontend Engineer** | Senior React Native Engineer | Feasibility gut-checks; prototype co-builder |
| **Backend Engineer** | Senior Node.js Engineer | API constraints; what's technically easy vs. hard |
| **Data/Growth Analyst** | Growth PM | Brings user behavior data; quantifies hypotheses |
| **Customer Empathy** | Head of Content + UX Researcher | Understands user emotional language; conducts Friday interviews |
| **External Expert** (invited) | Short-form drama creator (TikTok) | Real user of competing formats; brings fresh perspective |

**Sprint norms:**
- Phones away during working sessions (except note-taking)
- No laptops open during expert talks and exercises
- "How might we" notes visible on the walls throughout the week
- Decider has final say but must hear all voices before deciding
- No debating solutions before Tuesday afternoon — observations and questions only on Monday

---

## Day 1 — Monday: Map

**Goal:** Align the team on the long-term goal, the specific sprint question, and where to focus the prototype.

### Long-Term Goal

*Stated as a future aspiration:*

> In two years, DramaSnap is the app that a million people open every morning as part of their daily routine — the way they open Messages or Instagram. Not because they have to, but because the story has them. They can't not know what happens today.

**Underlying assumptions in this goal:**
- Daily habit formation is achievable (not just weekly casual use)
- The format (60-second episodes) enables daily micro-sessions
- The narrative hook is strong enough to survive a night's sleep

### Sprint Questions

The team brainstorms "How might we" notes and questions. After synthesis, the following sprint questions are prioritized (5 votes each, decider's double-votes count):

| # | Sprint Question | Votes |
|---|---|---|
| SQ1 | How might we make users feel the "I need to know what happens next" feeling within episode 1? | 8 |
| SQ2 | How might we reduce the cognitive load of "deciding what to watch" to near zero? | 7 |
| SQ3 | How might we make users feel they've already invested in a story before the free trial ends? | 6 |
| SQ4 | How might we create a reason to return tomorrow that isn't just a push notification? | 5 |
| SQ5 | How might we help users who quit mid-series find their way back? | 3 |

**Sprint focus:** SQ1 and SQ2. The first session experience.

### Expert Interviews (Monday Afternoon)

Four 15-minute expert interviews, each followed by team note-taking (HMW notes on stickies):

**Expert 1: Growth Analyst — What does data say about drop-off?**
Key insights:
- 52% of users who abandon do so after episode 1 (never start episode 2)
- Users who rate episode 1 (any rating) have 2.3x higher D1 return rate
- Average time between episode 1 end and episode 2 start: 4 minutes for returners; 45 minutes for churners (then they never come back)
- Genre mismatch is the biggest predictor of episode 1 abandonment (user selected Romance, got workplace drama)

**Expert 2: UX Researcher — What do users say in exit interviews?**
Key insights:
- "I didn't know if it was going to be good before I started"
- "The first episode felt like a slow introduction — I didn't see what the show was really about"
- "I forgot about it — I didn't have a reason to go back"
- "I didn't realize it was a series — I thought it was a standalone video"

**Expert 3: Short-Form Drama Creator (External)**
Key insights:
- On TikTok, the first 3 seconds must create tension or confusion — the brain needs a reason to continue
- The hook is not "introduce the characters" — it's "create a question the audience needs answered"
- High-performing series always start with a conflict already in progress; backstory comes later
- Cliffhangers that work: unresolved questions ("What is she hiding?"), not just dramatic moments ("They kissed")

**Expert 4: Head of Content — What makes episode 1 of our best series different?**
Key insights:
- Top 5 series by D7 retention all open with a conflict in progress (in medias res), not character introduction
- Series with ≥ 4.0 rating at episode 1 have 1.8x higher completion rate than series with < 4.0
- Users who watch episodes 1 AND 2 in the first session have D7 retention of 42% (vs. 15% for single-episode first sessions)
- The "hook question" (the unresolved question from episode 1) should be stated or implied in the episode title

### Customer Journey Map

After expert interviews, the team maps the current customer journey for a new user's first session:

| Stage | User Action | User Emotion | System Action | Pain Points |
|---|---|---|---|---|
| Install | Downloads app from App Store | Neutral/curious | Nothing yet | — |
| Open app | Sees generic onboarding | Slightly confused | Shows genre picker | "I don't know what I'm choosing" |
| Browse home | Sees series cards with no context | Overwhelmed | Shows editorial list | "All looks the same; don't know what to watch" |
| Episode 1 start | Taps random series | Skeptical but open | Plays episode | "Long intro; not sure what this is about" |
| Episode 1 (10s) | Watching | Uncertain | — | "Is this going anywhere?" |
| Episode 1 (45s) | Still watching | Starting to engage | — | — |
| Episode 1 end | Watches full 60s | Surprised/interested | Shows end screen | "That was short — did something actually happen?" |
| Post-episode | Sees "Next Episode" button | Curious but cautious | Shows rating + next | "Should I watch another? Will it be as good?" |
| Session end | Closes app | Satisfied but uncommitted | Records progress | "I'll check it out again... maybe" |
| Next day | Gets push notification | Mildly annoyed | Sends retention push | "Why is this app notifying me?" — ignores |

**Pain points synthesized:**
1. No pre-episode signal of quality or tone
2. Episode 1 tone doesn't match user expectation from series card
3. No strong reason to commit to episode 2 after episode 1
4. Return trigger is push notification (external, interruptible) rather than internal hook

### Pick the Target

After mapping the journey, the team uses dot voting to identify the most important moment to focus the prototype on:

**The target:** The transition from Episode 1 end to Episode 2 start — the 20-second window that determines whether the user continues or leaves.

**Decider's framing:** "If we nail the 30 seconds after episode 1 ends — the moment where the question left open pulls them forward — we can change the D1 retention number. That's what we're prototyping."

---

## Day 2 — Tuesday: Sketch

**Goal:** Generate competing solution ideas, individually.

### Lightning Demos (Morning)

Each team member demos 3 minutes of inspiration from other products — not copied, but ideas to remix.

| Demo | Product | Insight |
|---|---|---|
| Cliffhanger reveal mechanics | Netflix (Dark, Squid Game) | End-of-episode text teaser: "Next time on..." with visual + audio hook |
| Streak mechanics | Duolingo | Explicit streak counter creates daily return obligation |
| "Choose your content" flow | Spotify (mood-based playlist) | Matching content to context reduces cognitive load of choice |
| "What happened last time" | Soap opera recap conventions | 30-second voice-over recap = memory jog + emotional re-entry |
| Social proof at decision points | TripAdvisor, Yelp | Seeing "842 people loved this series" reduces risk perception |
| Autoplay with countdown | YouTube | 5-second autoplay countdown creates inertia to continue |
| "You were this close" messaging | Strava, Fitbit | Showing proximity to a milestone increases completion behavior |
| Series trailer before episode 1 | Disney+, HBO Max | 60-second trailer previews tone and hook before commitment |

### Four-Step Sketching Process

Each team member works independently through four rounds:

**Round 1 — Notes (20 min):** Review all Day 1 materials, notes, and sprint questions. Write or sketch key ideas.

**Round 2 — Ideas (20 min):** Rapid idea generation. Fill a page with rough sketches and bullet ideas without judging.

**Round 3 — Crazy 8s (8 min):** Fold paper into 8 panels. Sketch 8 different interface variations for the target moment in 8 minutes (1 minute each). Forces quantity over quality.

**Round 4 — Solution Sketch (30–45 min):** Pick the strongest idea from Crazy 8s. Create a 3-panel storyboard showing the critical interaction in detail.

**Team sketches (final concepts submitted):**

| Sketcher | Concept Name | Key Idea |
|---|---|---|
| CEO | "The Teaser Card" | After episode 1, a 10-second audio teaser (not video) plays of episode 2 — voice over a still image. Creates audio hook without production cost. |
| Lead Designer | "The Question Screen" | Episode 1 end screen shows the unresolved question as explicit text: "What is Elena hiding?" with a pulsing "Find out" CTA instead of generic "Next Episode" |
| RN Engineer | "The Commitment Prompt" | After episode 1, ask: "Are you following this story?" Yes → saves to watchlist + queues episode 2. No → recommends different series. Explicit commitment framing. |
| Backend Engineer | "Fast Follow" | Remove the episode end screen entirely. Episode ends → black screen for 1.5 seconds → episode 2 begins. Zero friction. (Controversial sketch.) |
| Growth PM | "Social Proof Hook" | After episode 1: "34,000 people are following this story. 18,000 finished it this week." + progress bar showing "You're 1% through the story." |
| Head of Content | "Previously-Next" | Show the last 5 seconds of the just-finished episode (replay the cliffhanger moment) + overlay: "Next: Episode 2 drops right into the aftermath." |
| External Expert | "The Cold Open Preview" | 8-second silent preview of episode 2's opening (first 8 seconds) plays automatically before the end screen fully renders. |

---

## Day 3 — Wednesday: Decide

**Goal:** Choose the best solution to prototype and test.

### Art Museum Walk (Morning)

All solution sketches from Tuesday are posted on the wall (printed or displayed on monitors). The team walks through silently, adding dot stickers on elements they like, writing question marks on things they don't understand.

**Observations from Art Museum walk:**
- "The Question Screen" (designer's concept) received the most dots (11)
- "The Cold Open Preview" (external expert's concept) received strong interest (9 dots)
- "Fast Follow" (engineer's concept) received extreme reactions — 5 dots + 5 question marks
- "Social Proof Hook" (growth PM's concept) received interest on the progress bar element specifically

### Speed Critique (5 minutes per sketch)

Facilitator guides the team through each sketch. The sketcher stays silent while others describe what they see, then clarifies questions.

**Key synthesis observations from Speed Critique:**
- There is broad agreement that the generic "Next Episode" button is the weakest current state
- "The Question Screen" concept resonates because it names the specific emotional hook users are feeling
- "Cold Open Preview" autoplay element is compelling but risks spoiling episode 2
- "Social Proof Hook" progress bar ("You're 1% through the story") is uniquely motivating — different from typical social proof
- "Fast Follow" is controversial but has an underlying insight: decision fatigue is real and reducing the end-screen UI might increase continuation

### Supervote

Decider places 3 large sticker votes on the specific elements they want to include in the prototype.

**Decider's supervote placement:**
1. "The Question Screen" — the explicit hook question text replacing "Next Episode" (**2 votes**)
2. "Social Proof Hook" — the progress bar element only ("You're 1% through the story") (**1 vote**)
3. "The Cold Open Preview" — the first 5 seconds of episode 2 plays on the end screen (**1 vote**, with note: "only if we can avoid spoiling")

**Decider's decision statement:** "We're prototyping a new episode end screen that: (1) shows the specific unresolved question from episode 1, (2) shows a short preview of episode 2 opening, and (3) shows how far through the story the user is. The hypothesis is that naming the hook question and showing proximity to a long story creates the pull forward."

### Storyboard (Wednesday Afternoon)

The team creates a 12-panel storyboard showing the user's experience across the target interaction:

```
Panel 1: Episode 1 final 5 seconds — conflict moment on screen
Panel 2: Episode ends — black screen for 1 second
Panel 3: End screen renders — episode 2 preview (first 5 seconds) auto-plays silently in background
Panel 4: Hook question text fades in: "What is Marcus hiding from Elena?"
Panel 5: Progress bar appears: "Episode 2 of 100 — You're 1% into this story"
Panel 6: Rating prompt (small, non-intrusive): star row below the main content
Panel 7: CTA: "Find out" button (large, primary) + "Save for later" (secondary)
Panel 8: User taps "Find out" — brief transition animation
Panel 9: Episode 2 begins immediately, no additional loading screen
Panel 10: User watches Episode 2 — invested
Panel 11: Episode 2 ends — same end screen pattern, new hook question
Panel 12: User is now hooked — "Next Episode" tap feels inevitable
```

---

## Day 4 — Thursday: Prototype

**Goal:** Build a realistic prototype that can be tested with real users on Friday.

### Team Split

The team divides into roles for parallel prototype construction:

| Role | Members | Responsibility |
|---|---|---|
| Makers | Lead Designer + RN Engineer | Build the interactive prototype in Figma + React Native (TestFlight build) |
| Stitcher | Backend Engineer | Connect prototype screens into realistic user flow; populate real content |
| Writer | Growth PM + Head of Content | Write all hook question copy for the 5 test series; write UI labels |
| Interviewer | UX Researcher | Prepare the Friday interview guide; recruit final participants |
| Asset | External Expert | Curate 5 test series with strongest episode 1 hooks; identify preview clips |

### Components Built

**Component 1: New Episode End Screen**
- Background: first 5 seconds of episode 2 plays muted, blurred (40% opacity) as ambient motion
- Foreground: hook question text (18pt, white, center-aligned): "What is Marcus hiding from Elena?"
- Progress bar: thin horizontal bar with percentage text: "1% through The Glass Throne (Episode 2 of 100)"
- Star rating row: 5 stars, small (20pt), bottom-left
- Primary CTA: "Find out →" — full-width button, high contrast
- Secondary CTA: "Save for later" — text link, smaller, bottom-right

**Component 2: "Save for Later" Flow**
- Tapping "Save for later" → series added to watchlist + confirmation toast
- "You can pick this up anytime from your profile"
- Returns user to home screen (not a dead end)

**Component 3: Loading Transition**
- 0.8-second transition between end screen and episode player
- Uses episode 2's first frame as a preview fill during load (reduces perceived wait time)

### Copy Written

Hook question copy for 5 prototype test series:

| Series | Hook Question for Episode 1 End Screen |
|---|---|
| The Glass Throne | "What deal did Elena just make without telling Marcus?" |
| Midnight CEO | "Why does the new chairman recognize her — when they've never met?" |
| Crimson Vow | "Who sent the letter that made her burn the contract?" |
| Steel Hearts | "What is Dr. Park hiding in the locked wing of the hospital?" |
| The Comeback | "If she won the competition — why does everyone act like she lost?" |

### Prototype Fidelity Decision

**Decision:** High-fidelity on the end screen; medium-fidelity on the transitions. The end screen is the specific thing being tested — it must feel real. The before and after (episode playback) can use existing working app builds.

**TestFlight build:** RN Engineer deploys prototype to TestFlight by 4 PM Thursday. 10 test devices loaded and verified.

---

## Day 5 — Friday: Test

### User Recruitment

**Target:** 5 users who match the "Commuter" and "Late-Night Escapist" personas.

**Recruitment criteria:**
- Age 22–45
- Uses at least one streaming service (Netflix, Prime, Disney+, or similar)
- Uses at least one short-form video app (TikTok, Instagram Reels, or YouTube Shorts)
- Has NOT used DramaSnap before
- Owns an iPhone (TestFlight build is iOS-only for this sprint)

**Recruitment source:** UserTesting.com panel (recruited Tuesday; confirmed Thursday)

**Compensation:** $75 Amazon gift card per participant

**Schedule:** 5 × 60-minute sessions, 9 AM – 4 PM (30-minute breaks between)

---

### Interview Structure

**Room setup:**
- Participant uses their own iPhone (provided TestFlight link in advance) or a clean test device
- Screen mirrored to facilitator laptop via QuickTime
- Note-taker and observer in room (or on Zoom call, camera off)
- One facilitator only speaks to participant; all others silent

**Session flow:**

**Part 1: Warm-Up (5 minutes)**

The facilitator opens with rapport-building questions:
- "Tell me about how you typically spend time on your phone during the day."
- "What was the last TV show or video you really got hooked on? What made it hard to stop?"
- "What's your typical experience of finding something new to watch?"

---

**Task 1: First Open (10 minutes)**

*"I'm going to ask you to open this app and explore it naturally. Pretend I'm not here. Think aloud as you go — tell me what you're seeing and what you're thinking."*

**Observe:**
- How long does it take to tap something?
- What draws their attention first?
- What confuses them?
- Do they read the series descriptions or ignore them?

**Do not prompt or help.** Only intervene if the participant is completely stuck for > 60 seconds.

---

**Task 2: Watch an Episode (15 minutes)**

*"I'd like you to choose a series and watch the first episode. Again, think aloud — tell me what you're feeling as you watch."*

**Observe:**
- Do they abandon before the episode ends?
- What is their facial expression and body language at the episode's conclusion?
- How quickly do they interact with the end screen after the episode ends?
- Do they read the hook question text?
- Do they tap "Find out" or "Save for later" or nothing?
- If they tap "Find out" — how much did they hesitate?

**After watching:** Ask immediately, before they navigate further:
- "What was going through your mind when the episode ended?"
- "What did you think that text meant?" (pointing to hook question if they didn't mention it)
- "On a scale of 1–10, how much do you want to see episode 2 right now?"

---

**Task 3: Second Episode Decision (10 minutes)**

*"Go ahead and do whatever feels natural next."*

**Observe:**
- Did they tap "Find out" without prompting?
- If they watch episode 2 — observe body language and engagement
- If they saved it — ask: "What made you save it rather than watch now?"

After Task 3:
- "What, if anything, made you want to keep watching?"
- "What, if anything, might have made you stop?"
- "If you came back to this app tomorrow, what would you come back for?"

---

**Task 4: Return Experience Simulation (10 minutes)**

*Facilitator says:* "Imagine it's the next morning. You've slept, done your morning routine, and you're about to head out. Open the app and show me what you'd do."

**Observe:**
- Does the user navigate to Continue Watching?
- Do they remember the series they started?
- Does the series card with the hook question remind them of the unresolved story?

After Task 4:
- "What reminded you of the story you were watching?"
- "Would you say you're 'following' this story now?"

---

**Debrief (10 minutes)**

Final open questions:

1. "If you had to describe this app to a friend in one sentence, what would you say?"
2. "What was the best part of the experience you had today?"
3. "If you could change one thing, what would it be?"
4. "Is there anything you expected that wasn't there?"
5. "Anything else you want to tell me?"

---

### Observation Protocol

**Note-taker's job:** Document verbatim quotes and behavioral observations, NOT interpretations. Use this format:

```
Time: [HH:MM]
Action: [What the user did]
Quote: [Exact words if any]
Non-verbal: [Body language, facial expression, hesitation]
```

**Signal tracking (mark with tally during session):**

| Signal | Type | What to Watch For |
|---|---|---|
| Hook question read | Positive | Eyes move to hook question text; pause before tapping |
| Hook question ignored | Negative | Tap before reading; no pause |
| "Find out" tapped without hesitation | Strong positive | < 2 second pause; immediate tap |
| "Find out" tapped after hesitation | Positive | Hesitation but eventual tap |
| "Save for later" tapped | Neutral | Interested but not compelled |
| App closed after episode 1 | Negative | User closes without tapping anything |
| Unprompted verbalization of hook question | Strong positive | User says "wait, what IS she hiding?" out loud |
| Episode 2 started | Strong positive | User enters episode 2 in the session |

---

### Sprint Artifacts Checklist

The following artifacts must be complete by end of day Friday:

**Monday artifacts:**
- [ ] Long-term goal statement (written, agreed)
- [ ] Sprint questions (top 5 prioritized)
- [ ] Expert interview notes (HMW stickies compiled)
- [ ] Customer journey map (posted on sprint wall)
- [ ] Target moment identified and voted on

**Tuesday artifacts:**
- [ ] Lightning demo notes (each demo summarized in 3 bullets)
- [ ] Crazy 8s sketches from all 7 team members
- [ ] 3-panel solution sketches from all 7 team members

**Wednesday artifacts:**
- [ ] Art museum dot-vote results (documented)
- [ ] Speed critique notes per sketch
- [ ] Decider's supervote placement (documented)
- [ ] 12-panel storyboard (photographed and saved)

**Thursday artifacts:**
- [ ] Prototype installed on 10 test devices (TestFlight build confirmed)
- [ ] Hook question copy for 5 test series (reviewed by Head of Content)
- [ ] Interview guide finalized and printed
- [ ] 5 participants confirmed for Friday slots

**Friday artifacts:**
- [ ] Session recordings (screen + facilitator's device camera, with consent)
- [ ] Note-taker raw notes from each session
- [ ] Signal tally sheet (completed per session)
- [ ] Synthesis wall (post-it clustering: patterns from all 5 sessions)
- [ ] Sprint findings summary (written by end of day)
- [ ] Recommendation for next step (build / iterate / abandon)

**Post-sprint:**
- [ ] Sprint deck (slides summarizing hypothesis, prototype, and findings) — due Monday April 14
- [ ] Shape Up pitch (if findings positive) — due Wednesday April 16

---

## Expected Outcomes and Decision Criteria

### If prototype succeeds (build):

Signals of success (set before Friday):
- ≥ 4 of 5 users tap "Find out" without facilitator prompting
- ≥ 3 of 5 users spontaneously verbalize something about the hook question ("What is she hiding?", etc.)
- ≥ 3 of 5 users watch episode 2 within the session
- ≥ 4 of 5 users can correctly describe the unresolved question when asked in debrief

**Decision:** Shape the new episode end screen for the next build cycle. Sprint's prototype becomes the basis of the Shape Up pitch.

### If prototype fails but direction is right (iterate):

Signals:
- Users understand the hook question concept but find the copy confusing or unconvincing
- "Find out" tap rate < 60% but engagement is qualitatively higher than control

**Decision:** Return to shaping. Iterate on copy approach and test again in 2 weeks with a revised prototype (no new sprint required).

### If prototype fails fundamentally (abandon or pivot):

Signals:
- Users don't read the hook question at all
- Episode 1 engagement is too low for the end screen to matter (the problem is earlier)
- Users express that the end screen feels manipulative or "click-baity"

**Decision:** Revisit the target. The problem may be earlier in the journey (episode 1 quality, not the end screen transition). Run a second sprint focused on episode 1 content quality and first-impression experience.

---

*The design sprint is not a solution — it's a week-long risk reduction exercise. On Monday, we have a hypothesis. On Friday, we have evidence.*
