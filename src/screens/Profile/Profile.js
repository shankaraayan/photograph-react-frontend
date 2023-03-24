import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Styles } from './ProfileStyles'
import Post from '../../components/ProfilePage/Post'

export default function Profile() {
  return (
    <View style={Styles.container}>
        <View>
            <Image source={require('../../../assets/profile.png')}
        />
        </View>
      <Text style={Styles.profile_name}>Kartik Maandothiya</Text>
      <Text style={Styles.location}>@kartikmaandothiya</Text>

        <TouchableOpacity
          style={{ backgroundColor: 'black', width: '100%', height: 50, justifyContent: 'center', alignItems: 'center',marginTop:20 }}
          onPress={() => console.log('follow')}
        >
          <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' ,}}>Follow</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={{ backgroundColor: 'white', borderWidth:2,borderRadius:0, width: '100%', height: 50, justifyContent: 'center', alignItems: 'center',marginTop:20 }}
          onPress={() => console.log('message')}
        >
          <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold' ,}}>Send Message</Text>
        </TouchableOpacity>

        <Post/>

    </View>
  )
}