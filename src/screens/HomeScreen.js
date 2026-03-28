import { View, Text, StyleSheet } from 'react-native';
import BottomNav from '../components/BottomNav';

export default function HomeScreen({ user, navigate }) {
  // sacar nombre antes del @
  const name = user?.email.split('@')[0];

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bienvenido {name} 👋</Text>
      <BottomNav navigate={navigate} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});