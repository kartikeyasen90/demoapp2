import React from 'react';
import { TextInput, View, StyleSheet, Text } from 'react-native';

import styles from "./TextInput.style"

const Input = ({ placeholder, value, onChangeText, console, error, secureTextEntry }) => {
  return (
    <View style={styles.inputcontainer}>
      <TextInput value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry}
      />
      <Text style={styles.errortext}>{error}</Text>
    </View>
  )

}


export default Input
