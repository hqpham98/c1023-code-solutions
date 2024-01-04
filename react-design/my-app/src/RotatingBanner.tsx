import { Banner } from './Banner.js';
import { Button } from './Button.js';
import { Indicators } from './Indicators.js';
import { useState } from 'react';
export function RotatingBanner({ items }: Record<string, string[]>) {
  const [index, setIndex] = useState(0);
  return (
    <>
      <Banner item={items[index]} />
      <Button
        label={'Prev'}
        setIndex={() => setIndex((index - 1 + items.length) % items.length)}
      />
      <Indicators count={items.length} index={index} setIndex={setIndex} />
      <Button
        label={'Next'}
        setIndex={() => setIndex((index + 1) % items.length)}
      />
    </>
  );
}
