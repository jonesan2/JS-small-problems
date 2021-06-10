function sum(num) {
  return Number(num.toFixed(0)).toString(10).split('').reduce((acc, elem) => acc + Number(elem), 0);
}

res = sum(23);           // 5
console.log(res);
res = sum(496);          // 19
console.log(res);
res = sum(123456789);    // 45
console.log(res);
