function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}

console.log('value of convertMinutesToSeconds(5):', convertMinutesToSeconds(5));

function greet(name) {
  return 'Hey, ' + name;
}

console.log('value of greet("Beavis"):', greet('Beavis'));

function getArea(width, height) {
  return width * height;
}

console.log('value of getArea(17,42):', getArea(17, 42));

function getFirstName(person) {
  return person.firstName;
}

console.log(
  "value of getFirstName({firstName: 'Lelouche', lastName: 'Lamperouge'}):",
  getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' })
);

function getLastElement(array) {
  return array.at(-1);
}

console.log(
  "value of getLastElement(['propane', 'and', 'propane', 'accessories']):",
  getLastElement(['propane', 'and', 'propane', 'accessories'])
);
