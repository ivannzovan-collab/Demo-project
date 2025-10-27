# DramaSnap - Getting Started

## Prerequisites

### Required Software

**Development Tools:**
- Node.js (v18 or higher)
- Python (v3.10 or higher)
- Git
- Docker & Docker Compose
- PostgreSQL client
- Redis client

**Mobile Development:**
- Xcode (for iOS development, macOS only)
- Android Studio (for Android development)
- React Native CLI
- CocoaPods (for iOS dependencies)

**Recommended IDEs:**
- VS Code (with extensions: ESLint, Prettier, React Native Tools)
- WebStorm / IntelliJ IDEA
- PyCharm (for Python services)

### Accounts & API Keys

**Required:**
- GitHub account (repository access)
- OpenAI API key (GPT-4 access)
- AWS account (S3, CloudFront)
- Cloudflare account (CDN, R2)
- Stripe account (payments)

**Recommended:**
- Runway AI / Pika Labs API (video generation)
- ElevenLabs API (voice generation)
- Auth0 account (authentication)
- Mixpanel account (analytics)
- Sentry account (error tracking)

## Project Structure

```
DramaSnap/
├── docs/                          # Documentation
│   ├── FEATURES.md
│   ├── ARCHITECTURE.md
│   ├── UX_FLOW.md
│   ├── PERSONALIZATION.md
│   ├── MONETIZATION.md
│   ├── CONTENT_GUIDELINES.md
│   ├── ROADMAP.md
│   └── GETTING_STARTED.md
│
├── mobile/                        # React Native mobile app
│   ├── src/
│   │   ├── components/           # Reusable UI components
│   │   ├── screens/              # Screen components
│   │   ├── navigation/           # Navigation config
│   │   ├── store/                # Redux store
│   │   ├── services/             # API clients
│   │   ├── hooks/                # Custom hooks
│   │   ├── utils/                # Helper functions
│   │   └── constants/            # Constants & config
│   ├── ios/                      # iOS native code
│   ├── android/                  # Android native code
│   ├── package.json
│   └── README.md
│
├── backend/                       # Backend services
│   ├── services/
│   │   ├── user-service/         # User management
│   │   ├── content-service/      # Content management
│   │   ├── video-service/        # Video streaming
│   │   ├── recommendation-service/ # ML recommendations
│   │   └── analytics-service/    # Analytics processing
│   ├── shared/                   # Shared utilities
│   ├── docker-compose.yml
│   └── README.md
│
├── ai-engine/                     # AI content generation
│   ├── script-generator/         # GPT-4 script generation
│   ├── video-generator/          # Video generation
│   ├── voice-generator/          # Voice synthesis
│   ├── qa-system/                # Quality assurance
│   └── README.md
│
├── infrastructure/                # DevOps & infrastructure
│   ├── kubernetes/               # K8s manifests
│   ├── terraform/                # Infrastructure as code
│   ├── docker/                   # Dockerfiles
│   └── scripts/                  # Deployment scripts
│
├── admin-panel/                   # Admin dashboard (React)
│   ├── src/
│   ├── public/
│   └── README.md
│
├── web/                          # Landing page / web app
│   ├── src/
│   ├── public/
│   └── README.md
│
├── .github/
│   └── workflows/                # GitHub Actions CI/CD
│
├── README.md
└── LICENSE
```

## Quick Start

### 1. Clone Repository

```bash
git clone https://github.com/your-org/dramasnap.git
cd dramasnap
```

### 2. Environment Setup

**Create `.env` files in respective directories:**

**Backend (`backend/.env`):**
```env
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/dramasnap
REDIS_URL=redis://localhost:6379

# JWT
JWT_SECRET=your-super-secret-key-change-this

# AWS
AWS_ACCESS_KEY_ID=your-aws-key
AWS_SECRET_ACCESS_KEY=your-aws-secret
AWS_REGION=us-east-1
S3_BUCKET=dramasnap-videos

# Cloudflare
CLOUDFLARE_ACCOUNT_ID=your-account-id
CLOUDFLARE_API_TOKEN=your-api-token

# Stripe
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# OpenAI
OPENAI_API_KEY=sk-...

# ElevenLabs
ELEVENLABS_API_KEY=your-key

# Auth0
AUTH0_DOMAIN=your-tenant.auth0.com
AUTH0_CLIENT_ID=your-client-id
AUTH0_CLIENT_SECRET=your-client-secret
```

