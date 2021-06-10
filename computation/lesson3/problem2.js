"use strict";

// Problem: Check if a number is Luhn valide
// Input: string
// Output: boolean
//
// Test cases:
// --assume string input
// --no input
// --string input with non-digits (ignore non-digits)
// --happy path
// --invalid number
//
// Data Structures:
// --String input
// --array of digits as numbers
//
// Algorithm
// --weed out no input
// --convert non-string input to string
// --weed out non-digits in string input
// --convert to array of number digits
// --reverse array to make counting easier
// --map to doubled (-9) digits
// --sum array
// --check if modulo 10 is equal to zero

function doubleNine(num) {
  if (num < 5) {
    return num * 2;
  } else {
    return (num * 2) - 9;
  }
}

function isLuhn(str) {
  if (arguments.length === 0) {
    return false;
  }

  let digitsOnly = String(str).replace(/\D/g, '');
  let checkSum = digitsOnly.split('')
    .map(Number)
    .reverse()
    .map((num, idx) => {
      if (idx % 2 === 0) {
        return num;
      } else {
        return doubleNine(num);
      }
    })
    .reduce((acc, val) => acc + val, 0);
  return (checkSum % 10 === 0);
}

let res = isLuhn('2323 2005 7766 3554');
console.log(res); // true
res = isLuhn('3323 2005 7766 3554');
console.log(res); // false
res = isLuhn('8763');
console.log(res); // true