import React from 'react';
import ferramentas from '../images/ferramentas.svg';
import caio from '../images/perfil.svg';
import Nav from '../components/Nav';
import '../styles/Inicio.css';

const Inicio = () => (
  <div>
    <Nav />
    <section className="welcome-container">
      <div className="profile-image-container">
        <a href="https://www.linkedin.com/in/caio-limah/" target="_blank" rel="noreferrer">
          <img className="profile-image" src={ caio } alt="Foto de Caio Lima" />
        </a>
      </div>
      <div className="greetins-container">
        <p className="greetings">Olá! Meu nome é Caio Lima e seja muito bem vindo(a) ao meu portifólio!</p>
      </div>
    </section>
    <article className="intro-article-container">
    <p className="intro-article">Sou programador FullStack formado pela Trybe, gosto de aprender novas tecnologias e trocar conhecimento! Nesse portifólio você vai encontrar um pouco da minha história, meus projetos realizados e minhas informações de contato.</p>
    </article>
    <section>
      <div className="tools-container">
        <img src={ ferramentas } alt="Imagem com ferramentas" />
      </div>
    </section>
  </div>
);

export default Inicio;
