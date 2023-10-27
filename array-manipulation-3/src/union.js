/* exported union */
function union(first, second) {
  const result = [];

  for (const item of first) {
    if (!result.includes(item)) {
      result.push(item);
    }
  }
  for (const item of second) {
    if (!result.includes(item)) {
      result.push(item);
    }
  }

  return result;
}
