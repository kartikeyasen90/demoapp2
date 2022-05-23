
import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

import styles from "./Buttons.style"

export default function Buttons ({ onPress, title, obj }) {
    return (
    <TouchableOpacity onPress={onPress} style={[styles.appButtonContainer,
    {
        backgroundColor:obj.bgcolor,
        borderBottomRightRadius: obj.bottomrightradius,
        borderTopRightRadius: obj.toprightradius,
        borderBottomLeftRadius: obj.bottomleftradius,
        borderTopLeftRadius: obj.topleftradius,
        width: obj.width,
        marginVertical:obj.marginVertical
      }]}
    >
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );
    }

 