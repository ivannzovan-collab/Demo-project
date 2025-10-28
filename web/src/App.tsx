import { useState, useEffect } from 'react';
import { SplashScreen } from './components/SplashScreen';
import { LanguageFilter } from './components/LanguageFilter';
import { NotificationPrompt } from './components/NotificationPrompt';
import { IOSInstallPrompt } from './components/IOSInstallPrompt';
import { usePushNotifications } from './services/pushNotifications';
import { OnboardingQuiz } from './components/OnboardingQuiz';
import { VideoPlayer } from './components/VideoPlayer';
import { ChoiceDialog } from './components/ChoiceDialog';
import { SubscriptionSheet } from './components/SubscriptionSheet';
import { AdDialog } from './components/AdDialog';
import { ProfileSheet } from './components/ProfileSheet';
import { HomeScreen } from './components/HomeScreen';
import { BottomNav } from './components/BottomNav';
import { CategoryView } from './components/CategoryView';
import { DramaDetailView } from './components/DramaDetailView';
import { Episode, UserProfile, UserPreferences, Choice, Drama, Category } from './types';
import { mockCategories } from './data/mockData';

// Mock data for episodes - now with real video URLs
const generateEpisodes = (pathId: string = 'main', drama?: Drama): Episode[] => {
  const episodes: Episode[] = [];
  const baseVideoUrl = drama?.videoUrl || 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4';

  for (let i = 1; i <= 100; i++) {
    episodes.push({
      id: i,
      title: `Episode ${i}: The Journey Continues`,
      duration: 60,
      thumbnail: drama?.thumbnail || 'https://images.unsplash.com/photo-1602301534298-10c4fc7f06a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWF0aWMlMjBkcmFtYSUyMGNvdXBsZXxlbnwxfHx8fDE3NjE0ODQ3NzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      videoUrl: baseVideoUrl,
      isDecisionPoint: i === 10 || i === 20 || i === 30,
      decisionPointNumber: i === 10 ? 1 : i === 20 ? 2 : i === 30 ? 3 : undefined,
      pathId,
    });
  }
  return episodes;
};

const decisionChoices: Record<number, Choice[]> = {
  10: [
    {
      id: 'ep10-career',
      text: 'Focus on Career',
      pathId: 'career-path',
      preview: 'Emma accepts the promotion, prioritizing her professional growth',
    },
    {
      id: 'ep10-love',
      text: 'Choose Love',
      pathId: 'love-path',
      preview: 'Emma decides to stay and work things out with Alex',
    },
    {
      id: 'ep10-family',
      text: 'Support Family',
      pathId: 'family-path',
      preview: 'Emma returns home to help her family through crisis',
    },
  ],
  20: [
    {
      id: 'ep20-confront',
      text: 'Confront the Truth',
      pathId: 'truth-path',
      preview: 'Face the mystery head-on and demand answers',
    },
    {
      id: 'ep20-investigate',
      text: 'Investigate Secretly',
      pathId: 'stealth-path',
      preview: 'Gather evidence quietly before making a move',
    },
    {
      id: 'ep20-trust',
      text: 'Trust the Process',
      pathId: 'trust-path',
      preview: 'Wait and see how events naturally unfold',
    },
  ],
  30: [
    {
      id: 'ep30-forgive',
      text: 'Forgive and Move Forward',
      pathId: 'forgiveness-path',
      preview: 'Let go of past hurts and start fresh',
    },
    {
      id: 'ep30-revenge',
      text: 'Seek Justice',
      pathId: 'justice-path',
      preview: 'Make sure everyone pays for their actions',
    },
    {
      id: 'ep30-leave',
      text: 'Leave It All Behind',
      pathId: 'new-start-path',
      preview: 'Start over in a new city with a clean slate',
    },
  ],
};

