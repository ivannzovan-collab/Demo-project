# Product Requirements Document — DramaSnap MVP

**Document status:** Approved for development
**Version:** 1.0
**Date:** March 17, 2026
**Authors:** Head of Product, Lead Designer, Engineering Lead
**Reviewers:** CEO, CTO, Head of Growth

---

## 1. Overview and Vision

### 1.1 Product Vision

DramaSnap is the world's first AI-generated short drama streaming platform — a mobile-first destination where users experience complete, emotionally compelling drama stories in 60-second vertical episodes, 100 episodes per series.

**Vision statement:** "Make the best minute of your day, every day."

### 1.2 Strategic Context

The short-form video market (TikTok, Instagram Reels, YouTube Shorts) has proven that mobile users will engage deeply with vertical video under 60 seconds. However, pure UGC platforms offer no narrative continuity — there is no reason to return to see "what happens next." Traditional streaming services (Netflix, Prime) offer narrative continuity but require 20–90 minute commitments per session.

DramaSnap occupies the intersection: the session commitment of short-form (60 seconds) with the narrative hook of long-form (100-episode serialized story arcs). This format is untested at scale in Western markets but has demonstrated explosive growth in Chinese markets (Kuaishou short drama: 500M viewers), validating the underlying user behavior.

### 1.3 MVP Scope

This PRD defines the Minimum Viable Product — the smallest coherent product that can test the core hypotheses:
1. Users will habitually consume 60-second vertical drama episodes
2. AI-generated content quality is sufficient to sustain engagement
3. A meaningful portion of users will pay for continued access

The MVP is not a complete product. It is a learning instrument.

---

## 2. Problem Statement

### 2.1 The User Problem

Modern mobile users have entertainment time fragmented into micro-windows (commutes, waiting rooms, lunch breaks) of 1–10 minutes. Existing options are poorly suited to these windows:

- **TikTok/Reels:** Entertaining but algorithmically random; no narrative continuity; users feel "I wasted time"
- **Netflix/Prime:** Excellent content but requires 20+ minute commitment; doesn't fit micro-windows; high startup cost (what to watch?)
- **Books/Podcasts:** Narrative continuity but require sustained attention; don't fit audio-restricted or visually occupied contexts

**The gap:** There is no product designed for narrative entertainment in 1–3 minute windows.

### 2.2 The Business Problem

Content creation cost is the primary barrier to building a streaming platform. Human-produced content requires $50,000–$500,000 per episode for scripting, production, and post-production. At 100 episodes per series and a required library of 100+ series to sustain daily return visits, the content investment required is prohibitive for a startup.

AI-generated content (GPT-4 scripts + Runway/Pika video + ElevenLabs voice) reduces per-episode production cost by approximately 95%, making the library scale economically viable. However, quality must meet a minimum bar for user acceptance.

---

## 3. Target Personas

### Persona 1: "The Commuter" — Marcus, 28

**Demographics:** Male, 25–35, urban professional, New York City
**Device:** iPhone 15, uses phone heavily during 45-minute subway commute
**Entertainment habits:** Netflix evening binge-watcher; TikTok during commute; frustrated by TikTok's randomness
**Quote:** "I want something I can actually get into on the train, not just mindless scrolling."
**Jobs to be done:** Fill commute time with something engaging that I can pick up and put down without losing the story
**Pain points:** Netflix requires WiFi; TikTok has no narrative continuity; podcasts require audio focus
**DramaSnap fit:** Perfect commute companion — each episode is one station stop; story continues next day

---

### Persona 2: "The Late-Night Escapist" — Aisha, 34

**Demographics:** Female, 28–40, working parent, suburban Chicago
**Device:** Samsung Galaxy, watches in bed after kids are asleep
**Entertainment habits:** Used to watch Netflix until she had kids; now has 20–45 minutes before sleep; often falls asleep mid-show
**Quote:** "I need something I can actually finish before I fall asleep."
**Jobs to be done:** Enjoy immersive story entertainment without the guilt of leaving shows half-finished
**Pain points:** Falls asleep watching Netflix; can't track complex plotlines when exhausted; feels behind on "prestige TV"
**DramaSnap fit:** Can complete 5–10 episodes in 30 minutes; never falls asleep mid-story; emotionally satisfying completion

