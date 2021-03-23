import React, {useState} from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { Answer, BoxAnswer, Question, Tip } from './styles';

// SVG Icons used on this page
import ArrowSVG from '../../assets/svg/keyboard_arrow.svg';

export default function FaqComponent({doubts}) {
    const [item, setItem] = useState({});

    const showAnswer = index => {
        setItem({...item, [index]:!item[index]});
    }

    return (
        <ScrollView>
            {doubts.map((doubt, index) => (
                <Tip key={index}>
                    <TouchableOpacity onPress={() => showAnswer(index)}>
                        <Question>{doubt.question}</Question>
                    </TouchableOpacity>
                    <BoxAnswer>
                        {item[index] && <Answer>{doubt.answer}</Answer>}
                    </BoxAnswer>
                </Tip>
            ))}
        </ScrollView>
    );
}
