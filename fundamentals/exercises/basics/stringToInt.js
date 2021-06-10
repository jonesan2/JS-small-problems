let stringToInteger = function strToInt (str) {
  hash = { 0:0, 1:1, 2:2, 3:3, 4:4, 5:5, 6:6, 7:7, 8:8, 9:9 };
  chars = str.split('');
  result = 0;
  place = 1;
  while (chars.length !== 0) {
    result += hash[chars.pop()] * place; 
    place *= 10;
  }
  return result;
}

console.log(stringToInteger('4321'));
console.log(stringToInteger('570'));

