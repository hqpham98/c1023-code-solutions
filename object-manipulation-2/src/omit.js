/* exported omit */
function omit(source, keys) {
  const result = {};

  for (const prop in source) {
    let containsProp = false;
    for (const key of keys) {
      if (prop === key) {
        containsProp = true;
        break;
      }
    }

    if (!containsProp) {
      result[prop] = source[prop];
    }
  }

  return result;
}
