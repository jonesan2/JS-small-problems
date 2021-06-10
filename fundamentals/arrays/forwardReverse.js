function forwardReverse(arr) {
  arrCopy = [];
  for (let i = 0; i < arr.length; i++) arrCopy[i] = arr[i];
  return arr.concat(arrCopy.reverse());
}

console.log(forwardReverse([1,2,3,4,5]));
