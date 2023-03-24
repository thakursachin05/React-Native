import { StatusBar } from 'expo-status-bar';
import { Button, Linking, RefreshControl, ScrollViewBase, StyleSheet, Text, View } from 'react-native';
import React, {useState, useSyncExternalStore} from 'react';

export default function App() {
    const [Items, setItems] = useState([
      {key:1,item: 'Item 1'},
      {key:2,item: 'Item 2'},
      {key:3,item: 'Item 3'},
      {key:4,item: 'Item 4'},
      {key:5,item: 'Item 5'},
      {key:6,item: 'Item 6'},
      {key:7,item: 'Item 7'},
      {key:8,item: 'Item 8'}
    ]);
    const [Refreshing , setRefreshing] = useState(false);
    const onRefresh = () => {
      setRefreshing(true);
      setItems([...Items , {key:69, item:"Item 69"}]);
      setRefreshing(false);
    }
  return (
    // <View style={styles.container}>
      <ScrollView style={styles.container} refreshContro={
        <RefreshControl refreshing = {Refreshing} onRefresh = {onRefresh} color={['#ff00ff']}/>
      }>
      {
        Items.map((object) => {
          return(
            <View style={styles.item} key={object.key}>
              <Text style={styles.text}>{object.item}</Text>
            </View>
          )
        })
      }
      </ScrollView>
    // </View>
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
  item : {
    margin: 30,
    backgroundColor: '#4ae1fa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#ffffff',
    fontSize: 25,
    fontStyle: 'italic',
    margin: 10,
    textTransform: 'uppercase',
  },

});
