import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../Screen/Home/HomeScreen';
import PhotoScreen from '../Screen/Photo/ENhancedPhotoScreen';

export type RootStackParamList = {
  Home: undefined;
  Photos: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Photos" component={PhotoScreen} />
    </Stack.Navigator>
  );
}