import React from 'react';
import { Button, Text, View } from 'react-native';

export default function Profile({ navigation }) {
    function navigateToHome() {
        navigation.navigate('Home');
    }

    return (
        <View>
            <Text>Profile</Text>
            <Button title="Ir para a Home" onPress={navigateToHome} />
        </View>
    );
}