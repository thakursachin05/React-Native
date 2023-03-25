import React from "react";
import {
    Pressable,
    Text,
    StyleSheet
} from 'react-native';

const CustomButton = (props) => {
    return(
        <Pressable
        onPress={props.onPressFunction}
        // onLongPress={onPressHandler}
        // delayLongPress = {2000}
        // hitSlop={{top: 10, bottom: 10, right: 10, left: 10}}
        // disabled={submitted}
        // android_ripple={{color: '#00f'}}
        style={({ pressed }) => [
          { backgroundColor: pressed ? '#ddfdff' : props.color },
          styles.Button,
          {...props.style}
        ]}
      >
        <Text style={styles.text}>
            { props.title }
        </Text>
      </Pressable>
    );
}

const styles = StyleSheet.create({
    text: {
        color: '#000',
        fontSize: 20,
        margin: 10,
        textAlign: 'center'
      },
      Button: {
        width: 150,
        height: 50,
        // backgroundColor: '#00ff00',
        alignItems: 'center',
      },
})

export default CustomButton;

