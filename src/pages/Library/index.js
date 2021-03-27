import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import LibraryComponent from '../../components/Library';

export default function LibraryPage() {
    const data = [
        {
            date: '2020',
            title: 'Harry Potter e a pedra filosofal',
            author: 'J.K. Rowling'
        },
        {
            date: '2020',
            title: 'Harry Potter e a câmara secreta',
            author: 'J.K. Rowling'
        },
        {
            date: '2020',
            title: 'Harry Potter e o prisioneiro de Azkabam',
            author: 'J.K. Rowling'
        },
        {
            date: '2020',
            title: 'Harry Potter e o cálice de fogo',
            author: 'J.K. Rowling'
        },
        {
            date: '2020',
            title: 'Harry Potter e a ordem da fênix',
            author: 'J.K. Rowling'
        },
        {
            date: '2020',
            title: 'Harry Potter e o príncipe mestiço',
            author: 'J.K. Rowling'
        },
        {
            date: '2020',
            title: 'Harry Potter e as relíquias da morte',
            author: 'J.K. Rowling'
        }
    ];

    return (
        <ScrollView style={{ backgroundColor: 'white', paddingHorizontal: 16 }}>
            <LibraryComponent libraries={data} />
        </ScrollView>
    );
}
