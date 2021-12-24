import React, { useState, useEffect } from "react";
import '../styles/Switch.css';

const Switch = () => {
  const INITIAL_STATE = (localStorage.getItem('theme') === 'light') ? false : true;
  const [checked, setChecked] = useState(INITIAL_STATE);

  const toggleSwitch = () => {
    setChecked((checked)? false : true);

  }

  useEffect(() => {
    const body = document.getElementsByTagName('body')[0];
    const sectionAbout = document.getElementsByClassName('bg2')[0];
    if (!checked) {
      body.style.backgroundColor = 'white';
      body.style.color = 'black'
      if(sectionAbout) {
        sectionAbout.style.backgroundColor = '#e9e9e9'
      }
      localStorage.setItem('theme', 'light')
    } else {
      body.style.backgroundColor = 'black';
      body.style.color = 'white';
      if(sectionAbout) {
        sectionAbout.style.backgroundColor = '#0c0c0c'
      }
      localStorage.setItem('theme', 'dark');
    }
  },[checked])

  return(
  <label className="switch">
    <input onChange={ toggleSwitch } type="checkbox" checked={ checked } />
    <span className="slider round"></span>
  </label>
  );
};

export default Switch;
