import React from 'react';
import Nav from '../components/Nav';
import abilities from '../images/abilities.svg';
import jest from '../images/jest.svg';
import css from '../images/css.svg';
import linux from '../images/linux.svg';
import javascript from '../images/javascript.svg';
import rtl from '../images/rtl.svg';
import figma from '../images/figma.svg';
import html from '../images/html.svg';
import react from '../images/react.svg';
import git from '../images/git.svg';
import githubt from '../images/githubt.svg';
import vscode from '../images/vscode.svg';
import redux from '../images/redux.svg';

import '../styles/Habilidades.css'

const Habilidades = () => (
  <div>
    <Nav />
    <div className="title-container margin-adjustment">
      <h1>Habilidades</h1>
    </div>
    <section className="abilities-container">
      <img className="abilities" src={ jest } alt="Habilidades" />
      <img className="abilities" src={ rtl } alt="Habilidades" />
      <img className="abilities" src={ git } alt="Habilidades" />
      <img className="abilities" src={ css } alt="Habilidades" />
      <img className="abilities" src={ figma } alt="Habilidades" />
      <img className="abilities" src={ githubt } alt="Habilidades" />
      <img className="abilities" src={ linux } alt="Habilidades" />
      <img className="abilities" src={ html } alt="Habilidades" />
      <img className="abilities" src={ vscode } alt="Habilidades" />
      <img className="abilities" src={ javascript } alt="Habilidades" />
      <img className="abilities" src={ react } alt="Habilidades" />
      <img className="abilities" src={ redux } alt="Habilidades" />
    </section>
  </div>
);

export default Habilidades;
