function leadingSubstrings(str) {
  return str.split('').map((elem, idx, arr) => arr.slice(0, idx + 1).join(''));
}

function substrings(str) {
  return str.split('').map((elem, idx, arr) => leadingSubstrings(arr.slice(idx, arr.length).join(''))).flat();
}

function isPalindrome(str) {
  return str === str.split('').reverse().join('') && str.length > 1;
}

function palindromes(str) {
  return substrings(str).filter(elem => isPalindrome(elem));
}

console.log(isPalindrome('madam'));
res = palindromes('abcd');       // []
console.log(res);
res = palindromes('madam');      // [ "madam", "ada" ]
console.log(res);

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
/*
[ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
  "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
  "-madam-", "madam", "ada", "oo" ]
*/
console.log(palindromes('knitting cassettes'));
// returns
/*
[ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
*/
