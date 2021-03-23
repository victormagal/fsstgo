import React from 'react';
import { View } from 'react-native';
import { BoxLabel, Card, Label } from './styles';

export default function HomeComponent({cards}) {
    return (
        <View>
            {cards.map((card, index) => (
                <Card key={index} bgColor={card.backgroundColor}>
                    <BoxLabel>
                        <Label>{card.label}</Label>
                    </BoxLabel>
                    {card.icon}
                </Card>
            ))}
        </View>
    );
}