---

### Persona 3: "The Discovery Enthusiast" — Jake, 22

**Demographics:** Male, 18–26, college student, Los Angeles
**Device:** iPhone, heavy social media user
**Entertainment habits:** TikTok power user; watches YouTube drama commentary; shares content constantly
**Quote:** "I'm always the first one to find the next big thing."
**Jobs to be done:** Discover culturally relevant content before peers; have things to talk about and share
**Pain points:** Everything on Netflix feels like "dad shows"; TikTok algorithm shows same content as everyone else
**DramaSnap fit:** Novel format is shareable; completion badges create social currency; recommendation algorithm surfaces hidden gems

---

### Persona 4: "The Nostalgic Soap Opera Fan" — Linda, 52

**Demographics:** Female, 45–65, suburban professional, Texas
**Device:** iPad + iPhone
**Entertainment habits:** Former soap opera viewer (General Hospital, etc.); soaps were cancelled or degraded; misses serial drama format
**Quote:** "I grew up on soaps. I miss the drama and the ongoing stories. But I don't have 3 hours a day anymore."
**Jobs to be done:** Experience the emotional satisfaction of soap opera drama — betrayal, romance, twists — in a modern format
**Pain points:** Soaps require daily 60-minute commitment; Netflix dramas are too dark/prestige; reality TV feels cheap
**DramaSnap fit:** Exact format match to soap opera (serialized, melodramatic, accessible); 60-second episodes fit modern schedule

---

## 4. User Stories

### P0 — Must Have (MVP Launch Blockers)

| ID | User Story | Acceptance Criteria |
|---|---|---|
| US-001 | As a new user, I want to browse available drama series so I can find something that interests me | Home screen shows ≥ 20 series cards with title, genre, episode count, and thumbnail |
| US-002 | As a new user, I want to watch the first 3 episodes of any series without creating an account so I can evaluate the platform before committing | Guest mode active; episodes 1–3 playable; account creation prompt at episode 4 |
| US-003 | As a user, I want to watch a 60-second episode in full-screen vertical format so I can have an immersive viewing experience | Video plays in 9:16 ratio, full screen; audio on by default; no pre-roll ads for paid users |
| US-004 | As a user, I want the next episode to begin automatically after the current one so I can maintain my viewing momentum | Autoplay countdown (3 seconds) appears; next episode begins if not cancelled; works for same-series only |
| US-005 | As a user, I want to create an account so I can save my progress and preferences | Sign up via email or Apple/Google SSO; progress syncs within 5 seconds of account creation |
| US-006 | As a user, I want to resume a series where I left off so I don't have to remember my episode number | "Continue Watching" row on home screen; correct episode starts immediately |
| US-007 | As a user, I want to subscribe to unlock unlimited episodes so I can continue watching beyond the free limit | Paywall screen at episode 4; clear pricing and benefits; payment via App Store IAP |
| US-008 | As a paying subscriber, I want to watch all 100 episodes of any series without interruption | All episodes in subscribed tier are accessible; no additional gates or friction |
| US-009 | As a user, I want to search for drama series by genre or title so I can find specific content I'm interested in | Search bar with keyword + genre filter returns relevant results within 1 second |
| US-010 | As a user, I want to see my watch history so I can review what I've watched | Watch history screen accessible from profile; shows last 50 episodes with series, date, and rating |

### P1 — Should Have (Ship Within 30 Days of MVP)

| ID | User Story | Acceptance Criteria |
|---|---|---|
| US-011 | As a user, I want to rate an episode after watching so I can help improve recommendations | 1–5 star rating appears on episode end screen; dismissible; rating stored in profile |
| US-012 | As a user, I want to save a series to my watchlist so I can find it easily later | "Save" button on series detail screen; saved series accessible from profile in < 2 taps |
| US-013 | As a user, I want to receive personalized recommendations based on my viewing history | Home screen "For You" row updates within 24 hours of 5+ ratings; shows ≥ 5 distinct recommendations |
| US-014 | As a user, I want to share an episode clip with my friends so I can spread the word | Share button generates 15-second clip; shareable via iOS/Android share sheet; includes app download link |
| US-015 | As a user, I want to earn badges for my achievements so I can feel rewarded for engagement | First badge earned within first session (e.g., "First Episode"); badge notification on earn; visible on profile |
| US-016 | As a user, I want to see how many episodes remain in a series so I can plan my viewing | Episode counter visible on series detail screen and episode player ("Episode 12 of 100") |
| US-017 | As a user, I want to adjust playback speed so I can control my viewing pace | Speed controls: 0.75x, 1x, 1.25x, 1.5x, accessible from player controls overlay |
| US-018 | As a user, I want to enable/disable subtitles so I can watch in situations where audio isn't possible | Subtitle toggle in player; subtitles enabled by default if device is in silent mode |

