function isUppercase(str) {
  return !!str.match(/^[^a-z]*$/); 
  // could also use !/[a-z]/.test(str);
}

res = isUppercase('t');               // false
console.log(res);
res = isUppercase('T');               // true
console.log(res);
res = isUppercase('Four Score');      // false
console.log(res);
res = isUppercase('FOUR SCORE');      // true
console.log(res);
res = isUppercase('4SCORE!');         // true
console.log(res);
res = isUppercase('');                // true
console.log(res);
