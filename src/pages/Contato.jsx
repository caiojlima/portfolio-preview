import React, { useState, useContext } from 'react';
import Nav from '../components/Nav';
import GeralContext from '../context/GeralContext';
import github from '../images/github.svg';
import githubL from '../images/githubL.svg';
import linkedin from '../images/linkedin.svg';
import linkedinL from '../images/linkedinL.svg';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import '../styles/Contato.css';

const Contato = () => {
  const INITAL_STATE = { name: '', email: '', message: '' };
  const [ state, setState ] = useState(INITAL_STATE);

  const handleChange = ({ target: { id, value } }) => {
    setState({ ...state, [id]: value });
  };

  const { name, message, email } = state;

  const { theme } = useContext(GeralContext);

  const sendEmail = (event) => {
    event.preventDefault();
    if (!name || !message || !email ) return Swal.fire({
      title: 'Atenção!',
      text: 'Preencha todos os campos!',
      icon: 'warning',
      confirmButtonText: 'Okay'
    });
    if (!email.includes('@' && '.com')) return Swal.fire({
      title: 'Atenção!',
      text: 'Digite um email válido!',
      icon: 'warning',
      confirmButtonText: 'Okay'
    });;

    const templateId = 'template_jvtsahm';
    const userId = 'user_xYY4HfEL7SQqPBHheDFKB';
    const serviceId = 'service_uotbtmf';
    const messages = {
      from_name: name,
      message: message,
      reply_to: email,
    };

    emailjs.send(serviceId, templateId, messages, userId)
      .then(() => { Swal.fire({
        title: 'Sucesso!',
        text: 'Mensagem enviada com sucesso!',
        icon: 'success',
        confirmButtonText: 'Okay'
      }); })
      .catch(() => { Swal.fire({
        title: 'Erro!',
        text: 'Falha ao enviar mensagem!',
        icon: 'error',
        confirmButtonText: 'Okay'
      }); });

    setState(INITAL_STATE);
  }

  return (
    <div>
      <Nav />
      <div className="title-container">
        <h1>Contato</h1>
      </div>
      <section className="links-container">
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
      </section>
      <section className="email-section">
        <div>
          <h3>Envie uma mensagem!</h3>
        </div>
        <form onSubmit={ sendEmail }>
          <label htmlFor="name">
            Nome:
            <input type="text" id="name" placeholder="Digite seu nome..." onChange={ handleChange } value={ name } />
          </label>
          <label htmlFor="email">
            Email:
            <input type="text" id="email" placeholder="Digite seu email..." onChange={ handleChange } value={ email } />
          </label>
          <label htmlFor="message">
            Mensagem:
            <textarea type="text" id="message" rows="6" placeholder="Digite sua mensagem..." onChange={ handleChange } value={ message } />
          </label>
          <button className="sub-btn" type="submit">Enviar!</button>
        </form>
      </section>
    </div>
  );
};

export default Contato;
