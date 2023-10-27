/* exported capitalizeWord */
function capitalizeWord(word) {
  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  }

  let result = '';
  for (let i = 0; i < word.length; i++) {
    if (i === 0) {
      result += word.charAt(i).toUpperCase();
    } else {
      result += word.charAt(i).toLowerCase();
    }
  }
  return result;
}
