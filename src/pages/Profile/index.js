import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Logout, LogoutButton } from './styles';
import ProfileComponent from '../../components/Profile';
import LinearGradient from 'react-native-linear-gradient';

// SVG Icons used on this component
import ArrowSVG from '../../assets/svg/keyboard_arrow.svg';

export default function Profile({navigation}) {
    const content = [
        {
            name: 'Dwayne Johnson',
            mail: 'therock@email.com',
            sections: [
                {
                    title: 'Minha conta',
                    buttons: [
                        {
                            label: 'Minha conta',
                            icon: <ArrowSVG width={20} height={15} />
                        },
                        {
                            label: 'Notificações',
                            notifications: '200',
                            icon: <ArrowSVG width={20} height={15} />,
                            page: 'Notifications'
                        }
                    ]
                },
                {
                    title: 'Configurações',
                    buttons: [
                        {
                            label: 'Trocar senha',
                            icon: <ArrowSVG width={20} height={15} />
                        }
                    ]
                },
                {
                    title: 'Suporte',
                    buttons: [
                        {
                            label: 'Dúvidas frequentes',
                            icon: <ArrowSVG width={20} height={15} />,
                            page: 'Faq'
                        }
                    ]
                },
                {
                    title: 'Sobre o aplicativo',
                    buttons: [
                        {
                            label: 'Versão',
                            version: '0.123'
                        },
                        {
                            label: 'Privacidade',
                            icon: <ArrowSVG width={20} height={15} />
                        },
                        {
                            label: 'Termos de serviço',
                            icon: <ArrowSVG width={20} height={15} />
                        }
                    ]
                }
            ]
        }
    ];

    const goToPage = (target) => {
        if (target.page) {
            navigation.navigate(target.page);
        }
    }

    return (
        <ScrollView>
            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#226A98', '#51AF97']}>
                <ProfileComponent profiles={content} onPress={goToPage} />
                <LogoutButton onPress={() => navigation.navigate('Login')}>
                    <Logout>Sair da conta</Logout>
                </LogoutButton>
            </LinearGradient>
        </ScrollView>
    );
}
