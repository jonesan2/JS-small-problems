function halvsies(arr) {
  let result = [ [], [] ];
  arr.forEach((elem, idx) => {
    if (idx < arr.length / 2) {
      result[0].push(elem);
    } else {
      result[1].push(elem);
    }
  });
  return result;
}

res = halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
console.log(res);
res = halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
console.log(res);
res = halvsies([5]);                // [[5], []]
console.log(res);
res = halvsies([]);                 // [[], []]
console.log(res);