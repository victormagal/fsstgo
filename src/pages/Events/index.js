import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import EventsComponent from '../../components/Events';

export default function EventsPage({ navigation }) {
    const content = [
        {
            location: 'Brasília - DF',
            title: 'Título do 1º evento',
            price: 'Gratuito',
            page: 'Event'
        },
        {
            location: 'Goiânia - GO',
            title: 'Título do 2º evento',
            price: 'Gratuito',
            page: 'Event'
        },
        {
            location: 'Anápolis - GO',
            title: 'Título do 3º evento',
            price: 'Gratuito',
            page: 'Event'
        },
        {
            location: 'Goiânia - GO',
            title: 'Título do 4º evento',
            price: 'Gratuito',
            page: 'Event'
        },
        {
            location: 'Rio Verde - GO',
            title: 'Título do 5º evento',
            price: 'Gratuito',
            page: 'Event'
        },
        {
            location: 'Firminópolis - GO',
            title: 'Título do 6º evento',
            price: 'Gratuito',
            page: 'Event'
        }
    ];

    const goToPage = (target) => {
        navigation.navigate(target.page);
    }

    return (
        <ScrollView style={{ backgroundColor: 'white', paddingHorizontal: 16 }}>
            <EventsComponent events={content} onPress={goToPage} />
        </ScrollView>
    );
}
