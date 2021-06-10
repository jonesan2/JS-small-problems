function isPrime(num) {
  if (num === 0 || num === 1) return false;
  result = true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) result = false;
  }
  return result;
}

function checkGoldbach(expectedSum) {
  if (expectedSum < 4 || expectedSum % 2 != 0) return null;
  results = [];
  for (let i = 2; i <= expectedSum / 2; i++) {
    if (!isPrime(i)) continue;
    j = expectedSum - i;
    if (!isPrime(j)) continue;
    results.push([i, j]);
  }
  results.forEach(arr => console.log(arr[0], arr[1]));
}

checkGoldbach(3);
checkGoldbach(4);
checkGoldbach(12);
checkGoldbach(100);
