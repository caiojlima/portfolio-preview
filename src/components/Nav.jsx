import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav>
    <ul>
      <Link to="/"><li>Início</li></Link>
      <Link to="/about"><li>Sobre</li></Link>
      <Link to="projects"><li>Projetos</li></Link>
      <Link to="contact"><li>Contato</li></Link>
    </ul>
  </nav>
);

export default Nav;
