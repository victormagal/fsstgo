import styled from 'styled-components/native';

export const Author = styled.Text`
    font-family: 'WorkSans-SemiBold';
    font-size: 14px;
    color: #bdc0c4;
`;

export const Box = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    margin-bottom: 24px;
`;

export const Container = styled.View`
    padding: 32px 24px 6px;
`;

export const Date = styled.Text`
    font-family: 'WorkSans-SemiBold';
    font-size: 12px;
    color: #373a42;
`;

export const HeaderInfo = styled.View`
    display: flex;
    flex-direction: column;
`;

export const Info = styled.View`
    display: flex;
    flex-direction: column;
    flex-shrink: 1;
    flex-grow: 1;
    flex-basis: 0;
    justify-content: space-between;
    margin-left: 15px;
`;

export const Thumb = styled.Image`
    width: 80px;
    height: 100px;
    border-radius: 10px;
`;

export const Title = styled.Text`
    font-family: 'WorkSans-SemiBold';
    font-size: 18px;
    color: #373a42;
`;
