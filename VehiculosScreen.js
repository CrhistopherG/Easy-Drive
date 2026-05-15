import React, { useEffect, useState } from 'react';
import {
  View,
  TextInput,
  Button,
  FlatList,
  Alert,
  StyleSheet,
} from 'react-native';

import VehiculoCard from '../components/VehiculoCard';

import {
  obtenerVehiculos,
  crearVehiculo,
  actualizarVehiculo,
  eliminarVehiculo,
} from '../services/vehiculosService';

export default function VehiculosScreen() {
  const [vehiculos, setVehiculos] = useState([]);
  const [modelo, setModelo] = useState('');
  const [placa, setPlaca] = useState('');

  async function cargarVehiculos() {
    const data = await obtenerVehiculos();
    setVehiculos(data);
  }

  useEffect(() => {
    cargarVehiculos();
  }, []);

  async function agregarVehiculo() {
    if (!modelo || !placa) {
      Alert.alert('Error', 'Completa todos los campos');
      return;
    }

    await crearVehiculo(modelo, placa);

    setModelo('');
    setPlaca('');

    cargarVehiculos();
  }

  async function toggleActivo(vehiculo) {
    await actualizarVehiculo(
      vehiculo.id_vehiculo,
      !vehiculo.activo
    );

    cargarVehiculos();
  }

  async function borrarVehiculo(id) {
    await eliminarVehiculo(id);
    cargarVehiculos();
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Modelo"
        style={styles.input}
        value={modelo}
        onChangeText={setModelo}
      />

      <TextInput
        placeholder="Placa"
        style={styles.input}
        value={placa}
        onChangeText={setPlaca}
      />

      <Button
        title="Agregar Vehículo"
        onPress={agregarVehiculo}
      />

      <FlatList
        data={vehiculos}
        keyExtractor={(item) =>
          item.id_vehiculo.toString()
        }
        renderItem={({ item }) => (
          <VehiculoCard
            vehiculo={item}
            onDelete={borrarVehiculo}
            onToggle={toggleActivo}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
});