import React from 'react';
import {
  View,
  Button,
  StyleSheet,
  Text,
} from 'react-native';

/*
  IMPORTANTE:
  En tu App.js envías la prop llamada "navigate":

  <HomeScreen
    user={user}
    navigate={setScreen}
  />

  Por lo tanto, aquí NO debes usar:
  function HomeScreen({ navigation })

  Debe ser:
  function HomeScreen({ navigate, user })
*/

export default function HomeScreen({ navigate, user }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Bienvenido {user?.email || 'Usuario'}
      </Text>

      <Button
        title="Vehículos"
        onPress={() => navigate('vehiculos')}
      />


  

      <View style={styles.spacing} />

      <Button
        title="Alertas"
        onPress={() => navigate('alertas')}
      />

      <View style={styles.spacing} />

      <Button
        title="Configuración"
        onPress={() => navigate('configuration')}
      />

      <View style={styles.spacing} />

      <Button
        title="Cerrar Sesión"
        color="red"
        onPress={() => navigate('login')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  spacing: {
    height: 15,
  },
});