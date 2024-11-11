
import React from 'react';
import vicenteImage from '../assets/vicente.png';
import '../styles/waitforyou.css';

const WaitForYouSection = () => (
    <section className="wait-for-you">
        <h2 className="waiting-message">¡Te esperamos! 🎉</h2>
        <div className="vicente-image-container">
            <img src={vicenteImage} alt="Vicente" className="vicente-img" />
        </div>
    </section>
);

export default WaitForYouSection;
