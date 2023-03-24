import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignupPage from './src/screens/RegisterPage/EmailPage/SignupPage';
import Usernamepage from './src/screens/RegisterPage/UsernamePage/Usernamepage';

export default function App() {
  return (
    <View style={styles.container}>
      <SignupPage/>
      <Usernamepage/>
       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
