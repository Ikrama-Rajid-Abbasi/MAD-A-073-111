/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Node} from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

// import SplashScreen from './src/screens/SplashScreen';
import InitialLaunchScreen from './src/screens/InitialLaunchScreen';
// import FeedScreen from './src/screens/FeedScreen';
// import LoginScreen from './src/screens/LoginScreen';

const App: () => Node = () => {
  return (
    <View style={styles.container}>
      {/* <SplashScreen /> */}
      <InitialLaunchScreen/>
      {/* <LoginScreen /> */}
      {/* <FeedScreen /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
});

export default App;
