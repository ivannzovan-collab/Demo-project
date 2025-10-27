# DramaSnap Mobile App - PROTOTYPE

React Native mobile application for iOS and Android.

⚠️ **This is a working PROTOTYPE** - Test the core video player experience!

## ✨ Features in this Prototype

- ✅ Vertical video player (TikTok-style)
- ✅ Swipe up/down to navigate episodes
- ✅ Tap to pause/play
- ✅ Auto-play next episode
- ✅ Home screen with movie browsing
- ✅ Continue watching section
- ✅ Trending & new releases
- ✅ 5 sample movies with multiple episodes

## 🚀 Quick Start (5 minutes)

### Prerequisites

Make sure you have these installed:

**For Mac (iOS & Android):**
- Node.js (v16+): `brew install node`
- Watchman: `brew install watchman`
- Xcode (for iOS): Download from App Store
- CocoaPods: `sudo gem install cocoapods`
- Android Studio (for Android): [Download here](https://developer.android.com/studio)

**For Windows/Linux (Android only):**
- Node.js (v16+)
- Android Studio with Android SDK
- Java Development Kit (JDK 11)

### Installation

```bash
# 1. Navigate to mobile folder
cd mobile

# 2. Install dependencies
npm install

# 3. iOS only - Install pods
cd ios && pod install && cd ..
```

### Run the App

#### iOS (Mac only):
```bash
# Start Metro bundler
npm start

# In a new terminal, run on iOS simulator
npm run ios

# Or specify a device
npx react-native run-ios --simulator="iPhone 14 Pro"
```

#### Android:
```bash
# Make sure Android emulator is running or device is connected

# Start Metro bundler
npm start

# In a new terminal, run on Android
npm run android
```

## 🎮 How to Use

### Home Screen
- **Scroll** to browse movies
- **Tap movie card** to start watching
- **Continue Watching** shows your progress

### Video Player
- **Tap screen** to show/hide controls
- **Tap center** to pause/play
- **Swipe UP** ↑ for next episode
- **Swipe DOWN** ↓ for previous episode (or exit)
- **Tap ←** to go back to home

### Try These Movies!
1. **Lost Hearts** - Romance/Drama (5 episodes)
2. **The Missing Hour** - Mystery/Thriller (3 episodes)
3. **Inheritance** - Drama/Family (2 episodes)
4. **Second Chances** - Romance (1 episode)
5. **Corporate Shadows** - Thriller (1 episode)

## 📹 About the Videos

The prototype uses free sample videos from Google's test video library. In production, these would be replaced with AI-generated 60-second vertical drama episodes.

## 🐛 Troubleshooting

**Metro bundler won't start:**
```bash
npx react-native start --reset-cache
```

**iOS build fails:**
```bash
cd ios
pod deintegrate
pod install
cd ..
npm run ios
```

**Android build fails:**
```bash
cd android
./gradlew clean
cd ..
npm run android
```

**Video won't play:**
- Make sure you have internet connection (videos stream from URL)
- Try restarting the app

## 🎨 What's Next?

This prototype demonstrates the core UX. The full app would include:
- Real AI-generated 60-second vertical videos
- User authentication & profiles
- Personalized recommendations
- Social features (comments, likes, shares)
- Subscription system
- Offline downloads
- Much more content!

## 📱 Tech Stack

- React Native 0.72
- TypeScript
- React Navigation
- react-native-video
- React Native Gesture Handler

## 📁 Project Structure

```
src/
├── data/
│   └── mockData.ts       # Sample movies & episodes
├── screens/
│   ├── HomeScreen.tsx    # Browse movies
│   └── VideoPlayerScreen.tsx  # Watch episodes
└── (more coming soon...)
```

## 🔗 More Info

- [Full Feature Specs](../docs/FEATURES.md)
- [Technical Architecture](../docs/ARCHITECTURE.md)
- [Development Roadmap](../docs/ROADMAP.md)

---

**Have questions?** Open an issue or check the [Getting Started Guide](../docs/GETTING_STARTED.md)
