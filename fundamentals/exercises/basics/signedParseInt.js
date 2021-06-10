let stringToInteger = function strToInt (str) {
  let hash = { 0:0, 1:1, 2:2, 3:3, 4:4, 5:5, 6:6, 7:7, 8:8, 9:9 };
  let chars = str.split('');
  let result = 0;
  let place = 1;
  let sign = 1; 
  if (chars[0] === '-') sign = -1;
  if (chars[0] === '-' || chars[0] === '+') chars.shift();

  while (chars.length !== 0) {
    result += hash[chars.pop()] * place; 
    place *= 10;
  }
  return result * sign;
}

console.log(stringToInteger('4321'));
console.log(stringToInteger('-570'));
console.log(stringToInteger('+100'));

