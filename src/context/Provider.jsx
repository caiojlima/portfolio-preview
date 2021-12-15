import React, { useState } from 'react';
import PropTypes from 'prop-types';
import NavContext from './NavContext';

const Provider = ({ children }) => {
  const [navState, setNavState] = useState('Início');

  const context = {
    navState,
    setNavState,
  };

  return (
    <NavContext.Provider value={ context }>
      { children }
    </NavContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
