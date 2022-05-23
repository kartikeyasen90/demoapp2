import { StyleSheet } from "react-native";
import Constants from '../config/constants';

const h=Constants.h;
const w=Constants.w;

export default StyleSheet.create({
    maincontainer: {
      flex: 1,
       padding: 10,
       backgroundColor:"white"
    },
    title: {
      textAlign: 'center',
      fontSize: 25,
      fontWeight: 'bold',
      marginBottom: 10,
      marginTop: 70,
    },
    description: {
      textAlign: 'center',
      fontSize: 12,
      color: 'grey',
      marginBottom: 20,
  
      marginTop: 10,
    },
    logintext: {
      fontWeight: 'bold',
      fontSize: 15,
    },
    loginbutton: {
      alignItems:"flex-end"
    },
    logincon: {
      marginRight:20,
      marginTop:10,
    },
    textcon: {
      fontSize: 15,
      color: 'grey',
      
    },
    logintext: {
      fontWeight: 'bold',
      fontSize: 15,
    },
    signupcon: {
      marginBottom:250
    },
    Regtext: {
      fontWeight: 'bold',
      fontSize: 15,
      
      // marginLeft:80,
      
    },
    Regcon:{
      color:"grey"
    },
    socialLogin:
      {
        flexDirection: 'column',
        alignItems:"center",
        marginVertical:15
      },
    Register:{
          flexDirection: 'row',
          justifyContent:"center",
          marginVertical:20 
      },
      
})