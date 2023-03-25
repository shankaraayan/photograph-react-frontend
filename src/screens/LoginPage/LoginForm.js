import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Styles } from './LoginFormStyle'
import LoginPage from '../../components/LoginPage/LoginPage'
import BackArrow from '../../../assets/icons/BackArrow.svg';
import { useNavigation } from '@react-navigation/native';
// import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/AntDesign';



export default function LoginForm() {
  const navigation = useNavigation();
  return (
    <View style={Styles.page_layout}>

        <TouchableOpacity
          onPress={()=>navigation.goBack()}
        >
          <Icon name="back" size={20} color="#000" />
            </TouchableOpacity>

      <Text style={Styles.system_page_heading}>Log in</Text>
      <LoginPage/>
    </View>
  )
}