import 'react-native-gesture-handler';
import React from 'react';
import { View, Text } from 'react-native';
import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Button } from '@react-navigation/elements';
import Icon from 'react-native-vector-icons/Ionicons';

// ---------------- TYPES ----------------

// Home Stack
type HomeStackParamList = {
  Home: undefined;
  ProductDetails: {
    productId: number;
    name: string;
  };
};

// Cart Stack
type CartStackParamList = {
  Cart: undefined;
};

// Tabs
type TabParamList = {
  HomeStack: NavigatorScreenParams<HomeStackParamList>;
  CartStack: NavigatorScreenParams<CartStackParamList>;
};

const HomeStack = createNativeStackNavigator<HomeStackParamList>();
const CartStack = createNativeStackNavigator<CartStackParamList>();
const Tabs = createBottomTabNavigator<TabParamList>();
const Drawer = createDrawerNavigator();


//  Home Screen
function HomeScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>

      <Button
        onPress={() =>
          navigation.navigate('ProductDetails', {
            productId: 101,
            name: 'iPhone 15',
          },{})
        }
      >
        Go to Product
      </Button>
    </View>
  );
}

// Product Details
function ProductDetailsScreen({ route, navigation }: any) {
  const { productId, name } = route.params;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Product ID: {productId}</Text>
      <Text>Name: {name}</Text>

      <Button
        onPress={() =>
          navigation.navigate('CartStack', {
            screen: 'Cart',
            params: {
                productId,
                name,
              },
          })
        }
      >
        Go to Cart
      </Button>

      <Button onPress={() => navigation.goBack()}>
        Go Back
      </Button>
    </View>
  );
}

// Cart Screen
function CartScreen({route , navigation} : any) {
    const {productId , name} = route.params;
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Cart Screen</Text>
      <Text> Cart Item : {productId} , {name}</Text>
    </View>
  );
}


// Home Stack
function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen
        name="ProductDetails"
        component={ProductDetailsScreen}
      />
    </HomeStack.Navigator>
  );
}

// Cart Stack
function CartStackScreen() {
  return (
    <CartStack.Navigator screenOptions={{ headerShown: false }}>
      <CartStack.Screen name="Cart" component={CartScreen} />
    </CartStack.Navigator>
  );
}

// ---------------- TABS ----------------
function TabsScreen() {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="HomeStack"
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home-outline" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="CartStack"
        component={CartStackScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="cart-outline" size={24} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}

// ---------------- DRAWER ----------------
function DrawerScreen() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerLabel: () => null,
        drawerStyle: { width: 80 },
      }}
    >
      <Drawer.Screen
        name="Main"
        component={TabsScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Icon name="grid-outline" size={24} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

// ---------------- ROOT ----------------
export default function PassingParam() {
  return (
    <NavigationContainer>
      <DrawerScreen />
    </NavigationContainer>
  );
}