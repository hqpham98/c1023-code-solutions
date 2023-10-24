const colors = ['red', 'white', 'blue'];

for (const i in colors) {
  console.log('value of colors[' + i + ']:', colors[i]);
}

let str = colors[0] + ', ' + colors[1] + ', and ' + colors[2] + '.';
console.log('America is ' + str);

colors[2] = 'green';
str = colors[0] + ', ' + colors[1] + ', and ' + colors[2] + '.';
console.log('Mexico is ' + str);

console.log('value of colors:', colors);

const students = ['Ken', 'Barbie', 'Allan', 'Bob'];
const numberOfStudents = students.length;
console.log('value of numberOfStudents:', numberOfStudents);

const lastIndex = numberOfStudents - 1;
const lastStudent = students[lastIndex];
console.log('value of lastStudent:', lastStudent);
console.log('value of students:', students);
