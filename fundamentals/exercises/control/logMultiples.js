function logMultiples(number) {
  results = []
  for (let i = number * 1; i > 0 && i <= 100; i += 2 * number) {
    if (i % 2 != 0) results.unshift(i); 
  }
  results.forEach(num => console.log(num));
}

logMultiples(17);
logMultiples(21);
logMultiples(0);
logMultiples(100);
logMultiples(1);
