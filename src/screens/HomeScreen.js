import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen({ user }) {
  // sacar nombre antes del @
  const name = user?.email.split('@')[0];

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bienvenido {name} 👋</Text>
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