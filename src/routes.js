import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/Login';
import SignUp from './pages/NewAccount';
import ForgotPassword from './pages/ForgotPassword';
import VerificationCode from './pages/Code';
import NewPassword from './pages/NewPassword';

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
import HeaderLoginComponent from './components/Shared/HeaderLogin';

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen
              name="Login"
              component={Login}
              options={({navigation}) => ({
                header: () => <HeaderLoginComponent navigation={navigation} backButton={false} />
              })}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={({navigation}) => ({
                header: () => <HeaderLoginComponent navigation={navigation} backButton={true} />
              })}
            />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPassword}
              options={({navigation}) => ({
                header: () => <HeaderLoginComponent navigation={navigation} backButton={true} />
              })}
            />
            <Stack.Screen
              name="VerificationCode"
              component={VerificationCode}
              options={({navigation}) => ({
                header: () => <HeaderLoginComponent navigation={navigation} backButton={true} />
              })}
            />
            <Stack.Screen
              name="NewPassword"
              component={NewPassword}
              options={({navigation}) => ({
                header: () => <HeaderLoginComponent navigation={navigation} backButton={true} />
              })}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={({navigation}) => ({
                header: () => <HeaderComponent navigation={navigation} title='Inicial' backButton={false} profilePage={false} />
              })}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={({navigation}) => ({
                header: () => <HeaderComponent navigation={navigation} title='Perfil' backButton={false} profilePage={true} />
              })}
            />
            <Stack.Screen
              name="Faq"
              component={Faq}
              options={({navigation}) => ({
                header: () => <HeaderComponent navigation={navigation} title='Perguntas Frequentes' backButton={true} profilePage={false} />
              })}
            />
            <Stack.Screen
              name="Notifications"
              component={Notifications}
              options={({navigation}) => ({
                header: () => <HeaderComponent navigation={navigation} title='Notificações' backButton={true} profilePage={false} />
              })}
            />
            <Stack.Screen
              name="VideoClass"
              component={VideoClass}
              options={({navigation}) => ({
                header: () => <HeaderComponent navigation={navigation} title='Video Aulas' backButton={true} profilePage={false} />
              })}
            />
            <Stack.Screen
              name="Events"
              component={Events}
              options={({navigation}) => ({
                header: () => <HeaderComponent navigation={navigation} title='Eventos' backButton={true} profilePage={false} />
              })}
            />
            <Stack.Screen
              name="Library"
              component={Library}
              options={({navigation}) => ({
                header: () => <HeaderComponent navigation={navigation} title='Biblioteca' backButton={true} profilePage={false} />
              })}
            />
            <Stack.Screen
              name="MyEvents"
              component={MyEvents}
              options={({navigation}) => ({
                header: () => <HeaderComponent navigation={navigation} title='Meus Eventos' backButton={true} profilePage={false} />
              })}
            />
            <Stack.Screen
              name="Event"
              component={Event}
              options={({navigation}) => ({
                header: () => <HeaderComponent navigation={navigation} title='Evento' backButton={true} profilePage={false} />
              })}
            />
        </Stack.Navigator>
    );
}
