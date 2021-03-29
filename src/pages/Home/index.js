import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import HomeComponent from '../../components/Home';

// SVG Icons used on this page
import EventSVG from '../../assets/svg/event_home.svg';
import BookSVG from '../../assets/svg/book_home.svg';
import VideoSVG from '../../assets/svg/video_home.svg';
import TicketSVG from '../../assets/svg/ticket_home.svg';

export default function Home({navigation}) {
    const content = [
        {
            backgroundColor: '#56b597',   
            label: 'Eventos',
            icon: <EventSVG width={60} height={60} />,
            page: 'Events'
        },
        {
            backgroundColor: '#358797',
            label: 'Biblioteca',
            icon: <BookSVG width={60} height={60} />,
            page: 'Library'
        },
        {
            backgroundColor: '#56b597',
            label: 'Video Aulas',
            icon: <VideoSVG width={60} height={60} />,
            page: 'VideoClass'
        },
        {
            backgroundColor: '#358797',
            label: 'Meus ingressos',
            icon: <TicketSVG width={60} height={60} />,
            page: 'MyEvents'
        }
    ];

    const goToPage = (target) => {
        navigation.navigate(target.page);
    }

    return (
        <ScrollView style={{ backgroundColor: 'white', marginTop: 20 }}>
            <HomeComponent cards={content} onPress={goToPage} />   
        </ScrollView>
    );
}
