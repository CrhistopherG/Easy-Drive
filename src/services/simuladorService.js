import { supabase } from '../config/supabase';

export async function generarLecturaDemo() {
  const valor = Number((Math.random() * 2).toFixed(2));

  const { data: lectura, error } = await supabase
    .from('lectura')
    .insert([
      {
        id_sensor: 1,
        id_vehiculo: 1,
        valor,
      },
    ])
    .select();

  if (error) throw error;

  if (valor >= 1) {
    const { data: evento } = await supabase
      .from('evento_riesgo')
      .insert([
        {
          id_vehiculo: 1,
          nivel: 'Alto',
          descripcion: `Valor crítico detectado: ${valor}`,
        },
      ])
      .select();

    await supabase.from('alerta').insert([
      {
        id_evento: evento[0].id_evento,
        tipo: 'Telegram',
        enviada: false,
      },
    ]);
  }

  return valor;
}