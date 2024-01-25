import React, { useEffect, useState } from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';

function SendEmail({ navigation, route }) {
  const [loaded] = useFonts({
    GothamRoundedBook: require('../../assets/fonts/GothamRounded-Book.otf'),
  });


  const [userEmail, setUserEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  if (!loaded) {
    return null;
  }

   const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSendEmail = () => {
    if (validateEmail(userEmail)) {
      navigation.navigate('ConfirmEmail', { email: userEmail });
    } else {
      setIsValidEmail(false);
    }
  };


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContaienr}>
        <Text style={styles.headerText}>Entrar via e-mail</Text>
      </View>

      <View style={styles.inputContainer}>
         <TextInput
          style={[
            styles.inputEmail,
            !isValidEmail && styles.inputError,
          ]}
          placeholder="Digite seu e-mail"
          placeholderTextColor="#505050"
          onChangeText={(text) => {
            setUserEmail(text);
            setIsValidEmail(true); 
          }}
        />
        {!isValidEmail && (
          <Text style={styles.errorMessage}>Digite um email válido</Text>
        )}
      </View>

      <View style={styles.mainContainer}>
        <Text style={styles.mainText}>Enviaremos um link por e-mail que permitirá o login instantâneo</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSendEmail}>
          <LinearGradient
            colors={['#E73D76', '#FF3235']}
            style={styles.button}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Text style={styles.buttonText}>Enviar e-mail</Text>
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
  headerContaienr: {
      marginTop: 55,
      right: 40,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  mainContainer: {
    marginTop: 10,
    right: 35,
  },
  mainText: {
     fontSize: 13,
     color: '#404040',
     textAlign: 'left',
     width: 200,
  },
  inputContainer: {
    marginTop: 25,
    right: 10,
  },
  inputEmail: {
    borderBottomWidth: 2,
    width: 250,
    borderColor: '#f28561',
  },  
  buttonContainer: {
    position: 'absolute',
    top: 230,
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
  inputError: {
    borderColor: 'red', 
  },
  errorMessage: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
});

export default SendEmail;
