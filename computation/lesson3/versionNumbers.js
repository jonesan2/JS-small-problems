// Write a function that takes any two version numbers in this format and compares them, 
// with the result of this comparison showing whether the first is less than, equal to, 
// or greater than the second version:
// 
// If version1 > version2, we should return 1.
// If version1 < version2, we should return -1.
// If version1 === version2, we should return 0.
// If either version number contains characters other than digits and the . character, we should return null.
//
// Test Cases:
// 1) Anything other than a string of numbers and . or a decimal number
//   a) empty string
//   b) empy array
//   c) empty object
//   d) no argument
//   e) string with garbage characters
// 2) integers
// 3) decimals
// 4) integers as strings
// 5) decimals as strings
// 6) three level version strings
// 7) comparing strings of varying levels (1, 2, 3, 4, 5) and types (Number, String)
// 8) leading . (add a preceding 0)
// 9) trailing . (ignore)
//
// Data Structures:
// --String (convert each version input to a string)
// --Array (convert each string version to an array of version numbers to use in comparisons)
//
// Algorithm
// --weed out problematic inputs
// --convert inputs to strings
// --convert strings to arrays
// --compare two arrays one index at a time
//   --return at the soonest difference
//   --if one array ends, return 0 if the other array has all zeros remaining.
//     --otherwise the second array is greater
// --if both arrays end with no difference return zero

function isGoodInput(input) {
  return !!input.match(/^[0-9.]+$/); 
}

function fixEdgeDecimals(input) {
  let chars = input.split('');
  if (chars[0] === '.') { chars.unshift('0'); }
  if (chars[chars.length - 1] === '.') { chars.pop(); }
  return chars.join('');
}

function compareVersions(version1, version2) {
  version1 = String(version1);
  version2 = String(version2);

  if (!isGoodInput(version1) || !isGoodInput(version2)) { return null; } 
   
  version1 = fixEdgeDecimals(version1);
  version2 = fixEdgeDecimals(version2);

  numbers1 = version1.split('.').map(elem => Number(elem));
  numbers2 = version2.split('.').map(elem => Number(elem));

  let i = 0;
  while (i < numbers1.length && i < numbers2.length) {
    if (numbers1[i] > numbers2[i]) { return 1; }
    else if (numbers1[i] < numbers2[i]) { return -1; }
    else { i += 1; }
  }
  if (numbers1.length > i) { 
    while (i < numbers1.length) {
      if (numbers1[i] !== 0) { return 1; }
      else { i += 1; }
    }
    return 0;
  } else if (numbers2.length > i) {
    while (i < numbers2.length) {
      if (numbers2[i] !== 0) { return -1; }
      else { i += 1; }
    }
    return 0;
  } else { return 0; }
  return 0;
}

res = compareVersions('1.0.1', '1.0.0');    // 1
console.log(res);
res = compareVersions('.1.0.1', '0.1.0.1'); // 0
console.log(res);
res = compareVersions('1.0.1.', '1.0.1.');  // 0
console.log(res);
res = compareVersions(1.0, 2.1); // -1
console.log(res);
res = compareVersions(); // null
console.log(res);
res = compareVersions([], {}); // null
console.log(res);
res = compareVersions('1.0.1', 'letters'); // null
console.log(res);
res = compareVersions('21.10.1', '21.11.1'); // -1
console.log(res);
res = compareVersions(23, 9); // 1
console.log(res);
res = compareVersions('1.0.1.0.0', '1.0.1'); // 0
console.log(res);
res = compareVersions('1.0.1', '1.0.1.0.0'); // 0
console.log(res);
res = compareVersions('0.1', '1'); // -1
console.log(res);
res = compareVersions('1', '1.0'); // 0
console.log(res);
res = compareVersions('1.0', '1.1.3'); //-1 
console.log(res);
res = compareVersions('1.1.3', '1.1.4'); // -1
console.log(res);
res = compareVersions('1.1.4', '1.2'); // -1
console.log(res);
res = compareVersions('1.2', '1.2.0.0'); // 0 
console.log(res);
res = compareVersions('1.2.0.0', '1.18.2'); // -1
console.log(res);
res = compareVersions('1.18.2', '13.37'); // -1
console.log(res);
