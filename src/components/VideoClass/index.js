import React from 'react';
import { Box, Container, HeaderBox, Thumb, Title, Description, Summary, DownloadBox, TextDownload } from './styles';

import PlaySVG from '../../assets/svg/play_icon.svg';
import FileSVG from '../../assets/svg/download_file.svg';

export default function VideoClassComponent({ videoclasses }) {
    return (
        <Container>
            {videoclasses.map((videoclass, index) => (
                <Box key={index}>
                    <HeaderBox>
                        <Thumb
                            source={{
                                uri: 'https://i.picsum.photos/id/212/150/100.jpg?hmac=w2CFT-yovccAb-_nmI3W2Zdx05HjUZp4Ea3leq9v5Ps'
                            }}
                        >
                            <PlaySVG width={60} height={60} />
                        </Thumb>
                        <Summary>
                            <Title>{videoclass.title}</Title>
                            <Description>{videoclass.description}</Description>
                        </Summary>
                    </HeaderBox>
                    <DownloadBox>
                        <FileSVG width={16} height={16} />
                        <TextDownload>Download do material</TextDownload>
                    </DownloadBox>
                </Box>
            ))}
        </Container>
    );
}
