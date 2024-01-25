import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, SafeAreaView, TextInput, Alert } from 'react-native';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';

function Interests({ navigation, route }) {
  const [loaded] = useFonts({
    Gilroy: require('../../assets/fonts/Gilroy-Light.otf'),
  });

  const [selectedInterests, setSelectedInterests] = useState([]);
  const maxInterests = 5;

  const handleInterestToggle = (interest) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter(item => item !== interest));
    } else {
      if (selectedInterests.length < maxInterests) {
        setSelectedInterests([...selectedInterests, interest]);
      } else {
        const newInterests = [...selectedInterests];
        const indexOfInterest = newInterests.indexOf(interest);
        if (indexOfInterest !== -1) {
          newInterests.splice(indexOfInterest, 1);
        }
        setSelectedInterests(newInterests);
      }
    }
  };

  const isContinueClickable = selectedInterests.length === maxInterests;

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.userText}>My{'\n'}interests are</Text>

      <View  style={styles.skipContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('userPhoto')}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Let everyone know what you're interested in by adding it to your profile.</Text> 
      </View>

      <View style={styles.interestButtonsContainer}>
        {['Harry Potter', 'Spa', 'Hot Yoga', 'Spotify', 'Basketball', 'Soccer', 'SoundCloud', 'Travel', 'Instagram', 'Sauna', '90s Kid', 'Rock', 'Pop', 'Running', 'Climbing', 'Gym', 'Walking', 'Poetry', 'Movies', 'Sushi', 'Meditation', 'Books'].map((interest) => (
          <TouchableOpacity
            key={interest}
            style={[
              styles.interestButton,
              selectedInterests.includes(interest) ? styles.selectedInterest : null,
            ]}
            onPress={() => handleInterestToggle(interest)}
          >
            <Text
              style={[
                styles.interestButtonText,
                selectedInterests.includes(interest) ? styles.selectedText : null,
              ]}
            >
              {interest}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => {
            if (isContinueClickable) {
              navigation.navigate('userPhoto');
            }
          }}
          disabled={!isContinueClickable}
        >
          <LinearGradient
            colors={isContinueClickable ? ['#E73D76', '#FF3235'] : ['#e8e8e8', '#e8e8e8']}
            style={styles.continueButtonGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Text style={[styles.continueButtonText, isContinueClickable ? styles.clickableText : null]}>
              CONTINUE {selectedInterests.length}/{maxInterests}
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
  infoContainer: {
    position: 'absolute',
    top: 140,
  },
  infoText: {
    color: '#707070',
    fontSize: 14.5,
    fontFamily: 'Gilroy',
    textAlign: 'left',
    width: 230,
    fontWeight: 'bold',
  },
  buttonContainer: {
    position: 'absolute',
    top: 520,
  },
  interestButtonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'left',
    borderColor: '#fff',
    position: 'absolute',
    marginLeft: 30,
    top: 220,
  },
  interestButton: {
    margin: 5,
    padding: 5,
    borderWidth: 2,
    borderRadius: 30,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#a1a9b2',
  },
  selectedInterest: {
    borderColor: '#b95365',  
  },
  selectedText: {
    color: '#b95365',  
  },
  interestButtonText: {
    fontSize: 16,
    color: '#a1a9b2',
    fontWeight: 'bold',
  },
  continueButtonText: {
    color: '#505050',
    fontSize: 18,
    fontFamily: 'Gilroy',
    fontWeight: 'bold',
  },
  clickableText: {
    color: 'white', 
  },
  continueButtonGradient: {
    marginTop: 16,
    padding: 12,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#FF3235',
    width: 255,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Interests;
