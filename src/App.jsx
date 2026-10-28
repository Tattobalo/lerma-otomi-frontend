import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/layout/navbar/navbar.jsx';
import Footer from './components/layout/footer.jsx';

import Home from './pages/Home/Home.jsx';
import Diccionario from './pages/Diccionario/Diccionario.jsx';

import AcercaDe from './pages/Informacion/AcercaDe.jsx';
import Aplicacion from './pages/Informacion/Aplicacion.jsx';
import ConoceLaLengua from './pages/Informacion/ConoceLaLengua.jsx';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
        <Navbar />
        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Diccionario" element={<Diccionario />} />
            
            {/* Rutas de información */}
            <Route path="/AcercaDe" element={<AcercaDe />} />
            <Route path="/Aplicacion" element={<Aplicacion />} />
            <Route path="/ConoceLaLengua" element={<ConoceLaLengua />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;