/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text, View, StatusBar} from 'react-native';

import {
  DefaultTheme,
  Provider as PaperProvider,
  Title,
} from 'react-native-paper';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// import icons
import Feather from 'react-native-vector-icons/Feather';

import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import AddItemScreen from './screens/AddItemScreen';
import ListItemHomeScreen from './screens/ListItemHomeScreen';
import AccountScreen from './screens/AccountScreen';

// used theme from react-native-paper
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'skyblue',
  },
};

const Stack = createStackNavigator();
// const Stack = createNativeStackNavigator(); //used before StackNavigator - first call createStackNavigator()
const Tab = createBottomTabNavigator(); //used before tabNavigator - first call createBottomTabNavigator()

//NatieStackNavigator - This function used for containing "LoginScreen and SignupScreen"
const AuthNavigator = () => {
  return (
    // In StackNavigator - Login and Sign
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

//TabNavigator - This function used for conaining "HomeScreen, AddItemScreen, AccountScreen"
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          let iconName;

          // if (route.name === 'Home') {
          //   iconName = 'home';
          // } else if (route.name === 'Add') {
          //   iconName = 'plus-circle';
          // }
          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Add':
              iconName = 'plus-circle';
              break;
            case 'Account':
              iconName = 'user';
              break;
            default:
              break;
          }

          // You can return any component that you like here!
          // customize Icon
          return <Feather name={iconName} size={30} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
      tabBarOptions={{
        activeTintColor: '#588BAE',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="Home"
        component={ListItemHomeScreen}
        options={{title: ''}}
      />
      <Tab.Screen name="Add" component={AddItemScreen} options={{title: ''}} />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{title: ''}}
      />
    </Tab.Navigator>
  );
};

//Combine StackNavigator and TabNavigator - This component used for Navigation
const Navigation = () => {
  // const User = 'fgb';
  return (
    <NavigationContainer>
      <TabNavigator />
      {/* <AuthNavigator /> */}
      {/* This is condition used for check user avaialble or not - If user is available then show TabNavigator or If User is not available then show AuthNavigator. */}
      {/* {User ? <TabNavigator /> : <AuthNavigator />} */}
    </NavigationContainer>
  );
};

//Main function
const App = () => {
  return (
    <>
      <PaperProvider theme={theme}>
        <StatusBar barStyle="dark-content" backgroundColor="skyblue" />
        <View style={{flex: 1}}>
          <Navigation />
        </View>
      </PaperProvider>
    </>
  );
};

export default App;
