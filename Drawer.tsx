import 'react-native-gesture-handler';
import { View, Text, TouchableOpacity } from 'react-native';
import {
  NavigationContainer,
  NavigatorScreenParams,
  useNavigation,
} from '@react-navigation/native';
import { Button } from '@react-navigation/elements';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

type RootStackParamList = {
  HOME: undefined;
  Detail: undefined;
};
type HomeStackParamList = {
  Home: undefined;
  Details: undefined;
};
type SettingsStackParamList = {
  Settings: undefined;
  Profile: undefined;
};

const HomeStack = createNativeStackNavigator<HomeStackParamList>();
const SettingsStack = createNativeStackNavigator<SettingsStackParamList>();
const MyTabs = createBottomTabNavigator<RootTabParamList>();

// Root Tabs
type RootTabParamList = {
  HomeStack: NavigatorScreenParams<HomeStackParamList>;
  SettingsStack: NavigatorScreenParams<SettingsStackParamList>;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

type HomeNavProp = NativeStackNavigationProp<RootStackParamList, 'HOME'>;

function HomeScreen() {
  const navigation = useNavigation<HomeNavProp>();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text> Home Screen</Text>
      <Icon name="home-outline" size={30} color="#000" />
      <Button onPress={() => navigation.navigate('Detail')}>
        Go to Detail Screen
      </Button>
    </View>
  );
}

type DetailNavProp = NativeStackNavigationProp<RootStackParamList, 'Detail'>;

function DetailScreen() {
  const navigation = useNavigation<DetailNavProp>();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text> Detail Screen</Text>

      <Button onPress={() => navigation.push('Detail')}>
        Again to Detail Screen
      </Button>

      <Button onPress={() => navigation.goBack()}>Go Back</Button>

      <Button onPress={() => navigation.popToTop()}>Go to Top Screen</Button>
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
      <HomeStack.Screen name="Home" component={HomeScreen} options={{headerShown : false}}/>
      <HomeStack.Screen name="Details" component={DetailScreen} options={{headerShown : false}} />
    </HomeStack.Navigator>
  );
}

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} options={{headerShown : false}} />
      <SettingsStack.Screen name="Profile" component={ProfileScreen} options={{headerShown : false}}/>
    </SettingsStack.Navigator>
  );
}

function Root() {
  return (
    <MyTabs.Navigator screenOptions={{ headerShown: false }}>
      <MyTabs.Screen
        name="HomeStack"
        component={HomeStackScreen}
       /*  options={{ tabBarLabel: 'Home' }} */
      />
      <MyTabs.Screen
        name="SettingsStack"
        component={SettingsStackScreen}
        /* options={{ tabBarLabel: 'Settings' }} */
      />
    </MyTabs.Navigator>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={({ navigation  }) => ({
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Icon
              name="menu-outline"
              size={28}
              color="#000"
              style={{ marginLeft: 15 }}
            />
          </TouchableOpacity>
        ),
/*     drawerLabel: () => null,  */   // TO display only icons not label
        drawerActiveTintColor: 'blue',
        drawerType: 'slide',
      })}
    >
      <Drawer.Screen
        name="home"
        component={Root}
        options={({ navigation }) => ({
          drawerIcon: () => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <Icon
                name="home-outline"
                size={28}
                color="#000"
                style={{ marginLeft: 15 }}
              />
            </TouchableOpacity>
          ),
        })}
      />
      <Drawer.Screen
        name="Detail"
        component={Root}
        options={({ navigation }) => ({
          drawerIcon: () => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <Icon
                name="information-circle-outline"
                size={28}
                color="#000"
                style={{ marginLeft: 15 }}
              />
            </TouchableOpacity>
          ),
        })}
      />
    </Drawer.Navigator>
  );
}

export default function DrawerEx() {
  return (
    <NavigationContainer>

      <MyDrawer />
    </NavigationContainer>
  );
}
