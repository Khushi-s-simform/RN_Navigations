import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './Context/AuthContext';
import AppNavigator from './Navigation/AppNavigator';

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
}