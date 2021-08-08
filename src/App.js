/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text, View, StatusBar} from 'react-native';

import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

import LoginScreen from './screens/LoginScreen';




const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'skyblue',
  },
};

const App = () => {
  return (
    <>
      <PaperProvider theme={theme}>
        <StatusBar barStyle="dark-content" />
        <View style={{flex: 1}}>
          <LoginScreen />
        </View>
      </PaperProvider>
    </>
  );
};

export default App;
