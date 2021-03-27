import React from 'react';
import { Container, CustomButton, Email, Label, Logout, LogoutButton, Name, Notifications, Section, SectionName, TextNotifications, TipNotifications, Title, Version } from './styles';

// SVG Icons used on this component
import ArrowSVG from '../../assets/svg/keyboard_arrow.svg';

export default function ProfileComonent() {
    return(
        <Container>
            <SectionName>
                <Name>Dwayne Johnson</Name>
                <Email>therock@email.com</Email>
            </SectionName>
            <Section>
                <Title>Minha conta</Title>
                <CustomButton>
                    <Label>Dados pessoais</Label>
                    <ArrowSVG width={20} height={15} />
                </CustomButton>
                <CustomButton>
                    <Label>Notificações</Label>
                    <Notifications>
                        <TipNotifications>
                            <TextNotifications>200</TextNotifications>
                        </TipNotifications>
                        <ArrowSVG width={20} height={15} />
                    </Notifications>
                </CustomButton>
            </Section>
            <Section>
                <Title>Configurações</Title>
                <CustomButton>
                    <Label>Trocar senha</Label>
                    <ArrowSVG width={20} height={15} />
                </CustomButton>
            </Section>
            <Section>
                <Title>Suporte</Title>
                <CustomButton>
                    <Label>Dúvidas frequentes</Label>
                    <ArrowSVG width={20} height={15} />
                </CustomButton>
            </Section>
            <Section>
                <Title>Sobre o aplicativo</Title>
                <CustomButton>
                    <Label>Versão</Label>
                    <Version>0.123</Version>
                </CustomButton>
                <CustomButton>
                    <Label>Privacidade</Label>
                    <ArrowSVG width={20} height={15} />
                </CustomButton>
                <CustomButton>
                    <Label>Termos de serviço</Label>
                    <ArrowSVG width={20} height={15} />
                </CustomButton>
            </Section>
            <LogoutButton>
                <Logout>Sair da conta</Logout>
            </LogoutButton>
        </Container>
    );
}
