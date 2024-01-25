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
      <View style={styles.LogoContainer}>
        <Image
          source={require('../../assets/tinderIcon.png')}
          style={styles.Logo}
        />
      </View>

      <View style={styles.containerText}>
        <Text style={styles.Text}>
          Não conseguimos encontrar uma conta do Tinder conectada a essa conta do {keyText}
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
            <Text style={styles.buttonText}>CRIAR NOVA CONTA</Text>
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
  LogoContainer: {
    marginTop: 40,
    alignItems: 'center',
  },
  containerText: {
    marginTop: 45,

  },
  Text: {
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
