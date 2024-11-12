import React from 'react';
import Countdown from 'react-countdown';
import '../styles/countdown.css';

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <span>¡El evento ha comenzado!</span>;
  } else {
    return (
      <div className="countdown">
        <h2>Cuenta regresiva para el gran festejo</h2>
        <div className="countdown-container">
          <div className="countdown-item">
            {days}
            <span className="countdown-label">Días</span>
          </div>
          <div className="countdown-item">
            {hours}
            <span className="countdown-label">Horas</span>
          </div>
          <div className="countdown-item">
            {minutes}
            <span className="countdown-label">Minutos</span>
          </div>
          <div className="countdown-item">
            {seconds}
            <span className="countdown-label">Segundos</span>
          </div>
        </div>
      </div>
    );
  }
};

const CountdownComponent = ({ targetDate }) => (
  <Countdown date={targetDate} renderer={renderer} />
);

export default CountdownComponent;
