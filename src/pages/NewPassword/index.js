import React from 'react';
import {View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import Logo from '../../assets/svg/logo.svg';
import styles from './styles';

export default function NewPassword({navigation}) {
  return (
    <KeyboardAvoidingView style={styles.background}>
      <ScrollView>
        <View style={styles.containerLogo}>
          <Logo width={250} />
        </View>
        <View style={styles.containerLeft}>
          <Text style={styles.baseTitle}>Cria a nova senha</Text>
        </View>
        <View style={styles.containerCenter}>
          <TextInput
            style={styles.input}
            placeholder="Nova senha"
            autoCorrect={false}
            onChangeText={() => {}}
          />
        </View>
        <View style={styles.containerCenter}>
          <TextInput
            style={styles.input}
            placeholder="Confirmar nova senha"
            autoCorrect={false}
            onChangeText={() => {}}
          />
        </View>
        <View style={styles.containerCenter}>
          <TouchableOpacity style={styles.btnSubmit} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.submitText}>SALVAR</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
