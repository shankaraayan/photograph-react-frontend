import { View, Text,StyleSheet  } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function Feeds() {
    const navigation = useNavigation;
  return (
    <View style={Styles.page_layout}>
      <Text>Feeds</Text>
    </View>
  )
}

const Styles = StyleSheet.create({
    page_layout:{
        marginTop:50,width:'100%',padding:16
      },

      system_text:{
        marginTop:16,
      },
      system_page_heading:{
        color: 'black', 
        fontSize: 24, 
        fontWeight: 'bold',
        marginBottom:20,
        marginTop:20,
      },
    
  });
  