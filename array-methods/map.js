const prices = [42.42, 10, 28.2234, 3.2, 5, 12];

const newPrices = prices.map((element) => ({
  price: element,
  salePrice: element / 2,
}));
const formattedPrices = prices.map(
  (element) => `$${Number.parseFloat(element).toFixed(2)}`
);

console.log('Price objects', newPrices);
console.log('Formatted prices', formattedPrices);
