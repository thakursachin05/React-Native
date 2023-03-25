import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
} from 'react-native';

export default function ScreenA({ navigation }){
    const onPressHandler = () => {
    //   navigation.navigate('Screen_B');
    navigation.toggleDrawer();
      // navigation.replace('Screen_B');
    }
    return(
      <View style={styles.body}>
        <Text style={styles.text}>
          Screen A
        </Text>
        <Pressable
          onPress={onPressHandler}
          style={({pressed}) => ({ backgroundColor: pressed ? '#ddd' : '#00ff00'})}
        >
          <Text style={styles.text}>
                Toggle Drawer
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