import React, { useState } from 'react';
import styles from './App.module.css';
import ColorPanel from './components/ColorPanel';


const App: React.FC = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const [alpha, setAlpha] = useState(1);

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <ColorPanel red={red} green={green} blue={blue} alpha={alpha} />
      </div>
      <div className={styles.input}>
      <div>
        <input
          type="range"
          min={0}
          max={255}
          value={red}
          onChange={(e) => setRed(Number(e.target.value))}
        />        
      </div>
      
      <div>
        <input
          type="range"
          min={0}
          max={255}
          value={green}
          onChange={(e) => setGreen(Number(e.target.value))}
        />        
      </div>
      
      <div>
        <input
          type="range"
          min={0}
          max={255}
          value={blue}
          onChange={(e) => setBlue(Number(e.target.value))}
        />        
      </div>
      
      <div>
        <input
          type="range"
          min={0}
          max={255}
          value={alpha}
          onChange={(e) => setAlpha(Number(e.target.value))}
        />        
      </div>
      </div>
    </div>
  );
};

export default App;