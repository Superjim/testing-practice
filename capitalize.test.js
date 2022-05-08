const capitalize = require("./capitalize");

test("jim", () => {
  expect(capitalize("jim")).toBe("Jim");
});

test("hElLo", () => {
  expect(capitalize("hElLo")).toBe("Hello");
});
