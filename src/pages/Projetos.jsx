import React from 'react';
import Nav from '../components/Nav';
import aplication from '../images/aplication.gif';
import trivia from '../images/trivia.gif';
import ProjectCard from '../components/ProjectCard';
import '../styles/Projetos.css';

const Projetos = () => (
  <div>
    <Nav />
    <div className="title-container">
      <h1>Projetos</h1>
    </div>
    <div className="cards-container">
      <a href="https://github.com/caiojlima/online-store" target="_blank" rel="noreferrer">
        <ProjectCard
        name="Front-End Online store"
        img={ aplication }
        description="Projeto desenvolvido durante o curso da Trybe. Nele eu consegui me aprofundar no React, no RTL e também nas requisições de API."
        />
      </a>
      <a href="https://github.com/caiojlima/trivia" target="_blank" rel="noreferrer">
        <ProjectCard
        name="Trivia Trybe"
        img={ trivia }
        description="Projeto em grupo da Trybe onde pude evoluir minhas soft skills enquanto aprendia a utilizar o Redux e o Redux Thunk."
        />
      </a>
      <a href="https://github.com/caiojlima/online-store" target="_blank" rel="noreferrer">
        <ProjectCard
        name="Front-End Online store"
        img={ aplication }
        description="Projeto desenvolvido durante o curso da Trybe. Nele eu consegui me aprofundar no React, no RTL e também nas requisições de API."
        />
      </a>
      <a href="https://github.com/caiojlima/trivia" target="_blank" rel="noreferrer">
        <ProjectCard
        name="Trivia Trybe"
        img={ trivia }
        description="Projeto em grupo da Trybe onde pude evoluir minhas soft skills enquanto aprendia a utilizar o Redux e o Redux Thunk."
        />
      </a>
      <a href="https://github.com/caiojlima/online-store" target="_blank" rel="noreferrer">
        <ProjectCard
        name="Front-End Online store"
        img={ aplication }
        description="Projeto desenvolvido durante o curso da Trybe. Nele eu consegui me aprofundar no React, no RTL e também nas requisições de API."
        />
      </a>
      <a href="https://github.com/caiojlima/trivia" target="_blank" rel="noreferrer">
        <ProjectCard
        name="Trivia Trybe"
        img={ trivia }
        description="Projeto em grupo da Trybe onde pude evoluir minhas soft skills enquanto aprendia a utilizar o Redux e o Redux Thunk."
        />
      </a>
      <a href="https://github.com/caiojlima/online-store" target="_blank" rel="noreferrer">
        <ProjectCard
        name="Front-End Online store"
        img={ aplication }
        description="Projeto desenvolvido durante o curso da Trybe. Nele eu consegui me aprofundar no React, no RTL e também nas requisições de API."
        />
      </a>
      <a href="https://github.com/caiojlima/trivia" target="_blank" rel="noreferrer">
        <ProjectCard
        name="Trivia Trybe"
        img={ trivia }
        description="Projeto em grupo da Trybe onde pude evoluir minhas soft skills enquanto aprendia a utilizar o Redux e o Redux Thunk."
        />
      </a>
      <a href="https://github.com/caiojlima/online-store" target="_blank" rel="noreferrer">
        <ProjectCard
        name="Front-End Online store"
        img={ aplication }
        description="Projeto desenvolvido durante o curso da Trybe. Nele eu consegui me aprofundar no React, no RTL e também nas requisições de API."
        />
      </a>
      <a href="https://github.com/caiojlima/trivia" target="_blank" rel="noreferrer">
        <ProjectCard
        name="Trivia Trybe"
        img={ trivia }
        description="Projeto em grupo da Trybe onde pude evoluir minhas soft skills enquanto aprendia a utilizar o Redux e o Redux Thunk."
        />
      </a>
    </div>
  </div>
);

export default Projetos;
