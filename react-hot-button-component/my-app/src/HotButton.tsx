import { useState } from 'react';

type Props = {
  text: string;
};
export function HotButton({ text }: Props) {
  const [count, setCount] = useState(0);

  let color = 'black';

  if (count >= 18) {
    color = 'white';
  } else if (count >= 15) {
    color = 'yellow';
  } else if (count >= 12) {
    color = '#F6B26A';
  } else if (count >= 9) {
    color = '#E06666';
  } else if (count >= 6) {
    color = '#674EA7';
  } else if (count >= 3) {
    color = '#351C74';
  }

  return (
    <div>
      <button
        style={{
          backgroundColor: color,
          color: count >= 9 ? 'black' : 'white',
        }}
        onClick={() => setCount(count + 1)}>
        {text}
      </button>
      <p>Click Count: {count}</p>
    </div>
  );
}
