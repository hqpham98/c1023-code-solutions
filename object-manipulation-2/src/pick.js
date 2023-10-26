/* exported pick */
function pick(source, keys) {
  const result = {};
  for (const s in source) {
    if (typeof source[s] !== 'undefined') {
      for (const k of keys) {
        if (s === k) {
          result[s] = source[s];
          break;
        }
      }
    }
  }
  return result;
}
