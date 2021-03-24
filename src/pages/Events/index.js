import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import EventsComponent from '../../components/Events';

export default function EventsPage() {
    const content = [
        {
            location: 'Brasília - DF',
            title: 'Título do 1º evento',
            price: 'Gratuito'
        },
        {
            location: 'Goiânia - GO',
            title: 'Título do 2º evento',
            price: 'Gratuito'
        },
        {
            location: 'Anápolis - GO',
            title: 'Título do 3º evento',
            price: 'Gratuito'
        },
        {
            location: 'Goiânia - GO',
            title: 'Título do 4º evento',
            price: 'Gratuito'
        },
        {
            location: 'Rio Verde - GO',
            title: 'Título do 5º evento',
            price: 'Gratuito'
        },
        {
            location: 'Firminópolis - GO',
            title: 'Título do 6º evento',
            price: 'Gratuito'
        }
    ];

    return (
        <ScrollView style={{ backgroundColor: 'white', paddingHorizontal: 16 }}>
            <EventsComponent events={content} />
        </ScrollView>
    );
}
