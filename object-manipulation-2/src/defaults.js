/* exported defaults */

function defaults(target, source) {
  console.log('beginning');
  console.log('target:', target);
  console.log('source:', source);
  for (const s in source) {
    // keep track if key found in target already
    let containsSourceKey = false;

    // consider only if defined
    if (typeof s !== 'undefined') {
      // iterate over the target keys
      for (const t in target) {
        // if it contains source key
        if (s === t) {
          // update containsSourceKey
          containsSourceKey = true;
          // stop iterating if target contains the same key
          break;
        }
      }

      // if target does not contain key, add it
      if (!containsSourceKey) {
        target[s] = source[s];
      }
    }
    // reset boolean after every source key
    containsSourceKey = false;
  }

  console.log('ending');
  console.log('target:', target);
  console.log('source:', source);
}
