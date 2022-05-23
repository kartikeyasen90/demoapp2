import { StyleSheet } from "react-native";

export default StyleSheet.create({
    inputcontainer: {
        width: "90%",
        height: 50,
        marginVertical: 7,
       alignSelf:'center',
      },
      input: {
        paddingLeft: 10,
        height: 50,
        borderWidth: 1,
        borderColor: "grey",
        borderRadius: 5
      },
      errortext:{ 
          color: "red", 
          fontSize: 13, 
          marginTop: 3 }
})