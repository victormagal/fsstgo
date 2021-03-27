import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import ProfileComponent from '../../components/Profile';

export default function Profile() {
    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <ProfileComponent />
        </ScrollView>
    );
}
