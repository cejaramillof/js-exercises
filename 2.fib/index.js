// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// Fibonacci Series
// 1, 1, 2, 3, 5, 8

// Recursive solution
function fib (n) {
  if (n < 2) return n;
  return fib (n - 1) + fib (n - 2);
  /*
  const a = fib (n - 1);
  const b = fib (n - 2);
  console.log('a', a, 'b', b);
  return a + b;
  */
}

// console.log(fib(4));

// 1,
// 1

// 2
// 1 + 0 // 1

// 3
// 1 + 1 // 2

// 4
// 2 + 1 // 3

// 5
// 4 // 2 + 1 // 3 + 2 // 5

module.exports = fib;
