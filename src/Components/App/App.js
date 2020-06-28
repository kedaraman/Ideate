import React, { useState, useEffect } from 'react';
import ApiService from '../../MiddleTier/ApiService';
import logo from '../../logo.svg';
import msLogo from '../../assets/microsoft_logo.png'
import SpeechToText from '../Pages/SpeechToText';
import LandingPage from '../Pages/LandingPage';
import './App.css';

const apiService = new ApiService();

function App() {
  const [currentTime, setCurrentTime] = useState(0);
  const [timeError, setTimeError] = useState(null);

  const [currentMessage, setCurrentMessage] = useState(0);
  const [messageError, setMessageError] = useState(null);

  useEffect(() => {
    apiService.getTime()
      .then(res => {
        const data = res.data;
        const time = data['time']
        setCurrentTime(time);
        console.log(currentTime);
      })
      .catch(error => {
        setTimeError(error);
        console.log(timeError);
      })
  }, []);

  useEffect(() => {
    apiService.getBase()
      .then(res => {
        const data = res.data;
        console.log(data)
        const message = data['message']
        setCurrentMessage(message);
      })
      .catch(error => {
        setMessageError(error);
        setMessageError(messageError);
      })
  }, []);
  
  return (
    <div className="App">
      <LandingPage />
      {/* <header className="App-header">
        <img src={msLogo} className="App-logo" alt="logo" />
        <p>
          Wow look a spinning Microsoft logo
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=oHg5SJYRHA0"
          target="_blank"
          rel="noopener noreferrer"
        >
          What's this
        </a>
        <SpeechToText/>
        <p>The current time is {currentTime}</p>
        <p>The baseline message is {currentMessage}</p>
      </header> */}
    </div>
  );
}

export default App;
