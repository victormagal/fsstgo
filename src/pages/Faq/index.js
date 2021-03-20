import React, {useState, useEffect} from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

const content = [
    {
        isExpanded: false,
        id: 1,
        question: 'Question number 1',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        isExpanded: false,
        id: 2,
        question: 'Question number 2',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        isExpanded: false,
        id: 3,
        question: 'Question number 3',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
];

const ExpandableComponent = ({item, onClickFunction}) => {
    const [layoutHeight, setlayoutHeight] = useState(0);

    useEffect(() => {
        if (item.isExpanded) {
            setlayoutHeight(null);
        } else {
            setlayoutHeight(0);
        }
    }, [item.isExpanded]);

    return (
        <View>
            <TouchableOpacity
                onPress={onClickFunction}
            >
                <Text>
                    {item.question}
                </Text>
            </TouchableOpacity>
            <View style={{ height: layoutHeight, overflow: 'hidden' }}>
                <Text>
                    {item.answer}
                </Text>
            </View>
        </View>
    );
}

export default function Faq() {
    const [listDataSource, setlistDataSource] = useState(content);

    const updateLayout = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        const array = [...listDataSource];
    }

    return (
        <ScrollView>
            {
                listDataSource.map((item, key) => (
                    <ExpandableComponent 
                        key={item.id}    
                        item={item}
                        onClickFunction={() => {
                            updateLayout(key)
                        }}
                    />
                ))
            }
        </ScrollView>
    );
}
