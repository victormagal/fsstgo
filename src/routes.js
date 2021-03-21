import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Home from './pages/Home';
import Profile from './pages/Profile';

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            {/* <Stack.Screen name="Profile" component={Profile} /> */}
        </Stack.Navigator>
    );
}