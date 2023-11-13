const books = [
  {
    isbn: '123456789',
    title: 'Book 1',
    author: 'Bob Ross',
  },
  {
    isbn: '111111111',
    title: 'Book 2',
    author: 'Tyler 1',
  },
  {
    isbn: '000000000',
    title: 'Book 3',
    author: 'Ted Mosby',
  },
];

console.log('JSON.stringify(books):', JSON.stringify(books));
console.log('typeof JSON.stringify(books):', typeof JSON.stringify(books));

const student = '{"id": 123456789,"name": "Bob Ross"}';

console.log('student:', student);
console.log('typeof student', typeof student);

const studentParsed = JSON.parse(student);

console.log('studentParsed:', studentParsed);
console.log('typeof studentParsed:', typeof studentParsed);
