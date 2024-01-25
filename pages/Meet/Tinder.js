import React, { useState, useRef, useEffect } from 'react';
import { View, Image, Button, StyleSheet, TouchableOpacity, Text, Animated } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

function Tinder({ navigation }) {
  const [randomImage, setRandomImage] = useState(null);
  const [heartVisible, setHeartVisible] = useState(false);
  const [tutorialVisible, setTutorialVisible] = useState(true);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    getRandomImage();
  }, []);

  const getRandomImage = () => {
    fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(data => {
        const randomPerson = data.results[0];
        setRandomImage(randomPerson.picture.large);
        setHeartVisible(false);
      });
  };

  const showHeart = () => {
    setHeartVisible(true);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start(() => {
      setHeartVisible(false);
      fadeAnim.setValue(0);
    });
  };

  const skipTutorial = () => {
    setTutorialVisible(false);
  };

  return (
    <View style={styles.container}>

      {tutorialVisible && (
        <View style={styles.tutorialOverlay}>
          <Text style={styles.handShake}>👋</Text>
          <Text style={styles.tutorialText1}>Let's get you ready!</Text>
          <Text style={styles.tutorialText2}>Here's everything you need to know</Text>
          <TouchableOpacity style={styles.button} onPress={skipTutorial}>
            <LinearGradient
              colors={['#E73D76', '#FF3235']}
              style={styles.button}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <Text style={styles.buttonText}>START TUTORIAL</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity onPress={skipTutorial} style={styles.tutorialButton}>
            <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>Skip</Text>
          </TouchableOpacity>
        </View>
      )}

      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../../assets/tinderIcon.png')} />
        <Text style={styles.fontText}>tinder</Text>
      </View>

      <View style={styles.options}>
        <TouchableOpacity>
          <Image style={styles.logo} source={require('../../assets/icon.png')} />
        </TouchableOpacity>
      </View>

      <Image source={{ uri: randomImage }} style={styles.image} />

      {heartVisible && (
        <Animated.Image
          source={require('../../assets/heart.png')}
          style={[styles.heart, { opacity: fadeAnim }]}
        />
      )}

      <View style={styles.allBtn}>
        <View style={styles.buttonGenerate}>
          <TouchableOpacity onPress={getRandomImage}>
            <Image style={styles.refreshIcon} source={require('../../assets/refresh.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonNot}>
          <TouchableOpacity>
            <Image style={styles.xIcon} source={require('../../assets/x.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonStar}>
          <TouchableOpacity>
            <Image style={styles.starBlueIcon} source={require('../../assets/starBlue.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonLightning}>
          <TouchableOpacity>
            <Image style={styles.lightningIcon} source={require('../../assets/lightning.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonLike}>
          <TouchableOpacity onPress={showHeart}>
            <Image style={styles.heartIcon} source={require('../../assets/heartIcon.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonArrow}>
          <TouchableOpacity>
            <Image style={styles.arrowUp} source={require('../../assets/arrowUp.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.containerBlack}>
          <LinearGradient
            colors={['transparent', 'rgba(0, 0, 0, 0.5)', 'rgba(0, 0, 0, 0.8)', 'rgba(0, 0, 0, 1)']}
            style={{
              height: '125%',
              borderBottomRightRadius: 7,
              borderBottomLeftRadius: 7,
            }}
          />
        </View>
      </View>

      <View style={styles.containerMenu}>
        <TouchableOpacity style={styles.tinderIcon} >
          <Image style={styles.tinderIcon} source={require('../../assets/tinderIcon.png')} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.searchIcon}>
          <Image style={styles.searchIcon} source={require('../../assets/search.png')} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.starIcon}>
          <Image style={styles.starIcon} source={require('../../assets/star.png')} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.chatIcon}>
          <Image style={styles.chatIcon} source={require('../../assets/chatnew.png')} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.userIcon}>
          <Image style={styles.userIcon} source={require('../../assets/user.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    position: 'absolute',
    top: 10,
    left: 10,
  },
  logo: {
    width: 27.5,
    height: 27.5,
  },
  fontText: {
    fontFamily: 'GothamRoundedBook',
    fontSize: 24,
    color: '#f65666',
    fontWeight: 'bold',
  },
  options: {
    position: 'absolute',
    top: 10,
    right: 20,
  },
  image: {
    width: '96%',
    height: '83%',
    borderRadius: 7,
  },
  heart: {
    position: 'absolute',
    top: 150,
    width: 150,
    height: 150,
  },
  allBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonGenerate: {
    borderWidth: 2,
    borderColor: '#434143',
    width: 43,
    height: 43,
    borderRadius: 50,
    position: 'absolute',
    top: -64,
    right: 105,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 4,
  },
  refreshIcon: {
    width: 20,
    height: 20,
    zIndex: 4,
  },
  buttonNot: {
    borderWidth: 2,
    borderColor: '#ff4f67',
    width: 55,
    height: 55,
    borderRadius: 50,
    position: 'absolute',
    top: -70,
    right: 35,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 4,
  },
  xIcon: {
    width: 43,
    height: 43,
    zIndex: 4,
  },
  buttonStar: {
    borderWidth: 2,
    borderColor: '#34c7f4',
    width: 43,
    height: 43,
    borderRadius: 50,
    position: 'absolute',
    top: -64,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 4,
  },
  starBlueIcon: {
    width: 30,
    height: 30,
    zIndex: 4,
  },
  buttonLike: {
    borderWidth: 2,
    borderColor: '#1fe8b8',
    width: 55,
    height: 55,
    borderRadius: 50,
    position: 'absolute',
    top: -70,
    left: 35,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 4,
  },
  heartIcon: {
    width: 30,
    height: 30,
    zIndex: 4,
  },
  buttonLightning: {
    borderWidth: 2,
    borderColor: '#b143f1',
    width: 43,
    height: 43,
    borderRadius: 50,
    position: 'absolute',
    top: -64,
    left: 105,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 4,
  },
  lightningIcon: {
    width: 30,
    height: 30,
    zIndex: 4,
  },
  buttonArrow: {
    position: 'absolute',
    top: -120,
    left: 120,
    zIndex: 6,
  },
  arrowUp: {
    width: 30,
    height: 30,
  },
  containerBlack: {
    height: 190,
    width: 324,
    position: 'absolute',
    top: -239,
    left: -161,
    zIndex: 1,
  },
  containerMenu: {
    width: '100%',
    height: 45,
    backgroundColor: '#fff',
    marginTop: 12,
    borderColor: "#b0b0b0",
    borderTopWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tinderIcon: {
    width: 24.5,
    height: 24.5,
    position: 'absolute',
    left: 10,
    marginBottom: 2,
  },
  searchIcon: {
    width: 40,
    height: 40,
    top: 1.5,
    position: 'absolute',
    left: 42,
  },
  starIcon: {
    width: 40,
    height: 40,
    marginBottom: 4,
  },
  chatIcon: {
    width: 29,
    height: 29,
    position: 'absolute',
    right: 42,
    marginBottom: 0.5,
  },
  userIcon: {
    width: 34,
    height: 34,
    position: 'absolute',
    right: 10,
    marginBottom: 2,
  },

  tutorialOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  tutorialText1: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  tutorialText2: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 20,
  },
  tutorialButton: {
    backgroundColor: 'transparent',
    paddingVertical: 10,
    marginVertical: 10,
  },
  handShake: {
    fontSize: 35,
    marginBottom: 35,
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
    fontSize: 16,
  },
});

export default Tinder;
