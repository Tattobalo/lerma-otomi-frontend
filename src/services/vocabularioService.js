import api from './axios';


export const getVocabulario = async (query = '', dir = 'ot_a_es') => {
  // Ahora "dir" es dinámico
  const response = await api.get(`vocabulario/buscar/`, {
    params: { q: query, dir: dir }
  });
  return response.data;
};