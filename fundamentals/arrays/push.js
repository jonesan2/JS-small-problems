function push(arr, item) {
  arr[arr.length] = item;
  return arr.length;
}

let count = [0, 1, 2];
push(count, 3);
console.log(count);