### P2 — Could Have (Q3 2026)

| ID | User Story | Acceptance Criteria |
|---|---|---|
| US-019 | As a user, I want to download episodes for offline viewing so I can watch during commutes without connectivity | Download button on episode/series screen (Blaze+ tier); downloaded episodes play without internet |
| US-020 | As a user, I want to leave comments on episodes so I can share reactions with other viewers | Comment input on episode end screen; comments visible on episode detail screen |
| US-021 | As a user, I want to watch DramaSnap in my preferred language so I can enjoy content without language barriers | Language selector in settings; AI-dubbed audio available for Spanish, Portuguese initially |
| US-022 | As a user, I want to set a daily episode limit so I can manage my usage | Daily limit toggle in settings (5 / 10 / 20 / Unlimited options); notification when limit reached |
| US-023 | As a user, I want to gift a subscription to a friend so I can share the platform | Gift subscription purchase flow; recipient receives email with redemption link |

---

## 5. Core Features — Functional Requirements

### Feature 1: Browse and Discovery

**Description:** The primary surface for content discovery. Comprises the home screen, genre browsing, search, and series detail pages.

**Home screen layout:**
- Row 1: "Continue Watching" (personalized; hidden for new users)
- Row 2: "Trending Today" (top 10 by episode starts in last 24 hours)
- Row 3: "For You" (recommendation engine; editorial for new users)
- Row 4–N: Genre rows ("Romance," "Thriller," etc.)

**Functional requirements:**
- Home screen loads fully within 3 seconds on 4G connection
- Series cards display: thumbnail, title, genre tag, episode count, average rating
- Series detail screen displays: full synopsis, episode list, cast description, user ratings
- Search returns results for partial title match and genre keyword within 1 second
- Genre filter returns ≥ 10 series per genre (minimum library requirement)

**Non-functional requirements:**
- Infinite scroll on genre rows (lazy load additional content)
- Series thumbnails are AI-generated stills; must be reviewed for content policy compliance before publish

---

### Feature 2: Video Player

**Description:** The core viewing experience. Full-screen vertical video playback with minimal UI chrome.

**Functional requirements:**
- Full-screen 9:16 playback (no black bars on modern iPhone/Android aspect ratios)
- Episode loads within 2 seconds on 4G (p90); pre-buffer next episode in background
- Player controls (tap to reveal): pause, seek bar, episode number, subtitles toggle, speed control
- Episode end screen: autoplay countdown (3s), "Next Episode" CTA, rating prompt, share button
- Series end screen: completion celebration, "Explore Similar Series" recommendations
- Background playback (audio continues when phone locked) for paid tier users

**Error handling:**
- Poor connectivity: show buffering indicator; retry automatically; do not show error screen unless > 10 seconds
- Episode unavailable: show "This episode is temporarily unavailable" with alternative recommendations
- Paywall trigger: show paywall screen at episode 4; do not auto-play episode 4 without subscription

---

### Feature 3: Progress Tracking

**Description:** User's viewing history, series progress, and achievement tracking.

**Functional requirements:**
- Progress syncs across devices within 30 seconds of episode completion
- "Continue Watching" updates immediately after episode completion
- Episode completion event fired when user watches ≥ 85% of episode duration
- Series completion event fired when episode 100 of a series is completed
- Watch history: last 200 episodes, with series name, episode number, date, and user rating
- Progress percentage visible on series card for in-progress series
- Offline progress syncs to server when connectivity restored

---

### Feature 4: Recommendation Engine (P1 → P0 by week 4)

**Description:** Personalized content recommendations based on viewing history, ratings, and genre preferences.

