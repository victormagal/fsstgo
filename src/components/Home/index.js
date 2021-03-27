import React from 'react';
import { BoxLabel, Card, Label } from './styles';

export default function HomeComponent({cards, onPress}) {
    return (
        <>
            {cards.map((card, index) => (
                <Card key={index} bgColor={card.backgroundColor} onPress={() => onPress(card)}>
                    <BoxLabel>
                        <Label>{card.label}</Label>
                    </BoxLabel>
                    {card.icon}
                </Card>
            ))}
        </>
    );
}
