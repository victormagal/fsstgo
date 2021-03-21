import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Home from './pages/Home';
import Profile from './pages/Profile';
import Faq from './pages/Faq';

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Faq" component={Faq} />
        </Stack.Navigator>
    );
}
