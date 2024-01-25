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
import { LinearGradient } from 'expo-linear-gradient';

function Recovery({ navigation, route }) {
  const [loaded] = useFonts({
    GothamRoundedBook: require('../../assets/fonts/GothamRounded-Book.otf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Account Recovery</Text>
      </View>

      <View style={styles.mainContainer}>
        <Text style={styles.mainText}>Changed your phone number or lost access to your Google account? We can help you log in with your email.</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('sendEmail')}>
          <LinearGradient
            colors={['#E73D76', '#FF3235']}
            style={styles.button}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Text style={styles.buttonText}>Log in with email</Text>
          </LinearGradient>
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
    fontSize: 32.5,
    textAlign: 'center',
  },
  mainContainer: {
    marginTop: 35,
  },
  mainText: {
    fontSize: 16.5,
    color: '#404040',
    textAlign: 'center',
    width: 260,
  },
  buttonContainer: {
    position: 'absolute',
    top: 360,
  },
  button: {
    width: 245,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15.5,
    fontFamily: 'GothamRoundedBook',
  },
});

export default Recovery;
