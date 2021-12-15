import React, { useContext } from 'react';
import NavContext from '../context/NavContext';
import { Link } from 'react-router-dom';
import '../styles/Nav.css';

const Nav = () => {
  const { navState, setNavState } = useContext(NavContext);

  const SELECTED = {
    boxShadow: '0 1px 2px white'
  }

  const NORMAL = {
    borderBottom: 'none',
  }

  const handleClick = ({ target: { innerText } }) => {
    setNavState(innerText);
  }

  return (
    <nav>
      <ul>
        <Link to="/"><li onClick={ handleClick } style={ navState === 'Início' ? SELECTED : NORMAL }>Início</li></Link>
        <Link to="/about"><li onClick={ handleClick } style={ navState === 'Sobre' ? SELECTED : NORMAL }>Sobre</li></Link>
        <Link to="/projects"><li onClick={ handleClick } style={ navState === 'Projetos' ? SELECTED : NORMAL }>Projetos</li></Link>
        <Link to="/contact"><li onClick={ handleClick } style={ navState === 'Contato' ? SELECTED : NORMAL }>Contato</li></Link>
      </ul>
    </nav>
  );
};

export default Nav;
