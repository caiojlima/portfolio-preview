import React from 'react';
import '../styles/Theme.css';

const Theme = () => (
  <div className="theme-container">
    <label className="switch">
      <input type="checkbox" />
      <span className="slider round" />
    </label>
    <span className="theme">Tema</span>
  </div>
);

export default Theme;
