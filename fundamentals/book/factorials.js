function times(number1, number2) {
  let result = number1 * number2;
  console.log(result);
  return result;
}

times(5, times(4, times(3, times(2, times(1, 1)))));
