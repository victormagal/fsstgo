import React from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import Logo from '../../assets/svg/logo.svg';
import styles from './styles';

export default function Code() {
  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Logo />
      </View>

      <View style={styles.container}>
        <Text style={styles.baseTitle}>Código</Text>
        <Text style={styles.innerTitle}>
          Insira o código de 6 digitos que vc recebeu
        </Text>

        <View style={styles.row}>
          <TextInput
            style={styles.box}
            autoCorrect={false}
            onChangeText={() => {}}
          />

          <TextInput
            style={styles.box}
            autoCorrect={false}
            onChangeText={() => {}}
          />

          <TextInput
            style={styles.box}
            autoCorrect={false}
            onChangeText={() => {}}
          />

          <TextInput
            style={styles.box}
            autoCorrect={false}
            onChangeText={() => {}}
          />

          <TextInput
            style={styles.box}
            autoCorrect={false}
            onChangeText={() => {}}
          />

          <TextInput
            style={styles.box}
            autoCorrect={false}
            onChangeText={() => {}}
          />
        </View>

        <TouchableOpacity style={styles.btnSubmit}>
          <Text style={styles.submitText}>ENVIAR</Text>
        </TouchableOpacity>

        <View style={styles.txtMyCode}>
          <TouchableOpacity style={styles.btnCode}>
            <Text style={styles.sendCode}>Reenviar código</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
