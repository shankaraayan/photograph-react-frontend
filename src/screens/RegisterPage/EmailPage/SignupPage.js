import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Signup from '../../../components/SignupForm/EmailInput/Signup'
import { Styles } from './Styles'

export default function SignupPage({ navigation }) {

  return (
    <View style={Styles.page_layout}>
    <Text style={Styles.system_page_heading}>Register</Text>
      <Signup/>
    </View>
  )
}