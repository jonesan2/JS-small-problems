function pop(arr) {
  popped = arr[arr.length - 1];
  arr.length--;
  return popped;
}

let count = [1, 2, 3];
console.log(pop(count));             // 3
console.log(count);                  // [ 1, 2 ]
