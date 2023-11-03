/* exported isPalindromic */
function isPalindromic(string) {
  const condensed = string.split(' ').join('');

  for (
    let i = 0;
    (i < condensed.length) & (i !== condensed.length - 1 - i);
    i++
  ) {
    if (condensed[i] !== condensed[condensed.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
