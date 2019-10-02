const calc = require('./calc');

test('adds 1 + 2 to equal 3', () => {
  expect(calc.sum(1, 2)).toBe(3);
});

test('multiplies 2 * 3 to equal 6', () => {
  expect(calc.mult(2, 3)).toBe(6);
});
