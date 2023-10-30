/* exported unique */
function unique(array) {
  const result = [];

  for (const item of array) {
    if (!result.includes(item)) {
      result.push(item);
    }
  }
  return result;
}
