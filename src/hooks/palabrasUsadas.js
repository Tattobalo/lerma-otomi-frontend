import { useState, useEffect } from 'react';
import api from '../services/axios'; // Ajusta esta ruta si es necesario

export const palabrasUsadas = () => {
  const [palabras, setPalabras] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [loading, setLoading] = useState(false);
  const [direccion, setDireccion] = useState('ot_a_es');
  
  // NUEVO: Estados para los filtros que la vista va a consumir
  const [catGramatical, setCatGramatical] = useState('');
  const [catTematica, setCatTematica] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Determinamos qué idioma buscar en el backend según el botón
        const idiomaQuery = direccion === 'ot_a_es' ? 'otom' : 'espa';

        // Construimos el objeto de parámetros básicos
        const params = {
          search: busqueda,
          idioma__nombre__icontains: idiomaQuery
        };

        // Solo agregamos los filtros a la petición si el usuario seleccionó uno
        if (catGramatical) {
          params.categoria_gramatical = catGramatical;
        }
        if (catTematica) {
          params.tema = catTematica;
        }

        const { data } = await api.get('vocabulario/', { params });
        
        setPalabras(data.results || data);
      } catch (error) {
        console.error("Error al buscar palabras:", error);
      } finally {
        setLoading(false);
      }
    };

    const timeoutId = setTimeout(() => {
      fetchData();
    }, 300);

    return () => clearTimeout(timeoutId);
    
    // CRÍTICO: Debes poner catGramatical y catTematica en el arreglo de dependencias
    // para que la petición se dispare automáticamente cuando elijas una opción nueva.
  }, [busqueda, direccion, catGramatical, catTematica]);

  return { 
    palabras, busqueda, setBusqueda, loading, 
    direccion, setDireccion,
    catGramatical, setCatGramatical,
    catTematica, setCatTematica
  };
};