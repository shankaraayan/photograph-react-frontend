import { View, Text,StyleSheet, Image, ScrollView  } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Icon  from 'react-native-vector-icons/AntDesign';
import SettingDot from '../../components/FeedsComp/Items/SettingDots';
import LikeCount from '../../components/FeedsComp/Items/LikeCount';
import FeedsComp from '../../components/FeedsComp/FeedsComp';

export default function Feeds() {
    const navigation = useNavigation;
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={Styles.page_layout}>
          <Text style={Styles.system_page_heading}>Discover</Text>
            <FeedsComp/>
            <FeedsComp/>
        </View>
    </ScrollView>
  )
}

const Styles = StyleSheet.create({
    page_layout:{
        marginTop:10,width:'100%',padding:16
      },

      system_page_heading:{
        color: 'black', 
        fontSize: 24, 
        fontWeight: 'bold',
        marginBottom:20,
        marginTop:20,
      },


  });
  