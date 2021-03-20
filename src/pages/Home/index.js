import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Title } from './styles';

export default function Home({ navigation }) {
    function navigateToProfile() {
        navigation.navigate('Profile');
    }

    return (
        <View>
            <Title>Home Page</Title>
            <TouchableOpacity>
                <Text>Eventos</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Biblioteca</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Video Aulas</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Meus ingressos</Text>
            </TouchableOpacity>
        </View>
    );
}