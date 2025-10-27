# DramaSnap Web Demo 🎬

**Instant browser-based demo** - No Xcode or Android Studio required!

## ✨ Features

- 🏠 Browse 5 sample movies
- 📺 Full video player with controls
- ⏯️ Play/pause, progress tracking
- ⏭️ Navigate between episodes
- ❤️ Like, comment, share buttons
- ⌨️ Keyboard shortcuts

## 🚀 Quick Start

```bash
# 1. Navigate to web folder
cd web

# 2. Install dependencies (one time)
npm install

# 3. Start the dev server
npm run dev

# Server will start at http://localhost:3000
# Browser will open automatically!
```

## 🎮 How to Use

### Home Page
- **Scroll** to browse movies
- **Click a movie card** to start watching
- See **Continue Watching** for in-progress movies

### Video Player
- **Click video** to show/hide controls
- **Click play button** or press **Space** to pause/play
- **Click navigation buttons** or use **Arrow keys** (←/→) for prev/next episode
- Press **Esc** to return home

### Keyboard Shortcuts
- `Space` - Play/Pause
- `→` - Next Episode
- `←` - Previous Episode
- `Esc` - Exit to Home

## 🎬 Sample Movies

1. **Lost Hearts** - Romance/Drama (5 episodes)
2. **The Missing Hour** - Mystery/Thriller (3 episodes)
3. **Inheritance** - Drama/Family (2 episodes)
4. **Second Chances** - Romance (1 episode)
5. **Corporate Shadows** - Thriller (1 episode)

## 📹 About Videos

Uses free sample videos from Google's test library. Production version will have AI-generated 60-second vertical drama episodes.

## 🛠️ Tech Stack

- React 18
- Vite (super fast dev server)
- React Router
- HTML5 Video
- Pure CSS (no frameworks)

## 📱 Mobile vs Web

This web demo simulates the mobile experience:

**Web Demo (Current):**
- ✅ Browse movies
- ✅ Watch episodes
- ✅ Basic navigation
- ✅ Video controls
- ⏸️ Horizontal layout

**Mobile App (Full):**
- ✅ All web features
- ✅ Vertical video (9:16)
- ✅ Swipe gestures
- ✅ Native performance
- ✅ Offline downloads
- ✅ Push notifications

## 🐛 Troubleshooting

**Port already in use:**
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
# Then run again
npm run dev
```

**Dependencies error:**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Videos won't play:**
- Check internet connection (videos stream from URLs)
- Try a different browser (Chrome/Firefox recommended)

## 📦 Build for Production

```bash
npm run build
# Creates optimized build in /dist folder

npm run preview
# Preview production build locally
```

## 🔗 More Info

- [Full Documentation](../docs/)
- [Mobile App](../mobile/)
- [Project Roadmap](../docs/ROADMAP.md)

---

**Ready to test?** Run `npm run dev` and open http://localhost:3000 🚀
