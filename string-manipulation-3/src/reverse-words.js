/* exported reverseWords */
function reverseWords(string) {
  if (string.length === 0) {
    return '';
  }
  const wordArr = string.split(' ');
  for (let i = 0; i < wordArr.length; i++) {
    let temp = '';
    for (const char of wordArr[i]) {
      temp = char + temp;
    }
    wordArr[i] = temp;
  }
  return wordArr.join(' ');
}
