
import { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setSeconds(0);
    setIsActive(false);
  };

  return (
    <div className="timer-container">
      <h2>Temporizador</h2>
      <div className="timer-display">
        {seconds} segundos
      </div>
      <div className="timer-controls">
        <button 
          onClick={toggleTimer} 
          className={`timer-button ${isActive ? 'pause' : 'start'}`}
        >
          {isActive ? 'Pausar' : 'Iniciar'}
        </button>
        <button 
          onClick={resetTimer} 
          className="timer-button reset"
        >
          Reiniciar
        </button>
      </div>
    </div>
  );
};

export default Timer;