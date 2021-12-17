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
            <p>Meu nome é <b>Caio Lima</b>. Nascido e criado em Salvador-BA. Atualmente com 23 anos e estudando desenvolvimento web na <b>Trybe</b>.</p>
          </div>
        </div>
        <div className="bottom-description-container">
          <p>Desde criança sempre gostei de tecnologia. Desmontava meus brinquedos elétricos para saber como funcionava. Mas minha paixão sempre foram os <b>jogos de computador</b>.</p>
        </div>
      </div>
    </section>
    <section className="about-section bg2">
      <div className="main-content-section-2">
        <div className="description-container-2">
          <p>Aos 13 anos comecei a praticar <b>judô</b>. Lá eu consegui aprender sobre <b>constância e disciplina</b>. Minhas terças e quintas eram sagradas.</p>
          <p>Logo fui tomando gosto naquilo. Entrei em diversos campeonatos. <b>Descobri o real significado de saber perder e de comemorar as vitórias</b>.</p>
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
          <p>Atualmente estou cursando desenvolvimento web na Trybe! Durante o curso, aprendi mais sobre <b>trabalhos em grupo</b>, sobre <b>novas tecnologias</b>, sobre <b>aprender a aprender</b>. </p>
          <p>Nesse período de estudos fui desafiado várias vezes. Superei dificuldades que não achava que eu seria capaz. Com o passar do tempo descobri que basta apenas seguir o que já tinha aprendido no judô! Ter <b>foco, disciplina e consistência</b>.</p>
        </div>
      </div>
    </section>
  </div>
);

export default Sobre;
