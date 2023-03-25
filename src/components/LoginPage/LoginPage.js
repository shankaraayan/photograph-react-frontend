import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { Styles } from './LoginPageStyle'

export default function LoginPage() {
  return (
    <View>
      <TextInput
       style={Styles.email_input}
       placeholder='Email'
       selectionColor="black"
      />
    
      <TextInput
      style={Styles.password_input}
      placeholder='Password'
      secureTextEntry={true}
      selectionColor="black"
      />
      <TouchableOpacity
          style={{ backgroundColor: 'black', width: '100%', height: 50, justifyContent: 'center', alignItems: 'center',marginTop:20 }}
          onPress={() => console.log('login-page-selected')}
        >
          <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Log in</Text>
        </TouchableOpacity>
    </View>
  )
}