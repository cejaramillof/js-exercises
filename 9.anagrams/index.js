// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  /*
  return cleanString(stringA) === cleanString(stringB);
  */
  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);

  const aCharList = Object.keys(aCharMap)
  const bCharList = Object.keys(bCharMap)

  if (aCharList.length !== bCharList.length) return false;
  return aCharList.every((char) => aCharMap[char] === bCharMap[char])
}

function buildCharMap(str) {
  const charMap = {};
  const cleanedString = str.replace(/[^\w]/g, '').toLowerCase();

  for (let char of cleanedString) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
}

function cleanString(str) {
  return str
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
}

module.exports = anagrams;
