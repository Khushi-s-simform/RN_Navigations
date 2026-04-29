import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AuthProvider } from './Context/AuthContext';
import { withAuth } from './hoc/withAuth';

import HomeScreen from './Screen/HomeScreen';
import ProfileScreen from './Screen/ProfileScreen';
import SettingsScreen from './Screen/SettingScreen';

// Wrap protected screens
const ProtectedProfile = withAuth(ProfileScreen);
const ProtectedSettings = withAuth(SettingsScreen);

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Tabs
function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Settings" component={ProtectedSettings} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Profile" component={ProtectedProfile} />
          <Stack.Screen name="Tabs" component={TabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}