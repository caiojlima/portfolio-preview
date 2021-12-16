import React from 'react';
import PropTypes from 'prop-types';
import '../styles/ProjectCard.css';

const ProjectCard = ({ name, img, description }) => (
  <div className="card">
    <div className="card-title-container">
      <h2>{ name }</h2>
    </div>
    <div className="card-image-container">
      <img src={ img } alt={ `Gif do Projeto ${name}` } />
    </div>
    <div className="description-container">
      <p>{ description }</p>
    </div>
  </div>
);

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ProjectCard;
