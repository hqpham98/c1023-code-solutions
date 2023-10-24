const student = {
  firstName: 'Henry',
  lastName: 'Pham',
  age: 25,
};

const fullName = student.firstName + student.lastName;

console.log('value of fullName:', fullName);

student.livesInIrvine = true;
student.previousOccupation = 'Software Test Engineer';

console.log('value of livesInIrvine:', student.livesInIrvine);
console.log('value of previousOccupation:', student.previousOccupation);

const vehicle = {
  make: 'Tesla',
  model: 'Model S',
  year: '2023',
};

vehicle['color'] = 'matte black';
vehicle['isConvertible'] = false;

console.log('value of color:', vehicle['color']);
console.log('value of isConvertible:', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

const pet = {
  name: 'Boba',
  type: 'cat',
};

delete pet['name'];
delete pet['type'];

console.log('value of pet:', pet);
