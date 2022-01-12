import React from 'react';
import Nav from '../components/Nav';
import aplication from '../images/aplication.gif';
import trivia from '../images/trivia.gif';
import crypto from '../images/crypto_curr.gif';
import ProjectCard from '../components/ProjectCard';
import '../styles/Projetos.css';

const Projetos = () => (
  <div>
    <Nav />
    <div className="title-container">
      <h1>Projetos</h1>
    </div>
    <div className="cards-container">
      <ProjectCard
      name="Trivia Trybe"
      img={ trivia }
      description="Projeto em grupo da Trybe onde pude evoluir minhas soft skills enquanto aprendia a utilizar o Redux e o Redux Thunk."
      url="https://triviatrybe.herokuapp.com/"
      git="https://github.com/caiojlima/trivia"
      />
      <ProjectCard
      name="Front-End Online Store"
      img={ aplication }
      description="Projeto desenvolvido durante o curso da Trybe. Nele eu consegui me aprofundar no React, no RTL e também nas requisições de API."
      url="https://online-store-caiojlima.vercel.app/"
      git="https://github.com/caiojlima/online-store"
      />
      <ProjectCard
      name="Crypto Curr"
      img={ crypto }
      description="Projeto em grupo do final do módulo de fundamentos do desenvolvimento web. Foram utilizadas duas API's, duas bibliotecas e bastante HTML, CSS e Javascript!"
      url="https://caiojlima.github.io/crypto_curr/"
      git="https://github.com/caiojlima/crypto_curr"
      />
    </div>
  </div>
);

export default Projetos;