**Mobile (`mobile/.env`):**
```env
API_URL=http://localhost:3000/api
WS_URL=ws://localhost:3000
AUTH0_DOMAIN=your-tenant.auth0.com
AUTH0_CLIENT_ID=your-mobile-client-id
SENTRY_DSN=https://...@sentry.io/...
MIXPANEL_TOKEN=your-mixpanel-token
```

### 3. Start Backend Services (Docker)

```bash
cd backend
docker-compose up -d
```

This starts:
- PostgreSQL (port 5432)
- Redis (port 6379)
- MongoDB (port 27017)
- Elasticsearch (port 9200)

### 4. Install Dependencies

**Backend services:**
```bash
cd backend/services/user-service
npm install

cd ../content-service
npm install

cd ../recommendation-service
pip install -r requirements.txt

# Repeat for other services
```

**Mobile app:**
```bash
cd mobile
npm install
cd ios && pod install && cd ..
```

### 5. Database Setup

**Run migrations:**
```bash
cd backend/services/user-service
npm run migrate

cd ../content-service
npm run migrate
```

**Seed data (optional):**
```bash
npm run seed
```

### 6. Start Development Servers

**Backend services (separate terminals):**

```bash
# Terminal 1: User Service
cd backend/services/user-service
npm run dev
# Runs on http://localhost:3001

# Terminal 2: Content Service
cd backend/services/content-service
npm run dev
# Runs on http://localhost:3002

# Terminal 3: Video Service
cd backend/services/video-service
npm run dev
# Runs on http://localhost:3003

# Terminal 4: Recommendation Service
cd backend/services/recommendation-service
python app.py
# Runs on http://localhost:3004
```

**Mobile app:**

```bash
cd mobile

# iOS
npm run ios

# Android
npm run android

# Or start metro bundler separately
npm start
```

### 7. Access Services

- Mobile App: iOS Simulator / Android Emulator
- API Gateway: http://localhost:3000
- Admin Panel: http://localhost:4000 (once implemented)
- PostgreSQL: localhost:5432
- Redis: localhost:6379

## Development Workflow

### Git Workflow

**Branch Strategy:**
```
main (production)
  ├── develop (integration)
  │   ├── feature/user-authentication
  │   ├── feature/video-player
  │   └── bugfix/login-issue
```

**Creating a feature:**
```bash
git checkout develop
git pull origin develop
git checkout -b feature/my-feature
# Make changes
git add .
git commit -m "feat: add my feature"
git push origin feature/my-feature
# Create pull request to develop
```

**Commit message conventions:**
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting)
- `refactor:` Code refactoring
- `test:` Adding tests
- `chore:` Build process or tooling changes

### Code Quality

**Linting:**
```bash
# JavaScript/TypeScript
npm run lint
npm run lint:fix

# Python
flake8 .
black .
```

**Testing:**
```bash
# Unit tests
npm run test

# Integration tests
npm run test:integration

# E2E tests (mobile)
npm run test:e2e

# Python tests
pytest
```

**Type checking:**
```bash
# TypeScript
npm run type-check

# Python
mypy .
```

## AI Content Generation

### Generating Scripts

```bash
cd ai-engine/script-generator

# Generate a single movie
python generate.py --genre romance --length 100

# Batch generation
python generate_batch.py --count 10 --genres romance mystery drama
```

### Generating Videos

```bash
cd ai-engine/video-generator

# Generate video from script
python generate.py --script-id abc123

# Batch processing
python process_queue.py
```

### Complete Pipeline

```bash
cd ai-engine

# End-to-end generation
python pipeline.py --genre romance --length 100 --output /path/to/output
```

## Database Management

### Migrations

**Create new migration:**
```bash
npm run migration:create -- add-user-table
```

**Run migrations:**
```bash
npm run migrate
```

**Rollback:**
```bash
npm run migrate:rollback
```

### Database Access

**PostgreSQL:**
```bash
psql -h localhost -U dramasnap -d dramasnap

# Useful commands
\dt                 # List tables
\d users            # Describe table
SELECT * FROM users LIMIT 10;
```

**Redis:**
```bash
redis-cli

# Useful commands
KEYS *              # List all keys
GET key_name        # Get value
DEL key_name        # Delete key
FLUSHALL            # Clear all data (be careful!)
```

