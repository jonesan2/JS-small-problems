function myFilter(arr, callback) {
  newArr = []
  for (let i = 0; i < arr.length; i += 1) {
    if (callback(arr[i], i, arr)) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

let isPythagoreanTriple = function (triple) {
  return Math.pow(triple.a, 2) + Math.pow(triple.b, 2) === Math.pow(triple.c, 2);
};

result = myFilter([{ a: 3, b: 4,  c: 5 },
          { a: 5, b: 12, c: 13 },
          { a: 1, b: 2,  c: 3 },], isPythagoreanTriple);

console.log(result);
// returns [ { a: 3, b: 4, c: 5 }, { a: 5, b: 12, c: 13 } ]
