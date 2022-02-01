const reverse = require('./index');

test('Reverse function exists', () => {
  expect(reverse).toBeDefined();
});

test('Reverse reverses a string', () => {
  expect(reverse('abcd')).toEqual('dcba');
});

test('Reverse reverses a empty string', () => {
  expect(reverse(' ')).toEqual(' ');
});

test('Reverse reverses a null', () => {
  expect(reverse(null)).toBeFalsy();
});

test('Reverse reverses a undefined', () => {
  expect(reverse(undefined)).toBeFalsy();
});

test('Reverse reverses a string', () => {
  expect(reverse('  abcd')).toEqual('dcba  ');
});
