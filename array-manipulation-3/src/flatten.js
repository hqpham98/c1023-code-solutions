/* exported flatten */
function flatten(array) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      const temp = array[i];
      for (let t = 0; t < temp.length; t++) {
        result.push(temp[t]);
      }
    } else {
      result.push(array[i]);
    }
  }
  return result;
}
