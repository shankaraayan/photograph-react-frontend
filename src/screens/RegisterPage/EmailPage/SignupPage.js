import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Signup from '../../../components/SignupForm/EmailInput/Signup'
import { Styles } from './Styles'

export default function SignupPage({ navigation }) {

  return (
    <View style={{marginTop:50,width:'100%',padding:16}}>
    <Text style={Styles.register_text}>Register</Text>
      <Signup/>
    </View>
  )
}