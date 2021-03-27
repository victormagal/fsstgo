import React from 'react';
import {
  View,
  KeyboardAvoidingView,
  // Image,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';

import styles from './styles';

export default function Login() {
  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        {/* TODO: arrumar img telalogin */}
        {/* <Image source={require('../../assets/img/logo.png')} /> */}
      </View>

      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCorrect={false}
          onChangeText={() => {}}
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          autoCorrect={false}
          onChangeText={() => {}}
        />

        <View style={styles.txtMyKey}>
          <TouchableOpacity style={styles.btnKey}>
            <Text style={styles.keyText}>Esqueci minha senha</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.btnSubmit}>
          <Text style={styles.submitText}>Entrar</Text>
        </TouchableOpacity>

        <Text style={styles.txtNewCount}>Ainda não tem uma conta?</Text>
        <TouchableOpacity>
          <Text style={styles.btnNewCount}>Criar uma conta</Text>
        </TouchableOpacity>

        <Text style={styles.txtProtected}>Você está em um ambiente seguro</Text>
        <TouchableOpacity>
          <Text style={styles.btnProtected}>Leia os termos e condições</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
