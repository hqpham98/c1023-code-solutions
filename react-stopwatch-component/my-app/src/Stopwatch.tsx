import { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import { FaPause } from 'react-icons/fa';
import './Stopwatch.css';

export function Stopwatch() {
  const [count, setCount] = useState(0);
  const [play, setPlay] = useState(false);
  const [intervalID, setIntervalID] = useState<NodeJS.Timeout>();
  function handleClick() {
    setPlay(!play);
    if (!play) {
      setIntervalID(setInterval(() => setCount((prev) => prev + 1), 1000));
    } else {
      clearInterval(intervalID);
    }
  }
  function handleReset() {
    if (!play) {
      setCount(0);
    }
  }
  return (
    <>
      <div className="circle" onClick={handleReset}>
        <p>{count}</p>
      </div>
      {play ? (
        <FaPause onClick={handleClick} />
      ) : (
        <FaPlay onClick={handleClick} />
      )}
    </>
  );
}
