function leadingSubstrings(str) {
  return str.split('').map((elem, idx, arr) => arr.slice(0, idx + 1).join());
}

res = leadingSubstrings('abc');      // ["a", "ab", "abc"]
console.log(res);
res = leadingSubstrings('a');        // ["a"]
console.log(res);
res = leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
console.log(res);
