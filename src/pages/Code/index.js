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

export default function Code({navigation}) {
  return (
    <KeyboardAvoidingView style={styles.background}>
      <ScrollView>
        <View style={styles.containerLogo}>
          <Logo width={250} />
        </View>

        <View style={styles.containerLeft}>
          <Text style={styles.baseTitle}>Código</Text>
          <Text style={styles.innerTitle}>
            Insira o código de 6 digitos que vc recebeu
          </Text>
        </View>
        <View style={styles.containerCode}>
          <View style={styles.itemCode}>
            <TextInput
              style={styles.box}
              autoCorrect={false}
              onChangeText={() => {}}
            />
          </View>
          <View style={styles.itemCode}>
            <TextInput
              style={styles.box}
              autoCorrect={false}
              onChangeText={() => {}}
            />
          </View>
          <View style={styles.itemCode}>
            <TextInput
              style={styles.box}
              autoCorrect={false}
              onChangeText={() => {}}
            />
          </View>
          <View style={styles.itemCode}>
            <TextInput
              style={styles.box}
              autoCorrect={false}
              onChangeText={() => {}}
            />
          </View>
          <View style={styles.itemCode}>
            <TextInput
              style={styles.box}
              autoCorrect={false}
              onChangeText={() => {}}
            />
          </View>
          <View style={styles.itemCode}>
            <TextInput
              style={styles.box}
              autoCorrect={false}
              onChangeText={() => {}}
            />
          </View>
        </View>
        <View style={styles.containerCenter}>
          <TouchableOpacity style={styles.btnSubmit} onPress={() => navigation.navigate('NewPassword')}>
            <Text style={styles.submitText}>ENVIAR</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerCenter}>
          <TouchableOpacity>
            <Text style={styles.sendCode}>Reenviar código</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
