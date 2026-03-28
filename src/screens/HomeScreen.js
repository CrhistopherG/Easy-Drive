import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

export default function VehicleScreen() {
  return (
    <View style={styles.container}>
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>HOME</Text>
        <TouchableOpacity>
          <Ionicons name="add-circle-outline" size={28} color="black" />
        </TouchableOpacity>
      </View>

      {/* Card con información del coche */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.signal}>📶</Text>
          <Text style={styles.plate}>F 150 YXE-573-G</Text>
        </View>
        <Image
          source={require('../../assets/car.png')} // tu imagen en assets
          style={styles.thumbnail}
        />
        <Text style={styles.cardFooter}>ID: 3523891647</Text>
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
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  card: {
    margin: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    overflow: 'hidden',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
  },
  signal: {
    color: 'red',
    fontSize: 16,
  },
  plate: {
    fontWeight: 'bold',
  },
  thumbnail: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  cardFooter: {
    padding: 8,
    fontSize: 14,
    color: '#555',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
});