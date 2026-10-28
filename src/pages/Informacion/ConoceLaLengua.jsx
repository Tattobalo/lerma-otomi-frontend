import React from 'react';
import { MessageCircle, Globe2, Ear } from 'lucide-react';
import styles from './informacion.module.css';

export default function ConoceLaLengua() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title}>La Lengua Hñatho</h1>
        <p className={styles.subtitle}>
          Descubre la riqueza fonética y gramatical de la variante otomí de la región.
        </p>
      </header>

      <div className={styles.card}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <Globe2 className={styles.icon} /> Contexto Histórico
          </h2>
          <p className={styles.paragraph}>
            El otomí es una lengua tonal perteneciente a la familia otopame. La variante <span className={styles.highlight}>Hñatho</span> representa una forma única de concebir el mundo, el entorno natural y las relaciones sociales. Su preservación es vital, ya que con cada palabra se transmite la cosmovisión de generaciones enteras.
          </p>
        </section>

        <div className={styles.grid2Col}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <Ear className={styles.icon} /> Fonética y Tonos
            </h2>
            <p className={styles.paragraph}>
              A diferencia del español, el otomí utiliza diferentes tonos (altos, bajos, ascendentes) que pueden cambiar por completo el significado de una palabra. Por ello, hemos integrado grabaciones de audio nativo en nuestras fichas, permitiendo escuchar la pronunciación exacta y la entonación correcta.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <MessageCircle className={styles.icon} /> Gramática Viva
            </h2>
            <p className={styles.paragraph}>
              La estructura gramatical del Hñatho es rica en prefijos y sufijos que indican tiempo, persona y número. Las categorías que verás en el diccionario (sustantivos, verbos, adjetivos) reflejan cómo los hablantes organizan sus ideas de forma dinámica y descriptiva.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}