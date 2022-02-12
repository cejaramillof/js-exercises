const isBalanced = require('./index');

test('isBalanced function exists', () => {
  expect(typeof isBalanced).toEqual('function');
});

test('Brackets not Balanced', () => {
  expect(isBalanced('{[)}')).toBeFalsy();
  expect(isBalanced('{(})[]')).toBeFalsy();
  expect(isBalanced('{})([]')).toBeFalsy();
});

test('Brackets Balanced', () => {
  expect(isBalanced('{}')).toBeTruthy();
  expect(isBalanced('[([{}])]')).toBeTruthy();
  expect(isBalanced('{[](){((((((()))))))}}')).toBeTruthy();
  expect(isBalanced('([]())')).toBeTruthy();
  expect(isBalanced('({{}})[]()')).toBeTruthy();
  expect(isBalanced('{()}[]')).toBeTruthy();
  expect(isBalanced('{()[]}')).toBeTruthy();
});
