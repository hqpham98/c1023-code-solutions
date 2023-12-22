import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { CustomButton } from './CustomButton';

function App() {
  const [count, setCount] = useState(0);

  function handleCustomClick(text: string, color: string): void {
    window.alert(`Clicked ${color} ${text} button`);
  }
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <CustomButton
        text="Test1"
        color="Red"
        onCustomClick={handleCustomClick}
      />
      <CustomButton
        text="Test2"
        color="Blue"
        onCustomClick={handleCustomClick}
      />
      <CustomButton
        text="Test3"
        color="Green"
        onCustomClick={handleCustomClick}
      />
    </>
  );
}

export default App;
