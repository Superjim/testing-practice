const caesarCipher = require("./caesarCipher");

test("never gonna give you up", () => {
  expect(caesarCipher("never gonna give you up", 0)).toBe(
    "never gonna give you up"
  );
});

test("never gonna let you down", () => {
  expect(caesarCipher("never gonna let you down", 7)).toBe(
    "ulcly nvuuh sla fvb kvdu"
  );
});

test("never gonna run around and desert you", () => {
  expect(caesarCipher("never gonna run around and desert you", -10)).toBe(
    "duluh weddq hkd qhekdt qdt tuiuhj oek"
  );
});

test("Never gonna make you cry", () => {
  expect(caesarCipher("never gonna make you cry", -15)).toBe(
    "ypgpc rzyyl xlvp jzf ncj"
  );
});
