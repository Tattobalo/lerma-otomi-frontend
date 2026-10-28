import React from 'react';
import { Link } from 'react-router-dom';
import styles from './home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Bienvenido a Lerma Otomí
      </h1>

      <div className={styles.content}>
        <p className={styles.description}>
          Plataforma que recolecta el conocimiento de la lengua otomí, con el objetivo de preservar y difundir su riqueza cultural y lingüística de Lerma.
        </p>
        <br></br>
        <p className={styles.description}>
          Aquí podrás explorar el diccionario otomí, aprender sobre la lengua y su historia, y contribuir al proyecto para mantener viva esta importante herencia cultural.
        </p>
      </div>

      <div className={styles.buttonContainer}>
          <Link
            to="/diccionario"
            className={styles.button}
          >
            Ir al Buscador de Palabras
          </Link>
        </div>
    </div>
  );
}