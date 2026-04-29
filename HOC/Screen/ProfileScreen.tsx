import React from 'react';
import { View, Text, Button } from 'react-native';
import { useAuth } from '../Context/AuthContext';

function ProfileScreen() {
  const { logout } = useAuth();

  return (
    <View style={{ padding: 20 }}>
      <Text>Profile Screen </Text>
      <Button title="Logout" onPress={logout} />
    </View>
  );
}

export default ProfileScreen;