import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MyStyle from './style';

export default function App() {
  return (
    <LinearGradient colors={['#74ebd5', '#ACB6E5']} style={styles.container}> //view
      <Text style={styles.text}>hello world React Native 😎</Text>
      <Text style={styles.textlower}>#ITSAKHON</Text>
      <Text style={MyStyle.textTest}>Lorem ipsum dolor sit amet.</Text>
      <StatusBar style="auto" />
    </LinearGradient>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A8E6CF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: "#1E3A8A", 
    fontSize: 20,
    fontWeight: "bold",
  },
  
  textlower: {
    marginTop: 10,
    color: "#EF4444", 
    fontSize: 15,
    fontWeight: "bold",
  }
});
