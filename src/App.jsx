import './styles/index.css';
import React from 'react';
import Header from './components/Header';
import Countdown from './components/Countdown';
import InvitationDetails from './components/InvitationDetails';
import RSVPForm from './components/RSVPForm';
import BackgroundMusic from './components/BackgroundMusic';
import Footer from './components/Footer';
import WaitForYouSection from './components/WaitForYou';
import { Ubication } from './components/Ubication';

const App = () => {
  const targetDate = new Date('2024-11-18T17:00:00'); // Fecha objetivo para la cuenta regresiva

  return (
    <div className="app">
      <BackgroundMusic />
      <div className="full-height-section">
        <Header />
        <Countdown targetDate={targetDate} />
      </div>
      <InvitationDetails />
      <Ubication />
      <RSVPForm />
      <WaitForYouSection />
      <Footer />
    </div>
  );
};

export default App;
