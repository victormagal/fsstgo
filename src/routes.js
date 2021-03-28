import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import ProfileSvg from './assets/svg/profile_icon.svg';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Faq from './pages/Faq';
import Notifications from './pages/Notifications';
import VideoClass from './pages/VideoClass';
import Events from './pages/Events';
import Library from './pages/Library';
import MyEvents from './pages/MyEvents';
import Event from './pages/Event';

import HeaderComponent from './components/Shared/Header';

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator initialRouteName='Home'
          screenOptions={({navigation}) => ({
            header: () => <HeaderComponent navigation={navigation} />
          })}
        >
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                title: 'Inicial'
              }}
            />
            <Stack.Screen name="Profile" component={Profile} options={{ title: 'Perfil' }} />
            <Stack.Screen name="Faq" component={Faq} options={{ title: 'Perguntas Frequentes' }} />
            <Stack.Screen name="Notifications" component={Notifications} options={{ title: 'Notificações' }} />
            <Stack.Screen name="VideoClass" component={VideoClass} options={{ title: 'Video aulas' }} />
            <Stack.Screen name="Events" component={Events} options={{ title: 'Eventos' }} />
            <Stack.Screen name="Library" component={Library} options={{ title: 'Biblioteca' }} />
            <Stack.Screen name="MyEvents" component={MyEvents} options={{ title: 'Meus eventos' }} />
            <Stack.Screen name="Event" component={Event} options={{ title: 'Campus Party' }} />
        </Stack.Navigator>
    );
}
