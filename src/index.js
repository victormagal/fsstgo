import React from 'react';
import Routes from './routes';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

export default function mainNav() {
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
