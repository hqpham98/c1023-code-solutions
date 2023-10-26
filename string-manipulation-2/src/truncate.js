/* exported truncate */
function truncate(length, string) {
  let result = '';

  for (let i = 0; i < length && i < string.length; i++) {
    result += string.charAt(i);
  }
  return (result += '...');
}
