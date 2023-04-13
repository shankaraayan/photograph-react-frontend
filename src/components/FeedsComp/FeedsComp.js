import { View, Text, StyleSheet,Image } from 'react-native'
import React from 'react'
import SettingDot from './Items/SettingDots'
import LikeCount from './Items/LikeCount'

export default function FeedsComp() {
  return (
    <View style={Styles.postBox}>
      
        <View style={{ width: '100%', height: 400 }}>
          <View style={Styles.profileBox}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80' }}
              style={Styles.profileImg}
              resizeMode="cover"
            />
            <View style={Styles.textContainer}>
              <Text style={Styles.name}>KartikMaandothiya</Text>
              <Text style={Styles.location}>New Delhi, India</Text>
            </View>
            <SettingDot/>
          </View>

          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80' }}
            style={Styles.image}
            resizeMode="cover"
          />
          <Text style={Styles.postContent}>Dummy Text Content would be Here like Tags or #tags #SocialMedia #facebook #Photo o the day. <Text style={Styles.blueHighlight}>Read...</Text> </Text>
          <View style={{ marginTop: 16 }}>
              <LikeCount/>
          </View>

        </View>
    </View>
  )
}



const Styles = StyleSheet.create({
    page_layout:{
        marginTop:10,width:'100%',padding:16
      },

      system_text:{
        marginTop:16,
      },
      system_page_heading:{
        color: 'black', 
        fontSize: 24, 
        fontWeight: 'bold',
        marginBottom:20,
        marginTop:20,
      },

      image: {
        width: '100%',
        height: '100%',
        borderRadius:5
      },
      profileBox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
      },
      profileImg: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
      },
      textContainer: {
        flex: 1,
      },
      name: {
        fontWeight: '600',
      },
      location: {
        color: '#999',
      },
      postBox:{
        display:'flex',
        minHeight: 600
      },

      postContent:{
        color:'#656d76',
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:10,
        paddingRight:10,
      },
      blueHighlight:{
        color:'#0969da',
      }
  });
  