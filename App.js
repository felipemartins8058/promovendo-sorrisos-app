//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AppLoading } from 'expo';
import { StatusBar } from 'react-native';

import { Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { OpenSans_400Regular, OpenSans_700Bold, useFonts } from '@expo-google-fonts/open-sans';

import Home from './src/pages/Home';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_600SemiBold,
    OpenSans_400Regular,
    OpenSans_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading/>
  };

  return (
    <>
      <StatusBar barStyle="white-content" backgroundColor="transparent" translucent/>
      <Home/>
    </>
  );
}
