const alphabet = "abcdefghijklmnopqrstuvwxyz";

function caesarShift(string, amount) {
  if (amount < 0) {
    return caesarShift(string, amount + 26);
  }

  let returnString = "";

  for (let i = 0; i < string.length; i++) {
    let character = string[i];

    if (character.match(alphabet))
  }
}
