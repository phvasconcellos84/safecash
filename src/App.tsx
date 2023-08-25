import React, { useEffect } from 'react';
import { Platform } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import AppNavigation from './navigation';
import { hideNavigationBar } from 'react-native-navigation-bar-color';

function App(): JSX.Element {
  useEffect(() => {
    if (Platform.OS === 'android') SplashScreen.hide();

    hideNavigationBar();
  }, []);

  return (
    <>
      <AppNavigation />
    </>
  );
}

export default App;
