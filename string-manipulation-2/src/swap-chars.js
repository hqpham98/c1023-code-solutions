/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  const first = string.charAt(firstIndex);
  const second = string.charAt(secondIndex);
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      result += second;
    } else if (i === secondIndex) {
      result += first;
    } else {
      result += string.charAt(i);
    }
  }
  return result;
}
