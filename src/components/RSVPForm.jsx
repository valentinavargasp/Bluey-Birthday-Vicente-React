import React, { useState } from 'react';
import '../styles/rsvpform.css'; 
import blueyImage from '../assets/bluey2.png';

const RSVPForm = () => {
  const [name, setName] = useState('');
  const [isAttending, setIsAttending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `¡Hola! Soy ${name}. 🥳 Confirmo que asistiré a la fiesta de Bluey 🐾 de Vicente 🎂🎈🎉`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.link/nn2buy?text=${encodedMessage}`;

    window.open(whatsappLink, '_blank');
  };

  return (
    <form onSubmit={handleSubmit} className="rsvp-form full-height-section">

      {/* Mensaje de bienvenida */}
      <div className="welcome-message">
        <h2>Confirmá tu asistencia</h2>
        <p>completá el formulario y haznos saber si
        podrás asistir a la fiesta de Vicente</p>
      </div>

      {/* Campos del formulario */}
      <div className='formulariosection'>
      <div className="form-fields">
        <label>
          Nombre:
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </label>

        <label>
          ¿Asistirás?
          <input 
            type="checkbox" 
            checked={isAttending} 
            onChange={(e) => setIsAttending(e.target.checked)} 
          />
        </label>
        <button type="submit" className="submit-btn">Confirmar</button>
      </div>

      <img src={blueyImage} alt="Bluey" className="bluey2" />

      </div>
    </form>
  );
};

export default RSVPForm;
