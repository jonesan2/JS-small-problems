const CHARS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function unsignedNumberToString (num) {
  result = '';
  while (num > 0) {
    digit = num % 10;
    num = (num - digit) / 10;
    result = CHARS[digit] + result;
  }
  return result;
}

function numberToString (num) {
  if (num < 0) {
    return ('-' + unsignedNumberToString(-num));
  } else if (num > 0) {
    return ('+' + unsignedNumberToString(num));
  } else return 0;
}

console.log(numberToString(4321));
console.log(numberToString(0));
console.log(numberToString(5000));
console.log(numberToString(-123));
