import { View, Text,ScrollView, StyleSheet, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
import IconFont from 'react-native-vector-icons/FontAwesome';

export default function PostDetail() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={Styles.PostBoxImg}>
          <Image style={Styles.PostImg}
          source={{ uri: 'https://images.unsplash.com/photo-1471879832106-c7ab9e0cee23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80' }}
          resizeMode="cover"
          ></Image>
        </View>
        
        <View style={Styles.PageLayout}>

          <View>
                <View style={Styles.profileBox}>
                    <Image
                      source={{ uri: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80' }}
                      style={Styles.profileImg}
                      resizeMode="cover"
                    />
                    <View style={Styles.textContainer}>
                      <Text style={Styles.name}>KartikMaandothiya</Text>
                      <Text style={Styles.location}>52 minutes ago</Text>
                    </View>
                    <IconFont name="heart-o" size={20} color="black" style={{ marginLeft: 5 }} /> 
                </View>

                <Text style={Styles.postContent}>
                  Download the perfect comments pictures. Find over 58 
                  of the best free comments images. Free for commercial 
                  use No attribution required Copyright-free.
                  Download the perfect comments pictures. Find over 58 
                  of the best free comments images. Free for commercial 
                  use No attribution required Copyright-free
                </Text>
          </View>

          <View>
                <View style={Styles.profileBox}>
                    <Image
                      source={{ uri: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80' }}
                      style={Styles.profileImg}
                      resizeMode="cover"
                    />
                    <View style={Styles.textContainer}>
                      <Text style={Styles.name}>AnujNarang</Text>
                      <Text style={Styles.location}>25 minutes ago</Text>
                    </View>
                    <Icon name="heart" size={20} color="black" style={{ marginLeft: 5 }} /> 
                </View>

                <Text style={Styles.postContent}>
                  Download the perfect comments pictures. Find over 58 
                  of the best free comments images. Free for commercial 
                  use No attribution required Copyright-free.
                  Download the perfect comments pictures. Find over 58 
                  of the best free comments images. Free for commercial 
                  use No attribution required Copyright-free
                </Text>
          </View>

        </View>

        
    </ScrollView>
  )
}


const Styles = StyleSheet.create({
  PostBoxImg:{
      width:"100%",
      height:300,
    },
    PostImg:{
      width:"100%",
      height:"100%",
    },
    PageLayout:{
      padding:16,
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

    postContent:{
      color:'#656d76',
      paddingTop:0,
      paddingBottom:28,
      paddingLeft:15,
      paddingRight:15,
    },

});
