import React from 'react';
import { View, ImageBackground, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';

const HomeScreen = ({ navigation }) => {

  const [loaded] = useFonts({
    GothamRoundedBook: require('../../assets/fonts/GothamRounded-Book.otf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    

        <LinearGradient colors={['#FE7156','#FE6A56','#FE655C','#FF5F5F','#FC5864','#FF5066','#FF486C']} style={styles.container}>

      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../../assets/logo.png')} alt="Logo" />
        <Text style={styles.fontText}>tinder</Text>
      </View>

      <View style={styles.infoContainer}>
       <Text style={styles.infoText}>Ao tocar em entrar,você concorda com os nossos <Text style={styles.linkText}>Termos</Text>.Saiba como processamos seus dados em nossa <Text style={styles.linkText}>Política de Privacidade</Text> e <Text style={styles.linkText}>Política de Cookies</Text>.</Text>
           </View>

      <View style={styles.btnContainer}>

      <TouchableOpacity onPress={() => navigation.navigate('SignIn', {keyText: "Google"})}>
          <View style={styles.loginContainer}>
              <Image style={styles.googleIcon} source={require('../../assets/googleIcon.png')} alt="Logo" />
              <Text style={styles.googleText}>ENTRAR COM O GOOGLE</Text>
          </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('SignIn', {keyText: "Facebook"})}>
          <View style={styles.loginContainer}>
              <Image style={styles.googleIcon} source={require('../../assets/facebookIcon.png')} alt="Logo" />
              <Text style={styles.googleText}>ENTRAR COM O FACEBOOK</Text>
          </View>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => navigation.navigate('phoneNumber')}>
          <View style={styles.loginContainer}>
              <Image style={styles.googleIcon} source={require('../../assets/chatIcon.png')} alt="Logo" />
              <Text style={styles.googleText}>ENTRAR COM O TELEFONE</Text>
          </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('recovery')}>
          <Text style={styles.problem}>Problemas para fazer o login? </Text>
      </TouchableOpacity>


      </View>

      
 
        </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    top: 65,
  },
  logo: {
    width: 50,
    height: 50,
  },
  fontText: {
    fontFamily: 'GothamRoundedBook',
    fontSize: 48,
    color: '#fff',
  },
  infoContainer: {
    position: 'absolute',
    bottom: 287,
    left: 25,
  },
  infoText: {
    fontFamily: 'GothamRoundedBook',
    fontSize: 14,
    color: '#fff',
    width: 290,
    fontWeight: '500',
    textAlign: 'center',
  },
 btnContainer: {
    position: 'absolute',
    bottom: 65,
    left: 30,
  },
  loginContainer: {
    backgroundColor: '#fff',
    width: 280,
    height: 55,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 14,
  },
  googleIcon: {
    marginLeft: 17,
    width: 24,
    height: 24,
    position: 'absolute',
    left: 8,
  },
  googleText: {
    fontWeight: '600',
    fontFamily: 'GothamRoundedBook',
    fontSize: 14.5,
    color: '#000',
    position: 'absolute',
    left: 55,
  },
  problem: {
    fontFamily: 'GothamRoundedBook',
    fontSize: 18,
    color: '#fff',
    fontWeight: '500',
    position: 'absolute',
    bottom: -38,
    marginLeft: 7,
  },
    linkText: {
    textDecorationLine: 'underline', 
    fontWeight: 'bold',
  },
});

export default HomeScreen;
