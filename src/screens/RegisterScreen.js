import { useState } from 'react';
import { View, Text, StyleSheet, Alert, Image } from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import { registerUser } from '../services/authService';

export default function RegisterScreen({ goToLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    const { error } = await registerUser(email, password);

    if (error) {
      Alert.alert('Error', 'No se pudo crear la cuenta');
    } else {
      Alert.alert('Éxito', 'Cuenta creada');
      goToLogin(); // regresar al login
    }
  };

  return (
    <View style={styles.container}>

        <Image
                source={require('../../assets/easy-drive-logo.png')}
                style={styles.logo}
                resizeMode="contain"
              />
        <Text style={styles.title}>REGISTRO DE USUARIO</Text>
        <Text style={styles.subtitle}>Crea tu cuenta en EasyDrive</Text>

        <CustomInput placeholder="Correo electrónico" value={email} onChangeText={setEmail} />

      <CustomInput
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secure
      />

      <CustomButton title="Crear cuenta" onPress={handleRegister} />
      <CustomButton title="Regresar" onPress={goToLogin} color='#28a745' />
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
    fontSize: 28,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  logo: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginBottom: 20,
  },
});