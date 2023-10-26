/* exported numVowels */

function numVowels(string) {
  let result = 0;
  for (let i = 0; i < string.length; i++) {
    switch (string.charAt(i).toUpperCase()) {
      case 'A':
      case 'E':
      case 'I':
      case 'O':
      case 'U':
        result++;
        break;
    }
  }
  return result;
}
