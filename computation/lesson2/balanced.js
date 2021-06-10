function isBalanced(str) {
  chars = str.split('');
  pCount = 0
  for (let i = 0; i < chars.length; i += 1) {
    if (chars[i] === '(') {
      pCount += 1; 
    } else if (chars[i] === ')') {
      pCount -= 1;
    };
    if (pCount < 0) { return false }; 
  }
  if (pCount === 0) { return true }
  else { return false };
}

res = isBalanced('What (is) this?');        // true
console.log(res);
res = isBalanced('What is) this?');         // false
console.log(res);
res = isBalanced('What (is this?');         // false
console.log(res);
res = isBalanced('((What) (is this))?');    // true
console.log(res);
res = isBalanced('((What)) (is this))?');   // false
console.log(res);
res = isBalanced('Hey!');                   // true
console.log(res);
res = isBalanced(')Hey!(');                 // false
console.log(res);
res = isBalanced('What ((is))) up(');       // false
console.log(res);