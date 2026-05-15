import { supabase } from '../config/supabase';

export async function obtenerVehiculos() {
  const { data, error } = await supabase
    .from('vehiculo')
    .select('*')
    .order('id_vehiculo');

  if (error) throw error;
  return data;
}

export async function crearVehiculo(modelo, placa) {
  const { data, error } = await supabase
    .from('vehiculo')
    .insert([{ modelo, placa, activo: true }])
    .select();

  if (error) throw error;
  return data;
}

export async function actualizarVehiculo(id, activo) {
  const { data, error } = await supabase
    .from('vehiculo')
    .update({ activo })
    .eq('id_vehiculo', id)
    .select();

  if (error) throw error;
  return data;
}

export async function eliminarVehiculo(id) {
  const { error } = await supabase
    .from('vehiculo')
    .delete()
    .eq('id_vehiculo', id);

  if (error) throw error;
}






