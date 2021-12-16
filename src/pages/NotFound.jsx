import React from 'react';
import Nav from '../components/Nav';
import notFound from '../images/notFoundOct.svg';
import '../styles/NotFound.css';

const NotFound = () => (
  <div>
    <Nav />
    <div className="not-found-container">
      <div className="error-message-container">
        <h2>ERROR 404.</h2>
        <p>Página não encontrada.</p>
      </div>
      <img src={ notFound } alt="Oops! Página não encontrada!" />
    </div>
  </div>
);

export default NotFound;
