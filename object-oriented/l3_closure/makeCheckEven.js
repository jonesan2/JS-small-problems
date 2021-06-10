let numbers = [1, 2, 3, 4];
function makeCheckEven() {
  // ... implement this function
  return function(number) {
    return number % 2 === 0;
  };
}

let checkEven = makeCheckEven();

res = numbers.filter(checkEven); // [2, 4]
console.log(res);