export default function App() {
  // NEW: Splash Screen, Language Filter, and Push Notifications State
  const [showSplash, setShowSplash] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    return localStorage.getItem('preferredLanguage') || 'all';
  });
  const [showNotificationPrompt, setShowNotificationPrompt] = useState(false);
  const [episodesWatched, setEpisodesWatched] = useState(0);

  // Initialize push notifications
  const pushNotifs = usePushNotifications();

  // Existing state
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [activeTab, setActiveTab] = useState<'home' | 'watch' | 'profile'>('home');
  const [viewMode, setViewMode] = useState<'home' | 'category' | 'dramaDetail' | 'watch'>('home');
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);
  const [episodes, setEpisodes] = useState<Episode[]>(generateEpisodes());
  const [showChoiceDialog, setShowChoiceDialog] = useState(false);
  const [currentDecisionPoint, setCurrentDecisionPoint] = useState<number | null>(null);
  const [showSubscriptionSheet, setShowSubscriptionSheet] = useState(false);
  const [showAdDialog, setShowAdDialog] = useState(false);
  const [showProfileSheet, setShowProfileSheet] = useState(false);
  const [choicesInCurrentArc, setChoicesInCurrentArc] = useState(0);
  const [currentDrama, setCurrentDrama] = useState<Drama | null>(null);

  const [userProfile, setUserProfile] = useState<UserProfile>({
    isPremium: false,
    coins: 0,
    choicesMadeInArc: 0,
    preferences: {
      romance: 0,
      mystery: 0,
      drama: 0,
      career: 0,
      family: 0,
      action: 0,
    },
    watchHistory: [],
  });

  const currentEpisode = episodes[currentEpisodeIndex];

  // NEW: Show notification prompt after 3 episodes watched
  useEffect(() => {
    if (episodesWatched === 3 && pushNotifs.permission === 'default') {
      setShowNotificationPrompt(true);
    }
  }, [episodesWatched, pushNotifs.permission]);

  // NEW: Send welcome notification when app loads (if permission granted)
  useEffect(() => {
    if (pushNotifs.permission === 'granted' && !showSplash && !showOnboarding) {
      pushNotifs.notifyDailyRecommendation();
    }
  }, [showSplash, showOnboarding]);

  const handleOnboardingComplete = (preferences: UserPreferences) => {
    setUserProfile((prev) => ({
      ...prev,
      preferences,
    }));
    setShowOnboarding(false);
  };

  const handleDramaClick = (drama: Drama) => {
    setCurrentDrama(drama);
    setViewMode('dramaDetail');
  };

  const handleCategoryClick = (category: Category) => {
    setSelectedCategory(category);
    setViewMode('category');
  };

  const handlePlayDrama = () => {
    if (currentDrama) {
      setEpisodes(generateEpisodes('main', currentDrama));
      setCurrentEpisodeIndex(currentDrama.episodesWatched);
      setViewMode('watch');
      setActiveTab('watch');
    }
  };

  const handleBackToHome = () => {
    setViewMode('home');
    setActiveTab('home');
    setSelectedCategory(null);
    setCurrentDrama(null);
  };

  const trackEpisodeWatch = (episodeId: number, action: 'watch' | 'skip' | 'replay') => {
    setUserProfile((prev) => ({
      ...prev,
      watchHistory: [
        ...prev.watchHistory,
        {
          episodeId,
          watched: action === 'watch',
          skipped: action === 'skip',
          replayed: action === 'replay' ? 1 : 0,
        },
      ],
    }));

    // Update preferences based on episode content (simulated)
    if (action === 'replay' && episodeId % 3 === 0) {
      setUserProfile((prev) => ({
        ...prev,
        preferences: {
          ...prev.preferences,
          career: prev.preferences.career + 1,
        },
      }));
    }
  };

  const handleNextEpisode = () => {
    // NEW: Track episodes watched for notification prompt
    setEpisodesWatched(prev => prev + 1);

    trackEpisodeWatch(currentEpisode.id, 'watch');

    if (currentEpisode.isDecisionPoint) {
      setCurrentDecisionPoint(currentEpisode.id);
      setShowChoiceDialog(true);

      // NEW: Send notification about decision point
      if (pushNotifs.permission === 'granted') {
        pushNotifs.notifyChoicePoint();
      }
    } else {
      if (currentEpisodeIndex < episodes.length - 1) {
        setCurrentEpisodeIndex(currentEpisodeIndex + 1);
      }
    }
  };

  const handleSkipEpisode = () => {
    trackEpisodeWatch(currentEpisode.id, 'skip');
    if (currentEpisodeIndex < episodes.length - 1) {
      setCurrentEpisodeIndex(currentEpisodeIndex + 1);
    }
  };

  const handleReplayEpisode = () => {
    trackEpisodeWatch(currentEpisode.id, 'replay');
  };

  const handleChoiceSelect = (choiceId: string, usedCoins: boolean) => {
    if (usedCoins) {
      setUserProfile((prev) => ({
        ...prev,
        coins: prev.coins - 100,
      }));
    }

    setChoicesInCurrentArc(choicesInCurrentArc + 1);
    setShowChoiceDialog(false);
    setCurrentDecisionPoint(null);

    // Move to next episode
    if (currentEpisodeIndex < episodes.length - 1) {
      setCurrentEpisodeIndex(currentEpisodeIndex + 1);
    }
  };

  const handleWatchAds = () => {
    setShowChoiceDialog(false);
    setShowAdDialog(true);
  };

  const handleAdsComplete = () => {
    setUserProfile((prev) => ({
      ...prev,
      coins: prev.coins + 100,
    }));
    setShowAdDialog(false);
    setShowChoiceDialog(true);
  };

  const handleSubscribe = (tier: 'weekly' | 'monthly' | 'yearly') => {
    setUserProfile((prev) => ({
      ...prev,
      isPremium: true,
    }));
    setShowSubscriptionSheet(false);
    setShowChoiceDialog(true);
  };

  // NEW: Notification handlers
  const handleAcceptNotifications = async () => {
    const permission = await pushNotifs.requestPermission();
    if (permission === 'granted') {
      await pushNotifs.sendNotification(
        'Notifications Enabled! 🎉',
        { body: "You'll now receive updates about new episodes and recommendations!" }
      );
    }
    setShowNotificationPrompt(false);
  };

  const handleDeclineNotifications = () => {
    localStorage.setItem('notificationPromptShown', 'true');
    setShowNotificationPrompt(false);
  };

  // NEW: Language change handler
  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    // You can filter content based on language here
    console.log('Language changed to:', language);
  };

  const isFirstChoiceInArc = choicesInCurrentArc === 0;

  const getPersonalizationBadge = (): string | undefined => {
    const { preferences } = userProfile;
    const max = Math.max(...Object.values(preferences));

    if (max === 0) return undefined;

    if (preferences.career === max) return 'Career-focused';
    if (preferences.romance === max) return 'Romance-focused';
    if (preferences.mystery === max) return 'Mystery-focused';
    if (preferences.drama === max) return 'Drama-focused';
    if (preferences.family === max) return 'Family-focused';
    if (preferences.action === max) return 'Action-focused';

    return undefined;
  };

  // NEW: Show splash screen first
  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  if (showOnboarding) {
    return <OnboardingQuiz onComplete={handleOnboardingComplete} />;
  }

  return (
    <div className="min-h-screen bg-black">
      {activeTab === 'home' && viewMode === 'home' && (
        <div>
          {/* NEW: Language Filter */}
          <div className="p-4 flex justify-end bg-black">
            <LanguageFilter
              currentLanguage={selectedLanguage}
              onLanguageChange={handleLanguageChange}
            />
          </div>

          <HomeScreen
            categories={mockCategories}
            userPreferences={userProfile.preferences}
            coins={userProfile.coins}
            isPremium={userProfile.isPremium}
            onDramaClick={handleDramaClick}
            onOpenProfile={() => setShowProfileSheet(true)}
            onUpgrade={() => setShowSubscriptionSheet(true)}
            onCategoryClick={handleCategoryClick}
          />
        </div>
      )}

      {viewMode === 'category' && selectedCategory && (
        <CategoryView
          category={selectedCategory}
          onBack={handleBackToHome}
          onDramaClick={handleDramaClick}
        />
      )}

      {viewMode === 'dramaDetail' && currentDrama && (
        <DramaDetailView
          drama={currentDrama}
          onBack={handleBackToHome}
          onPlayDrama={handlePlayDrama}
        />
      )}

      {(activeTab === 'watch' || viewMode === 'watch') && (
        <VideoPlayer
          episode={currentEpisode}
          totalEpisodes={episodes.length}
          coins={userProfile.coins}
          isPremium={userProfile.isPremium}
          onNext={handleNextEpisode}
          onSkip={handleSkipEpisode}
          onReplay={handleReplayEpisode}
          onOpenProfile={() => setShowProfileSheet(true)}
          personalizationBadge={getPersonalizationBadge()}
        />
      )}

      {activeTab === 'profile' && (
        <ProfileSheet
          open={true}
          onClose={() => setActiveTab('home')}
          isPremium={userProfile.isPremium}
          coins={userProfile.coins}
          preferences={userProfile.preferences}
          onUpgrade={() => {
            setActiveTab('home');
            setShowSubscriptionSheet(true);
          }}
        />
      )}

      {viewMode !== 'watch' && (
        <BottomNav
          activeTab={activeTab}
          onTabChange={(tab) => {
            setActiveTab(tab);
            if (tab === 'home') {
              setViewMode('home');
              setSelectedCategory(null);
              setCurrentDrama(null);
            }
          }}
          isPremium={userProfile.isPremium}
        />
      )}

      {showChoiceDialog && currentDecisionPoint && (
        <ChoiceDialog
          open={showChoiceDialog}
          decisionPoint={currentDecisionPoint}
          choices={decisionChoices[currentDecisionPoint]}
          coins={userProfile.coins}
          isPremium={userProfile.isPremium}
          isFirstChoice={isFirstChoiceInArc}
          onSelectChoice={handleChoiceSelect}
          onWatchAds={handleWatchAds}
          onUpgrade={() => {
            setShowChoiceDialog(false);
            setShowSubscriptionSheet(true);
          }}
        />
      )}

      <SubscriptionSheet
        open={showSubscriptionSheet}
        onClose={() => setShowSubscriptionSheet(false)}
        onSubscribe={handleSubscribe}
      />

      <AdDialog
        open={showAdDialog}
        onClose={() => setShowAdDialog(false)}
        onComplete={handleAdsComplete}
        adsRequired={2}
      />

      {activeTab !== 'profile' && (
        <ProfileSheet
          open={showProfileSheet}
          onClose={() => setShowProfileSheet(false)}
          isPremium={userProfile.isPremium}
          coins={userProfile.coins}
          preferences={userProfile.preferences}
          onUpgrade={() => {
            setShowProfileSheet(false);
            setShowSubscriptionSheet(true);
          }}
        />
      )}

      {/* NEW: Notification Prompt */}
      {showNotificationPrompt && (
        <NotificationPrompt
          onAccept={handleAcceptNotifications}
          onDecline={handleDeclineNotifications}
        />
      )}

      {/* NEW: iOS Install Prompt */}
      <IOSInstallPrompt />
    </div>
  );
}
