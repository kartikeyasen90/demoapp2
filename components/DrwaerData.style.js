import { StyleSheet } from "react-native";

const colored = '#ffffff';
const s2 = 18;

export default StyleSheet.create({
    drawerContainer: {
        flex: 1,
      },
      drawerSection: {
        marginTop: 45,
        paddingBottom: 35,
        borderBottomColor: colored,
    
        borderBottomWidth: 1
      },
      bottomDrawer: {
        flex: 0.6,
      },
      drawertexts:{
          color:colored,
          fontSize:s2
      }
})