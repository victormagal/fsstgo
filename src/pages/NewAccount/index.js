import React from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import Logo from '../../assets/svg/logo.svg';
import styles from './styles';

export default function NewAccount({navigation}) {
  return (
    <KeyboardAvoidingView style={styles.background}>
      <ScrollView>
        <View style={styles.containerLogo}>
          <Logo width={250} />
        </View>
        <View style={styles.containerCenter}>
          <TextInput
            style={styles.input}
            placeholder="Nome"
            autoCorrect={false}
            onChangeText={() => {}}
          />
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
            placeholder="CPF"
            autoCorrect={false}
            onChangeText={() => {}}
          />
        </View>
        <View style={styles.containerCenter}>
          <TextInput
            style={styles.input}
            placeholder="Data de nacimento"
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
        <View style={styles.containerCenter}>
          <TextInput
            style={styles.input}
            placeholder="Confirmar senha"
            autoCorrect={false}
            onChangeText={() => {}}
          />
        </View>
        <View style={styles.containerCenter}>
          <TouchableOpacity style={styles.btnSubmit} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.submitText}>Criar conta</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
