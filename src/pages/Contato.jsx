import React from 'react';
import Nav from '../components/Nav';
import github from '../images/github.svg';
import linkedin from '../images/linkedin.svg';
import email from '../images/email.svg'
import '../styles/Contato.css';

const Contato = () => (
  <div>
    <Nav />
    <div className="title-container">
      <h1>Contato</h1>
    </div>
    <section className="links-container">
      <div>
        <a href="https://github.com/caiojlima" target="_blank" rel="noreferrer">
          <img src={ github } alt="Link para Github" />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/caio-limah/" target="_blank" rel="noreferrer">
          <img src={ linkedin } alt="Link para Linkedin" />
        </a>
      </div>
    </section>
    <section className="links-container email-section">
    <div>
        <a href="mailto:caiojlimah@gmail.com" target="_blank" rel="noreferrer">
          <img src={ email } alt="Link para Mensagem de Email" />
        </a>
      </div>
    </section>
  </div>
);

export default Contato;
