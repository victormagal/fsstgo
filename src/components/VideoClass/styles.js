import styled from 'styled-components/native';

// Container that wraps all elements of the component
export const Box = styled.View`
    background-color: #f1f1f1;
    margin-bottom: 24px;
`;

export const Container = styled.View`
    padding: 32px 0 6px;
`;

// Text style for the description of the video class
export const Description = styled.Text`
    font-family: 'WorkSans-Medium';
    font-size: 14px;
    color: #7A7A7A;
    margin-top: 6px;
`;

// Button that wraps all elements of the download section
export const DownloadBox = styled.TouchableOpacity`
    background-color: #233568;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 0;
`;

// Container that wraps all elements of the header
export const HeaderBox = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
`;

// Container of the thumb image of the video class
export const Thumb = styled.ImageBackground`
    width: 150px;
    height: 100px;
    justify-content: center;
    align-items: center;
`;

// Container that wraps the title and description of the video class
export const Summary = styled.View`
    display: flex;
    flex-direction: column;
    flex-shrink: 1;
    flex-grow: 1;
    flex-basis: 0;
    justify-content: center;
    padding: 0 10px;
    background-color: #fcfcfc;
`;

// Text style of the title
export const Title = styled.Text`
    font-family: 'WorkSans-SemiBold';
    font-size: 16px;
    color: #373A42;
`;

// Text style of the download section
export const TextDownload = styled.Text`
    font-family: 'WorkSans-Medium';
    font-size: 14px;
    color: white;
    margin-left: 5px;
`;
