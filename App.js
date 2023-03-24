import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginForm from './src/screens/LoginPage/LoginForm';
import Profile from './src/screens/Profile/Profile';
import SignupPage from './src/screens/RegisterPage/EmailPage/SignupPage';
import Usernamepage from './src/screens/RegisterPage/UsernamePage/Usernamepage';
import WelcomePage from './src/screens/WelcomePage/WelcomePage';

export default function App() {
  return (
    <View style={styles.container}>
      <WelcomePage/>
      {/* <SignupPage/> */}
      {/* <Usernamepage/> */}
      {/* <LoginForm/> */}
    {/* <Profile/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
