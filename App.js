//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StatusBar } from 'react-native';
import AppLoading from 'expo-app-loading';

import { Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { OpenSans_400Regular, OpenSans_700Bold, useFonts } from '@expo-google-fonts/open-sans';

import Routes from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_600SemiBold,
    OpenSans_400Regular,
    OpenSans_700Bold
  });

  if(!fontsLoaded) {
    return <AppLoading/>
  }

  return (
    <>
      <StatusBar barStyle="white-content" backgroundColor="#6BA0FF" translucent/>
      <Routes/>
    </>
  );
}
