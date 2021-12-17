import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Popout.css';

const description = (name) => {
  switch(name) {
  case 'Jest':
    return 'Jest é um poderoso Framework de Testes em JavaScript com um foco na simplicidade.';
  case 'RTL':
    return 'React Testing Library é um conjunto de utilitários que permitem testar componentes React sem depender dos detalhes de implementação.';
  case 'Git':
    return 'Git é um sistema de controle de versão de arquivos. Através deles podemos desenvolver projetos na qual diversas pessoas podem contribuir simultaneamente no mesmo.';
  case 'GitHub':
    return 'GitHub é uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. É como uma plataforma social colaborativa, onde programadores e empresas colocam seus projetos para o desenvolvimento do código.';
  case 'CSS':
    return 'O CSS tem a tarefa de separar o conteúdo do site de sua apresentação visual, alterando elementos como cor do texto, fonte e espaçamento entre blocos, assim como todo o aspecto estético de uma página.';
  case 'Figma':
    return 'Figma é um editor online de design gráfico focado na criação de interfaces gráficas e experiência de usuário com ênfase colaborativa. ';
  case 'Linux':
    return 'Linux é um Sistema Operacional, assim como o Windows e o Mac OS, que possibilita a execução de programas em um computador e outros dispositivos. Linux pode ser livremente modificado e distribuído.';
  case 'HTML':
    return 'O HTML é uma linguagem para marcação de hipertexto, isso é, para marcação de links e demais elementos em uma página web. ';
  case 'VSCode':
    return 'O Visual Studio Code (VS Code) é um editor de código de código aberto desenvolvido pela Microsoft.';
  case 'Javascript':
    return 'JavaScript é uma linguagem de programação de alto nível criada, a princípio, para ser executada em navegadores e manipular comportamentos de páginas web.';
  case 'React':
    return 'O React é a biblioteca mais popular do JavaScript e é usada para construir uma interface de usuário (IU). Ela oferece uma resposta excelente para o usuário adicionar comandos usando um novo método de renderizar sites.';
  case 'Redux':
    return 'Redux é uma biblioteca para armazenamento de estados de aplicações JavaScript.';
  default:
    return;
  };
}

const Popout = ({ name, callback }) => (
  <div onClick={ callback } className="popout-container">
    <div className="popout">
      <h2>{ name  }</h2>
      <div className="popout-p-container">
        <p>{ description(name) }</p>
      </div>
    </div>
  </div>
);

Popout.propTypes = {
  name: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};

export default Popout;
