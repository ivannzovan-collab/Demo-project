// Mock data for DramaSnap prototype
// Using free sample videos from various sources

// Free placeholder videos (vertical format when possible)
// Note: These are sample URLs - in production, you'd use your AI-generated content
export const MOCK_MOVIES = [
  {
    id: '1',
    title: 'Lost Hearts',
    description: 'A passionate romance between two souls who meet by chance but are torn apart by destiny. Can love conquer all?',
    genre: ['Romance', 'Drama'],
    totalEpisodes: 100,
    thumbnailUrl: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=400',
    rating: 4.5,
    episodes: [
      {
        id: '1-1',
        episodeNumber: 1,
        title: 'The First Encounter',
        videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        thumbnailUrl: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=400',
        duration: 60,
      },
      {
        id: '1-2',
        episodeNumber: 2,
        title: 'Unexpected Connection',
        videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
        thumbnailUrl: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=400',
        duration: 60,
      },
      {
        id: '1-3',
        episodeNumber: 3,
        title: 'The Secret',
        videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
        thumbnailUrl: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=400',
        duration: 60,
      },
      {
        id: '1-4',
        episodeNumber: 4,
        title: 'Falling Deeper',
        videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
        thumbnailUrl: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=400',
        duration: 60,
      },
      {
        id: '1-5',
        episodeNumber: 5,
        title: 'The Revelation',
        videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
        thumbnailUrl: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=400',
        duration: 60,
      },
    ],
  },
  {
    id: '2',
    title: 'The Missing Hour',
    description: 'A woman wakes up with no memory of one critical hour. What happened? And why does everyone seem to be lying?',
    genre: ['Mystery', 'Thriller'],
    totalEpisodes: 90,
    thumbnailUrl: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400',
    rating: 4.7,
    episodes: [
      {
        id: '2-1',
        episodeNumber: 1,
        title: 'The Awakening',
        videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
        thumbnailUrl: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400',
        duration: 60,
      },
      {
        id: '2-2',
        episodeNumber: 2,
        title: 'First Clue',
        videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
        thumbnailUrl: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400',
        duration: 60,
      },
      {
        id: '2-3',
        episodeNumber: 3,
        title: 'Suspicious Behavior',
        videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
        thumbnailUrl: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400',
        duration: 60,
      },
    ],
  },
  {
    id: '3',
    title: 'Inheritance',
    description: 'When a wealthy patriarch dies, his family discovers shocking secrets that threaten to tear them apart.',
    genre: ['Drama', 'Family'],
    totalEpisodes: 110,
    thumbnailUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400',
    rating: 4.3,
    episodes: [
      {
        id: '3-1',
        episodeNumber: 1,
        title: 'The Reading',
        videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4',
        thumbnailUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400',
        duration: 60,
      },
      {
        id: '3-2',
        episodeNumber: 2,
        title: 'Hidden Truths',
        videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
        thumbnailUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400',
        duration: 60,
      },
    ],
  },
  {
    id: '4',
    title: 'Second Chances',
    description: 'After 10 years apart, high school sweethearts reunite. But can they overcome the past?',
    genre: ['Romance', 'Drama'],
    totalEpisodes: 85,
    thumbnailUrl: 'https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=400',
    rating: 4.6,
    episodes: [
      {
        id: '4-1',
        episodeNumber: 1,
        title: 'The Reunion',
        videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4',
        thumbnailUrl: 'https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=400',
        duration: 60,
      },
    ],
  },
  {
    id: '5',
    title: 'Corporate Shadows',
    description: 'A young lawyer discovers her firm is hiding a dangerous secret. Speaking up could cost her everything.',
    genre: ['Thriller', 'Drama'],
    totalEpisodes: 95,
    thumbnailUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400',
    rating: 4.4,
    episodes: [
      {
        id: '5-1',
        episodeNumber: 1,
        title: 'The Assignment',
        videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        thumbnailUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400',
        duration: 60,
      },
    ],
  },
];

// Continue watching data
export const CONTINUE_WATCHING = [
  {
    movieId: '1',
    episodeNumber: 23,
    progress: 0.65,
  },
  {
    movieId: '2',
    episodeNumber: 5,
    progress: 0.23,
  },
];

// Trending movies (IDs)
export const TRENDING_IDS = ['2', '1', '4', '3'];

// New releases (IDs)
export const NEW_RELEASE_IDS = ['5', '3', '2'];
