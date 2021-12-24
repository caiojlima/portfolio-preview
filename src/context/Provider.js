import React, { useState } from 'react';
import PropTypes from 'prop-types';
import GeralContext from './GeralContext';

const Provider = ({ children }) => {
  const [ state, setState ] = useState({ theme: 'dark' });

  const CONTEXT = {
    ...state,
    setState,
  }

  return (
    <GeralContext.Provider value={ CONTEXT } >
      { children }
    </GeralContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