## Mobile Development

### iOS Development

**Prerequisites:**
- macOS only
- Xcode installed
- CocoaPods installed

**Run on simulator:**
```bash
npm run ios
# Or specify device
npm run ios -- --simulator="iPhone 14 Pro"
```

**Build for device:**
```bash
# Open in Xcode
open ios/DramaSnap.xcworkspace

# Configure signing & build
```

### Android Development

**Prerequisites:**
- Android Studio installed
- Android SDK configured
- Emulator or physical device

**Run on emulator:**
```bash
npm run android
```

**Build APK:**
```bash
cd android
./gradlew assembleRelease
# Output: android/app/build/outputs/apk/release/app-release.apk
```

### Debugging

**React Native Debugger:**
```bash
# Install
brew install react-native-debugger

# Run
open "rndebugger://set-debugger-loc?host=localhost&port=8081"
```

**Chrome DevTools:**
- Shake device/simulator
- Select "Debug" from menu
- Open http://localhost:8081/debugger-ui

**Native Debugging:**
- iOS: Xcode debugging
- Android: Android Studio debugging

## Testing

### Mobile App Tests

**Unit tests:**
```bash
npm test
npm test -- --coverage
```

**Component tests:**
```bash
npm run test:components
```

**E2E tests (Detox):**
```bash
# Build app for testing
npm run test:e2e:build:ios
npm run test:e2e:build:android

# Run tests
npm run test:e2e:ios
npm run test:e2e:android
```

### Backend Tests

**Unit tests:**
```bash
npm test
```

**Integration tests:**
```bash
npm run test:integration
```

**API tests:**
```bash
npm run test:api
```

## Deployment

### Development Environment

**Deploy to staging:**
```bash
npm run deploy:staging
```

### Production Environment

**Backend services:**
```bash
# Build Docker images
docker-compose -f docker-compose.prod.yml build

# Push to registry
docker-compose -f docker-compose.prod.yml push

# Deploy to Kubernetes
kubectl apply -f infrastructure/kubernetes/
```

**Mobile app:**
```bash
# iOS (via Fastlane)
cd ios
fastlane beta  # TestFlight
fastlane release  # App Store

# Android (via Fastlane)
cd android
fastlane beta  # Internal testing
fastlane release  # Google Play
```

## Troubleshooting

### Common Issues

**Issue: Metro bundler won't start**
```bash
# Clear cache
npm start -- --reset-cache

# Or
rm -rf node_modules
npm install
```

**Issue: iOS pods installation fails**
```bash
cd ios
pod deintegrate
pod install
```

**Issue: Android build fails**
```bash
cd android
./gradlew clean
cd ..
npm run android
```

**Issue: Database connection fails**
```bash
# Check if PostgreSQL is running
docker ps

# Restart services
docker-compose restart postgres
```

**Issue: Redis connection fails**
```bash
# Check Redis
docker-compose restart redis

# Test connection
redis-cli ping
```

### Getting Help

1. Check documentation in `/docs`
2. Search existing issues on GitHub
3. Ask in team Slack channel
4. Create a new GitHub issue

## Additional Resources

### Documentation
- [React Native Docs](https://reactnative.dev/)
- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [Redis Documentation](https://redis.io/documentation)

### Tools
- [Postman Collection](./postman/) - API testing
- [Figma Designs](https://figma.com/...) - UI designs
- [Notion Workspace](https://notion.so/...) - Project management

### Team
- **Technical Lead:** [Name] - tech-lead@dramasnap.app
- **Product Manager:** [Name] - pm@dramasnap.app
- **Support:** dev-support@dramasnap.app

## Next Steps

After setting up your development environment:

1. **Read the documentation:**
   - [Feature Specifications](FEATURES.md)
   - [Technical Architecture](ARCHITECTURE.md)
   - [Development Roadmap](ROADMAP.md)

2. **Pick a task:**
   - Check GitHub Issues
   - Look at the current sprint board
   - Ask your team lead for assignment

3. **Start coding:**
   - Create a feature branch
   - Write tests
   - Implement feature
   - Submit pull request

4. **Collaborate:**
   - Daily standup
   - Code reviews
   - Pair programming (when needed)

Welcome to the DramaSnap team!
