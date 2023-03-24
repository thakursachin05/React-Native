import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, Linking, RefreshControl, ScrollView, SectionList, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState, useSyncExternalStore } from 'react';

export default function App() {
    const [name,setName] = useState('');


  return (
    <View style={styles.body}>
      <Text style={styles.text}>
        Please write your name :
      </Text>
      <TextInput 
        multiline
        style={styles.input}
        placeholder= 'e.g. Jai Shree Ram'
        onChangeText={(value)=>setName(value)}  
        // keyboardType='numeric'
        // maxLength = {2}
        // editable={false}
        // secureTextEntry
      />
      <Text style={styles.text}>
        Your Name is : {name}
      </Text>
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
  input: {
    width:200,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 20,
  }

});



// Practice the ideal questions for this and then conintue ahead