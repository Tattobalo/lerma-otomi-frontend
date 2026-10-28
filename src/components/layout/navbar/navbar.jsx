import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.module.css';
import logo from '../../../assets/lerma1.jpg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  // Referencia para saber dónde está el menú y poder cerrarlo al hacer clic fuera
  const dropdownRef = useRef(null);

  useEffect(() => {
    const manejarClicFuera = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', manejarClicFuera);
    return () => document.removeEventListener('mousedown', manejarClicFuera);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.navContainer}>
        <div className={styles.navInner}>

          <div className="flex items-center">
            <Link className={styles.logo} to="/">
              <img src={logo} alt="Logo Lerma" className={styles.logoImage} />
              Lerma Otomí
            </Link>
          </div>

          {/* Enlaces Desktop */}
          <nav className={styles.navLinks}>
            <Link className={styles.link} to="/">Inicio</Link>
            <Link className={styles.link} to="/Diccionario">Diccionario</Link>

            {/* Contenedor del Dropdown por CLIC */}
            <div className={styles.dropdownContainer} ref={dropdownRef}>
              <button 
                className={styles.dropdownButton}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Acerca de
                <svg className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Menú desplegable */}
              {isDropdownOpen && (
                <div className={styles.dropdownMenu}>
                  <Link to="/ConoceLaLengua" className={styles.dropdownItem} onClick={() => setIsDropdownOpen(false)}>
                    Conoce la lengua
                  </Link>
                  <Link to="/Aplicacion" className={styles.dropdownItem} onClick={() => setIsDropdownOpen(false)}>
                    Aplicación
                  </Link>
                  <Link to="/AcercaDe" className={styles.dropdownItem} onClick={() => setIsDropdownOpen(false)}>
                    Sobre el proyecto
                  </Link>
                </div>
              )}
            </div>
          </nav>

          {/* Botón Hamburguesa Móvil */}
          <div className={styles.menuButtonContainer}>
            <button onClick={() => setIsOpen(!isOpen)} className={styles.menuButton}>
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Menú Móvil */}
      {isOpen && (
        <div className={styles.mobileMenu}>
          <Link to="/" onClick={() => setIsOpen(false)} className={styles.mobileLink}>
            Inicio
          </Link>
          <Link to="/Diccionario" onClick={() => setIsOpen(false)} className={styles.mobileLink}>
            Diccionario
          </Link>
          <Link to="/ConoceLaLengua" onClick={() => setIsOpen(false)} className={styles.mobileLink}>
            Conoce la lengua
          </Link>
          <Link to="/Aplicacion" onClick={() => setIsOpen(false)} className={styles.mobileLink}>
            Aplicación
          </Link>
          <Link to="/AcercaDe" onClick={() => setIsOpen(false)} className={styles.mobileLink}>
            Sobre el proyecto
          </Link>
        </div>
      )}
    </header>
  );
}