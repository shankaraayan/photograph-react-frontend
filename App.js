// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomePage from './src/screens/WelcomePage/WelcomePage';
import LoginForm from './src/screens/LoginPage/LoginForm';
import SignupPage from './src/screens/RegisterPage/EmailPage/SignupPage';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="WelcomePage" component={WelcomePage} />
        <Stack.Screen name="LoginForm" component={LoginForm} />
        <Stack.Screen name="SignupPage" component={SignupPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;