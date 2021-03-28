import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import BackSVG from '../../../assets/svg/back_icon.svg';
import ProfileSVG from '../../../assets/svg/profile_icon.svg';

export default function HeaderComponent({navigation}) {    
    return (
        <View style={styles.header}>
            <TouchableOpacity>
                <BackSVG width={20} height={20} onPress={() => navigation.goBack()} />
            </TouchableOpacity>
            <Text style={styles.title}>Olá enfermeira</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <ProfileSVG width={25} height={25} />
            </TouchableOpacity>
        </View>
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
        paddingTop: 40
    },
    title: {
        fontFamily: 'WorkSans-Bold',
        fontSize: 22,
        color: 'white'
    }
});
