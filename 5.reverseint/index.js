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

  /*
  const reversed = n
    .toString()
    .split('')
    .reverse()
    .join('');

    return parseInt(reversed) * Math.sign(n);
  */

  const digits = [];
  // let i = 0;

  let number = n * Math.sign(n);

  const numberLength = Math.ceil(Math.log10(number + 1));

  let finalNumber = 0;

  while (number > 0) {
    const currentNumber = number % 10;

    // finalNumber += currentNumber * 10 ** (numberLength - i - 1);
    // i += 1;

    finalNumber += currentNumber * 10 ** (numberLength - digits.length - 1);
    digits.push(currentNumber);

    number = Math.trunc(number / 10);
  }
  return finalNumber * Math.sign(n)
}

module.exports = reverseInt;
