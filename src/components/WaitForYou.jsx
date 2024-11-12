import React from 'react';
import '../styles/waitforyou.css';
import vicenteImage from '../assets/vicentefinal.png';

const WaitForYouSection = () => (
    <section className="wait-for-you">
        <h2 className="waiting-message">¡Te esperamos!</h2>
        <h3>Para pasar un momento hermoso con todos mis seres queridos</h3>
        <img src={vicenteImage} alt="Vicente" className="vicente-img" />
    </section>
);

export default WaitForYouSection;
