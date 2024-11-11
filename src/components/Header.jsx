import React from 'react';
import bluey2 from '../assets/bluey2.png'
import '../styles/header.css'

const Header = () => (
  <header className="header full-height-section">
    <h1>Este capitulo de Bluey se llama...</h1>
    <h2>¡Vicente cumple 2 años!</h2>
    <img className="blueyPortada" src={bluey2} alt="Bluey Portada" />
  </header>
);

export default Header;
