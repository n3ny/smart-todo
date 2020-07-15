/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import * as React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { StackNavigatorApp } from './src/screens/routers';
import { Provider } from 'react-redux';
import generateStore from './src/redux/store';

export default App = () => {
  const store = generateStore();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigatorApp />
      </NavigationContainer>
    </Provider>
  );
};