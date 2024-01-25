import React, { useState } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';

function UserPhoto({ navigation }) {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleBack = () => {
    setSelectedItem(null);
  };

  const renderContent = () => {
    switch (selectedItem) {
      case 'options':
        return (
          <View style={styles.content}>
            <TouchableOpacity onPress={handleBack} style={styles.backButton}>
              <Ionicons name="arrow-back" style={styles.icon} />
            </TouchableOpacity>
            <View style={styles.cameraContainer}>
              <TouchableOpacity style={styles.cameraButton}>
                <View style={styles.iconContainerCamera}>
                  <Image
                    style={styles.cameraIcon}
                    source={require('../../assets/camera.png')}
                  />
                </View>
                <Text style={styles.textCamera}>Camera</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.galleryButton}
                onPress={() => handleItemClick('gallery')}>
                <View style={styles.iconContainerGallery}>
                  <Image
                    style={styles.galleryIcon}
                    source={require('../../assets/gallery.png')}
                  />
                </View>
                <Text style={styles.galleryText}>Gallery</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      case 'gallery':
        return (
          <View style={styles.content}>
            <TouchableOpacity onPress={handleBack} style={styles.backButton2}>
              <Ionicons name="arrow-back" style={styles.icon} />
            </TouchableOpacity>
            <View style={styles.btnGalleryInside}>
              <TouchableOpacity style={styles.galleryInBtn}>
                <Text>Photos</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.galleryInBtn}>
                <Text style={styles.galleryInText}>Album</Text>
              </TouchableOpacity>
            </View>
            <Text
              style={{
                fontSize: 20,
                marginBottom: 20,
                color: '#808080',
                textAlign: 'center',
              }}>
              Your gallery is empty
            </Text>
          </View>
        );
      default:
        return (
          <View style={styles.container}>
            <Text style={styles.userText}>Add Photos</Text>

            <View style={styles.infoContainer}>
              <Text style={styles.infoText}>
                Add at least 2 photos to continue
              </Text>
            </View>
            <View style={styles.header}>
              <TouchableOpacity
                style={styles.buttonAdd}
                onPress={() => handleItemClick('options')}>
                <View style={styles.xContainer}>
                  <Ionicons name="add-outline" style={styles.iconX} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonAdd}
                onPress={() => handleItemClick('options')}>
                <View style={styles.xContainer}>
                  <Ionicons name="add-outline" style={styles.iconX} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonAdd}
                onPress={() => handleItemClick('options')}>
                <View style={styles.xContainer}>
                  <Ionicons name="add-outline" style={styles.iconX} />
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.header}>
              <TouchableOpacity
                style={styles.buttonAdd}
                onPress={() => handleItemClick('options')}>
                <View style={styles.xContainer}>
                  <Ionicons name="add-outline" style={styles.iconX} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonAdd}
                onPress={() => handleItemClick('options')}>
                <View style={styles.xContainer}>
                  <Ionicons name="add-outline" style={styles.iconX} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonAdd}
                onPress={() => handleItemClick('options')}>
                <View style={styles.xContainer}>
                  <Ionicons name="add-outline" style={styles.iconX} />
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('welcome')}>
                <LinearGradient
                  colors={['#E73D76', '#FF3235']}
                  style={styles.button}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}>
                  <Text style={styles.buttonText}>CONTINUE</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {selectedItem && <View style={styles.container}>{renderContent()}</View>}
      {!selectedItem && renderContent()}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  header: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  userText: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'left',
    position: 'absolute',
    top: 40,
    left: 50,
  },
  infoContainer: {
    position: 'absolute',
    top: 90,
  },
  infoText: {
    color: '#707070',
    fontSize: 14.5,
    fontFamily: 'Gilroy',
    textAlign: 'center',
    width: 230,
    fontWeight: 'bold',
  },
  buttonAdd: {
    borderColor: '#d0d0d0',
    borderWidth: 2,
    width: 90,
    height: 130,
    margin: 5,
    marginRight: 8.5,
    borderRadius: 8,
    backgroundColor: '#e5e7ec',
  },
  xContainer: {
    borderWidth: 1,
    borderColor: '#e67370',
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    position: 'absolute',
    bottom: -10,
    right: -10,
    backgroundColor: '#e67370',
  },
  iconX: {
    fontSize: 20,
    color: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 12,
    right: 120,
    zIndex: 1,
  },
  icon: {
    fontSize: 30,
    color: '#000',
  },
  buttonContainer: {
    position: 'absolute',
    top: 530,
  },
  button: {
    width: 255,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: '#d5d5d5',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15.5,
    fontFamily: 'Gilroy',
  },
  cameraContainer: {
    position: 'absolute',
    top: 60,
  },
  cameraButton: {
    borderBottomWidth: 2,
    borderColor: '#c8c8c8',
    width: 334,
    height: 55,
    justifyContent: 'center',
  },
  cameraIcon: {
    width: 25,
    height: 25,
  },
  iconContainerCamera: {
    backgroundColor: '#d5d5d5',
    height: 45,
    width: 50,
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  textCamera: {
    fontSize: 16,
    position: 'absolute',
    left: 90,
    fontWeight: '400',
  },
  galleryButton: {
    borderBottomWidth: 2,
    borderColor: '#c8c8c8',
    width: 334,
    height: 55,
    justifyContent: 'center',
  },
  galleryIcon: {
    width: 45,
    height: 45,
  },
  iconContainerGallery: {
    backgroundColor: '#d5d5d5',
    height: 45,
    width: 50,
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  galleryText: {
    fontSize: 16,
    position: 'absolute',
    left: 90,
    fontWeight: '400',
  },
  backButton2: {
    position: 'absolute',
    top: 12,
    right: 196,
    zIndex: 1,
  },
  btnGalleryInside: {
    position: 'absolute',
    top: 20,
    flexDirection: 'row',
  },
  galleryInBtn: {
    width: 60,
    height: 20,
    borderColor: '#000',
    borderWidth: 1,
    marginHorizontal: 5,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  galleryInText: {
    fontWeight: '400',
  },
});

export default UserPhoto;
