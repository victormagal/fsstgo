import React from 'react';
import {Text, StatusBar} from 'react-native';

import {Container} from './src/AppStyles';

export default function App() {
  return (
    <Container>
      <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent={true}
      />
      <Text>FSSTGO</Text>
    </Container>
  );
}
