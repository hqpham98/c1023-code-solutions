export function isPalindrome(str: string): boolean {
  for (let i = 0; i < str.length && i !== str.length - 1 - i; i++) {
    if (str[i].toLowerCase() !== str[str.length - 1 - i].toLowerCase()) {
      return false;
    }
  }
  return true;
}

console.log('isPalindrome', isPalindrome('racecar'));
