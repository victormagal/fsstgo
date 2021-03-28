import React from 'react';
import { Body, Section, HeaderSection, IconHeader, TitleBody, MiddleSection, SubtitleBody, TextBody, ReadMoreBox, ReadMoreText, List, ImageGallery, BoxFile, TitleFile, MapImage, BoxSpeaker, ImageSpeaker, InfoSpeaker, NameSpeaker, RuleSpeaker, ApplySection, ApplyBox, ApplyText, ApplyButton, TextApplyButton, Summary, SummaryTitle, InfosSummary, TextInfosSummary, SummarySubtitle, SummaryLabel } from './styles';
import { View } from 'react-native';

import DateSVG from '../../assets/svg/date_events.svg';
import LocationSVG from '../../assets/svg/location_events.svg';
import TicketSVG from '../../assets/svg/ticket_events.svg';
import NotificationSVG from '../../assets/svg/notification_events.svg';
import DownloadSVG from '../../assets/svg/download_file_event.svg';

export default function EventComponent() {
    const gallery = [
        { 
            name: 'image_1',
            url: 'https://i.picsum.photos/id/1076/600/300.jpg?hmac=5mtmOdWwUGuKdoE0UvwIHBBzfgFdiWxikx-efYNyC-c'
        },
        { 
            name: 'image_2',
            url: 'https://i.picsum.photos/id/252/600/300.jpg?hmac=Y8e4XsnPUUsa8RFhzcb1Otd9zW3bQ_0kw6oQ1e4YDUk'
        },
        { 
            name: 'image_3',
            url: 'https://i.picsum.photos/id/218/600/300.jpg?hmac=ny-IbKQtvKVVmUbRemt0eNyY-cxFYJa7psImjTeSnz4'
        },
        { 
            name: 'image_4',
            url: 'https://i.picsum.photos/id/417/600/300.jpg?hmac=WDSTMx8yqlCFGFhWKDzXXl8EN1m7S-U_od2M369bVsQ'
        }
    ];

    const files = [
        {
            name: 'arquivo_1',
            title: '001 - Nota técnica'
        },
        {
            name: 'arquivo_2',
            title: '002 - Nota técnica'
        },
        {
            name: 'arquivo_3',
            title: '003 - Nota técnica'
        },
        {
            name: 'arquivo_4',
            title: '004 - Nota técnica'
        }
    ];

    return (
        <>
            <Summary>
                <SummaryTitle>Olá enfermeira</SummaryTitle>
                <InfosSummary>
                    <DateSVG width={15} height={15} />
                    <TextInfosSummary>
                        <SummarySubtitle>27/11/2021 - das 18h as 22hrs</SummarySubtitle>
                    </TextInfosSummary>
                </InfosSummary>
                <InfosSummary>
                    <LocationSVG width={15} height={15} />
                    <TextInfosSummary>
                        <SummarySubtitle>Auditório FIEG/SESI</SummarySubtitle>
                        <SummaryLabel>Rua Araguaia, 1544 Setor Vila Nova</SummaryLabel>
                    </TextInfosSummary>
                </InfosSummary>
                <InfosSummary>
                    <TicketSVG width={15} height={15} />
                    <TextInfosSummary>
                        <SummarySubtitle>Gratuito</SummarySubtitle>
                    </TextInfosSummary>
                </InfosSummary>
            </Summary>
            <Body>
                <Section>
                    <HeaderSection>
                        <TitleBody>Detalhes</TitleBody>
                    </HeaderSection>
                    <TextBody>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolor...</TextBody>
                    <ReadMoreBox>
                        <ReadMoreText>Leia mais</ReadMoreText>
                    </ReadMoreBox>
                </Section>
                <Section>
                    <HeaderSection>
                        <TitleBody>Atualizações</TitleBody>
                        <IconHeader style={{
                            shadowColor: 'black',
                            shadowOffset: {
                                width: 0,
                                height: 3
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 3,
                            elevation: 3
                        }}>
                            <NotificationSVG width={15} height={15} />
                        </IconHeader>
                    </HeaderSection>
                    <MiddleSection>
                        <SubtitleBody>27/11/2021</SubtitleBody>
                        <TextBody>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...</TextBody>
                    </MiddleSection>
                    <ReadMoreBox>
                        <ReadMoreText>Leia mais</ReadMoreText>
                    </ReadMoreBox>
                </Section>
                <Section>
                    <HeaderSection>
                        <TitleBody>Galeria</TitleBody>
                    </HeaderSection>
                    <MiddleSection>
                        <List
                            data={gallery}
                            keyExtractor={(photo) => photo.name}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item }) => {
                                let url = item.url;
                                return (
                                    <View
                                        style={{
                                            width: 300,
                                            height: 150,
                                            borderRadius: 10,
                                            marginTop: 5,
                                            marginLeft: 16,
                                            marginBottom: 20,
                                            shadowColor: 'black',
                                            shadowOffset: {
                                                width: 0,
                                                height: 0
                                            },
                                            shadowOpacity: 0.25,
                                            shadowRadius: 5,
                                            elevation: 10
                                        }}
                                    >
                                        <ImageGallery source={{ uri: url }} />
                                    </View>
                                );
                            }}
                        />
                    </MiddleSection>
                    <ReadMoreBox>
                        <ReadMoreText>Leia mais</ReadMoreText>
                    </ReadMoreBox>
                </Section>
                <Section>
                    <HeaderSection>
                        <TitleBody>Documentos</TitleBody>
                    </HeaderSection>
                    <MiddleSection>
                        <List
                            data={files}
                            keyExtractor={(file) => file.name}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item }) => {
                                return (
                                    <BoxFile style={{
                                        shadowColor: 'black',
                                        shadowOffset: {
                                            width: 0,
                                            height: 0
                                        },
                                        shadowOpacity: 0.25,
                                        shadowRadius: 5,
                                        elevation: 10
                                    }}>
                                        <DownloadSVG />
                                        <TitleFile>{item.title}</TitleFile>
                                    </BoxFile>
                                );
                            }}
                        />
                    </MiddleSection>
                    <ReadMoreBox>
                        <ReadMoreText>Leia mais</ReadMoreText>
                    </ReadMoreBox>
                </Section>
                <Section>
                    <HeaderSection>
                        <TitleBody>Localização</TitleBody>
                    </HeaderSection>
                    <MiddleSection>
                        <MapImage
                            source={{
                                uri: 'https://i.picsum.photos/id/417/600/300.jpg?hmac=WDSTMx8yqlCFGFhWKDzXXl8EN1m7S-U_od2M369bVsQ'
                            }}
                        />
                        <SubtitleBody>Auditório FIEG/SESI</SubtitleBody>
                        <TextBody>Rua Araguaia, 1544 Setor Vila Nova</TextBody>
                    </MiddleSection>
                </Section>
                <Section>
                    <HeaderSection>
                        <TitleBody>Palestrantes</TitleBody>
                    </HeaderSection>
                    <MiddleSection>
                        <BoxSpeaker>
                            <ImageSpeaker
                                source={{
                                    uri: 'https://i.picsum.photos/id/846/80/80.jpg?hmac=FDLekGtu6qxng0tJ318J9fYg8NEE9zDCOB91sfi03Ow'
                                }}
                            />
                            <InfoSpeaker>
                                <NameSpeaker>Milton Alves Ribeiro</NameSpeaker>
                                <RuleSpeaker>Eng. Seg. Trabalho (UFG)</RuleSpeaker>
                            </InfoSpeaker>
                        </BoxSpeaker>
                        <BoxSpeaker>
                            <ImageSpeaker
                                source={{
                                    uri: 'https://i.picsum.photos/id/846/80/80.jpg?hmac=FDLekGtu6qxng0tJ318J9fYg8NEE9zDCOB91sfi03Ow'
                                }}
                            />
                            <InfoSpeaker>
                                <NameSpeaker>Carla Maria S. Carneiro</NameSpeaker>
                                <RuleSpeaker>Advogada Trabalhista</RuleSpeaker>
                            </InfoSpeaker>
                        </BoxSpeaker>
                    </MiddleSection>
                </Section>
                <ApplySection>
                    <ApplyBox>
                        <ApplyText>Gratuito</ApplyText>
                    </ApplyBox>
                    <ApplyButton>
                        <TextApplyButton>Inscreva-se</TextApplyButton>
                    </ApplyButton>
                </ApplySection>
            </Body>
        </>
    );
}
