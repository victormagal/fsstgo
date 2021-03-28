import styled from 'styled-components/native';

// Summary of the event
export const Summary = styled.View`
    background-color: #233568;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    padding: 24px 16px 48px;
`;

export const SummaryTitle = styled.Text`
    font-family: 'WorkSans-Bold';
    font-size: 32px;
    color: white;
`;

export const InfosSummary = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 16px;
`;

export const TextInfosSummary = styled.View`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
`;

export const SummarySubtitle = styled.Text`
    font-family: 'WorkSans-Regular';
    font-size: 20px;
    color: white;
`;

export const SummaryLabel = styled.Text`
    font-family: 'WorkSans-Bold';
    font-size: 14px;
    color: #a6aab1;
`;
// End of event's summary

// Body of the event
export const Body = styled.View`
    background-color: white;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    padding: 24px 0;
    margin-top: -24px;
`;

// Section of the body
export const Section = styled.View`
    padding: 0 16px;
    margin-bottom: 40px;
`;

export const HeaderSection = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
`;

export const IconHeader = styled.TouchableOpacity`
    border-width: 1px;
    border-color: #efefef;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    padding: 0 5px;
`;

export const TitleBody = styled.Text`
    font-family: 'WorkSans-Bold';
    font-size: 24px;
    color: #233568;
`;

export const MiddleSection = styled.View`
    display: flex;
`;

export const SubtitleBody = styled.Text`
    font-family: 'WorkSans-Bold';
    font-size: 18px;
    color: #616368;
`;

export const TextBody = styled.Text`
    font-size: 'WorkSans-Regular';
    font-size: 18px;
    color: #616368;
`;

export const ReadMoreBox = styled.TouchableOpacity`
    margin-top: 16px;
    display: flex;
    flex-shrink: 1;
    flex-grow: 1;
    flex-basis: 0;
    flex-direction: row;
    justify-content: flex-start;
`;

export const ReadMoreText = styled.Text`
    font-family: 'WorkSans-SemiBold';
    font-size: 18px;
    color: #56b597;
`;

// List inside the sections
export const List = styled.FlatList`
    margin-left: -16px;
    margin-right: -16px;
    padding-left: 16px;
`;

export const ImageGallery = styled.Image`
    width: 300px;
    height: 150px;
    border-radius: 10px;
    margin-right: 16px;
`;

export const BoxFile = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-width: 1px;
    border-color: #efefef;
    border-radius: 10px;
    padding: 16px 25px 16px 20px;
    margin-right: 16px;
`;

export const TitleFile = styled.Text`
    font-family: 'WorkSans-Medium';
    font-size: 14px;
    color: #616368;
    margin-left: 10px;
`;
// End of section's list 
// Map section
export const MapImage = styled.Image`
    display: flex;
    flex-shrink: 1;
    flex-grow: 1;
    flex-basis: 0;
    height: 130px;
    border-radius: 10px;
    margin-bottom: 13px;
`;
// End of map's section
// Speakers section
export const BoxSpeaker = styled.View`
    display: flex;
    flex-direction: row;
    flex-shrink: 1;
    flex-grow: 1;
    flex-basis: 0;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 24px;
`;

export const ImageSpeaker = styled.Image`
    border-radius: 50px;
    width: 80px;
    height: 80px;
`;

export const InfoSpeaker = styled.View`
    margin-left: 16px;
`;

export const NameSpeaker = styled.Text`
    font-family: 'WorkSans-SemiBold';
    font-size: 18px;
    color: #373a42;
`;

export const RuleSpeaker = styled.Text`
    font-family: 'WorkSans-SemiBold';
    font-size: 14px;
    color: #c1c4c9;
`;
// End of speaker's section
// Applie's section
export const ApplySection = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 24px 16px 0;
    border-top-width: 1px;
    border-top-color: #efefef;
`;

export const ApplyBox = styled.View`
    display: flex;
    flex-shrink: 1;
    flex-grow: 1;
    flex-basis: 0;
    justify-content: center;
    align-items: center;
`;

export const ApplyText = styled.Text`
    font-family: 'WorkSans-Bold';
    font-size: 18px;
    color: #373a42;
    text-transform: uppercase;
`;

export const ApplyButton = styled.TouchableOpacity`
    background-color: #233568;
    display: flex;
    justify-content: center;
    padding: 10px 30px;
    border-radius: 10px;
`;

export const TextApplyButton = styled.Text`
    font-family: 'WorkSans-Bold';
    font-size: 18px;
    color: white;
    text-transform: uppercase;
`;
// End of applie's section
