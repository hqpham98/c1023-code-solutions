var student = {
  firstName: 'Henry',
  lastName: 'Pham',
  age: 25,
};
var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);
student.livesInIrvine = true;
student.previousOccupation = 'Software Verification';
console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);
console.log('value of student:', student);
var vehicle = {
  make: 'Tesla',
  model: 'Model S',
  year: 2030,
};
vehicle.color = 'Green';
vehicle.isConvertible = false;
console.log('value of vehicle["color"]:', vehicle['color']);
console.log('value of vehicle["isConvertible"]:', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);
var pet = {
  name: 'Boba',
  kind: 'Cat',
};
delete pet.name;
delete pet.kind;
console.log('value of pet:', pet);
