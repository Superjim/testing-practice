const analyzeArray = require("./analyzeArray");

test("default", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("ten ten", () => {
  expect(analyzeArray([10, 10, 10, 10, 10, 10, 10, 10, 10, 10])).toEqual({
    average: 10,
    min: 10,
    max: 10,
    length: 10,
  });
});

test("3 6 9", () => {
  expect(analyzeArray([3, 6, 9])).toEqual({
    average: 18 / 3,
    min: 3,
    max: 9,
    length: 3,
  });
});

test("5 6 7 8", () => {
  expect(analyzeArray([5, 6, 7, 8])).toEqual({
    average: (5 + 6 + 7 + 8) / 4,
    min: 5,
    max: 8,
    length: 4,
  });
});

test("0", () => {
  expect(analyzeArray([0, 0, 0])).toEqual({
    average: 0,
    min: 0,
    max: 0,
    length: 3,
  });
});

test("0.25, 0.5, 0.5, 0.75, 1", () => {
  expect(analyzeArray([0.25, 0.5, 0.5, 0.75, 1])).toEqual({
    average: 0.6,
    min: 0.25,
    max: 1,
    length: 5,
  });
});
