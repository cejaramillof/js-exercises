// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  /*
  let reversed = n.toString().split("").reverse().join("");
  reversedNumber = parseInt(reversed);

  return (n >= 0) ? reversedNumber : reversedNumber * - 1;
  */

  const reversed = n
    .toString()
    .split('')
    .reverse()
    .join('');

    return parseInt(reversed) * Math.sign(n);

}

module.exports = reverseInt;
