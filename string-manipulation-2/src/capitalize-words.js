/* exported capitalizeWords */
function capitalizeWords(string) {
  const wordArray = string.split(' ');
  let result = '';
  // iterate over words
  for (let wordIndex = 0; wordIndex < wordArray.length; wordIndex++) {
    // iterate over characters
    for (
      let charIndex = 0;
      charIndex < wordArray[wordIndex].length;
      charIndex++
    ) {
      // if first character, capitalize, else lowercase
      if (charIndex === 0) {
        result += wordArray[wordIndex].charAt(charIndex).toUpperCase();
      } else {
        result += wordArray[wordIndex].charAt(charIndex).toLowerCase();
      }
    }

    // add a space if the word is not the last word
    if (wordIndex !== wordArray.length - 1) {
      result += ' ';
    }
  }
  return result;
}
