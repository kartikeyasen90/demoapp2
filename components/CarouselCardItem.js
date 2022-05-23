import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from "react-native"

import styles from "./CarouselCardItem.style"

const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={styles.container} key={index}>

      <Image
        source={{ uri: item.imgUrl }}
        style={styles.image}
      />
      <View style={styles.textcon}>
     
        <View style={styles.titlebody}>
          <Text style={styles.header}>{item.title}</Text>
        </View>
        <View style={styles.titlebody}>
          <Text style={styles.body}>{item.body}</Text>
        </View>
      
      </View>

    </View>
  )
}


export default CarouselCardItem