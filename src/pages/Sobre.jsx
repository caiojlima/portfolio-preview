import React from 'react';
import Nav from '../components/Nav';
import foto1 from '../images/foto_inicio.svg';
import foto2 from '../images/foto_meio.svg';
import foto3 from '../images/foto_final.svg'
import '../styles/Sobre.css';

const Sobre = () => (
  <div>
    <Nav />
    <section className="about-section">
      <div className="title-container margin-adjustment">
      <h1>Sobre</h1>
      </div>
      <div className="content-section-container">
        <div className="initial-content">
          <div className="about-img-container">
            <img src={ foto1 } alt="Foto de Caio" />
          </div>
          <div className="description-container-about">
            <p>Meu nome é Caio Lima. Nascido e criado em Salvador-BA. Atualmente com 23 anos e estudando desenvolvimento web na Trybe.</p>
          </div>
        </div>
        <div className="bottom-description-container">
          <p>Desde criança sempre gostei de tecnologia. Desmontava meus brinquedos elétricos pra saber como funcionava. Mas minha paixão sempre foram os jogos de computador.</p>
        </div>
      </div>
    </section>
    <section className="about-section bg2">
      <div className="main-content-section-2">
        <div className="description-container-2">
          <p>Aos 13 anos entrei comecei a praticar judô. Lá eu consegui aprender sobre constância e disciplina. Minha terça e quinta à noite eram sagradas.</p>
          <p>Logo fui tomando gosto naquilo. Entrei em diversos campeonatos. Descobrir o real significado de saber perder e de comemorar as vitórias.</p>
        </div>
        <div className="description-img-container">
          <img src={ foto2 } alt="Foto Caio Judoca" />
        </div>
      </div>
    </section>
    <section className="about-section">
      <div className="main-content-section-3">
        <div className="description-img-container-3">
          <img src={ foto3 } alt="Foto Caio Trybe" />
        </div>
        <div className="description-container-3">
          <p>Atualmente estou cursando desevolvimento web na Trybe! Durante o curso, aprendi mais sobre trabalhos em grupo, sobre novas tecnologias, sobre aprender a aprender. </p>
          <p>Nesse periodo de estudos fui desafiado várias vezes. Superei dificuldades que não achava que eu seria capaz. Com o passar do tempo descobri que basta apenas seguir o que já tinha aprendido no judô! Ter foco, disciplina e consistência.</p>
        </div>
      </div>
    </section>
  </div>
);

export default Sobre;
