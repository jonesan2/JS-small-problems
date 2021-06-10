function sum(a, b, c) {
  return a + b + c;
}

function average(arr) {
  total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total / arr.length;
}

console.log(average([3, 5, 8]));
