import React from 'react';
import Nav from '../components/Nav';
import abilities from '../images/abilities.svg';
import '../styles/Habilidades.css'

const Habilidades = () => (
  <div>
    <Nav />
    <div className="title-container">
      <h1>Habilidades</h1>
    </div>
    <section className="abilities-container">
      <img className="abilities" src={ abilities } alt="Habilidades" />
    </section>
  </div>
);

export default Habilidades;
