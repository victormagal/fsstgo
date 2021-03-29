import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import BackSVG from '../../../assets/svg/back_icon.svg';
import CloseSVG from '../../../assets/svg/close_icon.svg';
import ProfileSVG from '../../../assets/svg/profile_icon.svg';

export default function HeaderComponent({navigation, title, backButton, profilePage}) {    
    return (
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#226A98', '#51AF97']} style={styles.header}>
            {
                backButton
                ? <TouchableOpacity><BackSVG width={20} height={20} onPress={() => navigation.goBack()} /></TouchableOpacity>
                : <View style={styles.emptyBox}></View>
            }
            <Text style={styles.title}>{title}</Text>
            {
                profilePage
                ? <TouchableOpacity onPress={() => navigation.goBack()}><CloseSVG width={17} height={17} /></TouchableOpacity>
                : <TouchableOpacity onPress={() => navigation.navigate('Profile')}><ProfileSVG width={25} height={25} /></TouchableOpacity>
            }
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'red',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingBottom: 16,
        paddingTop: 40,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15
    },
    emptyBox: {
        width: 20,
        height: 20
    },
    title: {
        fontFamily: 'WorkSans-Bold',
        fontSize: 22,
        color: 'white'
    }
});
