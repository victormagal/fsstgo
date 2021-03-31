import React from 'react';
import styles, { SectionImage, ImageProfile, Container, CustomButton, Data, Email, Label, Name, Notifications, Section, SectionName, TextNotifications, TipNotifications, Title, Version } from './styles';
import LinearGradient from 'react-native-linear-gradient';

export default function ProfileComonent({profiles, onPress}) {
    return(
        <Container>
            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#226A98', '#51AF97']} style={styles.gradient}></LinearGradient>
            {profiles.map((profile, index) => (
                <Data key={index}>
                    <SectionImage>
                        <ImageProfile width={150} height={150} source={{uri: 'https://i.picsum.photos/id/267/150/150.jpg?hmac=BnxTu0y1g7ILSbgHoxZedTrrj8cZp0PcPjS9FHedm9c'}} />
                    </SectionImage>
                    <SectionName>
                        <Name>{profile.name}</Name>
                        <Email>{profile.mail}</Email>
                    </SectionName>
                    {profile.sections.map((section, index) => (    
                        <Section key={index}>
                            <Title>{section.title}</Title>
                            {section.buttons.map((button, index) => (
                                <CustomButton key={index} onPress={() => onPress(button)}>
                                    <Label>{button.label}</Label>
                                    <Notifications>
                                        {
                                            button.notifications &&
                                            <TipNotifications>
                                                <TextNotifications>{button.notifications}</TextNotifications>
                                            </TipNotifications>
                                        }
                                        {button.version && <Version>{button.version}</Version>}
                                        {button.icon && button.icon}
                                    </Notifications>
                                </CustomButton>
                            ))}
                        </Section>
                    ))}
                </Data>
            ))}
        </Container>
    );
}
