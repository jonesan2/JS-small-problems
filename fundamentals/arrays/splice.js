function splice(arr, start, num) {
  result = [];
  for (let i = start; i < start + num; i++) {
    result[i - start] = arr[i];
  } 

  for (let j = start + num; j < arr.length; j++) {
    arr[j - num] = arr[j];
  }

  arr.length = arr.length - num;
  return result;
}

let count = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(splice(count, 2, 5));                   // [ 3, 4, 5, 6, 7 ]
console.log(count);                                 // [ 1, 2, 8 ]
