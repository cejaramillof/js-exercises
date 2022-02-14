// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(word) {
  if (!word) return 'ERR0R';
  const str = word.toLowerCase()
  const charMap = {};
  let max = 0;
  let maxChar = '';

  for (let char of str) {
    charMap[char] = charMap[char] ? charMap[char] + 1 : 1;
  }

  for (let char in charMap) {
    if (charMap[char] <= max) continue;

    // if (charMap[char] < max) continue;

    max = charMap[char];
    maxChar = char;
  }

  return maxChar;
}

module.exports = maxChar;
