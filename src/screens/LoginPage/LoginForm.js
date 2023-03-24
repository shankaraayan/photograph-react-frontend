import { View, Text, Image } from 'react-native'
import React from 'react'
import { Styles } from './LoginFormStyle'
import LoginPage from '../../components/LoginPage/LoginPage'
import BackArrow from '../../../assets/icons/BackArrow.svg';



export default function LoginForm() {
  return (
    <View style={Styles.page_layout}>

        <Image
            source={require('../../../assets/icons/BackArrow.svg')}
        />
        <Image 
            source={require('../../../assets/icons/BackArrow.png')} 
         />

      <Text style={Styles.system_page_heading}>Log in</Text>
      <LoginPage/>
    </View>
  )
}