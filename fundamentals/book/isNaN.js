function isNotANumber(val) {
  if (typeof val === 'number' && String(val) === 'NaN') return true;
  else return false;
}

console.log(isNotANumber(NaN));
console.log(isNotANumber('NaN'));
console.log(isNotANumber(0));
console.log(isNotANumber(1));
console.log(isNotANumber(-10));

