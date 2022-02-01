// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

const fizzBuzzBase = (min = 0) => (max = 100) => (num) => {
  if (typeof num !== 'number') return 'not-number'
  if (num < min || num > max) return 'number-not-allowed';
  if (num % 5 === 0 && num % 3 === 0) return 'fizzbuzz';
  if (num % 5 === 0) return 'buzz';
  if (num % 3 === 0) return 'fizz';
  return num;
};

const fizzBuzzMax = fizzBuzzBase(1);
const fizzBuzzCustom = fizzBuzzMax(100);


/*
const numbers = new Array(100);
for (let number = 1; number <= numbers.length; number++) {
  console.log(fizzBuzzCustom(number));
}
*/

function fizzBuzz(maxNumber) {
  const fizzBuzzCustom = fizzBuzzMax(maxNumber);
  for (let number = 1; number <= maxNumber; number++) {
    console.log(fizzBuzzCustom(number));
  }
}

module.exports = fizzBuzz;
