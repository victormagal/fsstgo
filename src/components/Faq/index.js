import React, {useState} from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { Answer, BoxAnswer, Question, Tip } from './styles';

// SVG Icons
import ArrowSVG from '../../assets/svg/keyboard_arrow.svg';

export default function FaqComponent({doubts}) {
    const [item, setItem] = useState({});

    const showAnswer = index => {
        // console.log(!item[index]);
        setItem({...item, [index]:!item[index]});
    }

    return (
        <ScrollView>
            {doubts.map((doubt, index) => (
                <Tip>
                    <TouchableOpacity key={doubt.id} onPress={() => showAnswer(index)}>
                        <Question>{doubt.question}</Question>
                        <ArrowSVG width={15} height={10} />
                    </TouchableOpacity>
                    <BoxAnswer>
                        {item[index] && <Answer>{doubt.answer}</Answer>}
                    </BoxAnswer>
                </Tip>
            ))}
        </ScrollView>
    );
}
