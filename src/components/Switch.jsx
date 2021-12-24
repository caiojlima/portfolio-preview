import React, { useState, useEffect, useContext } from "react";
import GeralContext from "../context/GeralContext";
import '../styles/Switch.css';

const Switch = () => {
  const { setState, theme } = useContext(GeralContext);
  const INITIAL_STATE = (theme === 'light') ? false : true;
  const [checked, setChecked] = useState(INITIAL_STATE);

  const toggleSwitch = () => {
    setChecked((checked)? false : true);
  }

  useEffect(() => {
    const body = document.getElementsByTagName('body')[0];
    const sectionAbout = document.getElementsByClassName('bg2')[0];
    if (!checked) {
      body.style.backgroundColor = 'white';
      body.style.color = 'black';
      if(sectionAbout) {
        sectionAbout.style.backgroundColor = '#f9f9f9';
      }
      setState({ theme: 'light' });
    } else {
      body.style.backgroundColor = 'black';
      body.style.color = 'white';
      if(sectionAbout) {
        sectionAbout.style.backgroundColor = '#0c0c0c'
      }
      setState({ theme: 'dark' });
    }
  },[checked, setState])

  return(
  <label className="switch">
    <input onChange={ toggleSwitch } type="checkbox" checked={ checked } />
    <span className="slider round"></span>
  </label>
  );
};

export default Switch;
