// Stopwatch.js
import React, { useState } from 'react';

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const handleStart = () => {
    setIsRunning(true);
    const startTime = Date.now() - time;
    setInterval(() => {
      setTime(Date.now() - startTime);
    }, 1000);
  };

  const handlePause = () => {
    setIsRunning(false);
    clearInterval();
  };

  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
    clearInterval();
  };

  const formatTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <div>{formatTime(time)}</div>
      {!isRunning ? (
        <button onClick={handleStart}>Start</button>
      ) : (
        <button onClick={handlePause}>Pause</button>
      )}
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Stopwatch;
