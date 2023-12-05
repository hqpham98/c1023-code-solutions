const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];

console.log('In Order:');
values.forEach((i) => {
  console.log(i);
});

console.log('Reverse Order:');
let i = values.length - 1;
values.forEach(() => {
  console.log(values[i--]);
});
