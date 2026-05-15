import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import { generarLecturaDemo } from '../services/simuladorService';

export default function SimuladorScreen() {
  const [valor, setValor] = useState(null);

  async function simular() {
    const lectura = await generarLecturaDemo();
    setValor(lectura);
  }

  return (
    <View style={styles.container}>
      <Button
        title="Generar Lectura"
        onPress={simular}
      />

      {valor !== null && (
        <Text style={styles.resultado}>
          Valor generado: {valor}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  resultado: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
});