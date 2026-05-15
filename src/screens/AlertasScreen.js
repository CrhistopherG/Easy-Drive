import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

import BottomNav from '../components/BottomNav';
import { obtenerAlertas } from '../services/alertasService';
import { generarLecturaDemo } from '../services/simuladorService';

export default function AlertasScreen({ navigate }) {
  const [alertas, setAlertas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [ultimoValor, setUltimoValor] = useState(null);

  useEffect(() => {
    cargarAlertas();
  }, []);

  async function cargarAlertas() {
    try {
      setLoading(true);
      const data = await obtenerAlertas();
      setAlertas(data || []);
    } catch (error) {
      Alert.alert('Error', error.message);
    } finally {
      setLoading(false);
    }
  }

  async function simularSensor() {
    try {
      setLoading(true);
      const valor = await generarLecturaDemo();
      setUltimoValor(valor);
      await cargarAlertas();
    } catch (error) {
      Alert.alert('Error', error.message);
    } finally {
      setLoading(false);
    }
  }

  function renderItem({ item }) {
    return (
      <View style={styles.alertCard}>
        <View style={styles.alertHeader}>
          <MaterialIcons
            name="warning"
            size={22}
            color="#d32f2f"
          />
          <Text style={styles.alertTitle}>
            {item.tipo}
          </Text>
        </View>

        <Text style={styles.alertText}>
          {item.evento_riesgo?.descripcion}
        </Text>

        <Text style={styles.alertLevel}>
          Nivel: {item.evento_riesgo?.nivel}
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>Alertas</Text>
        <TouchableOpacity onPress={() => navigate('home')}>
          <Ionicons
            name="arrow-back-circle-outline"
            size={32}
            color="black"
          />
        </TouchableOpacity>
      </View>

      {/* PANEL */}
      <View style={styles.section}>
        

        <TouchableOpacity
          style={styles.primaryButton}
          onPress={simularSensor}
        >
          <Text style={styles.primaryButtonText}>
            Simular Sensor
          </Text>
        </TouchableOpacity>

        {ultimoValor !== null && (
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>
              Última lectura: {ultimoValor}
            </Text>
          </View>
        )}
      </View>

      {/* LISTA */}
      {loading ? (
        <ActivityIndicator
          size="large"
          style={{ marginTop: 20 }}
        />
      ) : (
        <FlatList
          data={alertas}
          keyExtractor={(item) =>
            item.id_alerta.toString()
          }
          renderItem={renderItem}
          contentContainerStyle={{
            paddingBottom: 20,
          }}
        />
      )}

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

  primaryButton: {
    backgroundColor: '#6f9c95',
    width: '100%',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
  },

  primaryButtonText: {
    fontWeight: 'bold',
    fontSize: 15,
  },

  infoBox: {
    backgroundColor: '#6f9c95',
    padding: 10,
    borderRadius: 10,
    width: '100%',
    marginTop: 10,
    alignItems: 'center',
  },

  infoText: {
    fontSize: 14,
  },

  alertCard: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
  },

  alertHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },

  alertTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },

  alertText: {
    fontSize: 14,
    marginBottom: 4,
  },

  alertLevel: {
    fontWeight: 'bold',
    color: '#d32f2f',
  },

  footer: {
    borderTopWidth: 1,
    borderColor: '#ccc',
    paddingTop: 10,
  },
});