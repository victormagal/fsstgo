import React from 'react';
import { Box, HeaderBox, Thumb, Title, Description, Summary, DownloadBox, TextDownload } from './styles';
import FileSVG from '../../assets/svg/download_file.svg';

export default function VideoClassComponent({ videoclasses }) {
    return (
        <>
            {videoclasses.map((videoclass, index) => (
                <Box key={index}>
                    <HeaderBox>
                        <Thumb
                            source={{
                                uri: 'https://i.picsum.photos/id/212/150/100.jpg?hmac=w2CFT-yovccAb-_nmI3W2Zdx05HjUZp4Ea3leq9v5Ps'
                            }}
                        />
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
        </>
    );
}
