import { SetStateAction } from 'react';

type Props = {
  count: number;
  index: number;
  setIndex: React.Dispatch<SetStateAction<number>>;
};

export function Indicators({ count, index, setIndex }: Props) {
  const buttons = [];
  for (let i = 0; i < count; i++) {
    buttons.push(
      <button
        onClick={() => setIndex(i)}
        style={{ backgroundColor: i === index ? 'lightblue' : 'white' }}>
        {i}
      </button>
    );
  }

  return <>{buttons}</>;
}
