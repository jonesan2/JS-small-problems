function sumOfSquares(nums) {
  return nums.reduce((acc, elem) => acc + elem * elem, 0);
}

let numbers = [3, 5, 7];
console.log(sumOfSquares(numbers)); // => 83

