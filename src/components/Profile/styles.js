import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    gradient: {
        height: 100,
    },
});

export const SectionImage = styled.View`
    margin: -75px 0 20px;
    align-items: center;
`;

export const ImageProfile = styled.Image`
    width: 150px;
    height: 150px;
    border-radius: 100px;
`;

// Container that wrappes all elements in the component
export const Container = styled.View``;

// Container that wrappes all infos of the user in the component
export const Data = styled.View`
    padding: 0 24px;
    background-color: white;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
`;

// Button inside each section will send customer to another page
export const CustomButton = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 24px 0;
    border-top-width: 1px;
    border-top-color: #efefef;
`;

// Email address text style
export const Email = styled.Text`
    font-family: 'WorkSans-Regular';
    font-size: 20px;
    color: #373a42;
`;

// Text of the button inside each section will send the user to another page
export const Label = styled.Text`
    font-family: 'WorkSans-SemiBold';
    font-size: 18px;
    color: #373a42;
`;

// Text style of the logout button
export const Logout = styled.Text`
    font-family: 'WorkSans-SemiBold';
    font-size: 22px;
    color: #aeaeae;
`;

// Text style of the logout button
export const LogoutButton = styled.TouchableOpacity`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 0;
`;

// Name text style
export const Name = styled.Text`
    font-family: 'WorkSans-Bold';
    font-size: 32px;
    color: #233568;
`;

// Box area of notifications and its children elements
export const Notifications = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

// Parent container for each section of the page
export const Section = styled.View`
    margin-bottom: 40px;
    border-bottom-width: 1px;
    border-bottom-color: #efefef;
`;

// Parent container where name and email are presented
export const SectionName = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 60px;
`;

// Text style of the number of notifications unready
export const TextNotifications = styled.Text`
    font-family: 'WorkSans-Bold';
    font-size: 16px;
    color: white;
`;

// Box where the user will see the number of notifications unready
export const TipNotifications = styled.View`
    background-color: #fb4545;
    padding: 5px 10px;
    border-radius: 20px;
    margin-right: 20px;
`;

// Title of each section of the page
export const Title = styled.Text`
    font-family: 'WorkSans-Medium';
    font-size: 18px;
    color: #aeaeae;
    margin-bottom: 30px;
`;

// Text style of the app's version
export const Version = styled.Text`
    font-family: 'WorkSans-SemiBold';
    font-size: 20px;
    color: #373a42;
`;
