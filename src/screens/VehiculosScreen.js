import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import BottomNav from '../components/BottomNav';
import VehiculoCard from '../components/VehiculoCard';

import {
  obtenerVehiculos,
  crearVehiculo,
  actualizarVehiculo,
  eliminarVehiculo,
} from '../services/vehiculosService';

export default function VehiculosScreen({ navigate }) {
  const [vehiculos, setVehiculos] = useState([]);
  const [modelo, setModelo] = useState('');
  const [placa, setPlaca] = useState('');

  useEffect(() => {
    cargarVehiculos();
  }, []);

  async function cargarVehiculos() {
    try {
      const data = await obtenerVehiculos();
      setVehiculos(data || []);
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  }

  async function agregarVehiculo() {
    if (!modelo || !placa) {
      Alert.alert('Error', 'Completa todos los campos');
      return;
    }

    try {
      await crearVehiculo(modelo, placa);
      setModelo('');
      setPlaca('');
      cargarVehiculos();
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  }

  async function toggleActivo(vehiculo) {
    try {
      await actualizarVehiculo(
        vehiculo.id_vehiculo,
        !vehiculo.activo
      );
      cargarVehiculos();
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  }

  async function borrarVehiculo(id) {
    try {
      await eliminarVehiculo(id);
      cargarVehiculos();
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  }

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>Vehículos</Text>
        <TouchableOpacity onPress={() => navigate('home')}>
          <Ionicons
            name="arrow-back-circle-outline"
            size={32}
            color="black"
          />
        </TouchableOpacity>
      </View>

      {/* FORMULARIO */}
      <View style={styles.section}>
        <View style={styles.card}>
          <Ionicons name="car-sport" size={24} color="black" />
          <Text style={styles.cardText}>Agregar Vehículo</Text>
        </View>

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

        <TouchableOpacity
          style={styles.primaryButton}
          onPress={agregarVehiculo}
        >
          <Text style={styles.primaryButtonText}>
            Guardar Vehículo
          </Text>
        </TouchableOpacity>
      </View>

      {/* LISTA */}
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
        contentContainerStyle={{
          paddingBottom: 20,
        }}
      />

      {/* FOOTER */}
      <View style={styles.footer}>
        <BottomNav navigate={navigate} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 20,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },

  section: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },

  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6f9c95',
    padding: 12,
    borderRadius: 20,
    width: '100%',
    justifyContent: 'center',
    gap: 10,
    marginBottom: 15,
  },

  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  input: {
    backgroundColor: '#ffffff',
    width: '100%',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },

  primaryButton: {
    backgroundColor: '#6f9c95',
    width: '100%',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 5,
  },

  primaryButtonText: {
    fontWeight: 'bold',
    fontSize: 15,
  },

  footer: {
    borderTopWidth: 1,
    borderColor: '#ccc',
    paddingTop: 10,
  },
});