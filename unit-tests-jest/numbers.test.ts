import { evenNumbers, toDollars, divideBy, multiplyBy } from './numbers';

describe('evenNumbers', () => {
  it('returns the even numbers', () => {
    const numbers = [1, 4, 5, 10, 0];
    const result = evenNumbers(numbers);
    expect(result).toEqual([4, 10, 0]);
  });
  it('returns empty list if all odds', () => {
    const numbers = [1, 3, 7, 9];
    const result = evenNumbers(numbers);
    expect(result).toEqual([]);
  });
});

describe('toDollars', () => {
  it('forms integers as dollars and cents', () => {
    const number = 123;
    const result = toDollars(number);
    expect(result).toEqual('$123.00');
  });
});

describe('divideBy', () => {
  it('returns even array divided by 2', () => {
    const numbers = [0, 2, 4, 6, 8, 10];
    const result = divideBy(numbers, 2);
    expect(result).toEqual([0, 1, 2, 3, 4, 5]);
  });
  it('returns odd array divided by 2', () => {
    const numbers = [1, 3, 5, 7, 9];
    const result = divideBy(numbers, 2);
    expect(result).toEqual([0.5, 1.5, 2.5, 3.5, 4.5]);
  });
});

describe('multiplyBy', () => {
  it('multiply by 2', () => {
    const obj: Record<string, unknown> = { a: '2', b: 'b', c: 3, d: 'd', e: 5 };
    const result = multiplyBy(obj, 2);
    expect(result).toEqual({ a: '2', b: 'b', c: 6, d: 'd', e: 10 });
  });
});
