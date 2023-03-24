import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { Styles } from './Styles'

export default function Signup() {
  return (
    <View>
      <TextInput
       style={Styles.email_input}
       placeholder='Email'
       selectionColor="transparent"
      />
    
      <TextInput
      style={Styles.password_input}
      placeholder='Password'
      secureTextEntry={true}
      selectionColor="transparent"
      />
      <TouchableOpacity
          style={{ backgroundColor: 'black', width: '100%', height: 50, justifyContent: 'center', alignItems: 'center',marginTop:20 }}
          onPress={() => console.log('signup-submited')}
        >
          <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Next</Text>
        </TouchableOpacity>
    </View>
  )
}