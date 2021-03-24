import styled from 'styled-components/native';

// Container that wraps all elements of the component
export const Box = styled.View`
    background-color: #f1f1f1;
    margin-bottom: 20px;
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
    padding: 10px 0;
`;

// Container that wraps all elements of the header
export const HeaderBox = styled.View`
    display: flex;
    flex-direction: row;
`;

// Container of the thumb image of the video class
export const Thumb = styled.Image`
    width: 150px;
    height: 100px;
`;

// Container that wraps the title and description of the video class
export const Summary = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
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
