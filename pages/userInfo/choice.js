import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, SafeAreaView, TextInput, Alert } from 'react-native';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

function Choice({ navigation, route }) {
  const [loaded] = useFonts({
    Gilroy: require('../../assets/fonts/Gilroy-Light.otf'),
  });

  const [isChecked, setChecked] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [continueButtonEnabled, setContinueButtonEnabled] = useState(false);

  useEffect(() => {
    setContinueButtonEnabled(selectedOption !== null);
  }, [selectedOption]);

  if (!loaded) {
    return null;
  }

  const handleOptionPress = (option) => {
    setSelectedOption(option);
  };

  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.userText}>I am</Text>
  
      <View style={styles.buttonChoiceContainer}>
        <TouchableOpacity
          style={[styles.button1, selectedOption === 'woman' && styles.selectedButton]}
          onPress={() => handleOptionPress('woman')}
        >
          <Text style={[styles.textBtn, selectedOption === 'woman' && styles.selectedButtonText]}>Woman</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.buttonChoiceContainer, { top: 300 }]}>
        <TouchableOpacity
          style={[styles.button2, selectedOption === 'man' && styles.selectedButton]}
          onPress={() => handleOptionPress('man')}
        >
          <Text style={[styles.textBtn, selectedOption === 'man' && styles.selectedButtonText]}>Man</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.infoContainer}>
         <TouchableOpacity
      style={[styles.checkboxContainer, isChecked ? styles.checked : styles.unchecked]}
      onPress={() => setChecked(!isChecked)}
    >
      {isChecked && <Ionicons name="md-checkmark" size={15} color="#008000" />}
    </TouchableOpacity>
        <Text style={styles.infoText}>Show my gender on my profile</Text> 
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            continueButtonEnabled ? { backgroundColor: '#E73D76' } : { backgroundColor: '#D3D3D3' },
          ]}
          onPress={() => {
            if (continueButtonEnabled) {
              navigation.navigate('interests');  
            }
          }}
          disabled={!continueButtonEnabled}
        >
          <LinearGradient
            colors={continueButtonEnabled ? ['#E73D76', '#FF3235'] : ['#D3D3D3', '#D3D3D3']}
            style={styles.button}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Text style={[styles.buttonText, { color: continueButtonEnabled ? '#fff' : '#000' }]}>
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
  userText: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'left',
    position: 'absolute',
    top: 40,
    left: 50,
    fontFamily: 'Gilroy',
  },
  buttonChoiceContainer: {
    position: 'absolute',
    top: 220,
  },
  button1: {
    borderWidth: 2,
    borderColor: '#909090',
    width: 240,
    height: 45,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button2: {
    borderWidth: 2,
    borderColor: '#909090',
    width: 240,
    height: 45,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBtn: {
    fontSize: 20,
    fontWeight: '500',
    color: '#909090',
  },
  infoContainer: {
    position: 'absolute',
    top: 437,
    flexDirection: 'row',
  },
  infoText: {
    color: '#505050',
    fontSize: 14.5,
    fontFamily: 'Gilroy',
    textAlign: 'center',
    width: 230,
    fontWeight: 'bold',
  },
  buttonContainer: {
    position: 'absolute',
    top: 490,
  },
  button: {
    width: 255,
    height: 44,
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
   selectedButton: {
    borderColor: '#b95365', 
  },
  selectedButtonText: {
    color: '#b95365', 
  },
  checkboxContainer: {
    width: 19,
    height: 19,
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 3,
  },
  checked: {
    borderColor: '#000', 
  },
  unchecked: {
    borderColor: '#000', 
  },
});

export default Choice;
