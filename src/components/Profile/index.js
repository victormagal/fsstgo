import React from 'react';
import { Container, CustomButton, Email, Label, Logout, LogoutButton, Name, Notifications, Section, SectionName, TextNotifications, TipNotifications, Title, Version } from './styles';

export default function ProfileComonent({profiles, onPress}) {
    return(
        <>
            {profiles.map((profile, index) => (
                <Container key={index}>
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
                    <LogoutButton>
                        <Logout>Sair da conta</Logout>
                    </LogoutButton>
                </Container>
            ))}
        </>
    );
}
