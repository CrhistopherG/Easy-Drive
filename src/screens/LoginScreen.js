import { useState } from 'react';
import { View, Text, StyleSheet, Image, Alert } from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import { loginUser } from '../services/authService';

export default function LoginScreen({ goToRegister, goToHome }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const { error, data } = await loginUser(email, password);

    if (error) {
      Alert.alert('Error', 'Credenciales incorrectas');
    } else {
      Alert.alert('Éxito', 'Login correcto');
      goToHome(data.user);
    }
  };

  return (
    <View style={styles.container}>
      
      <Image
        source={require('../../assets/easy-drive-logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>Bienvenido(a) a EasyDrive</Text>
      <Text style={styles.subtitle}>INICIA SESIÓN</Text>

      <CustomInput
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
      />

      <CustomInput
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secure
      />

      <CustomButton title="Iniciar sesión" onPress={handleLogin} color="#007BFF" />
      <CustomButton title="Crear cuenta" onPress={goToRegister} color="#28a745" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 28,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 20,
    fontWeight: 'bold',
  },
});