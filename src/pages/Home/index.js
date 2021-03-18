import React from 'react';
import { Button, Text, View } from 'react-native';

export default function Home({ navigation }) {
    function navigateToProfile() {
        navigation.navigate('Profile');
    }

    return (
        <View>
            <Text>Home Page</Text>
            <Button title="Ir para o Profile" onPress={navigateToProfile} />
        </View>
    );
}