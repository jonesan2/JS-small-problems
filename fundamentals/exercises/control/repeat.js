function repeat(str, times) {
  if (typeof times !== 'number' || times < 0) return undefined;
  let result = '';
  for (let i = 1; i <= times; i++) result += str;
  return result;
}

repeat('abc', 1);       // "abc"
repeat('abc', 2);       // "abcabc"
repeat('abc', -1);      // undefined
repeat('abc', 0);       // ""
repeat('abc', 'a');     // undefined
repeat('abc', false);   // undefined
repeat('abc', null);    // undefined
repeat('abc', '  ');    // undefined
