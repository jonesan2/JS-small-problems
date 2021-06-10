// Andrew Jones
// JS210: Rot13 Cipher

const UPCASE_START = 'A'.charCodeAt(0);
const LOWCASE_START = 'a'.charCodeAt(0);
const NUM_LETTERS = 26;

// Rotate all alpha characters in a string by 13 positions, keeping case
function rot13(str) {
  let result = '';
  for (let idx = 0; idx < str.length; idx++) {
    if (isAlpha(str[idx])) result += rot13Char(str[idx]);
    else result += str[idx];
  }

  return result;
}

// Return true if character is alphabetic
function isAlpha(ch) {
  let code = ch.charCodeAt(0);
  return (code >= UPCASE_START && code < UPCASE_START + NUM_LETTERS) ||
         (code >= LOWCASE_START && code < LOWCASE_START + NUM_LETTERS);
}

// Rotate one alphabetic character by 13 positions, keeping case
function rot13Char(ch) {
  let code = ch.charCodeAt(0);
  let shift = 0;
  if (code < UPCASE_START + NUM_LETTERS) shift = UPCASE_START;
  else shift = LOWCASE_START;

  return String.fromCharCode((code - shift + 13) % NUM_LETTERS + shift);
}

// Tests
console.log(rot13('Teachers open the door, but you must enter by yourself.'));
console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));

