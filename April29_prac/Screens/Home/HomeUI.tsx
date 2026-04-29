import React from 'react';
import { View, Text, Button } from 'react-native';

type Props = {
    userName: string;
    theme: string;
    goToProfile: () => void;
    goToSettings: () => void; 
  };
  
  export default function HomeUI({
    userName,
    theme,
    goToProfile,
    goToSettings,
  }: Props) {
    return (
      <View style={{ padding: 20 }}>
        <Text>Home Screen</Text>
        <Text>User: {userName}</Text>
        <Text>Theme: {theme}</Text>
  
        <Button title="Go to Profile" onPress={goToProfile} />
        <Button title="Go to Settings" onPress={goToSettings} /> 
      </View>
    );
  }