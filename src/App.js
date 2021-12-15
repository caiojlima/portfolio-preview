import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Sobre from './pages/Sobre';
import Projetos from './pages/Projetos';
import Contato from './pages/Contato';
import NotFound from './pages/NotFound';
import './styles/App.css';  

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Inicio /> } />
        <Route path="/about" element={ <Sobre /> } />
        <Route path="/projects" element={ <Projetos /> } />
        <Route path="/contact" element={ <Contato /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
