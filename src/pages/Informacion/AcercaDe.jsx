import React from 'react';
import { BookHeart, GraduationCap, Users } from 'lucide-react';
import styles from './informacion.module.css';

export default function AcercaDe() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title}>Sobre el Proyecto</h1>
        <p className={styles.subtitle}>
          Un esfuerzo tecnológico para la preservación de nuestra identidad lingüística.
        </p>
      </header>

      <div className={styles.card}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <BookHeart className={styles.icon} /> Propósito
          </h2>
          <p className={styles.paragraph}>
            Este diccionario bilingüe digital nace con el objetivo fundamental de documentar, preservar y difundir la variante <span className={styles.highlight}>Hñatho</span> del idioma otomí, hablada históricamente en la región. Buscamos tender un puente entre la tecnología moderna y la herencia cultural, creando una herramienta accesible para investigadores, estudiantes y miembros de la comunidad.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <GraduationCap className={styles.icon} /> Origen Académico
          </h2>
          <p className={styles.paragraph}>
            El proyecto es resultado del trabajo de ingeniería de software desarrollado dentro de la Universidad Autónoma del Estado de México (UAEMex), combinando el rigor académico con el diseño de bases de datos y la recolección de corpus lingüísticos reales para crear un producto funcional y con impacto social.
          </p>
        </section>
      </div>
    </div>
  );
}