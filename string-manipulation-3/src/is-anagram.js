/* exported isAnagram */
function isAnagram(firstString, secondString) {
  const first = firstString.split(' ').join('');
  let second = secondString.split(' ').join('');

  if (first.length !== second.length) {
    return false;
  }

  for (const char of first) {
    if (second.includes(char)) {
      second = second.replace(char, '');
    } else {
      return false;
    }
  }
  return true;
}
