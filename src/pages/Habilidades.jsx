import React, { useState, useContext } from 'react';
import GeralContext from '../context/GeralContext';
import Nav from '../components/Nav';
import Popout from '../components/Popout';
import jest from '../images/jest.svg';
import jestL from '../images/jestL.svg';
import css from '../images/css.svg';
import cssL from '../images/cssL.svg';
import linux from '../images/linux.svg';
import linuxL from '../images/linuxL.svg';
import javascript from '../images/javascript.svg';
import javascriptL from '../images/javascriptL.svg';
import rtl from '../images/rtl.svg';
import rtlL from '../images/rtlL.svg';
import figma from '../images/figma.svg';
import figmaL from '../images/figmaL.svg';
import html from '../images/html.svg';
import htmlL from '../images/htmlL.svg';
import react from '../images/react.svg';
import reactL from '../images/reactL.svg';
import git from '../images/git.svg';
import gitL from '../images/gitL.svg';
import githubt from '../images/githubt.svg';
import githubtL from '../images/githubtL.svg';
import vscode from '../images/vscode.svg';
import vscodeL from '../images/vscodeL.svg';
import redux from '../images/redux.svg';
import reduxL from '../images/reduxL.svg';
import '../styles/Habilidades.css'

const Habilidades = () => {
  const [ state, setState ] = useState({ ability: '', popout: false });
  const { theme } = useContext(GeralContext);

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
        <img name="Jest" className="abilities" src={ theme === 'light' ? jestL : jest } alt="Habilidades" onClick={ handleClick } />
        <img name="RTL" className="abilities" src={ theme === 'light' ? rtlL : rtl } alt="Habilidades" onClick={ handleClick } />
        <img name="Git" className="abilities" src={ theme === 'light' ? gitL : git } alt="Habilidades" onClick={ handleClick } />
        <img name="CSS" className="abilities" src={ theme === 'light' ? cssL : css } alt="Habilidades" onClick={ handleClick } />
        <img name="Figma" className="abilities" src={ theme === 'light' ? figmaL : figma } alt="Habilidades" onClick={ handleClick } />
        <img name="GitHub" className="abilities" src={ theme === 'light' ? githubtL : githubt } alt="Habilidades" onClick={ handleClick } />
        <img name="Linux" className="abilities" src={ theme === 'light' ? linuxL : linux } alt="Habilidades" onClick={ handleClick } />
        <img name="HTML" className="abilities" src={ theme === 'light' ? htmlL : html } alt="Habilidades" onClick={ handleClick } />
        <img name="VSCode" className="abilities" src={ theme === 'light' ? vscodeL : vscode } alt="Habilidades" onClick={ handleClick } />
        <img name="Javascript" className="abilities" src={ theme === 'light' ? javascriptL : javascript } alt="Habilidades" onClick={ handleClick } />
        <img name="React" className="abilities" src={ theme === 'light' ? reactL : react } alt="Habilidades" onClick={ handleClick } />
        <img name="Redux" className="abilities" src={ theme === 'light' ? reduxL : redux } alt="Habilidades" onClick={ handleClick } />
      </section>
    </div>
  )
};

export default Habilidades;
