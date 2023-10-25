/* exported filterOutNulls */
function filterOutNulls(values) {
  const result = [];

  for (const value of values) {
    if (value !== null) {
      result.push(value);
    }
  }
  return result;
}
