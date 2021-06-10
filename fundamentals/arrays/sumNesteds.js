function sumNesteds(arr) {
  result = []
  arr.forEach(nestedArr => result.push(nestedArr.reduce((acc, elem) => acc + elem, 0)));
  return result;
}

console.log(sumNesteds([[2, 8, 5], [12, 48, 0], [12]]));  // returns [15, 60, 12]
