import React, { useState } from 'react';
import Nav from '../components/Nav';
import Popout from '../components/Popout';
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

const Habilidades = () => {
  const [ state, setState ] = useState({ ability: '', popout: false });

  const handleClick = ({ target: { name } }) => {
    setState({ ability: name,  popout: true});
  }

  const closePopout = () => {
    setState({ ability: '', popout: false });
  }

  return (
    <div>
      {state.popout && <Popout name={ state.ability } callback={ closePopout } />}
      <Nav />
      <div className="title-container margin-adjustment">
        <h1>Habilidades</h1>
      </div>
      <section className="abilities-container">
        <img name="Jest" className="abilities" src={ jest } alt="Habilidades" onClick={ handleClick } />
        <img name="RTL" className="abilities" src={ rtl } alt="Habilidades" onClick={ handleClick } />
        <img name="Git" className="abilities" src={ git } alt="Habilidades" onClick={ handleClick } />
        <img name="CSS" className="abilities" src={ css } alt="Habilidades" onClick={ handleClick } />
        <img name="Figma" className="abilities" src={ figma } alt="Habilidades" onClick={ handleClick } />
        <img name="GitHub" className="abilities" src={ githubt } alt="Habilidades" onClick={ handleClick } />
        <img name="Linux" className="abilities" src={ linux } alt="Habilidades" onClick={ handleClick } />
        <img name="HTML" className="abilities" src={ html } alt="Habilidades" onClick={ handleClick } />
        <img name="VSCode" className="abilities" src={ vscode } alt="Habilidades" onClick={ handleClick } />
        <img name="Javascript" className="abilities" src={ javascript } alt="Habilidades" onClick={ handleClick } />
        <img name="React" className="abilities" src={ react } alt="Habilidades" onClick={ handleClick } />
        <img name="Redux" className="abilities" src={ redux } alt="Habilidades" onClick={ handleClick } />
      </section>
    </div>
  )
};

export default Habilidades;
