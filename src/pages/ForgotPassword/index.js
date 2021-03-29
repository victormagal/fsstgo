import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

import Logo from '../../assets/svg/logo.svg';
import styles from './styles';

export default function ForgotPassword() {
  return (
    <View style={styles.background}>
      <View style={styles.containerLogo}>
        <Logo />
      </View>

      <View style={styles.container}>
        <Text style={styles.baseTitle}>Esqueceu a senha?</Text>
        <Text style={styles.innerTitle}>
          Confirme o email cadastrado e enviaremos instruções.
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCorrect={false}
          onChangeText={() => {}}
        />

        <TouchableOpacity style={styles.btnSubmit}>
          <Text style={styles.submitText}>ENVIAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
