function shift(arr) {
  shifted = arr[0];
  for (let i = 1; i < arr.length; i++) {
    arr[i-1] = arr[i];
  }
  arr.length--;
  return shifted;
}

let count = [1, 2, 3];
console.log(shift(count));           // 1
console.log(count);                  // [ 2, 3 ]