**Functional requirements:**
- New user: editorial recommendations based on genre selection at onboarding
- Returning user with ≥ 5 rated episodes: collaborative filtering model serves personalized recommendations
- Recommendations refresh every 24 hours or when user rates ≥ 3 new episodes
- "For You" row shows ≥ 8 recommendations; no series already completed by user
- "Because you watched X" explanation label on ≥ 50% of recommendations
- Diversity injection: minimum 30% of recommendations must be outside user's primary genre

---

### Feature 5: Paywall and Subscription Management

**Description:** Monetization gating, subscription purchase, and subscription management.

**Paywall screen requirements:**
- Triggers at episode 4 of any series
- Displays: remaining episodes in current series, subscription tier options, key benefits
- Default to annual plan; toggle to monthly available
- Apple/Google IAP integration for payment processing
- Free trial: 7-day free trial available for new subscribers

**Subscription management:**
- Active subscription status visible in Profile
- Cancel subscription flow: accessible from Profile → Settings → Subscription → Cancel
- Cancel flow includes: offer downgrade to Spark, confirm cancel, retention offer (discount)
- Subscription status synced in real-time (resume access within 60 seconds of purchase)
- Restore purchases functionality for iOS reinstalls

---

### Feature 6: User Authentication

**Description:** Account creation, login, and identity management.

**Functional requirements:**
- Guest mode: episodes 1–3 accessible without account; progress saved locally
- Sign-up: Email + password, or Sign In with Apple, or Sign In with Google
- Login: Email/password with "Forgot password" flow; SSO
- Account required at episode 4 trigger: progress from guest mode imported to new account
- Profile: display name, profile photo (optional), subscription status, watch stats
- Account deletion: accessible from settings; data deleted within 30 days per GDPR/CCPA

**Security requirements:**
- Passwords: minimum 8 characters, bcrypt hashing
- Sessions: JWT with 30-day expiry; refresh token rotation
- Rate limiting: ≤ 10 login attempts per hour per IP

---

## 6. Technical Requirements

### 6.1 Mobile Application (React Native)

| Requirement | Specification |
|---|---|
| Framework | React Native 0.73+ (for React Native New Architecture performance) |
| Target platforms | iOS 15+ and Android 8+ |
| State management | Redux Toolkit (global state) + React Query (server state / caching) |
| Video playback | react-native-video with HLS adaptive bitrate streaming |
| Navigation | React Navigation 6 (stack + bottom tab) |
| Authentication | Supabase Auth client (wraps Apple/Google SSO + email) |
| Analytics | Segment (event tracking) + Mixpanel (funnel analysis) |
| Push notifications | Firebase Cloud Messaging (cross-platform) |
| Offline storage | MMKV for fast local storage; SQLite for episode download metadata |
| Crash reporting | Sentry |
| App size target | < 50 MB initial download; content streamed on-demand |

### 6.2 Backend API (Node.js + Python FastAPI)

| Requirement | Specification |
|---|---|
| Primary API | Node.js / Express (REST API for mobile client) |
| AI pipeline | Python FastAPI microservice (handles GPT-4, Runway, ElevenLabs orchestration) |
| Authentication | Supabase Auth (JWT verification) |
| Real-time features | Socket.io (live comments, notifications) |
| API rate limiting | 1,000 requests/minute per authenticated user; 100/minute unauthenticated |
| API versioning | URL versioning (/api/v1/); v1 maintained until ≥ 80% of active sessions on v2 |
| Error handling | Standard HTTP status codes + JSON error bodies; all errors logged to Sentry |

### 6.3 AI Content Pipeline

| Stage | Technology | SLA |
|---|---|---|
| Script generation | GPT-4 (100-episode arc; 60-second script per episode) | < 4 hours per series |
| Video generation | Runway ML Gen-3 (primary) / Pika 1.0 (fallback) | < 8 hours per episode |
| Voice synthesis | ElevenLabs (character voices; consistent per-character voice IDs) | < 30 minutes per episode |
| Audio mixing | Python (librosa) for music + voice overlay | < 15 minutes per episode |
| Quality gate | Automated (CLIP score + human review for flagged content) | < 2 hours human review SLA |
| Publishing | CDN upload + metadata indexing | < 10 minutes per episode |

**Total pipeline SLA:** Episode from "generate" trigger to "published" in app ≤ 24 hours.

