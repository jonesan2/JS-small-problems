function multiplyAllPairs(arr1, arr2) {
  let productArray = [];
  
  arr1.forEach(elem1 => {
    arr2.forEach(elem2 => productArray.push(elem1 * elem2));
  });

  return productArray.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]
