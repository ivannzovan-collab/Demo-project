# 🚀 Quick Start - Test DramaSnap Prototype NOW!

Want to see the app in action? Follow these steps:

## Option 1: Test on Your Computer (Recommended)

### For Mac Users (iOS + Android)

```bash
# 1. Install Node.js if you don't have it
brew install node watchman

# 2. Clone and setup
cd mobile
npm install

# 3. For iOS
cd ios && pod install && cd ..
npm run ios

# 4. For Android (alternative)
npm run android
```

**Time**: 10-15 minutes first time, 30 seconds after that

### For Windows/Linux Users (Android only)

```bash
# 1. Install Node.js from nodejs.org

# 2. Setup
cd mobile
npm install

# 3. Make sure Android Studio is installed and emulator is running
npm run android
```

## Option 2: Watch Demo Video (Coming Soon)

We'll record a demo video showing the app in action!

## What You'll See

### 🏠 Home Screen
- Browse 5 sample movies
- Trending section
- Continue watching
- Beautiful movie cards

### 📺 Video Player
- **Vertical video** (TikTok style)
- **Swipe up** for next episode
- **Swipe down** for previous
- **Tap** to pause/play
- Auto-play between episodes

### 🎬 Sample Content
- **Lost Hearts**: Romance drama (5 episodes)
- **The Missing Hour**: Mystery thriller (3 episodes)
- **Inheritance**: Family drama (2 episodes)
- More movies to explore!

## Need Help?

### Prerequisites Check

**Do you have Node.js?**
```bash
node --version
# Should show v16 or higher
```

**Do you have npm?**
```bash
npm --version
# Should show version number
```

If not, install from [nodejs.org](https://nodejs.org)

### Common Issues

**"Command not found: npm"**
→ Install Node.js from nodejs.org

**"Unable to resolve module"**
```bash
cd mobile
rm -rf node_modules
npm install
```

**"Build failed" on iOS**
```bash
cd mobile/ios
pod install
cd ../..
```

**Video won't play**
→ Check internet connection (videos stream online)

## Installation Steps (Detailed)

### Step 1: Install Prerequisites

**Mac:**
```bash
# Install Homebrew if you don't have it
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Node.js and Watchman
brew install node watchman

# Install Xcode from App Store (for iOS)

# Install CocoaPods
sudo gem install cocoapods
```

**Windows:**
1. Download Node.js from [nodejs.org](https://nodejs.org)
2. Download Android Studio from [developer.android.com](https://developer.android.com/studio)
3. Set up Android SDK and emulator

### Step 2: Clone & Install

```bash
# Navigate to the mobile directory
cd mobile

# Install JavaScript dependencies
npm install

# For iOS only - Install native dependencies
cd ios
pod install
cd ..
```

### Step 3: Run the App

**iOS (Mac only):**
```bash
# Option A: Using npm script
npm run ios

# Option B: Specify device
npx react-native run-ios --simulator="iPhone 14 Pro"
```

**Android:**
```bash
# Make sure emulator is running first!
# Open Android Studio > Virtual Device Manager > Start emulator

# Then run
npm run android
```

## First Time Running?

The first build takes 10-15 minutes. Subsequent runs take only 30 seconds!

**What's happening:**
1. Metro bundler starts (JavaScript bundler)
2. Native code compiles (Xcode for iOS, Gradle for Android)
3. App installs on simulator/emulator
4. App launches automatically

**You'll see:**
- Terminal with Metro bundler logs
- Simulator/emulator window opens
- App launches with DramaSnap logo
- Home screen appears with movies

## Using the Prototype

### Navigation
1. **Home Screen** → Scroll to browse movies
2. **Tap a movie card** → Opens video player
3. **In player** → Swipe up/down to navigate episodes
4. **Tap screen** → Show/hide controls
5. **Tap back arrow** → Return to home

### Test Flow
1. Start with "Lost Hearts" (has 5 episodes)
2. Swipe up to go to episode 2, 3, 4, 5
3. Notice auto-play between episodes
4. Try pause/play by tapping center
5. Swipe down to go back
6. Return home and try another movie

## Technical Details

**What's included:**
- ✅ React Native app (iOS + Android)
- ✅ Home screen with movie browsing
- ✅ Full-featured video player
- ✅ Swipe gesture navigation
- ✅ 5 sample movies with episodes
- ✅ Continue watching functionality

**What's NOT included (yet):**
- ❌ User accounts / authentication
- ❌ Real AI-generated content
- ❌ Subscription system
- ❌ Social features
- ❌ Backend server

This is a **frontend prototype** to test the UX!

## Next Steps

After testing the prototype:

1. **Give Feedback**: What do you like? What would you change?
2. **Share Ideas**: What features are most important?
3. **Check Roadmap**: See [ROADMAP.md](docs/ROADMAP.md) for full development plan
4. **Read Docs**: Explore [docs/](docs/) for complete specifications

## Questions?

- Check [mobile/README.md](mobile/README.md) for detailed mobile setup
- See [docs/GETTING_STARTED.md](docs/GETTING_STARTED.md) for full development guide
- Review [docs/FEATURES.md](docs/FEATURES.md) for feature specifications

---

## TL;DR (Super Quick)

```bash
# Got Node.js installed? Run this:
cd mobile && npm install && npm run ios
# (or npm run android for Android)

# First time: 10-15 min
# After that: 30 seconds
```

**That's it! Enjoy testing DramaSnap! 🎬✨**
