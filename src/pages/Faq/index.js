import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { BoxContactUs, Label, Link } from './styles';
import Accordeon from '../../components/Shared/Accordeon';

export default function Faq() {
    const notes = [
        {
            itens: [
                {
                    subtitle: 'Question number 1',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                },
                {
                    subtitle: 'Question number 2',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                },
                {
                    subtitle: 'Question number 3',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                }
            ]
        }
    ];

    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <Accordeon notes={notes} />    
            <BoxContactUs>
                <Label>Não achou o que precisa?</Label>
                <Link>Entre em contato</Link>
            </BoxContactUs>
        </ScrollView>
    );
}
