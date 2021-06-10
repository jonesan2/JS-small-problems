"use strict";

// Problem: Can you make this word with the blocks?
// Input: Word
// Output: boolean
//
// Test cases:
// --no input(return false)
// --non-string input (convert to string)
// --non-letter characters (return false)
// --empty string input (return false)
// --word you can spell (true)
// --word you can't spell because duplicate letter (false)
// --word you can't spell because same block (false)
//
// Data structures:
// --array of booleans to represent blocks
//   --true if block is available, false if used
// --object to referenece array index belonging to block letter
//   -- key is block letter, value is array index
// --array to hold letters of input word
//
// Algorithm:
// --return false for bad inputs
// --split input into array of letters
// --iterate through array
//   --for each available letter, switch boolean array to false
//   --if false value found in array for a letter, return false
//   --if end of array reached, return true

const blockHash = {
  B: 0, O: 0, X: 1, K: 1, D: 2, Q: 2, C: 3, P: 3,
  N: 4, A: 4, G: 5, T: 5, R: 6, E: 6, F: 7, S: 7,
  J: 8, W: 8, H: 9, U: 9, V: 10, I: 10, L: 11, Y: 11,
  Z: 12, M: 12 };

function isGoodInput(args, str) {
  if (args.length === 0) {
    return false;
  }
  if (!String(str).match(/^[a-zA-Z]+$/)) {
    return false;
  }
  return true;
}

function isBlockWord(str) {
  if (!isGoodInput(arguments, str)) {
    return false;
  }

  const charArray = String(str).split('');
  let unusedBlocks = new Array(13);
  let deadLetterFound = false;
  unusedBlocks.fill(true);
  charArray.forEach(letter => {
    if (unusedBlocks[blockHash[letter.toUpperCase()]] === true) {
      unusedBlocks[blockHash[letter.toUpperCase()]] = false;
    } else {
      deadLetterFound = true;
    }
  });
  return !deadLetterFound;
}

let res = isBlockWord();
console.log(res);
res = isBlockWord('');
console.log(res);
res = isBlockWord(12);
console.log(res);
res = isBlockWord('BATCH');
console.log(res);
res = isBlockWord('BUTCH');
console.log(res);
res = isBlockWord('jest');
console.log(res);