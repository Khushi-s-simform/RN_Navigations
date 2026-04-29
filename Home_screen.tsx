import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from '@react-navigation/elements';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useEffect } from 'react';


type RootStackParamList = {
  HOME: undefined;
  Detail: undefined;
  Contact: undefined;
  User: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();


type HomeNavProp = NativeStackNavigationProp<
  RootStackParamList,
  'HOME'
>;

function HomeScreen() {
  const navigation = useNavigation<HomeNavProp>();

  useEffect(() => {
    const state = navigation.getState();

    console.log("FULL STACK:", state.routes);
    console.log("CURRENT INDEX:", state.index);
  }, []);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text> Home Screen</Text>

      <Button onPress={() => navigation.navigate('Detail')}>
        Go to Detail Screen
      </Button>
    </View>
  );
}

type DetailNavProp = NativeStackNavigationProp<
  RootStackParamList,
  'Detail'
>;

function DetailScreen() {
  const navigation = useNavigation<DetailNavProp>();

  React.useEffect(() => {
    const state = navigation.getState();

    console.log("FULL STACK:", state.routes);
    console.log("CURRENT INDEX:", state.index);
  }, []);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text> Detail Screen</Text>

      <Button onPress={() => navigation.push('HOME')}>
        Again to Home Screen
      </Button>
         <Button onPress={() => navigation.navigate('Contact')}>
        Go to Contact Screen
      </Button>

      <Button onPress={() => navigation.goBack()}>
        Go Back
      </Button>

    
    </View>
  );
}


type ContactNavProp = NativeStackNavigationProp<
  RootStackParamList,
  'Contact'
>;

function ContactScreen() {
  const navigation = useNavigation<ContactNavProp>();

  React.useEffect(() => {
    const state = navigation.getState();

    console.log("FULL STACK:", state.routes);
    console.log("CURRENT INDEX:", state.index);
  }, []);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text> Contact Screen</Text>

      <Button onPress={() => navigation.navigate('User')}>
        Go to User Screen
      </Button>
    </View>
  );
}

type UserNavProp = NativeStackNavigationProp<
  RootStackParamList,
  'User'
>;

function UserScreen() {
  const navigation = useNavigation<UserNavProp>();


  React.useEffect(() => {
    const state = navigation.getState();

    console.log("FULL STACK:", state.routes);
    console.log("CURRENT INDEX:", state.index);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text> User Screen</Text>

      <Button onPress={() => navigation.navigate('Detail')}>
        Go to Detail Screen via navigate
      </Button>
      <Button onPress={() => navigation.push('Detail')}>
        Go to Contact Screen via Push
      </Button>

<Button onPress={() => navigation.popToTop()}>
        Go to Top Screen
      </Button>
    </View>
  );
}

function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="HOME"
      screenOptions={{ headerStyle: { backgroundColor: 'skyblue' } }}
    >
      <Stack.Screen
        name="HOME"
        component={HomeScreen}
        options={{ title: 'Overview' }}
      />
      <Stack.Screen name="Detail" component={DetailScreen} />
      <Stack.Screen name="Contact" component={ContactScreen} />
      <Stack.Screen name="User" component={UserScreen} />
    </Stack.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}

/* 
import * as React from 'react';
import { Text, View } from 'react-native';
import {
  NavigationContainer,
  useNavigation,
  NavigatorScreenParams,
} from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button } from '@react-navigation/elements';


// Home Stack
type HomeStackParamList = {
  Home: undefined;
  Details: undefined;
};

// Settings Stack
type SettingsStackParamList = {
  Settings: undefined;
  Profile: undefined;
};

// Root Tabs
type RootTabParamList = {
  HomeStack: NavigatorScreenParams<HomeStackParamList>;
  SettingsStack: NavigatorScreenParams<SettingsStackParamList>;
};


const HomeStack = createNativeStackNavigator<HomeStackParamList>();
const SettingsStack = createNativeStackNavigator<SettingsStackParamList>();
const MyTabs = createBottomTabNavigator<RootTabParamList>();


type HomeNavProp = NativeStackNavigationProp<HomeStackParamList, 'Home'>;

function HomeScreen() {
  const navigation = useNavigation<HomeNavProp>();

  React.useEffect(() => {
    console.log('HomeScreen mounted');
    return () => console.log('HomeScreen unmounted');
  }, []);


  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      console.log('HomeScreen focused');
    });

    return unsubscribe;
  }, [navigation]);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      console.log('HomeScreen blurred');
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>

      <Button onPress={() => navigation.navigate('Details')}>
        Go to Details
      </Button>
    </View>
  );
}

type DetailsNavProp = NativeStackNavigationProp<HomeStackParamList, 'Details'>;

function DetailsScreen() {
  const navigation = useNavigation<DetailsNavProp>();

  React.useEffect(() => {
    console.log('DetailsScreen mounted');
    return () => console.log('DetailsScreen unmounted');
  }, []);


  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      console.log('DetailScreen focused');
    });

    return unsubscribe;
  }, [navigation]);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      console.log('DetailScreen blurred');
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>

      <Button onPress={() => navigation.push('Details')}>
        Go to Details... again
      </Button>

      <Button onPress={() => navigation.goBack()}>
        Go Back
      </Button>

      <Button onPress={() => navigation.popToTop()}>
        Go to Top Screen
      </Button>
    </View>
  );
}


type SettingsNavProp = NativeStackNavigationProp<
  SettingsStackParamList,
  'Settings'
>;

function SettingsScreen() {
  const navigation = useNavigation<SettingsNavProp>();

  React.useEffect(() => {
    console.log('SettingsScreen mounted');
    return () => console.log('SettingsScreen unmounted');
  }, []);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      console.log('SettingScreen focused');
    });

    return unsubscribe;
  }, [navigation]);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      console.log('SettingScreen blurred');
    });

    return unsubscribe;
  }, [navigation]);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings Screen</Text>

      <Button onPress={() => navigation.navigate('Profile')}>
        Go to Profile
      </Button>
    </View>
  );
}

type ProfileNavProp = NativeStackNavigationProp<
  SettingsStackParamList,
  'Profile'
>;

function ProfileScreen() {
  const navigation = useNavigation<ProfileNavProp>();

  React.useEffect(() => {
    console.log('ProfileScreen mounted');
    return () => console.log('ProfileScreen unmounted');
  }, []);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      console.log('ProfileScreen focused');
    });

    return unsubscribe;
  }, [navigation]);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      console.log('ProfileScreen blurred');
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>

      <Button onPress={() => navigation.navigate('Settings')}>
        Go to Settings
      </Button>
    </View>
  );
}

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
}

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Profile" component={ProfileScreen} />
    </SettingsStack.Navigator>
  );
}

function Root() {
  return (
    <MyTabs.Navigator screenOptions={{ headerShown: false }}>
      <MyTabs.Screen
        name="HomeStack"
        component={HomeStackScreen}
        options={{ tabBarLabel: 'Home' }}
      />
      <MyTabs.Screen
        name="SettingsStack"
        component={SettingsStackScreen}
        options={{ tabBarLabel: 'Settings' }}
      />
    </MyTabs.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
} */