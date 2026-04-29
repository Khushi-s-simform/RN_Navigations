import React from 'react';
import { View, Text } from 'react-native';
import {
  NavigationContainer,
  LinkingOptions,
  RouteProp,
} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

// ---------------- TYPES ----------------
type RootStackParamList = {
  Home: undefined;
  Details: { id: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

// ---------------- LINKING ----------------
const linking: LinkingOptions<RootStackParamList> = {
  prefixes: ['myapp://'],
  config: {
    screens: {
      Home: 'home',
      Details: 'details/:id',
    },
  },
};

// ---------------- SCREENS ----------------

// Home Screen
type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

function HomeScreen({}: HomeProps) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
      <Text>Try opening: myapp://details/123</Text>
    </View>
  );
}

// Details Screen
type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

function DetailsScreen({ route }: DetailsProps) {
  const { id } = route.params;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details Screen</Text>
      <Text>ID: {id}</Text>
    </View>
  );
}

export default function DeepLinking() {
  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
