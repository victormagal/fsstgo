import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import HomeComponent from '../../components/Home';

// SVG Icons used on this page
import EventSVG from '../../assets/svg/event_home.svg';
import BookSVG from '../../assets/svg/book_home.svg';
import VideoSVG from '../../assets/svg/video_home.svg';
import TicketSVG from '../../assets/svg/ticket_home.svg';

export default function Home() {
    const cards = [
        {
            backgroundColor: '#56b597',   
            label: 'Eventos',
            icon: <EventSVG width={60} height={60} />
        },
        {
            backgroundColor: '#358797',
            label: 'Biblioteca',
            icon: <BookSVG width={60} height={60} />
        },
        {
            backgroundColor: '#56b597',
            label: 'Video Aulas',
            icon: <VideoSVG width={60} height={60} />
        },
        {
            backgroundColor: '#358797',
            label: 'Meus ingressos',
            icon: <TicketSVG width={60} height={60} />
        }
    ];

    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <HomeComponent cards={cards} />       
        </ScrollView>
    );
}
