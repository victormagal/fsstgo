import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import VideoClassComponent from '../../components/VideoClass';

export default function VideoClass() {
    const content = [
        {
            title: 'Video aula 1',
            description: 'Descrição referente a video aula 1'
        },
        {
            title: 'Video aula 2',
            description: 'Descrição referente a video aula 2'
        },
        {
            title: 'Video aula 3',
            description: 'Descrição referente a video aula 3'
        },
        {
            title: 'Video aula 4',
            description: 'Descrição referente a video aula 4'
        },
        {
            title: 'Video aula 5',
            description: 'Descrição referente a video aula 5'
        },
        {
            title: 'Video aula 6',
            description: 'Descrição referente a video aula 6'
        }
    ];

    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <VideoClassComponent videoclasses={content} />
        </ScrollView>
    );
}
