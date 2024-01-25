import React, { useEffect, useState } from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

function ConfirmEmail ({ navigation, route }) {
  const [loaded] = useFonts({
    GothamRoundedBook: require('../../assets/fonts/GothamRounded-Book.otf'),
  });

  if (!loaded) {
    return null;
  }

const { email } = route.params;


  return (
    <SafeAreaView style={styles.container}>

    <View style={styles.headerContaienr}>
      <Text style={styles.headerText}>Confira seu e-mail</Text>
    </View>

    <View style={styles.mainContainer}>
      <Text style={styles.mainText}>Se encontrarmos uma conta com o e-mail <Text style={styles.emailText}>{email}</Text>, um e-mail já foi enviado. Confira seu e-mail daqui a pouco.</Text>
    </View>

     <View style={styles.middleContainer}>
        <TouchableOpacity>
           <Text style={styles.dontReceiveText}>Não recebeu um link?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonEmail}>
            <Text style={styles.buttonText}>Usar um e-mail diferente</Text>
        </TouchableOpacity>
     
        <TouchableOpacity style={styles.buttonNum}>
            <Text style={styles.buttonText}>Usar seu número de telefone</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  headerContaienr: {
      marginTop: 105,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  mainContainer: {
    marginTop: 35,
    width: 275,
  },
  mainText: {
     fontSize: 16.5,
     color: '#404040',
     textAlign: 'center',
  },
  emailText: {
    color: '#575d65',
    fontWeight: 'bold',
  },
  dontReceiveText: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 30,
  },
  middleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonEmail: {
    width: 245,
    height: 43,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    borderColor: '#b9bdc4',
    borderWidth: 2.5,
    marginBottom: 2,
  },
  buttonNum: {
    width: 275,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    borderColor: '#b9bdc4',
    borderWidth: 2.5,
  },
  buttonText: {
    color: '#404040',
    fontWeight: 'bold',
    fontSize: 16.5,
    textAlign: 'center',
    width: 220,
  },  
});

export default ConfirmEmail ;
