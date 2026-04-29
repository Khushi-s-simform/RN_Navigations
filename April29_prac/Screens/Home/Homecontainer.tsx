import React from 'react';
import HomeUI from './HomeUI';
import { useApp } from '../../Context/AppContext';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { useNavigation } from '@react-navigation/native';

type NavProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export default function HomeContainer() {
  const { user, theme } = useApp();
  const navigation = useNavigation<NavProp>();

  return (
    <HomeUI
      userName={user.name}
      theme={theme}
      goToProfile={() => navigation.navigate('Profile')}
      goToSettings={() => navigation.navigate('Settings')}
    />
  );
}
