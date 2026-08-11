# DramaSnap - AI-Generated Short Drama Streaming Platform

## 🎬 [→ TEST THE PROTOTYPE NOW!](QUICKSTART.md) ←

**Want to see it in action?** We have a fully functional React Native prototype you can run!

**[→ Quick Start Guide](QUICKSTART.md)** - Get it running in 5 minutes

### ✨ Working Prototype Features
- ✅ **ReelSaga v1-lite onboarding + personalization** — 7-screen onboarding, payoff carousel, personalized home reorder driven by a static ordering table, A/B gate with fail-open ([docs](docs/REELSAGA_V1LITE.md))
- ✅ Vertical video player (TikTok-style)
- ✅ Swipe up/down navigation between episodes
- ✅ Home screen with movie browsing
- ✅ 5 sample movies with multiple episodes
- ✅ Auto-play and continue watching
- ✅ Tap to pause/play, show/hide controls

---

## Overview

DramaSnap is a revolutionary mobile streaming platform that delivers AI-generated short drama content in bite-sized, addictive episodes. Each episode runs for 60 seconds in vertical format, stringing together to create complete movies of approximately 100 minutes (100 episodes).

## Key Value Proposition

- **Quick & Engaging**: 60-second episodes perfect for modern attention spans
- **Deep Storytelling**: Complete narrative arcs spanning 100+ episodes per movie
- **Vertical Format**: Optimized for mobile-first consumption (TikTok/Reels style)
- **AI-Powered**: Fully automated content generation (scripts, video, voice)
- **Hyper-Personalized**: AI learns your preferences to recommend perfect stories
- **Premium Content**: Subscription-based access to unlimited drama content

## Content Types

- **Romance**: Love triangles, second-chance romance, workplace romance
- **Mystery**: Detective stories, psychological thrillers, whodunits
- **Drama**: Family sagas, revenge plots, coming-of-age stories
- **Hybrid Genres**: Mix and match for unique experiences

## Target Audience

- Age: 18-35
- Behavior: Heavy TikTok/Instagram Reels users
- Pain Point: Want engaging stories but lack time for traditional shows
- Desire: Emotional connection through serialized content
- Platform: Mobile-first (iOS & Android)

## Business Model

### Subscription Tiers
- **Weekly**: $4.99/week - Trial period for new users
- **Monthly**: $12.99/month - Most popular option
- **Yearly**: $99.99/year - Best value (35% savings)

### Free Tier
- 3 episodes per day
- Ads between episodes
- Limited personalization
- Standard quality

### Premium Features
- Unlimited episodes
- Ad-free experience
- Early access to new movies
- Exclusive genres
- Download for offline viewing
- 4K quality support
- Advanced personalization
- Create custom story preferences

## Project Structure

```
/
├── docs/              # Detailed documentation
├── app/               # Mobile app source code
├── backend/           # Backend services
├── ai-engine/         # AI content generation
└── README.md          # This file
```

## Quick Links

- [Feature Specifications](docs/FEATURES.md)
- [Technical Architecture](docs/ARCHITECTURE.md)
- [User Experience Flow](docs/UX_FLOW.md)
- [Personalization Strategy](docs/PERSONALIZATION.md)
- [Monetization Strategy](docs/MONETIZATION.md)
- [Content Guidelines](docs/CONTENT_GUIDELINES.md)
- [Development Roadmap](docs/ROADMAP.md)

## Getting Started

See [docs/GETTING_STARTED.md](docs/GETTING_STARTED.md) for development setup instructions.

## Technology Stack

- **Mobile**: React Native / Flutter
- **Backend**: Node.js / Python (FastAPI)
- **AI Engine**: GPT-4 for scripts, Runway/Pika for video, ElevenLabs for voice
- **Database**: PostgreSQL + Redis
- **Storage**: AWS S3 / CloudFlare R2
- **CDN**: CloudFlare
- **Analytics**: Mixpanel + Custom ML models

## License

Proprietary - All Rights Reserved

## Contact

For inquiries: info@dramasnap.app
