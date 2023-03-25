import { StatusBar } from 'expo-status-bar';
import { Alert, Button, Modal, FlatList, Linking, Pressable, RefreshControl, ScrollView, SectionList, StyleSheet, Text, TextInput, ToastAndroid, Touchable, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import React, { useState, useSyncExternalStore } from 'react';

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
    <View style={styles.body}>
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

      <Pressable
        onPress={onPressHandler}
        // onLongPress={onPressHandler}
        // delayLongPress = {2000}
        // hitSlop={{top: 10, bottom: 10, right: 10, left: 10}}
        // disabled={submitted}
        // android_ripple={{color: '#00f'}}
        style={({ pressed }) => [
          { backgroundColor: pressed ? '#ddfdff' : '#00ff00' },
          styles.Button
        ]}
      >
        <Text style={styles.text}>
          {submitted ? 'Clear' : 'Submit'}
        </Text>
      </Pressable>


      {submitted ?
        <Text style={styles.text}>
          You are registered {name}
        </Text>
        :
        null
      }
    </View>

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
  }

});



// Practice the ideal questions for this and then conintue ahead