function gcd (int1, int2) {
  let divisor = int1 < int2 ? int1 : int2;
  while (divisor > 0) {
    if (int1 % divisor === 0 && int2 % divisor === 0) break;
    divisor--; 
  }
  return divisor;
}

console.log(gcd(12, 4));
console.log(gcd(15, 10));
console.log(gcd(9, 2));
