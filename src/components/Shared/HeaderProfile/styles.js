import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingBottom: 16,
        paddingTop: 40,
    },
    emptyBox: {
        width: 20,
        height: 20,
    },
    title: {
        fontFamily: 'WorkSans-Bold',
        fontSize: 22,
        color: 'white',
    },
});
