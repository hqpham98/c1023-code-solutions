import { useEffect, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { FaCircle, FaRegCircle } from 'react-icons/fa';

type Image = {
  src: string;
  alt: string;
};
type CarouselProps = {
  images: Image[];
};
export function Carousel({ images }: CarouselProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeoutID = setTimeout(
      () => setIndex((index + 1) % images.length),
      1000
    );
    return () => clearTimeout(timeoutID);
  }, [index, images]);

  return (
    <>
      <div className="row">
        <div className="button-wrapper">
          <Button
            label="left"
            onClick={() =>
              setIndex((index - 1 + images.length) % images.length)
            }
          />
        </div>
        <div className="carousel-image-wrapper">
          <CarouselImage image={images[index]} />
        </div>
        <div className="button-wrapper">
          <Button
            label="right"
            onClick={() =>
              setIndex((index - 1 + images.length) % images.length)
            }
          />
        </div>
      </div>
      <div className="row">
        <Indicators count={images.length} index={index} onClick={setIndex} />
      </div>
    </>
  );
}

type IndicatorProps = {
  count: number;
  index: number;
  onClick: (index: number) => void;
};

function Indicators({ count, index, onClick }: IndicatorProps) {
  const indicators = [];
  for (let i = 0; i < count; i++) {
    if (i === index) {
      indicators.push(<FaCircle onClick={() => onClick(i)} />);
    } else {
      indicators.push(<FaRegCircle onClick={() => onClick(i)} />);
    }
  }
  return <>{indicators}</>;
}

type ButtonProps = {
  label: string;
  onClick: () => void;
};

function Button({ label, onClick }: ButtonProps) {
  return label === 'left' ? (
    <IoIosArrowBack onClick={onClick} />
  ) : (
    <IoIosArrowForward onClick={onClick} />
  );
}

type ImageProps = {
  image: Image;
};
function CarouselImage({ image }: ImageProps) {
  return <img src={image.src} alt={image.alt}></img>;
}
