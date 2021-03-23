import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import FaqComponent from '../../components/Faq';
import Accordeon from '../../components/Shared/Accordeon';

export default function Faq() {
    const doubts = [
        {
            question: 'Question number 1',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            question: 'Question number 2',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            question: 'Question number 3',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }
    ];

    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <Accordeon doubts={doubts} />    
            <FaqComponent />
        </ScrollView>
    );
}
