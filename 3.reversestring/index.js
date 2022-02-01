// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  const letters = str?.split('');
  return letters?.reduceRight((finalWord, currentLetter) => {
    return finalWord += currentLetter;
  }, '')

  /*
  let newWord = [];
  for (let letter = letters.length - 1; letter >= 0; letter--) {
    newWord.push(letters[letter]);
  };
  return newWord.join('');
  */
}

module.exports = reverse;
