import { StatusBar } from 'expo-status-bar';
import { Alert, Button, FlatList, Linking, Pressable, RefreshControl, ScrollView, SectionList, StyleSheet, Text, TextInput, ToastAndroid, Touchable, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import React, { useState, useSyncExternalStore } from 'react';

export default function App() {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const onPressHandler = () => {
    if (name.length > 3) {
      setSubmitted(!submitted);
    }
    else {
      // on ios we can have any number of button 
      // on andriod we can only have 3 text
      // Alert.alert('Warning', "The name must be longer than 3 characters", [
      //   { text: 'Do not show again', onPress: () => console.warn('Do not show Pressed!') },
      //   { text: 'Cancel', onPress: () => console.warn('Cancel Pressed!') },
      //   { text: 'OK', onPress: () => console.warn('Ok Pressed!') },
      // ], { cancelable: true, onDismiss: () => console.warn('Alert Dismissed!') })
      // ToastAndroid.show('The name must be longer than 3 characters',
      //   ToastAndroid.LONG
      // )
      // ToastAndroid.showWithGravity('The name must be longer than 3 characters',
      //   ToastAndroid.LONG,
      //   ToastAndroid.CENTER
      // )
      ToastAndroid.showWithGravityAndOffset('The name must be longer than 3 characters',
      ToastAndroid.LONG,
      ToastAndroid.TOP,
      0, // from top
      0 // from left
    )
    }
  }

  return (
    <View style={styles.body}>
      <Text style={styles.text}>
        Please write your name :
      </Text>
      <TextInput
        multiline
        style={styles.input}
        placeholder='e.g. Jai Shree Ram'
        onChangeText={(value) => setName(value)}
      />

      {/* <Button 
      title={submitted ? 'Clear' : 'Submit'}
      onPress={onPressHandler}
      disabled={submitted}
      color= '#00f'
      /> */}
      {/* 
      <TouchableOpacity
        onPress={onPressHandler}
        style = {styles.Button}
        activeOpacity={0.2}
      >
        <Text style={styles.text}>
          {submitted ? 'Clear' : 'Submit'}
        </Text>
      </TouchableOpacity> */}

      {/* The only difference between touchable highlight or opactiy is support color change while touching */}

      {/* <TouchableHighlight
        onPress={onPressHandler}
        style = {styles.Button}
        activeOpacity={0.2}
        underlayColor='#dddddd'
      >
        <Text style={styles.text}>
          {submitted ? 'Clear' : 'Submit'}
        </Text>
      </TouchableHighlight> */}

      {/* <TouchableWithoutFeedback
        onPress={onPressHandler}
        activeOpacity={0.2}
        underlayColor='#dddddd'
      > 
        <View  style = {styles.Button}>
          <Text style={styles.text}>
            {submitted ? 'Clear' : 'Submit'}
          </Text>
        </View>
      </TouchableWithoutFeedback> */}


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
    fontStyle: 'italic',
    margin: 10,
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
  }

});



// Practice the ideal questions for this and then conintue ahead