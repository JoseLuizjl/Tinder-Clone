import React, { useRef, useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';

const NumberInput = ({ navigation }) => {
  const day1Ref = useRef(null);
  const day2Ref = useRef(null);
  const month1Ref = useRef(null);
  const month2Ref = useRef(null);
  const year1Ref = useRef(null);
  const year2Ref = useRef(null);
  const year3Ref = useRef(null);
  const year4Ref = useRef(null);

  const [day1, setDay1] = useState('');
  const [day2, setDay2] = useState('');
  const [month1, setMonth1] = useState('');
  const [month2, setMonth2] = useState('');
  const [year1, setYear1] = useState('');
  const [year2, setYear2] = useState('');
  const [year3, setYear3] = useState('');
  const [year4, setYear4] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const [loaded] = useFonts({
    Gilroy: require('../../assets/fonts/Gilroy-Light.otf'),
  });

  const handleInputChange = (text, inputIndex) => {
    if (/^\d+$/.test(text)) {
      switch (inputIndex) {
        case 1:
          setDay1(text);
          day2Ref.current.focus();
          break;
        case 2:
          setDay2(text);
          month1Ref.current.focus();
          break;
        case 3:
          setMonth1(text);
          month2Ref.current.focus();
          break;
        case 4:
          setMonth2(text);
          year1Ref.current.focus();
          break;
        case 5:
          setYear1(text);
          year2Ref.current.focus();
          break;
        case 6:
          setYear2(text);
          year3Ref.current.focus();
          break;
        case 7:
          setYear3(text);
          year4Ref.current.focus();
          break;
        case 8:
          setYear4(text);
          month1Ref.current.focus();
          break;
        default:
          break;
      }
    } else if (text === '' && inputIndex > 1) {
      switch (inputIndex) {
        case 2:
          setDay2('');
          day1Ref.current.focus();
          break;
        case 3:
          setMonth1('');
          day2Ref.current.focus();
          break;
        case 4:
          setMonth2('');
          month1Ref.current.focus();
          break;
        case 5:
          setYear1('');
          month2Ref.current.focus();
          break;
        case 6:
          setYear2('');
          year1Ref.current.focus();
          break;
        case 7:
          setYear3('');
          year2Ref.current.focus();
          break;
        case 8:
          setYear4('');
          year3Ref.current.focus();
          break;
        default:
          break;
      }
    } else if (text === '' && inputIndex === 1) {
      setDay1('');
    }

    checkButtonState();
  };

  const checkButtonState = () => {
    const allFilled =
      day1 && day2 && month1 && month2 && year1 && year2 && year3 && year4;

    setButtonDisabled(!allFilled);
  };

  useEffect(() => {
    checkButtonState();
  }, [day1, day2, month1, month2, year1, year2, year3, year4]);

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.userText}>My{'\n'}birthday is</Text>

      <View style={styles.inputContainer}>
        <TextInput
          ref={day1Ref}
          style={styles.input}
          placeholder='D'
          keyboardType="numeric"
          maxLength={1}
          value={day1}
          onChangeText={(text) => handleInputChange(text, 1)}
        />
        <TextInput
          ref={day2Ref}
          placeholder='D'
          style={styles.input}
          keyboardType="numeric"
          maxLength={1}
          value={day2}
          onChangeText={(text) => handleInputChange(text, 2)}
        />
        <Text style={styles.separator}>/</Text>
        <TextInput
          ref={month1Ref}
          placeholder='M'
          style={styles.input}
          keyboardType="numeric"
          maxLength={1}
          value={month1}
          onChangeText={(text) => handleInputChange(text, 3)}
        />
        <TextInput
          ref={month2Ref}
          placeholder='M'
          style={styles.input}
          keyboardType="numeric"
          maxLength={1}
          value={month2}
          onChangeText={(text) => handleInputChange(text, 4)}
        />
        <Text style={styles.separator}>/</Text>
        <TextInput
          ref={year1Ref}
          placeholder='Y'
          style={styles.input}
          keyboardType="numeric"
          maxLength={1}
          value={year1}
          onChangeText={(text) => handleInputChange(text, 5)}
        />
        <TextInput
          ref={year2Ref}
          placeholder='Y'
          style={styles.input}
          keyboardType="numeric"
          maxLength={1}
          value={year2}
          onChangeText={(text) => handleInputChange(text, 6)}
        />
        <TextInput
          ref={year3Ref}
          placeholder='Y'
          style={styles.input}
          keyboardType="numeric"
          maxLength={1}
          value={year3}
          onChangeText={(text) => handleInputChange(text, 7)}
        />
        <TextInput
          ref={year4Ref}
          placeholder='Y'
          style={styles.input}
          keyboardType="numeric"
          maxLength={1}
          value={year4}
          onChangeText={(text) => handleInputChange(text, 8)}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          disabled={buttonDisabled}
          onPress={() => {
            navigation.navigate('mySchool');
          }}
        >
          <LinearGradient
            colors={buttonDisabled ? ['#d5d5d5', '#d5d5d5'] : ['#E73D76', '#FF3235']}
            style={styles.button}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Text style={[styles.buttonText, { color: buttonDisabled ? '#505050' : '#FFFFFF' }]}>
              CONTINUE
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 50,
  },
  userText: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'left',
    position: 'absolute',
    top: 40,
    left: 55,
    fontFamily: 'Gilroy',
  },
  input: {
    height: 40,
    width: 20,
    borderBottomWidth: 2,
    margin: 3,
    textAlign: 'center',
    color: '#606060',
    borderColor: '#606060',
    fontWeight: 'bold',
    fontSize: 16.5,
    paddingTop: 10,
  },
  separator: {
    paddingHorizontal: 5,
    fontSize: 20,
    color: '#606060',
    fontWeight: '500',
    paddingTop: 10,
  },
  buttonContainer: {
    position: 'absolute',
    top: 270,
  },
  button: {
    width: 255,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  inputContainer: {
    position: 'absolute',
    top: 150,
    flexDirection: 'row',
  }
});

export default NumberInput;
