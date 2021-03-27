import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';

import Routes from './routes';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent={true}
      />
      <Routes />
    </NavigationContainer>
  );
}
