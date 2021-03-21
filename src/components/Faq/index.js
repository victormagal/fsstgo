import React, {useState} from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { Answer, BoxAnswer, Question, Tip } from './styles';

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
                    </TouchableOpacity>
                    <BoxAnswer>
                        {item[index] && <Answer>{doubt.answer}</Answer>}
                    </BoxAnswer>
                </Tip>
            ))}
        </ScrollView>
    );
}
