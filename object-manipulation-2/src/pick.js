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

/* Instructor solution

function pick(source, keys) {
  const picked = {};
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (typeof source[key] !== 'undefined') {
      picked[key] = source[key];
    }
  }
  return picked;
}

*/
