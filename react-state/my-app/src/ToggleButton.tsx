import { useState } from 'react';

type Props = {
  text: string;
  color: string;
};

export function ToggleButton({ text, color }: Props) {
  const [clicked, setClicked] = useState(true);

  function handleClick() {
    setClicked(!clicked);
  }

  return (
    <button
      onClick={handleClick}
      style={{ backgroundColor: clicked ? color : 'white' }}>
      {text}
    </button>
  );
}
