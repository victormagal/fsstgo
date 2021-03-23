import styled from 'styled-components/native';

// Text style for the answers
export const Answer = styled.Text`
    font-family: 'WorkSans-Regular';
    font-size: 16px;
    margin-top: 14px;
    color: #333;
`;

// Parent container of the doubt
export const BoxDoubt = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

// Text style for the questions
export const Doubt = styled.Text`
    font-family: 'WorkSans-SemiBold';
    font-size: 18px;
    color: #373a42;
`;

// Container that fits everything in the component
export const Tip = styled.View`
    border-bottom-width: 1px;
    border-bottom-color: #efefef;
    padding: 24px;
`;
