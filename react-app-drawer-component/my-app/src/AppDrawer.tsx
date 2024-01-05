import './AppDrawer.css';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';

type DrawerProps = {
  heading: string;
  items: string[];
  onSelect: (x: string) => void;
};

type ItemProps = {
  item: string;
  setOpen: (x: boolean) => void;
  onSelect: (x: string) => void;
};

export function AppDrawer({ heading, items, onSelect }: DrawerProps) {
  const [open, setOpen] = useState(false);

  const menuItems = [];
  for (let i = 0; i < items.length; i++) {
    menuItems.push(
      <MenuItem key={i} item={items[i]} setOpen={setOpen} onSelect={onSelect} />
    );
  }
  return (
    <div>
      <div
        className={open ? 'overlay' : 'hidden'}
        onClick={() => setOpen(false)}></div>
      <div className={open ? 'app-drawer' : 'app-drawer close'}>
        <h1>{heading}</h1>
        {menuItems}
      </div>
      <div>
        <FaBars className="menu-button" onClick={() => setOpen(true)} />
      </div>
    </div>
  );
}

function MenuItem({ item, setOpen, onSelect }: ItemProps) {
  function handleClick() {
    setOpen(false);
    onSelect(item);
  }
  return (
    <div className="menu-item" onClick={handleClick}>
      <button>{item}</button>
    </div>
  );
}
