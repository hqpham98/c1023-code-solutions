import { useState } from 'react';
import './styles.css';

export function ToggleSwitch() {
  const [power, setPower] = useState(false);
  return (
    <>
      <div className="container" onClick={() => setPower(!power)}>
        <div className={power ? 'wrapper green' : 'wrapper grey'}></div>
        <div className={power ? 'circle on' : 'circle off'}></div>
      </div>
      <p>{power ? 'ON' : 'OFF'}</p>
    </>
  );
}
