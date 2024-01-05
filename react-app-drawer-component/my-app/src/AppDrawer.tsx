import './AppDrawer.css';

type MenuProps = {
  items: string[];
};

type ItemProps = {
  item: string;
};

export function AppDrawer({ items }: MenuProps) {
  return <MenuContainer items={items} />;
}

function MenuContainer({ items }: MenuProps) {
  return <MenuButton item={items[0]} />;
}

function MenuButton({ item }: ItemProps) {
  return <button>{item}</button>;
}
