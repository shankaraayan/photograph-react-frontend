import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { Styles } from './Styles'

export default function Usernameinput() {

  return (
    <View>
     <TextInput
       style={Styles.username_input}
       placeholder='Username'
      />
      <TouchableOpacity
          style={{ backgroundColor: 'black', width: '100%', height: 50, justifyContent: 'center', alignItems: 'center',marginTop:20 }}
          onPress={() => console.log('signup-submited')}
        >
          <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Submit</Text>
        </TouchableOpacity>
    </View>
  )
}