import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

export default function PerfilScreen() {
  const [alertsEnabled, setAlertsEnabled] = useState(true);

  return (
    <View style={styles.container}>
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Perfil / Configuración</Text>
        <TouchableOpacity>
          <Ionicons name="add-circle-outline" size={28} color="black" />
        </TouchableOpacity>
      </View>

      {/* Usuario */}
      <View style={styles.section}>
        <View style={styles.card}>
          <Ionicons name="person" size={24} />
          <Text style={styles.cardText}>Usuario</Text>
        </View>

        <Text style={styles.arrow}>↓</Text>

        <View style={styles.infoBox}>
          <Text style={styles.infoText}>Jesus Alberto Jimenez</Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.infoText}>**********</Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.infoText}>McLaren Solus GT</Text>
        </View>
      </View>

      {/* Configuración */}
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

      {/* Footer */}
      <View style={styles.footer}>
        <Ionicons name="person-outline" size={24} />
        <Ionicons name="cloud-outline" size={24} />
        <Ionicons name="home" size={24} />
        <Ionicons name="search" size={24} />
        <Ionicons name="person-circle-outline" size={24} />
      </View>

    </View>
  );
}