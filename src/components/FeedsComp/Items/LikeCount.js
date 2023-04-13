import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
import IconFont from 'react-native-vector-icons/FontAwesome';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

export default function LikeCount() {
  return (
        <View style={Styles.likebox}>
          <Icon name="heart" size={25} color="red" style={{ marginLeft: 5 }} /> 
          {/* <IconFont name="comment-o" size={25} color="#000" style={{ marginLeft: 20 }} />  */}
            <View style={Styles.textContainer}>
              <Text style={{ lineHeight: 20 }}> 1250 Likes</Text>
            </View>
            <IconFont name="bookmark-o" size={25} color="#000" style={{ marginRight: 5 }} /> 
        </View>
  )
}


const Styles = StyleSheet.create({
    likebox: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
    },

    textContainer: {
      flex: 1,
    },


});
