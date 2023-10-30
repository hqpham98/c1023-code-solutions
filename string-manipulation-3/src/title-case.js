/* exported titleCase */
function titleCase(string) {
  const minorWords = [
    'and',
    'or',
    'nor',
    'but',
    'a',
    'an',
    'the',
    'as',
    'at',
    'by',
    'for',
    'in',
    'of',
    'on',
    'per',
    'to',
  ];
  const wordArray = string.split(' ');
  let wordAfterColon = false;

  for (let i = 0; i < wordArray.length; i++) {
    let currentWord = wordArray[i];
    let containsColon = false;
    // Check if word ends in a colon, remove, and push it back in later
    if (currentWord.slice(-1) === ':') {
      containsColon = true;
      currentWord = currentWord.substring(0, currentWord.length - 1);
    }

    // Capitalize both sides of a hyphen and lowercase the rest
    if (currentWord.includes('-')) {
      const hyphenIndex = currentWord.indexOf('-');
      const firstHalf =
        currentWord.charAt(0).toUpperCase() +
        currentWord.substring(1, hyphenIndex).toLowerCase();
      const secondHalf =
        currentWord.charAt(hyphenIndex + 1).toUpperCase() +
        currentWord.substring(hyphenIndex + 2).toLowerCase();
      wordArray[i] = firstHalf + '-' + secondHalf;
      if (containsColon) {
        wordArray[i] += ':';
        wordAfterColon = true;
      } else {
        wordAfterColon = false;
      }
      continue;
    }

    // Special case - API
    if (currentWord.toLowerCase() === 'api') {
      // add colon if ended in colon
      if (containsColon) {
        wordArray[i] = 'API:';
        wordAfterColon = true;
      } else {
        wordArray[i] = 'API';
        wordAfterColon = false;
      }
      continue;
    }
    // Special case - JavaScript
    if (currentWord.toLowerCase() === 'javascript') {
      // add colon if ended in colon
      if (containsColon) {
        wordArray[i] = 'JavaScript:';
        wordAfterColon = true;
      } else {
        wordArray[i] = 'JavaScript';
        wordAfterColon = false;
      }
      continue;
    }
    // Capitalize any word not in minor word
    if (!minorWords.includes(currentWord.toLowerCase())) {
      wordArray[i] =
        currentWord.charAt(0).toUpperCase() +
        currentWord.substring(1).toLowerCase();
      if (containsColon) {
        wordArray[i] += ':';
        wordAfterColon = true;
      } else {
        wordAfterColon = false;
      }
      continue;
    }

    // Capitalize the first word
    if (i === 0) {
      wordArray[i] =
        wordArray[0].charAt(0).toUpperCase() +
        currentWord.substring(1).toLowerCase();
      if (containsColon) {
        wordAfterColon = true;
        wordArray[i] += ':';
      }
      continue;
    }
    // Capitalize if current word is after a colon
    if (wordAfterColon) {
      wordArray[i] =
        wordArray[i].charAt(0).toUpperCase() +
        wordArray[i].substring(1).toLowerCase();
    } else {
      wordArray[i] = wordArray[i].toLowerCase();
    }

    if (containsColon) {
      wordAfterColon = true;
    } else {
      wordAfterColon = false;
    }
  }
  return wordArray.join(' ');
}

console.log(
  titleCase(
    'the self-taught programmer: the definitive guide to programming professionally'
  )
);
