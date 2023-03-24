import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, Linking, RefreshControl, ScrollView, SectionList, StyleSheet, Text, View } from 'react-native';
import React, { useState, useSyncExternalStore } from 'react';

export default function App() {
  const [Items, setItems] = useState([
    { name: 'Item 1' },
    { name: 'Item 2' },
    { name: 'Item 3' },
    { name: 'Item 4' },
    { name: 'Item 5' },
    { name: 'Item 6' },
    { name: 'Item 7' },
    { name: 'Item 8' }
  ]);
  const [Refreshing, setRefreshing] = useState(false);
  
  const onRefresh = () => {
    setRefreshing(true);
    setItems([...Items, { key: 69, item: "Item 69" }]);
    setRefreshing(false);
  }

  const [DATA,setDATA] = useState([
    {
      title: 'Title 1',
      data: ['Item 1-1','Item 1-2', 'Item 1-3']
    },
    {
      title: 'Title 2',
      data: ['Item 2-1','Item 2-2', 'Item 2-3']
    },
    {
      title: 'Title 3',
      data: ['Item 3-1','Item 3-3']
    },
    {
      title: 'Title 4',
      data: ['Item 4-1']
    }
  ]);
  let count = parseInt(DATA.length);
  const onPress = () => {
    setDATA([...DATA,{title: 'Jai Shree Ram ' + String(count),data: ['Jai Shree Ram' + String(count)]}])
  }
  
  return (
    // <FlatList
    //   // horizontal
    //   // inverted
    //   //  numColumns={4}   
    //   data={Items}
    //   keyExtractor={(item, index) => index.toString()}
    //   renderItem={({ item }) => (
    //     <View style={styles.item}>
    //       <Text style={styles.text}>{item.name}</Text>
    //     </View>
    //   )} 
      
    //     refreshControl={
    //       <RefreshControl
    //         refreshing={Refreshing}
    //         onRefresh={onRefresh}
    //         colors={['#ff00ff']}
    //       />
    //     }
    //   />
    <View style={styles.container}>

      <SectionList 
        keyExtractor={(item, index) => index.toString()}
        sections={DATA}
        renderItem = {({item})=>(
          // <View style={styles.item}>
          <Text style={styles.text}>{item}</Text>
          //  </View>
          )}
          renderSectionHeader = {({section})=>(
            <View style={styles.item}>
              <Text style={styles.text}>{section.title}</Text>
          </View>
        )}
        
        />
        <Button
          title='Add New'
          onPress={onPress}

        />
        </View> 

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f000ff',
    alignItems: 'stretch',   // align items always workd in cross axis to the flex direction provided 
    justifyContent: 'center',
  },
  item: {
    margin: 30,
    backgroundColor: '#4ae1fa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000',
    fontSize: 25,
    fontStyle: 'italic',
    margin: 10,
    textTransform: 'uppercase',
  },

});



// Practice the ideal questions for this and then conintue ahead