function union(arr1, arr2) {
  let result = [];

  arr1.concat(arr2).forEach(elem => {
    if (!result.includes(elem)) {
      result.push(elem);
    }
  });

  return result;
}

res = union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]
console.log(res);