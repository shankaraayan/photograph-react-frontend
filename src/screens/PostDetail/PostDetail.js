import { View, Text,ScrollView, StyleSheet, Image } from 'react-native'
import React from 'react'

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
    }
    

});
