import React from 'react';
import styles from './TarjetaDePalabra.module.css';

export default function TarjetaDePalabra({ palabra }) {
  const MEDIA_URL = import.meta.env.VITE_MEDIA_URL || '';

  // 1. Identificar inteligentemente cuál registro es Otomí y cuál es Español
  const esOtomi = (obj) => obj?.idioma_nombre?.toLowerCase().includes('otom');
  
  const palabraOtomi = esOtomi(palabra) ? palabra : palabra.traducciones?.find(esOtomi);
  const palabraEspanol = !esOtomi(palabra) ? palabra : palabra.traducciones?.find(t => !esOtomi(t));

  // 2. Extraer datos opcionales en cascada (Otomí primero, si está vacío, Español)
  const gramaticaFinal = palabraOtomi?.categoria_gramatical_nombre || palabraEspanol?.categoria_gramatical_nombre;
  const significadoFinal = palabraOtomi?.significado || palabraEspanol?.significado;
  const imagenFinal = palabraOtomi?.imagen || palabraEspanol?.imagen;
  const foneticaFinal = palabraOtomi?.fonetica || palabraEspanol?.fonetica;
  const ejemploFinal = palabraOtomi?.ejemplo || palabraEspanol?.ejemplo;
  const audioFinal = palabraOtomi?.audio || palabraEspanol?.audio;

  // 3. Determinar la traducción directa para mostrarla en pantalla
  const terminoTraducido = esOtomi(palabra) ? palabraEspanol?.termino : palabraOtomi?.termino;
  const idiomaTraducido = esOtomi(palabra) ? palabraEspanol?.idioma_nombre : palabraOtomi?.idioma_nombre;

  return (
    <div className={styles.card}>
      <div>
        <div className={styles.header}>
          <div>
            {/* Término principal buscado */}
            <h2 className={styles.term}>{palabra.termino}</h2>
            
            {/* Traducción al otro idioma */}
            {terminoTraducido && (
              <h3 className={styles.translation}>
                <span className={styles.translationIcon}>⇄</span> 
                {terminoTraducido}
                <span className={styles.translationLang}>{idiomaTraducido}</span>
              </h3>
            )}
            
            {/* Idioma origen y Categoría */}
            <div className={styles.badgesContainer}>
              <span className={styles.langBadge}>
                {palabra.idioma_nombre}
              </span>
              {gramaticaFinal && (
                <span className={styles.catBadge}>
                  {gramaticaFinal}
                </span>
              )}
            </div>
          </div>
          
          {significadoFinal && (
            <p className={styles.meaning}>
              Significado: {significadoFinal}
            </p>
          )}

          {/* Imagen validada */}
          {imagenFinal && (
            <img 
              src={imagenFinal.startsWith('http') ? imagenFinal : `${MEDIA_URL}${imagenFinal}`} 
              alt={palabra.termino} 
              className={styles.image}
            />
          )}
        </div>

        {/* Fonética y Ejemplo validados */}
        {foneticaFinal && (
          <p className={styles.phonetics}>Fonetica: [{foneticaFinal}]</p>
        )}
        <p className={styles.example}>
          <span className={styles.exampleLabel}>Ejemplo: </span> 
          {ejemploFinal || "Sin ejemplo registrado."}
        </p>
      </div>

      {/* Reproductor de Audio validado */}
      {audioFinal && (
        <div className={styles.audioContainer}>
          <audio controls className={styles.audioPlayer}>
            <source src={audioFinal.startsWith('http') ? audioFinal : `${MEDIA_URL}${audioFinal}`} type="audio/mpeg" />
            Tu navegador no soporta el elemento de audio.
          </audio>
        </div>
      )}
    </div>
  );
}