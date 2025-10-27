# DramaSnap Mobile App

React Native mobile application for iOS and Android.

## Setup

See [Getting Started Guide](../docs/GETTING_STARTED.md) for detailed setup instructions.

## Quick Start

```bash
# Install dependencies
npm install

# iOS
cd ios && pod install && cd ..
npm run ios

# Android
npm run android
```

## Tech Stack

- React Native
- TypeScript
- Redux Toolkit
- React Navigation
- React Native Video

## Structure

```
src/
├── components/      # Reusable components
├── screens/         # Screen components
├── navigation/      # Navigation setup
├── store/          # Redux store
├── services/       # API clients
├── hooks/          # Custom hooks
├── utils/          # Utilities
└── constants/      # Constants
```

## More Info

- [Features](../docs/FEATURES.md)
- [Architecture](../docs/ARCHITECTURE.md)
