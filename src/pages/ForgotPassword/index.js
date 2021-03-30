import React from 'react';
import {View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import Logo from '../../assets/svg/logo.svg';
import styles from './styles';

export default function ForgotPassword({navigation}) {
  return (
    <KeyboardAvoidingView style={styles.background}>
      <ScrollView>
        <View style={styles.containerLogo}>
          <Logo width={250} />
        </View>
        <View style={styles.containerLeft}>
          <Text style={styles.baseTitle}>Esqueceu a senha?</Text>
          <Text style={styles.innerTitle}>
            Confirme o email cadastrado e enviaremos instruções.
          </Text>
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
          <TouchableOpacity style={styles.btnSubmit} onPress={() => navigation.navigate('VerificationCode')}>
            <Text style={styles.submitText}>ENVIAR</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
