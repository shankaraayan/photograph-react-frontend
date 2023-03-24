import { View, Text } from 'react-native'
import React from 'react'
import { Styles } from './Styles'
import Usernameinput from '../../../components/SignupForm/UsernameInput/Usernameinput'

export default function UsernamePage() {

  return (
    <View style={{marginTop:50,width:'100%',padding:16}}>
      <Text style={Styles.register_text}>Register</Text>
      <Usernameinput/>
    </View>
  )
}