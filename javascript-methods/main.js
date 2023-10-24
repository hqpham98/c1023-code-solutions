const num1 = 5;
const num2 = 50;
const num3 = 500;
const maximumValue = Math.max(num1, num2, num3);
console.log('value of maximumValue:', maximumValue);

const heroes = ['Superman', 'Batman', 'Ironman', 'Spiderman'];
let randomNumber = Math.random();
randomNumber *= heroes.length;

const randomIndex = Math.floor(randomNumber);
console.log('value of randomIndex:', randomIndex);

const randomHero = heroes[randomIndex];
console.log('value of randomHero:', randomHero);

const library = [
  {
    title: 'BookA',
    author: 'AuthorA',
  },
  {
    title: 'BookB',
    author: 'AuthorB',
  },
];

const lastBook = library.pop();
console.log('value of lastBook:', lastBook);

const firstBook = library.unshift();
console.log('value of firstBook:', firstBook);

const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('value of library:', library);

const fullName = 'Henry Pham';
const firstAndLastName = fullName.split(' ');

console.log('value of firtsAndLastName:', firstAndLastName);

const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();

console.log('value of sayMyName:', sayMyName);
