import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, SafeAreaView, TextInput, Alert } from 'react-native';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';

function MySchool({ navigation, route }) {
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
      <Text style={styles.userText}>My{'\n'}school is</Text>

      <View  style={styles.skipContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('choice')}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="School name"
          placeholderTextColor="#a0a0a0"
          onChangeText={(text) => setSchoolName(text)}
        />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>This is how it will appear on Tinder and you won't be able to change it</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            if (buttonEnabled) {
              navigation.navigate('choice');
            }
          }}
          disabled={!buttonEnabled} 
        >
          <LinearGradient
            colors={buttonEnabled ? ['#E73D76', '#FF3235'] : ['#d5d5d5', '#d5d5d5']} 
            style={styles.button}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Text style={[styles.buttonText, { color: buttonEnabled ? '#fff' : '#505050' }]}>CONTINUE</Text>
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
  userText: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'left',
    position: 'absolute',
    top: 40,
    left: 50,
    fontFamily: 'Gilroy',
  },
  skipContainer: {
    position: 'absolute',
    top: 18,
    right: 18,
  },
  skipText: {
    fontFamily: 'Gilroy',
    fontSize: 18,
    color: '#808080',
    fontWeight: 'bold',
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
  infoContainer: {
    position: 'absolute',
    top: 221,
  },
  infoText: {
    color: '#707070',
    fontSize: 14.5,
    fontFamily: 'Gilroy',
    textAlign: 'center',
    width: 230,
    fontWeight: 'bold',
  },
  buttonContainer: {
    position: 'absolute',
    top: 290,
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
});

export default MySchool;
