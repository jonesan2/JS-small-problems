function makeListTransformer(func) {
  // ... implement this function
  return function(arr) {
    return arr.map(func);
  };
}

let timesTwo = makeListTransformer(function(number) {
  return number * 2;
});

res = timesTwo([1, 2, 3, 4]); // [2, 4, 6, 8]
console.log(res);