import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

import LinearGradient from 'react-native-linear-gradient';

import CloseSVG from '../../../assets/svg/close_icon.svg';

export default function HeaderProfileComponent({navigation, title}) {    
    return (
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#226A98', '#51AF97']} style={styles.header}>
            <View style={styles.emptyBox}></View>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity onPress={() => navigation.goBack()}><CloseSVG width={17} height={17} /></TouchableOpacity>
        </LinearGradient>
    );
}
