import React from 'react';
import { ScrollView } from 'react-native';
import { Card, Label } from './styles';

export default function HomeComponent({cards}) {
    return (
        <ScrollView>
            {cards.map((card, index) => (
                <Card key={index}>
                    <Label>{card.label}</Label>
                    {card.icon}
                </Card>
            ))}
        </ScrollView>
    );
}
