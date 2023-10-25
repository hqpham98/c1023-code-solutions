/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */

function getNumbersToTen() {
  const numbers = [];
  let currentNumber = 1;
  while (currentNumber <= 10) {
    numbers.push(currentNumber++);
  }
  return numbers;
}
console.log('getNumbersToTen():', getNumbersToTen());

function getEvenNumbersToTwenty() {
  const evenNumbers = [];
  let currentNumber = 2;
  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}

console.log('getEvenNumbersToTwenty():', getEvenNumbersToTwenty());

function repeatWord(word, times) {
  let count = 1;
  let repeated = '';
  while (count <= times) {
    repeated += 'word';
    count++;
  }
  return repeated;
}

console.log('repeatWord(taco,4):', repeatWord('taco', 4));

function doubleAll(numbers) {
  const doubled = [];
  for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}

console.log('doubleAll([5, 7, 9, 11]):', doubleAll([5, 7, 9, 11]));

function getKeys(object) {
  const keys = [];
  for (const key in object) {
    keys.push(key);
  }
  return keys;
}

console.log(
  'getKeys({isbn: "978-1449365035", title: "Speaking JS", author: "Dr. Axel Rauschmayer"}):',
  getKeys({
    isbn: '978-1449365035',
    title: 'Speaking JS',
    author: 'Dr. Axel Rauschmayer',
  })
);

function getValues(object) {
  const values = [];
  for (const key in object) {
    values.push(object[key]);
  }
  return values;
}

console.log(
  'getValues({isbn: "978-1449365035", title: "Speaking JS", author: "Dr. Axel Rauschmayer"}):',
  getValues({
    isbn: '978-1449365035',
    title: 'Speaking JS',
    author: 'Dr. Axel Rauschmayer',
  })
);
