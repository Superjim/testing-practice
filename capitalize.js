function capitalize(string) {
  firstLetter = string.charAt(0).toUpperCase();
  remainder = string.slice(1);
  return firstLetter + remainder;
}
