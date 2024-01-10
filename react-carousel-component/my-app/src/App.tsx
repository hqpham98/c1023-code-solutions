import './App.css';
import { Carousel } from './Carousel';
import '/images/fushiguro.webp';
import '/images/inumaki.webp';
import '/images/itadori.webp';
import '/images/kugisaki.webp';
import '/images/panda.webp';
import '/images/zen-in.webp';

function App() {
  const images = [
    {
      src: '/images/fushiguro.webp',
      alt: 'Megumi Fushiguro',
    },
    {
      src: '/images/inumaki.webp',
      alt: 'Toge Inumaki',
    },
    {
      src: '/images/itadori.webp',
      alt: 'Yuji Itadori',
    },
    {
      src: '/images/kugisaki.webp',
      alt: 'Nobara Kugisaki',
    },
    {
      src: '/images/panda.webp',
      alt: 'Panda',
    },
    {
      src: '/images/zen-in.webp',
      alt: "Maki Zen'in",
    },
  ];

  return (
    <>
      <Carousel images={images} />
    </>
  );
}

export default App;