### 6.4 Database Architecture

| Database | Technology | Use Case |
|---|---|---|
| Primary database | PostgreSQL (hosted on Supabase) | User accounts, series metadata, episode metadata, subscriptions, ratings |
| Cache layer | Redis (hosted on Upstash) | Session tokens, recommendation results, trending data, leaderboard |
| Media storage | AWS S3 + CloudFront CDN | Episode video files, thumbnails, subtitle files |
| Analytics warehouse | BigQuery | Event data from Segment; batch analytics; ML training data |
| Search | PostgreSQL full-text search (MVP); Elasticsearch (Phase 2 if search volume justifies) | Series and episode search |

**Key database tables (MVP):**
- `users` (id, email, created_at, subscription_tier, subscription_expiry)
- `series` (id, title, genre, episode_count, description, thumbnail_url, average_rating, status)
- `episodes` (id, series_id, episode_number, video_url, duration, subtitle_url, published_at)
- `user_progress` (user_id, episode_id, watched_at, completion_percentage, rating)
- `subscriptions` (id, user_id, tier, started_at, expires_at, store_transaction_id)
- `watchlist` (user_id, series_id, added_at)

### 6.5 Infrastructure

| Component | Technology | Notes |
|---|---|---|
| App hosting | AWS ECS (containerized Node.js + FastAPI) | Auto-scaling on CPU/memory thresholds |
| Database | Supabase (PostgreSQL managed) | Scales to 50M rows without migration |
| CDN | CloudFront (US East primary + 4 edge locations) | Episode video served from nearest edge |
| CI/CD | GitHub Actions | Deploy to staging on PR merge; manual promote to production |
| Monitoring | Datadog (infrastructure) + Sentry (application errors) | PagerDuty for P1 alerts |
| Secrets management | AWS Secrets Manager | API keys, database credentials |

---

## 7. Success Metrics

### Primary North Star Metric
**Engaged Monthly Active Users (EMAU):** Monthly active users who complete ≥ 5 episodes in a calendar month.

*Rationale: EMAU captures both acquisition (MAU) and meaningful engagement (5+ episodes), aligning the whole product around the behavior that predicts retention and subscription conversion.*

### 30-Day Post-Launch Targets (May 2026 Target)

| Metric | Baseline (Launch) | 30-Day Target | Measurement |
|---|---|---|---|
| Total installs | 0 | 15,000 | App store + attribution |
| MAU | 0 | 8,000 | DAU/MAU calculation |
| EMAU (5+ episodes/month) | 0 | 3,500 | Episode completion events |
| D1 Retention | — | ≥ 38% | Cohort analysis |
| D7 Retention | — | ≥ 20% | Cohort analysis |
| Episodes/session | — | ≥ 5.0 | Player events |
| Free-to-paid conversion | — | ≥ 3.0% | Subscription events |
| App store rating | — | ≥ 4.2 / 5.0 | App store console |
| Crash-free session rate | — | ≥ 99.0% | Sentry |
| Episode load time (p90) | — | < 3.0s | Performance monitoring |

### 90-Day Post-Launch Targets (June 2026 Target)

| Metric | 30-Day Value | 90-Day Target | Growth |
|---|---|---|---|
| Total installs | 15,000 | 50,000 | +233% |
| MAU | 8,000 | 22,000 | +175% |
| EMAU | 3,500 | 10,000 | +186% |
| D7 Retention | 20% | 28% | +8pp |
| D30 Retention | — | 14% | New |
| Free-to-paid conversion | 3.0% | 5.5% | +2.5pp |
| Paid subscribers | 0 | 1,200 | New |
| MRR | $0 | $9,000 | New |
| Episodes/session | 5.0 | 7.5 | +50% |
| DAU/MAU ratio | — | 0.28 | New |

---

## 8. Launch Plan

### Phase 1: Internal Alpha (Weeks 1–3)
**Audience:** DramaSnap team + 50 invited friends and family
**Goals:**
- Validate core functionality (playback, auth, paywall)
- Identify P1 bugs before external users
- Calibrate episode quality bar

**Criteria to advance:** No P0 bugs; crash-free session rate ≥ 98%; all P0 user stories functional

---

