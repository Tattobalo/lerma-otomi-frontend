import React from 'react';
import { Code2, Database, Layout, Server } from 'lucide-react';
import styles from './informacion.module.css';

export default function Aplicacion() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title}>Arquitectura Técnica</h1>
        <p className={styles.subtitle}>
          Conoce la infraestructura de software que impulsa este diccionario.
        </p>
      </header>

      <div className={styles.card}>
        <section className={styles.section}>
          <p className={styles.paragraph}>
            Para garantizar tiempos de respuesta rápidos y una gestión de datos robusta, esta plataforma ha sido construida utilizando una arquitectura moderna separada en backend y frontend, optimizada para la consulta de información fonética y textual en tiempo real.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <Code2 className={styles.icon} /> Stack Tecnológico
          </h2>
          
          <div className={styles.techGrid}>
            <div className={styles.techCard}>
              <Layout className={styles.techIcon} />
              <span className={styles.techName}>React.js</span>
              <span className="text-[10px] text-slate-400 uppercase tracking-widest">Frontend</span>
            </div>
            
            <div className={styles.techCard}>
              <Code2 className={styles.techIcon} />
              <span className={styles.techName}>Tailwind CSS</span>
              <span className="text-[10px] text-slate-400 uppercase tracking-widest">Estilos</span>
            </div>
            
            <div className={styles.techCard}>
              <Server className={styles.techIcon} />
              <span className={styles.techName}>Django API</span>
              <span className="text-[10px] text-slate-400 uppercase tracking-widest">Backend</span>
            </div>
            
            <div className={styles.techCard}>
              <Database className={styles.techIcon} />
              <span className={styles.techName}>PostgreSQL</span>
              <span className="text-[10px] text-slate-400 uppercase tracking-widest">Base de Datos</span>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <Database className={styles.icon} /> Lógica de Búsqueda
          </h2>
          <p className={styles.paragraph}>
            El sistema de búsqueda implementa un algoritmo de filtrado dinámico que intersecta temas, categorías gramaticales y coincidencias textuales bidireccionales (Otomí ⇄ Español). Además, la base de datos relacional está diseñada para soportar relaciones complejas de uno a muchos entre los términos y sus traducciones semánticas.
          </p>
        </section>
      </div>
    </div>
  );
}