import React, { useContext, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import GeralContext from '../context/GeralContext';
import Switch from './Switch';
import '../styles/Nav.css';

const Nav = () => {
  const { pathname } = useLocation();
  const { theme } = useContext(GeralContext);

  useEffect(() => {
    const li = document.getElementsByTagName('li');
    const nav = document.getElementsByTagName('nav')[0]
    const hr = document.getElementsByTagName('hr')[0];
    if (theme === 'light') {
      nav.style.backgroundColor = 'white';
      hr.style.color = 'black';
      for (let i = 0; i < li.length; i += 1) {
        li[i].style.color = 'black';
      }
    } else {
      nav.style.backgroundColor = 'black';
      hr.style.color = 'white';
      for (let i = 0; i < li.length; i += 1) {
        li[i].style.color = 'white';
      }
    }
  }, [theme]);

  return (
    <div className="nav-container">
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
    <Switch />
    </div>
  );
};

export default Nav;
