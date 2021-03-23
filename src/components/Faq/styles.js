import styled from 'styled-components/native';

// Text style for the answers
export const Answer = styled.Text`
    font-family: 'WorkSans-Regular';
    font-size: 12px;
    line-height: 21px;
    color: #333;
`;

// Parent container of the answer
export const BoxAnswer = styled.View`
    margin-top: 14px;
`;

// Text style for the questions
export const Question = styled.Text`
    font-family: 'WorkSans-SemiBold';
    font-size: 14px;
    line-height: 21px;
    color: #333;
`;

// Container that fits everything in the component
export const Tip = styled.View`
    border-bottom-width: 1px;
    border-bottom-color: #efefef;
    padding: 24px;
`;
