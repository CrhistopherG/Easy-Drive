import { supabase } from '../config/supabase';

export async function obtenerAlertas() {
  const { data, error } = await supabase
    .from('alerta')
    .select(`
      id_alerta,
      tipo,
      enviada,
      fecha,
      evento_riesgo (
        descripcion,
        nivel
      )
    `)
    .order('id_alerta', { ascending: false });

  if (error) throw error;
  return data;
}