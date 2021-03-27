import styled from 'styled-components/native';

// Text style for the description
export const Description = styled.Text`
    font-family: 'WorkSans-Regular';
    font-size: 16px;
    margin-top: 14px;
    color: #333;
`;

// Parent container of the top of the Tip
export const HeaderTip = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

// Parent container of the Title
export const HeaderTitle = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px 16px;
    margin-top: 40px;
    border-bottom-width: 1px;
    border-bottom-color: #efefef;
`;

// Text style for the subtitle
export const Subtitle = styled.Text`
    display: flex;
    flex-shrink: 1;
    flex-grow: 1;
    flex-basis: 0;
    font-family: 'WorkSans-SemiBold';
    font-size: 18px;
    color: #373a42;
    margin-right: 10px;
`;

// Container that fits everything inside itself
export const Tip = styled.View`
    border-bottom-width: 1px;
    border-bottom-color: #efefef;
    padding: 24px;
`;

// Text style for the title
export const Title = styled.Text`
    font-family: 'WorkSans-Light';
    font-size: 22px;
    color: #999;
`;
