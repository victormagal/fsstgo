import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

import Logo from '../../assets/svg/logo.svg';
import styles from './styles';

export default function NewPassword() {
  return (
    <View style={styles.background}>
      <View style={styles.containerLogo}>
        <Logo />
      </View>

      <View style={styles.container}>
        <Text style={styles.baseTitle}>Cria a nova senha</Text>

        <TextInput
          style={styles.input}
          placeholder="Nova senha"
          autoCorrect={false}
          onChangeText={() => {}}
        />

        <TextInput
          style={styles.input}
          placeholder="Confirmar nova senha"
          autoCorrect={false}
          onChangeText={() => {}}
        />

        <TouchableOpacity style={styles.btnSubmit}>
          <Text style={styles.submitText}>SALVAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
