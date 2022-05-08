const calc = require("./calculator");

test("1 + 2", () => {
  expect(calc.add(1, 2)).toBe(3);
});

test("1-2", () => {
  expect(calc.subtract(1, 2)).toBe(-1);
});

test("1*2", () => {
  expect(calc.times(1, 2)).toBe(2);
});

test("7*7", () => {
  expect(calc.times(7, 7)).toBe(49);
});

test("9*2", () => {
  expect(calc.times(9, 2)).toBe(18);
});

test("1/2", () => {
  expect(calc.divide(1, 2)).toBe(0.5);
});

test("7/7", () => {
  expect(calc.divide(7, 7)).toBe(1);
});

test("9/2", () => {
  expect(calc.divide(9, 2)).toBe(4.5);
});
