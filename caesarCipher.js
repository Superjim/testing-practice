const alphabet = "abcdefghijklmnopqrstuvwxyz";

function caesarCipher(string, amount) {
  //if negative shift is asked for, just loop ahead once
  if (amount < 0) {
    return caesarCipher(string, amount + 26);
  } else if (amount === 0) {
    return string;
  } else {
    return string.replace(/[a-z]/g, (character) =>
      String.fromCharCode(((character.charCodeAt(0) - 97 + amount) % 26) + 97)
    );
  }
}

module.exports = caesarCipher;
