import React, { useEffect, useState } from "react";
import {
  Modal,
  FlatList,
  TouchableOpacity,
  View,
  Text,
  Dimensions,
  StyleSheet,
  SafeAreaView,
  TextInput
} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get("window");

function PhoneNumber({ navigation }) {
  const [areas, setAreas] = useState([]);
  const [selectedArea, setSelectedArea] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [text, settext] = useState('');
  const [isButtonClick, setIsButtonClick] = useState(false);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then(response => response.json())
      .then(data => {
        const areaData = data.map(item => ({
          code: item.alpha2Code,
          item: item.name,
          callingCode: `+${item.callingCodes[0]}`,
        }));

        setAreas(areaData);

        if (areaData.length > 0) {
          const defaultData = areaData.find(a => a.code === "BR");

          if (defaultData) {
            setSelectedArea(defaultData);
          }
        }
      });
  }, []);

  const handleChangeText = (inputText) => {
    const numericValue = inputText.replace(/[^0-9]/g, '');
    settext(numericValue);
    setIsButtonClick(numericValue.trim().length > 0);
  };

  const handleButtonPress = () => {
    if (isButtonClick) {
      navigation.navigate('confirmNumber', { phoneNumber: text });
    }
  };

  const [loaded] = useFonts({
    GothamRoundedBook: require('../../assets/fonts/GothamRounded-Book.otf'),
  });

  if (!loaded) {
    return null;
  }

  const renderAreasCodesModal = () => {

    const renderItem = ({ item }) => (
      <TouchableOpacity
        style={styles.countryAlign}
        onPress={() => {
          setSelectedArea(item);
          setModalVisible(false);
        }}
      >
        <View
          style={styles.codeContainer}
        >
          <Text style={styles.codeText}>{item.callingCode}</Text>
        </View>
        <Text style={styles.countryText}>{item.item}</Text>
      </TouchableOpacity>
    );

    return (
      <Modal animationType="none" transparent={true} visible={modalVisible}>
        <TouchableOpacity
          style={styles.countryPosition}
          onPress={() => setModalVisible(false)}
        >
          <View
            style={styles.countryContainer}
          >
            <FlatList
              data={areas}
              renderItem={renderItem}
              keyExtractor={(item) => item.code}
              showsVerticalScrollIndicator={false}
              style={styles.listSpace}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    );
  };

  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.myPhoneNumber}>My phone number is</Text>

      <View style={styles.changeCountry}>
        <View style={styles.pickerPosition}>
          <TouchableOpacity
            style={styles.pickerBorder}
            onPress={() => setModalVisible(true)}
          >
            <View style={styles.viewCountryAlign}>
              <Text style={styles.viewCountryText}>{selectedArea?.code}</Text>
            </View>
            <View style={styles.viewCountryAlign}>
              <Text style={styles.viewCountryText}>{selectedArea?.callingCode}</Text>
            </View>

            <View style={{ justifyContent: "center" }}>
              <Ionicons name="caret-down-outline" style={styles.arrowDown} />
            </View>
          </TouchableOpacity>
          {renderAreasCodesModal()}
        </View>
      </View>

      <View style={styles.numberInputBorder}>
        <TextInput style={styles.numberInput}
          placeholder="Phone number"
          placeholderTextColor="#4c4e53"
          keyboardType="numeric"
          value={text}
          onChangeText={handleChangeText}
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.infoText}>When you tap Continue, Tinder will send you a text message with the verification code. Message and data rates may apply. The confirmed phone number can be used to sign in to Tinder. <Text style={styles.linkText}>Learn what happens if your number changes.</Text></Text>
      </View>

      <View style={styles.btnCont}>
        <TouchableOpacity
          disabled={!isButtonClick}
          onPress={handleButtonPress}
          style={[
            styles.button,
            {
              backgroundColor: isButtonClick ? 'transparent' : '#FFD700',
              borderColor: isButtonClick ? '#fff' : '#fff',
            },
          ]}
        >
          <LinearGradient
            colors={isButtonClick ? ['#E73D76', '#FF3235'] : ['#d5d5d5', '#d5d5d5']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{ flex: 1, borderRadius: 50, overflow: 'hidden', width: 265, }}
          >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={[styles.buttonText, { color: isButtonClick ? '#fff' : '#505050' }]}>
                Continue
              </Text>
            </View>
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
  myPhoneNumber: {
    fontSize: 27.5,
    color: '#000',
    fontWeight: '600',
    position: 'absolute',
    top: 55,
    left: 50,
    fontFamily: 'GothamRoundedBook'
  },
  numberInputBorder: {
    flexDirection: "row",
    position: 'absolute',
    right: 40,
    top: 124,
    width: 151,
    height: 50,
    marginHorizontal: 5,
    borderBottomColor: "#000",
    borderBottomWidth: 1,
    paddingTop: 25,
    marginLeft: 15,
    marginTop: 1,
    color: '#4c4e53'
  },
  numberInput: {
    fontSize: 15.5,
    fontFamily: 'GothamRoundedBook',
    width: 152,
  },
  textContainer: {
    position: 'absolute',
    top: 205,
    fontWeight: '200',
    width: 250,
  },
  infoText: {
    fontFamily: 'GothamRoundedBook',
    textAlign: 'left',
  },
  linkText: {
    textDecorationLine: "underline",
    color: '#1c6cb9',
    fontWeight: '600',
    fontFamily: 'GothamRoundedBook'
  },
  button: {
    position: 'absolute',
    top: 375,
    width: '80%',
    height: 44,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '600',
    fontFamily: 'GothamRoundedBook',
    color: '#505050',
  },
  changeCountry: {
    position: 'absolute',
    top: 125,
    right: 80,
    flexDirection: 'row',
  },
  countryAlign: {
    padding: 10,
    flexDirection: "row",
  },
  codeContainer: {
    width: 52,
    height: 30,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    borderRightWidth: 1,
    borderColor: "#000",
  },
  codeText: {
    fontSize: 16,
    color: "#000",
    flexDirection: 'row',
    marginBottom: 7,
    fontFamily: 'GothamRoundedBook'
  },
  countryText: {
    fontSize: 16,
    color: "#000",
    fontFamily: 'GothamRoundedBook'
  },
  countryPosition: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  countryContainer: {
    height: 400,
    width: width * 0.8,
    backgroundColor: "#fff",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#000',
  },
  listSpace: {
    padding: 20,
    marginBottom: 20
  },
  pickerPosition: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  pickerBorder: {
    width: 80,
    height: 50,
    marginHorizontal: 5,
    borderBottomColor: "#4c4e53",
    borderBottomWidth: 1,
    flexDirection: "row",
    paddingTop: 25,
  },
  viewCountryAlign: {
    justifyContent: "center",
    marginLeft: 5,
  },
  viewCountryText: {
    color: "#4c4e53",
    fontSize: 17,
  },
  arrowDown: {
    fontSize: 12,
    color: "#222",
    marginLeft: 8,
    marginTop: 3,
  },
  btnCont:{
    position: 'absolute',
  },  
});

export default PhoneNumber;
