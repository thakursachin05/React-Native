import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
} from 'react-native';

import ScreenA from "./ScreenA";
import ScreenB from "./ScreenB";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Drawer = createDrawerNavigator();


function App() {
 return (
  <NavigationContainer>
  <Drawer.Navigator initialRouteName="Screen_A" drawerPosition = 'right' drawerType="front" 
  edgeWidth={500}
  hideStatusBar = {false}
  overlayColor = '#00000090'
  drawerStyle = {{
    backgroundColor: '#e6e6e6',
    width:250
  }}
  screenOptions={{
    headerShown: true,
    swipeEnabled: false,
    gestureEnabled: true,
    headerTitleAlign: 'center',
    headerStyle:{
      backgroundColor: '#0080ff'
    },
    headerTintColor: '#ffffff',
    headerTitleStyle:{
      fontSize:25,
      fontWeight: 'bold'
    }
  }}
  >
    <Drawer.Screen name="Screen_A" component={ScreenA} 
    options={{ 
      title: 'Screen_A Title',
      drawerIcon: ({ focused }) => (
        <FontAwesome5
        name="autoprefixer"
        size={focused ? 25 : 20}
        color= { focused ? '#0080ff' : '#999999' }
        />
      )
      
      }}/>
    <Drawer.Screen name="Screen_B" component={ScreenB} 
    options={{ 
      title: 'Screen_B Title',
      drawerIcon: ({ focused }) => (
        <FontAwesome5
        name="btc"
        size={focused ? 25 : 20}
        color= { focused ? '#0080ff' : '#999999' }
        />
      )
      
      }}/>
  </Drawer.Navigator>
</NavigationContainer>
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

export default App;