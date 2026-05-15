import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import BottomNav from '../components/BottomNav';
import { supabase } from '../config/supabase';

export default function ConfigurationScreen({ navigate, user }) {
  const [alertsEnabled, setAlertsEnabled] = useState(true);
  const [telegramLinked, setTelegramLinked] = useState(false);
  const [sensibilidad, setSensibilidad] = useState('Media');
  const [vehiculo, setVehiculo] = useState('Sin vehículo asignado');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    cargarConfiguracion();
  }, []);

  async function cargarConfiguracion() {
    try {
      setLoading(true);

      // 1. Obtener el primer vehículo registrado
      const { data: vehiculos, error: vehiculoError } =
        await supabase
          .from('vehiculo')
          .select('modelo')
          .limit(1);

      if (vehiculoError) throw vehiculoError;

      if (vehiculos && vehiculos.length > 0) {
        setVehiculo(vehiculos[0].modelo);
      }

      // 2. Obtener configuración guardada
      const { data: config, error: configError } =
        await supabase
          .from('configuracion')
          .select('*')
          .limit(1)
          .single();

      // Si la tabla no tiene datos aún, no se considera error grave
      if (configError && configError.code !== 'PGRST116') {
        throw configError;
      }

      if (config) {
        setAlertsEnabled(config.alertas_activas);
        setTelegramLinked(config.telegram_vinculado);
        setSensibilidad(config.sensibilidad);
      }
    } catch (error) {
      Alert.alert('Error', error.message);
    } finally {
      setLoading(false);
    }
  }

  async function guardarConfiguracion() {
    try {
      const { error } = await supabase
        .from('configuracion')
        .upsert([
          {
            id_configuracion: 1,
            alertas_activas: alertsEnabled,
            telegram_vinculado: telegramLinked,
            sensibilidad,
          },
        ]);

      if (error) throw error;

      Alert.alert(
        'Éxito',
        'Configuración guardada correctamente'
      );
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  }

  async function toggleTelegram() {
    const nuevoValor = !telegramLinked;
    setTelegramLinked(nuevoValor);
  }

  async function cambiarSensibilidad() {
    const opciones = ['Baja', 'Media', 'Alta'];
    const indiceActual = opciones.indexOf(sensibilidad);
    const siguiente =
      opciones[(indiceActual + 1) % opciones.length];
    setSensibilidad(siguiente);
  }

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
        <Text>Cargando configuración...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>
          Perfil / Configuración
        </Text>

        <TouchableOpacity onPress={guardarConfiguracion}>
          <Ionicons
            name="save-outline"
            size={28}
            color="black"
          />
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
          <Text style={styles.infoText}>
            {user?.email || 'Usuario Demo'}
          </Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.infoText}>**********</Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.infoText}>{vehiculo}</Text>
        </View>
      </View>

      {/* CONFIGURACIÓN */}
      <View style={styles.section}>
        <View style={styles.card}>
          <MaterialIcons
            name="settings"
            size={24}
          />
          <Text style={styles.cardText}>
            Configuración
          </Text>
        </View>

        <Text style={styles.arrow}>↓</Text>

        <View style={styles.rowBox}>
          <Text style={styles.infoText}>
            Activar alertas
          </Text>
          <Switch
            value={alertsEnabled}
            onValueChange={setAlertsEnabled}
          />
        </View>

        <TouchableOpacity
          style={styles.infoBox}
          onPress={toggleTelegram}
        >
          <Text style={styles.infoText}>
            {telegramLinked
              ? 'Telegram Vinculado'
              : 'Vincular con Telegram'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.infoBox}
          onPress={cambiarSensibilidad}
        >
          <Text style={styles.infoText}>
            Sensibilidad: {sensibilidad}
          </Text>
        </TouchableOpacity>
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
    justifyContent: 'space-between',
  },

  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  section: {
    alignItems: 'center',
    marginTop: 20,
  },

  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6f9c95',
    padding: 12,
    borderRadius: 20,
    width: '80%',
    justifyContent: 'center',
    gap: 10,
  },

  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  arrow: {
    fontSize: 24,
    marginVertical: 10,
  },

  infoBox: {
    backgroundColor: '#6f9c95',
    padding: 10,
    borderRadius: 10,
    width: '80%',
    marginVertical: 5,
    alignItems: 'center',
  },

  rowBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#6f9c95',
    padding: 10,
    borderRadius: 10,
    width: '80%',
    marginVertical: 5,
  },

  infoText: {
    fontSize: 14,
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
});