import React from 'react';
import { useState } from 'react';
import ListOfClicks from './ListOfClicks.jsx';
import WarningNotUsed from './WarningNotUsed.jsx';

const Inicial = 0;

const INITIAL = {
  left: Inicial,
  right: Inicial,
  mensaje: 'Mensaje number 1',
};

const DoubleButton = () => {
  const [counters, setCounter] = useState(INITIAL);

  const [clic, setClic] = useState([]);

  const handleClickLeft = (e) => {
    setCounter({
      ...counters,
      left: counters.left + 1,
    });
    setClic([...clic, 'L']);
  };

  const handleClickRight = () => {
    setCounter({
      ...counters,
      right: counters.right + 1,
    });
    setClic([...clic, 'R']);
  };

  return (
    <div>
      <h1>{counters.left}</h1>
      <button onClick={handleClickLeft}>Sumar Arriba</button>
      <button onClick={handleClickRight}>Sumar Abajo</button>
      <h1>{counters.right}</h1>
      <h2>haz hecho {clic.length} clicks</h2>
      <h3>{counters.mensaje}</h3>
      <h4>{clic.join(', ')}</h4>
      {clic.length === 0 ? <WarningNotUsed /> : <ListOfClicks clic={clic} />}
    </div>
  );
};

export default DoubleButton;
