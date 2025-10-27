import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Animated,
  PanResponder,
} from 'react-native';
import {useNavigation, useRoute, RouteProp} from '@react-navigation/native';
import Video, {VideoRef} from 'react-native-video';
import {RootStackParamList} from '../../App';

type VideoPlayerRouteProp = RouteProp<RootStackParamList, 'VideoPlayer'>;

const {height, width} = Dimensions.get('window');

const VideoPlayerScreen = () => {
  const navigation = useNavigation();
  const route = useRoute<VideoPlayerRouteProp>();
  const {movie, startEpisode = 0} = route.params;

  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(startEpisode);
  const [showControls, setShowControls] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const videoRef = useRef<VideoRef>(null);
  const controlsTimer = useRef<NodeJS.Timeout>();
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const currentEpisode = movie.episodes[currentEpisodeIndex];

  // Auto-hide controls after 3 seconds
  const resetControlsTimer = () => {
    if (controlsTimer.current) {
      clearTimeout(controlsTimer.current);
    }
    setShowControls(true);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();

    controlsTimer.current = setTimeout(() => {
      if (!isPaused) {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start(() => setShowControls(false));
      }
    }, 3000);
  };

  useEffect(() => {
    resetControlsTimer();
    return () => {
      if (controlsTimer.current) {
        clearTimeout(controlsTimer.current);
      }
    };
  }, [isPaused]);

  // Pan responder for swipe gestures
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) => {
        return Math.abs(gestureState.dy) > 10;
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dy < -50) {
          // Swipe up - next episode
          goToNextEpisode();
        } else if (gestureState.dy > 50) {
          // Swipe down - previous episode or exit
          goToPreviousEpisode();
        }
      },
    }),
  ).current;

  const goToNextEpisode = () => {
    if (currentEpisodeIndex < movie.episodes.length - 1) {
      setCurrentEpisodeIndex(currentEpisodeIndex + 1);
      setProgress(0);
      setIsPaused(false);
    } else {
      // End of movie
      navigation.goBack();
    }
  };

  const goToPreviousEpisode = () => {
    if (currentEpisodeIndex > 0) {
      setCurrentEpisodeIndex(currentEpisodeIndex - 1);
      setProgress(0);
      setIsPaused(false);
    } else {
      // Exit player
      navigation.goBack();
    }
  };

  const handlePlayPause = () => {
    setIsPaused(!isPaused);
    resetControlsTimer();
  };

  const handleScreenTap = () => {
    if (!showControls) {
      resetControlsTimer();
    }
  };

  const handleVideoEnd = () => {
    // Auto-play next episode
    setTimeout(() => {
      goToNextEpisode();
    }, 1000);
  };

  const handleProgress = (data: {currentTime: number; seekableDuration: number}) => {
    if (data.seekableDuration > 0) {
      setProgress(data.currentTime / data.seekableDuration);
    }
  };

  const formatEpisodeNumber = () => {
    return `Episode ${currentEpisodeIndex + 1}/${movie.episodes.length}`;
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden />

      {/* Video Player */}
      <View style={styles.videoContainer} {...panResponder.panHandlers}>
        <Video
          ref={videoRef}
          source={{uri: currentEpisode.videoUrl}}
          style={styles.video}
          paused={isPaused}
          repeat={false}
          resizeMode="contain"
          onEnd={handleVideoEnd}
          onProgress={handleProgress}
        />

        {/* Tap to show/hide controls */}
        <TouchableOpacity
          style={styles.tapArea}
          activeOpacity={1}
          onPress={handleScreenTap}>

          {/* Controls Overlay */}
          {showControls && (
            <Animated.View
              style={[styles.controlsOverlay, {opacity: fadeAnim}]}>

              {/* Top Bar */}
              <SafeAreaView style={styles.topBar}>
                <TouchableOpacity
                  style={styles.backButton}
                  onPress={() => navigation.goBack()}>
                  <Text style={styles.backIcon}>←</Text>
                </TouchableOpacity>
                <View style={styles.episodeInfo}>
                  <Text style={styles.episodeText}>{formatEpisodeNumber()}</Text>
                  <Text style={styles.episodeTitle}>
                    {currentEpisode.title}
                  </Text>
                </View>
                <View style={styles.placeholder} />
              </SafeAreaView>

              {/* Center Play/Pause */}
              <View style={styles.centerControls}>
                <TouchableOpacity
                  style={styles.playButton}
                  onPress={handlePlayPause}>
                  <Text style={styles.playIcon}>{isPaused ? '▶️' : '⏸'}</Text>
                </TouchableOpacity>
              </View>

              {/* Bottom Bar */}
              <View style={styles.bottomBar}>
                {/* Progress Bar */}
                <View style={styles.progressContainer}>
                  <View style={styles.progressBar}>
                    <View
                      style={[styles.progressFill, {width: `${progress * 100}%`}]}
                    />
                  </View>
                </View>

                {/* Movie Info */}
                <View style={styles.movieInfo}>
                  <Text style={styles.movieTitle}>{movie.title}</Text>
                  <Text style={styles.movieGenre}>
                    {movie.genre.join(' • ')}
                  </Text>
                </View>

                {/* Action Buttons */}
                <View style={styles.actionButtons}>
                  <TouchableOpacity style={styles.actionButton}>
                    <Text style={styles.actionIcon}>❤️</Text>
                    <Text style={styles.actionText}>Like</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.actionButton}>
                    <Text style={styles.actionIcon}>💬</Text>
                    <Text style={styles.actionText}>Comment</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.actionButton}>
                    <Text style={styles.actionIcon}>↗️</Text>
                    <Text style={styles.actionText}>Share</Text>
                  </TouchableOpacity>
                </View>

                {/* Swipe Hints */}
                <View style={styles.hintsContainer}>
                  <Text style={styles.hintText}>
                    ↑ Swipe up for next episode
                  </Text>
                  {currentEpisodeIndex > 0 && (
                    <Text style={styles.hintText}>
                      ↓ Swipe down for previous episode
                    </Text>
                  )}
                </View>
              </View>
            </Animated.View>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  videoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: width,
    height: height,
  },
  tapArea: {
    ...StyleSheet.absoluteFillObject,
  },
  controlsOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    fontSize: 28,
    color: '#FFF',
    fontWeight: 'bold',
  },
  episodeInfo: {
    flex: 1,
    alignItems: 'center',
  },
  episodeText: {
    fontSize: 14,
    color: '#FFF',
    fontWeight: '600',
  },
  episodeTitle: {
    fontSize: 12,
    color: '#CCC',
    marginTop: 2,
  },
  placeholder: {
    width: 40,
  },
  centerControls: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playIcon: {
    fontSize: 32,
  },
  bottomBar: {
    paddingHorizontal: 16,
    paddingBottom: 32,
  },
  progressContainer: {
    marginBottom: 16,
  },
  progressBar: {
    height: 3,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 2,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#FF3B5C',
    borderRadius: 2,
  },
  movieInfo: {
    marginBottom: 16,
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
  movieGenre: {
    fontSize: 14,
    color: '#CCC',
    marginTop: 4,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  actionButton: {
    alignItems: 'center',
  },
  actionIcon: {
    fontSize: 24,
    marginBottom: 4,
  },
  actionText: {
    fontSize: 12,
    color: '#FFF',
  },
  hintsContainer: {
    alignItems: 'center',
    opacity: 0.7,
  },
  hintText: {
    fontSize: 11,
    color: '#FFF',
    marginTop: 4,
  },
});

export default VideoPlayerScreen;
