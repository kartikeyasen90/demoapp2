import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Button from '../components/Introbutton';
import CarouselCards from '../components/CarouselCards';
import styles from "./Intro.style"


const signinbutton = {
  bgcolor: 'black',
  color: 'white',
  topleftradius: 10,
  bottomleftradius: 10,
  toprightradius: 0,
  bottomrightradius: 0,
}

const regbutton = {
  bgcolor: 'grey',
  color: 'white',
  topleftradius: 0,
  bottomleftradius: 0,
  toprightradius: 10,
  bottomrightradius: 10,
}

export default function Intro({ navigation }) {
  return (
    <View style={styles.container}>
      <CarouselCards />
      <View style={styles.buttoncontainer}>
        <View>
          <Button title='Sign in' onPress={() => navigation.navigate('Login')} obj={signinbutton} />
        </View>
        <View>
          <Button title='Register' onPress={() => navigation.navigate('Register')} obj={regbutton} />
        </View>
      </View>
    </View>
  )

}
