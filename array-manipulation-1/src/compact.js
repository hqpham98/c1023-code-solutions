/* exported compact */
function compact(array) {
  const result = [];
  for (const item of array) {
    if (item) {
      result.push(item);
    }
  }
  return result;
}
