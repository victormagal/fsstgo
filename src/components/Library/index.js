import React from 'react';
import { Author, Box, Date, HeaderInfo, Info, Thumb, Title } from './styles';

export default function LibraryComponent({ libraries }) {
    return (
        <>
            {libraries.map((library, index) => (
                <Box key={index}>
                    <Thumb
                        source={{
                            uri: 'https://i.picsum.photos/id/844/80/100.jpg?hmac=4ZeMlzuAkZd_Ocp-uqgFBKeOuPtx_-uqruBbMqmypwo'
                        }}
                    />
                    <Info>
                        <HeaderInfo>
                            <Date>{library.date}</Date>
                            <Title>{library.title}</Title>
                        </HeaderInfo>
                        <Author>{library.author}</Author>
                    </Info>
                </Box>
            ))}
        </>
    );
}
