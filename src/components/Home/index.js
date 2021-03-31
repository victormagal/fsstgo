import React from 'react';
import { BoxLabel, Card, Container, Label } from './styles';

export default function HomeComponent({cards, onPress}) {
    return (
        <Container>
            {cards.map((card, index) => (
                <Card key={index} bgColor={card.backgroundColor} onPress={() => onPress(card)} style={{
                    shadowColor: 'black',
                    shadowOffset: {
                        width: 0,
                        height: 0
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 5,
                    elevation: 10
                }}>
                    <BoxLabel>
                        <Label>{card.label}</Label>
                    </BoxLabel>
                    {card.icon}
                </Card>
            ))}
        </Container>
    );
}
