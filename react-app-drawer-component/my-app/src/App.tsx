import './App.css';
import { AppDrawer } from './AppDrawer';

function App() {
  const menuItems = [
    'The Legend of Zelda',
    'A Link to the Past',
    'Ocarina of Time',
    'The Wind Waker',
    'Breath of the Wild',
  ];
  return <AppDrawer items={menuItems} />;
}

export default App;
