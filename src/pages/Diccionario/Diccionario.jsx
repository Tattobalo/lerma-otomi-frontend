import React, { useState, useEffect } from 'react';
import api from '../../services/axios';
import { palabrasUsadas } from '../../hooks/palabrasUsadas';
import BarraDeBusqueda from '../../components/dictionary/barraDeBusqueda';
import TarjetaDePalabra from '../../components/dictionary/TarjetaPalabra/TarjetaDePalabra';
import styles from './diccionario.module.css';

export default function Diccionario() {
  // Ahora extraemos también los estados de los filtros desde tu hook
  const { 
    palabras, busqueda, setBusqueda, loading, 
    direccion, setDireccion,
    catGramatical, setCatGramatical,
    catTematica, setCatTematica 
  } = palabrasUsadas();

  // Estados locales para almacenar la lista de opciones que vienen de la base de datos
  const [opcionesGramaticales, setOpcionesGramaticales] = useState([]);
  const [opcionesTematicas, setOpcionesTematicas] = useState([]);

  // Cargar opciones de filtros al montar el componente
  useEffect(() => {
    const cargarFiltros = async () => {
      try {
        const [gram, tema] = await Promise.all([
          api.get('categorias-gramaticales/'),
          api.get('temas/')
        ]);
        setOpcionesGramaticales(gram.data.results || gram.data);
        setOpcionesTematicas(tema.data.results || tema.data);
      } catch (e) {
        console.error("Error al cargar filtros:", e);
      }
    };
    cargarFiltros();
  }, []);

  const toggleDireccion = () => {
    setDireccion(prev => prev === 'ot_a_es' ? 'es_a_ot' : 'ot_a_es');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Buscador del Diccionario Otomí
      </h1>

      {/* Botón de intercambio de idioma */}
      <div className={styles.toggleContainer}>
        <button
          onClick={toggleDireccion}
          className={`group ${styles.toggleBtn}`}
          title="Intercambiar dirección de traducción"
        >
          <span className={styles.langTextLeft}>
            {direccion === 'ot_a_es' ? 'Otomí' : 'Español'}
          </span>
          
          <div className={styles.iconWrapper}>
            <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
          </div>

          <span className={styles.langTextRight}>
            {direccion === 'ot_a_es' ? 'Español' : 'Otomí'}
          </span>
        </button>
      </div>

      {/* Tarjeta de Búsqueda y Filtros */}
      <div className={styles.filtersCard}>
        <div className={styles.filtersGrid}>
          
          <div className={styles.searchWrapper}>
            <BarraDeBusqueda 
              value={busqueda} 
              onChange={(e) => setBusqueda(e.target.value)} 
              placeholder={direccion === 'ot_a_es' ? 'Buscar en Otomí...' : 'Buscar en Español...'}
            />
          </div>

          <select 
            value={catGramatical} 
            onChange={(e) => setCatGramatical(e.target.value)}
            className={styles.selectInput}
          >
            <option value="">Todas las Categorías</option>
            {opcionesGramaticales.map(cat => (
              <option key={cat.id} value={cat.id}>{cat.nombre}</option>
            ))}
          </select>

          <select 
            value={catTematica} 
            onChange={(e) => setCatTematica(e.target.value)} 
            className={styles.selectInput}
          >
            <option value="">Todos los Temas</option>
            {opcionesTematicas.map(tema => (
              <option key={tema.id} value={tema.id}>{tema.nombre}</option>
            ))}
          </select>

        </div>
      </div>

      {loading && <p className={styles.loadingText}>Buscando coincidencias...</p>}

      {/* Listado de resultados posibles */}
      <div className={styles.gridContainer}>
        {!loading && palabras.map((item) => (
          <TarjetaDePalabra key={item.id} palabra={item} />
        ))}

        {!loading && palabras.length === 0 && busqueda !== '' && (
          <p className={styles.emptyState}>
            No se encontraron resultados para "<span className={styles.boldText}>{busqueda}</span>".
          </p>
        )}
      </div>
    </div>
  );
}