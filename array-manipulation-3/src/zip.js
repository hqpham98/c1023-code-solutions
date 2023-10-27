/* exported zip */
function zip(first, second) {
  let resultSize = 0;
  if (first.length <= second.length) {
    resultSize = first.length;
  } else {
    resultSize = second.length;
  }

  const result = [];

  for (let i = 0; i < first.length && result.length !== resultSize; i++) {
    result.push([first[i], second[i]]);
  }
  return result;
}
