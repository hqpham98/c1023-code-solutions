import { add } from './add.js';
import { subtract } from './subtract.js';
import { multiply } from './multiply.js';
import { divide } from './divide.js';

if (process.argv.length >= 5) {
  const operand1: string = process.argv[2];
  const operator: string = process.argv[3];
  const operand2: string = process.argv[4];

  switch (operator.toLowerCase()) {
    case 'add':
      console.log(`result: ${add(Number(operand1), Number(operand2))}`);
      break;
    case 'subtract':
      console.log(`result: ${subtract(Number(operand1), Number(operand2))}`);
      break;
    case 'multiply':
      console.log(`result: ${multiply(Number(operand1), Number(operand2))}`);
      break;
    case 'divide':
      console.log(`result: ${divide(Number(operand1), Number(operand2))}`);
      break;
  }
}
