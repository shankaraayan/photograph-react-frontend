

import * as React from 'react';
import { View, Text, LogBox, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomePage from './src/screens/WelcomePage/WelcomePage';
import Feeds from './src/screens/Feeds/Feeds';
import LoginForm from './src/screens/LoginPage/LoginForm';
import SignupPage from './src/screens/RegisterPage/EmailPage/SignupPage';


const Stack = createNativeStackNavigator();

function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        {/* <Stack.Screen name="WelcomePage" component={WelcomePage} /> */}
        <Stack.Screen name="Feeds" component={Feeds} />
        {/* <Stack.Screen name="LoginForm" component={LoginForm} /> */}
        {/* <Stack.Screen name="SignupPage" component={SignupPage} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;