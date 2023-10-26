/* exported capitalize */
function capitalize(word) {
  let result = word.charAt(0).toUpperCase();

  for (let i = 1; i < word.length; i++) {
    result += word.charAt(i).toLowerCase();
  }
  return result;
}
