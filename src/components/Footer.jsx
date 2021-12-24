import React, { useContext } from 'react';
import GeralContext from '../context/GeralContext';
import github from '../images/github.svg';
import githubL from '../images/githubL.svg';
import linkedin from '../images/linkedin.svg';
import linkedinL from '../images/linkedinL.svg';
import '../styles/Footer.css';

const Footer = () => {
  const { theme } = useContext(GeralContext);

  return (
    <footer className="links-container">
    <div>
      <a href="https://github.com/caiojlima" target="_blank" rel="noreferrer">
        <img src={ theme === 'light' ? githubL : github } alt="Link para Github" />
      </a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/caio-limah/" target="_blank" rel="noreferrer">
        <img src={ theme === 'light' ? linkedinL : linkedin } alt="Link para Linkedin" />
      </a>
    </div>
  </footer>
  ); 
};

export default Footer;
