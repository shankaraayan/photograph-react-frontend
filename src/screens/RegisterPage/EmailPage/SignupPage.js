import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Signup from '../../../components/SignupForm/EmailInput/Signup'
import { Styles } from './Styles'
import Icon from 'react-native-vector-icons/AntDesign';

export default function SignupPage({ navigation }) {

  return (
    <View style={Styles.page_layout}>
        <TouchableOpacity
            onPress={()=>navigation.goBack()}
          >
          <Icon name="back" size={25} color="#000" />
          </TouchableOpacity>

    <Text style={Styles.system_page_heading}>Register</Text>
      <Signup/>
    </View>
  )
}