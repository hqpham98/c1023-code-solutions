export function isPalindrome(str: string): boolean {
  const newStr = [...str.toLowerCase().matchAll(/[a-z]/g)].join('');
  for (let i = 0; i < newStr.length && i !== newStr.length - 1 - i; i++) {
    if (newStr[i] !== newStr[newStr.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
