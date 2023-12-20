'use client'

import React, { useState } from 'react';

const Button = () => {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount(count + 1);
  };

  const boxStyle = {
    display: 'flex',
    border: '1px solid white',
    padding: '10px',
    margin: '20px 0',
  };

  const buttonContainerStyle = {
    ...boxStyle,
    marginRight: '10px',
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={buttonContainerStyle}>
        <button onClick={handleButtonClick} style={{ border: 'none', background: 'none', color: 'white' }}>
          Say Hi!
        </button>
      </div>
      <div style={boxStyle}>
        <p style={{ margin: 0, color: 'white' }}>{count}</p>
      </div>
    </div>
  );
};

export default Button;
