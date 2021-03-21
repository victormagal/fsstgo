import React from 'react';
import { ScrollView } from 'react-native';
import { BoxLabel, Card, Label } from './styles';

export default function HomeComponent({cards}) {
    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            {cards.map((card, index) => (
                <Card key={index} bgColor={card.backgroundColor}>
                    <BoxLabel>
                        <Label>{card.label}</Label>
                    </BoxLabel>
                    {card.icon}
                </Card>
            ))}
        </ScrollView>
    );
}
