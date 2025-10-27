import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import VideoPlayerScreen from './src/screens/VideoPlayerScreen';
import {Movie} from './src/data/mockData';

export type RootStackParamList = {
  Home: undefined;
  VideoPlayer: {
    movie: Movie;
    startEpisode?: number;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            animation: 'fade',
          }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="VideoPlayer" component={VideoPlayerScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
