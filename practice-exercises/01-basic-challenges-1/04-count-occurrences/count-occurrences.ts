export function countOccurrences(str: string, char: string): number {
  let result = 0;
  for (const c of str) {
    if (c === char) {
      result++;
    }
  }
  return result;
}
