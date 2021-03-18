import React from 'react';
import { Button, View } from 'react-native';
import { Title } from './styles';

export default function Home({ navigation }) {
    function navigateToProfile() {
        navigation.navigate('Profile');
    }

    return (
        <View>
            <Title>Home Page</Title>
            <Button title="Ir para o Profile" onPress={navigateToProfile} />
        </View>
    );
}