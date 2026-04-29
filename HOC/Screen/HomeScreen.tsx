import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation<any>();

  return (
    <View style={{ padding: 20 }}>
      <Text>Home Screen (Public)</Text>

      <Button title="Go to Profile" onPress={() => navigation.navigate('Profile')} />
      <Button title="Go to Settings" onPress={() => navigation.navigate('Tabs')} />
    </View>
  );
}