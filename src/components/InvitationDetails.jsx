import React from 'react';
import blueyImage from '../assets/birthday.png';
import '../styles/invitationdetails.css';

const InvitationDetails = () => (
  <section className="invitation-details">
    <div className="invitation-header">
      <h2>18 de noviembre</h2>
      <div className='horario'>
        <h3>Hora</h3>
        <h4>17:00 PM</h4>
      </div>

      <img src={blueyImage} alt="Bluey" className="bluey-img" />
    </div>
  </section>
);

export default InvitationDetails;
