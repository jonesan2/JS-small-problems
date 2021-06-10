function sumOfSums(arr) {
  return arr.map((elem, idx, array) => array.slice(0, idx + 1).reduce((acc, elem) => acc + elem)).reduce((acc, elem) => acc + elem);
}

res = sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(res);
res = sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(res);
res = sumOfSums([4]);              // 4
console.log(res);
res = sumOfSums([1, 2, 3, 4, 5]);  // 35
console.log(res);
