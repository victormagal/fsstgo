import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import styles from './styles';

import BackSVG from '../../../assets/svg/back_icon_login.svg';

export default function HeaderLoginComponent({navigation, backButton}) {    
    return (
        <View style={styles.header}>
            {
                backButton
                ? <TouchableOpacity><BackSVG width={20} height={20} onPress={() => navigation.goBack()} /></TouchableOpacity>
                : <View style={styles.emptyBox}></View>
            }
        </View>
    );
}
