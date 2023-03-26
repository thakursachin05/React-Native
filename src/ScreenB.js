import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
} from 'react-native';

export default function ScreenB({ navigation , route}){
  const {ItemName, ItemId} = route.params;
    const onPressHandler = () => {
      navigation.navigate('Screen_A',{ message : 'Message from screen B'});
      // navigation.setParams({ItemId: 14});
      // navigation.goBack();
    }
    return(
      <View style={styles.body}>
        <Text style={styles.text}>
          Screen B
        </Text>
  
        <Pressable
          onPress={onPressHandler}
          style={({pressed}) => ({ backgroundColor: pressed ? '#ddd' : '#00ff00'})}
        >
          <Text style={styles.text}>
            {ItemName}
          </Text>
          <Text style={styles.text}>
            Id: {ItemId}
          </Text>
        </Pressable>
      </View>
    )
  }


  const styles = StyleSheet.create({
    body:{
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 40,
      fontWeight: 'bold',
      margin: 10,
    }
  })