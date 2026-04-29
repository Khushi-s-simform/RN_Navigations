import React from 'react';
import { View, Text, Button } from 'react-native';
import { useAuth } from '../../Context/AuthContext';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const { isLoggedIn, login, logout } = useAuth();
  const navigation = useNavigation<any>();

  return (
    <View style={{ padding: 20 }}>
      <Text>Home Screen</Text>
      <Text>Status: {isLoggedIn ? 'Logged In' : 'Logged Out'}</Text>

      {!isLoggedIn ? (
        <Button title="Login" onPress={login} />
      ) : (
        <Button title="Logout" onPress={logout} />
      )}

      <Button
        title="Go to Photos"
        onPress={() => navigation.navigate('Photos')}
      />
    </View>
  );
}