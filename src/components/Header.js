import React from 'react';
import logo from '../logo.svg'; // importing logo from src folder
import Title from './Title.js';
import Description from './Description.js';

const header = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <Title />
      <Description />
    </header>
  );
}

export default header;