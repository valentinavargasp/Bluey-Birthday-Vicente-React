import React from 'react'
import '../styles/ubication.css'
import blueyImage from '../assets/balloon.png';

export const Ubication = () => {
    return (
        <div className="map-container">
            <div>
                <h2>Ubicación</h2>
                <h3>Calle 21 765 entre 14 y 16</h3>
                <h4>Cómo llegar</h4>
            </div>
            {/* iframe de Google Maps */}
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1357.2876793260323!2d-65.43899166210804!3d-36.21807574048294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1ses-419!2sar!4v1731355759587!5m2!1ses-419!2sar"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
            ></iframe>
            <div className="image-container">
                <img src={blueyImage} alt="Bluey" className="bluey-img" />
            </div>
        </div>
    )
}
