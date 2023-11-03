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
    }

    // Special case - API
    else if (currentWord.toLowerCase() === 'api') {
      wordArray[i] = 'API';
    }
    // Special case - JavaScript
    else if (currentWord.toLowerCase() === 'javascript') {
      wordArray[i] = 'JavaScript';
    }
    // Capitalize any word not in minor word
    else if (!minorWords.includes(currentWord.toLowerCase())) {
      wordArray[i] =
        currentWord.charAt(0).toUpperCase() +
        currentWord.substring(1).toLowerCase();
    }

    // Capitalize the first word
    else if (i === 0) {
      wordArray[i] =
        wordArray[0].charAt(0).toUpperCase() +
        currentWord.substring(1).toLowerCase();
    }
    // Capitalize if current word is after a colon
    else if (wordAfterColon) {
      wordArray[i] =
        wordArray[i].charAt(0).toUpperCase() +
        wordArray[i].substring(1).toLowerCase();
    } else {
      wordArray[i] = wordArray[i].toLowerCase();
    }

    if (containsColon) {
      wordArray[i] += ':';
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
