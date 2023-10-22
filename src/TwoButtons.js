import React, { useState } from 'react';
import App from './App';

function TwoButtons() {
  const [button1Clicks, setButton1Clicks] = useState(0);
  const [button2Clicks, setButton2Clicks] = useState(0);

  const handleButton1Click = () => {
    // Perform any data tracking or actions when Button 1 is clicked
    setButton1Clicks(button1Clicks + 1);
  };

  const handleButton2Click = () => {
    // Perform any data tracking or actions when Button 2 is clicked
    setButton2Clicks(button2Clicks + 1);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
      <button style={{ marginRight: '16px' }} onClick={handleButton1Click}>
        Button 1 (Clicked {button1Clicks} times)
      </button>
      <button onClick={handleButton2Click}>
        Button 2 (Clicked {button2Clicks} times)
      </button>
    </div>
  );
}

export default TwoButtons;
