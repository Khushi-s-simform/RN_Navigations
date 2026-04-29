import React from 'react';
import { View, Text, Button } from 'react-native';
import { useApp } from '../../Context/AppContext';

export default function SettingsScreen() {
  const { theme, toggleTheme } = useApp();

  return (
    <View style={{ padding: 20 }}>
      <Text>Settings Screen</Text>
      <Text>Theme: {theme}</Text>

      <Button title="Toggle Theme" onPress={toggleTheme} />
    </View>
  );
}