import React from 'react';
import Nav from '../components/Nav';
import notFound from '../images/notFound.svg';
import '../styles/NotFound.css';

const NotFound = () => (
  <div>
    <Nav />
    <div className="not-found-container">
      <img src={ notFound } alt="Oops! Página não encontrada!" />
    </div>
  </div>
);

export default NotFound;
