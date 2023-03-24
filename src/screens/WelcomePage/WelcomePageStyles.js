import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
  signature_text:{
      textAlign:"center",
      // letterSpacing:1,
      textAlign:'left',
    },
    signature_name:{
      fontSize:16,
      // letterSpacing:1,
        textAlign:'left',
        fontWeight:"bold",
      },
      signature_container:{
        position:"absolute",
        bottom:10,
        left:16,
        justifyContent: "center",
      },
      container: {
        flex: 1,
        flexDirection: "column",
        paddingBottom:100
      },
      img_container: {
        flex: 1,
        flexDirection: "column",
        // paddingBottom:100
      },
      image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      },
      text: {
        color: "white",
        fontSize: 42,
        fontWeight: "bold",
        textAlign: "center",
        
      },

      button_container:{
        // flex:1,
        flexDirection: "row",
          position: 'absolute',
          bottom: 8,
          width:'100%',
          // margin:16,
          justifyContent: 'space-between' 
      },
    
});