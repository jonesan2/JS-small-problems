function unshift(arr, item) {
  for (let i = arr.length; i >= 1; i--) {
    arr[i] = arr[i-1];
  }
  arr[0] = item;
  return arr.length;
}

let count = [1, 2, 3];
unshift(count, 0);      // 4
console.log(count);                  // [ 0, 1, 2, 3 ]
