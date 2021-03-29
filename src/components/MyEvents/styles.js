import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export default StyleSheet.create ({
    gradient: {
        paddingVertical: 15,
        paddingHorizontal: 20
    }
}); 

export const BackgroundImage = styled.ImageBackground`
    display: flex;
    flex-shrink: 1;
    flex-grow: 1;
    flex-basis: 0;
    justify-content: space-between;
    height: 180px;
    border-radius: 10px;
    overflow: hidden;
`;

export const Card = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    flex-shrink: 1;
    flex-grow: 1;
    flex-basis: 0;
    margin-top: 24px;
`;

export const CheckIn = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`;

export const Label = styled.Text`
    font-family: 'WorkSans-Bold';
    font-size: 20px;
    color: white;
    text-transform: uppercase;
`;

export const Price = styled.Text`
    font-family: 'WorkSans-SemiBold';
    font-size: 16px;
    color: white;
    margin-left: 5px;
`;

export const PriceBox = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Title = styled.Text`
    font-family: 'WorkSans-Bold';
    font-size: 32px;
    color: #233568;
`;