### Phase 2: Closed Beta (Weeks 4–6)
**Audience:** 500 invited users (mix of commuters, entertainment enthusiasts, test users from waitlist)
**Goals:**
- Measure D7 retention and episode completion rates
- Validate AI content quality meets minimum acceptance threshold (≥ 3.8/5.0 average rating)
- Identify UX friction points in onboarding and paywall

**Criteria to advance:** D7 retention ≥ 15%; average episode rating ≥ 3.8/5.0; no P0 bugs; paywall flow functional

---

### Phase 3: Limited Public Launch (Weeks 7–10)
**Audience:** Soft launch to US App Store + Google Play (no paid UA)
**Goals:**
- Validate organic discovery and App Store conversion
- Test subscription purchase flow at real scale
- Establish baseline metrics for A/B testing

**Activities:**
- ASO optimization (title, description, screenshots, preview video)
- Press kit and media outreach to tech/entertainment publications
- TikTok seeding with episode clips (organic)

**Criteria to advance:** ≥ 1,000 organic installs; D1 retention ≥ 30%; no viral negative feedback

---

### Phase 4: Growth Launch (Weeks 11–14)
**Audience:** Paid UA campaigns (Meta, TikTok, Google UAC)
**Goals:**
- Scale installs to target (15,000 by 30-day mark)
- Validate CAC and LTV:CAC ratio
- Identify highest-LTV acquisition channels

**Budget:** $25,000 initial UA spend
**Channels:** Meta (primary), TikTok (secondary), Google UAC (tertiary)

**Criteria to advance:** CAC ≤ $5.00; D7 retention ≥ 18%; paid subscriber conversion ≥ 2.5%

---

### Phase 5: Iteration Sprint (Weeks 14–16)
**Activities:**
- Ship P1 features based on beta feedback priority
- Launch first A/B tests (onboarding, autoplay)
- Conduct post-launch user research (20 interviews)
- Adjust content pipeline based on quality rating data

**Output:** Revised 90-day roadmap based on launch learnings

---

## 9. Risks and Mitigations

| Risk | Severity | Probability | Mitigation |
|---|---|---|---|
| AI content quality insufficient — users don't find content compelling enough to return | Critical | Medium | Quality gate before publish; human editorial review for first 50 series; content rating tracking from day 1 |
| Video generation costs exceed revenue early — burn rate unsustainable | High | Low | Cost monitoring dashboard; automatic quality tier selection (Runway for hero content, lower-cost models for volume); content reuse across similar genres |
| App store rejection (Apple/Google content policy) | High | Low | Content policy review before submission; AI-generated content labeled per App Store guidelines; human moderation pipeline active at launch |
| Low D7 retention despite good D1 metrics — one-time novelty, not habit | Critical | Medium | Hooked Model framework embedded in design; cliffhanger scripting standard; early retention analysis at D3 to catch before D7 |
| Competitor launches similar product (TikTok, Netflix) during MVP window | High | Low | Speed of learning is the moat; first-mover advantage in Western market; content library head start |
| Payment processing failure at paywall — users unable to subscribe | High | Low | Test IAP flow in all markets before launch; App Store review timeline accounting in launch plan; fallback to web paywall if IAP rejected |

---

## 10. Out of Scope (MVP)

The following features are explicitly excluded from MVP to maintain launch timeline and focus:

- **Social graph / friend following** — not needed for core habit loop
- **Live comments / reactions** — deferred to Phase 2 (requires moderation infrastructure)
- **Offline downloads** — deferred to Phase 2 (DRM complexity)
- **Multi-language dubbing** — English only at MVP
- **Creator tools / UGC** — not part of MVP content model
- **Watch parties** — deferred to Phase 3
- **Web app** — mobile-only MVP; web app is Phase 2
- **Smart TV / tablet-optimized layout** — mobile-first; tablet/TV deferred
- **Ads on free tier** — free tier is ad-free at MVP (add in Phase 2 when ad ops are set up)
- **Gift subscriptions** — deferred to Phase 2
- **Advanced analytics / creator dashboard** — no creators in MVP
- **Customer support tooling** — email support only at MVP; dedicated tooling in Phase 2

---

*This PRD is a living document. It will be updated as learning from the beta and launch phases invalidates assumptions or changes priorities. All changes require sign-off from the Head of Product and must be versioned.*
