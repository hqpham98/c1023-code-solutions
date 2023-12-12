import { add } from './add.js';
import { subtract } from './subtract.js';
import { multiply } from './multiply.js';
import { divide } from './divide.js';

if (process.argv.length === 5) {
  const operand1: number = Number(process.argv[2]);
  const operator: string = process.argv[3];
  const operand2: number = Number(process.argv[4]);

  if (isNaN(operand1) || isNaN(operand2)) {
    console.log('Invalid operand');
  } else {
    switch (operator.toLowerCase()) {
      case 'add':
        console.log(`result: ${add(operand1, operand2)}`);
        break;
      case 'subtract':
        console.log(`result: ${subtract(operand1, operand2)}`);
        break;
      case 'multiply':
        console.log(`result: ${multiply(operand1, operand2)}`);
        break;
      case 'divide':
        console.log(`result: ${divide(operand1, operand2)}`);
        break;
      default:
        console.log('Invalid operator');
    }
  }
} else {
  console.log('Invalid arguments');
}
