"use strict";

// Problem: Rail Fence Cipher
// Inputs: Text String and Number of Rails
// Outputs: Decoded or Encoded String
//
// Test Cases:
// encodeRailCipher('WE ARE DISCOVERED FLEE AT ONCE');
// decodeRailCipher('WECRLTEERDSOEEFEAOCAIVDEN');
//
// Data Structures:
// Input String
// 2-dimensional Array to serve as "Fence Rails"
// 1-dimensional Array to read output from 2-dimensional array
// Output String
//
// Encoding Algorithm:
// 1) Create a 2-dimensional array with n rows and str.length columns
// 2) Convert input into an array of chars
// 3) Push input into 2-dim array one char at a time
// --increment the column by one with each character
// --increment the row by one until max, then decrement by one until min
//   --use an if statement on every iteration with an up/down switch

function createFence(encoded, decodedChars, rails) {
  let col = 0;
  let row = 0;
  let upDownSwitch = 'down';

  while (col < decodedChars.length) {
    encoded[row][col] = decodedChars[col];
    col += 1;
    if (upDownSwitch === 'down' && row === rails - 1) {
      row -= 1;                           // switch down, reached bottom
      upDownSwitch = 'up';
    } else if (upDownSwitch === 'down') { // switch down, haven't reached bottom
      row += 1;
    } else if (row === 0) {               // switch up, reached top
      row += 1;
      upDownSwitch = 'down';
    } else {                              // switch up, haven't reached top
      row -= 1;
    }
  }
}

function encodeRailCipher(decoded, rails) {
  if (arguments.length < 2 || typeof decoded !== 'string'
    || !Number.isInteger(rails) || rails < 0) {
    return null;
  }

  const decodedChars = decoded.split('')
    .filter(elem => !elem.match(/\s/));

  let encoded = [];
  for (let initIdx = 0; initIdx < rails; initIdx += 1) {
    encoded[initIdx] = [];
  }

  createFence(encoded, decodedChars, rails);
  return encoded.flat(2).join('');
}

function isInThisRow(col, row, rails) {
  // Separate into upward and downward motion
  //   Downward motion occurs when col / (rails - 1) is Even
  //     For downward motion the col is used if
  //       col % rails-1 === row
  //   Upward motion occurs when col / (rails - 1) is Odd
  //     For upward motion the col is used if...
  //        Example: 7 rails
  //         transform cols 11 10 9 8 7 6 into rows 1 2 3 4 5 6
  //         transform cols 23 22 21 20 19 18 into rows 1 2 3 4 5 6
  //             ((rails-1)*2*cycleNum - col) = row
  //              where cycleNum = ((col - (rails - 1)) / (rails - 1) * 2 ) + 1
  // For (rails-1)*2..(rails-1)*3-1 the col is used if row % rails-1 === 0

  let rm1 = rails - 1;

  if (Math.floor(col / rm1) % 2 === 0) {        // on the way down
    return col % rm1 === row;
  } else {                                      // on the way back up
    let cycleNum = Math.floor((col - rm1) / (rm1 * 2)) + 1;
    return (rm1 * 2 * cycleNum) - col === row;
  }
}

function decodeRailCipher(encoded, rails) {
  let decoded = [];
  const encodedChars = encoded.split('')
    .filter(elem => !elem.match(/\s/));
  let encIdx = 0;

  for (let row = 0; row < rails; row += 1) {
    for (let col = 0; col < encodedChars.length; col += 1) {
      if (isInThisRow(col, row, rails)) {
        decoded[col] = encodedChars[encIdx];
        encIdx += 1;
      }
    }
  }
  return decoded.join('');
}

let res = encodeRailCipher('WE ARE DISCOVERED FLEE AT ONCE', 3);
console.log(res);
res = decodeRailCipher('WECRLTEERDSOEEFEAOCAIVDEN', 3);
console.log(res);