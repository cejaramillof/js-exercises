// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str = '') {
  // return str.split('').reduce((reversed, currentLetter) => currentLetter + reversed, '');
  // return str.split('').reverse().join('');
  return str.split('').reduceRight((reversed, currentLetter) => reversed + currentLetter, '')

  /*
  let newWord = [];
  for (let letter = letters.length - 1; letter >= 0; letter--) {
    newWord.push(letters[letter]);
  };
  return newWord.join('');
  */

  /*
  let reversed = '';
  for (let character of str) {
    reversed = character + reversed;
  }
  return reversed;
  */
}

module.exports = reverse;
