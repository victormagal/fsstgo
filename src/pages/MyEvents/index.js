import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import MyEventsComponent from '../../components/MyEvents';

export default function MyEvents({navigation}) {
    const subscribed = [
        {
            title: 'Matriculados',
            itens: [
                {
                    label: 'Primeiro evento de abril',
                    price: 'Gratuito',
                    page: 'Event'
                },
                {
                    label: 'Segundo evento de abril',
                    price: 'Gratuito',
                    page: 'Event'
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
                    price: 'Gratuito',
                    page: 'Event'
                },
                {
                    label: 'Evento finalizado número 2',
                    price: 'Gratuito',
                    page: 'Event'
                }
            ]
        }
    ];

    const goToPage = (target) => {
        navigation.navigate(target.page);
    }

    return (
        <ScrollView style={{ backgroundColor: 'white', paddingHorizontal: 16 }}>
            <MyEventsComponent cards={subscribed} onPress={goToPage} />
            <MyEventsComponent cards={closed} onPress={goToPage} />
        </ScrollView>
    );
}
