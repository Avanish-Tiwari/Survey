import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Welcome() {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate('/quiz');
  };

  return (
    <div className='flex flex-col justify-around grow-1'>
      <h1>Welcome to the Quiz App</h1>
      <p>
        This is a simple quiz app built with React, React Router, and Zustand.
      </p>
      <button onClick={handleStartClick}>Start</button>
    </div>
  );
}
