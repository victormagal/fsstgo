import styled from 'styled-components/native';

export const Box = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 24px;
`;

export const BoxDescription = styled.View`
    margin-left: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const BoxPrice = styled.View`
    display: flex;
    flex-direction: row;
`;

export const Location = styled.Text`
    font-family: 'WorkSans-SemiBold';
    font-size: 12px;
    color: #373a42;
    text-transform: uppercase;
`;

export const Price = styled.Text`
    font-family: 'WorkSans-SemiBold';
    font-size: 12px;
    color: #bdc0c4;
    text-transform: uppercase;
`;

export const Thumb = styled.Image`
    width: 90px;
    height: 60px;
    border-radius: 10px;
`;

export const Title = styled.Text`
    font-family: 'WorkSans-Bold';
    font-size: 16px;
    color: #373a42;
    text-transform: uppercase;
    margin: 3px 0;
`;
