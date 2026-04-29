import React from 'react';
import { View, Text, Button } from 'react-native';
import { useAuth } from '../Context/AuthContext';

export function withAuth<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  return function ProtectedComponent(props: P) {
    const { isLoggedIn, login } = useAuth();

    if (!isLoggedIn) {
      return (
        <View style={{ padding: 20 }}>
          <Text>Please login first 🔒</Text>
          <Button title="Login" onPress={login} />
        </View>
      );
    }

    return <WrappedComponent {...props} />;
  };
}
