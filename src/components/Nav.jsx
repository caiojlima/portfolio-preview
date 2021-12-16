import React, { useContext } from 'react';
import NavContext from '../context/NavContext';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Nav.css';

const Nav = () => {
  const { navState, setNavState } = useContext(NavContext);
  const { pathname } = useLocation();

  const SELECTED = {
    boxShadow: '0 1px 2px white',
  }

  const NORMAL = {
    boxShadow: 'unset',
  }

  const handleClick = ({ target: { innerText } }) => {
    setNavState(innerText);
  }

  return (
    <nav>
      <ul>
        <Link to="/">
          <li onClick={ handleClick } style={ (navState === 'Início' && pathname === '/') ? SELECTED : NORMAL }>Início</li>
        </Link>
        <Link to="/about">
          <li onClick={ handleClick } style={ (navState === 'Sobre' && pathname === '/about') ? SELECTED : NORMAL }>Sobre</li>
        </Link>
        <Link to="/abilities">
          <li onClick={ handleClick } style={ (navState === 'Habilidades' && pathname === '/abilities') ? SELECTED : NORMAL }>Habilidades</li>
        </Link>
        <Link to="/projects">
          <li onClick={ handleClick } style={ (navState === 'Projetos' && pathname === '/projects') ? SELECTED : NORMAL }>Projetos</li>
        </Link>
        <Link to="/contact">
          <li onClick={ handleClick } style={ (navState === 'Contato' && pathname === '/contact') ? SELECTED : NORMAL }>Contato</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
