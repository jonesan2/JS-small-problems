function factorial(n) {
  if (n === 0) { return 1 };
  num = 1;
  for (let i = 1; i <= n; i++) {
    num *= i;
  }
  return num;
}

for (let j = 0; j <= 8; j++) {
  console.log(factorial(j)); 
}
