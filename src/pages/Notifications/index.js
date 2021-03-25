import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import Accordeon from '../../components/Shared/Accordeon';

export default function Notifications() {
    const notes = [
        {
            title: 'Não lidas',
            itens: [
                {
                    subtitle: 'Mudança de horário do evento na praia 2019',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                },
                {
                    subtitle: 'Seu ingresso para o na praia 2019 foi confirmado e já estea disponível',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                }
            ]
        },
        {
            title: 'Lidas',
            itens: [
                {
                    subtitle: 'Sua senha foi atualzada com sucesso!',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                }
            ]
        }
    ];

    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <Accordeon notes={notes} />
        </ScrollView>
    );
}
