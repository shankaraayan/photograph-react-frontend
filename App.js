

import * as React from 'react';
import { View, Text, LogBox, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomePage from './src/screens/WelcomePage/WelcomePage';
import LoginForm from './src/screens/LoginPage/LoginForm';
import SignupPage from './src/screens/RegisterPage/EmailPage/SignupPage';
import SplashScreen from 'react-native-splash-screen';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  const [user, setUser] = React.useState();
  const [isLogged, setIsLogged] = React.useState(false);
  const [isLoader, setIsLoader] = React.useState(false);

  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  LogBox.ignoreAllLogs(); //Ignore all log notifications

  const checkLoggedIn = async () => {
    try {
      setIsLoader(true);
      const loggedInUser = await AsyncStorage.getItem('@storage_userToken');
      console.log('App Token------------------>', loggedInUser);
      setIsLogged(loggedInUser);
      setIsLoader(false);
    } catch (error) {}
  };
  
  React.useEffect(() => {
    SplashScreen.hide();
    checkLoggedIn();
  }, []);

  const Stack = createNativeStackNavigator();
  // const Tabs = createBottomTabNavigator();

  const MainStack = () => {
    return (
    
        <Stack.Navigator screenOptions={{headerShown:false}}>
          {/* <Stack.Screen name="WelcomePage" component={WelcomePage} /> */}
          {/* <Stack.Screen name="LoginForm" component={LoginForm} /> */}
          <Stack.Screen name="SignupPage" component={SignupPage} />
        </Stack.Navigator>
    
    );
  };



  const GuestStack = () => {
    //Import the other screens you use!
    return (
      
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="WelcomePage" component={WelcomePage} />
          <Stack.Screen name="LoginForm" component={LoginForm} />
          <Stack.Screen name="SignupPage" component={SignupPage} />
        </Stack.Navigator>
      
    );
  };



  return (
    <>
      <NavigationContainer>
        {isLoader ? (
          <ActivityIndicator size={'large'} color={COLORS.primary} />
        ) : (
          <>{isLogged ? <MainStack /> : <GuestStack />}</>
        )}
      </NavigationContainer>
    </>
  );
}

export default App;