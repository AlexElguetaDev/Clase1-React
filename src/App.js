import React from 'react';
import { useState } from 'react';
import './style.css';
import Counter from './components/Counter.jsx';
import DoubleButton from './components/DoubleButton.jsx';

export default function App() {
  const [contador, setContador] = useState(0);
  const par = 'ES PAR';
  const noPar = 'NO ES PAR';

  const sumar = () => {
    setContador(contador + 1);
  };

  const reset = () => {
    setContador(0);
  };

  const isPar = (x) => {
    if (x % 2 === 0) {
      return par;
    } else {
      return noPar;
    }
  };
  return (
    <div>
      <h1>{contador}</h1>
      <button onClick={sumar}>Aumentar</button>
      <button onClick={reset}>Volver a 0</button>
      <h3>{isPar(contador)}</h3>
      <Counter numero={contador} />
      <hr />
      <DoubleButton />
      <hr />
    </div>
  );
}
