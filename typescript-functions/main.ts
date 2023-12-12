function convertMinutesToSeconds(minutes: number): number {
  return minutes * 60;
}

console.log('value of convertMinutesToSeconds(5):', convertMinutesToSeconds(5));

function greet(name: string): string {
  return 'Hey, ' + name;
}

console.log('value of greet("Beavis"):', greet('Beavis'));

function getArea(width: number, height: number): number {
  return width * height;
}

console.log('value of getArea(17,42):', getArea(17, 42));

function getFirstName(person: { firstName: string; lastName: string }): string {
  return person.firstName;
}

console.log(
  "value of getFirstName({firstName: 'Lelouche', lastName: 'Lamperouge'}):",
  getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' })
);

function getLastElement(array: string[]): string {
  return array[array.length - 1];
}

console.log(
  "value of getLastElement(['propane', 'and', 'propane', 'accessories']):",
  getLastElement(['propane', 'and', 'propane', 'accessories'])
);
