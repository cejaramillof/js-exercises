let brackets = "[]{}()<>";

let isBalanced = (str) => {
  let stack = [];

  for (let bracket of str) {
    let bracketsIndex = brackets.indexOf(bracket);

    if (bracketsIndex % 2 === 0) {
      stack.push(bracketsIndex + 1);
      continue;
    }
    if (stack.pop() !== bracketsIndex) return false;
  }
  return stack.length === 0;
}

module.exports = isBalanced;