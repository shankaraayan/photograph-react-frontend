import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Styles } from './Styles'
import Usernameinput from '../../../components/SignupForm/UsernameInput/Usernameinput'

export default function UsernamePage() {

  const goBack = () => {
    navigation.navigate('Usernamepage');
  };

  return (
    <View style={Styles.page_layout}>

      
      <TouchableOpacity onPress={goBack}>
        <Text style={{ color: 'black',  }}>
          Go Back
        </Text>
      </TouchableOpacity>

      <Text style={Styles.system_page_heading}>Register</Text>
      <Usernameinput/>
      <Text style={Styles.system_text}>By signing up, you agree to Photo’s Terms of Service and Privacy Policy.</Text>
    </View>
  )
}