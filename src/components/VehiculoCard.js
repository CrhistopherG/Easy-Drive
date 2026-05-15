import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function VehiculoCard({ vehiculo, onDelete, onToggle }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{vehiculo.modelo}</Text>
      <Text>Placa: {vehiculo.placa}</Text>
      <Text>
        Estado: {vehiculo.activo ? 'Activo' : 'Inactivo'}
      </Text>

      <Button
        title={vehiculo.activo ? 'Desactivar' : 'Activar'}
        onPress={() => onToggle(vehiculo)}
      />

      <Button
        title="Eliminar"
        color="red"
        onPress={() => onDelete(vehiculo.id_vehiculo)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});