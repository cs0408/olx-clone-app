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
import SignupScreen from './screens/SignupScreen';
import AddItemScreen from './screens/AddItemScreen';



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
          <AddItemScreen />
        </View>
      </PaperProvider>
    </>
  );
};

export default App;
