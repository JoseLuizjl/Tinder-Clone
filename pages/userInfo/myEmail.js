import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, SafeAreaView, TextInput, Alert } from 'react-native';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';

function MyEmail({ navigation, route }) {
  const [loaded] = useFonts({
    Gilroy: require('../../assets/fonts/Gilroy-Light.otf'),
  });

  const [email, setEmail] = useState('');

  if (!loaded) {
    return null;
  }

  // Function to validate the email format
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Check if the button should be disabled
  const isButtonDisabled = !email || !validateEmail(email);

  // Handle the continue button press
  const handleContinue = () => {
    if (!isButtonDisabled) {
      navigation.navigate('myName');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.emailText}>My{'\n'}email is</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email address"
          placeholderTextColor="#a0a0a0"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            {
              backgroundColor: isButtonDisabled ? '#d5d5d5' : null,
            },
          ]}
          onPress={handleContinue}
          disabled={isButtonDisabled}
        >
          <LinearGradient
            colors={isButtonDisabled ? ['#d5d5d5', '#d5d5d5'] : ['#E73D76', '#FF3235']}
            style={styles.button}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Text style={[styles.buttonText, { color: isButtonDisabled ? '#505050' : '#fff' }]}>
              CONTINUE
            </Text>
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
  emailText: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'left',
    position: 'absolute',
    top: 40,
    left: 50,
    fontFamily: 'Gilroy',
  },
  inputContainer: {
    position: 'absolute',
    top: 190,
  },
  input: {
    borderBottomWidth: 2,
    borderColor: '#a0a0a0',
    width: 230,
  },
  buttonContainer: {
    position: 'absolute',
    top: 280,
  },
  button: {
    width: 255,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 15.5,
    fontFamily: 'GothamRoundedBook',
  },
});

export default MyEmail;
