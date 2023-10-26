/* exported takeRight */
function takeRight(array, count) {
  const result = [];
  if (count > array.length) {
    for (const item of array) {
      result.push(item);
    }
    return result;
  }
  for (let i = array.length - count; i < array.length; i++) {
    result.push(array[i]);
  }
  return result;
}
