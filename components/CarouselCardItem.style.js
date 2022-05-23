
import {  StyleSheet, Dimensions } from "react-native"

import  Constants from "../config/constants"

export default StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 8,
        width: Constants.ITEM_WIDTH,
        marginTop: 70,
    
      },
      image: {
        width: Constants.ITEM_WIDTH,
        height: "71%",
        marginTop: 50,
        borderRadius: 10
      },
      header: {
        color: "#222",
        fontSize: 28,
        fontFamily: 'notoserif',
        fontWeight: "bold",
        paddingTop: 20,
        textAlign:'center',
      },
      body: {
        color: "#222",
        fontSize: 15,
        paddingTop: 20,
        fontFamily: 'serif',
        textAlign:'center',
      },
      textcon:{
        width:'100%',
        alignItems:'center',
      },
      titlebody:{
        width:"80%"
      }
})