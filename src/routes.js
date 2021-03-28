import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

// import Home from './pages/Home';
// import Profile from './pages/Profile';
// import Faq from './pages/Faq';
// import Notifications from './pages/Notifications';
// import VideoClass from './pages/VideoClass';
// import Events from './pages/Events';
// import Library from './pages/Library';
// import MyEvents from './pages/MyEvents';
// import Login from './pages/Login';
// import NewAccount from './pages/NewAccount';
// import ForgotPassword from './pages/ForgotPassword';
import Code from './pages/Code';

export default function Routes() {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen name="Home" component={Home} /> */}
      {/* <Stack.Screen name="Profile" component={Profile} /> */}
      {/* <Stack.Screen name="Faq" component={Faq} /> */}
      {/* <Stack.Screen name="Notificações" component={Notifications} /> */}
      {/* <Stack.Screen name="Video Aulas" component={VideoClass} /> */}
      {/* <Stack.Screen name="Eventos" component={Events} /> */}
      {/* <Stack.Screen name="Biblioteca" component={Library} /> */}
      {/* <Stack.Screen name="Meus eventos" component={MyEvents} /> */}
      {/* <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      /> */}
      {/* <Stack.Screen name="NewAccount" component={NewAccount} /> */}
      {/* <Stack.Screen name="ForgotPassword" component={ForgotPassword} /> */}
      <Stack.Screen name="Code" component={Code} />
    </Stack.Navigator>
  );
}
