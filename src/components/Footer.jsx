import React from 'react';
import github from '../images/github.svg';
import linkedin from '../images/linkedin.svg';
import '../styles/Footer.css';

const Footer = () => (
  <footer className="links-container">
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
  </footer>
);

export default Footer;
