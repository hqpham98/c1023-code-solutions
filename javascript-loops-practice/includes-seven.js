/* exported includesSeven */
function includesSeven(array) {
  for (const i in array) {
    if (array[i] === 7) {
      return true;
    }
  }
  return false;
}
