import { StatusBar } from 'expo-status-bar';
import { Button, Linking, StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const [name, setName ] = useState('Ram');
  const [session, setSession] = useState({number:6,title: 'state'});
  const [current, setCurrent] = useState(true);
  const onClickHandler = () => {
    if(name == 'Ram')
      setName('Jai Shree ram');
    else {
      setName('Ram');
    }
    setSession({number : session.number+1, title: 'style'});
    setCurrent(false);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>This {session.title} and number is {session.number} </Text>
      <Text style={styles.text}>{current ? 'current-session' : 'next-session'}</Text>
      <View style={styles.button}>
        <Button title='Update State' onPress={onClickHandler}></Button>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 10,
    borderColor: '#493fff',
    borderRadius: 10,
  },
  text: {
    color: '#ffffff',
    fontSize: 25,
    fontStyle: 'italic',
    margin: 10,
    textTransform: 'uppercase',
  },
  button: {
    width: 200,
    height: 60,
  }
});
