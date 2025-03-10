import { useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function ProfileDemo() {
  const { Username, Email, Tel, Password,FullName } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text>Name: {Username}</Text>
      <Text>Full Name: {FullName}</Text>
      <Text>Pass: {Password}</Text>
      <Text>Email: {Email}</Text>
      <Text>Tel: {Tel}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});