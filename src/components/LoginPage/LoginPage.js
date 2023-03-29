import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Styles } from './LoginPageStyle'
import { useNavigation } from '@react-navigation/native';
import {baseUrl} from '../../Config/baseUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNRestart from 'react-native-restart'; // Import package from node modules

export default function LoginPage() {

  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState();

  const loginHandler = () => {
    var formdata = new FormData();
    formdata.append('username', username);
    formdata.append('password', password);

    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow',
    };

    fetch(`${baseUrl}username/login`, requestOptions)
      .then(response => response.json())
      .then(async result => {
        console.log(result);
        // alert(result.message);
        await AsyncStorage.setItem('@storage_userToken', result?.data?.token);
        RNRestart.Restart();
      })
      .catch(error => console.log('error', error));
  };


  const checkLoggedIn = async () => {
    try {
      const loggedInUser = await AsyncStorage.getItem('@storage_userToken');
      console.log(loggedInUser);
      setUser(loggedInUser);
    } catch (error) {}
  };

  useEffect(() => {
    checkLoggedIn();
  }, []);


  return (
    <View>
      <TextInput
       style={Styles.email_input}
       placeholder='Username'
       selectionColor="black"
       onChangeText={text => setUsername(text)}
       value={username}
      />
    
      <TextInput
      style={Styles.password_input}
      placeholder='Password'
      secureTextEntry={true}
      selectionColor="black"
      onChangeText={text => setPassword(text)}
      value={password}
      />
      <TouchableOpacity onPress={loginHandler}
          style={{ backgroundColor: 'black', width: '100%', height: 50, justifyContent: 'center', alignItems: 'center',marginTop:20 }}
          
        >
          <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Log in</Text>
        </TouchableOpacity>
    </View>
  )
}