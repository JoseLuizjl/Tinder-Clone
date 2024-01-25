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

function SignIn({ navigation, route }) {
  const [loaded] = useFonts({
    GothamRoundedBook: require('../../assets/fonts/GothamRounded-Book.otf'),
  });

  if (!loaded) {
    return null;
  }

  const { keyText } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/tinderIcon.png')}
          style={styles.logo}
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.text}>
          We couldn't find a Tinder account connected to this {keyText} account
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('phoneNumber')}>
          <LinearGradient
            colors={['#E73D76', '#FF3235']}
            style={styles.button}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Text style={styles.buttonText}>CREATE NEW ACCOUNT</Text>
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
  logoContainer: {
    marginTop: 40,
    alignItems: 'center',
  },
  textContainer: {
    marginTop: 45,
  },
  text: {
    fontWeight: '500',
    fontFamily: 'GothamRoundedBook',
    fontSize: 18,
    color: '#505050',
    textAlign: 'center'
  },
  buttonContainer: {
    position: 'absolute',
    top: 300,
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

export default SignIn;
