const reverseString = require("./reverseString");

test("abcdef", () => {
  expect(reverseString("abcdef")).toBe("fedcba");
});

test("hello world", () => {
  expect(reverseString("hello world")).toBe("dlrow olleh");
});

test("!£$%^&*()", () => {
  expect(reverseString("!£$%^&*()")).toBe(")(*&^%$£!");
});
