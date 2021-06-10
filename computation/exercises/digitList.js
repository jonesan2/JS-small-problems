function digitList(int) {
  return String(int).split('').map(Number);
}

res = digitList(12345);       // [1, 2, 3, 4, 5]
console.log(res);
res = digitList(7);           // [7]
console.log(res);
res = digitList(375290);      // [3, 7, 5, 2, 9, 0]
console.log(res);
res = digitList(444);         // [4, 4, 4]
console.log(res);