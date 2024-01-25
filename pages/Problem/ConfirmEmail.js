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

function ConfirmEmail({ navigation, route }) {
  const [loaded] = useFonts({
    GothamRoundedBook: require('../../assets/fonts/GothamRounded-Book.otf'),
  });

  if (!loaded) {
    return null;
  }

  const { email } = route.params;

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Check your email</Text>
      </View>

      <View style={styles.mainContainer}>
        <Text style={styles.mainText}>If we find an account with the email <Text style={styles.emailText}>{email}</Text>, an email has already been sent. Check your email in a moment.</Text>
      </View>

      <View style={styles.middleContainer}>
        <TouchableOpacity>
          <Text style={styles.dontReceiveText}>Didn't receive a link?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonEmail}>
          <Text style={styles.buttonText}>Use a different email</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonNum}>
          <Text style={styles.buttonText}>Use your phone number</Text>
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
  headerContainer: {
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

export default ConfirmEmail;
