import { Banner } from './Banner.tsx';
import { PrevButton } from './PrevButton.tsx';
import { NextButton } from './NextButton.tsx';
import { Indicators } from './Indicators.tsx';
export function RotatingBanner({ items }: Record<string, string[]>) {
  return (
    <>
      <Banner items={items} />
      <PrevButton items={items} />
      <Indicators items={items} />
      <NextButton items={items} />
    </>
  );
}
