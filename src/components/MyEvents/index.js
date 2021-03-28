import React from 'react';
import { View } from 'react-native';
import { BackgroundImage, Card, CheckIn, Info, Label, Price, PriceBox, Title } from './styles';

import CheckSVG from '../../assets/svg/check_in.svg';
import TicketSVG from '../../assets/svg/ticket_events.svg';

export default function MyEventsComponent({cards, onPress}) {
    return (
        <>
            {cards.map((card, index) => (
                <View style={{ marginBottom: 32 }} key={index}>
                    <Title>{card.title}</Title>
                    {card.itens.map((item, index) => (
                        <Card key={index} onPress={() => onPress(item)}>
                            <BackgroundImage
                                source={{
                                    uri: 'https://i.picsum.photos/id/1076/600/300.jpg?hmac=5mtmOdWwUGuKdoE0UvwIHBBzfgFdiWxikx-efYNyC-c'
                                }}
                            >
                                <CheckIn>
                                    <CheckSVG width={40} height={40} />
                                </CheckIn>
                                <Info>
                                    <Label>{item.label}</Label>
                                    <PriceBox>
                                        <TicketSVG width={20} height={20} />
                                        <Price>{item.price}</Price>
                                    </PriceBox>
                                </Info>
                            </BackgroundImage>
                        </Card>
                    ))}
                </View>
            ))}
        </>
    );
}
