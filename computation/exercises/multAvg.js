function showMultiplicativeAverage(arr) {
  avg = arr.reduce((acc, elem) => acc * elem, 1) / arr.length;
  return avg.toFixed(3);
}

res = showMultiplicativeAverage([3, 5]);                   // "7.500"
console.log(res);
res = showMultiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"
console.log(res);