import React from 'react';
import { Routes, Route } from "react-router-dom";

// Componentes para las rutas
import LandingPage from '../src/pages/landing/LandingPage';
import HomePage from '../src/pages/home/HomePage';
import Navbar from './components/navbar/NavBar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<LandingPage/>} /> */}
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
