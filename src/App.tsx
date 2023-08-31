import React, { useEffect } from 'react';
import { Platform } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import AppNavigation from './navigation';
import { hideNavigationBar } from 'react-native-navigation-bar-color';
import { store } from './store';
import { Provider } from 'react-redux';
import { MessageBox } from './components/MessageBox';

function App(): JSX.Element {
  useEffect(() => {
    if (Platform.OS === 'android') SplashScreen.hide();

    hideNavigationBar();
  }, []);

  return (
    <Provider store={store}>
      <AppNavigation />
      <MessageBox />
    </Provider>
  );
}

export default App;
