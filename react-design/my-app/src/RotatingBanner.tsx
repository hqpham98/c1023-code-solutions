import { Banner } from './Banner.tsx';
import { PrevButton } from './PrevButton.tsx';
import { NextButton } from './NextButton.tsx';
import { Indicators } from './Indicators.tsx';
import { useState } from 'react';
export function RotatingBanner({ items }: Record<string, string[]>) {
  const [index, setIndex] = useState(0);
  return (
    <>
      <Banner item={items[index]} />
      <PrevButton />
      <Indicators count={items.length} index={index} />
      <NextButton />
    </>
  );
}
