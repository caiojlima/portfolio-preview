import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Nav.css';

const Nav = () => {
  const { pathname } = useLocation();

  return (
    <nav>
      <ul>
        <Link to="/">
          <li>
            Início
            { (pathname === '/') && <hr/>}
          </li>
        </Link>
        <Link to="/about">
          <li>
            Sobre
            { (pathname === '/about') && <hr /> }
          </li>
        </Link>
        <Link to="/abilities">
          <li>
            Habilidades
            { (pathname === '/abilities') && <hr /> }
          </li>
        </Link>
        <Link to="/projects">
          <li>
            Projetos
            { (pathname === '/projects') && <hr /> }
          </li>
        </Link>
        <Link to="/contact">
          <li>
            Contato
            { (pathname === '/contact') && <hr /> }
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
