/**
 * Returns a new array that contains only the even numbers in the given array.
 */
export function evenNumbers(numbers: number[]): number[] {
  return numbers.filter((n) => n % 2 === 0);
}

/**
 * Returns a number formatted in dollars and cents.
 */
export function toDollars(amount: number): string {
  return `$${amount}.00`;
}

/**
 * Returns a new array of numbers where every entry has been divided by the
 * given divisor. Does not modify the original array.
 */
export function divideBy(numbers: number[], divisor: number): number[] {
  const result: number[] = [];
  for (let i = 0; i < numbers.length; i++) {
    result.push(numbers[i] / divisor);
  }
  console.log('result:', result);
  return result;
}

/**
 * Modifies an object by multiplying the value of each key, but only if that
 * value is a number. Key names are arbitrary.
 */

export function multiplyBy(
  obj: Record<string, unknown>,
  multiplier: number
): Record<string, unknown> {
  Object.entries(obj).forEach(([key, value]) => {
    typeof value === 'number'
      ? (obj[key] = value * multiplier)
      : (obj[key] = value);
  });
  console.log('obj', obj);
  return obj;
}