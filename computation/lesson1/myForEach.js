function myForEach(arr, callback) {
  if (arr.length === 0) { return; }
  else {
    for (let i = 0; i < arr.length; i += 1) {
      callback(arr[i], i, arr);
    }
  } 
}

let min = Infinity;
let getMin = value => (min = value <= min ? value : min);
myForEach([4, 5, 12, 23, 3], getMin);
console.log(min);                        // 3
