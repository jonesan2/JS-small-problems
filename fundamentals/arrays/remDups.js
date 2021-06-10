function remDups(arr) {
  result = [];
  arr.forEach(elem => {
    if (!result.includes(elem)) result.push(elem);
  });
  return result;
}

console.log(remDups([1, 2, 4, 3, 4, 1, 5, 4]));  // returns [1, 2, 4, 3, 5]
