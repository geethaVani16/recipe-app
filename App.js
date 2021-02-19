import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading';
import AppNavigator from './navigation/AppNavigator';
import { enableScreens } from 'react-native-screens'

enableScreens();

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require('./assets/fonts/OpenSans-Regular.ttf'),
    "open-sans-bold": require('./assets/fonts/OpenSans-Bold.ttf'),

  })
}

export default function App() {
  const [fontLoaded, setfontLoaded] = useState(false)
  if (!fontLoaded) {
    return <AppLoading
      startAsync={fetchFonts}
      onFinish={() => setfontLoaded(true)}
      onError={(err) => console.log(err)}
    />
  }
  return <AppNavigator />

}


