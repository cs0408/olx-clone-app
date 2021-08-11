/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {Text, View, StatusBar} from 'react-native';

import {
  DefaultTheme,
  Provider as PaperProvider,
  Title,
} from 'react-native-paper';

import auth from '@react-native-firebase/auth';

import {
  NavigationContainer,
  DefaultTheme as DefaultThemeNavigation,
} from '@react-navigation/native';
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
    backgroundColor:'#ffffff'
  },
};

// used theme from react navigation
const MyTheme = {
  ...DefaultThemeNavigation,
  colors: {
    ...DefaultThemeNavigation.colors,
    backgroundColor:'#ffffff',
    
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

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Add') {
            iconName = 'plus-circle';
          } else if (route.name === 'Account') {
            iconName = 'plus-circle';
          }

          // You can return any component that you like here!
          // customize Icon
          return (
            <View
              style={{
                borderRadius: 100,
                borderWidth: 10,
                borderColor: '#00C0F0',
                backgroundColor: '#00C0F0',
                marginTop: -20,
              }}>
              <Feather name={iconName} size={30} color={color} />
            </View>
          );
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
      tabBarOptions={{
        showLabel: false,
        activeTintColor: '#005063',
        inactiveTintColor: 'gray',
        style: {
          backgroundColor: '#00C0F0',
        },
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
  const [user, setUser] = useState('');

  //used "useEffect" - take "function" as a argument, second option pass "empty dependency - means empty array"
  // empty dependency - used beacuse we need used useEffect only one time.
  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(userExits => {
      if (userExits) {
        setUser(userExits);
      } else {
        setUser('');
      }
    });
    return unsubscribe;
  }, []);
  return (
    <NavigationContainer theme={MyTheme}>
      {/* <TabNavigator /> */}
      {/* <AuthNavigator /> */}
      {/* This is condition used for check user avaialble or not - If user is available then show TabNavigator or If User is not available then show AuthNavigator. */}
      {user ? <TabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

//Main function
const App = () => {
  return (
    <>
      <PaperProvider theme={theme}>
        <StatusBar barStyle="light-content" backgroundColor="skyblue" />
        <View style={{flex: 1}}>
          <Navigation />
        </View>
      </PaperProvider>
    </>
  );
};

export default App;
