function mysteryMath(str) {
  return str.replace(/[+\-*\/]/, '?');
}

res = mysteryMath('4 + 3 - 5 = 2');
console.log(res);
// -> '4 ? 3 - 5 = 2'

res = mysteryMath('(4 * 3 + 2) / 7 - 1 = 1');
console.log(res);
// -> '(4 ? 3 + 2) / 7 - 1 = 1']
