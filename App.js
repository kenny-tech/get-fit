import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome';

import WelcomeScreen from './app/screens/Welcome';
import SigninScreen from './app/screens/Signin';
import SignupScreen from './app/screens/Signup';
import HomeScreen from './app/screens/Home';
import CategoryScreen from './app/screens/Category';
import WishlistScreen from './app/screens/Wishlist';
import ProfileScreen from './app/screens/Profile';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator()

const BottomTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
          name="HomeScreen" component={HomeScreen} options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <Icon name="home" size={30} color="#0037BA" />
          ),
      }}/>
      <Tab.Screen 
        name="Category" component={CategoryScreen} options={{
        tabBarLabel: 'Category',
        tabBarIcon: () => (
          <Icon name="list" size={30} color="#0037BA" />
        ),
      }}/>
       <Tab.Screen 
        name="Wishlist" component={WishlistScreen} options={{
        tabBarLabel: 'Wishlist',
        tabBarIcon: () => (
          <Icon name="heart" size={30} color="#0037BA" />
        ),
      }}/>
      <Tab.Screen 
        name="Profile" component={ProfileScreen} options={{
        tabBarLabel: 'Profile',
        tabBarIcon: () => (
          <Icon name="user-circle" size={30} color="#0037BA" />
        ),
      }}/>
    </Tab.Navigator>
  );
}

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Home"
          component={BottomTab}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Signin" component={SigninScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  
};


export default App;
