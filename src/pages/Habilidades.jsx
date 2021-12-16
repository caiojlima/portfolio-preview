import React from 'react';
import Nav from '../components/Nav';
import abilities from '../images/abilities.svg';
import '../styles/Habilidades.css'

const Habilidades = () => (
  <div>
    <Nav />
    <section className="abilities-container">
      <img className="abilities" src={ abilities } alt="Habilidades" />
    </section>
  </div>
);

export default Habilidades;
