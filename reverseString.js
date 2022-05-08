function reverseString(string) {
  string = string.split("");
  string = string.reverse();
  string = string.join("");
  return string;
}

module.exports = reverseString;
