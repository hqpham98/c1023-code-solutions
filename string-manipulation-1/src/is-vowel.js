/* exported isVowel */
function isVowel(character) {
  switch (character.toUpperCase()) {
    case 'A':
    case 'E':
    case 'I':
    case 'O':
    case 'U':
      return true;
    default:
      return false;
  }
}
