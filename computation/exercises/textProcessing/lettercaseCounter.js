function letterCaseCount(str) {
  let result = {};
  result.lowercase = (str.match(/[a-z]/g) || []).length;
  result.uppercase = (str.match(/[A-Z]/g) || []).length;
  result.neither = (str.match(/[^a-z]/gi) || []).length;
  return result;
}

res = letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(res);
res = letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(res);
res = letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(res);
res = letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }
console.log(res);