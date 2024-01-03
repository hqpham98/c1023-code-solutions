export function countVowels(str: string): number {
  return [...str.matchAll(/[aeiouAEIOU]/g)].length;
}
