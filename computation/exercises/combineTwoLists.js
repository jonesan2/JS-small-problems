function interleave(arr1, arr2) {
  return arr1.map((elem, idx) => {
    return [elem, arr2[idx]];
  }).flat();
}

res = interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]
console.log(res);