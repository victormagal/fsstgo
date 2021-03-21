import React from 'react';
import { View, Text, Button } from 'react-native';
import { Card, Label } from './styles';

// SVG Icons used on this page
import EventSVG from '../../assets/svg/event_home.svg';
import BookSVG from '../../assets/svg/book_home.svg';
import VideoSVG from '../../assets/svg/video_home.svg';
import TicketSVG from '../../assets/svg/ticket_home.svg';

export default function Home({ navigation }) {
    function navigateToProfile() {
        navigation.navigate('Profile');
    }

    const cards = [
        {
            id: '1',
            label: 'Eventos',
            icon: <EventSVG width={60} height={60} />
        },
        {
            id: '2',
            label: 'Biblioteca',
            icon: <BookSVG width={60} height={60} />
        },
        {
            id: '3',
            label: 'Video Aulas',
            icon: <VideoSVG width={60} height={60} />
        },
        {
            id: '4',
            label: 'Meus ingressos',
            icon: <TicketSVG width={60} height={60} />
        }
    ];

    return (
        <View>
            {/* {cards.map(card => (
                <Card key={card.id}>
                    <Label>{card.label}</Label>
                    {card.icon}
                </Card>
            ))} */}
            <Text>Home</Text>
            <Button title="Ir para a Profile" onPress={navigateToProfile} />
        </View>
    );
}
