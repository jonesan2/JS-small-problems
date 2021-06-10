function multiplyList(arr1, arr2) {
  return arr1.map((elem, idx) => {
    return elem * arr2[idx];
  });
}

res = multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]
console.log(res);