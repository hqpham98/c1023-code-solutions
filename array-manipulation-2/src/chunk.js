/* exported chunk */
function chunk(array, size) {
  // if desired chunks > array length, return empty array
  if (size > array.length) {
    return [];
  }

  const result = [];

  // find length for the resulting array of empty arrays
  // round up in case array cannot be evenly divided
  const resultLength = Math.ceil(array.length / size);

  // initalize resulting array with empty arrays
  for (let i = 0; i < resultLength; i++) {
    result.push([]);
  }

  let resultIndex = 0;
  let innerArraySize = 0;

  // iterate over entire input array
  for (let arrayIndex = 0; arrayIndex < array.length; arrayIndex++) {
    // push the current arrayIndex item to the current resultIndex if innerArraySize is < size
    result[resultIndex].push(array[arrayIndex]);

    // increment resultIndex when innerArraySize is met
    innerArraySize++;
    if (innerArraySize === size) {
      resultIndex++;
      // reset innerArraySize
      innerArraySize = 0;
    }
  }

  // return result with evenly divided array
  return result;
}
