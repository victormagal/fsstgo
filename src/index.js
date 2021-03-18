import React from 'react';
import Routes from './routes';
import { NavigationContainer } from '@react-navigation/native';

export default function mainNav() {
    return (
        <NavigationContainer>
            <Routes />
        </NavigationContainer>
    );
}