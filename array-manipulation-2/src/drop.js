/* exported drop */
function drop(array, count) {
  const result = [];
  if (count > array.length) {
    return result;
  }
  for (let i = count; i < array.length; i++) {
    result.push(array[i]);
  }
  return result;
}
