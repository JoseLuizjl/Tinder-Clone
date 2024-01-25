import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, SafeAreaView, TextInput ,Image } from 'react-native';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';

function Rules({ navigation, route }) {
  const [loaded] = useFonts({
    Gilroy: require('../../assets/fonts/Gilroy-Light.otf'),
  });

  const [schoolName, setSchoolName] = useState('');
  const [buttonEnabled, setButtonEnabled] = useState(false);

  useEffect(() => {
    const isInputValid = schoolName.trim() !== '';
    
    setButtonEnabled(isInputValid);
  }, [schoolName]);

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.logoContainer}>
     <Image style={styles.logo} source={require('../../assets/tinderIcon.png')} alt="Logo" />
    <Text style={styles.userText}>Bem vindo ao Tinder</Text>
    </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Por favor siga estas regras da casa</Text>
      </View>


      <View style={styles.rulesContainer}>
      <View style={styles.checkTitle}>
        <Ionicons name="checkmark-outline" style={styles.checkIcon} />
          <Text style={styles.ruleTitle}>Seja você mesmo</Text>
        </View>
        <Text style={styles.textRule}>Certifique-se de que suas fotos, idade e biografia sejam fiéis a quem você é.</Text>
          <View style={styles.checkTitle}>
        <Ionicons name="checkmark-outline" style={styles.checkIcon} />
          <Text style={styles.ruleTitle}>Fique seguro</Text>
        </View>
        <Text style={styles.textRule}>Não se precipite em fornecer informações pessoais. <Text style={{borderBottomWidth: 2, borderColor: '#a0a0a0'}}>Dados Seguros.</Text></Text>
        <View style={styles.checkTitle}>
        <Ionicons name="checkmark-outline" style={styles.checkIcon} />
          <Text style={styles.ruleTitle}>Mantenha a calma</Text>
        </View>
        <Text style={styles.textRule} >Respeite os outros e trate-os como gostaria de ser tratado.</Text>
         <View style={styles.checkTitle}>
        <Ionicons name="checkmark-outline" style={styles.checkIcon} />
          <Text style={styles.ruleTitle}>Seja proativo</Text>
        </View>
        <Text style={styles.textRule}>Sempre denuncie maus comportamentos.</Text>
      </View>

            <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Tinder')}>
          <LinearGradient
        colors={['#E73D76', '#FF3235']}
        style={styles.button}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
            <Text style={styles.buttonText}>EU CONCORDO</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
    position: 'absolute',
  },
  userText: {
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Gilroy',
    marginTop: 80,
  },
  infoContainer: {
    position: 'absolute',
    top: 120,
  },
  infoText: {
    color: '#707070',
    fontSize: 14.5,
    fontFamily: 'Gilroy',
    fontWeight: 'bold',
  },
  rulesContainer: {
    position: 'absolute',
    top: 180,
  },
  checkIcon: {
    color: '#e67370',
    fontSize: 23,
    marginLeft: 10,
  },
  ruleTitle: {
    fontWeight: 'bold',
    color: '#505050',
    paddingTop: 3,
    marginLeft: 7,
  },
  textRule: {
    color: '#888c99',
    marginLeft: 10,
    fontWeight: '500',
    
  },
  buttonContainer: {
    position: 'absolute',
    top: 550,
  },
  button: {
    width: 255,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15.5,
    fontFamily: 'Gilroy',
  },
  checkTitle: {
    flexDirection: 'row',
  },
});

export default Rules;