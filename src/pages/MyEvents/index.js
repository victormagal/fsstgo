import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import MyEventsComponent from '../../components/MyEvents';

export default function MyEvents() {
    const subscribed = [
        {
            title: 'Matriculados',
            itens: [
                {
                    label: 'Primeiro evento de abril',
                    price: 'Gratuito'
                },
                {
                    label: 'Segundo evento de abril',
                    price: 'Gratuito'
                }
            ]
        }
    ];

    const closed = [
        {
            title: 'Passados',
            itens: [
                {
                    label: 'Evento finalizado número 1',
                    price: 'Gratuito'
                },
                {
                    label: 'Evento finalizado número 2',
                    price: 'Gratuito'
                }
            ]
        }
    ];

    return (
        <ScrollView style={{ backgroundColor: 'white', paddingHorizontal: 16 }}>
            <MyEventsComponent cards={subscribed} />
            <MyEventsComponent cards={closed} />
        </ScrollView>
    );
}
