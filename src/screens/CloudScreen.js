import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import BottomNav from '../components/BottomNav';

export default function CloudScreen() {
  return (
    <View style={styles.container}>
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>INICIO / CLOUD</Text>
        <TouchableOpacity>
          <Ionicons name="add-circle-outline" size={28} color="black" />
        </TouchableOpacity>
      </View>

      {/* Opciones principales */}
      <View style={styles.section}>
        <View style={styles.option}>
          <Ionicons name="cloud-download-outline" size={28} color="#007BFF" />
          <Text style={styles.optionText}>ALMACENAMIENTO 68/100 GB</Text>
        </View>

        <View style={styles.option}>
          <MaterialIcons name="delete" size={28} color="gray" />
          <Text style={[styles.optionText, { color: 'red' }]}>ELIMINAR TODOS LOS DATOS</Text>
        </View>

        <View style={styles.option}>
          <Ionicons name="card-outline" size={28} color="purple" />
          <Text style={styles.optionText}>ADMINISTRAR SUSCRIPCIÓN</Text>
        </View>
      </View>

      {/* Footer navegación */}
      <View style={styles.footer}>
        <Ionicons name="headset-outline" size={24} />
        <Ionicons name="cloud-outline" size={24} />
        <Ionicons name="home" size={24} />
        <Ionicons name="search" size={24} />
        <Ionicons name="person-circle-outline" size={24} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  section: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  optionText: {
    marginLeft: 15,
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
});