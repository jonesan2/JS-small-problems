function findFibonacciIndexByLength(numDigits) {
  let num1 = 1;
  let num2 = 1;
  index = 2;
  while (String(num2).length < numDigits) {
    temp = num2;
    num2 += num1;
    num1 = temp;
    index++;
  } 
  console.log(index);
}

findFibonacciIndexByLength(2);       // 7
findFibonacciIndexByLength(10);      // 45
findFibonacciIndexByLength(16);      // 74
