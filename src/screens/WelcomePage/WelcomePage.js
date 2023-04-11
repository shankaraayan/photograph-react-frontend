import { View, Text, Image, ImageBackground, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { Styles } from './WelcomePageStyles'
import { useNavigation } from '@react-navigation/core'



export default function WelcomePage() {
  const navigation = useNavigation();
  return (
    <View style={Styles.container}
    >
      <View style={Styles.img_container}>
        
          <ImageBackground 
            source={require('../../../assets/WelcomeBG.png')}
            style={Styles.image}>
            <Text style={Styles.text}>NearBy</Text>
            
            <View style={Styles.signature_container}>
                <Text style={Styles.signature_name}>Kartik Maandothiya</Text>
                <Text style={Styles.signature_text}>@KartikMaandothiya</Text>
            </View>
            
          </ImageBackground>
        </View>
                <View style={Styles.button_container}>

                <TouchableOpacity style={{ flex: 1, 
                  justifyContent:'center',
                  alignItems:'center',
                  marginLeft:16,
                  marginTop:16,
                  marginRight:8, 
                  marginBottom:16, 
                  padding: 16,
                  borderColor: 'black',
                  borderWidth:2, }}
                  onPress={()=> navigation.navigate("LoginForm")}
                  >
                    <Text>Log in</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1, 
                  justifyContent:'center',
                  alignItems:'center',
                  marginLeft:8,
                  marginTop:16,
                  marginRight:16, 
                  marginBottom:16, 
                  padding: 16,
                  backgroundColor:'black',
                  borderColor: 'black',
                  borderWidth:2, 
                  }}
                  onPress={()=> navigation.navigate("SignupPage")}
                  >
                  <Text style={{color: "white",}}>Sign up</Text>
                </TouchableOpacity>

            </View>
    </View>
  )
}