import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import BottomNav from '../components/BottomNav';

export default function ConfigurationScreen({navigate}) {
  const [alertsEnabled, setAlertsEnabled] = useState(true);

  return (
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>Perfil / Configuración</Text>
        <TouchableOpacity>
          <Ionicons name="add-circle-outline" size={28} color="black" />
        </TouchableOpacity>
      </View>

      {/* USUARIO */}
      <View style={styles.section}>
        <View style={styles.card}>
          <Ionicons name="person" size={24} />
          <Text style={styles.cardText}>Usuario</Text>
        </View>

        <Text style={styles.arrow}>↓</Text>

        <View style={styles.infoBox}>
          <Text style={styles.infoText}>Crhistopher Isai Ramirez Gutierrez</Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.infoText}>**********</Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.infoText}>McLaren Solus GT</Text>
        </View>
      </View>

      {/* CONFIGURACIÓN */}
      <View style={styles.section}>
        <View style={styles.card}>
          <MaterialIcons name="settings" size={24} />
          <Text style={styles.cardText}>Configuración</Text>
        </View>

        <Text style={styles.arrow}>↓</Text>

        <View style={styles.rowBox}>
          <Text style={styles.infoText}>Activar alertas</Text>
          <Switch
            value={alertsEnabled}
            onValueChange={setAlertsEnabled}
          />
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.infoText}>Vincula con Telegram</Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.infoText}>Sensibilidad del sistema</Text>
        </View>
      </View>

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
    justifyContent: 'space-between'
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },

  section: {
    alignItems: 'center',
    marginTop: 20
  },

  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6f9c95',
    padding: 12,
    borderRadius: 20,
    width: '80%',
    justifyContent: 'center',
    gap: 10
  },

  cardText: {
    fontSize: 16,
    fontWeight: 'bold'
  },

  arrow: {
    fontSize: 24,
    marginVertical: 10
  },

  infoBox: {
    backgroundColor: '#6f9c95',
    padding: 10,
    borderRadius: 10,
    width: '80%',
    marginVertical: 5,
    alignItems: 'center'
  },

  rowBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#6f9c95',
    padding: 10,
    borderRadius: 10,
    width: '80%',
    marginVertical: 5
  },

  infoText: {
    fontSize: 14
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
  }
});