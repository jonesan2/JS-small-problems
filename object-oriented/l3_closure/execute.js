function execute(func, operand) {
  // ... implement this function
  return func(operand);
}

res = execute(function(number) {
  return number * 2;
}, 10); // 20
console.log(res);

res = execute(function(string) {
  return string.toUpperCase();
}, 'hey there buddy'); // "HEY THERE BUDDY"
console.log(res);