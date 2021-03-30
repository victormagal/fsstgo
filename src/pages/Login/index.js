import React from 'react';
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import Logo from '../../assets/svg/logo.svg';
import styles from './styles';

export default function Login({navigation}) {
  return (
    <KeyboardAvoidingView style={styles.background}>
      <ScrollView>
        <View style={styles.containerLogo}>
          <Logo />
        </View>
        <View style={styles.containerCenter}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            autoCorrect={false}
            onChangeText={() => {}}
          />
        </View>
        <View style={styles.containerCenter}>
          <TextInput
            style={styles.input}
            placeholder="Senha"
            autoCorrect={false}
            onChangeText={() => {}}
          />
        </View>
        <View style={styles.containerRight}>
          <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={styles.keyText}>Esqueci minha senha</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.containerCenter}>
          <TouchableOpacity style={styles.btnSubmit} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.submitText}>Entrar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.containerCenter}>
          <Text style={styles.txtNewCount}>Ainda não tem uma conta?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.keyText}>Criar uma conta</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.containerCenter}>
          <Text style={styles.txtProtected}>Você está em um ambiente seguro</Text>
          <TouchableOpacity>
            <Text style={styles.btnProtected}>Leia os termos e condições</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
