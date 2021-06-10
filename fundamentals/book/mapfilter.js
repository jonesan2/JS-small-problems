function oddLengths(arr) {
  return arr.map(str => str.length).filter(num => num % 2 !== 0);
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]


