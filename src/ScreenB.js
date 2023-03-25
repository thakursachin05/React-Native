import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
} from 'react-native';

export default function ScreenB({ navigation }){
    const onPressHandler = () => {
      navigation.navigate('Screen_A');
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
            Go to screen A
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