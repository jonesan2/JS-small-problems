function leadingSubstrings(str) {
  return str.split('').map((elem, idx, arr) => arr.slice(0, idx + 1).join(''));
}

function substrings(str) {
  return str.split('').map((elem, idx, arr) => leadingSubstrings(arr.slice(idx, arr.length).join(''))).flat();
}

console.log(substrings('abcde'));

// returns
/*
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]
*/
