import styled from 'styled-components/native';

export const BoxLabel = styled.View`
    display: flex;
    justify-content: flex-end;
`;

// Card button
export const Card = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: ${props => `${props.bgColor}`};
    border-radius: 10px;
    margin: 0px 16px 16px;
    padding: 20px 32px;
`;

// Text style for the label of the button
export const Label = styled.Text`
    font-family: 'WorkSans-SemiBold';
    font-size: 26px;
    color: white;
`;
