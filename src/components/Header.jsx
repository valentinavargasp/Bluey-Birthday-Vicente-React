import React from 'react';
import vicenteImage from '../assets/vicente.png';
import '../styles/header.css'

const Header = () => (
  <header className="header ">
    <div>
    <h1>Este capitulo de Bluey se llama:</h1>
    <h2>Vicente</h2>
    <h3>¡cumple 2 añitos!</h3>
    </div>
    <div className="vicente-image-container">
            <img src={vicenteImage} alt="Vicente" className="vicente-img" />
        </div>
  </header>
);

export default Header;
