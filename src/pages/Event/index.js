import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import EventComponent from '../../components/Event';

export default function Event() {
    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <EventComponent />
        </ScrollView>
    );
}
