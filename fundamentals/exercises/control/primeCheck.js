function primeCheck(num) {
  if (num === 0 || num === 1) return false;
  isPrime = true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) isPrime = false;
  }
  return isPrime;
}
    
console.log(primeCheck(1));   // false
console.log(primeCheck(2));   // true
console.log(primeCheck(3));   // true
console.log(primeCheck(43));  // true
console.log(primeCheck(55));  // false
console.log(primeCheck(0));   // false
