/* exported invert */
function invert(source) {
  const result = {};

  for (const key in source) {
    const value = source[key];
    result[value] = key;
  }
  return result;
}
