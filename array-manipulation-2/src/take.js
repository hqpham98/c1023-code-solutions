/* exported take */
function take(array, count) {
  const result = [];
  for (let i = 0; i < count && count <= array.length; i++) {
    result.push(array[i]);
  }
  return result;
}
