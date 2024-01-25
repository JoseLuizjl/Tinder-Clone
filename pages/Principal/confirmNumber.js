import React, { useEffect, useState, useRef } from "react";
import { 
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput 
} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';

function ConfirmNumber({navigation, route}) {

  const [loaded] = useFonts({
    GothamRoundedBook: require('../../assets/fonts/GothamRounded-Book.otf'),
  });

  const [inputs, setInputs] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([]);
  const areAllInputsFilled = () => inputs.every(value => value !== '');

  if (!loaded) {
    return null;
  }

  const handleChange = (text, index) => {
    const newInputs = [...inputs];
    newInputs[index] = text;

    if (text === '' && index > 0) {
      const previousInput = index - 1;
      inputRefs.current[previousInput].focus();
    }

    if (text !== '' && index < inputs.length - 1) {
      const nextInput = index + 1;
      inputRefs.current[nextInput].focus();
    }

    setInputs(newInputs);
  };

  const { phoneNumber } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainText}>
        <Text style={styles.text}>My code is</Text>
      </View>

      <View style={styles.middleContainer}>
        <Text style={styles.number}>{phoneNumber}</Text>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('phoneNumber')}> 
          <Text style={styles.buttonText}>SEND AGAIN</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        {inputs.map((value, index) => (
          <TextInput
            key={index}
            style={styles.input}
            value={value}
            onChangeText={(text) => handleChange(text, index)}
            maxLength={1}
            keyboardType="numeric"
            ref={(input) => {
              inputRefs.current[index] = input;
            }}
          />
        ))}
      </View>

      <View style={styles.buttonContainer}>
        <LinearGradient
          colors={areAllInputsFilled() ?  ['#E73D76', '#FF3235'] : ['#d5d5d5', '#d5d5d5']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={[styles.gradientButton, { opacity: areAllInputsFilled() ? 1 : 0.5 }]}
        >
          <TouchableOpacity
            onPress={() => {
              if (areAllInputsFilled()) {
                navigation.navigate('myEmail')
              }
            }}
            disabled={!areAllInputsFilled()}
          >
            <Text style={[styles.gradientText, { color: areAllInputsFilled() ? '#FFFFFF' : '#505050' }]}>
              Continue
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
}

const styles= StyleSheet.create({
  container: {
    flex: 1,
  },
  mainText: {
    marginTop: 60,
    marginLeft: 25,
    marginBottom: 15,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  middleContainer: {
    marginLeft: 30,
    flexDirection: 'row',
  },
  number: {
    fontSize: 16,
    paddingTop: 13,
    marginRight: 15,
  },
  button: {
    width: 140,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    borderColor: '#b9bdc4',
    borderWidth: 2.5,
  },
  buttonText: {
    color: '#404040',
    fontWeight: 'bold',
    fontSize: 12.5,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 29,
  },
  input: {
    borderBottomWidth: 2,
    borderColor: '#606060',
    padding: 8,
    width: 40,
    textAlign: 'center',
    fontSize: 16,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  gradientButton: {
    width: '80%',
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradientText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default ConfirmNumber;
