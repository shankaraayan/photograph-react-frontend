import { View, Text,StyleSheet, Image  } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Icon  from 'react-native-vector-icons/AntDesign';

export default function Feeds() {
    const navigation = useNavigation;
  return (
    <View style={Styles.page_layout}>
      <Text style={Styles.system_page_heading}>Discover</Text>

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
        </View>
      <Image
        source={{ uri: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80' }}
        style={Styles.image}
        resizeMode="cover"
      />
        <View style={{ marginTop: 10 }}>
            <View style={Styles.profileBox}>
                <Icon name="heart" size={20} color="red" style={{ marginRight: 5 }} /> 
                <Text style={{ lineHeight: 20 }}>Likes</Text>
            </View>
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
        height: '100%'
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
    
  });
  