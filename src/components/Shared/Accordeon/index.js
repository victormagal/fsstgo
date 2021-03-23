import React, {useState} from 'react';
import { View } from 'react-native';
import { Answer, BoxDoubt, Doubt, Tip } from './styles';

// SVG Icons used on this page
import ArrowSVG from '../../../assets/svg/keyboard_arrow.svg';

export default function AccordeonComponent({doubts}) {
    const [item, setItem] = useState({});

    const showAnswer = index => {
        setItem({...item, [index]:!item[index]});
    }

    return (
        <View>
            {doubts.map((doubt, index) => (
                <Tip key={index}>
                    <BoxDoubt onPress={() => showAnswer(index)}>
                        <Doubt>{doubt.question}</Doubt>
                        <ArrowSVG width={20} height={15} />
                    </BoxDoubt>
                    {item[index] && <Answer>{doubt.answer}</Answer>}
                </Tip>
            ))}
        </View>
    );
}
