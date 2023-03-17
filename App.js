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
      <View style={styles.view1}>
        <Text style={styles.text}>1</Text>
      </View>
      <View style={styles.view2}>
        <Text style={styles.text}>2</Text>
      </View>
      <View style={styles.view3}>
        <Text style={styles.text}>3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'column',
    backgroundColor: '#f000ff',
    alignItems: 'stretch',   // align items always workd in cross axis to the flex direction provided 
    justifyContent: 'center',
  },
  view1: {
    // width: 100,
    // height: 100,
    flex: 2,  // flex 1 ka mtlab saara free space acquire krlo expect the sapce to the elements which are there
    backgroundColor: '#00ffff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  view2: {
    // width: 100,
    // height: 100,
    flex:2,
    backgroundColor: '#00ff00',
    alignItems: 'center',
    justifyContent: 'center'
  },
  view3: {
    // width: 100,
    // height: 100,
    flex:2,
    backgroundColor: '#1100ff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#ffffff',
    fontSize: 25,
    fontStyle: 'italic',
    margin: 10,
    textTransform: 'uppercase',
  },

});
