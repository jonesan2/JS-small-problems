"use strict";

function phoneClean(number) {
  const badNumber = '0000000000';

  if (arguments.length === 0 || number === '') {
    return badNumber;
  }

  let numbersOnly = String(number).replace(/[^0-9]/g, '');
  let numsArray = numbersOnly.split('');
  let numNums = numsArray.length;

  if (numNums === 10) {
    return numsArray.join('');
  } else if (numNums === 11) {
    if (numsArray[0] === '1') {
      return numsArray.slice(1).join('');
    } else {
      return badNumber;
    }
  } else {
    return badNumber;
  }
}

let res = phoneClean("123-456-7890");  // 1234567890
console.log(res);
res = phoneClean("1-123-456-7890");  // 1234567890
console.log(res);
res = phoneClean("2-123-456-7890");  // 0000000000
console.log(res);
res = phoneClean("11-123-456-7890");  // 0000000000
console.log(res);
res = phoneClean("23-456-7890");  // 0000000000
console.log(res);
res = phoneClean("123 -(456)-78.90");  // 1234567890
console.log(res);
res = phoneClean("");  // 0000000000
console.log(res);
res = phoneClean();  // 0000000000
console.log(res);