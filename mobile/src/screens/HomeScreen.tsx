import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import {
  MOCK_MOVIES,
  TRENDING_IDS,
  NEW_RELEASE_IDS,
  CONTINUE_WATCHING,
  Movie,
} from '../data/mockData';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const {width} = Dimensions.get('window');
const CARD_WIDTH = width * 0.4;

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  const handleMoviePress = (movie: Movie, startEpisode: number = 1) => {
    navigation.navigate('VideoPlayer', {
      movie,
      startEpisode,
    });
  };

  const renderMovieCard = (movie: Movie, showProgress?: number) => (
    <TouchableOpacity
      key={movie.id}
      style={styles.movieCard}
      onPress={() => handleMoviePress(movie)}
      activeOpacity={0.8}>
      <Image source={{uri: movie.thumbnailUrl}} style={styles.thumbnail} />
      {showProgress && (
        <View style={styles.progressBar}>
          <View style={[styles.progress, {width: `${showProgress * 100}%`}]} />
        </View>
      )}
      <Text style={styles.movieTitle} numberOfLines={2}>
        {movie.title}
      </Text>
      <View style={styles.genreContainer}>
        {movie.genre.slice(0, 2).map((g, i) => (
          <Text key={i} style={styles.genreTag}>
            {g}
          </Text>
        ))}
      </View>
      <View style={styles.ratingRow}>
        <Text style={styles.rating}>⭐ {movie.rating}</Text>
        <Text style={styles.episodes}>{movie.totalEpisodes} eps</Text>
      </View>
    </TouchableOpacity>
  );

  const renderContinueWatching = () => {
    const continueItems = CONTINUE_WATCHING.map(item => {
      const movie = MOCK_MOVIES.find(m => m.id === item.movieId);
      return movie ? {movie, ...item} : null;
    }).filter(Boolean);

    if (continueItems.length === 0) return null;

    return (
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Continue Watching</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {continueItems.map(item => {
            if (!item) return null;
            return (
              <TouchableOpacity
                key={item.movie.id}
                style={styles.continueCard}
                onPress={() =>
                  handleMoviePress(item.movie, item.episodeNumber)
                }
                activeOpacity={0.8}>
                <Image
                  source={{uri: item.movie.thumbnailUrl}}
                  style={styles.continueThumbnail}
                />
                <View style={styles.progressBar}>
                  <View
                    style={[styles.progress, {width: `${item.progress * 100}%`}]}
                  />
                </View>
                <View style={styles.continueInfo}>
                  <Text style={styles.continueTitle} numberOfLines={1}>
                    {item.movie.title}
                  </Text>
                  <Text style={styles.episodeNumber}>
                    Episode {item.episodeNumber}/{item.movie.totalEpisodes}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    );
  };

  const renderSection = (title: string, movieIds: string[]) => {
    const movies = movieIds
      .map(id => MOCK_MOVIES.find(m => m.id === id))
      .filter(Boolean) as Movie[];

    return (
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{title}</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {movies.map(movie => renderMovieCard(movie))}
        </ScrollView>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.logo}>DramaSnap</Text>
          <View style={styles.headerRight}>
            <TouchableOpacity style={styles.iconButton}>
              <Text style={styles.icon}>🔍</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Text style={styles.icon}>👤</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Continue Watching */}
        {renderContinueWatching()}

        {/* Trending */}
        {renderSection('🔥 Trending This Week', TRENDING_IDS)}

        {/* New Releases */}
        {renderSection('🆕 New This Week', NEW_RELEASE_IDS)}

        {/* All Movies */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>All Movies</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {MOCK_MOVIES.map(movie => renderMovieCard(movie))}
          </ScrollView>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            🤖 Powered by AI-Generated Content
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#222',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF3B5C',
  },
  headerRight: {
    flexDirection: 'row',
    gap: 12,
  },
  iconButton: {
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 20,
  },
  section: {
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  movieCard: {
    width: CARD_WIDTH,
    marginLeft: 16,
    marginBottom: 8,
  },
  thumbnail: {
    width: CARD_WIDTH,
    height: CARD_WIDTH * 1.5,
    borderRadius: 8,
    backgroundColor: '#222',
  },
  progressBar: {
    height: 3,
    backgroundColor: '#333',
    marginTop: 8,
    borderRadius: 2,
  },
  progress: {
    height: '100%',
    backgroundColor: '#FF3B5C',
    borderRadius: 2,
  },
  movieTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFF',
    marginTop: 8,
  },
  genreContainer: {
    flexDirection: 'row',
    marginTop: 4,
    gap: 4,
  },
  genreTag: {
    fontSize: 11,
    color: '#999',
    backgroundColor: '#222',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
  ratingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  rating: {
    fontSize: 12,
    color: '#FFD700',
  },
  episodes: {
    fontSize: 12,
    color: '#999',
  },
  continueCard: {
    width: width * 0.6,
    marginLeft: 16,
  },
  continueThumbnail: {
    width: width * 0.6,
    height: (width * 0.6) * 0.6,
    borderRadius: 8,
    backgroundColor: '#222',
  },
  continueInfo: {
    marginTop: 8,
  },
  continueTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFF',
  },
  episodeNumber: {
    fontSize: 12,
    color: '#999',
    marginTop: 2,
  },
  footer: {
    padding: 32,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#666',
  },
});

export default HomeScreen;
