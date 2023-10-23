import React, { useState, useEffect } from 'react';

function WinnerDisplay({ winner }) {
  return (
    <div style={{ marginLeft: '25%', marginRight: '25%' }}>
      <p id="rainbow-text">{winner}</p>
    </div>
  );
}

function TwoButtons() {
  const [button1Clicks, setButton1Clicks] = useState(0);
  const [button2Clicks, setButton2Clicks] = useState(0);
  const [winner, setWinner] = useState();

  useEffect(() => {
    // This code will run whenever either button1Clicks or button2Clicks change.
    if (button1Clicks > button2Clicks) {
      setWinner("Button 1 is Winning!");
    } else if (button1Clicks < button2Clicks) {
      setWinner("Button 2 is Winning!");
    } else {
      setWinner("It's a tie!");
    }
  }, [button1Clicks, button2Clicks]);

  const handleButton1Click = () => {
    setButton1Clicks(button1Clicks + 1);
  };

  const handleButton2Click = () => {
    setButton2Clicks(button2Clicks + 1);
  };

  return (
    <div style={{ justifyContent: 'center', alignItems: 'center' }}>
      <div>
        <WinnerDisplay winner={winner} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <button onClick={handleButton1Click}>
            <img
              src="https://ih1.redbubble.net/image.2364200053.6454/flat,750x,075,f-pad,750x1000,f8f8f8.jpg"
              alt="Button 1"
              style={{ width: '100%', height: '100%', borderRadius: '10%' }}
            />
          </button>
          <p>Button 1 Clicked {button1Clicks} times</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <button onClick={handleButton2Click}>
            <img
              src="https://cdn-useast1.kapwing.com/collections/image_63768d4f967d090025baad29_245172.jpeg?Expires=1697947211&GoogleAccessId=dev-sa-videoprocessing%40kapwing-dev.iam.gserviceaccount.com&Signature=q8g4djCTJGV4eu8JfnU%2FCjjK0fT%2F3CVv6sPItL7QkHaUvFz8m5qYZ80df1lKQPlxsMilPp6hteOiOkSgrUIkvdrMRs1ktAuPI2r76E%2Fnly6SG3O2IpfPyA0A6Ya1i7GREZUpSlF8ntNaazwLAmlzSLcJwpkX5Qcag8OhWYG4YkW8VOI6HJoeJx1lUn7MvmvYwj5MaVrW15byfNCwxPAtcF9wCjMW4zIqFj1aekRfp73iLtyCejwnSEWAqseA%2BdBVQ3lPbgLSd5wK4NjN8vvILk04uSnX9GF%2BZWCYYRF8eveYlBMag%2Ft58ONWn48ziYpW1Fm8%2BEghDUykrbovsBDZXw%3D%3D"
              alt="Button 2"
              style={{ width: '100%', height: '100%', borderRadius: '10%' }}
            />
          </button>
          <p>Button 2 Clicked {button2Clicks} times</p>
        </div>
      </div>
    </div>
  );
}

export default TwoButtons;
