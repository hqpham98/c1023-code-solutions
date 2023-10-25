/* exported filterOutStrings */
function filterOutStrings(values) {
  const result = [];
  for (const value of values) {
    if (typeof value !== 'string') {
      result.push(value);
    }
  }
  return result;
}
