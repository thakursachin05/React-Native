import { StatusBar } from 'expo-status-bar';
import { Alert, Button, Image, ImageBackground, Modal, FlatList, Linking, Pressable, RefreshControl, ScrollView, SectionList, StyleSheet, Text, TextInput, ToastAndroid, Touchable, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import React, { useState, useSyncExternalStore } from 'react';
import CustomButton from './CustomButtons';
import Header from './Header';

export default function App() {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const onPressHandler = () => {
    if (name.length > 3) {
      setSubmitted(!submitted);
    }
    else {
      setShowWarning(true);
    }
  }

  return (
    <ImageBackground 
      style={styles.body}
      source={{uri: 'https://cdn.pixabay.com/photo/2023/03/14/12/41/wheat-7852286_1280.jpg'}}
      >
        <Header />
      <Modal
      visible={showWarning}
      onRequestClose={() => {
        setShowWarning(false)
      }}
      transparent
      animationType='slide'
      hardwareAccelerated
      >
        <View style={styles.centered_view}>
          <View style={styles.warning_modal}>
            <View style={styles.warning_title}>
              <Text style={styles.text}>WARNING!</Text>
            </View>
            <View style={styles.warning_body}>
              <Text style={styles.text}>The name must be longer than 3 characters</Text>
            </View>
            <Pressable
              onPress={()=> setShowWarning(false)}
              style={styles.warning_button}
              android_ripple={{color: '#fff'}}
            >
              <Text style={styles.text}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Text style={styles.text}>
        Please write your name :
      </Text>
      <TextInput
        multiline
        style={styles.input}
        placeholder='e.g. Jai Shree Ram'
        onChangeText={(value) => setName(value)}
      />
      <CustomButton 
       onPressFunction={onPressHandler}
       title={submitted? 'Clear' : 'Submit'}
       color={'#00ff00'}
      />
       <CustomButton 
       onPressFunction={onPressHandler}
       title={'Test'}
       color={'#0ff'}
       style={{margin:10}}
      />
      {submitted ?
      <View style={styles.body}>
        <Text style={styles.text}>
          You are registered {name}
        </Text>
        <Image 
          style={styles.image}
          source={require('../assets/done.png')} 
          resizeMode='stretch'
          />
      </View>
        :
        <Image 
          style={styles.image}
          // source={require('./assets/error.png')} 
          source={{ uri:'https://cdn.pixabay.com/photo/2018/01/04/15/51/404-error-3060993__480.png' }}
          resizeMode='stretch'
          // blurRadius={5}
          />
      }


    </ImageBackground>

  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center'
  },
  text: {
    color: '#000',
    fontSize: 20,
    margin: 10,
    textAlign: 'center'
  },
  Button: {
    width: 150,
    height: 50,
    // backgroundColor: '#00ff00',
    alignItems: 'center',
  },
  input: {
    width: 200,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 10,
  },
  warning_modal: {
    width: 300,
    height: 300,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 20,
  },
  centered_view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099'
  },
  warning_title: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff0',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  warning_body: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center'
  },
  warning_button: {
    backgroundColor: '#00ffff',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    margin: 0,
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
  }

});



// Practice the ideal questions for this and then conintue ahead