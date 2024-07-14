import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { AntDesign } from '@expo/vector-icons';
import Notifications from './components/Notifications';
import Profile from './components/Profile';
import HomePage from './components/HomePage';
import { View, Text } from 'react-native';
import SplashScreen from './components/SplashScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading time
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return (
     <SplashScreen />
    );
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home';
              return <AntDesign name={iconName} size={14} color={color} />;
            } else if (route.name === 'Fixtures') {
              iconName = 'soccer';
              return <MaterialCommunityIcons name={iconName} size={14} color={color} />;
            } else if (route.name === 'Profile') {
              iconName = 'account';
              return <MaterialCommunityIcons name={iconName} size={14} color={color} />;
            }
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: '#ffa358',
            height: 50,
            paddingBottom: 5,
            paddingTop: 5,
          },
          tabBarLabelStyle: {
            fontSize: 12,
          },
          tabBarItemStyle: {
            paddingVertical: 5,
          },
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={HomePage} options={{ tabBarLabel: 'Home' }} />
        <Tab.Screen name="Fixtures" component={Notifications} options={{ tabBarLabel: 'Fixtures' }} />
        <Tab.Screen name="Profile" component={Profile} options={{ tabBarLabel: 'Profile' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
