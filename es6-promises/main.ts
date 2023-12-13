import { takeAChance } from './take-a-chance.js';

takeAChance('Henry')
  .then((pass) => {
    console.log(pass);
  })
  .catch((error) => {
    console.log(error.message);
  });
