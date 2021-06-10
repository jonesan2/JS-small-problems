"use strict";

// Problem: convert range notation into an array of numbers
// Input: String using complicated range notation
// Output: Array of numbers
//
// Test cases:
// --no input
// --empty String input (return empty array)
// --non-string input (convert to string)
// --non-conforming input (return null)
// --"1, 3, 7, 2, 4, 1" --> 1, 3, 7, 12, 14, 21
// --"1-3, 1-2" --> 1, 2, 3, 11, 12
// --"1:5:2" --> 1, 2, 3, 4, 5, 6, ... 12
// --"104-2" --> 104, 105, ... 112
// --"104-02" --> 104, 105, ... 202
// --"545, 64:11" --> 545, 564, 565, .. 611-
//
// Data Structures:
// --result Array
// --input String
//
// Algorithm:
// --weed out invalid inputs
// --Generate array of characters from input string
// --eliminate spaces
// --convert 2 dots to a single dot
// --merge adjacent digits into a single string element in a new array
// --fill in the missing digits for the later numbers
//   --1, 3, 7, 2, 4, 1  :  add 10 until greater than previous number
//   --104-02 : prepend early digits and add 100
//              until greater than previous number
//   -- 545, 64:11 : same as above
// --fill in the missing numbers between ranges
// --delete all separator characters

function isInputGood(str) {
  if (str === '') {                         // must not be an empty string
    return false;
  } else if (!str.match(/^\d[-:,.0-9]*/)    // only approved chars after digit
    || !str.match(/\d$/)) {                 // must end with digit
    return false;
  } else if (str.match(/^\.\.^\./)) {       // '.' can only occur in pairs
    return false;
  } else {
    return true;
  }
}

function cleanInput(chars) {
  let cleaned = [];
  chars.forEach((char,idx,arr) => {
    if (!(char === '.' && arr[idx + 1] === '.')  // remove first '.' in pair
      && (char !== ' ')) {                       // remove spaces
      cleaned.push(char);
    }
  });

  return cleaned;
}

function groupDigits(clean) {
  let grouped = [];
  let curNum = '';

  clean.forEach(char => {
    if (/[0-9]/.test(char)) {
      curNum += char;             // store digit sequence
    } else {
      grouped.push(curNum);       // capture digit sequence after it ends
      grouped.push(char);         // push the non-digit character as well
      curNum = '';
    }
  });

  grouped.push(curNum);   // push last number (input always ends with digit)
  return grouped;
}

function fillOutNumber(oldNumber, newNumber) {
  let origLength = newNumber.length;

  // prepend missing digits from previous number if too short
  if (newNumber.length < oldNumber.length) {
    newNumber = oldNumber.split('')
      .slice(0, oldNumber.length - newNumber.length)
      .concat(newNumber.split(''))
      .join('');
  }

  // add 10^x until the new number is larger
  // x represents the original length of the new number
  if (newNumber.length === oldNumber.length) {
    while (Number(newNumber) < Number(oldNumber)) {
      newNumber = String(Number(newNumber) + Math.pow(10, origLength));
    }
  }

  return newNumber;
}

function prependDigits(grouped) {
  let fullNumbers = [];
  let oldNumber = 0;
  let newNumber = 0;

  grouped.forEach(elem => {
    if (/[0-9]/.test(elem)) {
      // digit element
      newNumber = fillOutNumber(oldNumber, elem);
      oldNumber = newNumber;
      fullNumbers.push(Number(newNumber));
    } else {
      // non-digit element
      fullNumbers.push(elem);
    }
  });

  return fullNumbers;
}

function fillRanges(fullNumbers) {
  let filledRanges = [];
  fullNumbers.forEach((elem, idx, arr) => {
    if (typeof elem === 'number') {
      filledRanges.push(elem);
    } else if (/[-.:]/.test(elem)) {         // each symbol represents a gap
      let filler = arr[idx - 1] + 1;         // begin at prior elem plus one
      while (filler < arr[idx + 1]) {        // continue until next elem value
        filledRanges.push(filler);
        filler += 1;
      }
    }                                        // ignore commas
  });
  return filledRanges;
}

function rangeExpand(str) {
  // Validate input
  str = String(str);
  if (!isInputGood(str)) {
    return null;
  }

  // Split string into chars
  const chars = str.split('');

  // Convert '..' sequences to single '.' and eliminate spaces
  let cleanedInput = cleanInput(chars);

  // Group adjacent digits into a single string element
  let groupedDigits = groupDigits(cleanedInput);

  // Expand abbreviated numbers to their full form
  let fullNumbers = prependDigits(groupedDigits);

  // Fill in range gaps
  let filledRanges = fillRanges(fullNumbers);

  return filledRanges;
}

let res = rangeExpand("1,3,7,2,4,1"); // 1, 3, 7, 12, 14, 21
console.log(res);
res = rangeExpand("1-3, 1-2"); // 1, 3, 7, 12, 14, 21
console.log(res);
res = rangeExpand("1:5:2"); // 1, 3, 7, 12, 14, 21
console.log(res);
res = rangeExpand("104-2"); // 1, 3, 7, 12, 14, 21
console.log(res);
res = rangeExpand("104-02"); // 1, 3, 7, 12, 14, 21
console.log(res);
res = rangeExpand("545, 64:11"); // 1, 3, 7, 12, 14, 21
console.log(res);
res = rangeExpand("545, 64..11"); // 1, 3, 7, 12, 14, 21
console.log(res);
res = rangeExpand([]); // 1, 3, 7, 12, 14, 21
console.log(res);
res = rangeExpand(); // 1, 3, 7, 12, 14, 21
console.log(res);
