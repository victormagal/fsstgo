import React from 'react';
import { Box, BoxDescription, BoxPrice, Location, Price, Thumb, Title } from './styles';

import TicketSVG from '../../assets/svg/ticket_events.svg';

export default function EventsComponent({events, onPress}) {
    return (
        <>
            {events.map((event, index) => (
                <Box key={index} onPress={() => onPress(event)}>
                    <Thumb
                        source={{
                            uri: 'https://i.picsum.photos/id/91/90/60.jpg?hmac=ifSpnIignIqJ95Ow5lXhHTrHvnsctlkMBrCfeS9u8pQ'
                        }}
                    />
                    <BoxDescription>
                        <Location>{event.location}</Location>
                        <Title>{event.title}</Title>
                        <BoxPrice>
                            <TicketSVG width={16} height={16} />
                            <Price>{event.price}</Price>
                        </BoxPrice>
                    </BoxDescription>
                </Box>
            ))}
        </>
    );
}
