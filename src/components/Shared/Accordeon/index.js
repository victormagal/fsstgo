import React, {useState} from 'react';
import { Text, View } from 'react-native';
import { Description, HeaderTitle, HeaderTip, Subtitle, Tip, Title } from './styles';

// SVG Icons used on this page
import ArrowSVG from '../../../assets/svg/keyboard_arrow.svg';

export default function AccordeonComponent({notes}) {
    const [descr, setDescr] = useState({});

    const showAnswer = index => {
        setDescr({...descr, [index]:!descr[index]});
    }

    return (
        <>
            {notes.map((note, index) => (
                <View key={index}>
                    {
                        note.title && 
                        <HeaderTitle>
                            <Title>{note.title}</Title>
                        </HeaderTitle>
                    }
                    {note.itens.map((item) => (
                        <Tip>
                            <HeaderTip onPress={() => showAnswer(index)}>
                                <Subtitle>{item.subtitle}</Subtitle>
                                <ArrowSVG width={20} height={15} />
                            </HeaderTip>
                            {descr[index] && <Description>{item.description}</Description>}
                        </Tip>
                    ))}
                </View>
            ))}
        </>
    );
}
