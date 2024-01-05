import './App.css';
import logo from '../../hylian-emblem.svg';
import { useState } from 'react';
import { AppDrawer } from './AppDrawer';

function App() {
  const [selectedItem, setSelectedItem] = useState('');

  const menuItems = [
    'The Legend of Zelda',
    'A Link to the Past',
    'Ocarina of Time',
    'The Wind Waker',
    'Breath of the Wild',
  ];

  return (
    <>
      <div>
        <AppDrawer
          heading="Choose a Game"
          items={menuItems}
          onSelect={setSelectedItem}
        />
      </div>
      <div className="row">{selectedItem}</div>
      <div className="row">
        <img src={logo} />
      </div>
    </>
  );
}

export default App;
