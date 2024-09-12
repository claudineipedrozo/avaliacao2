import React, { useState } from 'react';
import styles from './App.module.css';
import ColorPanel from './components/ColorPanel';


const App = () => {
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
          <label htmlFor="red">Red</label>
          <input
            id="red-input"
            name="red"
            type="range"
            min={0}
            max={255}
            value={red}
            onChange={(e) => setRed(Number(e.target.value))}
          />
          <label htmlFor="green">Green</label>
          <input
            id="green-input"
            name="green"
            type="range"
            min={0}
            max={255}
            value={green}
            onChange={(e) => setGreen(Number(e.target.value))}
          />
          <label htmlFor="blue">Blue</label>
          <input
            id="blue-input"
            name="blue"
            type="range"
            min={0}
            max={255}
            value={blue}
            onChange={(e) => setBlue(Number(e.target.value))}
          />
          <label htmlFor="alpha">Alpha</label>
          <input
            id="alpha-input"
            name="alpha"
            type="range"
            min={0}
            max={1}
            value={alpha}
            onChange={(e) => setAlpha(Number(e.target.value))}
          />
      </div>
    </div>
  );
};

export default App;